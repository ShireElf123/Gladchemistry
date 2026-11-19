/**
 * POST /api/order — accepts a real order.
 *
 * Flow:
 *   1. reject non-POST
 *   2. validate the payload (shared rules from src/lib/order.ts)
 *   3. re-price every line from the catalogue — client prices are ignored
 *   4. email the order to the shop inbox via the configured transport
 *   5. return 201 { ok: true, reference, total } ONLY after step 4 succeeded
 *
 * Any failure returns a non-2xx status and { ok: false }. The browser shows a
 * confirmation only on { ok: true }, so a misconfigured deployment produces a
 * visible error with a mail/phone fallback — never a fake "Order Confirmed".
 */
import { priceLines } from './_catalogue.ts';
import {
  clientIp,
  mailConfigured,
  parseBody,
  recipientFor,
  rejectMethod,
  sendMail,
  throttled,
} from './_mail.ts';
import type { RequestLike, ResponseLike } from './_mail.ts';
import {
  deliveryLabel,
  formatRand,
  hasErrors,
  priceOrder,
  roundCents,
  validateOrder,
} from '../src/lib/order.ts';
import type { Fulfilment, OrderInput, PricedOrder } from '../src/lib/order.ts';

const str = (value: unknown): string => (typeof value === 'string' ? value : '');

const orderReference = (): string => {
  const stamp = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const noise = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `GC-${stamp}-${noise}`;
};

function orderEmailBody(order: PricedOrder, input: OrderInput, reference: string): string {
  const address =
    input.fulfilment === 'delivery'
      ? `Delivery  —\n${input.address ?? ''}`
      : 'Collection — Palm Springs Shopping Mall, Shop 19, Springs, 1559';

  const lines = order.lines
    .map(
      (l) =>
        `  ${l.quantity} x ${l.name} (${l.size}) — ${formatRand(l.unitPrice)} ea = ${formatRand(
          l.lineTotal
        )}`
    )
    .join('\n');

  return [
    `New order ${reference}`,
    '',
    'CUSTOMER',
    `  Name    ${input.customerName}`,
    `  Phone   ${input.contactNumber}`,
    `  Email   ${input.email || '(not supplied)'}`,
    `  Method  ${address}`,
    '',
    'ITEMS',
    lines,
    '',
    'TOTALS',
    `  Subtotal     ${formatRand(order.subtotal)}`,
    `  Delivery     ${deliveryLabel(order, input.fulfilment)}`,
    order.courierQuoted
      ? `  DUE ON CONFIRMATION  ${formatRand(order.total)} of goods + courier fee the shop quotes`
      : `  TOTAL        ${formatRand(order.total)}`,
    '',
    'NOTES',
    input.notes ? `  ${input.notes}` : '  (none)',
    '',
    `Received ${new Date().toISOString()}`,
  ].join('\n');
}

export default async function handler(req: RequestLike, res: ResponseLike): Promise<void> {
  // A read-only capability probe. The shop front uses it to decide whether to
  // offer the online form at all, so a customer is never walked through a
  // checkout this deployment cannot actually deliver.
  if (req.method === 'GET') {
    res.status(200).json({ ok: true, onlineOrdering: mailConfigured() });
    return;
  }

  if (rejectMethod(req, res)) return;

  const ip = clientIp(req);
  if (throttled(`order:${ip}`)) {
    res.status(429).json({
      ok: false,
      error: 'rate_limited',
      message: 'Too many attempts in a minute. Please call 073 719 0821.',
    });
    return;
  }

  const body = parseBody(req);

  const input: OrderInput = {
    customerName: str(body.customerName),
    contactNumber: str(body.contactNumber),
    email: str(body.email),
    fulfilment: str(body.fulfilment) as Fulfilment,
    address: str(body.address),
    notes: str(body.notes),
    lines: Array.isArray(body.lines)
      ? (body.lines as { productId?: unknown; quantity?: unknown }[]).map((line) => ({
          productId: str(line?.productId),
          quantity: Number(line?.quantity),
        }))
      : [],
  };

  const errors = validateOrder(input);
  if (hasErrors(errors)) {
    res.status(422).json({
      ok: false,
      error: 'validation_failed',
      message: 'Please check the highlighted fields.',
      fields: errors,
    });
    return;
  }

  const priced = priceLines(input.lines);
  if (!priced.ok) {
    res.status(409).json({
      ok: false,
      error: 'catalogue_changed',
      message:
        'Some items in your basket are no longer available. Please refresh the shop and try again.',
      unknownIds: priced.unknownIds,
    });
    return;
  }

  const order = priceOrder(priced.lines, input.fulfilment);
  const reference = orderReference();

  if (!mailConfigured()) {
    // Fail loudly. The client turns this into a fallback panel with the order
    // pre-written into a mail client plus the phone number.
    res.status(503).json({
      ok: false,
      error: 'not_configured',
      message:
        'Online ordering is not switched on for this deployment yet. Your cart has been kept — please send it using the email or phone option below.',
      total: roundCents(order.total),
      subtotal: roundCents(order.subtotal),
    });
    return;
  }

  const result = await sendMail({
    to: recipientFor('order'),
    subject: `Order ${reference} — ${formatRand(order.total)} — ${input.customerName}`,
    text: orderEmailBody(order, input, reference),
    replyTo: input.email || undefined,
  });

  if (!result.ok) {
    res.status(502).json({
      ok: false,
      error: result.reason === 'not-configured' ? 'not_configured' : 'send_failed',
      message:
        'We could not hand your order to the shop just now. Nothing has been charged — please retry, or email/phone us and we will take it down manually.',
      detail: result.detail,
    });
    return;
  }

  res.status(201).json({
    ok: true,
    reference,
    provider: result.provider,
    subtotal: roundCents(order.subtotal),
    deliveryFee: roundCents(order.deliveryFee),
    total: roundCents(order.total),
    courierQuoted: order.courierQuoted,
    itemCount: order.itemCount,
  });
}

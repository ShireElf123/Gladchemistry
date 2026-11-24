/**
 * Client side of order/contact submission.
 *
 * Rules this file exists to enforce:
 *  - a success state is only ever produced by a 2xx response with { ok: true }
 *  - a failure produces a real, usable fallback (mail client or phone), never a
 *    retry-only dead end
 *  - if the endpoint is missing entirely (static preview, dev server without
 *    functions) the UI says so plainly instead of pretending
 */
import type { FieldErrors, OrderInput, PricedOrder } from './order';
import { formatRand } from './order';

export const SHOP_PHONE = '073 719 0821';
export const SHOP_PHONE_TEL = '+27737190821';
export const SHOP_EMAIL = 'info@gladchemistry.com';
export const SHOP_WHATSAPP = 'https://wa.me/27737190821';

export interface SubmitSuccess {
  ok: true;
  reference?: string;
}

export interface SubmitFailure {
  ok: false;
  /** Short, human, and true. Shown at the top of the failure panel. */
  message: string;
  /** Field-level messages keyed like the form. */
  fields?: FieldErrors;
  /** True when a retry is worth offering (network blip, 5xx). */
  retryable: boolean;
  /** True when the endpoint is not configured at all on this deployment. */
  notConfigured: boolean;
  /** Optional technical detail, only rendered behind a disclosure. */
  detail?: string;
}

export type SubmitResult = SubmitSuccess | SubmitFailure;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

async function postJson(path: string, payload: unknown): Promise<SubmitResult> {
  let res: Response;
  try {
    res = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    return {
      ok: false,
      message:
        'We could not reach the shop — your connection may have dropped. Nothing was sent, so nothing is lost.',
      retryable: true,
      notConfigured: false,
    };
  }

  const raw = await res.text();
  let body: unknown = null;
  try {
    body = raw ? JSON.parse(raw) : null;
  } catch {
    body = null;
  }

  // A static host with no functions answers the SPA shell, or 404 — either way
  // there is no JSON `ok`, so this is reported as "not available", not success.
  const json = isRecord(body) ? body : null;

  if (!json) {
    return {
      ok: false,
      message:
        'The ordering service is not responding on this deployment (it returned no confirmation). Nothing was sent.',
      retryable: res.ok,
      notConfigured: res.status === 404 || res.ok,
      detail: `HTTP ${res.status} from ${path}`,
    };
  }

  if (res.ok && json.ok === true) {
    return {
      ok: true,
      reference: typeof json.reference === 'string' ? json.reference : undefined,
    };
  }

  const detail = typeof json.detail === 'string' ? json.detail : undefined;
  const errorCode = typeof json.error === 'string' ? json.error : '';

  if (errorCode === 'not_configured') {
    return {
      ok: false,
      message:
        typeof json.message === 'string'
          ? json.message
          : 'Online submission is not switched on for this deployment yet.',
      retryable: false,
      notConfigured: true,
      detail,
    };
  }

  if (errorCode === 'validation_failed' && isRecord(json.fields)) {
    const fields: FieldErrors = {};
    for (const [key, value] of Object.entries(json.fields)) {
      if (typeof value === 'string') fields[key] = value;
    }
    return {
      ok: false,
      message:
        typeof json.message === 'string' ? json.message : 'Please check the highlighted fields.',
      fields,
      retryable: true,
      notConfigured: false,
    };
  }

  if (errorCode === 'catalogue_changed') {
    return {
      ok: false,
      message:
        typeof json.message === 'string'
          ? json.message
          : 'Some items are no longer available. Please refresh the shop.',
      retryable: false,
      notConfigured: false,
    };
  }

  return {
    ok: false,
    message:
      typeof json.message === 'string'
        ? json.message
        : `The shop did not accept that (HTTP ${res.status}). Nothing was charged.`,
    retryable: res.status >= 500 || res.status === 429,
    notConfigured: false,
    detail,
  };
}

export const submitOrder = (input: OrderInput): Promise<SubmitResult> =>
  postJson('/api/order', input);

export interface ContactInput {
  name: string;
  email: string;
  phone: string;
  brand: string;
  type: 'retail' | 'wholesale';
  message: string;
}

export const submitContact = (input: ContactInput): Promise<SubmitResult> =>
  postJson('/api/contact', input);

/* --------------------------------------------------- availability probe */

/**
 * Asks the deployment whether it can actually take orders.
 *
 * Deliberately separate from the order itself. Because the probe returns a JSON
 * object rather than a page, a host that only serves the static site answers
 * with the SPA shell and we correctly conclude "not available".
 *
 *  - `'live'`       the endpoint exists and has a working mail transport
 *  - `'offline'`    the endpoint exists but this deployment is not configured
 *  - `'unavailable'` no endpoint at all (static host / dev server without api)
 */
export type Availability = 'live' | 'offline' | 'unavailable';

export async function checkOrderAvailability(): Promise<Availability> {
  return checkAvailability('/api/order', 'onlineOrdering');
}

export async function checkContactAvailability(): Promise<Availability> {
  return checkAvailability('/api/contact', 'onlineMessaging');
}

async function checkAvailability(
  path: string,
  flag: string
): Promise<Availability> {
  try {
    const res = await fetch(path, { method: 'GET', headers: { Accept: 'application/json' } });
    const raw = await res.text();
    let body: unknown = null;
    try {
      body = JSON.parse(raw);
    } catch {
      body = null;
    }
    if (!isRecord(body) || body.ok !== true) return 'unavailable';
    return body[flag] === true ? 'live' : 'offline';
  } catch {
    return 'unavailable';
  }
}

/* ---------------------------------------------------- real handoff paths */

/** A mail-client link pre-filled with the whole order. Always works. */
export function orderMailto(order: PricedOrder, input: OrderInput): string {
  const lines = order.lines
    .map((l) => `${l.quantity} x ${l.name} (${l.size}) — ${formatRand(l.lineTotal)}`)
    .join('\n');

  const body = [
    'Order request for Gladchemistry',
    '',
    `Name: ${input.customerName}`,
    `Phone: ${input.contactNumber}`,
    `Email: ${input.email || '(none)'}`,
    `Method: ${input.fulfilment === 'delivery' ? 'Delivery' : 'Collection'}`,
    ...(input.fulfilment === 'delivery' ? [`Address: ${input.address ?? ''}`] : []),
    '',
    'Items:',
    lines,
    '',
    `Subtotal: ${formatRand(order.subtotal)}`,
    `Delivery: ${formatRand(order.deliveryFee)}`,
    `Total: ${formatRand(order.total)}`,
    '',
    `Notes: ${input.notes || '(none)'}`,
  ].join('\n');

  return `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(
    `Order request — ${input.customerName}`
  )}&body=${encodeURIComponent(body)}`;
}

export function contactMailto(input: ContactInput): string {
  const body = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || '(none)'}`,
    `Brand: ${input.brand}`,
    `Enquiry: ${input.type === 'wholesale' ? 'Wholesale & bulk' : 'Retail / general'}`,
    '',
    input.message,
  ].join('\n');

  return `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(
    `${input.type === 'wholesale' ? 'Wholesale' : 'Enquiry'} — ${input.name}`
  )}&body=${encodeURIComponent(body)}`;
}

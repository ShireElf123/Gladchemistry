/**
 * POST /api/contact — accepts a real enquiry.
 *
 * Same discipline as /api/order: validate, deliver, and only then report
 * success. Without a configured transport this returns 503 and the customer
 * gets a genuine mail-client / phone route instead of a false "Message
 * Received".
 */
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

const str = (value: unknown): string => (typeof value === 'string' ? value : '').trim();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^(?:\+27\d{9}|0\d{9})$/;

const BRANDS = [
  'All 3 Brands',
  'Gladchemistry (Organic Personal Care)',
  'Felis be Glad (Fine Fragrances & Diffusers)',
  'Bubbles Detergents (Home & Car Care)',
];

const TYPES = ['retail', 'wholesale'] as const;

export default async function handler(req: RequestLike, res: ResponseLike): Promise<void> {
  // Read-only capability probe — see api/order.ts.
  if (req.method === 'GET') {
    res.status(200).json({ ok: true, onlineMessaging: mailConfigured() });
    return;
  }

  if (rejectMethod(req, res)) return;

  const ip = clientIp(req);
  if (throttled(`contact:${ip}`)) {
    res.status(429).json({
      ok: false,
      error: 'rate_limited',
      message: 'Too many messages in a minute. Please call 073 719 0821 instead.',
    });
    return;
  }

  const body = parseBody(req);

  const fields: Record<string, string> = {};
  const errors: Record<string, string> = {};

  const name = str(body.name);
  if (name.length < 2) errors.name = 'Please enter your full name.';
  else if (name.length > 80) errors.name = 'That name is too long.';

  const email = str(body.email);
  if (!email) errors.email = 'An email address is required.';
  else if (!EMAIL_RE.test(email)) errors.email = 'That email address looks incomplete.';

  const phoneRaw = str(body.phone);
  const phone = phoneRaw.replace(/[\s()\-.]/g, '');
  if (phone && !PHONE_RE.test(phone)) errors.phone = 'Use a 10-digit SA number, or leave it blank.';

  const message = str(body.message);
  if (message.length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';
  else if (message.length > 4000) errors.message = 'Please keep messages under 4000 characters.';

  const brand = str(body.brand) || BRANDS[0];
  if (!BRANDS.includes(brand)) {
    res.status(422).json({
      ok: false,
      error: 'validation_failed',
      message: 'Please choose a brand from the list.',
      fields: { brand: 'Unrecognised brand.' },
    });
    return;
  }

  const type = str(body.type) || 'retail';
  if (!TYPES.includes(type as (typeof TYPES)[number])) {
    res.status(422).json({
      ok: false,
      error: 'validation_failed',
      message: 'Please choose retail or wholesale.',
      fields: { type: 'Unrecognised enquiry type.' },
    });
    return;
  }

  if (Object.keys(errors).length > 0) {
    res.status(422).json({
      ok: false,
      error: 'validation_failed',
      message: 'Please check the highlighted fields.',
      fields: errors,
    });
    return;
  }

  fields.name = name;
  fields.email = email;
  fields.phone = phoneRaw || '(not supplied)';
  fields.brand = brand;
  fields.type = type;
  fields.message = message;

  if (!mailConfigured()) {
    res.status(503).json({
      ok: false,
      error: 'not_configured',
      message:
        'Online messaging is not switched on for this deployment yet. Please send your message with the email or phone option below — nothing was lost.',
    });
    return;
  }

  const text = [
    `New ${type} enquiry — ${name}`,
    '',
    `  Name   ${fields.name}`,
    `  Email  ${fields.email}`,
    `  Phone  ${fields.phone}`,
    `  Brand  ${fields.brand}`,
    `  Type   ${type}`,
    '',
    'MESSAGE',
    message,
    '',
    `Received ${new Date().toISOString()}`,
  ].join('\n');

  const result = await sendMail({
    to: recipientFor('contact'),
    subject: `${type === 'wholesale' ? 'Wholesale' : 'Enquiry'} — ${name} — ${brand}`,
    text,
    replyTo: email,
  });

  if (!result.ok) {
    res.status(502).json({
      ok: false,
      error: result.reason === 'not-configured' ? 'not_configured' : 'send_failed',
      message:
        'We could not deliver your message just now. Please retry, or use the email/phone option below so it is not lost.',
      detail: result.detail,
    });
    return;
  }

  res.status(201).json({ ok: true, provider: result.provider, receivedAt: new Date().toISOString() });
}

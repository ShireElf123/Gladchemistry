/**
 * Outbound mail for the order and contact endpoints.
 *
 * There is deliberately no fallback that pretends to have sent something. If
 * no mail transport is configured, `sendMail` returns a "not configured"
 * result and the endpoint answers 503 — the customer is told the message did
 * not go through, and is offered a real mail-client and phone route instead.
 *
 * Configure by setting these in Vercel → Project → Settings → Environment
 * Variables, then redeploying:
 *
 *   RESEND_API_KEY     re_...        (from resend.com)
 *   ORDER_FROM_EMAIL   verified sender, e.g. orders@gladchemistry.com
 *   ORDER_TO_EMAIL     inbox that receives orders  (default info@gladchemistry.com)
 *   CONTACT_TO_EMAIL   inbox that receives messages (default ORDER_TO_EMAIL)
 */

export interface MailMessage {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}

export type MailResult =
  | { ok: true; provider: string }
  | { ok: false; reason: 'not-configured' | 'rejected'; detail: string };

const env = (key: string): string => (process.env[key] ?? '').trim();

export const mailConfigured = (): boolean => env('RESEND_API_KEY') !== '' && env('ORDER_FROM_EMAIL') !== '';

export const recipientFor = (kind: 'order' | 'contact'): string =>
  kind === 'order'
    ? env('ORDER_TO_EMAIL') || env('CONTACT_TO_EMAIL') || 'info@gladchemistry.com'
    : env('CONTACT_TO_EMAIL') || env('ORDER_TO_EMAIL') || 'info@gladchemistry.com';

export async function sendMail(message: MailMessage): Promise<MailResult> {
  const apiKey = env('RESEND_API_KEY');
  const from = env('ORDER_FROM_EMAIL');

  if (!apiKey || !from) {
    return {
      ok: false,
      reason: 'not-configured',
      detail:
        'No mail transport is configured on this deployment (RESEND_API_KEY / ORDER_FROM_EMAIL are unset).',
    };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      return {
        ok: false,
        reason: 'rejected',
        detail: `Mail provider rejected the message (${res.status}): ${body.slice(0, 300)}`,
      };
    }

    return { ok: true, provider: 'resend' };
  } catch (error) {
    return {
      ok: false,
      reason: 'rejected',
      detail: `Mail provider unreachable: ${(error as Error).message}`,
    };
  }
}

/* ------------------------------------------------------------ helpers */

export interface RequestLike {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
}

export interface ResponseLike {
  status: (code: number) => ResponseLike;
  json: (body: unknown) => void;
  setHeader: (key: string, value: string) => void;
  end: () => void;
}

export const header = (req: RequestLike, name: string): string => {
  const raw = req.headers[name] ?? req.headers[name.toLowerCase()];
  return Array.isArray(raw) ? (raw[0] ?? '') : (raw ?? '');
};

export const parseBody = (req: RequestLike): Record<string, unknown> => {
  if (req.body && typeof req.body === 'object') return req.body as Record<string, unknown>;
  if (typeof req.body === 'string') {
    try {
      const parsed: unknown = JSON.parse(req.body);
      return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : {};
    } catch {
      return {};
    }
  }
  return {};
};

export const rejectMethod = (req: RequestLike, res: ResponseLike): boolean => {
  if (req.method === 'POST') return false;
  res.setHeader('Allow', 'POST');
  res.status(405).json({ ok: false, error: 'method_not_allowed' });
  return true;
};

/**
 * Very small in-memory throttle. Serverless instances are short-lived, so this
 * is a speed bump against casual form spam, not a security boundary.
 */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 6;

export const throttled = (key: string): boolean => {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
};

export const clientIp = (req: RequestLike): string =>
  header(req, 'x-forwarded-for').split(',')[0]?.trim() || 'unknown';

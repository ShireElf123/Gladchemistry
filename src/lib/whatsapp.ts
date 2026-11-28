/**
 * One place for the shop's number, and one rule for how we hand a message
 * to WhatsApp.
 *
 * THE BUG THIS FILE EXISTS TO KILL
 * --------------------------------
 * Checkout used to call `window.open('https://wa.me/…', '_blank')`. That is a
 * *scripted* popup, and a scripted popup is a request the browser is allowed
 * to refuse — popup blockers, extensions, and above all the in-app browsers
 * inside Instagram, Facebook, TikTok and WhatsApp itself, which is where most
 * customers tap a shop link. When they refuse it, `window.open` returns null
 * and nothing happens: no error, no navigation, no message. The drawer still
 * flipped to "Order sent on WhatsApp", so the customer was told the order had
 * gone and the shop never heard a word.
 *
 * Her own phone works because she opens WhatsApp directly or from the price
 * list, whose link is a plain <a href>. A real anchor is a user-initiated
 * navigation, not a popup, so nothing is permitted to block it.
 *
 * So: never `window.open` for this. Render an `<a>` with the href on it, and
 * let the browser do what links do. `waLink()` builds the href;
 * `openWhatsApp()` is the only sanctioned fallback, used for the rare control
 * that cannot be an anchor.
 */

/** The shop's own published number: +27 73 719 0821, digits only for wa.me. */
export const SHOP_WHATSAPP = '27737190821';

/** As she writes it. Used for display only, never inside a URL. */
export const SHOP_WHATSAPP_DISPLAY = '+27 73 719 0821';

/** For dialling on a phone. */
export const SHOP_TEL = '+27737190821';

export const SHOP_EMAIL = 'info@gladchemistry.com';

/**
 * Build the click-to-chat href for a message.
 *
 * `encodeURIComponent` is what keeps a multi-line order intact — an
 * unencoded newline or `&` truncates the message at the first one.
 */
export const waLink = (message?: string): string =>
  message && message.length > 0
    ? `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${SHOP_WHATSAPP}`;

/**
 * Last-resort handoff for a control that genuinely cannot be an anchor.
 *
 * Navigating the current tab is always allowed, so it is the fallback when a
 * popup is refused — the shop page is replaced by WhatsApp, and Back returns
 * the cart, which still holds its items.
 */
export const openWhatsApp = (message?: string): void => {
  const href = waLink(message);
  const opened =
    typeof window !== 'undefined'
      ? window.open(href, '_blank', 'noopener,noreferrer')
      : null;
  // With `noopener` a *successful* popup also returns null, so the return
  // value cannot be trusted either way. Only fall back when the window is
  // demonstrably still here and nothing was opened — i.e. never leave the
  // customer staring at a page that did not move.
  if (!opened && typeof window !== 'undefined') {
    window.location.href = href;
  }
};

export const mailLink = (subject: string, body: string): string =>
  `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

/**
 * Why a new tab, on every screen size.
 *
 * A `wa.me` href is a real URL: opening it in the same tab unloads the shop,
 * and the cart lives in React state, so coming Back would land the customer on
 * an empty cart. A new tab leaves the order sitting behind WhatsApp, ready if
 * the message needs to be re-sent.
 *
 * `target="_blank"` on a real anchor is a user-initiated navigation, not a
 * scripted popup, so blockers and in-app browsers are not entitled to refuse
 * it. That is precisely the difference from the `window.open` call this
 * replaces.
 */
export const WA_TARGET = '_blank' as const;

/**
 * Shop contact details — a single source of truth.
 *
 * The site is a catalogue, not a checkout: every call to action leads to a
 * WhatsApp or phone conversation with the shop. Keeping the number in one place
 * means a change never half-lands across a dozen components.
 */

export const SHOP = {
  name: 'Gladchemistry Products',
  phoneDisplay: '073 719 0821',
  /** E.164, as WhatsApp deep links require. */
  whatsapp: '27737190821',
  email: 'info@gladchemistry.com',
  address: 'Palm Springs Shopping Mall, Shop 19, Springs, 1559',
  hours: 'Mon–Sat · 08:00–17:00',
} as const;

/** Build a wa.me link with an optional pre-filled message. */
export const waLink = (message?: string): string => {
  const base = `https://wa.me/${SHOP.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/**
 * Enquiry message for one product. Deliberately plain: the shop reads these on
 * a phone, and the catalogue number lets them price wholesale quickly.
 */
export const productEnquiry = (name: string, size: string, price: number): string =>
  `Hello Gladchemistry — I'd like to order ${name} (${size}) listed at R${price.toFixed(0)}. Is it in stock?`;

export const telLink = `tel:+${SHOP.whatsapp}`;

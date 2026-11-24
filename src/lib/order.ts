/**
 * Order domain — shared by the browser and the serverless endpoints.
 *
 * The client never decides what a product costs. It sends product ids and
 * quantities; `api/order.ts` re-prices the whole basket from the catalogue and
 * rejects anything that disagrees. This module exists so both sides agree on
 * the shape of an order, the delivery rule and the validation messages.
 */

/** Free delivery above this basket value. Also stated in the site banner. */
export const FREE_DELIVERY_FROM = 500;

/**
 * Flat nationwide courier fee below the free-delivery threshold.
 *
 * DELIBERATELY NULL. Gladchemistry has not published a courier tariff, and this
 * build must not invent one: charging an invented number would be a price we
 * made up. So below the free-delivery threshold the fee is *quoted on
 * confirmation* instead of guessed.
 *
 * The shop's own published rule — "Free delivery over R500", which is in the
 * site banner — is honoured exactly. Set this to a real figure only once a
 * tariff is confirmed; every surface (drawer, order email, totals) picks it up
 * automatically with no other change.
 */
export const DELIVERY_FEE: number | null = null;

/** True when a real fee exists and would be applied to this basket. */
export const deliveryFeeFor = (subtotal: number, fulfilment: Fulfilment): number => {
  if (fulfilment === 'collection') return 0;
  if (subtotal >= FREE_DELIVERY_FROM || subtotal === 0) return 0;
  return DELIVERY_FEE ?? 0;
};

export type Fulfilment = 'delivery' | 'collection';

export interface OrderLineInput {
  productId: string;
  quantity: number;
}

export interface OrderInput {
  customerName: string;
  contactNumber: string;
  email?: string;
  fulfilment: Fulfilment;
  address?: string;
  notes?: string;
  /** Quantity-of-record only. Prices sent by the client are never trusted. */
  lines: OrderLineInput[];
}

export interface PricedLine {
  productId: string;
  name: string;
  size: string;
  brand: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

export interface PricedOrder {
  lines: PricedLine[];
  itemCount: number;
  subtotal: number;
  /** Rand amount actually charged for delivery (0 for collection / free). */
  deliveryFee: number;
  /**
   * True when delivery is chargeable but no tariff is published, so the shop
   * quotes it on confirmation. Never render a total as final in this state.
   */
  courierQuoted: boolean;
  /** Subtotal + any known delivery fee. Excludes an unquoted courier cost. */
  total: number;
  freeDeliveryFrom: number;
}

export const MAX_LINE_QUANTITY = 99;

/* ------------------------------------------------------------------ money */

/** Rounds to whole cents so subtotal === sum of displayed line totals. */
export const roundCents = (n: number): number => Math.round(n * 100) / 100;

export const formatRand = (n: number): string => `R${roundCents(n).toFixed(2)}`;

/* ------------------------------------------------------------ the rule */

/**
 * One pricing rule for everything that shows money. Given already-validated
 * priced lines, this decides the delivery fee and the total. Collection is
 * always free; delivery is free from FREE_DELIVERY_FROM.
 */
export function priceOrder(lines: PricedLine[], fulfilment: Fulfilment): PricedOrder {
  const subtotal = roundCents(lines.reduce((sum, l) => sum + l.lineTotal, 0));
  const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);
  const deliveryFee = deliveryFeeFor(subtotal, fulfilment);
  const courierQuoted =
    fulfilment === 'delivery' && subtotal > 0 && subtotal < FREE_DELIVERY_FROM && DELIVERY_FEE === null;

  return {
    lines,
    itemCount,
    subtotal,
    deliveryFee,
    courierQuoted,
    total: roundCents(subtotal + deliveryFee),
    freeDeliveryFrom: FREE_DELIVERY_FROM,
  };
}

/** The delivery line as it must appear everywhere, without inventing a figure. */
export function deliveryLabel(order: PricedOrder, fulfilment: Fulfilment): string {
  if (fulfilment === 'collection') return 'Free — collection';
  if (order.deliveryFee > 0) return formatRand(order.deliveryFee);
  if (order.courierQuoted) return 'Quoted on confirmation';
  return 'Free';
}

/** Amount still needed to reach free delivery, or 0 once it is reached. */
export function amountToFreeDelivery(subtotal: number, fulfilment: Fulfilment): number {
  if (fulfilment === 'collection') return 0;
  return Math.max(0, roundCents(FREE_DELIVERY_FROM - subtotal));
}

/* --------------------------------------------------------- validation */

export interface FieldErrors {
  [field: string]: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** SA mobile/landline: 10 digits local (0XX XXX XXXX) or +27XXXXXXXXX. */
const PHONE_RE = /^(?:\+27\d{9}|0\d{9})$/;

export const normalisePhone = (raw: string): string => raw.replace(/[\s()\-.]/g, '');

/**
 * Validates a raw order payload. Returns a map of field -> human message.
 * Anonymous / bad input is rejected here, before anything is sent anywhere.
 */
export function validateOrder(input: Partial<OrderInput>): FieldErrors {
  const errors: FieldErrors = {};

  const name = (input.customerName ?? '').trim();
  if (name.length < 2) errors.customerName = 'Please enter your full name.';
  else if (name.length > 80) errors.customerName = 'That name is too long.';

  const phone = normalisePhone(input.contactNumber ?? '');
  if (!phone) errors.contactNumber = 'A contact number is required.';
  else if (!PHONE_RE.test(phone))
    errors.contactNumber = 'Use a 10-digit SA number, e.g. 073 719 0821.';

  const email = (input.email ?? '').trim();
  if (email && !EMAIL_RE.test(email)) errors.email = 'That email address looks incomplete.';

  if (input.fulfilment !== 'delivery' && input.fulfilment !== 'collection')
    errors.fulfilment = 'Choose delivery or collection.';

  if (input.fulfilment === 'delivery') {
    const address = (input.address ?? '').trim();
    if (address.length < 10)
      errors.address = 'Please give a street address and suburb for the courier.';
    else if (address.length > 400) errors.address = 'That address is too long.';
  }

  const notes = (input.notes ?? '').trim();
  if (notes.length > 800) errors.notes = 'Please keep notes under 800 characters.';

  const lines = input.lines ?? [];
  if (!Array.isArray(lines) || lines.length === 0) {
    errors.lines = 'Your cart is empty.';
  } else {
    const bad = lines.find(
      (l) =>
        !l ||
        typeof l.productId !== 'string' ||
        !l.productId ||
        !Number.isInteger(l.quantity) ||
        l.quantity < 1 ||
        l.quantity > MAX_LINE_QUANTITY
    );
    if (bad) errors.lines = 'One of the items in your cart is not valid.';
  }

  return errors;
}

export const hasErrors = (errors: FieldErrors): boolean => Object.keys(errors).length > 0;

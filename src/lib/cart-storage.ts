/**
 * Cart persistence — pure, framework-free, and defensive.
 *
 * Nothing in localStorage is trusted. A saved cart holds ids and quantities
 * only: no prices, no names, no product objects. On load every id is looked up
 * in the live catalogue, so a price change, a rename or a withdrawn product is
 * picked up automatically and a stale cart can never be charged at last
 * month's price.
 */
import type { Product } from '../data/products';
import { PRODUCTS } from '../data/products';
import { MAX_LINE_QUANTITY } from './order';

export const CART_STORAGE_KEY = 'gladchemistry.cart.v1';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface StoredCart {
  version: 1;
  savedAt: string;
  items: { id: string; quantity: number }[];
}

export interface DroppedLine {
  id: string;
  reason: string;
}

export interface CartLoadReport {
  restored: number;
  dropped: DroppedLine[];
}

const BY_ID = new Map<string, Product>(PRODUCTS.map((p) => [p.id, p]));

/** Serialises only what is safe to keep: ids and integer quantities. */
export function serialiseCart(items: CartItem[]): string {
  const payload: StoredCart = {
    version: 1,
    savedAt: new Date().toISOString(),
    items: items.map((i) => ({ id: i.product.id, quantity: i.quantity })),
  };
  return JSON.stringify(payload);
}

export function readStoredCart(raw: string | null): { items: CartItem[]; report: CartLoadReport } {
  const nothing = { items: [], report: { restored: 0, dropped: [] as DroppedLine[] } };
  if (!raw) return nothing;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { items: [], report: { restored: 0, dropped: [{ id: 'cart', reason: 'unreadable saved cart' }] } };
  }

  if (typeof parsed !== 'object' || parsed === null || !Array.isArray((parsed as StoredCart).items)) {
    return {
      items: [],
      report: { restored: 0, dropped: [{ id: 'cart', reason: 'unrecognised saved cart' }] },
    };
  }

  const items: CartItem[] = [];
  const dropped: DroppedLine[] = [];
  const seen = new Set<string>();

  for (const entry of (parsed as StoredCart).items) {
    const id = typeof entry?.id === 'string' ? entry.id : '';
    const quantity = Number(entry?.quantity);
    const product = BY_ID.get(id);

    if (!product) {
      dropped.push({ id: id || '(blank)', reason: 'no longer in the catalogue' });
      continue;
    }
    if (!Number.isInteger(quantity) || quantity < 1) {
      dropped.push({ id, reason: 'invalid quantity' });
      continue;
    }
    if (seen.has(id)) {
      dropped.push({ id, reason: 'duplicate line' });
      continue;
    }

    seen.add(id);
    items.push({ product, quantity: Math.min(quantity, MAX_LINE_QUANTITY) });
  }

  return { items, report: { restored: items.length, dropped } };
}

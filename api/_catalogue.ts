/**
 * Catalogue lookup shared by the serverless endpoints.
 *
 * `src/data/products.ts` is the single source of truth for id, name, size and
 * price. The endpoints import it directly instead of keeping a second copy, so
 * a price can never drift between the shop and the order that gets emailed.
 */
import { PRODUCTS } from '../src/data/products.ts';
import type { Product } from '../src/data/products.ts';
import { BRANDS } from '../src/data/brands.ts';
import type { OrderLineInput, PricedLine } from '../src/lib/order.ts';

const BY_ID = new Map<string, Product>(PRODUCTS.map((p) => [p.id, p]));

export const findProduct = (id: string): Product | undefined => BY_ID.get(id);

/**
 * Re-prices submitted lines against the live catalogue.
 *
 * Returns either priced lines or a list of the ids that no longer exist, so the
 * endpoint can tell the customer honestly that the basket is out of date rather
 * than silently charging a different amount.
 */
export function priceLines(
  input: OrderLineInput[]
): { ok: true; lines: PricedLine[] } | { ok: false; unknownIds: string[] } {
  const merged = new Map<string, number>();
  for (const line of input) {
    merged.set(line.productId, (merged.get(line.productId) ?? 0) + line.quantity);
  }

  const unknownIds: string[] = [];
  const lines: PricedLine[] = [];

  for (const [productId, quantity] of merged) {
    const product = findProduct(productId);
    if (!product) {
      unknownIds.push(productId);
      continue;
    }
    lines.push({
      productId: product.id,
      name: product.name,
      size: product.size,
      brand: BRANDS[product.brand].name,
      unitPrice: product.price,
      quantity,
      lineTotal: Math.round(product.price * quantity * 100) / 100,
      image: product.image,
    });
  }

  if (unknownIds.length > 0) return { ok: false, unknownIds };
  return { ok: true, lines };
}

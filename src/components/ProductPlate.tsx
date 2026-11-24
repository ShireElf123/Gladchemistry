import React from 'react';
import type { Product } from '../data/products';
import { BRANDS } from '../data/brands';

/**
 * A product whose photograph cannot be published.
 *
 * Two different reasons land a product here, and the tile says which:
 *
 *   artworkWithheld — the picture carried a label that is not hers. Those
 *     frames were generated, and where the generator could not read her real
 *     printed artwork it laid out a blank white field with typeset words
 *     instead. On a page that sells her products a white label is not a
 *     neutral placeholder; it is a claim about what the customer will receive,
 *     made in a brand that is not hers. Withdrawing the picture is the only
 *     honest response, because no amount of sharpening makes an invented label
 *     true.
 *
 *   photoGrade: 'weak' — the photograph is hers but too small to enlarge.
 *     Upscaling it would smear the very artwork that makes it hers, so it is
 *     typeset instead: the mark, the strength, the size.
 *
 * Either way the reader still gets the name, the size, the price and a
 * WhatsApp enquiry from the card, so nothing has actually been taken away from
 * the catalogue — only the misleading picture.
 *
 * The layout is derived from the product itself, so no two tiles are identical.
 */
export const ProductPlate: React.FC<{ product: Product }> = ({ product }) => {
  const brand = BRANDS[product.brand];
  const withheld = Boolean(product.artworkWithheld);

  /* A quiet, stable per-product variation — deterministic, so the catalogue
     never shuffles between renders. */
  const seed = [...product.id].reduce((a, c) => a + c.charCodeAt(0), 0);
  const angle = -34 + (seed % 7) * 11;

  const strength = product.notes?.[0] ?? product.category;

  return (
    <div
      className="plate"
      style={
        {
          '--plate-tone': brand.stageTone,
          '--plate-ink': brand.inkColor,
        } as React.CSSProperties
      }
    >
      {/* A single geometric gesture, faint, that echoes the pack silhouette
          without pretending to draw the product. */}
      <svg
        className="plate-arc"
        viewBox="0 0 200 250"
        aria-hidden
        style={{ transform: `rotate(${angle * 0.18}deg)` }}
      >
        <circle cx="100" cy="132" r="64" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="100" cy="132" r="88" fill="none" stroke="currentColor" strokeWidth="0.75" />
      </svg>

      <div className="plate-body">
        <p className="plate-house">{brand.name}</p>
        <p className="plate-name">{product.name}</p>
        <div className="plate-rule" />
        <p className="plate-size">{product.size}</p>
      </div>

      <p className="plate-strength">
        {withheld ? 'Photo being reshot · ask us for a picture' : strength}
      </p>
    </div>
  );
};

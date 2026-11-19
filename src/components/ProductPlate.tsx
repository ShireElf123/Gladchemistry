import React from 'react';
import type { Product } from '../data/products';
import { BRANDS } from '../data/brands';

/**
 * A product whose photograph is too soft to publish.
 *
 * The temptation is to upscale the picture until it fills the tile. That is how
 * a 200-pixel source becomes a smeared bottle with invented-looking label text
 * — a lie dressed as a photo. So a weak product is typeset instead: the mark,
 * the strength, the size. It is honest, it holds its weight next to a real
 * photograph, and it reads as a deliberate part of the system rather than a
 * missing file.
 *
 * The layout is derived from the product itself, so no two tiles are identical.
 */
export const ProductPlate: React.FC<{ product: Product }> = ({ product }) => {
  const brand = BRANDS[product.brand];

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

      <p className="plate-strength">{strength}</p>
    </div>
  );
};

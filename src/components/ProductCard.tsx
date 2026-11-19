import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import type { Product } from '../data/products';
import { BRANDS } from '../data/brands';
import { ProductPlate } from './ProductPlate';
import { ProductModal } from './ProductModal';
import { waLink, productEnquiry } from '../data/shop';

interface ProductCardProps {
  product: Product;
  /** Position in the grid — drives the stagger, nothing else. */
  index?: number;
  /** Larger stage for feature rows. */
  tall?: boolean;
}

/**
 * The catalogue tile.
 *
 * A real photograph is shown as a photograph. A product whose source is too
 * soft is typeset by `ProductPlate` instead of being upscaled. Either way the
 * name, size and price are set the same, so the grid never reads as broken.
 *
 * Animation is scroll-driven and lives in index.css (`.tile`): the card lifts
 * and fades as it enters, and the artwork drifts a few pixels slower than the
 * card around it. Motion is disabled wholesale under prefers-reduced-motion.
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0, tall = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const brand = BRANDS[product.brand];
  const weak = product.photoGrade === 'weak';

  return (
    <>
      <article
        className="tile group flex flex-col min-w-0"
        style={{ animationDelay: `${Math.min(index, 12) * 55}ms` }}
      >
        <div
          onClick={() => setModalOpen(true)}
          className={`stage relative cursor-pointer ${weak ? 'stage-plate' : `stage-art stage-art-${product.imageRole}`}`}
          style={{ aspectRatio: tall ? '4 / 4.7' : '4 / 5' }}
        >
          {weak ? (
            <div className="parallax">
              <ProductPlate product={product} />
            </div>
          ) : (
            <img
              className="parallax"
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              width={1200}
              height={1500}
            />
          )}

          {/* House flag, hard-edged */}
          <span
            className="absolute top-3 left-3 z-10 flag"
            style={{ background: brand.stageTone, color: brand.inkColor }}
          >
            {brand.name.split(' ')[0]}
          </span>

          {product.badge && (
            <span className="absolute top-3 right-3 z-10 flag" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
              {product.badge}
            </span>
          )}

          {/* Quick view — appears on hover, always reachable on touch */}
          <span className="tile-view" aria-hidden>
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        {/* Meta — the same whether or not there is a photograph */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="eyebrow mb-1" style={{ color: 'var(--ink-soft)', opacity: 0.55 }}>
              {product.category} · {product.size}
            </p>
            <h3
              onClick={() => setModalOpen(true)}
              className="font-display font-extrabold text-[18px] leading-tight cursor-pointer transition-colors"
              style={{ color: 'var(--ink)' }}
            >
              {product.name}
            </h3>
          </div>
          <span className="font-display font-extrabold text-[18px] whitespace-nowrap shrink-0 tabular-nums">
            R{product.price.toFixed(0)}
          </span>
        </div>

        {/* One action, and it is a conversation — not a cart */}
        <a
          href={waLink(productEnquiry(product.name, product.size, product.price))}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="enquire mt-3"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Enquire
        </a>
      </article>

      {modalOpen && <ProductModal product={product} onClose={() => setModalOpen(false)} />}
    </>
  );
};

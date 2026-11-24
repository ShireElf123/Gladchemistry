import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye } from 'lucide-react';
import type { Product } from '../data/products';
import { BRANDS } from '../data/brands';
import { useCart } from '../context/CartContext';
import { ProductModal } from './ProductModal';

interface ProductCardProps {
  product: Product;
  index?: number;
  /** Draws the tinted product stage larger for hero-adjacent grids. */
  tall?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0, tall = false }) => {
  const { addToCart } = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const brand = BRANDS[product.brand];
  // Photos we generated per product live in a named brand folder; those are
  // full-frame studio shots. Everything else is still a legacy range cut-out.
  const isStudioPhoto = /^\/images\/(feliz|gladchemistry|bubbles)\//.test(product.image);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group flex flex-col min-w-0"
      >
        {/* Two kinds of picture live in this catalogue. A studio photograph has its
            own ground, so it goes full-bleed and its sweep becomes the stage. A
            legacy cut-out on white still needs the old tinted pad and circle behind
            it, or it looks like a white box dropped on a coloured rectangle. */}
        <div
          onClick={() => setModalOpen(true)}
          className={isStudioPhoto ? 'stage-photo' : 'stage'}
          style={{
            ['--stage-tone' as string]: brand.stageTone,
            /* A studio photo's frame takes its height from the 4/5 aspect-ratio
               in CSS so nothing is cropped. Legacy cut-outs keep an explicit
               height because they are centred in the stage, not cropped to it. */
            ...(isStudioPhoto ? {} : { height: tall ? 340 : 290 }),
          }}
        >
          <img src={product.image} alt={product.name} loading="lazy" />

          {/* Flags sit on the stage, hard-edged like the soda store */}
          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10">
            {product.badge && <span className="flag">{product.badge}</span>}
            <span className="flag flag-lime">{brand.name.split(' ')[0]}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
            }}
            aria-label={`Quick view ${product.name}`}
            className="absolute top-3 right-3 z-10 grid place-items-center h-9 w-9 rounded-full bg-white text-ink shadow-sm border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: 'var(--ink)' }}
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Meta row — name left, price right, like the soda catalogue */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {product.category} · {product.size}
            </p>
            <h3
              onClick={() => setModalOpen(true)}
              className="font-display font-extrabold text-[19px] leading-tight text-ink mt-1 cursor-pointer hover:text-[var(--fern)] transition-colors"
              style={{ color: 'var(--ink)' }}
            >
              {product.name}
            </h3>
            <p className="text-[13px] text-slate-500 mt-1 line-clamp-2 leading-snug">
              {product.description}
            </p>
          </div>

          <span
            className="font-display font-extrabold text-[19px] whitespace-nowrap shrink-0"
            style={{ color: 'var(--ink)' }}
          >
            R{product.price.toFixed(0)}
          </span>
        </div>

        <div className="mt-3.5">
          <button
            onClick={() => addToCart(product)}
            className="btn btn-sm btn-ink w-full sm:w-auto"
          >
            <Plus className="h-4 w-4" />
            Add to cart
          </button>
        </div>
      </motion.article>

      {modalOpen && <ProductModal product={product} onClose={() => setModalOpen(false)} />}
    </>
  );
};

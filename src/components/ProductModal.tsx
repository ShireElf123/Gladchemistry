import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import type { Product } from '../data/products';
import { BRANDS } from '../data/brands';
import { ProductPlate } from './ProductPlate';
import { waLink, productEnquiry, telLink, SHOP } from '../data/shop';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [sent, setSent] = useState(false);

  if (!product) return null;
  const brand = BRANDS[product.brand];
  const weak = product.photoGrade === 'weak';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl rounded-[2rem] bg-white shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-600 hover:bg-slate-100 shadow-sm cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Same role logic as the card: a photograph is shown whole, never
              cropped to a square that slices the product. */}
          <div className="relative min-h-[300px] md:min-h-[440px] bg-[#f0eee7] grid place-items-center p-6">
            {weak ? (
              <div className="absolute inset-3 rounded-2xl overflow-hidden">
                <ProductPlate product={product} />
              </div>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full"
                style={{ objectFit: 'contain', maxHeight: 460 }}
              />
            )}
            <span
              className="absolute top-4 left-4 text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full"
              style={{ background: 'var(--ink)', color: '#fff' }}
            >
              {brand.name}
            </span>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                <Sparkles className="h-3 w-3" />
                {product.preMessage}
              </div>

              <h2 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                {product.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>

              {product.notes && (
                <div className="pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Key Notes &amp; Actives
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.notes.map((n) => (
                      <span
                        key={n}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {product.size}
                </span>
                <span className="font-display font-extrabold text-2xl text-slate-900 tabular-nums">
                  R{product.price.toFixed(0)}
                </span>
              </div>

              {/* No checkout: the order is a conversation with the shop. */}
              <a
                href={waLink(productEnquiry(product.name, product.size, product.price))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSent(true)}
                className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99]"
                style={{ background: 'var(--ink)', color: 'var(--paper)' }}
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>

              <a
                href={telLink}
                className="w-full py-2.5 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                Call the shop · {SHOP.phoneDisplay}
              </a>

              <p className="text-[11px] leading-relaxed text-slate-400 text-center">
                {sent
                  ? 'Your enquiry is open in WhatsApp — send it to confirm the order.'
                  : 'Collection from Shop 19, Palm Springs Mall, Springs. Wholesale welcome.'}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

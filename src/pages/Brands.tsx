import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_LIST } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { BrandLogo } from '../components/BrandLogo';

export const Brands: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Brand Architecture
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900">
            Three Distinct Brands, One Standard of Excellence
          </h1>
          <p className="text-base text-slate-500">
            Each brand under the Gladchemistry umbrella is crafted with its own identity,
            formulation philosophy, and signature visual language.
          </p>
        </div>

        <div className="space-y-10">
          {BRAND_LIST.map((brand, idx) => {
            const brandProducts = PRODUCTS.filter((p) => p.brand === brand.id);
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-[28px] p-6 sm:p-10 border border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                style={{ background: brand.stageTone }}
              >
                <div className={`lg:col-span-6 space-y-5 ${!isEven ? 'lg:order-2' : ''}`}>
                  <BrandLogo brand={brand.id} size="lg" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {brand.category}
                    </span>
                    <h2 className="font-display font-extrabold text-3xl text-slate-900 mt-1">
                      {brand.name} — {brand.tagline}
                    </h2>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed">{brand.description}</p>

                  <ul className="space-y-2.5 pt-1">
                    {brand.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/shop?brand=${brand.id}`}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95 ${brand.buttonClass}`}
                    >
                      Shop {brand.name} ({brandProducts.length} Products)
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* The shop's own photograph of this house's stock, where it
                    gave us one. Not generated, not restyled. */}
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  {brand.rangePhoto ? (
                    <img
                      src={brand.rangePhoto}
                      alt={`${brand.name} range as stocked by the shop`}
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-3xl shadow-xl border-4 border-white object-cover"
                      style={{ aspectRatio: '4 / 3' }}
                    />
                  ) : (
                  <div
                    className="rounded-3xl overflow-hidden shadow-xl border-4 border-white grid place-items-center"
                    style={{ background: brand.stageTone, aspectRatio: '4 / 3' }}
                  >
                    <div className="text-center px-8">
                      <p
                        className="font-display text-[42px] font-extrabold leading-none"
                        style={{ color: brand.inkColor }}
                      >
                        {brand.name}
                      </p>
                      <p
                        className="mt-3 text-[12px] font-black uppercase tracking-[0.16em]"
                        style={{ color: brand.inkColor, opacity: 0.65 }}
                      >
                        {brand.category}
                      </p>
                      <p className="mt-4 max-w-[34ch] text-[14px] font-semibold" style={{ color: brand.inkColor, opacity: 0.8 }}>
                        {brand.highlights.join(' · ')}
                      </p>
                    </div>
                  </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

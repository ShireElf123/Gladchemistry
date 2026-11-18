import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { BRANDS, BRAND_LIST } from '../data/brands';
import type { BrandId } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const TICKER = [
  'Organic botanicals',
  'Fine fragrance',
  'Serious cleaning',
  'Made in South Africa',
  '3 houses, one standard',
];

const Ticker: React.FC<{ items: string[]; invert?: boolean }> = ({ items, invert }) => {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y ${invert ? 'border-white/15' : 'border-black/10'}`}
      style={{ background: invert ? 'var(--ink)' : 'var(--lime)' }}
    >
      <div className="marquee py-3">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-5 px-5 text-[12px] font-black uppercase tracking-[0.18em] whitespace-nowrap"
            style={{ color: invert ? '#fff' : 'var(--ink)' }}
          >
            {item}
            <Star className="h-3 w-3 shrink-0" style={{ color: invert ? 'var(--lime)' : 'var(--ink)' }} />
          </span>
        ))}
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<BrandId>('gladchemistry');
  const brand = BRANDS[activeBrand];
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 6);
  const cheapest = Math.min(...PRODUCTS.map((p) => p.price));

  return (
    <div>
      {/* ================================================== HERO */}
      <section className="relative overflow-hidden" style={{ background: 'var(--lime)' }}>
        {/* Soft arc behind the hero art, echoing the soda splash backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[560px] w-[560px] rounded-full opacity-40"
          style={{ background: '#b7e65e' }}
        />

        <div className="relative mx-auto max-w-[1240px] px-5 pt-12 pb-14 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-6">
              <span className="eyebrow" style={{ color: 'var(--ink)' }}>
                House of 3 brands · South Africa
              </span>

              <h1 className="display-xl mt-4" style={{ color: 'var(--ink)' }}>
                Everyday care,
                <br />
                <span className="u-mark">properly</span> made.
              </h1>

              <p
                className="mt-5 text-[17px] leading-relaxed max-w-[46ch]"
                style={{ color: 'var(--ink-soft)' }}
              >
                Organic personal care, fine fragrance and detergents that actually work —
                formulated in South Africa, sold from R{cheapest}.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to="/shop" className="btn btn-ink">
                  Shop the range
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/brands" className="btn btn-ghost">
                  Meet the 3 houses
                </Link>
              </div>

              {/* Brand switcher — pills, soda-style */}
              <div className="mt-9">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] mb-2.5" style={{ color: 'var(--ink-soft)' }}>
                  Pick your house
                </p>
                <div className="flex flex-wrap gap-2">
                  {BRAND_LIST.map((b) => {
                    const active = b.id === activeBrand;
                    return (
                      <button
                        key={b.id}
                        onClick={() => setActiveBrand(b.id)}
                        aria-pressed={active}
                        className="chip"
                        data-active={active}
                        style={active ? { background: 'var(--ink)', color: '#fff' } : { background: '#fff' }}
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ background: b.primaryColor }}
                        />
                        {b.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Art */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBrand}
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="relative mx-auto max-w-[520px]">
                    <div
                      className="animate-float-slow relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_-24px_rgba(16,35,28,0.45)]"
                      style={{ background: brand.stageTone }}
                    >
                      <img
                        src={brand.heroImage}
                        alt={brand.name}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>

                    {/* Floating price/quality chip */}
                    <div
                      className="absolute -bottom-4 -left-3 sm:-left-6 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
                      style={{ background: 'var(--ink)', color: '#fff' }}
                    >
                      <div
                        className="h-9 w-9 rounded-full grid place-items-center shrink-0"
                        style={{ background: 'var(--lime)', color: 'var(--ink)' }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] opacity-70">
                          {brand.tagline}
                        </p>
                        <p className="text-sm font-extrabold leading-tight">{brand.tag}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Ticker items={TICKER} />

      {/* ================================================== FEATURED */}
      <section className="mx-auto max-w-[1240px] px-5 py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow">Customer favourites</span>
            <h2 className="display-lg mt-2" style={{ color: 'var(--ink)' }}>
              The stuff people <span className="u-mark">reorder</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-black underline underline-offset-4 shrink-0"
            style={{ color: 'var(--ink)' }}
          >
            All {PRODUCTS.length} products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} tall />
          ))}
        </div>
      </section>

      {/* ================================================== BRANDS */}
      <section className="mx-auto max-w-[1240px] px-5 pb-16 sm:pb-24">
        <div className="ink-block px-6 py-10 sm:px-12 sm:py-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-9">
            <div>
              <span className="eyebrow-invert">Three houses</span>
              <h2 className="display-lg mt-2 text-white">
                One standard,
                <br />
                <span className="u-mark">three</span> personalities.
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed max-w-[40ch] text-white/70">
              Each house has its own formulation bench, its own scent library and its own
              job to do. What they share is the testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BRAND_LIST.map((b, i) => {
              const count = PRODUCTS.filter((p) => p.brand === b.id).length;
              return (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-[22px] p-4 flex flex-col"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="relative rounded-[16px] overflow-hidden"
                    style={{ background: b.stageTone, height: 190 }}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] aspect-square rounded-full"
                      style={{ background: 'rgba(255,255,255,0.6)' }}
                    />
                    <img
                      src={b.heroImage}
                      alt={b.name}
                      className="relative w-full h-full object-cover"
                    />
                  </div>

                  <div className="pt-4 flex-1 flex flex-col">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: b.primaryColor }}>
                      {b.category}
                    </p>
                    <h3 className="font-display font-extrabold text-xl text-white mt-1">{b.name}</h3>
                    <p className="text-[13px] leading-relaxed text-white/60 mt-1.5 flex-1">
                      {b.tagline} — {count} products in the range.
                    </p>
                    <Link
                      to={`/shop?brand=${b.id}`}
                      className="btn btn-sm btn-lime mt-4 self-start"
                    >
                      Shop {b.name.split(' ')[0]}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== PROOF STRIP */}
      <section className="mx-auto max-w-[1240px] px-5 pb-16 sm:pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { k: '100%', v: 'Organic botanical extracts' },
            { k: '24+', v: 'Fine fragrance scents' },
            { k: '99.9%', v: 'Germ elimination' },
            { k: 'Nationwide', v: 'South African delivery' },
          ].map((s) => (
            <div key={s.v} className="panel px-5 py-6">
              <p className="font-display font-extrabold text-[30px] leading-none" style={{ color: 'var(--ink)' }}>
                {s.k}
              </p>
              <p className="text-[12px] font-semibold text-slate-500 mt-2 leading-snug">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <Ticker items={['Free delivery over R500', 'Wholesale welcome', 'Bulk pricing', 'Order today']} invert />

      {/* ================================================== CLOSER */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:py-24 text-center">
        <span className="eyebrow">Ready when you are</span>
        <h2 className="display-lg mt-3" style={{ color: 'var(--ink)' }}>
          Get your <span className="u-mark">care</span> sorted.
        </h2>
        <p className="mt-4 text-[16px] text-slate-500 max-w-[44ch] mx-auto leading-relaxed">
          {PRODUCTS.length} products across personal care, fragrance and cleaning. One cart,
          one delivery.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link to="/shop" className="btn btn-ink">
            Shop everything
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Wholesale enquiry
          </Link>
        </div>
      </section>
    </div>
  );
};

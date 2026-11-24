import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, ShoppingBag, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BRAND_LIST } from '../data/brands';

/**
 * 404 — kept in the current design system so a stale or mistyped link never
 * drops the visitor onto a dead end. Everything is one tap away.
 */
export const NotFound: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {/* Head band, matching the Shop page treatment */}
      <section style={{ background: 'var(--lime)' }}>
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:py-20 text-center">
          <span className="eyebrow" style={{ color: 'var(--ink)' }}>
            404 · Page not found
          </span>
          <h1 className="display-xl mt-3" style={{ color: 'var(--ink)' }}>
            We couldn&rsquo;t find that <span className="u-mark">page</span>
          </h1>
          <p
            className="mt-4 text-[16px] leading-relaxed max-w-[52ch] mx-auto"
            style={{ color: 'var(--ink-soft)' }}
          >
            The link may be old or mistyped. Everything we make is one tap away.
          </p>

          {/* Show what was requested, so it's obvious what went wrong */}
          <p
            className="mt-4 inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] max-w-full truncate"
            style={{ background: 'rgba(16,35,28,.09)', color: 'var(--ink-soft)' }}
          >
            Requested: {pathname}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <Link to="/" className="btn btn-ink">
              <HomeIcon className="h-4 w-4" />
              Back to home
            </Link>
            <Link to="/shop" className="btn btn-ghost">
              <ShoppingBag className="h-4 w-4" />
              Shop the range
            </Link>
          </div>
        </div>
      </section>

      {/* Shortcut grid so the page is genuinely useful, not just an apology */}
      <section className="mx-auto max-w-[1240px] px-5 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
          <div>
            <span className="eyebrow">Jump straight in</span>
            <h2 className="display-md mt-2" style={{ color: 'var(--ink)' }}>
              Try one of these
            </h2>
          </div>
          <span className="text-[12px] font-bold text-slate-400">
            {PRODUCTS.length} products waiting
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {BRAND_LIST.map((b) => (
            <Link
              key={b.id}
              to={`/shop?brand=${b.id}`}
              className="brand-tile group block p-5"
              style={{ ['--tile-tone' as string]: b.stageTone, background: b.stageTone }}
            >
              <div
                className="relative rounded-[16px] overflow-hidden mb-4"
                style={{ height: 160, background: b.stageTone }}
              >
                <div className="disc" />
                <div className="relative w-full h-full grid place-items-center">
                  <span
                    className="font-display text-[26px] font-extrabold"
                    style={{ color: b.inkColor }}
                  >
                    {b.name.charAt(0)}
                  </span>
                </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.14em]" style={{ color: b.inkColor }}>
                {b.category}
              </p>
              <h3 className="font-display font-extrabold text-[19px] mt-1" style={{ color: 'var(--ink)' }}>
                {b.name}
              </h3>
              <span
                className="mt-2 inline-flex items-center gap-1 text-[12px] font-black"
                style={{ color: b.inkColor }}
              >
                Shop {b.name.split(' ')[0]}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div
              className="h-10 w-10 rounded-xl grid place-items-center shrink-0"
              style={{ background: 'var(--lime)', color: 'var(--ink)' }}
            >
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display font-extrabold text-[16px]" style={{ color: 'var(--ink)' }}>
                Looking for something specific?
              </p>
              <p className="text-[13px] text-slate-500 mt-0.5">
                Tell us what you need and we&rsquo;ll point you at the right house.
              </p>
            </div>
          </div>
          <Link to="/contact" className="btn btn-sm btn-fern shrink-0">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
};

import React, { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, X } from 'lucide-react';
import { BOOK, CONFLICTS } from '../data/pricelist';
import type { BookPage } from '../data/pricelist';

/* ------------------------------------------------------------------ */
/*  PriceBook — a real book of pages that turns                       */
/*                                                                    */
/*  No photographs. Names and prices only, set as a printed page      */
/*  would be: running head, a hairline rule, rows that align on a     */
/*  right-hand price column with dot leaders, and a folio at the      */
/*  foot.                                                            */
/*                                                                    */
/*  The turn is a two-stage transform on a single page element:       */
/*  rotate out on its right edge with a shadow sweeping across it,    */
/*  then the next leaf comes in from the other side. Perspective is   */
/*  on the spread, so both leaves share one vanishing point and the   */
/*  spine looks like a spine.                                        */
/*                                                                    */
/*  Singles, not a spread: a 375px phone cannot show two readable     */
/*  price columns side by side, and a price list is a reading         */
/*  document first. One page, full width, at every breakpoint.        */
/* ------------------------------------------------------------------ */

const HOUSE_TINT: Record<string, string> = {
  gladchemistry: '#0e7c4a',
  'felis-be-glad': '#c2760b',
  'bubbles-detergents': '#0284c7',
  all: '#10231c',
  bundles: '#6d28d9',
};

const PAGE_W = 'min(560px, 92vw)';

export const PriceBook: React.FC = () => {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const [turning, setTurning] = useState(false);
  const reduce = useReducedMotion();
  const total = BOOK.length;

  const go = useCallback(
    (next: number, direction: number) => {
      if (turning) return;
      if (next < 0 || next >= total) return;
      setDir(direction);
      setTurning(true);
      setPage(next);
      window.setTimeout(() => setTurning(false), reduce ? 0 : 560);
    },
    [turning, total, reduce]
  );

  const next = useCallback(() => go(page + 1, 1), [go, page]);
  const prev = useCallback(() => go(page - 1, -1), [go, page]);

  /* Arrow keys, because a book is a thing you page through. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const current = BOOK[page];
  const tint = HOUSE_TINT[current.house ?? 'all'];

  return (
    <div className="relative" style={{ perspective: 1800 }}>
      <div className="mx-auto" style={{ width: PAGE_W }}>
        {/* the leaf that turns */}
        <motion.div
          key={page}
          initial={reduce ? { opacity: 0 } : { rotateY: dir > 0 ? -18 : 18, y: 10, opacity: 0 }}
          animate={{ rotateY: 0, y: 0, opacity: 1 }}
          transition={
            reduce
              ? { duration: 0.2 }
              : { type: 'spring', stiffness: 210, damping: 26, mass: 0.9 }
          }
          style={{
            transformOrigin: dir > 0 ? 'right center' : 'left center',
            transformStyle: 'preserve-3d',
            background: '#fffdf9',
            borderRadius: 6,
            boxShadow:
              '0 1px 0 rgba(16,35,28,.06), 0 18px 40px -18px rgba(16,35,28,.45), inset 26px 0 34px -30px rgba(16,35,28,.55)',
            border: '1px solid rgba(16,35,28,.10)',
          }}
        >
          <Leaf page={current} index={page} total={total} tint={tint} />
        </motion.div>

        {/* controls */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={prev}
            disabled={page === 0}
            aria-label="Previous page"
            className="flex h-11 items-center gap-2 rounded-full px-4 text-[13px] font-bold transition-colors disabled:opacity-30"
            style={{ background: 'rgba(16,35,28,.06)', color: 'var(--ink)' }}
          >
            <ChevronLeft size={16} /> Back
          </button>

          <div className="flex items-center gap-1.5" role="tablist" aria-label="Pages">
            {BOOK.map((p, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === page}
                aria-label={`Page ${i + 1}: ${p.title}`}
                onClick={() => go(i, i > page ? 1 : -1)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === page ? 20 : 6,
                  background: i === page ? tint : 'rgba(16,35,28,.20)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={page === total - 1}
            aria-label="Next page"
            className="flex h-11 items-center gap-2 rounded-full px-4 text-[13px] font-bold text-white transition-colors disabled:opacity-30"
            style={{ background: 'var(--ink)' }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */

const Leaf: React.FC<{ page: BookPage; index: number; total: number; tint: string }> = ({
  page,
  index,
  total,
  tint,
}) => {
  return (
    <div className="relative flex min-h-[640px] flex-col px-[7%] py-[6%] sm:min-h-[600px]">
      {/* running head */}
      <div className="flex items-baseline justify-between gap-4">
        <span
          className="text-[9px] font-black uppercase tracking-[0.3em]"
          style={{ color: tint, opacity: 0.9 }}
        >
          {page.kicker}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
          Price list
        </span>
      </div>

      <hr className="mt-2.5" style={{ border: 0, borderTop: `1.5px solid ${tint}`, opacity: 0.35 }} />

      {page.kind === 'cover' ? (
        <div className="flex flex-1 flex-col justify-center py-10 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.34em] text-slate-400">
            Gladchemistry Products
          </p>
          <h1 className="mt-5 font-display text-[44px] leading-[0.95] tracking-[-0.04em]" style={{ color: 'var(--ink)' }}>
            Price
            <br />
            list
          </h1>
          <div className="mx-auto mt-6 h-px w-16" style={{ background: tint }} />
          <p className="mx-auto mt-6 max-w-[30ch] text-[14px] leading-relaxed text-slate-500">
            {page.standfirst}
          </p>
          <p className="mt-8 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <BookOpen size={13} /> Turn the page
          </p>
        </div>
      ) : (
        <>
          <h2
            className="mt-5 font-display text-[30px] leading-[1.02] tracking-[-0.03em]"
            style={{ color: 'var(--ink)' }}
          >
            {page.title}
          </h2>
          {page.standfirst && (
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-500">{page.standfirst}</p>
          )}

          {page.rows && (
            <ul className="mt-5 flex-1">
              {page.rows.map((row, i) => (
                <li
                  key={row.name + i}
                  className="flex items-baseline gap-2 py-[9px]"
                  style={{ borderBottom: '1px solid rgba(16,35,28,.075)' }}
                >
                  <span className="min-w-0 flex-1">
                    <span
                      className="block text-[13.5px] font-semibold leading-snug"
                      style={{ color: 'var(--ink)' }}
                    >
                      {row.name}
                    </span>
                    {row.detail && (
                      <span className="mt-0.5 block text-[11px] leading-snug text-slate-400">
                        {row.detail}
                      </span>
                    )}
                  </span>
                  {/* dot leaders, as a printed price list sets them */}
                  <span
                    aria-hidden
                    className="mb-[3px] h-px flex-1"
                    style={{
                      minWidth: 12,
                      backgroundImage: 'radial-gradient(circle, rgba(16,35,28,.32) 1px, transparent 1px)',
                      backgroundSize: '5px 1px',
                      backgroundRepeat: 'repeat-x',
                    }}
                  />
                  <span
                    className="shrink-0 text-[13.5px] font-bold tabular-nums"
                    style={{ color: 'var(--ink)' }}
                  >
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {page.body && (
            <div className="mt-4 flex-1 space-y-3">
              {page.body.map((p, i) => (
                <p key={i} className="text-[12.5px] leading-[1.65] text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          )}
        </>
      )}

      {/* the one honest footnote, on the back page where there is room for it */}
      {page.kind === 'back' && (
        <div
          className="mt-4 rounded-md p-3"
          style={{ background: 'rgba(194,118,11,.08)', border: '1px solid rgba(194,118,11,.22)' }}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: '#8a5606' }}>
            {CONFLICTS.length} lines differ from the catalogue
          </p>
          <p className="mt-1 text-[11px] leading-snug text-slate-600">
            The sixteen shop lines above are the site's prices. Her WhatsApp catalogue differs on{' '}
            {CONFLICTS.length} of them — the full comparison is just below this book.
          </p>
        </div>
      )}

      {/* folio */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-slate-300">
          Springs, Gauteng
        </span>
        <span className="text-[10px] font-bold tabular-nums text-slate-400">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  The comparison — kept out of the book, because it is a working    */
/*  note for her, not a page for her customers.                       */
/* ------------------------------------------------------------------ */

export const PriceConflictTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto mt-10" style={{ width: PAGE_W }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left"
        style={{ background: 'rgba(16,35,28,.05)' }}
      >
        <span className="text-[12px] font-bold" style={{ color: 'var(--ink)' }}>
          {open ? 'Hide' : 'Show'} the {CONFLICTS.length} lines where the catalogue and the shop disagree
        </span>
        {open ? <X size={15} /> : <ChevronRight size={15} />}
      </button>
      {open && (
        <table className="mt-3 w-full text-left text-[12px]">
          <thead>
            <tr className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
              <th className="py-2 font-black">Item</th>
              <th className="py-2 text-right font-black">Catalogue</th>
              <th className="py-2 text-right font-black">Shop</th>
            </tr>
          </thead>
          <tbody>
            {CONFLICTS.map((c) => (
              <tr key={c.item} style={{ borderTop: '1px solid rgba(16,35,28,.08)' }}>
                <td className="py-2 pr-2 font-semibold" style={{ color: 'var(--ink)' }}>
                  {c.item}
                </td>
                <td className="py-2 text-right tabular-nums text-slate-500">{c.catalogue}</td>
                <td className="py-2 text-right font-bold tabular-nums" style={{ color: '#8a5606' }}>
                  {c.shop}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

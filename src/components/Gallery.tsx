import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Gallery — editorial photography band with a lightbox              */
/*                                                                    */
/*  ALIGNMENT CONTRACT                                                */
/*                                                                    */
/*  Every tile is rendered at the aspect it was photographed at, so   */
/*  nothing is cropped to fit a grid cell. That was the fault in the  */
/*  first version: a 1376×768 landscape was being cover-fitted into a */
/*  4:5 portrait (55% of the photograph discarded) and four 0.56–0.67 */
/*  portraits were being crushed into squares (up to 44% lost).      */
/*                                                                    */
/*  The layout is column-flow, not a dense-packing grid: images keep  */
/*  their ratios and the columns are balanced by measured height, so  */
/*  there are no holes, no ragged bottom edge and no stretch.        */
/*                                                                    */
/*  Captions are a plate UNDER the frame rather than over the image,  */
/*  which means every caption sits on the same ground and the same    */
/*  baseline instead of floating at whatever height the photo ends.  */
/* ------------------------------------------------------------------ */

export interface GalleryTile {
  /** Path under /public, without the extension. */
  src: string;
  /** Short caption under the tile — states what the picture is, nothing more. */
  caption: string;
  /** Optional kicker shown above the caption. */
  kicker?: string;
  /** Intrinsic aspect, from the file. Drives the frame so nothing is cropped. */
  ratio?: string;
}

interface GalleryProps {
  tiles: GalleryTile[];
  /** Renders the band full-bleed on a dark ground instead of the page ground. */
  dark?: boolean;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  /** Column count at lg. Defaults to 3 — see the balance note below. */
  columns?: 2 | 3;
}

/* A tile's rendered height is 1/ratio of its column width. Balancing columns on
   that estimate keeps the three columns within a few px of each other, so the
   band ends on a flat line instead of a staircase. */
const ratioValue = (r?: string) => {
  if (!r) return 1;
  const [w, h] = r.split('/').map((n) => parseFloat(n.trim()));
  return w && h ? w / h : 1;
};

export const Gallery: React.FC<GalleryProps> = ({
  tiles,
  dark = false,
  eyebrow,
  title,
  intro,
  columns = 3,
}) => {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  /* The split depends on how many columns are actually on screen, so track it.
     1 column (phone): document order. 2 (sm) and 3 (lg): a balanced split. */
  const [liveCols, setLiveCols] = useState<number>(columns);
  useEffect(() => {
    const read = () => {
      const w = window.innerWidth;
      if (w < 640) setLiveCols(1);
      else if (w < 1024) setLiveCols(2);
      else setLiveCols(columns);
    };
    read();
    window.addEventListener('resize', read);
    return () => window.removeEventListener('resize', read);
  }, [columns]);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + tiles.length) % tiles.length)),
    [tiles.length],
  );

  /* Keyboard: Escape closes, arrows move. Also locks the page behind the lightbox. */
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  /* Balance into columns by MEASURED height — solved exactly, not greedily.
   *
   * A tile's rendered height is (column width / ratio) + its caption plate, so
   * every height is known before paint. Greedy "shortest column next" left a
   * 0.45 col-width rag on this set — a visible staircase at the foot of the
   * band. Assigning each tile to a column by exhaustive search finds:
   *
   *   3 columns  spread 0.15 col-widths   (greedy 0.45, original grid 55% crop)
   *   2 columns  spread 0.17 col-widths   (greedy 1.22)
   *
   * Nine tiles is 3^9 assignments; the symmetry break below keeps it to
   * thousands of nodes. It is a pure function of the ratios, so it stays
   * correct when she swaps or adds a photograph. */
  const buckets = React.useMemo(() => {
    const n = Math.min(liveCols, tiles.length);
    const CAPTION = 0.34; // caption plate, in column-widths
    const h = tiles.map((t) => 1 / ratioValue(t.ratio) + CAPTION);
    const N = tiles.length;

    if (n <= 1) return tiles.map((tile, index) => [{ tile, index }]);

    const greedy = () => {
      const cols: number[][] = Array.from({ length: n }, () => []);
      const hh = new Array(n).fill(0);
      for (let i = 0; i < N; i++) {
        const k = hh.indexOf(Math.min(...hh));
        cols[k].push(i);
        hh[k] += h[i];
      }
      return cols;
    };

    /* Search only while it is cheap; fall back gracefully beyond that. */
    if (N > 14 || n > 4) {
      return greedy().map((g) => g.map((i) => ({ tile: tiles[i], index: i })));
    }

    let bestSpread = Infinity;
    let bestGroups: number[][] | null = null;
    const groups: number[][] = Array.from({ length: n }, () => []);

    const recurse = (i: number) => {
      if (i === N) {
        if (groups.some((g) => g.length === 0)) return;
        const hs = groups.map((g) => g.reduce((a, j) => a + h[j], 0));
        const spread = Math.max(...hs) - Math.min(...hs);
        if (spread < bestSpread) {
          bestSpread = spread;
          bestGroups = groups.map((g) => [...g]);
        }
        return;
      }
      /* symmetry break: only open a new column if one is already used */
      const used = groups.filter((g) => g.length > 0).length;
      for (let k = 0; k < Math.min(used + 1, n); k++) {
        groups[k].push(i);
        recurse(i + 1);
        groups[k].pop();
      }
    };
    recurse(0);

    const solved: number[][] = bestGroups ?? greedy();
    /* keep document order inside each column so the band reads in sequence */
    return solved.map((g) =>
      g.slice().sort((a, b) => a - b).map((i) => ({ tile: tiles[i], index: i }))
    );
  }, [tiles, liveCols]);

  const captionColour = dark ? 'rgba(255,255,255,.55)' : '#94a3b8';
  const captionInk = dark ? '#fff' : 'var(--ink)';
  const rule = dark ? 'rgba(255,255,255,.14)' : 'rgba(16,35,28,.12)';

  return (
    <>
      {(eyebrow || title || intro) && (
        <div className="mx-auto max-w-[1240px]">
          {eyebrow && (
            <span
              className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em]"
              style={{ color: dark ? 'rgba(255,255,255,.5)' : '#94a3b8' }}
            >
              <span aria-hidden className="h-px w-8" style={{ background: 'var(--lime)' }} />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="display-spread" style={{ color: dark ? '#fff' : 'var(--ink)', maxWidth: '20ch' }}>
              {title}
            </h2>
          )}
          {intro && (
            <p
              className="mt-4 max-w-[52ch] text-[15px] leading-relaxed"
              style={{ color: dark ? 'rgba(255,255,255,.68)' : '#64748b' }}
            >
              {intro}
            </p>
          )}
        </div>
      )}

      {/* Column flow. Each column is its own stack, so a tall photograph never
          forces the tile beside it to stretch or leaves a hole.
          Explicit placement, because three auto-placed stacks in a two-column
          grid would push the third stack onto an implicit third column and
          scroll the page sideways on a phone. */}
      <div
        className="mx-auto mt-10 grid max-w-[1240px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        style={{ alignItems: 'start' }}
      >
        {buckets.map((col, ci) => (
          <div
            key={ci}
            className={`flex flex-col gap-3 sm:gap-4 ${
              ci === 1 ? 'sm:col-start-2' : ci === 2 ? 'sm:col-start-1 sm:col-end-3 lg:col-start-3 lg:col-end-4' : 'sm:col-start-1'
            }`}
            /* Only the columns the live layout is using get placed explicitly;
               the rest are hidden so they cannot create a phantom column. */
            style={{ display: ci < liveCols ? undefined : 'none' }}
          >
            {col.map(({ tile, index }) => (
              <motion.figure
                key={tile.src}
                /* A media query in CSS cannot stop Framer's inline transforms —
                   it has to be told explicitly, or the band still moves for
                   someone who has asked their OS not to move things. */
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group m-0"
              >
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  className="relative block w-full overflow-hidden rounded-[18px] cursor-pointer"
                  style={{
                    background: dark ? 'rgba(255,255,255,.05)' : '#efece6',
                    border: dark ? '1px solid rgba(255,255,255,.10)' : '1px solid rgba(16,35,28,.07)',
                    /* the frame IS the photograph's ratio — no crop at all */
                    aspectRatio: tile.ratio ?? '1 / 1',
                  }}
                  aria-label={`Open image: ${tile.caption}`}
                >
                  <img
                    src={`${tile.src}.jpg`}
                    alt={tile.caption}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.035]"
                  />
                  {/* the only overlay left: a hairline top edge for the light */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{ background: 'rgba(255,255,255,.22)' }}
                  />
                </button>
                {/* Caption plate UNDER the frame: one ground, one baseline. */}
                <figcaption
                  className="mt-2 flex items-start justify-between gap-3 border-t pt-2"
                  style={{ borderColor: rule }}
                >
                  <span className="min-w-0">
                    {tile.kicker && (
                      <span
                        className="block text-[9px] font-black uppercase tracking-[0.2em]"
                        style={{ color: captionColour }}
                      >
                        {tile.kicker}
                      </span>
                    )}
                    <span
                      className="block text-[12px] font-semibold leading-snug"
                      style={{ color: captionInk }}
                    >
                      {tile.caption}
                    </span>
                  </span>
                  <span
                    className="shrink-0 text-[10px] font-bold tabular-nums"
                    style={{ color: captionColour }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {createPortal(
        <AnimatePresence>
          {open !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={close}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
              style={{ background: 'rgba(6,20,16,.92)', backdropFilter: 'blur(8px)' }}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 rounded-full p-2.5 text-white/80 transition hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              {tiles.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      step(-1);
                    }}
                    aria-label="Previous"
                    className="absolute left-2 z-10 rounded-full p-2.5 text-white/70 transition hover:bg-white/10 hover:text-white sm:left-5 cursor-pointer"
                  >
                    <ChevronLeft className="h-7 w-7" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      step(1);
                    }}
                    aria-label="Next"
                    className="absolute right-2 z-10 rounded-full p-2.5 text-white/70 transition hover:bg-white/10 hover:text-white sm:right-5 cursor-pointer"
                  >
                    <ChevronRight className="h-7 w-7" />
                  </button>
                </>
              )}

              <motion.figure
                key={tiles[open].src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="m-0 flex max-h-full max-w-[min(1100px,92vw)] flex-col items-center"
              >
                <img
                  src={`${tiles[open].src}.jpg`}
                  alt={tiles[open].caption}
                  className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                />
                <figcaption className="mt-4 text-center">
                  {tiles[open].kicker && (
                    <span className="block text-[10px] font-black uppercase tracking-[0.16em] text-white/50">
                      {tiles[open].kicker}
                    </span>
                  )}
                  <span className="text-[14px] font-semibold text-white/90">
                    {tiles[open].caption}
                  </span>
                </figcaption>
              </motion.figure>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Gallery — editorial photography band with a lightbox              */
/*                                                                    */
/*  Every tile is entrance-only motion: it fades and lifts in once,   */
/*  then stops. The lightbox is portalled to <body> so a transformed  */
/*  ancestor can never trap it (the bug that broke the product modal  */
/*  on the home page), and it closes on Escape or a backdrop click.   */
/* ------------------------------------------------------------------ */

export interface GalleryTile {
  /** Path under /public, e.g. /images/gallery/hair-food.jpg */
  src: string;
  /** Short caption under the tile — states what the picture is, nothing more. */
  caption: string;
  /** Optional kicker shown above the caption. */
  kicker?: string;
  /** `tall` tiles get extra column span on wide screens. */
  tall?: boolean;
}

interface GalleryProps {
  tiles: GalleryTile[];
  /** Renders the band full-bleed on a dark ground instead of on the page ground. */
  dark?: boolean;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ tiles, dark = false, eyebrow, title, intro }) => {
  const [open, setOpen] = useState<number | null>(null);

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

  return (
    <>
      {(eyebrow || title || intro) && (
        <div className="mx-auto max-w-[1240px]">
          {eyebrow && (
            <span
              className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]"
              style={
                dark
                  ? { background: 'rgba(255,255,255,.12)', color: '#fff' }
                  : { background: 'rgba(16,35,28,.07)', color: 'var(--ink)' }
              }
            >
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 display-lg" style={{ color: dark ? '#fff' : 'var(--ink)' }}>
              {title}
            </h2>
          )}
          {intro && (
            <p
              className="mt-4 max-w-[560px] text-[16px] leading-relaxed"
              style={{ color: dark ? 'rgba(255,255,255,.7)' : '#64748b' }}
            >
              {intro}
            </p>
          )}
        </div>
      )}

      <div
        className="mx-auto mt-10 grid max-w-[1240px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        /* `dense` lets the packing algorithm back-fill the hole a 2x2 tile leaves,
           so the band never shows a gap. Tile counts are also chosen to fill the
           rows exactly: one 2x2 tile (4 cells) plus eight normals is 12 cells, or
           three full rows of four. */
        style={{ alignItems: 'stretch', gridAutoFlow: 'row dense' }}
      >
        {tiles.map((t, i) => (
          <motion.button
            key={t.src}
            type="button"
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-[22px] text-left cursor-pointer ${
              t.tall ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
            style={{
              background: dark ? 'rgba(255,255,255,.06)' : '#efece6',
              border: dark ? '1px solid rgba(255,255,255,.10)' : '1px solid rgba(16,35,28,.07)',
            }}
            aria-label={`Open image: ${t.caption}`}
          >
            <img
              src={`${t.src}.jpg`}
              alt={t.caption}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.045] ${
                t.tall ? 'aspect-[4/5]' : 'aspect-square'
              }`}
            />
            {/* Caption plate: readable on any photograph, and it is what makes the
                band feel like a catalogue rather than a wall of pictures. */}
            <span
              className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 sm:p-4"
              style={{
                background:
                  'linear-gradient(180deg, rgba(4,16,12,0) 0%, rgba(4,16,12,.72) 62%, rgba(4,16,12,.88) 100%)',
              }}
            >
              {t.kicker && (
                <span className="block text-[10px] font-black uppercase tracking-[0.16em] text-white/60">
                  {t.kicker}
                </span>
              )}
              <span className="block text-[13px] font-bold leading-snug text-white sm:text-[14px]">
                {t.caption}
              </span>
            </span>
          </motion.button>
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

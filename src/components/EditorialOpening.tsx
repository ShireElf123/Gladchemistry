import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  EditorialOpening — what the page opens with                       */
/*                                                                    */
/*  A catalogue opens with a grid. A brand opens with a plate.        */
/*                                                                    */
/*  Every frame is 4:5, cut at that exact aspect from her own files   */
/*  so no jar is ever sliced by object-fit. Three plates on one       */
/*  baseline, then one full-bleed zoom of the same subject at the     */
/*  scale the eye wants — that single close-up is what stops the      */
/*  block reading as a contact sheet. Captions are ledger rules under */
/*  each plate, set small and quiet.                                  */
/* ------------------------------------------------------------------ */

interface Plate {
  src: string;
  alt: string;
  caption: string;
  meta: string;
}

const PLATES: Plate[] = [
  {
    src: '/images/gallery/ed-hair-food-4x5.jpg',
    alt: 'Gladchemistry Hair Food jar, 100 g',
    caption: 'Hair Food',
    meta: '100 g',
  },
  {
    src: '/images/gallery/ed-shea-butter-4x5.jpg',
    alt: 'A white bowl of 100% Pure Raw Shea Butter, 100 g, with a dried leaf and two shea nuts',
    caption: '100% Pure Raw Shea Butter',
    meta: '100 g · Ghana',
  },
  {
    src: '/images/gallery/ed-sheacoco-4x5.jpg',
    alt: 'Gladchemistry SheaCoco Hair Care jar',
    caption: 'SheaCoco Hair Care',
    meta: 'Hair food',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export const EditorialOpening: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  /* One quiet parallax on the plate row — a single transform, so it never
     fights the per-plate reveals and costs nothing on scroll. */
  useEffect(() => {
    let ctx: gsap.Context | undefined;
    let killed = false;
    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (killed || !ref.current) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      ctx = gsap.context(() => {
        gsap.to('.ed-drift', {
          yPercent: -2.5,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
        });
        gsap.fromTo(
          '.ed-zoom img',
          { scale: 1.14 },
          {
            scale: 1.02,
            ease: 'none',
            scrollTrigger: { trigger: '.ed-zoom', start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      }, ref);
    })();
    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={ref} className="px-[5vw] pt-[104px] pb-[28px]">
      <div className="mx-auto max-w-[1240px]">
        {/* Masthead: rule + eyebrow, a statement set large, one paragraph in a
            narrow measure. Three weights of voice. */}
        <div className="grid gap-y-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400"
            >
              <span aria-hidden className="h-px w-8" style={{ background: 'var(--fern)' }} />
              The shelf
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: 0.05, ease: EASE }}
              className="display-xl"
              style={{ color: 'var(--ink)', maxWidth: '16ch' }}
            >
              Made for the{' '}
              <em className="not-italic" style={{ color: 'var(--fern)' }}>
                everyday
              </em>{' '}
              shelf.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
              className="text-[16px] leading-[1.75] text-slate-500"
            >
              Three houses, filled and labelled in South Africa: personal care from
              Gladchemistry, fine fragrance from Feliz be Glad, and hard-working cleaning
              from Bubbles Detergents.
            </motion.p>
          </div>
        </div>

        {/* Three plates, one baseline, equal optical weight. */}
        <div className="ed-drift mt-14 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-3">
          {PLATES.map((plate, i) => (
            <motion.figure
              key={plate.src}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              className="group m-0"
            >
              <div className="relative overflow-hidden rounded-[18px]" style={{ background: '#e9e5dd' }}>
                <img
                  src={plate.src}
                  alt={plate.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="block w-full transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                  style={{ aspectRatio: '4 / 5', objectFit: 'cover' }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{ background: 'rgba(255,255,255,.5)' }}
                />
              </div>
              <figcaption
                className="mt-3 flex items-baseline justify-between gap-3 border-t pt-2.5"
                style={{ borderColor: 'rgba(16,35,28,.14)' }}
              >
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink)' }}>
                  {plate.caption}
                </span>
                <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-slate-400">
                  {plate.meta}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* The zoom. One frame, full bleed, the jar at the scale the eye wants
            to inspect it — and the only place a call to action appears, so the
            photography is never interrupted by buttons. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="ed-zoom relative mt-6 overflow-hidden rounded-[18px]"
          style={{ background: '#e9e5dd' }}
        >
          <div className="grid lg:grid-cols-12">
            <div className="relative overflow-hidden lg:col-span-8" style={{ aspectRatio: '21 / 9' }}>
              <img
                src="/images/gallery/ed-shea-zoom.jpg"
                alt="Close crop of the Gladchemistry 100% Pure Raw Shea Butter label, 100 g, Country of Origin: Ghana"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 50%' }}
              />
            </div>
            <div
              className="flex flex-col justify-between gap-6 p-7 lg:col-span-4 lg:p-8"
              style={{ background: 'var(--ink)' }}
            >
              <div>
                <p
                  className="text-[11px] font-black uppercase tracking-[0.24em]"
                  style={{ color: 'var(--lime)' }}
                >
                  Sixteen products
                </p>
                <p
                  className="mt-3 font-display text-[26px] leading-[1.15] tracking-[-0.02em] text-white"
                >
                  Filled and labelled in Springs, Gauteng.
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                  Household, personal care and pet care — order on WhatsApp and collect at the
                  shop, or have it sent.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/shop" className="btn btn-lime w-full justify-center">
                  Shop the range
                </Link>
                <Link
                  to="/about"
                  className="btn w-full justify-center"
                  style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.28)', color: '#fff' }}
                >
                  Our story
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

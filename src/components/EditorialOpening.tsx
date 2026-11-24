import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  EditorialOpening — what the page opens with                       */
/*                                                                    */
/*  A catalogue opens with a grid. A brand opens with a spread.       */
/*                                                                    */
/*  Structure, top to bottom:                                         */
/*   01  a masthead that names the shop, not a slogan                 */
/*   02  the Gladchemistry plates — three 4:5 frames on one baseline  */
/*   03  a full-bleed fragrance band, her frame edge to edge          */
/*   04  the same shelf, zoomed: one 21:9 crop of her label, and the  */
/*       only call to action on the page this early                   */
/*                                                                    */
/*  Every crop was cut at the aspect it displays at, from her own     */
/*  files, centred on the measured subject — so no jar is sliced by   */
/*  object-fit at any viewport.                                       */
/* ------------------------------------------------------------------ */

const PLATES = [
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

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.85, delay, ease: EASE },
});

export const EditorialOpening: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  /* Two scrubbed transforms only: a slow drift on the plate row, and the zoom
     easing back as it enters. One context, so it all reverts together. */
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
          { scale: 1.12 },
          {
            scale: 1.01,
            ease: 'none',
            scrollTrigger: { trigger: '.ed-zoom', start: 'top bottom', end: 'center center', scrub: true },
          }
        );
        gsap.fromTo(
          '.ed-band img',
          { scale: 1.1, yPercent: -2 },
          {
            scale: 1,
            yPercent: 2,
            ease: 'none',
            scrollTrigger: { trigger: '.ed-band', start: 'top bottom', end: 'bottom top', scrub: true },
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
        {/* 01 — masthead */}
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
              className="display-spread"
              style={{ color: 'var(--ink)', maxWidth: '17ch' }}
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

        {/* 02 — the personal-care plates, three on one baseline */}
        <div className="ed-drift mt-14 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-3">
          {PLATES.map((plate, i) => (
            <motion.figure key={plate.src} {...reveal(i * 0.1)} className="group m-0">
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
                <span
                  className="text-[12px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: 'var(--ink)' }}
                >
                  {plate.caption}
                </span>
                <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-slate-400">
                  {plate.meta}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* 03 — the house that has not been in the opening yet. On a wide screen
            this is her frame edge to edge with one line set over the dark left
            third where the photograph is empty. On a phone a 21:9 band with text
            over it collapses, so it becomes a portrait crop with the copy below.

            <picture> rather than two <img>s: only the crop the viewport actually
            needs is downloaded, so a phone never pays for the 1600px band. */}
        <motion.div
          {...reveal()}
          className="ed-band relative mt-16 overflow-hidden rounded-[18px]"
          style={{ background: 'var(--ink)' }}
        >
          <picture>
            <source media="(max-width: 639px)" srcSet="/images/gallery/ed-fragrance-tall.jpg" />
            <img
              src="/images/gallery/ed-fragrance-band.jpg"
              alt="The Feliz be Glad fragrance collection: a full shelf of bottles under warm light"
              loading="lazy"
              decoding="async"
              /* 4:5 on a phone, 21:9 from sm up — set in CSS so the phone crop
                 is never letterboxed by an inline ratio winning the cascade. */
              className="block w-full object-cover aspect-[4/5] sm:aspect-[21/9]"
              data-crop="responsive"
            />
          </picture>

          {/* The scrim only exists where there is copy over the photograph. */}
          <div
            aria-hidden
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,16,13,.90) 0%, rgba(8,16,13,.84) 16%, rgba(8,16,13,.62) 30%, rgba(8,16,13,.24) 44%, rgba(8,16,13,0) 56%)',
            }}
          />

          <div className="absolute inset-y-0 left-0 hidden max-w-[360px] flex-col justify-center gap-3 p-8 sm:flex lg:p-10">
            <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: 'var(--lime)' }}>
              Feliz be Glad
            </p>
            <p className="display-spread text-white">
              Fine fragrance,
              <br />
              on the same shelf.
            </p>
            <p className="mt-1 max-w-[34ch] text-[14px] leading-relaxed text-white/70">
              Eau de parfum, reed diffusers and car perfumes — kept beside the everyday
              essentials, not in a separate shop.
            </p>
          </div>

          {/* phone: the copy sits under the photograph, never on top of it */}
          <div className="flex flex-col gap-3 bg-[var(--ink)] p-6 sm:hidden">
            <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: 'var(--lime)' }}>
              Feliz be Glad
            </p>
            <p className="display-spread text-white">
              Fine fragrance,
              <br />
              on the same shelf.
            </p>
            <p className="max-w-[38ch] text-[14px] leading-relaxed text-white/70">
              Eau de parfum, reed diffusers and car perfumes — kept beside the everyday
              essentials, not in a separate shop.
            </p>
          </div>
        </motion.div>

        {/* 04 — the zoom: her label at the scale the eye wants, and the only
            call to action this early on the page. */}
        <motion.div
          {...reveal()}
          className="ed-zoom relative mt-6 overflow-hidden rounded-[18px]"
          style={{ background: '#e9e5dd' }}
        >
          <div className="grid lg:grid-cols-12">
            {/* aspect only where the two cells sit side by side; stacked on a
                phone this sets its own 16:9 so the label is not letterboxed. */}
            <div className="relative overflow-hidden lg:col-span-8 lg:aspect-[21/9]">
              <img
                src="/images/gallery/ed-shea-zoom.jpg"
                alt="Close crop of the Gladchemistry 100% Pure Raw Shea Butter label, 100 g, Country of Origin: Ghana"
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover"
                style={{ aspectRatio: '16 / 9', objectPosition: 'center 50%' }}
              />
            </div>
            <div
              className="flex flex-col justify-between gap-6 p-7 lg:col-span-4 lg:p-8"
              style={{ background: 'var(--ink)' }}
            >
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: 'var(--lime)' }}>
                  Sixteen products
                </p>
                <p className="mt-3 font-display text-[26px] leading-[1.15] tracking-[-0.02em] text-white">
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

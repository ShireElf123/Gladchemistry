import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BRANDS, BRAND_LIST } from '../data/brands';
import type { BrandId } from '../data/brands';
import { PRODUCTS } from '../data/products';

/* ------------------------------------------------------------------ */
/*  Hero — one surface, one visual, one idea.                          */
/*                                                                     */
/*  Motion principles inherited from the Fizzly Soda hero (settle-in   */
/*  headline, parallax on scroll, a pausable drift), but the           */
/*  composition is deliberately reduced: a single warm paper field, a  */
/*  single art-directed brand photograph, and the type. No stacked     */
/*  photographic backdrops, no floating catalogue packs.               */
/* ------------------------------------------------------------------ */

export const Hero: React.FC = () => {
  const [brandId, setBrandId] = useState<BrandId>('gladchemistry');
  const [paused, setPaused] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  const brand = BRANDS[brandId];
  const count = PRODUCTS.filter((p) => p.brand === brandId).length;

  const reduceMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------- intro + parallax */
  useEffect(() => {
    let ctx: gsap.Context | undefined;
    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      if (reduceMotion()) return;

      ctx = gsap.context(() => {
        gsap.from('.hero-word', {
          yPercent: 110,
          opacity: 0,
          stagger: 0.09,
          duration: 0.85,
          ease: 'power4.out',
          delay: 0.1,
        });
        gsap.from('.hero-rise', {
          y: 26,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.45,
        });
        /* The single hero visual settles in, then drifts almost
           imperceptibly. Restrained depth, not a carousel. */
        gsap.from('.hero-art', {
          opacity: 0,
          scale: 0.965,
          y: 24,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        });
        gsap.to('.hero-art', {
          yPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            scrub: true,
            start: 'top top',
            end: 'bottom top',
          },
        });
      }, heroRef);
    })();

    return () => ctx?.revert();
  }, []);

  /* --------------------------------------------- gentle pointer drift */
  useEffect(() => {
    if (reduceMotion()) return;
    let gsapRef: typeof gsap | undefined;
    import('gsap').then(({ default: g }) => (gsapRef = g));

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || paused || !gsapRef || !pointerRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      gsapRef.to(pointerRef.current, {
        x: -x * 14,
        y: -y * 10,
        duration: 1.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [paused]);

  /* --------------------------------------------- breathing float tween */
  useEffect(() => {
    let tween: gsap.core.Tween | undefined;
    let killed = false;
    (async () => {
      const { default: gsap } = await import('gsap');
      if (reduceMotion() || killed || !artRef.current) return;
      tween = gsap.to(artRef.current, {
        y: '+=12',
        duration: 5.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
      if (paused) tween.pause();
    })();
    return () => {
      killed = true;
      tween?.kill();
    };
  }, [paused, brandId]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: 'var(--cream)',
        paddingTop: 'clamp(88px, 12vh, 132px)',
        paddingBottom: 'clamp(56px, 8vh, 96px)',
      }}
    >
      {/* One deliberate background treatment: a single soft wash in the
          active house's tone, deepening to nothing. No gradient stacks. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-colors duration-700"
        style={{
          background: `radial-gradient(120% 90% at 78% 8%, ${brand.stageTone} 0%, rgba(251,247,240,0) 62%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-[5vw]">
        <div className="grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] items-center gap-y-12 lg:gap-x-14">
          {/* ---------------------------------------------------- copy */}
          <div className="max-w-[620px]">
            <div className="hero-rise flex items-center gap-3">
              <span
                className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] transition-colors duration-500"
                style={{ background: brand.stageTone, color: brand.inkColor }}
              >
                {brand.name}
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">
                Est. 2016 · Springs
              </span>
            </div>

            <h1
              className="font-display mt-5"
              style={{
                color: 'var(--ink)',
                /* Sized so the longest line ("properly made.") still fits the
                   copy column on a 1440 desktop — never clipped by the mask. */
                fontSize: 'clamp(38px, 5.5vw, 76px)',
                lineHeight: 0.96,
                letterSpacing: '-0.04em',
              }}
            >
              {/* Each word is masked so it can rise from behind a clean
                  edge — the soda settle-in, with none of the rotation. */}
              {[
                [{ t: 'Pure' }, { t: 'care,' }],
                [{ t: 'properly' }, { t: 'made.', accent: true }],
              ].map((line, li) => (
                <span key={li} className="block overflow-hidden pb-[0.06em]">
                  {line.map((w, wi) => (
                    <span
                      key={wi}
                      className="hero-word inline-block"
                      style={{
                        color: w.accent ? brand.primaryColor : 'var(--ink)',
                        marginRight: '0.22em',
                      }}
                    >
                      {w.t}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p
              className="hero-rise mt-6 max-w-[46ch] text-[16px] leading-relaxed"
              style={{ color: 'var(--ink-soft)' }}
            >
              <strong style={{ color: 'var(--ink)' }}>{brand.tagline}</strong> — {brand.description}
            </p>

            {/* Brand switcher: real buttons with names, not mystery dots */}
            <div className="hero-rise mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Choose a house">
              {BRAND_LIST.map((b) => {
                const on = b.id === brandId;
                return (
                  <button
                    key={b.id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setBrandId(b.id)}
                    className="rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-300"
                    style={{
                      background: on ? b.primaryColor : '#fff',
                      color: on ? '#fff' : 'var(--ink-soft)',
                      border: `1.5px solid ${on ? b.primaryColor : 'rgba(16,35,28,.14)'}`,
                    }}
                  >
                    {b.name}
                  </button>
                );
              })}
            </div>

            <div className="hero-rise mt-7 flex flex-wrap items-center gap-2.5">
              <Link to={`/shop?brand=${brand.id}`} className="btn btn-ink">
                View the range
              </Link>
              <Link to="/brands" className="btn btn-ghost">
                Meet the houses
              </Link>
            </div>

            <p className="hero-rise mt-6 text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400">
              {count} products · {PRODUCTS.length} across three houses
            </p>
          </div>

          {/* ----------------------------------------------------- art */}
          <div className="relative">
            {/* Soft contact shadow, tied to the same surface — not a panel */}
            <div
              aria-hidden
              className="absolute inset-x-6 bottom-[-18px] h-10 rounded-[50%]"
              style={{ background: 'rgba(16,35,28,.16)', filter: 'blur(26px)' }}
            />
            <div ref={pointerRef} className="relative">
              <div
                ref={artRef}
                className="hero-art relative overflow-hidden"
                style={{
                  borderRadius: 28,
                  aspectRatio: '16 / 9',
                  background: brand.stageTone,
                  boxShadow: '0 34px 70px -34px rgba(16,35,28,.42)',
                  border: '1px solid rgba(16,35,28,.07)',
                }}
              >
                {/* No photograph. The hero used to run a generated brand scene,
                    which invented packaging the shop does not sell. Until real
                    photography exists the art panel carries the house mark and
                    its colours, and nothing that could be mistaken for a product. */}
                <div
                  className="w-full h-full grid place-items-center"
                  style={{ background: brand.stageTone }}
                >
                  <div className="text-center px-6">
                    <div
                      className="mx-auto mb-4 grid place-items-center rounded-full"
                      style={{
                        width: 78, height: 78,
                        background: brand.primaryColor,
                        color: brand.inkColor,
                      }}
                    >
                      <span className="font-display text-[26px] font-extrabold">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                    <p
                      className="font-display text-[22px] font-extrabold leading-tight"
                      style={{ color: brand.inkColor }}
                    >
                      {brand.name}
                    </p>
                    <p
                      className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: brand.inkColor, opacity: 0.65 }}
                    >
                      {brand.tagline}
                    </p>
                  </div>
                </div>

                {/* A single hairline caption plate, flush to the frame */}
                <div
                  className="absolute left-0 right-0 bottom-0 flex items-center justify-between px-4 py-3"
                  style={{
                    background: 'rgba(12,26,20,.55)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.14em] text-white/90">
                    {brand.highlights[0]}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.14em]" style={{ color: 'var(--lime)' }}>
                    Made in SA
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="absolute -bottom-3 right-3 z-20 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] transition-colors"
              style={{ background: '#fff', color: 'var(--ink)', border: '1px solid rgba(16,35,28,.12)' }}
            >
              {paused ? 'Resume motion' : 'Pause motion'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

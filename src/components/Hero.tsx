import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRANDS, BRAND_LIST } from '../data/brands';
import type { BrandId } from '../data/brands';
import { PRODUCTS } from '../data/products';

/* ------------------------------------------------------------------ */
/*  Hero — ported from the Fizzly Soda hero, in Gladchemistry terms    */
/* ------------------------------------------------------------------ */

/** Per-brand hero accent cycle, matching the soda site's blob sequence. */
const ACCENTS: Record<BrandId, string[]> = {
  gladchemistry: ['#3de0d2', '#c8ff2e', '#7ee59f', '#b7f5c8', '#e8ffb0', '#46dcf5'],
  'felis-be-glad': ['#ffc933', '#ffb37a', '#c9a8ff', '#ffd98a', '#f7c6a0', '#ffe9b0'],
  'bubbles-detergents': ['#46dcf5', '#7dd3fc', '#c8ff2e', '#a5e8ff', '#d9f7ff', '#8ee6ff'],
};

/** Bubbles for the canvas. */
interface Bubble {
  x: number;
  y: number;
  r: number;
  s: number;
  w: number;
}

export const Hero: React.FC = () => {
  const [brandId, setBrandId] = useState<BrandId>('gladchemistry');
  const [paused, setPaused] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canRef = useRef<HTMLDivElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const fruitRefs = useRef<HTMLDivElement[]>([]);
  const bubbleTweens = useRef<gsap.core.Tween[]>([]);
  const rafRef = useRef(0);
  const pausedRef = useRef(false);
  const visibleRef = useRef(true);

  const brand = BRANDS[brandId];
  const accent = ACCENTS[brandId];

  /* ------------------------------------------------------- hero rotation
     The hero cycles through the range on its own, the way an agency showreel
     does, and any of the dots below can pin it to one house. `showreel` is the
     ordered set of products the hero is allowed to show; `slide` indexes it.
     When the house changes the index is reset inside the same handler, so the
     pack never renders one frame of the previous brand's product. */
  const showreel = PRODUCTS.filter((p) => p.brand === brandId);
  const [slide, setSlide] = useState(0);
  const heroProduct = showreel[slide % showreel.length] ?? PRODUCTS[0];

  const pickBrand = (id: BrandId) => {
    setBrandId(id);
    setSlide(0);
  };
  const advance = (dir: number) =>
    setSlide((i) => (i + dir + showreel.length) % showreel.length);

  /* Autoplay. Paused by the existing "Pause motion" button, by hovering the
     stage, by keyboard focus inside it, and whenever the hero is scrolled out of
     view — a rotating hero should never burn battery off-screen. Off entirely
     under prefers-reduced-motion. */
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (paused || hovered || reduceMotion() || showreel.length < 2) return;
    const id = window.setInterval(() => setSlide((i) => (i + 1) % showreel.length), 4600);
    return () => window.clearInterval(id);
  }, [paused, hovered, showreel.length, brandId]);

  const reduceMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------- bubble canvas */
  const drawBubbles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const bubbles: Bubble[] = Array.from({ length: 46 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 2 + Math.random() * 9,
      s: 0.3 + Math.random() * 1.1,
      w: Math.random() * 6,
    }));

    const frame = () => {
      rafRef.current = 0;
      if (pausedRef.current || !visibleRef.current) return;
      ctx.clearRect(0, 0, W, H);
      for (const b of bubbles) {
        b.y -= b.s;
        b.w += 0.03;
        if (b.y < -20) {
          b.y = H + 20;
          b.x = Math.random() * W;
        }
        const px = b.x + Math.sin(b.w) * 10;
        ctx.beginPath();
        ctx.arc(px, b.y, b.r, 0, 7);
        ctx.strokeStyle = 'rgba(255,255,255,.35)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = 'rgba(255,255,255,.08)';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.2, 0, 7);
        ctx.fillStyle = 'rgba(255,255,255,.6)';
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
  }, []);

  /* --------------------------------------------------- intro + float in */
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
        // Headline words rise in
        gsap.from('.hero-word', {
          y: 120,
          rotate: -12,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(2)',
          delay: 0.15,
        });
        // Pack drops in and bounces
        gsap.from('.hero-can', {
          y: -320,
          opacity: 0,
          duration: 1,
          ease: 'bounce.out',
          delay: 0.3,
        });
        // Colour blobs scale up
        gsap.from('.hero-blob', {
          scale: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: 'elastic.out(1,.6)',
          delay: 0.2,
        });
        // Side cards
        gsap.from('.hero-side', {
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          delay: 0.7,
        });
        // Parallax on scroll
        gsap.to('.hero-can-wrap', {
          yPercent: -6,
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

  /* --------------------------------------------------- bubbles lifecycle */
  useEffect(() => {
    if (reduceMotion()) return;
    drawBubbles();

    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      drawBubbles();
    };
    window.addEventListener('resize', onResize);

    const io =
      typeof IntersectionObserver === 'function'
        ? new IntersectionObserver((entries) => {
            visibleRef.current = entries[0].isIntersecting;
            if (!visibleRef.current && rafRef.current) {
              cancelAnimationFrame(rafRef.current);
              rafRef.current = 0;
            } else if (visibleRef.current && !rafRef.current) {
              drawBubbles();
            }
          })
        : null;
    if (io && heroRef.current) io.observe(heroRef.current);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      io?.disconnect();
    };
  }, [drawBubbles]);

  /* --------------------------------------------------- floating fruit */
  useEffect(() => {
    let killed = false;
    (async () => {
      const { default: gsap } = await import('gsap');
      if (reduceMotion() || killed) return;

      bubbleTweens.current.forEach((t) => t.kill());
      bubbleTweens.current = [];

      fruitRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { scale: 0, rotate: -90 },
          { scale: 1, rotate: i * 40, duration: 0.7, delay: 0.1 * i, ease: 'back.out(2)' },
        );
        const tween = gsap.to(el, {
          y: '+=18',
          duration: 2.2 + i * 0.3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
        if (pausedRef.current) tween.pause();
        bubbleTweens.current.push(tween);
      });
    })();
    return () => {
      killed = true;
    };
  }, [brandId]);

  /* --------------------------------------------------- splash pop-in */
  useEffect(() => {
    let ctx: gsap.Context | undefined;
    (async () => {
      const { default: gsap } = await import('gsap');
      if (reduceMotion() || !splashRef.current) return;
      ctx = gsap.context(() => {
        gsap.fromTo(
          splashRef.current,
          { opacity: 0, scale: 0.82, y: 30 },
          { opacity: 0.85, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        );
      });
    })();
    return () => ctx?.revert();
  }, [brandId]);

  /* --------------------------------------------------- pause control */
  const togglePause = () => {
    const next = !paused;
    setPaused(next);
    pausedRef.current = next;
    bubbleTweens.current.forEach((t) => (next ? t.pause() : t.resume()));
    if (next && rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    } else if (!next && !rafRef.current) {
      drawBubbles();
    }
  };

  /* --------------------------------------------------- pointer parallax */
  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse' || pausedRef.current) return;
    const x = e.clientX / window.innerWidth - 0.5;
    const gsapRef = (window as unknown as { gsap?: typeof gsap }).gsap;
    fruitRefs.current.forEach((el) => {
      if (!el || !gsapRef) return;
      const depth = Number(el.dataset.depth ?? 0.5);
      gsapRef.to(el, { x: -x * 90 * depth, duration: 1.4, overwrite: 'auto' });
    });
  };

  /* Expose gsap for the pointer handler */
  useEffect(() => {
    import('gsap').then(({ default: gsap }) => {
      (window as unknown as { gsap?: typeof gsap }).gsap = gsap;
    });
  }, []);

  const FRUIT_POS = [
    { left: '8%', top: '10%', size: 92 },
    { left: '78%', top: '6%', size: 104 },
    { left: '2%', top: '56%', size: 78 },
    { left: '84%', top: '50%', size: 96 },
    { left: '66%', top: '72%', size: 70 },
    { left: '20%', top: '76%', size: 86 },
  ];

  return (
    <section
      ref={heroRef}
      onPointerMove={onPointerMove}
      className="hero-shell relative overflow-hidden"
      style={{
        minHeight: '100svh',
        /* The ground is now the house's own photographic sweep. It is shot dark at
           the edges on purpose so it can sit UNDER the flat brand gradient: the
           gradient covers any seam at any aspect ratio, and the photograph supplies
           the grain, the light pool and the falloff a CSS gradient cannot fake. */
        background: `radial-gradient(ellipse at 50% 70%, rgba(14,106,114,.55) 0%, rgba(8,30,24,.86) 62%, var(--ink) 100%), url(${brand.heroImage}) center/cover no-repeat, var(--ink)`,
        padding: '24px 5vw 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      id="hero"
    >
      {/* Static depth: vignette comes from .hero-shell::after, grain from here.
          Both sit under the content and above the gradient, and neither animates. */}
      <div aria-hidden className="hero-grain" />

      {/* Animated bubbles */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Eyebrow — names the house you are currently looking at, so the big
          headline below is read in context rather than as a slogan. */}
      <div
        className="hero-side relative z-10 mb-3 flex items-center gap-2.5 rounded-full px-4 py-1.5"
        style={{
          background: 'rgba(255,255,255,.10)',
          border: '1px solid rgba(255,255,255,.20)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <span
          aria-hidden
          style={{
            width: 7,
            height: 7,
            borderRadius: 99,
            background: brand.primaryColor,
            boxShadow: `0 0 0 4px ${brand.primaryColor}33`,
          }}
        />
        <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white/85">
          {brand.name}
        </span>
      </div>

      {/* Oversized headline */}
      <h1
        className="relative z-10 text-center text-white font-display"
        style={{
          fontSize: 'clamp(46px, 9vw, 120px)',
          lineHeight: 0.92,
          letterSpacing: '-0.04em',
          maxWidth: '15ch',
        }}
      >
        <span className="hero-word inline-block">Pure</span>{' '}
        <span className="hero-word inline-block">care,</span>{' '}
        <span className="hero-word inline-block" style={{ color: 'var(--lime)' }}>
          properly
        </span>{' '}
        <span className="hero-word inline-block" style={{ color: 'var(--lime)' }}>
          made.
        </span>
      </h1>

      {/* Stage: blobs + fruit + product + splash */}
      <div
        ref={stageRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setHovered(true)}
        onBlurCapture={() => setHovered(false)}
        className="relative z-[2]"
        style={{
          width: 'min(92vw, 720px)',
          height: 'min(52vh, 520px)',
          marginTop: '-1vw',
        }}
      >
        {/* Colour blobs */}
        <i
          className="hero-blob absolute"
          style={{
            background: accent[0],
            left: '-4%',
            top: '18%',
            width: '38%',
            height: '44%',
            animation: 'blobMorph 9s ease-in-out infinite',
          }}
        />
        <i
          className="hero-blob absolute"
          style={{
            background: accent[1],
            left: '4%',
            bottom: '2%',
            width: '34%',
            height: '36%',
            animation: 'blobMorph 9s ease-in-out infinite',
            animationDelay: '-3s',
          }}
        />
        <i
          className="hero-blob absolute"
          style={{
            background: accent[2],
            right: '6%',
            bottom: '8%',
            width: '28%',
            height: '30%',
            animation: 'blobMorph 9s ease-in-out infinite',
            animationDelay: '-6s',
          }}
        />

        {/* Light pool behind the pack.

            This used to be the house photograph at blur(2px), masked to fade out.
            It was the third bad picture she spotted on Bubbles — and on any house it
            put a second set of products behind the product being sold. Replaced with
            a soft glow in the house colour: it does the same job of separating the
            pack from the ground, without adding pictures that are not hers. */}
        <div
          ref={splashRef}
          aria-hidden
          className="absolute inset-x-0 top-[-6%] bottom-0 z-[1] pointer-events-none"
          style={{
            opacity: 0,
            background: `radial-gradient(ellipse 52% 46% at 50% 52%, ${accent[0]}2e 0%, ${accent[1]}14 46%, transparent 72%)`,
            filter: 'blur(18px)',
          }}
        />

        {/* Floating "fruit" — here, the range's hero packs */}
        {FRUIT_POS.map((pos, i) => (
          <div
            key={`${brandId}-${i}`}
            ref={(el) => {
              if (el) fruitRefs.current[i] = el;
            }}
            data-depth={0.5 + (i % 3) * 0.4}
            className="absolute pointer-events-none"
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              zIndex: 3,
              filter: i % 3 === 2 ? 'blur(3px)' : 'none',
            }}
          >
            <div
              className="w-full h-full rounded-[26%] overflow-hidden"
              style={{
                background: brand.stageTone,
                boxShadow: '0 12px 24px -8px rgba(0,0,0,.55)',
              }}
            >
              <img
                src={PRODUCTS[(i * 3) % PRODUCTS.length].image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}

        {/* The product itself, centred and floating.

            The crossfade is deliberately short and vertical: the outgoing pack
            slides up and fades, the incoming one rises into place. A long dissolve
            makes a shop hero feel broken, and a flat swap makes it feel cheap. */}
        <div
          ref={canRef}
          className="hero-can-wrap absolute inset-0 grid place-items-center z-[4]"
        >
          <div
            className="hero-can animate-float-slow overflow-hidden"
            style={{
              width: 'min(52%, 260px)',
              aspectRatio: '3 / 4',
              borderRadius: 28,
              background: brand.stageTone,
              boxShadow: '0 30px 60px -18px rgba(0,0,0,.7), 0 0 0 6px rgba(255,255,255,.14)',
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={heroProduct.id}
                src={heroProduct.image}
                alt={heroProduct.name}
                initial={{ opacity: 0, y: 26, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -22, scale: 0.97, position: 'absolute' }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Caption + hover arrows, directly under the pack. This is what turns a
              floating picture into a product: it names it and prices it. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[1%] z-[6] flex flex-col items-center gap-2">
            {/* Fixed height, centred content: the longest name in the range is
                "Household Hygiene Black Dip Cleaning Liquid" at 43 characters,
                which wraps to two lines. Without a reserved box the caption would
                grow and shove the pack upward on every rotation. */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={heroProduct.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28 }}
                className="flex h-[86px] w-[min(86vw,340px)] flex-col items-center justify-center text-center"
              >
                <p className="text-[12px] font-black uppercase tracking-[0.14em] text-white/60">
                  {brand.name}
                </p>
                <p className="mt-0.5 line-clamp-2 font-display text-[15px] font-extrabold leading-tight text-white sm:text-[17px]">
                  {heroProduct.name}
                </p>
                <p className="mt-0.5 text-[13px] font-bold" style={{ color: 'var(--lime)' }}>
                  R{heroProduct.price}
                  {heroProduct.size ? ` · ${heroProduct.size}` : ''}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {showreel.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => advance(-1)}
                aria-label="Previous product"
                className="hero-arrow left-[6%]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => advance(1)}
                aria-label="Next product"
                className="hero-arrow right-[6%]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Sparkles */}
        {[
          ['10%', '8%'],
          ['86%', '20%'],
          ['18%', '54%'],
        ].map(([left, top], i) => (
          <span
            key={i}
            aria-hidden
            className="absolute z-[5] text-[26px]"
            style={{
              left,
              top,
              color: 'var(--sun)',
              animation: 'twinkle 2.4s ease-in-out infinite',
              animationDelay: `${i * 0.6}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Showreel controls. Row one picks the house; row two picks the pack inside
          it and doubles as the progress indicator, so the visitor can see the
          rotation rather than being surprised by it. */}
      <div className="relative z-10 mt-1 mb-5 flex flex-col items-center gap-2.5">
        <div className="flex gap-2" role="tablist" aria-label="Houses">
          {BRAND_LIST.map((b) => {
            const on = b.id === brandId;
            return (
              <button
                key={b.id}
                onClick={() => pickBrand(b.id)}
                role="tab"
                aria-selected={on}
                aria-label={`Show ${b.name}`}
                className="rounded-full transition-all duration-300 h-3 cursor-pointer"
                style={{
                  width: on ? 46 : 12,
                  background: on ? b.primaryColor : 'rgba(255,255,255,.28)',
                }}
              />
            );
          })}
        </div>

        {showreel.length > 1 && (
          <div className="flex items-center gap-1.5">
            {showreel.map((p, i) => {
              const on = i === slide % showreel.length;
              return (
                <button
                  key={p.id}
                  onClick={() => setSlide(i)}
                  aria-label={`Show ${p.name}`}
                  aria-current={on}
                  className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: on ? 26 : 8,
                    background: on ? '#fff' : 'rgba(255,255,255,.30)',
                  }}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Copy + CTAs */}
      <div
        className="hero-side relative z-10 text-center max-w-[540px]"
        style={{ color: '#fff' }}
      >
        <h3 className="font-display font-extrabold text-[22px] sm:text-[26px] leading-tight">
          {brand.tagline}, made properly.
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-white/80">
          {brand.description.split('.')[0]}. Three houses, one standard.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          <Link to="/shop" className="btn btn-lime">
            Shop the range
          </Link>
          <Link
            to="/brands"
            className="btn"
            style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.5)', color: '#fff' }}
          >
            Meet the houses
          </Link>
        </div>
      </div>

      {/* Pause motion */}
      <button
        onClick={togglePause}
        aria-pressed={paused}
        className="absolute bottom-4 right-5 z-20 rounded-full px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.12em]"
        style={{ background: 'rgba(255,255,255,.14)', color: '#fff' }}
      >
        {paused ? 'Resume motion' : 'Pause motion'}
      </button>

      {/* Glass stat cards */}
      <div className="hero-side absolute right-5 bottom-14 z-10 hidden lg:grid gap-2.5 justify-items-end">
        {[
          { k: String(PRODUCTS.length), label: 'Products', sub: 'Across 3 houses', color: '#7ee59f' },
          { k: '3', label: 'Houses', sub: 'One standard', color: '#46dcf5' },
        ].map((s) => (
          <div key={s.label} className="gl-card">
            <span style={{ color: s.color }}>{s.k}</span>
            <div>
              {s.label}
              <small>{s.sub}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

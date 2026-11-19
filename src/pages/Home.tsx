import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_LIST } from '../data/brands';
import type { BrandId } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Hero } from '../components/Hero';

/* ------------------------------------------------------------------ */
/*  Home — section-for-section port of the Fizzly Soda homepage        */
/*  hero → ticker → flavour grid → brand story → how → promo → closer  */
/* ------------------------------------------------------------------ */

const MARQUEE_TEXT = [
  'Organic botanicals',
  'Fine fragrance',
  'Serious cleaning',
  'Made in South Africa',
  'Three houses, one standard',
];

/** Rotated ticker band, exactly the soda `mq` treatment. */
const Marquee: React.FC<{ text: string[]; tone?: string }> = ({ text, tone = 'var(--lime)' }) => (
  <div
    aria-hidden
    className="overflow-hidden whitespace-nowrap relative"
    style={{
      background: tone,
      color: 'var(--ink)',
      transform: 'rotate(-1.6deg)',
      margin: '-14px -10px 0',
      padding: '14px 0',
      zIndex: 5,
    }}
  >
    <div className="marquee" style={{ display: 'inline-block', animation: 'mq 24s linear infinite' }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="font-display font-extrabold text-[26px] sm:text-[30px] px-5"
          style={{ display: 'inline-block' }}
        >
          {text[i % text.length]} ★
        </span>
      ))}
    </div>
  </div>
);

/** Scroll-reveal helper — staggers children in as the section enters view. */
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

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
        const items = ref.current!.querySelectorAll('.reveal');
        items.forEach((el) => {
          gsap.from(el, {
            y: 46,
            opacity: 0,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          });
        });
      }, ref);
    })();

    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  return ref;
};

export const Home: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<BrandId | 'all'>('all');
  const gridRef = useRef<HTMLDivElement>(null);

  /* Home shows the picked few; the full catalogue lives on /shop. */
  const HOME_LIMIT = 8;
  const byBrand =
    activeBrand === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === activeBrand);
  const visibleProducts = activeBrand === 'all' ? byBrand.slice(0, HOME_LIMIT) : byBrand;
  const hiddenCount = byBrand.length - visibleProducts.length;

  /* Re-stagger the grid whenever the filter changes, like the soda chips */
  useEffect(() => {
    let killed = false;
    (async () => {
      const { default: gsap } = await import('gsap');
      if (killed || !gridRef.current) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from(gridRef.current.querySelectorAll('.grid-anim'), {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.06,
        ease: 'back.out(1.8)',
      });
    })();
    return () => {
      killed = true;
    };
  }, [activeBrand]);

  const storyRef = useReveal();
  const howRef = useReveal();

  return (
    <div>
      {/* ============================================== 1. HERO */}
      <Hero />

      {/* ============================================== 2. TICKER */}
      <Marquee text={MARQUEE_TEXT} />

      {/* ============================================== 3. PRODUCT GRID */}
      <section className="px-[5vw] pt-[110px] pb-[80px]">
        <div className="mx-auto max-w-[1240px]">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]"
            style={{ background: 'rgba(16,35,28,.07)', color: 'var(--ink)' }}
          >
            The signature range
          </span>

          <h2 className="mt-4 display-xl" style={{ color: 'var(--ink)' }}>
            Pick your <em className="u-mark not-italic" style={{ color: 'var(--fern)' }}>range</em>
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-slate-500">
            {PRODUCTS.length} products across three houses, one very easy decision.
            Filter by house to narrow it down.
          </p>

          {/* Filter chips */}
          <div className="mt-8 mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveBrand('all')}
              className="chip"
              data-active={activeBrand === 'all'}
            >
              All
            </button>
            {BRAND_LIST.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBrand(b.id)}
                className="chip"
                data-active={activeBrand === b.id}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
          >
            {visibleProducts.map((product, i) => (
              <div key={product.id} className="grid-anim">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-2">
            <Link to="/shop" className="btn btn-ink">
              Browse the full catalogue of {PRODUCTS.length} →
            </Link>
            {hiddenCount > 0 && (
              <span className="text-[12px] font-bold text-slate-400">
                +{hiddenCount} more in the catalogue
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ============================================== 4. BRAND STORY
           One surface, one photograph, one column of type. The story owns
           its own artwork — it must never reuse a product card or the
           house's own editorial tile. */}
      <section
        ref={storyRef}
        className="relative overflow-hidden grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] items-center gap-10 px-[6vw] py-[90px]"
        style={{ background: '#f4ece1', minHeight: '80svh' }}
      >
        <div className="relative z-10 max-w-[560px] reveal">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]"
            style={{ background: '#3F2A12', color: 'var(--sun, #ffc933)' }}
          >
            Felis be Glad
          </span>
          <h2 className="display-lg mt-4" style={{ color: '#3F2A12' }}>
            A little <em className="u-mark not-italic" style={{ color: '#9A5B08' }}>luxury</em>,
            every day.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed" style={{ color: '#5a4227' }}>
            Inspired-by fine fragrance, hand-poured reed diffusers and car perfumes built for
            lasting sillage — {PRODUCTS.filter((p) => p.brand === 'felis-be-glad').length} products,
            12+ weeks of scent.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Inspired by designer scents', 'Long-lasting diffusers', 'Signature car perfumes'].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-1.5 text-[13px] font-bold"
                  style={{ border: '1.5px solid rgba(90,66,39,.32)', color: '#5a4227' }}
                >
                  {t}
                </span>
              ),
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link to="/shop?brand=felis-be-glad" className="btn btn-ink">
              Shop Felis be Glad
            </Link>
            <Link to="/brands" className="btn btn-ghost">
              All three houses
            </Link>
          </div>
        </div>

        {/* The story's own photograph — shot for this position, not borrowed
            from a product card. */}
        <div className="relative reveal">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-[-14px] h-9 rounded-[50%]"
            style={{ background: 'rgba(63,42,18,.16)', filter: 'blur(22px)' }}
          />
          <img
            src="/images/editorial-felis-story.d7dfbb47.jpg"
            alt="Felis be Glad reed diffuser and inspired-by Hugo Men fragrance on a sunlit stone ledge"
            loading="lazy"
            className="relative w-full h-auto block"
            style={{
              borderRadius: 24,
              aspectRatio: '4 / 5',
              objectFit: 'cover',
              boxShadow: '0 30px 60px -30px rgba(63,42,18,.5)',
            }}
          />
        </div>
      </section>

      {/* ====================================== 4b. THREE HOUSES / EDITORIAL */}
      <section className="px-[5vw] py-[80px]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
            <div>
              <span className="eyebrow">Three houses</span>
              <h2 className="display-lg mt-2" style={{ color: 'var(--ink)' }}>
                One standard, three <span className="u-mark">shelves</span>
              </h2>
            </div>
            <Link to="/brands" className="text-[13px] font-black shrink-0" style={{ color: 'var(--ink)' }}>
              Compare the houses →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                img: '/images/editorial-care.08b6221f.jpg',
                tag: 'Gladchemistry',
                line: 'Skin, hair and bath, formulated by a chemist.',
                to: '/shop?brand=gladchemistry',
                tone: '#DDF3E4',
                pos: 'center 40%',
              },
              {
                img: '/images/editorial-scent.58c04330.jpg',
                tag: 'Felis be Glad',
                line: 'Fine fragrance, reed diffusers and car perfumes.',
                to: '/shop?brand=felis-be-glad',
                tone: '#E8E2F5',
                pos: 'center 45%',
              },
              {
                img: '/images/editorial-clean.f63e9614.jpg',
                tag: 'Bubbles Detergents',
                line: 'Home and car cleaning that actually shifts grime.',
                to: '/shop?brand=bubbles-detergents',
                tone: '#D9EFE0',
                pos: 'center 55%',
              },
            ].map((h) => (
              <Link
                key={h.tag}
                to={h.to}
                className="group relative block overflow-hidden rounded-[24px] reveal"
                style={{ background: h.tone, aspectRatio: '4 / 5' }}
              >
                <img
                  src={h.img}
                  alt={h.tag}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectFit: 'cover', objectPosition: h.pos }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(6,20,15,0) 40%, rgba(6,20,15,.82) 100%)',
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: 'var(--lime)' }}>
                    {h.tag}
                  </p>
                  <p className="mt-1.5 font-display font-extrabold text-[17px] leading-snug text-white">
                    {h.line}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-black text-white/85">
                    Explore the house
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== 5. HOW / PROOF */}
      <section
        ref={howRef}
        className="relative overflow-hidden px-[5vw] pt-[80px] pb-[140px]"
        style={{ background: 'var(--cream)', color: 'var(--ink)' }}
      >
        <div className="mx-auto max-w-[1240px]">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] reveal"
            style={{ background: 'rgba(16,35,28,.07)' }}
          >
            Tested, not guessed
          </span>
          <h2 className="mt-4 display-lg reveal">
            From bench to <em className="u-mark not-italic" style={{ color: 'var(--violet)' }}>bathroom</em>
          </h2>
          <p className="mt-3 max-w-[520px] text-[16px] leading-relaxed text-slate-500 reveal">
            Every batch in all three houses is checked for purity, longevity and surface safety
            before it ships.
          </p>

          <div className="mt-[44px] grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', t: 'Formulated', d: 'Balanced for efficacy, safety and long shelf life.', c: 'var(--fern)' },
              { n: '02', t: 'Batch tested', d: 'Purity, scent longevity and surface safety.', c: 'var(--amber)' },
              { n: '03', t: 'Filled & sealed', d: 'Filled in South Africa, sealed for transport.', c: 'var(--sky)' },
              { n: '04', t: 'Shipped', d: 'Nationwide dispatch, wholesale terms available.', c: 'var(--violet)' },
            ].map((s) => (
              <div key={s.n} className="panel p-6 reveal">
                <span
                  className="font-display font-extrabold text-[34px] leading-none"
                  style={{ color: s.c }}
                >
                  {s.n}
                </span>
                <h3 className="font-display font-extrabold text-[19px] mt-3">{s.t}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500 mt-1.5">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== 6. PROMO */}
      <section
        className="relative overflow-hidden grid lg:grid-cols-[1.1fr_.9fr] items-center gap-8 px-[5vw] py-[90px]"
        style={{ background: 'var(--ink)' }}
      >
        <div className="relative z-10 text-white">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]"
            style={{ background: 'rgba(255,255,255,.14)' }}
          >
            Wholesale &amp; bulk
          </span>
          <h2
            className="font-display font-extrabold mt-4"
            style={{ fontSize: 'clamp(40px,7vw,96px)', lineHeight: 0.95, letterSpacing: '-0.035em' }}
          >
            Order by the{' '}
            <em className="u-mark not-italic" style={{ color: 'var(--lime)' }}>
              case
            </em>
          </h2>
          <p className="mt-4 max-w-[44ch] text-[16px] leading-relaxed text-white/70">
            Retailers, salons and cleaning crews — get tiered pricing across all three houses on
            one invoice.
          </p>

          <div className="mt-6 flex gap-8">
            {[
              ['3', 'Houses'],
              [String(PRODUCTS.length), 'Products'],
              ['500+', 'Units / week'],
            ].map(([k, v]) => (
              <div key={v}>
                <b className="font-display font-extrabold text-[32px] leading-none block">{k}</b>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">
                  {v}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link to="/contact" className="btn btn-lime">
              Request pricing
            </Link>
            <Link
              to="/shop"
              className="btn"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255,255,255,.4)',
                color: '#fff',
              }}
            >
              Browse catalogue
            </Link>
          </div>
        </div>

        {/* One photograph for this section, shot for this position. */}
        <div className="relative reveal">
          <img
            src="/images/editorial-wholesale.2b4e850b.jpg"
            alt="Bubbles Detergents packs crated for wholesale order"
            loading="lazy"
            className="w-full h-auto block"
            style={{
              borderRadius: 20,
              aspectRatio: '4 / 3',
              objectFit: 'cover',
              objectPosition: 'center 55%',
            }}
          />
        </div>
      </section>

      {/* ============================================== 7. CLOSER */}
      <section className="px-[5vw] py-[100px] text-center" style={{ background: 'var(--cream)' }}>
        <span
          className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]"
          style={{ background: 'rgba(16,35,28,.07)', color: 'var(--ink)' }}
        >
          Ready when you are
        </span>
        <h2 className="display-lg mt-4" style={{ color: 'var(--ink)' }}>
          Get your <em className="u-mark not-italic" style={{ color: 'var(--fern)' }}>care</em> sorted.
        </h2>
        <p className="mt-4 mx-auto max-w-[44ch] text-[16px] leading-relaxed text-slate-500">
          {PRODUCTS.length} products, one cart, one delivery — across personal care, fragrance
          and cleaning.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          <Link to="/shop" className="btn btn-ink">
            View the catalogue
          </Link>
          <Link to="/brands" className="btn btn-ghost">
            Compare brands
          </Link>
        </div>
      </section>
    </div>
  );
};

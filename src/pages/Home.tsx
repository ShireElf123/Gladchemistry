import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BRANDS, BRAND_LIST } from '../data/brands';
import type { BrandId } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';
import { EditorialOpening } from '../components/EditorialOpening';

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


/* Gallery tiles for the home band. Captions describe the photograph, not the
   product's virtues — nothing here makes a claim her labels do not. */
const HOME_GALLERY = [
  /* `ratio` is the photograph's OWN aspect, taken from the file. The tile is
     framed at that ratio, so nothing is cropped to fit a cell. Order matters
     only for reading sequence — the columns are balanced by measured height. */
  {
    src: '/images/gallery/fragrance-collection-dark',
    caption: 'The Feliz be Glad fragrance collection',
    kicker: 'Feliz be Glad',
    ratio: '43 / 24',
  },
  { src: '/images/gallery/hugo-men-dark', caption: 'Inspired by Hugo Men', kicker: 'Eau de Parfum', ratio: '161 / 240' },
  { src: '/images/gallery/scandal-ladies-dark', caption: 'Inspired by Scandal, Ladies', kicker: 'Eau de Parfum', ratio: '67 / 120' },
  { src: '/images/gallery/diesel-men-dark', caption: 'Inspired by Diesel Men', kicker: 'Eau de Parfum', ratio: '161 / 240' },
  { src: '/images/gallery/ted-lapidus-dark', caption: 'Inspired by Ted Lapidus, Men', kicker: 'Roll-on perfume oil', ratio: '67 / 120' },
  /* The four she named: the personal-care jars. These use the plates already
     cut at 4:5 for the opening, so the band and the opening show the same
     frames rather than two different crops of one photograph. */
  { src: '/images/gallery/ed-shea-butter-4x5', caption: 'Raw Shea Butter, 100 g', kicker: 'Gladchemistry', ratio: '4 / 5' },
  { src: '/images/gallery/ed-hair-food-4x5', caption: 'Hair Food', kicker: 'Gladchemistry', ratio: '4 / 5' },
  { src: '/images/gallery/ed-skin-moist-4x5', caption: 'Skin Moist, for very dry skin', kicker: 'Gladchemistry', ratio: '4 / 5' },
  { src: '/images/gallery/ed-sheacoco-4x5', caption: 'SheaCoco Hair Care', kicker: 'Gladchemistry', ratio: '4 / 5' },
];

export const Home: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<BrandId | 'all'>('all');
  const gridRef = useRef<HTMLDivElement>(null);

  /* The home page shows a SELECTION, not the catalogue. Twelve cards is a wall on
     a phone; six is a showcase. Featured products lead, then the rest fill up to
     six, so every house shows the same number and the row always ends cleanly. */
  const HOME_LIMIT = 6;
  const ordered = (list: typeof PRODUCTS) => [
    ...list.filter((p) => p.featured),
    ...list.filter((p) => !p.featured),
  ];

  const forHouse = (id: BrandId | 'all') => {
    if (id !== 'all') return ordered(PRODUCTS.filter((p) => p.brand === id)).slice(0, HOME_LIMIT);
    /* Taken house by house in turn, so the default view always shows all three
       houses instead of the first six products in file order — which were all
       Gladchemistry and Feliz and made the range look like two brands, not three. */
    const lanes = BRAND_LIST.map((b) => ordered(PRODUCTS.filter((p) => p.brand === b.id)));
    const out: typeof PRODUCTS = [];
    for (let round = 0; out.length < HOME_LIMIT; round++) {
      const before = out.length;
      lanes.forEach((lane) => {
        if (lane[round] && out.length < HOME_LIMIT) out.push(lane[round]);
      });
      if (out.length === before) break; // every lane exhausted
    }
    return out;
  };

  const visibleProducts = forHouse(activeBrand);

  /* Re-stagger the grid whenever the filter changes, like the soda chips.

     `gsap.from` writes the FROM values immediately and can leave an element at
     `opacity: 0` if the tween is killed before it plays — and the cleanup below
     killed it on every filter change, so a card could survive a re-filter
     invisible. Clearing props first, and tweening TO the resting state, means the
     element is at full opacity whenever no tween is running. */
  useEffect(() => {
    let killed = false;
    (async () => {
      const { default: gsap } = await import('gsap');
      const grid = gridRef.current;
      if (killed || !grid) return;
      const cards = Array.from(grid.querySelectorAll<HTMLElement>('.grid-anim'));
      gsap.killTweensOf(cards);
      gsap.set(cards, { clearProps: 'all' });
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'back.out(1.8)',
          clearProps: 'transform',
        },
      );
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

      {/* ============================================== 3. EDITORIAL OPENING
          Her instruction: do not open with the shop grid. This is what the page
          opens with instead — three of her photographs, deliberately unequal, with
          the type carrying the section. The grid follows further down. */}
      <EditorialOpening />

      {/* ============================================== 4. PRODUCT GRID */}
      <section className="px-[5vw] pt-[110px] pb-[80px]">
        <div className="mx-auto max-w-[1240px]">
          <span
            className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400"
          >
            <span aria-hidden className="h-px w-8" style={{ background: 'var(--fern)' }} />
            The range
          </span>

          <h2 className="display-xl" style={{ color: 'var(--ink)' }}>
            Pick your <em className="u-mark not-italic" style={{ color: 'var(--fern)' }}>range</em>
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-slate-500">
            A short selection from each house — the full catalogue of {PRODUCTS.length} lives in the shop.
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

          <div className="mt-12 text-center">
            <Link to="/shop" className="btn btn-ink">
              See all {PRODUCTS.length} in the shop →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================== 5. BRAND STORY */}
      <section
        ref={storyRef}
        className="relative overflow-hidden grid lg:grid-cols-2 items-center gap-6 px-[5vw] py-[90px]"
        style={{ background: '#0d3b2a', minHeight: '86svh' }}
      >
        {/* Backdrop image */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${BRANDS[activeBrand === 'all' ? 'felis-be-glad' : activeBrand].heroImage})`,
            opacity: 0.28,
          }}
        />

        <div className="relative z-10 max-w-[560px] reveal">
          <span className="inline-block rounded-full px-4 py-1.5 text-[12px] font-black uppercase tracking-[0.1em] bg-white/10 text-white">
            Feliz be Glad
          </span>
          <h2 className="display-lg mt-3 text-white">
            A little <em className="u-mark not-italic" style={{ color: 'var(--sun)' }}>luxury</em>,
            every day.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/80">
            Inspired-by fine fragrance, hand-poured reed diffusers and car perfumes built for
            lasting sillage — 5 products, 12+ weeks of scent.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Inspired by designer scents', 'Long-lasting diffusers', 'Signature car perfumes'].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-1.5 text-[13px] font-bold text-white"
                  style={{ border: '2px solid rgba(255,255,255,.28)' }}
                >
                  {t}
                </span>
              ),
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link to="/shop?brand=felis-be-glad" className="btn btn-lime">
              Shop Feliz be Glad
            </Link>
            <Link
              to="/brands"
              className="btn"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255,255,255,.45)',
                color: '#fff',
              }}
            >
              All three houses
            </Link>
          </div>
        </div>

        {/* Tilted product cluster */}
        <div className="relative z-10 grid place-items-center reveal">
          <div className="relative w-[min(90%,420px)]" style={{ aspectRatio: '1 / 1' }}>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] aspect-square rounded-full"
              style={{ background: 'rgba(255,255,255,.14)' }}
            />
            {/* Her own fragrance photography, on the dark plinth it was shot on.
                It replaces two older template shots that were cropped to a 3:4
                frame; these carry the same lighting as the section behind them. */}
            <img
              src="/images/gallery/fragrance-collection-dark.jpg"
              alt="The Feliz be Glad fragrance collection"
              loading="lazy"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] rounded-[26px] object-cover shadow-2xl -rotate-3"
              style={{}}
            />
            <img
              src="/images/gallery/scandal-ladies-dark.jpg"
              alt="Inspired by Scandal, Ladies"
              loading="lazy"
              className="absolute right-[-2%] bottom-[-6%] w-[34%] rounded-[18px] object-cover shadow-2xl rotate-6"
              style={{ aspectRatio: '3 / 4' }}
            />
          </div>
        </div>
      </section>

      {/* ============================================== 6. GALLERY
          Editorial photography band. Her own product photography, which until now
          was only ever seen one pack at a time on a white studio sweep. Set on the
          dark ground so the glass and the cosmetic jars read as objects rather than
          as catalogue cut-outs. Entrance motion only; nothing loops. */}
      <section
        className="relative overflow-hidden px-[5vw] py-[92px]"
        style={{ background: 'linear-gradient(180deg,#0a2a20 0%,#061a14 100%)' }}
      >
        <Gallery
          dark
          eyebrow="The range, up close"
          title={
            <>
              Photographed, not{' '}
              <em className="u-mark not-italic" style={{ color: 'var(--lime)' }}>
                borrowed
              </em>
              .
            </>
          }
          intro="Every pack in the three houses, shot the way it actually looks on the shelf."
          tiles={HOME_GALLERY}
        />
        <div className="mx-auto mt-10 max-w-[1240px] text-center">
          <Link to="/shop" className="btn btn-lime">
            See all {PRODUCTS.length} products →
          </Link>
        </div>
      </section>

      {/* ============================================== 7. HOW / PROOF */}
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

      {/* ============================================== 8. PROMO */}
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
              ['16', 'Products'],
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

        {/* Photography cluster. These are her own Gladchemistry personal-care
            shots, used as decoration rather than as catalogue cards: two overlap
            behind, the third sits forward as the subject. */}
        <div className="relative h-[380px] sm:h-[440px] grid place-items-center">
          <div
            className="absolute w-[86%] aspect-square rounded-full"
            style={{ background: 'rgba(255,255,255,.06)' }}
          />
          <img
            src="/images/gallery/ed-hair-food-4x5.jpg"
            alt="Gladchemistry Hair Food jar"
            loading="lazy"
            className="absolute rounded-[22px] object-cover shadow-2xl"
            style={{
              height: '62%',
              aspectRatio: '4 / 5',
              left: '2%',
              top: '8%',
              transform: 'rotate(-9deg)',
              zIndex: 1,
            }}
          />
          <img
            src="/images/gallery/ed-sheacoco-4x5.jpg"
            alt="Gladchemistry SheaCoco Hair Care jar"
            loading="lazy"
            className="absolute rounded-[22px] object-cover shadow-2xl"
            style={{
              height: '58%',
              aspectRatio: '4 / 5',
              right: '1%',
              bottom: '4%',
              transform: 'rotate(10deg)',
              zIndex: 1,
            }}
          />
          <img
            src="/images/gallery/ed-shea-butter-4x5.jpg"
            alt="Raw Shea Butter in a white bowl"
            loading="lazy"
            className="absolute rounded-[26px] object-cover shadow-2xl"
            style={{
              height: '74%',
              aspectRatio: '4 / 5',
              transform: 'rotate(-2deg)',
              zIndex: 2,
              boxShadow: '0 34px 70px -22px rgba(0,0,0,.85)',
            }}
          />
        </div>
      </section>

      {/* ============================================== 9. CLOSER */}
      <section
        className="relative overflow-hidden px-[5vw] py-[100px] text-center"
        style={{ background: 'var(--cream)' }}
      >
        {/* Faint photograph behind the close, bled to the top edge and faded out.
            Decoration only — aria-hidden, and quiet enough that the copy stays first. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[220px]"
          style={{
            backgroundImage: 'url(/images/gallery/skin-moist.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            opacity: 0.10,
            maskImage: 'linear-gradient(180deg,#000 0%,#0000 88%)',
            WebkitMaskImage: 'linear-gradient(180deg,#000 0%,#0000 88%)',
          }}
        />
        <span
          className="relative z-10 inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em]"
          style={{ background: 'rgba(16,35,28,.07)', color: 'var(--ink)' }}
        >
          Ready when you are
        </span>
        <h2 className="relative z-10 display-lg mt-4" style={{ color: 'var(--ink)' }}>
          Get your <em className="u-mark not-italic" style={{ color: 'var(--fern)' }}>care</em> sorted.
        </h2>
        <p className="mt-4 mx-auto max-w-[44ch] text-[16px] leading-relaxed text-slate-500">
          {PRODUCTS.length} products, one cart, one delivery — across personal care, fragrance
          and cleaning.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          <Link to="/shop" className="btn btn-ink">
            Shop everything
          </Link>
          <Link to="/brands" className="btn btn-ghost">
            Compare brands
          </Link>
        </div>
      </section>
    </div>
  );
};

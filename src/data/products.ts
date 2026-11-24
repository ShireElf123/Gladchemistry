import type { BrandId } from './brands';

export type ImageRole = 'cutout' | 'photo' | 'scene';

export interface Product {
  id: string;
  name: string;
  /** Full uncropped name, for the detail modal and search. */
  fullName?: string;
  preMessage: string;
  brand: BrandId;
  category: string;
  price: number;
  size: string;
  notes?: string[];
  description: string;
  image: string;
  badge?: string;
  featured?: boolean;
  /**
   * How the artwork is composed — the renderer keys its treatment off this.
   *
   *  cutout — PNG with real transparency (isolated pack). Floats on the stage
   *           with object-contain and a drop shadow; never an opaque photo
   *           behind it.
   *  photo  — full-bleed product photograph on its own backdrop. Shown
   *           uncropped, backdrop left intact.
   *  scene  — lifestyle / editorial photograph. Allowed a controlled crop, but
   *           anchored so the subject survives it.
   */
  imageRole: ImageRole;
  /** Optional override for how a photo/scene fills its frame. */
  fit?: 'contain' | 'cover';
  /**
   * Honest quality grade for the artwork.
   *
   * `weak` means the source photograph is too small or too soft to hold up at
   * gallery scale — the thumbnail still reads, but enlarging it would be
   * dressing up a bad image. Weak artwork gets a typographic treatment instead
   * of a blown-up picture. Never remove this flag to make a page look fuller:
   * hiding a soft photo is honest, upscaling it is not.
   */
  photoGrade?: 'strong' | 'weak';
  /**
   * Why the artwork was withdrawn, when it was.
   *
   * The frames in this catalogue were generated, and the generator laid out
   * white label fields with typeset words wherever it could not read her real
   * printed artwork. A white label is not a neutral placeholder on a page that
   * sells her products -- it says "this is what you will receive", in a brand
   * that is not hers. Those frames are withheld and the tile is typeset from
   * the product's own name, size and price instead.
   *
   * Set this only to record a real finding. Never use it to hide a picture
   * that is merely soft: softness is `photoGrade: 'weak'`.
   */
  artworkWithheld?: string;
}

type P = Omit<Product, 'preMessage' | 'notes'> & { preMessage?: string; notes?: string[] };

const p = (o: P): Product => ({
  preMessage: o.preMessage ?? 'Handmade in South Africa',
  notes: o.notes,
  ...o,
});

/**
 * The real Gladchemistry catalogue, priced from the shop's own catalogue.
 * Names are the shop's own wording; long ones keep a `fullName` for the modal
 * so the grid stays clean without losing any information.
 */
export const PRODUCTS: Product[] = [

  /* ---------------------------------------------------- Gladchemistry care */
  p({
    id: 'gc-skin-moist-125g',
    name: 'Skin Moist 125g',
    brand: 'gladchemistry',
    category: 'Skin Care',
    price: 96,
    size: '125g Tub',
    image: '/images/frames/gc-skin-moist-125g.50a3ae63.jpg',
    imageRole: 'photo',
    badge: 'Bestseller',
    featured: true,
    preMessage: 'The original formula · For dry, itchy and flaky skin',
    notes: ['Dry skin', 'Eczema', 'Dermatitis', 'Insect bites', 'Chemical burns'],
    description:
      "The cream Gladness formulated for her daughter's dry, itchy skin when standard creams failed — a rich body and hand emollient that calms dry, flaky and irritated skin.",
  }),
  p({
    id: 'gc-skin-moist-family',
    name: 'Skin Moist Family Tub',
    brand: 'gladchemistry',
    category: 'Skin Care',
    price: 150,
    size: 'Large Tub',
    image: '/images/frames/gc-skin-moist-family.5775d2c7.jpg',
    imageRole: 'photo',
    featured: true,
    preMessage: 'Family size · Same formula, bigger tub',
    description:
      'The whole-family tub of Skin Moist, for anyone who goes through the 125g faster than they would like. Same emollient formula, sized for daily use.',
  }),
  p({
    id: 'gc-raw-shea-butter',
    name: 'Raw Shea Butter 100g',
    brand: 'gladchemistry',
    category: 'Skin Care',
    price: 100,
    size: '100g',
    image: '/images/frames/gc-raw-shea-butter.2f6a27f4.jpg',
    imageRole: 'photo',
    preMessage: 'Unrefined · Imported from Ghana',
    notes: ['Moisturises skin & scalp', 'Reduces eczema signs', 'Improves hair growth', 'Relieves dry skin'],
    description:
      'Raw, unrefined shea butter imported from Ghana. Nothing added, nothing refined out — just the butter, for skin, scalp and hair.',
  }),
  p({
    id: 'gc-sheacoco-hair-care',
    name: 'SheaCoco Hair Care 125g',
    brand: 'gladchemistry',
    category: 'Hair Care',
    price: 120,
    size: '125g Tub',
    image: '/images/frames/gc-sheacoco-hair-care.2ed1845d.jpg',
    imageRole: 'photo',
    preMessage: 'Shea + coconut · For receding hairlines',
    description:
      'A shea and coconut hair cream aimed at receding hairlines and slow growth. Massage into the scalp and leave in.',
  }),
  p({
    id: 'gc-hair-food',
    name: 'Hair Food',
    brand: 'gladchemistry',
    category: 'Hair Care',
    price: 45,
    size: '125g Tub',
    image: '/images/frames/gc-hair-food.0761069c.jpg',
    imageRole: 'photo',
    preMessage: 'Petroleum jelly base · Softens and seals',
    description:
      'A classic hair food with a petroleum jelly base and a light scent, for sealing in moisture and softening dry hair and scalp.',
  }),
  p({
    id: 'gc-hair-oil',
    name: 'Hair Oil',
    brand: 'gladchemistry',
    category: 'Hair Care',
    price: 55,
    size: '100ml',
    image: '/images/frames/gc-hair-oil.4a05012c.jpg',
    imageRole: 'photo',
    preMessage: 'Organic blend · For beard growth and scalp health',
    description:
      'An organic hair oil for beard growth, scalp moisturising and flake control. Light enough to use daily.',
  }),
  p({
    id: 'gc-castor-oil-50',
    name: 'Castor Oil 50ml',
    brand: 'gladchemistry',
    category: 'Hair & Skin Oils',
    price: 33,
    size: '50ml',
    image: '/images/frames/gc-castor-oil-50.9be4f8d6.jpg',
    imageRole: 'photo',
    preMessage: 'Cold pressed · Hexane free',
    description:
      'Pure cold-pressed, hexane-free castor oil in a handy 50ml. Thick and rich — a little goes a long way on hair, brows and lashes.',
  }),
  p({
    id: 'gc-castor-oil-500',
    name: 'Castor Oil 500ml',
    brand: 'gladchemistry',
    category: 'Hair & Skin Oils',
    price: 90,
    size: '500ml',
    image: '/images/frames/gc-castor-oil-500.6deee786.jpg',
    imageRole: 'photo',
    preMessage: 'Cold pressed · Hexane free',
    description:
      'The bulk bottle of the same cold-pressed, hexane-free castor oil. Better value if you use it regularly.',
  }),
  p({
    id: 'gc-skin-moist-charcoal',
    name: 'Skin Moist & Charcoal Bar',
    brand: 'gladchemistry',
    category: 'Skin Care',
    price: 125,
    size: 'Tub + 100g Bar',
    image: '/images/frames/gc-skin-moist-charcoal.178238db.jpg',
    imageRole: 'photo',
    preMessage: 'Combo · Acne and dark spots',
    description:
      'The Skin Moist tub paired with a charcoal soap bar, put together for acne-prone skin and dark spots.',
  }),
  p({
    id: 'gc-foam-bath-15l',
    name: '1.5L Foam Bath & 100g Bar',
    brand: 'gladchemistry',
    category: 'Bath & Body',
    price: 110,
    size: '1.5L + 100g',
    image: '/images/frames/gc-foam-bath-15l.c85579b9.jpg',
    imageRole: 'photo',
    preMessage: 'Combo · Any foam bath, any bar',
    description:
      'Any of the 1.5L foam baths paired with a 100g soap bar. Pick your fragrance when you order.',
  }),
  p({
    id: 'gc-bubble-bath-combo',
    name: 'Bubble Bath & Skin Moist Combo',
    brand: 'gladchemistry',
    category: 'Bath & Body',
    price: 220,
    size: '5L + 125g',
    image: '/images/frames/gc-bubble-bath-combo.76142be9.jpg',
    imageRole: 'photo',
    preMessage: 'Combo · The full bath routine',
    description:
      'A 5L bubble bath with a 125g Skin Moist — the whole bath routine in one order.',
  }),
  p({
    id: 'gc-deobloks',
    name: 'Deobloks 500g',
    brand: 'gladchemistry',
    category: 'Home Care',
    price: 55,
    size: '500g Tub',
    image: '/images/frames/gc-deobloks.65bc498c.jpg',
    imageRole: 'photo',
    preMessage: 'Refreshing deodoriser blocks',
    description:
      'Deodoriser blocks for toilets, drains and bins. Drop one in and it keeps the space fresh.',
  }),
  p({
    id: 'gc-bicarb',
    name: 'Pure Bicarbonate of Soda',
    brand: 'gladchemistry',
    category: 'Personal Care',
    price: 55,
    size: '500g',
    image: '/images/frames/gc-bicarb.a535e050.jpg',
    imageRole: 'photo',
    preMessage: 'Pharmaceutical grade · Multipurpose',
    description:
      'Pharmaceutical-grade bicarbonate of soda for exfoliation, bath soaks and general eco-friendly cleaning.',
  }),
  p({
    id: 'gc-personal-care-startup',
    name: 'Personal Care Start Up',
    brand: 'gladchemistry',
    category: 'Starter Packs',
    price: 2600,
    size: '10 + 12 Pack',
    image: '/images/frames/gc-personal-care-startup.53821ce2.jpg',
    imageRole: 'photo',
    
    badge: 'Wholesale',
    preMessage: 'For resellers · 10 of each, 12 lines',
    description:
      'A reseller starter pack: 10 of each of 12 skin care lines, so you can open a shelf without ordering everything individually.',
  }),

  /* ------------------------------------------------- Felis be Glad scent */
  p({
    id: 'felis-reed-diffuser',
    name: 'Signature Amber Reed Diffuser',
    brand: 'felis-be-glad',
    category: 'Home Diffusers',
    price: 240,
    size: '100ml + Black Reeds',
    image: '/images/frames/felis-reed-diffuser.3926ca86.jpg',
    imageRole: 'photo',
    badge: 'Luxury Home',
    featured: true,
    preMessage: '12+ weeks of scent',
    description:
      'Hand-poured amber home fragrance oil in a square glass flacon with matte black rattan reeds. Twelve weeks or more of continuous scent.',
  }),
  p({
    id: 'felis-scandal-ladies',
    name: 'Inspired by Scandal Ladies',
    brand: 'felis-be-glad',
    category: 'Fine Fragrances',
    price: 195,
    size: '30ml Eau de Parfum',
    image: '/images/frames/felis-scandal-ladies.cf45f022.jpg',
    imageRole: 'photo',
    featured: true,
    badge: 'Top Pick',
    preMessage: 'Honey · Gardenia · Blood orange',
    description:
      'A captivating honey, gardenia and blood orange accord in a sculpted teal glass flacon.',
  }),
  p({
    id: 'felis-hugo-men',
    name: 'Inspired by Hugo Men',
    brand: 'felis-be-glad',
    category: 'Fine Fragrances',
    price: 260,
    size: '100ml Eau de Parfum',
    image: '/images/frames/felis-hugo-men.329df974.jpg',
    imageRole: 'photo',
    featured: true,
    preMessage: 'Green apple · Sage · Cedarwood',
    description:
      'Crisp green apple, aromatic sage and cedarwood, built for all-day confidence.',
  }),
  p({
    id: 'felis-diesel-men',
    name: 'Inspired by Diesel Men',
    brand: 'felis-be-glad',
    category: 'Fine Fragrances',
    price: 195,
    size: '30ml Eau de Parfum',
    image: '/images/frames/felis-diesel-men.9fb2eebd.jpg',
    imageRole: 'photo',
    preMessage: 'Grapefruit · Lavender · Amber',
    description:
      'A bold spicy-woody fragrance with grapefruit and lavender over warm amber.',
  }),
  p({
    id: 'felis-ted-lapidus-car',
    name: 'Inspired by Ted Lapidus Car & Roll-On',
    brand: 'felis-be-glad',
    category: 'Car Perfumes',
    price: 85,
    size: '15ml',
    image: '/images/frames/felis-ted-lapidus-car.60b163dc.jpg',
    imageRole: 'photo',
    preMessage: 'Auto & travel',
    description:
      'A concentrated fragrance oil for the car or a roll-on for your bag. Long-lasting cabin freshness without the aerosol.',
  }),
  p({
    id: 'felis-fragrance-edp-20ml',
    name: 'Fine Fragrance EDP 20ml',
    brand: 'felis-be-glad',
    category: 'Fine Fragrances',
    price: 80,
    size: '20ml Eau de Parfum',
    image: '/images/frames/felis-fragrance-edp-20ml.1a10d07d.jpg',
    imageRole: 'photo',
    preMessage: 'Your choice of 20 generics',
    description:
      'Generics of your choice of fine fragrance, in a 20ml travel size. Pick the scent you want when you order.',
  }),
  p({
    id: 'felis-fragrances-startup',
    name: 'Fine Fragrances Business Start Up',
    brand: 'felis-be-glad',
    category: 'Starter Packs',
    price: 1250,
    size: '20 Piece Collection',
    image: '/images/frames/felis-fragrances-startup.1a10d07d.jpg',
    imageRole: 'photo',
    badge: 'Wholesale',
    preMessage: 'For resellers · 20-piece set',
    description:
      'A 20-piece collection of the fine fragrance line for resellers — enough to build a display without ordering case by case.',
  }),

  /* ------------------------------------------------------- Bubbles clean */
  p({
    id: 'bubbles-dishwashing-liquid',
    name: 'Hygiene Dishwashing Liquid',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 36,
    size: '750ml',
    image: '/images/frames/bubbles-dishwashing-liquid.f91756b4.jpg',
    imageRole: 'photo',
    featured: true,
    preMessage: 'High foam · Long lasting',
    description:
      'Ultra-concentrated, grease-cutting dishwashing liquid that holds a thick foam and leaves a fresh lemon fragrance.',
  }),
  p({
    id: 'bubbles-dishwashing-2l',
    name: 'Dishwashing Liquid 2L',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 82,
    size: '2L',
    image: '/images/frames/bubbles-dishwashing-2l.3b023db7.jpg',
    imageRole: 'photo',
    preMessage: 'High foam · Bulk size',
    description:
      'The same thick, strong dishwashing liquid in a 2L tub for kitchens that go through it fast.',
  }),
  p({
    id: 'bubbles-thick-bleach',
    name: 'Bubbles Thick Bleach',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 42,
    size: '750ml',
    image: '/images/frames/bubbles-thick-bleach.1cbbb548.jpg',
    imageRole: 'photo',
    preMessage: 'Clings to the surface',
    description:
      'A clinging thick bleach formula that kills germs and stains, whitens surfaces and handles tough toilet and drain jobs.',
  }),
  p({
    id: 'bubbles-pine-gel',
    name: 'Bubbles Pine Gel',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 65,
    size: '1kg Tub',
    image: '/images/frames/bubbles-pine-gel.e103d7d2.jpg',
    imageRole: 'photo',
    preMessage: 'Heavy duty · Pine fresh',
    description:
      'A heavy-duty pine disinfectant gel that cleans, deodorises and leaves floors shining.',
  }),
  p({
    id: 'bubbles-citrus-gel',
    name: 'Bubbles Citrus Gel',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 65,
    size: '1kg Tub',
    image: '/images/frames/bubbles-citrus-gel.4d60e8fd.jpg',
    imageRole: 'photo',
    preMessage: 'Zesty citrus · 500g from R52',
    description:
      'A zesty citrus cleaning gel for kitchens, bathrooms and high-traffic surfaces. Also available in 500g.',
  }),
  p({
    id: 'bubbles-citrus-pine-gel',
    name: 'Citrus and Pine Gel Combo',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 52,
    size: '500g + 1kg',
    image: '/images/frames/bubbles-citrus-pine-gel.ebd05de0.jpg',
    imageRole: 'photo',
    preMessage: 'Both gels, one price',
    description:
      'The citrus gel in 500g together with the pine gel, for anyone who wants both on the shelf.',
  }),
  p({
    id: 'bubbles-all-purpose-cleaner',
    name: 'All-Purpose Cleaner',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 44,
    size: '750ml',
    image: '/images/frames/bubbles-all-purpose-cleaner.6a9271ea.jpg',
    imageRole: 'photo',
    preMessage: 'Fresh lemon · Cuts grease',
    description:
      'A versatile lemon-fresh surface cleaner that cuts through grease and grime on most washable surfaces.',
  }),
  p({
    id: 'bubbles-multipurpose-750',
    name: 'Multipurpose Cleaner 750ml',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 97,
    size: '750ml',
    image: '/images/frames/bubbles-multipurpose-750.0c749bf5.jpg',
    imageRole: 'photo',
    preMessage: 'Heavy duty formulation',
    description:
      'A stronger multipurpose cleaning liquid for floors, tiles and general household use. Also available in 5L.',
  }),
  p({
    id: 'bubbles-black-dip',
    name: 'Household Hygiene Black Dip',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 75,
    size: '1L',
    image: '/images/frames/bubbles-black-dip.32bd5a21.jpg',
    imageRole: 'photo',
    preMessage: 'Drains · yards · pet areas',
    description:
      'An industrial-strength disinfectant fluid for drains, outdoor areas and deep sanitation. Not for use on skin.',
  }),
  p({
    id: 'bubbles-floor-polish-lg',
    name: 'Liquid Polymer Floor Polish',
    brand: 'bubbles-detergents',
    category: 'Floor Care',
    price: 136,
    size: '5L',
    image: '/images/frames/bubbles-floor-polish-lg.139730dc.jpg',
    imageRole: 'photo',
    preMessage: 'Instant shine · Polymer',
    description:
      'A polymer floor shine polish for instant gloss on hard floors. The larger 5L size.',
    }),
  p({
    id: 'bubbles-floor-polish-1l',
    name: 'Liquid Polymer Floor Polish 1L',
    brand: 'bubbles-detergents',
    category: 'Floor Care',
    price: 66,
    size: '1L',
    image: '/images/frames/bubbles-floor-polish-1l.475361ad.jpg',
    imageRole: 'photo',
    preMessage: 'Instant shine · Polymer',
    description:
      'The same polymer floor polish in a 1L for smaller spaces.',
  }),
  p({
    id: 'bubbles-powder-soap',
    name: 'Powder Soap',
    brand: 'bubbles-detergents',
    category: 'Laundry',
    price: 140,
    size: '5kg · 20kg R380',
    image: '/images/frames/bubbles-powder-soap.5b4579b7.jpg',
    imageRole: 'photo',
    preMessage: 'Bulk laundry soap · Two sizes',
    description:
      'Bulk washing powder soap, 5kg for R140 or 20kg for R380.',
    }),
  p({
    id: 'bubbles-tile-cleaner-5l',
    name: 'Tile Cleaner 5L',
    brand: 'bubbles-detergents',
    category: 'Floor Care',
    price: 155,
    size: '5L',
    image: '/images/frames/bubbles-tile-cleaner-5l.5e7c5aa7.jpg',
    imageRole: 'photo',
    preMessage: 'For all tile types',
    description:
      'A tile cleaner for glazed and ceramic tiles, bulk sized for larger floors.',
    }),
  p({
    id: 'bubbles-car-wash-wax',
    name: 'Car Wash & Wax Shampoo',
    brand: 'bubbles-detergents',
    category: 'Car Care',
    price: 155,
    size: '5L Jerry Can',
    image: '/images/frames/bubbles-car-wash-wax.6c98a603.jpg',
    imageRole: 'photo',
    featured: true,
    preMessage: 'High foam · Streak free',
    description:
      'A high-foam, pH-balanced car shampoo with carnauba wax for a streak-free, showroom shine.',
  }),
  p({
    id: 'bubbles-car-interior',
    name: 'Car Tyre, Leather & Dash Cleaner',
    brand: 'bubbles-detergents',
    category: 'Car Care',
    price: 50,
    size: '1L',
    image: '/images/hero-bubbles.webp',
    imageRole: 'photo',
    preMessage: 'Tyre · leather · plastic',
    description:
      'For leather polishing, plastic polishing and tyre dressing in one bottle.',
    photoGrade: 'weak',
    artworkWithheld: 'label-not-hers',
  }),
  p({
    id: 'bubbles-detergents-startup',
    name: 'Detergents Business Start Up',
    brand: 'bubbles-detergents',
    category: 'Starter Packs',
    price: 1850,
    size: '10 of Each · 750ml',
    image: '/images/frames/bubbles-detergents-startup.ce1f4d3a.jpg',
    imageRole: 'photo',
    badge: 'Wholesale',
    preMessage: 'For resellers · 10 of each line',
    description:
      'A reseller starter pack: 10 of each of the 750ml detergents, enough stock to open a shelf.',
  }),
  p({
    id: 'bubbles-combo-95',
    name: 'Combo R95',
    brand: 'bubbles-detergents',
    category: 'Combos',
    price: 95,
    size: '3 × 750ml',
    image: '/images/frames/bubbles-combo-95.be6b9ef9.jpg',
    imageRole: 'photo',
    preMessage: 'Dish liquid · thick bleach · multipurpose',
    description:
      '750ml dish liquid, 750ml thick bleach and a multipurpose cleaner, bundled.',
  }),
  p({
    id: 'bubbles-combo-137',
    name: 'Combo R137',
    brand: 'bubbles-detergents',
    category: 'Combos',
    price: 137,
    size: '4 Piece',
    image: '/images/frames/bubbles-combo-137.b7522bd4.jpg',
    imageRole: 'photo',
    preMessage: 'Dish liquid · pine gel · bleach · all-purpose',
    description:
      '750ml dishwashing liquid, 750ml thick bleach, a 750ml pine gel and a 750ml all-purpose cleaner, bundled at R137.',
  }),
  p({
    id: 'bubbles-pine-gel-dishwashing',
    name: 'Pine Gel & Dishwashing Liquid',
    brand: 'bubbles-detergents',
    category: 'Combos',
    price: 83,
    size: '750ml + 750ml',
    image: '/images/frames/bubbles-pine-gel-dishwashing.c5e481b7.jpg',
    imageRole: 'photo',
    preMessage: 'Two everyday essentials',
    description:
      'A 750ml dishwashing liquid with a 750ml pine gel, the two things most kitchens run out of first.',
  }),
];

export const FEATURED = PRODUCTS.filter((x) => x.featured);

export const PRODUCT_COUNT = PRODUCTS.length;

export const BRAND_COUNTS = PRODUCTS.reduce<Record<string, number>>((acc, x) => {
  acc[x.brand] = (acc[x.brand] ?? 0) + 1;
  return acc;
}, {});

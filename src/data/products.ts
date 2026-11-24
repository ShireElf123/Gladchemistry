import type { BrandId } from './brands';

export interface Product {
  id: string;
  name: string;
  /** Full uncropped name, for the detail modal and search. */
  fullName?: string;
  preMessage: string;
  brand: BrandId;
  /** Photograph of the real pack. Only set where the label in the picture is
   *  genuinely hers — see the note at the top of CatalogueList. */
  image?: string;
  category: string;
  price: number;
  size: string;
  notes?: string[];
  description: string;
  badge?: string;
  featured?: boolean;
}

/**
 * The catalogue carries no imagery, deliberately.
 *
 * Every picture in this repo was generated, and the generator could not be
 * trusted with packaging: it invented a red bottle for a green product, a white
 * jerrycan with a brand mark that does not exist, and typed-out labels where
 * the shop's own printed artwork belonged. Repeated passes fixed some and
 * introduced others.
 *
 * A catalogue that shows the wrong pack is worse than one that shows no pack,
 * so the pictures are gone and the products are listed by name, size and price.
 * Photographs come back when the shop sends real ones.
 */
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
    image: '/images/products/gladchemistry-skin-moist-125g.jpg',
    name: 'Skin Moist 125g',
    brand: 'gladchemistry',
    category: 'Skin Care',
    price: 96,
    size: '125g Tub',
    badge: 'Bestseller',
    featured: true,
    preMessage: 'The original formula · For dry, itchy and flaky skin',
    notes: ['Dry skin', 'Eczema', 'Dermatitis', 'Insect bites', 'Chemical burns'],
    description:
      "The cream Gladness formulated for her daughter's dry, itchy skin when standard creams failed — a rich body and hand emollient that calms dry, flaky and irritated skin.",
  }),
  p({
    id: 'gc-skin-moist-family',
    image: '/images/products/gladchemistry-skin-moist-family.jpg',
    name: 'Skin Moist Family Tub',
    brand: 'gladchemistry',
    category: 'Skin Care',
    price: 150,
    size: 'Large Tub',
    featured: true,
    preMessage: 'Family size · Same formula, bigger tub',
    description:
      'The whole-family tub of Skin Moist, for anyone who goes through the 125g faster than they would like. Same emollient formula, sized for daily use.',
  }),
  p({
    id: 'gc-raw-shea-butter',
    image: '/images/products/gladchemistry-raw-shea-butter.jpg',
    name: 'Raw Shea Butter 100g',
    brand: 'gladchemistry',
    category: 'Skin Care',
    price: 100,
    size: '100g',
    preMessage: 'Unrefined · Imported from Ghana',
    notes: ['Moisturises skin & scalp', 'Reduces eczema signs', 'Improves hair growth', 'Relieves dry skin'],
    description:
      'Raw, unrefined shea butter imported from Ghana. Nothing added, nothing refined out — just the butter, for skin, scalp and hair.',
  }),
  p({
    id: 'gc-sheacoco-hair-care',
    image: '/images/products/gladchemistry-sheacoco-hair-care.jpg',
    name: 'SheaCoco Hair Care 125g',
    brand: 'gladchemistry',
    category: 'Hair Care',
    price: 120,
    size: '125g Tub',
    preMessage: 'Shea + coconut · For receding hairlines',
    description:
      'A shea and coconut hair cream aimed at receding hairlines and slow growth. Massage into the scalp and leave in.',
  }),
  p({
    id: 'gc-hair-food',
    image: '/images/products/gladchemistry-hair-food.jpg',
    name: 'Hair Food',
    brand: 'gladchemistry',
    category: 'Hair Care',
    price: 45,
    size: '125g Tub',
    preMessage: 'Petroleum jelly base · Softens and seals',
    description:
      'A classic hair food with a petroleum jelly base and a light scent, for sealing in moisture and softening dry hair and scalp.',
  }),
  p({
    id: 'gc-hair-oil',
    image: '/images/products/gladchemistry-hair-oil.jpg',
    name: 'Hair Oil',
    brand: 'gladchemistry',
    category: 'Hair Care',
    price: 55,
    size: '100ml',
    preMessage: 'Organic blend · For beard growth and scalp health',
    description:
      'An organic hair oil for beard growth, scalp moisturising and flake control. Light enough to use daily.',
  }),
  p({
    id: 'gc-castor-oil-50',
    image: '/images/products/gladchemistry-castor-oil-50ml.jpg',
    name: 'Castor Oil 50ml',
    brand: 'gladchemistry',
    category: 'Hair & Skin Oils',
    price: 33,
    size: '50ml',
    preMessage: 'Cold pressed · Hexane free',
    description:
      'Pure cold-pressed, hexane-free castor oil in a handy 50ml. Thick and rich — a little goes a long way on hair, brows and lashes.',
  }),
  p({
    id: 'gc-castor-oil-500',
    image: '/images/products/gladchemistry-castor-oil-500ml.jpg',
    name: 'Castor Oil 500ml',
    brand: 'gladchemistry',
    category: 'Hair & Skin Oils',
    price: 90,
    size: '500ml',
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
    
    badge: 'Wholesale',
    preMessage: 'For resellers · 10 of each, 12 lines',
    description:
      'A reseller starter pack: 10 of each of 12 skin care lines, so you can open a shelf without ordering everything individually.',
  }),

  /* ------------------------------------------------- Felis be Glad scent */
  p({
    id: 'felis-reed-diffuser',
    image: '/images/products/felis-reed-diffuser.jpg',
    name: 'Signature Amber Reed Diffuser',
    brand: 'felis-be-glad',
    category: 'Home Diffusers',
    price: 240,
    size: '100ml + Black Reeds',
    badge: 'Luxury Home',
    featured: true,
    preMessage: '12+ weeks of scent',
    description:
      'Hand-poured amber home fragrance oil in a square glass flacon with matte black rattan reeds. Twelve weeks or more of continuous scent.',
  }),
  p({
    id: 'felis-scandal-ladies',
    image: '/images/products/felis-inspired-scandal-ladies.jpg',
    name: 'Inspired by Scandal Ladies',
    brand: 'felis-be-glad',
    category: 'Fine Fragrances',
    price: 195,
    size: '30ml Eau de Parfum',
    featured: true,
    badge: 'Top Pick',
    preMessage: 'Honey · Gardenia · Blood orange',
    description:
      'A captivating honey, gardenia and blood orange accord in a sculpted teal glass flacon.',
  }),
  p({
    id: 'felis-hugo-men',
    image: '/images/products/felis-inspired-hugo-men.jpg',
    name: 'Inspired by Hugo Men',
    brand: 'felis-be-glad',
    category: 'Fine Fragrances',
    price: 260,
    size: '100ml Eau de Parfum',
    featured: true,
    preMessage: 'Green apple · Sage · Cedarwood',
    description:
      'Crisp green apple, aromatic sage and cedarwood, built for all-day confidence.',
  }),
  p({
    id: 'felis-diesel-men',
    image: '/images/products/felis-inspired-diesel-men.jpg',
    name: 'Inspired by Diesel Men',
    brand: 'felis-be-glad',
    category: 'Fine Fragrances',
    price: 195,
    size: '30ml Eau de Parfum',
    preMessage: 'Grapefruit · Lavender · Amber',
    description:
      'A bold spicy-woody fragrance with grapefruit and lavender over warm amber.',
  }),
  p({
    id: 'felis-ted-lapidus-car',
    image: '/images/products/felis-inspired-ted-lapidus-car.jpg',
    name: 'Inspired by Ted Lapidus Car & Roll-On',
    brand: 'felis-be-glad',
    category: 'Car Perfumes',
    price: 85,
    size: '15ml',
    preMessage: 'Auto & travel',
    description:
      'A concentrated fragrance oil for the car or a roll-on for your bag. Long-lasting cabin freshness without the aerosol.',
  }),
  p({
    id: 'felis-fragrance-edp-20ml',
    image: '/images/products/felis-fragrances-lineup-real.jpg',
    name: 'Fine Fragrance EDP 20ml',
    brand: 'felis-be-glad',
    category: 'Fine Fragrances',
    price: 80,
    size: '20ml Eau de Parfum',
    preMessage: 'Your choice of 20 generics',
    description:
      'Generics of your choice of fine fragrance, in a 20ml travel size. Pick the scent you want when you order.',
  }),
  p({
    id: 'felis-fragrances-startup',
    image: '/images/products/felis-fragrances-startup.jpg',
    name: 'Fine Fragrances Business Start Up',
    brand: 'felis-be-glad',
    category: 'Starter Packs',
    price: 1250,
    size: '20 Piece Collection',
    badge: 'Wholesale',
    preMessage: 'For resellers · 20-piece set',
    description:
      'A 20-piece collection of the fine fragrance line for resellers — enough to build a display without ordering case by case.',
  }),

  /* ------------------------------------------------------- Bubbles clean */
  p({
    id: 'bubbles-dishwashing-liquid',
    image: '/images/products/bubbles-dishwashing-liquid.png',
    name: 'Hygiene Dishwashing Liquid',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 36,
    size: '750ml',
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
    preMessage: 'High foam · Bulk size',
    description:
      'The same thick, strong dishwashing liquid in a 2L tub for kitchens that go through it fast.',
  }),
  p({
    id: 'bubbles-thick-bleach',
    image: '/images/products/bubbles-thick-bleach.png',
    name: 'Bubbles Thick Bleach',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 42,
    size: '750ml',
    preMessage: 'Clings to the surface',
    description:
      'A clinging thick bleach formula that kills germs and stains, whitens surfaces and handles tough toilet and drain jobs.',
  }),
  p({
    id: 'bubbles-pine-gel',
    image: '/images/products/bubbles-pine-gel.png',
    name: 'Bubbles Pine Gel',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 65,
    size: '1kg Tub',
    preMessage: 'Heavy duty · Pine fresh',
    description:
      'A heavy-duty pine disinfectant gel that cleans, deodorises and leaves floors shining.',
  }),
  p({
    id: 'bubbles-citrus-gel',
    image: '/images/products/bubbles-citrus-gel.jpg',
    name: 'Bubbles Citrus Gel',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 65,
    size: '1kg Tub',
    preMessage: 'Zesty citrus · 500g from R52',
    description:
      'A zesty citrus cleaning gel for kitchens, bathrooms and high-traffic surfaces. Also available in 500g.',
  }),
  p({
    id: 'bubbles-citrus-pine-gel',
    image: '/images/products/bubbles-pine-gel-dishwashing.jpg',
    name: 'Citrus and Pine Gel Combo',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 52,
    size: '500g + 1kg',
    preMessage: 'Both gels, one price',
    description:
      'The citrus gel in 500g together with the pine gel, for anyone who wants both on the shelf.',
  }),
  p({
    id: 'bubbles-all-purpose-cleaner',
    image: '/images/products/bubbles-all-purpose-cleaner.png',
    name: 'All-Purpose Cleaner',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 44,
    size: '750ml',
    preMessage: 'Fresh lemon · Cuts grease',
    description:
      'A versatile lemon-fresh surface cleaner that cuts through grease and grime on most washable surfaces.',
  }),
  p({
    id: 'bubbles-multipurpose-750',
    image: '/images/products/bubbles-multipurpose-750ml.png',
    name: 'Multipurpose Cleaner 750ml',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 97,
    size: '750ml',
    preMessage: 'Heavy duty formulation',
    description:
      'A stronger multipurpose cleaning liquid for floors, tiles and general household use. Also available in 5L.',
  }),
  p({
    id: 'bubbles-black-dip',
    image: '/images/products/bubbles-black-dip-real.jpg',
    name: 'Household Hygiene Black Dip',
    brand: 'bubbles-detergents',
    category: 'Home Care',
    price: 75,
    size: '1L',
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
    preMessage: 'For all tile types',
    description:
      'A tile cleaner for glazed and ceramic tiles, bulk sized for larger floors.',
    }),
  p({
    id: 'bubbles-car-wash-wax',
    image: '/images/products/bubbles-car-wash-wax-real.jpg',
    name: 'Car Wash & Wax Shampoo',
    brand: 'bubbles-detergents',
    category: 'Car Care',
    price: 155,
    size: '5L Jerry Can',
    featured: true,
    preMessage: 'High foam · Streak free',
    description:
      'A high-foam, pH-balanced car shampoo with carnauba wax for a streak-free, showroom shine.',
  }),
  p({
    id: 'bubbles-car-interior',
    image: '/images/products/bubbles-car-tyre-real.jpg',
    name: 'Car Tyre, Leather & Dash Cleaner',
    brand: 'bubbles-detergents',
    category: 'Car Care',
    price: 50,
    size: '1L',
    preMessage: 'Tyre · leather · plastic',
    description:
      'For leather polishing, plastic polishing and tyre dressing in one bottle.',
  }),
  p({
    id: 'bubbles-detergents-startup',
    image: '/images/products/bubbles-detergents-startup.jpg',
    name: 'Detergents Business Start Up',
    brand: 'bubbles-detergents',
    category: 'Starter Packs',
    price: 1850,
    size: '10 of Each · 750ml',
    badge: 'Wholesale',
    preMessage: 'For resellers · 10 of each line',
    description:
      'A reseller starter pack: 10 of each of the 750ml detergents, enough stock to open a shelf.',
  }),
  p({
    id: 'bubbles-combo-95',
    image: '/images/products/bubbles-combo-r95.jpg',
    name: 'Combo R95',
    brand: 'bubbles-detergents',
    category: 'Combos',
    price: 95,
    size: '3 × 750ml',
    preMessage: 'Dish liquid · thick bleach · multipurpose',
    description:
      '750ml dish liquid, 750ml thick bleach and a multipurpose cleaner, bundled.',
  }),
  p({
    id: 'bubbles-combo-137',
    image: '/images/products/bubbles-combo-r137.jpg',
    name: 'Combo R137',
    brand: 'bubbles-detergents',
    category: 'Combos',
    price: 137,
    size: '4 Piece',
    preMessage: 'Dish liquid · pine gel · bleach · all-purpose',
    description:
      '750ml dishwashing liquid, 750ml thick bleach, a 750ml pine gel and a 750ml all-purpose cleaner, bundled at R137.',
  }),
  p({
    id: 'bubbles-pine-gel-dishwashing',
    image: '/images/products/bubbles-pine-gel-dishwashing.jpg',
    name: 'Pine Gel & Dishwashing Liquid',
    brand: 'bubbles-detergents',
    category: 'Combos',
    price: 83,
    size: '750ml + 750ml',
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

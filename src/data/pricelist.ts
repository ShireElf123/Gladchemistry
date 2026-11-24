import type { BrandId } from './brands';

/* ------------------------------------------------------------------ */
/*  Price list data                                                   */
/*                                                                    */
/*  SOURCE OF TRUTH: her own WhatsApp business catalogue, read from   */
/*  the screenshots she sent. Prices are transcribed verbatim — in    */
/*  rand, as she lists them. Nothing here is estimated, rounded or    */
/*  inferred. Where her catalogue states a range or two sizes in one  */
/*  line, the line is reproduced exactly as she wrote it.             */
/*                                                                    */
/*  The second block is the sixteen products on the site, at the      */
/*  prices the shop currently charges. It exists because those two    */
/*  lists do not always agree — see CONFLICTS at the foot of this     */
/*  file. The book shows both and says so, rather than quietly        */
/*  picking one.                                                      */
/* ------------------------------------------------------------------ */

export interface PriceRow {
  name: string;
  /** Her catalogue description, trimmed to what fits on a line. */
  detail?: string;
  /** Verbatim as listed. A string, because she lists ranges and "R140 / R380". */
  price: string;
}

export interface BookPage {
  kind: 'cover' | 'list' | 'note' | 'back';
  /** House tag for the running head. */
  house?: BrandId | 'all' | 'bundles';
  kicker?: string;
  title: string;
  standfirst?: string;
  rows?: PriceRow[];
  /** For note/back pages: paragraphs. */
  body?: string[];
  columns?: 1 | 2;
}

/* ---- her WhatsApp catalogue, house by house ---------------------- */

const GLADCHEMISTRY_SKIN: PriceRow[] = [
  { name: 'Raw Shea Butter 100 g', detail: 'Raw shea butter, imported', price: 'R100' },
  { name: 'Raw Shea Butter 1 kg', detail: '1 kg R400 and 100 g R100', price: 'R400' },
  { name: 'Skin Moist 125 g', detail: 'Dry skin, eczema, dermatitis, insect bites, chemical burns', price: 'R96' },
  { name: 'Skin Moist — family tub', detail: 'Whole family tub, for dry skin', price: 'R150' },
  { name: 'Skin Moist & Charcoal Bar', detail: 'Acne treatment and dark spots', price: 'R125' },
  { name: 'Deobloks', detail: '500 g, for refreshing', price: 'R55' },
];

const GLADCHEMISTRY_HAIR: PriceRow[] = [
  { name: 'Hair Oil', detail: 'Organic hair oil', price: 'R55' },
  { name: 'Hair Oil — hair boost', detail: 'Hair boost, scalp moisturiser, flaking', price: 'R55' },
  { name: 'Hairfood 125 g', detail: 'Petroleum jelly base', price: 'R45' },
  { name: 'SheaCoco 125 g', detail: 'Receding hairline, growth', price: 'R120' },
  { name: 'Hair & Beard Stimulating Oil', detail: 'Receding hairline and beard growth', price: 'Ask' },
  { name: 'Castor Oil 50 ml', detail: '50 ml castor oil', price: 'R33' },
  { name: 'Castor Oil 500 ml', detail: 'Cold pressed, hexane free', price: 'R90' },
];

const FELIZ: PriceRow[] = [
  { name: 'Fine Fragrance EDP 20 ml', detail: 'Generics of your choice, fine fragrance', price: 'R80' },
  { name: 'Fine Fragrance — other sizes', detail: '10 ml oil based · 10, 20, 30, 40, 50 and 100 ml', price: 'Per size' },
];

const FELIZ_FEMALE =
  'Feliz be Glad Floral · Hugo Boss Women · La Vie Est Belle · Fantasy · Chanel No 5 · Coppelia · Coco Mademoiselle · Scandal · Be Delicious Fresh Floral · Gucci Rush · Lady Million';
const FELIZ_MALE =
  'Hugo Boss · Cool Water · Ted Lapidus · Sausage · Ferrari Essence · Diesel Men · One Million · Dunhill Desire Red · Dunhill Desire Blue · Feliz be Glad Hunt';

const BUBBLES_HOME: PriceRow[] = [
  { name: 'Pine Gel Dishwashing Liquid', detail: '750 ml dishwashing liquid, 1 kg', price: 'R83' },
  { name: 'Dishwashing Liquid', detail: 'High foam, thick, long lasting', price: 'R36' },
  { name: 'Dishwashing Liquid 2 L', detail: 'High foam, thick and strong', price: 'R82' },
  { name: 'Multipurpose Cleaner 750 ml', detail: 'Multi purpose cleaning liquid', price: 'R97' },
  { name: 'Citrus & Pine Gel', detail: 'Citrus gel comes in 500 g', price: 'R52' },
  { name: 'Tile Cleaner 5 L', detail: 'For all types of tiles, including glazed', price: 'R155' },
];

const BUBBLES_FLOOR: PriceRow[] = [
  { name: 'Liquid Polymer Floor Polish 1 L', detail: '1 L', price: 'R66' },
  { name: 'Liquid Polymer Floor Polish', detail: 'Polymer floor shine polish, industrial', price: 'R136' },
  { name: 'Powder Soap', detail: '5 kg R140 · 20 kg R380', price: 'R140 / R380' },
  { name: 'All-Purpose Cleaner (handy pack)', detail: 'Ammonia abrasive all purpose', price: 'R95 – R145' },
];

const BUBBLES_CAR: PriceRow[] = [
  { name: 'Car Wash & Wax Shampoo', detail: 'Car wash and wax, just wash and shine', price: 'R155' },
  { name: 'Car Tyre, Leather Seats & Dashboard', detail: 'For leather polishing, plastic polishing', price: 'R50' },
];

const COMBOS: PriceRow[] = [
  { name: '1.5 L Foam Bath & 100 g Tub', detail: 'Any of our 1.5 L foam bath and tub', price: 'R110' },
  { name: 'Bubble Bath & Skin Moist Combo', detail: '5 L foam bath and 125 g skin moist', price: 'R220' },
  { name: 'Combo R95', detail: '750 ml dish liquid, 750 ml thick bleach', price: 'R95' },
  { name: '137 Combo', detail: '750 ml dishwashing liquid, 1 kg', price: 'R137' },
];

const BUSINESS: PriceRow[] = [
  { name: 'Detergents Business Start-Up', detail: '10 of each of the 750 ml dishwashing', price: 'R1 850' },
  { name: 'Personal Care Start-Up', detail: '10 of 125 g skin moist, 10 of 125 g', price: 'R2 600' },
  { name: 'Fine Fragrances Business Start-Up', detail: 'A collection of 20 of the 20 ml', price: 'R1 250' },
];

/* ---- the sixteen on the site, at shop prices --------------------- */

const SHOP_RANGE: PriceRow[] = [
  { name: 'Artisan Bath Fizzies Tub', detail: 'Gladchemistry · 1 kg bucket, 2 kg salon tub', price: 'R185' },
  { name: 'Foam Bath with Moisturiser & Essential Oil', detail: 'Gladchemistry · 1.5 L', price: 'R125' },
  { name: 'Pure Bicarbonate of Soda', detail: 'Gladchemistry · 500 g sachet', price: 'R55' },
  { name: 'Waterless Hand Sanitizer Rub', detail: 'Gladchemistry · 100 ml mist, 500 ml pump', price: 'R45' },
  { name: 'Signature Amber Reed Diffuser', detail: 'Feliz be Glad · 100 ml + reeds, 200 ml refill', price: 'R240' },
  { name: 'Inspired by Scandal, Ladies', detail: 'Feliz be Glad · 10–100 ml, oil based', price: 'R195' },
  { name: 'Inspired by Hugo Men', detail: 'Feliz be Glad · 10–100 ml, oil based', price: 'R260' },
  { name: 'Inspired by Diesel Men', detail: 'Feliz be Glad · 10–100 ml, oil based', price: 'R195' },
  { name: 'Inspired by Ted Lapidus Car & Roll-On', detail: 'Feliz be Glad · 15 ml roll-on / hanging diffuser', price: 'R85' },
  { name: 'Bubbles Car Wash & Wax', detail: 'Bubbles · 5 L jerry can, 1 L bottle', price: 'R165' },
  { name: 'Bubbles Thick Bleach', detail: 'Bubbles · 750 ml, 5 L bulk', price: 'R42' },
  { name: 'Hygiene Dishwashing Liquid', detail: 'Bubbles · 750 ml, 5 L bulk', price: 'R38' },
  { name: 'Bubbles Pine Gel', detail: 'Bubbles · 200 g tub', price: 'R65' },
  { name: 'Bubbles Citrus Gel', detail: 'Bubbles · 200 g tub', price: 'R65' },
  { name: 'All-Purpose Cleaner', detail: 'Bubbles · 750 ml, 5 L bulk', price: 'R44' },
  { name: 'Household Hygiene Black Dip Cleaning Liquid', detail: 'Bubbles · 1 L, 5 L bulk', price: 'R75' },
];

/* ---- pages, in reading order ------------------------------------ */

export const BOOK: BookPage[] = [
  {
    kind: 'cover',
    house: 'all',
    kicker: 'Gladchemistry Products',
    title: 'Price list',
    standfirst:
      'Gladchemistry · Feliz be Glad · Bubbles Detergents. Filled and labelled in Springs, Gauteng.',
  },
  {
    kind: 'list',
    house: 'gladchemistry',
    kicker: 'Gladchemistry',
    title: 'Skin',
    standfirst: 'Shea, skin moist and the charcoal bar.',
    rows: GLADCHEMISTRY_SKIN,
  },
  {
    kind: 'list',
    house: 'gladchemistry',
    kicker: 'Gladchemistry',
    title: 'Hair',
    standfirst: 'Oils, hair food and the castor oils.',
    rows: GLADCHEMISTRY_HAIR,
  },
  {
    kind: 'list',
    house: 'felis-be-glad',
    kicker: 'Feliz be Glad',
    title: 'Fine fragrance',
    standfirst: 'Oil based, in every size from 10 ml to 100 ml.',
    rows: FELIZ,
  },
  {
    kind: 'note',
    house: 'felis-be-glad',
    kicker: 'Feliz be Glad',
    title: 'The fragrance shelf',
    standfirst: 'Generic fine fragrances, male and female, 10 ml oil based.',
    body: [`Female — ${FELIZ_FEMALE}`, `Male — ${FELIZ_MALE}`],
  },
  {
    kind: 'list',
    house: 'bubbles-detergents',
    kicker: 'Bubbles Detergents',
    title: 'Household',
    standfirst: 'The everyday shelf — dish, gel, tile and multipurpose.',
    rows: BUBBLES_HOME,
  },
  {
    kind: 'list',
    house: 'bubbles-detergents',
    kicker: 'Bubbles Detergents',
    title: 'Floor & bulk',
    standfirst: 'Polish, powder soap and the handy packs.',
    rows: BUBBLES_FLOOR,
  },
  {
    kind: 'list',
    house: 'bubbles-detergents',
    kicker: 'Bubbles Detergents',
    title: 'Car care',
    standfirst: 'Wash and wax, and the tyre and leather dressing.',
    rows: BUBBLES_CAR,
  },
  {
    kind: 'list',
    house: 'bundles',
    kicker: 'Combos & start-ups',
    title: 'Bundles',
    standfirst: 'Put together for resellers and for the weekly shop.',
    rows: [...COMBOS, ...BUSINESS],
  },
  {
    kind: 'list',
    house: 'all',
    kicker: 'The shop range',
    title: 'Sixteen products',
    standfirst: 'Personal care and fragrance — what the online shop carries, at its prices.',
    rows: SHOP_RANGE.slice(0, 5),
  },
  {
    kind: 'list',
    house: 'all',
    kicker: 'The shop range',
    title: 'Sixteen products',
    standfirst: 'Fragrance, continued.',
    rows: SHOP_RANGE.slice(5, 10),
  },
  {
    kind: 'list',
    house: 'all',
    kicker: 'The shop range',
    title: 'Sixteen products',
    standfirst: 'Bubbles Detergents — the six cleaning lines.',
    rows: SHOP_RANGE.slice(10),
  },
  {
    kind: 'back',
    house: 'all',
    kicker: 'Ordering',
    title: 'How to order',
    body: [
      'Send a WhatsApp to +27 73 719 0821 with the lines you want and the sizes.',
      'Collect at Shop 19, Palm Springs Mall, Springs, 1559 — or arrange delivery. Delivery is free over R500.',
      'Wholesale and reseller quantities are welcome; the start-up packs above are built for it.',
      'Prices are as last listed on the WhatsApp catalogue and are subject to change without notice.',
    ],
  },
];

/* ---- where her two lists disagree -------------------------------- */

export const CONFLICTS: { item: string; catalogue: string; shop: string }[] = [
  { item: 'Car wash & wax shampoo', catalogue: 'R155', shop: 'R165' },
  { item: 'Dishwashing liquid 750 ml', catalogue: 'R36', shop: 'R38' },
  { item: 'Citrus & pine gel', catalogue: 'R52', shop: 'R65' },
  { item: 'Pine gel dishwashing liquid', catalogue: 'R83', shop: 'R65' },
  { item: 'All-purpose cleaner', catalogue: 'R95 – R145', shop: 'R44' },
  { item: '1.5 L foam bath', catalogue: 'R110 with a tub', shop: 'R125' },
];

export type BrandId = 'gladchemistry' | 'felis-be-glad' | 'bubbles-detergents';

export interface BrandInfo {
  id: BrandId;
  name: string;
  tagline: string;
  category: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  /** Flat saturated tone used behind product art (the soda "stage"). */
  stageTone: string;
  /** Deep ink used for text/heading emphasis in this house. */
  inkColor: string;
  /** Button class for this house's primary action. */
  buttonClass: string;
  heroImage: string;
  highlights: string[];
  /** Short punchy line for tickers. */
  tag: string;
}

export const BRANDS: Record<BrandId, BrandInfo> = {
  gladchemistry: {
    id: 'gladchemistry',
    name: 'Gladchemistry',
    tagline: 'Organic Personal Care',
    category: 'Personal Care & Bath',
    description:
      'Pure, botanical-rich personal care formulated with organic extracts, mineral-rich bath fizzies, gentle foam baths, and skin-loving hygiene essentials.',
    primaryColor: '#16A34A',
    secondaryColor: '#0E7C4A',
    stageTone: '#DDF3E4',
    inkColor: '#0E7C4A',
    buttonClass: 'btn btn-fern',
    heroImage: '/images/hero-organic.webp',
    tag: 'Organic botanicals',
    highlights: [
      '100% Organic Botanical Extracts',
      'Mineral Bath Fizzies & Foam Bath',
      'Gentle on Sensitive Skin',
    ],
  },
  'felis-be-glad': {
    id: 'felis-be-glad',
    name: 'Felis be Glad',
    tagline: 'Fine Fragrances & Diffusers',
    category: 'Fragrance, Home & Auto',
    description:
      'Inspired-by fine fragrances crafted for lasting sillage, paired with artisanal reed diffusers and luxury car perfumes that transform every space.',
    primaryColor: '#C2760B',
    secondaryColor: '#3F2A12',
    stageTone: '#FBEEDB',
    inkColor: '#9A5B08',
    buttonClass: 'btn btn-ink',
    heroImage: '/images/hero-fragrance.webp',
    tag: 'Fine fragrance',
    highlights: [
      'Inspired-By Designer Scents',
      'Long-Lasting Reed Diffusers',
      'Signature Car Perfumes',
    ],
  },
  'bubbles-detergents': {
    id: 'bubbles-detergents',
    name: 'Bubbles Detergents',
    tagline: 'Home Care & Car Detergents',
    category: 'Home & Auto Cleaning',
    description:
      'Industrial-strength yet home-safe cleaning power. From thick bleach and pine gel to high-gloss car wash & wax, engineered for spotless results.',
    primaryColor: '#0284C7',
    secondaryColor: '#0C5B7A',
    stageTone: '#DCEFFB',
    inkColor: '#0C5B7A',
    buttonClass: 'btn btn-ink',
    heroImage: '/images/hero-bubbles.webp',
    tag: 'Serious cleaning',
    highlights: [
      'Heavy-Duty Home & Kitchen Care',
      'High-Foam Car Wash & Wax',
      'Concentrated Pine & Citrus Gels',
    ],
  },
};

export const BRAND_LIST: BrandInfo[] = [
  BRANDS.gladchemistry,
  BRANDS['felis-be-glad'],
  BRANDS['bubbles-detergents'],
];

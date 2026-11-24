# Gladchemistry

The Gladchemistry Products storefront — a five-page e-commerce site covering three
in-house brands:

| Brand | Range |
| --- | --- |
| **Gladchemistry** | Organic personal care, bath fizzies, foam baths |
| **Felis be Glad** | Fine fragrances, reed diffusers, car perfumes |
| **Bubbles Detergents** | Home & car cleaning detergents |

Live: <https://gladchemistry.vercel.app>

## Pages

- `/` — Home: hero with brand switcher, ticker, featured products, the 3 houses, proof strip
- `/shop` — Full catalogue with brand filter (`/shop?brand=gladchemistry`)
- `/brands` — Side-by-side comparison of the three brands
- `/about` — Brand story and formulation standards
- `/contact` — Enquiry form and contact details

Plus a slide-over cart drawer with quantity handling, and a product modal showing
variants and scent notes.

## Stack

- **React 19** + **TypeScript**, bundled with **Vite**
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **React Router 7** (`BrowserRouter`, client-side routing)
- **Framer Motion** for transitions, **Lucide** for icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Type check (`tsc -b`) then production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint with oxlint |

## Project structure

```
src/
├── components/
│   └── ...           # Navbar, Footer, CartDrawer, ProductCard, ProductModal
├── context/      # CartContext — cart state and totals
├── data/         # brands.ts and products.ts — the whole catalogue lives here
└── pages/        # Home, Shop, Brands, About, Contact
public/images/    # Product, hero and logo imagery
```

### Design system

Calibrated against the **Fizzly Soda** storefront: flat saturated colour, oversized
confident display type, product art on tinted stages, chunky pill buttons and ticker
strips — not glassy admin panels.

`src/index.css` holds the shared tokens and primitives:

| Token / class | Role |
| --- | --- |
| `--ink`, `--cream`, `--lime` | Core palette (ink text, warm paper, lime accent) |
| `.display-xl` / `.display-lg` | Fluid oversized headings (`clamp`) |
| `.u-mark` | Underlined emphasis word inside a heading |
| `.stage` | Tinted product pad with a soft white circle behind the pack |
| `.btn` + `btn-ink` / `btn-fern` / `btn-lime` / `btn-ghost` | Chunky pill buttons |
| `.chip` | Filter pills with an active ink state |
| `.flag` | Hard uppercase badge (BESTSELLER, NEW) |
| `.marquee` | Scrolling ticker strip |
| `.panel` | Flat white surface, one hairline, no blur |

Each brand carries its own `stageTone` and `inkColor` in `src/data/brands.ts`, so
product art is always tinted to the house it belongs to.


## Deployment

Deployed on Vercel as the `gladchemistry` project (Vite preset, build `npm run build`,
output `dist`).

`vercel.json` adds a catch-all rewrite so every route serves `index.html`. This site
uses client-side routing, so without it a direct visit to `/shop` or a page refresh on
any sub-page returns a 404. It also sets long-lived caching on hashed `/assets/`
bundles and a week-long cache on `/images/`.

> **Note:** the `gladchemistry` Vercel project is currently still linked to the
> `fizzly-soda` repository. Reconnect it to this repo in
> Vercel → Project → Settings → Git for automatic deploys from this source.

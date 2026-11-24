# The catalogue carries no imagery

**Instruction:** don't fix them, delete them for good. The site is about
information first now; products are names in drop-downs.

## What was deleted — 89 files

| Set | Count | Why |
|---|---|---|
| `public/images/frames/` | 39 | Every one was machine-generated. The generator invented packaging it could not see — a red bottle for a green product, a white jerrycan with a brand mark that does not exist, typed-out text where the shop's printed label belonged. |
| `public/images/products/` | 44 | The reference photographs. They were the source of the problem, not the solution: the best of them still mislabelled the product, and the worst were 162px snapshots. |
| `hero-organic`, `hero-bubbles`, `hero-fragrance` | 3 | Generated brand scenes. |
| `editorial-care`, `-scent`, `-clean`, `-felis-story` | 4 | Generated editorial scenes. |
| `reed-diffuser.jpg` | 1 | Unreferenced leftover. |

**One image survives: `gladchemistry-logo.jpg`** — her real mark, still on the
navbar, the footer and the brand logo component.

## What replaced it

`src/components/CatalogueList.tsx`. Every product is now a `<details>`
disclosure under its category:

- closed, it is a scannable list of **names and prices** — what a catalogue is;
- opened, it shows size, the shop's own description, its benefit tags and a
  WhatsApp enquiry;
- it works without JavaScript, with the keyboard, and a screen reader reads the
  name before anything else;
- an **Open all / Collapse all** control sits above the list.

The catalogue appears in two places, both now text: `/shop` (all 40, with brand
chips, search and sort) and the homepage's signature-range section.

## Also removed

- `ProductCard`, `ProductPlate` and `ProductModal` — the three components that
  existed only to render pictures, plus `photo-zoom.ts`, which held the measured
  scale factors for frames that no longer exist.
- The `image`, `imageRole`, `fit`, `photoGrade` and `artworkWithheld` fields on
  `Product`, and `heroImage` on `BrandInfo`. A type that can hold a picture
  invites someone to put one back.
- `og:image` from the head. It pointed at a generated hero and would have
  advertised a false pack on every WhatsApp share. `twitter:card` downgraded to
  `summary` to match.
- The `audit:assets` script, which audited files that are gone.

## Checks

- `npx tsc -b` clean
- `npm test` **52 passed, 0 failed** — the suite now asserts that no `<img>`
  exists anywhere in the rendered catalogue, that products are `<details>`
  elements, that they open to reveal size/price/enquiry, and that every route
  still renders
- `npm run build` clean · main JS **151.5 kB gzip**, down from 155.2
- `npx oxlint` 0 errors
- All five routes render with **zero non-logo images**

## What comes back, and when

Photographs return only as real ones. When the shop sends them, add the files,
add an `image` field back to `Product`, and render it — the type is the gate,
and it is deliberately closed until there is something true to put in it.

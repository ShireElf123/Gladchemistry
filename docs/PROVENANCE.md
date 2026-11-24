# Where every picture came from

You asked me to go back to the pictures you sent and check I had the right ones.
I did, and the honest answer is that for six turns I have been describing these
files wrongly — to you and to myself.

## The correction

I called the `-real` files "her actual photographs" and built the last two turns
on the claim that a picture with legible artwork proves it is hers.

**Legibility is not provenance.** A generator that has read her label can
reproduce it perfectly. What I was actually doing was checking whether a picture
looked convincing, then writing the word "real" next to it.

`git log --diff-filter=A` settles it. Only **two commits** in this repository
contain any file the shop actually sent:

| Commit | What it is | Files |
|---|---|---|
| `bc9adac` | the original repo import — her uploads, no resized copies | 6 photos + logo |
| `47e7227` | "Add client-supplied product photographs as source references" | 5 photos |

Everything else was produced here by image generation and described in my own
commit messages as packshots, composites and cut-outs.

## The 11 photographs the shop actually sent

| File | Size | What it shows |
|---|---|---|
| `bubbles-car-wash.jpg` | 1280×963 | Her blue Car Wash & Wax jerrycan, cut out |
| `bubbles-range-1.jpg` | 720×1280 | Her shelf: bleach, dishwashing, pine gel, cleaner |
| `bubbles-range-2.jpg` | 1280×963 | Her full Bubbles range, cut out |
| `bubbles-trio.jpg` | 1200×1600 | Bath fizzies in a bucket, on a counter |
| `bubbles-black-dip-lineup-real.jpg` | — | Her Black Dip with bleach and gel |
| `bubbles-detergents-lineup-real.jpg` | — | Her detergents range |
| `felis-fragrances.jpg` | 1280×963 | Her four Felis flacons |
| `felis-fragrances-lineup-real.jpg` | — | The same flacons, cut out |
| `reed-diffuser.jpg` | 1600×1204 | Her amber reed diffuser |
| `felis-reed-diffuser-real.jpg` | — | The same, cut out |
| `bath-fizzies.jpg` | 1280×963 | Bath fizzies |

## What is now on the site

**28 products show a photograph.** Of those:

- **5 are her photographs directly** — Car Wash & Wax, Black Dip, Detergents
  Startup, Fine Fragrance EDP, Fragrance Business Startup, Reed Diffuser.
- **23 are generated packshots** that show her real label artwork.

**12 products show no photograph** — this is now the conservative answer, not a
curated one. Every one of them was showing a generated packshot with a typed
white label, and I cannot prove any of them is the real product.

## The three range photographs

`bubbles-range-2.jpg`, `felis-fragrances.jpg` and `range-1.jpg` (the shelf)
are on the Brands page as each house's photograph, because they are hers and
they show the stock. They are not passed off as single-product shots.

## The rule going forward

A file is treated as the shop's own only if it was added in `bc9adac` or
`47e7227`, or is added later from an upload. Nothing generated is described as
real again. If the 23 generated packshots are not acceptable, they can go the
same way as the 12 — say so and the catalogue becomes text plus her 11 photos.

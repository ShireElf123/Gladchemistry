# Feliz be Glad — the real facts

Supplied by the shop on 24 November. Everything here is theirs, not mine.

## Name

**Feliz be Glad** — with a z. The logo shows a red serif wordmark, "Feliz" large
with "be Glad" below and to the right. File: `public/images/feliz-logo.jpg`.

The site carried "Felis be Glad" from the first import until now, and an
invented star mark stood in for the logo. Both corrected.

## Product

Generic fine fragrances, **oil based**.

## Sizes

10ml · 20ml · 30ml · 40ml · 50ml · 100ml

Previously listed as 30ml and 50ml eau de parfum with invented variants — wrong
on both the base size and the format.

## Female scents

Feliz be Glad Floral · Hugo Boss Women · La Vie Est Belle · Fantasy ·
Chanel No5 · Coppelia · Coco Mademoiselle · Scandal ·
Be Delicious Fresh Floral · Gucci Rush · Lady Million

## Male scents

Hugo Boss · Cool Water · Ted Lapidus · Sausage · Ferrari Essence · Diesel Men ·
One Million · Dunhill Desire Red · Dunhill Desire Blue · Feliz be Glad Hunt

## The pack

Tall rectangular clear glass flacon, black rectangular cap, pale gold oil,
off-white label with the red serif Feliz wordmark, photographed on a charcoal
sweep. Reference: `public/images/pilot/feliz-hugo-men-50ml.png`.

## Still unknown

- Prices per fragrance, per size. The catalogue has a flat R195; needs her
  numbers before it ships.
- Which scents ship in which sizes.

## Product imagery — the pipeline

User's instruction, turn 67: **one image per turn, one at a time, each cloned from the
approved pilot.** Do not batch. Do not run ahead.

- Approved reference: `public/images/pilot/feliz-hugo-men-50ml.png` (option 1, turn 66).
- Method: `generate_image` with `images: [pilot]` and a prompt that says *clone this exact
  photograph, change only X*. This keeps bottle, cap, label, light and sweep identical.
- Then: save to `public/images/feliz/`, point that one product's `image` field at it,
  show the user, commit + push.

### Turn 67 — `fbg-scandal-ladies`
`public/images/feliz/feliz-scandal-ladies-50ml.png` — cloned from pilot, oil warmed to
rose-amber with a blush rim light. Live on the Scandal card.

Straightened the Scandal description at the same time: it claimed "sleek sculpted teal
glass flacon", which matched neither the pilot nor her real range. Now reads "tall clear
glass flacon with a matte black cap".

### Rejected / not used
Four images generated in one burst before the user's one-per-turn instruction was clear
were pulled off the site and parked in `.work/unapproved/` (gitignored):
`feliz-floral-women-50ml.png`, `feliz-cool-water-men-50ml.png`,
`gc-foam-bath-1-5l.png`, `gc-bicarbonate-soda.png`.

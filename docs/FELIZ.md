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

### Turn 68 — `fbg-diesel-men`
`public/images/feliz/feliz-diesel-men-50ml.png` — cloned from the pilot, oil deepened to
smoky amber with a warmer right-hand rim light. Reads as an evening scent without
departing from the shoot.

Also wired the **pilot itself** onto `fbg-hugo-men`, where it belongs — it is the Hugo Men
bottle, and it had been sitting unused in `public/images/pilot/` while the card still
showed the generic range shot.

### Turn 69 — `fbg-car-perfume`
`public/images/feliz/feliz-ted-lapidus-rollon-15ml.png` — the one product that should NOT be
a straight clone: it is a 15ml roll-on, not a spray flacon. Cloned the light, the charcoal
sweep, the label treatment and the framing; gave it its own body (slim clear glass vial,
short black screw cap, golden oil).

First attempt came back with the label typeset **vertically** up the bottle, which broke the
set. Regenerated from both the bad frame and the pilot, explicitly demanding a horizontal
label level with the horizon. Fixed.

### Turn 70 — `fbg-reed-diffuser`
`public/images/feliz/feliz-reed-diffuser-100ml.png` — own body again (short square cut-glass
flacon, five matte black reeds, amber oil), and the one deliberate departure from the shoot:
a **warm sand plaster sweep** instead of charcoal, so it reads as home fragrance rather than
perfume. Same key light, same rim, same cream label with the horizontal red serif wordmark.

### Status: all five Feliz products have real pictures
| id | image |
|---|---|
| `fbg-hugo-men` | `pilot/feliz-hugo-men-50ml.png` (approved pilot) |
| `fbg-scandal-ladies` | `feliz/feliz-scandal-ladies-50ml.png` |
| `fbg-diesel-men` | `feliz/feliz-diesel-men-50ml.png` |
| `fbg-car-perfume` | `feliz/feliz-ted-lapidus-rollon-15ml.png` |
| `fbg-reed-diffuser` | `feliz/feliz-reed-diffuser-100ml.png` |

Remaining on generic range shots: 4 Gladchemistry products and 7 Bubbles products.

## The real products — from her photographs (turn 71)

Her uploads in `/tmp/arena-coding-uploads/` include genuine phone photographs of the
actual range, now copied to `public/images/reference/`:
`IMG-20261118-WA0031.jpg` (the full line-up on white) and `WA0029`, `WA0030`, `WA0032`.

These are the provenance record. Every future Gladchemistry / Bubbles picture should be
generated **from these**, not from a description, so packaging is real rather than invented.

### What the real photograph establishes
- **Foam Bath** is NOT rose & aloe. The label says **"Foam Bath with moisturiser and
  essential oil"**, 1.5 l, translucent **pink** liquid, clear contoured bottle, white flip cap.
  Catalogue corrected: name, notes, variants (1.5L only), description, image.
- **Bicarbonate of Soda** ships as a plain **sealed sachet** with the words printed straight
  on the white foil — no tub, no label art. Variants narrowed to `500g Sachet`.
- **Thick Bleach** — white squat bottle, green neck, blue/yellow radial burst label, 750ml.
- **All-Purpose Cleaner** — white bottle, green screw cap, 750ml.
- **Multi-Purpose Cleaning Liquid** — white bottle, **green trigger spray**, yellow liquid,
  "Fresh Pine". The site calls this "Bubbles Pine Gel" — a mismatch still to fix.
- **Pine Gel / Citrus Gel** — small clear tubs with green lids, not bottles.
- **Bubbles Bath Fizzies** — big round tubs of pastel balls (listed under Gladchemistry).

### Still wrong on the site, needs her confirmation
`bd-dishwashing` ("Hygiene Dishwashing Liquid"), `bd-black-dip` ("Household Hygiene Black
Dip") and `bd-citrus-gel` have no counterpart I can see in the photographs. A blue "CAR" 5L
jerry can is visible in another upload (`WA0026`), which probably is the car wash.

### Turn 71 — `gc-foam-bath`
`public/images/gladchemistry/gc-foam-bath-1-5l.png` — generated FROM her photograph as
reference. Real bottle contour, real white flip cap, real pink liquid, real green label with
the leaf mark and "Gladchemistry produces". Soft warm-grey sweep with a pale blush circle.

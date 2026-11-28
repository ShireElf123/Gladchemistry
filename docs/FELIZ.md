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

### Turn 72 — `bd-thick-bleach`
`public/images/bubbles/bubbles-thick-bleach-750ml.png` — generated from her photograph
(`IMG-20261118-WA0031.jpg`). Squat white ribbed-shoulder bottle, green screw cap, the real
blue-and-yellow sunburst label: "BUBBLES Detergenta", "THICK BLEACH / Removes germs and
stains", "It cleans / removes stains / disinfects", 750 ml. Cool-white sweep, pale mint circle.

Catalogue description trimmed of invented claims ("99.9% of germs") and replaced with what
the label actually says. The 750ml/5L variant pair is retained — a 5L is plausible but is not
visible in any photograph, so it is unverified.

### Turn 73 — `bd-car-wash`
`public/images/bubbles/bubbles-car-wash-wax-5l.png` — generated from `IMG-20261118-WA0026.jpg`.
Large blue 5L jerry can, white moulded handle and shoulder, green screw cap, real label:
"BUBBLES Detergenta", "CAR WASH & WAX", "Quick & Easy shine", with the car-and-bubbles photo.

Description replaced: the site claimed a "carnauba wax infusion" and "pH-balanced", neither of
which appears on the label. Now says only what the can says.

### Turn 74 — how product pictures are framed (her question: "placements shouldn't be white backgrounds to look pro?")

She is right about the cause, and it was not the pictures — it was the layout.
`.stage` in `index.css` paints a brand-tinted pad *and* a 62%-white circle behind the image.
That is the Fizzly cut-out-pack treatment: it assumes a transparent or pure-white product on
which the circle reads as a halo. Our generated shots are full studio photographs with their
own seamless grounds, so the white box sat on a pastel rectangle. That is the "not pro" look.

Fix, in code — **no image has been regenerated for this**:
- New `.stage-photo` class: fills the stage edge to edge at borderRadius 22, `object-fit:
  cover`, `object-position: center 42%`, no pad, no circle, no drop-shadow. Hover becomes a
  slow 1.045 scale instead of a lift.
- `ProductCard.tsx` picks the class by path: anything under `/images/(feliz|gladchemistry|
  bubbles)/` is a studio photograph and goes full-bleed; everything else keeps the legacy pad.
- Hugo Men moved `pilot/` → `feliz/` (git mv, file bytes untouched) so it qualifies too.
  `pilot/` no longer exists; `docs/FELIZ.md`'s old path is superseded by
  `public/images/feliz/feliz-hugo-men-50ml.png`.

Current split: **8 studio / 8 legacy**. The legacy eight still show the pad, correctly,
because they are white-background cut-outs. They convert as each gets shot.

Verified: tsc clean, build clean, `stage-photo` present in the built CSS, 16 image paths, 12
unique, none missing, all 200 on the preview server. **Not** verified visually — no browser
in the sandbox (`playwright install` fails on TLS to cdn.playwright.dev).

### Turn 75 — `bd-all-purpose`
`public/images/bubbles/bubbles-all-purpose-cleaner-750ml.png` — generated from her photograph.
The distinctive asymmetric sloping shoulder is preserved, with the green screw cap and the
real green oval label: "BUBBLES Detergenta", "ALL-PURPOSE CLEANER", "Paranean akkasoroans &
grives / Fresh freshi fragrance", 750 ml.

Label language on her pack is partly untranslated Italian ("paranean... grives"). The
catalogue description is written in plain English rather than reproducing it, but the picture
keeps the real artwork.

### Turn 76 — `bd-pine-gel`
`public/images/bubbles/bubbles-pine-gel-tub.png` — generated from her photograph. Small round
clear tub, green screw lid, green gel, palm-tree label, "BUBBLES Detergenta / PINE GEL /
Cookery | lignes bough", **10 x 200g**, 200g.

Correction: the site sold this as a **"1kg Tub" with a "5kg Bucket" variant**. Her actual tub is
**200 g**, and the label reads "10 x 200g" — i.e. it is a 10-tub display box of 200g tubs, not a
single 1kg tub. Variants narrowed to `200g Tub`, price left at R65 pending her word on whether
that was per tub or per box (R65 for 10 tubs would be under cost).

### Turn 77 — `bd-citrus-gel`
`public/images/bubbles/bubbles-citrus-gel-tub.png` — generated from her photograph. Same 200g
tub mould as Pine Gel: clear body, green screw lid, orange gel, real label "BUBBLES Detergenta
/ CITRUS GEL / CITRUS FRESH / Dishwashing" with the orange-and-lemon graphic.

Size correction applied as with Pine Gel: `1kg Tub` + `5kg Bucket` → `200g Tub`. Price left at
R65, still unresolved per-tub vs per-box (same question as Pine Gel).

Note: her Citrus Gel label says "Dishwashing" on it. So the tub products do dishes as well as
general cleaning — relevant to the site's separate, photo-less "Dishwashing Liquid" entry.

### Turn 78 — `gc-bath-fizzies`
`public/images/gladchemistry/gc-bath-fizzies-tub.png` — generated from `IMG-20261118-WA0032.jpg`.
The real thing: a large **plain white plastic bucket, no lid, no label and no branding**, heaped
with round pressed discs in hot pink, yellow and pale blue.

Deliberately kept unbranded. Her actual tub has no label, so adding one would have invented
packaging — the exact failure mode from earlier in this project. The prompt says so explicitly.

Notes rewritten from invented botanicals ("Citrus Zest", "Sea Minerals", "Sweet Almond Oil") to
what is actually visible: the three tablet colours. The description likewise no longer claims
citrus/berry/ocean "blends" that nothing on the pack supports.

Size left at 1kg Bucket; her photograph gives no weight, so this stays unverified rather than
corrected in either direction.

### Turn 79 — `gc-bicarb`
`public/images/gladchemistry/gc-bicarbonate-soda-sachet.png` — generated from her photograph.
Plain white sealed foil sachet with "Bicarbonate of Soda" in black sans-serif running
**vertically** down the face, crimped seam at the top.

The vertical lettering is correct here and was reproduced as-is. Unlike the Feliz roll-on in
turn 69, where vertical was a generation error to be fixed, this pack really is printed that
way — the constraint is "match the reference", not "always horizontal".

Sizes already narrowed to `500g Sachet` in turn 71. Description now describes the actual sachet
rather than an imagined tub.

### Turn 80 — `bd-dishwashing` (I WAS WRONG: the photo existed)
I had told her repeatedly that no photograph of the dishwashing liquid existed. It did —
`IMG-20261118-WA0029.jpg`, the same file I had only ever skimmed as a collage of bottles. A
careful look shows a tall waisted clear bottle of bright green liquid with a **red flip cap on a
green collar** and a green label reading "BUBBLES Detergenta / DISHWASHING LIQUID / 750ml".

Lesson recorded: when the claim is "no reference exists", open every upload properly first.
`WA0029` had already been used for the Thick Bleach and All-Purpose shots, so the information was
sitting in a file I had labelled as covered.

Generated: `public/images/bubbles/bubbles-dishwashing-liquid-750ml.png`.

Name corrected `Hygiene Dishwashing Liquid` → **`Bubbles Dishwashing Liquid`**, which is what the
label says. Description rewritten off the pack. Variants left as `750ml` / `5L Bulk`; only 750ml
is photographed, so 5L stays unverified.

### Turn 81 — `bd-black-dip`, and a correction to my own correction

I checked `WA0027`, `WA0028` and `WA0030` at full size before claiming anything this time.
`WA0030` shows four products on white, and it settles three things.

**`bd-black-dip`** — `public/images/bubbles/bubbles-black-dip-1l.png`. The real bottle: dark
charcoal-black rectangular plastic, black screw cap on a short neck, label reading "BUBBLES
Detergenta / INDUSTRIAL HOUSEHOLD BLACK DIP / CLEANER LIQUID" with a circular emblem. Name
corrected to **`Industrial Household Black Dip Cleaner Liquid`**, which is what the label says.

**MY TURN-80 RENAME WAS WRONG, now reverted.** In turn 80 I renamed `Hygiene Dishwashing Liquid`
to `Bubbles Dishwashing Liquid`, reasoning from `WA0029` whose label I could not fully read. But
`WA0029` and `WA0030` show **two different dishwashing bottles**:
- `WA0029`: green liquid, red flip cap on a green collar, green label → "DISHWASHING LIQUID"
- `WA0030`: **blue** liquid, red flip cap on a green collar, label reads
  "**HYGIENE DISHWASHING LIQUID** / Removes tough stains and grease"

The site's name "Hygiene Dishwashing Liquid" was right all along. Restored.

**The bigger issue this exposes:** the dishwashing picture currently on the site was generated
from `WA0029` — the **green** bottle — while the catalogue entry named "Hygiene Dishwashing
Liquid" corresponds to `WA0030`, the **blue** one. The picture and the product name may not
match. See `docs/FELIZ.md` status table; needs her confirmation which bottle she actually sells
under that name, or whether both are on sale.

**Hand Sanitizer Rub** is also now confirmed present (`WA0030`, white 100ml spray bottle with a
green label, "HAND SANITIZER RUB") and is the only product still without a real picture.

### Turn 81 — `bd-black-dip` (after two rejections)

She caught three separate failures here, in order.

**1. "the black dip is skew"** — correct. The first clone had the label rotated ~2-3° against the
bottle's own edges and the bottle itself leaning. Fix: prompt now demands the bottle stand dead
level with side edges exactly vertical and parallel to the frame, camera square-on at label height
with no perspective/keystone, and the label applied dead square with its edges parallel to the
bottle's. Verified numerically afterwards: label top edge **+0.23°**, i.e. level.

**2. "the label is now straight but wrong"** — correct, and worse than skew. I had cloned a label
from memory instead of reading it. The real label (crop of `WA0030` enlarged 9x before drawing
anything) reads:

> BUBBLES / Detergenta  (oval outlined badge)
> HOUSEHOLD HYGIENE
> BLACK DIP
> CLEANING LIQUID
> Removes stubborn stains, softens, cleans and polishes drains.
> collage: white toilet + wooden shed, cement sacks, foam-filled drain grate + pipe,
> blue shield with a padlock/plus, purple water droplets, recycling triangle, hazard triangle

I had written **INDUSTRIAL HOUSEHOLD / BLACK DIP / CLEANER LIQUID** with a fake emblem and a fake
tagline. Also renamed the product wrongly in the same move. Corrected back to
**`Household Hygiene Black Dip Cleaning Liquid`** — the site's original name was right.

**3. Invented contact details.** The model typeset a fake phone number and email into the label's
fine print. Killed: the bottom band is now deliberate illegible blur. **Rule going forward: the
fine print band is always rendered as unreadable soft text, never as invented legible words or
numbers.**

**Rule learned, third time this session:** crop and enlarge the actual label at 5-9x and read it
line by line BEFORE writing any prompt. "Analyse" means read the reference, not reason about it.

### Turn 82 — `gc-sanitizer` (the last one)

Read the label at 12x before writing any prompt, per the rule from turn 81. Her bottle in
`WA0030` is a small white 100ml mist bottle, glossy white ribbed collar, white spray actuator.
Label, top to bottom:

> green leaf-and-stem motif
> GLADCHEMISTRY  (wide letter-spaced wordmark)
> WATERLESS  (small italic caps)
> **HAND**  (large heavy green)
> SANITIZER  (small dark, letter-spaced)
> **RUB**  (large heavy green, matching HAND)

The site's name `Waterless Hand Sanitizer Rub` matches the label word for word, so it was left
alone — only the picture changed.

**Defect caught and fixed:** the first render invented a sub-brand line under GLADCHEMISTRY
reading "ORGANIC NAIL & HAIR LUNS" — gibberish, and an invented claim. Removed by edit; the
space under the wordmark is now blank, which is what her label looks like at that resolution.

**Geometry verified numerically:** bottle side edges are exactly vertical — `0.00000°` deviation
across 60 rows, silhouette width constant at 247 px. Label hairline rule sits level.

**Status: 16 of 16 products now have their own picture. Zero legacy range-collage images remain
in `products.ts`.**

Still open, for her to decide (not mine to change): the R65-per-tub vs per-box question, the flat
R195 across 10-100ml fragrances, whether the cart returns, and the two different dishwashing
bottles (green `WA0029` vs blue `WA0030` HYGIENE) currently represented by a single listing.

### Turn 83 — the cards were decapitating every bottle

With imagery finished, the open question was the one she raised in turn 74 and I never
verified: *"the placements shouldnt be whilre back grounsds to look pro?"*

**Root cause, measured.** The card stage was a fixed `height: 290` (or `340` when `tall`) inside a
3-column grid of `max-w-[1240px]` with `px-5` and `gap-x-6`, giving a **384 x 290** frame =
aspect **1.32:1**. Every studio render is **4:5 = 0.80:1**. With `object-fit: cover` the image was
scaled to fill the width — 384 x 476 — and 39% of its height was thrown away, split 78 px off the
top and 108 px off the bottom by `object-position: center 42%`.

The top of a product shot is exactly where the cap, pump, handle or sachet crimp lives. So the grid
was slicing the lids off every bottle. Simulated at true card size to confirm: Black Dip lost its
cap, the sanitiser lost its pump, the car wash lost its handle, the foam bath lost its cap.
**That is what "not professional" looked like. Not the photography — the frame.**

**Why a better crop factor could not fix it.** Subject bounding boxes across the 16 renders run
from **35% to 85%** of frame height (pine gel 35%, dishwashing 85%). No single `object-position`
percentage or `scale` keeps all of them whole.

**Fix.** The frame now matches the picture: `.stage-photo` gets `aspect-ratio: 4 / 5`, and
`ProductCard` no longer passes a pixel height for studio photos (legacy cut-outs still do, since
they are centred rather than cropped). The image is displayed whole, exactly as composed. Verified
in the built bundle: `stage-photo{aspect-ratio:4/5;...}`.

Side effect, and it is the right one: cards get taller (480 px at lg), so the product occupies far
more of the card and the white space that read as "empty" is gone. Being a single component change,
it applies to the home grid and the shop grid at once.

### Turn 84 (redo) — revert the normalisation, rebuild Pine Gel

She looked at the normalised grid and rejected it: "that made it worst the zoom cut off some of the
items... revert 1st n just regenerate the ones that not good coz most was good... we do one item per
turn always". She also said the Pine Gel tub lid was wrong and to analyse the whole picture first.

**Why normalisation failed (my mistake, worth recording).** I scaled every product to 82% of the frame
*height* only. A bottle and a squat gel tub cannot be unified by one number: forcing the wide tubs to
82% tall pushed them past the frame edges and cropped their sides. Then, because the frame was still
4:5 while the images were 1:1, `object-fit: cover` cut another 10% off top and bottom. Two crops
compounding. **Balancing a grid is not achievable by normalising height alone — a squat tub and a
tall bottle simply are different shapes, and the source photographs were already individually good.**
Reverted in a forward commit (`500e1ec`), all sixteen files back to their original sizes and crops.

**Pine Gel, analysed before generating.** The reference is `IMG-20261118-WA0029.jpg`; I cropped the tub
and magnified the lid 8x and the label 7x and read the construction region by region:

- **Lid:** a green disc set *down inside* the rim with a raised lip ring — not a ribbed screw cap.
  My previous render had a tall ribbed cap. Wrong.
- **Below the lid:** a *separate clear transparent snap-on collar*, slightly wider than the lid,
  overhanging the shoulder, with a ring of small triangular reinforcing gussets pointing down and a
  moulded latch tab at the front. I had missed this entirely.
- **Body:** translucent green, straight-walled, gel visible through the lower wall.
- **Label:** bright mid-green at the centre falling to near-black at both outer thirds where it curves
  into shadow. The two fine-print columns are **dark print on the bright third and white print on the
  dark third** — I had it uniformly light-on-green, the wrong way round.
- **Artwork:** oval "BUBBLES / Detergenta" badge, dark navy "NEW" blob at its upper right, "PINE GEL"
  in maroon, a dotted green outline around the white blob, purple-blue bubbles down the right edge,
  **two** palm trees, recycling triangle plus two small icons on the left third, green droplet emblem
  at the bottom centre.

**Fine print, solved deterministically.** The model writes crisp invented English no matter how the
prompt words it ("soft," "illegible," "do not invent") and re-renders it on an edit pass. Fabricated
claims and phone numbers must never ship, so `tools/soften-fineprint.py` handles it after generation:
a 40px blur blended back with a feathered mask erases every glyph while keeping the label's colour
gradient, then soft irregular print rows are drawn on top — dark on bright label areas, light on dark
ones, matching the real pack. No word exists in the output. Re-runnable on any product.

Dead ends this turn, so they aren't retried: blurring without erasing first leaves the earlier invented
words visible underneath; edge-stretch repair leaves black bars; a flat fill leaves a visible
rectangle. Width, not height, is the constraint on wide products. And **a light blur is not enough —
it smudges text into something that still reads as words at 2x.**

Pine Gel description corrected to match her pack (translucent green tub, recessed lid, clear collar).

### Turn 84 (Pine Gel, third pass) — she asked whether the tub was too zoomed

She asked: "is this tub not too zoomed remember we zooming out again on the items". Measured before
answering, using a green-plastic mask rather than a corner-sampled backdrop — the corner sampler was
catching the faint mint circle and the contact shadow, which is why the first numbers looked wrong.

**Pine Gel, before -> after this pass:**

| measure | before | after |
|---|---|---|
| tub width in frame | 75.4% | **73.1%** |
| tub height in frame | 74.0% | **70.9%** |
| left / right margin | 103 / 124 px | **127 / 122 px** |
| top / bottom margin | 217 / 81 px | **218 / 116 px** |

The bottom margin was only 81px — the tub was nearly standing on the frame edge, which is a large part
of why it felt crowded. It now has 116px to sit on.

**Method note.** The image model will not honour margin instructions reliably: two generations in a row
put the tub flush to the right edge and near the bottom regardless of "leave generous empty background"
and "the tub must not touch any edge", even though the same prompt produced correct construction. So
the reliable way to control composition is to **measure the subject with a colour mask and verify**, not
to trust the wording. Green-plastic mask: `g > r*1.10 and g > b*1.05 and mean < 200`, then keep columns
and rows whose coverage exceeds 6% of the frame.

**Deterministic re-staging was tried and is a dead end.** Scaling the render down 0.79 and padding with
a blur-and-reflect fill smeared the dark tub body into the margins, because `reflect` on a 928px image
with a 70px pad samples the subject itself. A soft feathered paste also left the tub visibly soft against
a sharp background. Regenerating and measuring is cleaner than compositing.

**Fine print, again.** It came back legible on every generation. The fix stays
`tools/soften-fineprint.py`, but the lesson is that the region must cover the WHOLE print column to the
label's outer edge — my first two attempts started ~40px too far right and left the first words of each
line readable. Correct regions for this tub: left `150,414 -> 392,792`, right `600,414 -> 820,796`.

### Turn 85 — Citrus Gel, rebuilt from her own photograph

Third-generation tub, and the first time Citrus Gel has had a real reference. It is not on any of the
close-up shots: it appears only in the full-range photograph `IMG-20261118-WA0031.jpg` (repo copy:
`public/images/reference/gladchemistry-range.jpg`), tucked under the Pine Gel tub at the lower left.
Cropping and magnifying that region 10x and 13x gave a readable label.

**What the old render had wrong — five things:**

1. **The lid.** I had a flat green lid with a ribbed clear band. The real tub has the same
   **recessed green lid plus clear snap-on gusseted collar** as Pine Gel. Same mould family.
2. **The artwork was missing entirely.** The label is not a plain white panel — it is filled edge to
   edge with a large stylised **citrus slice**: soft out-of-focus wedges of amber-orange, orange and
   pale olive-green radiating from a centre, like a giant cut fruit seen close up. This was the single
   biggest visual difference and I had rendered nothing of it.
3. **"CITRUS GEL" is brick red / terracotta**, not orange. I had rendered it orange.
4. **The fruit sits at the LOWER LEFT of the white blob** — one whole orange with two leaves, one cut
   orange showing segments. I had it lower right.
5. **No amber gel visible** through the tub wall. The real tub glows amber above and below the label.

**Composition, measured:** tub at **69.1% width / 67.7% height**, margins L129 R157 T277 B94. Slightly
smaller than Pine Gel (73.3% / 70.9%) on purpose — it is the smaller tub of the two, and keeping that
difference is what stops the pair looking like clones of each other.

**Tool fix this turn.** `tools/soften-fineprint.py` now CLIPS to the product by default. A rectangular
region that is a little too generous was dragging the blur and the fake print rows out over the studio
sweep, leaving a grey haze and stray bars floating beside the tub. It intersects every region with a
backdrop-deviation mask, so nothing outside the pack is touched. `--no-clip` restores the old behaviour.

**Two self-inflicted dead ends, recorded so they are not repeated:**
- Patching a single invented line by hand with a sampled-gradient rectangle left a **visible grey box**.
  Filling flat colour inside a label never blends; the label underneath is not uniform.
- Guessing region coordinates cost three attempts and one of them **erased the "C" of "CITRUS GEL"**,
  leaving "ITRUS GEL". The fix is to overlay a graduated coordinate grid on the render and read the
  column bounds off it: left column x 150-302, right column x 745-808, bottom brand line y 928-982.
  Measure the region, do not estimate it.

Also: the model invented a phone number, a street address and a website in the label footer on the
first generation of this tub, and a nonsense subtitle ("Famourts · Citres · Pytate") on the second.
Both were caught by reading the render at 3x before shipping. The subtitle is now suppressed by
instructing that the strip beneath the title be left blank, which worked.

### Turn 86 — Dishwashing Liquid, rebuilt

Reference `IMG-20261118-WA0029.jpg`, bottle at the left of frame. Magnified the whole bottle 6x, the
label 9x and the waist 9x.

**Six things the old render had wrong:**

1. **The waist grips.** I had horizontal ribs wrapping the sides. The real bottle has a vertical column
   of about **seven separate oval grip pads** moulded into the plastic at the waist, stacked one above
   another. Different moulding entirely, and it is the most distinctive thing about the bottle.
2. **The cap.** Real is a short green cylindrical cap with vertical grip ribs and a **red flip-top spout**
   on top — a flat red disc with a tab, not a tall nozzle.
3. **"NEW" is on a RED flash**, not a pale grey one.
4. **"DISHWASHING" is lighter-weight grey-olive outlined sans**, not solid green; **"LIQUID" is dark
   maroon-red**, not green.
5. **The plate icon** is a white dinner plate seen at a slight angle from above with cutlery, not a
   mug or bowl.
6. **Lemons sit lower left** with leaves, and the label is a lighter yellow-green panel with a soft
   darker green edge and out-of-focus leaves behind.

**Composition:** 44.8% width / 90.9% height. Tall and narrow by nature — that is the real proportion,
and it is fine as long as the cap and base clear the frame.

**Tool bug found and fixed.** `soften-fineprint.py` had a real defect: the feather radius defaulted to
30px, so on a text row only ~24px tall the blend weight peaked around 0.5 and **never reached full
erase** — the words stayed readable no matter how many times the tool ran. The feather is now clamped
to a quarter of the region's short side. That is why the same command appeared to work on big columns
and silently fail on small ones.

**Dead end, recorded.** I tried three times to gain a little bottom margin by shifting and rescaling
the whole frame: row-shift, stretch-fill, then scale-and-recentre with a feathered paste. Every version
left a visible seam or a soft rectangle, and the last one made the background read as part of the
product. The original render already clears the frame edge by 30px, so it was restored and shipped
as generated. **Do not composite a studio photo to nudge its framing — regenerate it with the framing
asked for.** Compositing is only reliable for erasing text inside the product, which is what the tool
is clipped to.

### Turn 87 — Thick Bleach, rebuilt

Reference `IMG-20261118-WA0029.jpg`, the tall white bottle centre-frame. Magnified the bottle 6x, the
label 10x, the shoulder and cap 8x, and the base 8x.

**This one was mostly right on the label and wrong on the bottle.** The label render was close; the
moulding was not.

1. **The neck is ASYMMETRICALLY ANGLED.** The bottle's top is cut on a diagonal, so the cap sits at a
   tilt relative to the body. This is the bottle's signature and I had rendered a perfectly upright
   symmetric shoulder.
2. **The cap is plain WHITE** with fine vertical grip ribs — I had it green.
3. **The body carries FOUR groups of THREE raised ring bands** moulded into the plastic, two high near
   the shoulder and two low near the base, with smooth body between them. I had rendered a fluted
   vertical-rib collar around the shoulder instead, which is a different bottle entirely.
4. **The body bands around the shoulder are raised horizontal rings**, not vertical flutes.

Label corrections, smaller but real:
- **"BLEACH" is a two-tone**: deep navy at the top grading to magenta-pink at the bottom edge. I had it
  flat blue.
- **"THICK" is medium blue**, not navy.
- **The NEW flash is GOLD/mustard**, not red. It also overlaps the badge's right edge on the real pack.
- **Three dark-red claim lines each with a dark green tick**, below the blob — not two lines.
- "750 ml" with a space, in bold dark red.

**Composition:** 27.9% width / 88.8% height. The narrowest product in the set — it is a tall slim
bottle, and that is correct.

**Method note on the badge flash.** The model rendered the gold flash as a smeared blob with no readable
word, so it was rebuilt as a flat rounded square with crisp vector text at the pack's own size and
position (x 536-598, y 612-662). First attempt was both too large and placed 30px too far left, which
covered the "S" of BUBBLES — the badge has to be checked after any overlay like this, not just the
thing being drawn. Small flat graphic elements are the one case where compositing beats regenerating,
because a redraw is exact and the model's attempt is not.

### Turn 88 — All-Purpose Cleaner, rebuilt

Reference `IMG-20261118-WA0029.jpg`, the white bottle at the right of frame. Magnified whole bottle 6x,
label 9x, neck 9x.

**The big find: the bottle has NO NECK.** The cap sits straight down onto a wide rounded domed shoulder.
There is no narrow throat between them at all. My old render had a conventional neck and shoulder,
which is what made it read as a generic bottle rather than her pack.

Also corrected:
1. **The moulded swirl groove.** A raised sculpted wave runs diagonally across the shoulder and down the
   upper body, rippling the surface like a stylised scroll — high on the left, sweeping down and round to
   the right. This is the bottle's signature and I had rendered nothing of it.
2. **Asymmetric ovoid shoulder**, wider than the lower body, bulging further on one side. Mine was
   symmetrical.
3. **Cap** is a flat-topped squarish-round green cap with a groove below the top edge and a curved finger
   recess on the front — not a plain ribbed cap.
4. **"CLEANER" is bright red**; I had it blue. **"ALL-PURPOSE" is mustard-brown**, not gold-on-green.
5. **NEW sits on a RED oval flash**; I had a pale one.
6. **Blue bubble cluster is at the lower left**, pale lavender bubbles down the right edge, and one pale
   purple ring near the top right.

**Composition:** 75.1% width / 89.5% height, margins L115 R115 T71 B49 — evenly balanced, which suits a
bottle that is itself asymmetric.

**Process note, and a correction to my own approach.** I first tried to erase the invented claim line
inside the product with a blur band. I read the coordinates off a colour mask that also caught
"CLEANER" in red, so the band landed on the wordmark and blanked the middle of it — the second time
this turn that measuring text by colour gave me the wrong box. The right fix was to suppress the line at
generation ("directly beneath CLEANER the blob is completely blank"), which worked first time. Where the
layout is under my control at generation, **suppress at generation**; compositing is only for elements
the model cannot draw, like the flat NEW flash — which was redrawn cleanly as a red ellipse with vector
text and nothing beneath it.

### Turn 89 — Black Dip, rebuilt

Reference `IMG-20261118-WA0030.jpg` — Black Dip is the dark bottle third from the left in that group shot.
(This is the product she herself flagged at turn 81 with "the black dip is skew", so it had a history.)
Magnified the whole bottle 11x and the label 14x.

**Bottle corrections:**
1. **The plastic is BROWN-BLACK, not neutral black.** It reads black at a glance but warms to a deep
   chocolate-brown across the shoulders and edges where the light lands. That warmth is the whole
   difference between her pack and a plain black slab, and I had rendered flat black.
2. **The cap is dark BROWN**, wide and domed with vertical grip ribs — not a black ribbed cap.
3. Body is a squat rectangular slab with a short moulded step between the cap collar and the shoulder.

**Label corrections:** the badge behind "BUBBLES" sits on a pale oval; the label carries a faint
lace-scroll pattern over the whole background; the shield has a cross inside and sits beside a pair of
outlined hands; and the artwork set is toilet, shed, cloth, drain grate, warning triangle, green flame
symbol and a small multicolour circular logo — in that arrangement, not scattered.

**Composition:** 92.0% width / 76.4% height. It is a squat wide slab, so it fills the frame side to side
and leaves space above and below — the opposite proportion to Thick Bleach at 27.9% wide.

**Four generations to get clean, and what that taught me.** Every attempt got the bottle right and the
label text wrong in a new way: attempt 1 invented two phone numbers and an email; attempt 2 invented a
claim line and the word "SHIELD"; attempt 3 put a nonsense line inside the badge; attempt 4 was clean.
The successful prompt ended with an explicit closed vocabulary —

> The complete list of words allowed on this pack is exactly: BUBBLES, HOUSEHOLD HYGIENE, BLACK DIP,
> CLEANING LIQUID. Nothing else.

That single sentence did more than any amount of "do not invent text". **Use a closed word list, not a
prohibition.** Prohibitions get reinterpreted; an allow-list has no room in it.

**Compositing failures, recorded so they are not retried on this kind of label.** I tried three times to
patch the invented text by hand and made it worse each time: a blur band left a grey slab floating on the
pale label; a narrow band aimed from a colour mask clipped the top of BUBBLES because the mask also
caught the letters; and redrawing the oval interior plus re-setting BUBBLES in a system font broke the
oval rim and left the type oversized and wrong. **On a light, patterned label with fine artwork, do not
patch text — regenerate with a closed word list.** Compositing is reliable only for a flat solid-colour
badge on a plain field, which is why the gold NEW flash on Thick Bleach worked.

### Turn 89b — Black Dip: the dynamics she flagged

She said "some dynamics are off please analyse the main pics and the one u generated to be accurate."
She was right, and the shape was the problem — not the colour, which is what I had been fussing over.

To measure honestly I had to first admit the reference is **occluded**: the blue dishwashing bottle
overlaps Black Dip's entire left edge, and a white trigger spray crowds its right. Any naive column-scan
returns garbage — mine did, twice, and reported h/w 1.10, 1.38 and 1.97 for the same bottle. The fix was
to stop scanning brightness and measure the things that are actually clean in the reference: the label
rectangle, the cap, and the body's right edge.

**What was actually wrong, measured:**

| | her pack | my render |
|---|---|---|
| label height / bottle height | **0.33** | 0.45 |
| label width / bottle width | ~0.76 | 0.80 |
| cap width / body width | **~0.30** | 0.45 |
| body height / width | **~1.45** | 1.36 |

So: my label was a third too tall, my cap half again too wide, and my body too squat. The cap error was
the worst of them — a wide cap on a short body reads as a generic chemical jug. Hers is a narrow cap on
a tall slab, which is what makes it look like a household hygiene product.

**Three moulding details I had left out entirely:**
1. A **moulded horizontal seam** across the full width of the front face, high up just above the label.
   This is the single strongest read of "moulded plastic" and I had a completely smooth body.
2. A **flared foot with a shallow groove** just above the base, and rounded bottom corners.
3. The long straight sloping **shoulder planes** from the narrow cap — about a quarter of the height.

**Lighting.** I had over-corrected the brown until the whole bottle was chocolate. In her photograph the
plastic is **near-black**; warm brown is only a narrow glow where light grazes the top of the shoulders
and the lit edges. The right edge carries a thin bright vertical rim for the full height, and the left
side sits in deeper shadow. Satin, not glossy.

**One new failure:** told to shrink the label, the model put a **duplicate BUBBLES oval on the bare
shoulder** — it kept the logo's prominence by moving it outside the label. Fixed by naming the bare area
explicitly: *"the upper body and shoulders are completely bare... the only place BUBBLES appears is inside
the label."* Worth remembering: **when you shrink an element, name where its content is allowed to live**,
or the model relocates it.

Final: wFill 48.0% / hFill 87.0%, margins L241 R242 T82 B68. 6 of 16 rebuilt.

### Turn 90 — Waterless Hand Sanitizer Rub, 100ml

Reference: `IMG-20261118-WA0030.jpg`, the small white spray bottle at the far right — the same group
shot as Black Dip. Convenient, but it means this bottle is **partly occluded by Black Dip on its left**,
so I only trusted the right side and the vertical measurements.

Analysed at 16x, region by region, before generating.

**What her pack actually is:**
1. **Short stubby cylinder** — overall height about 2.5x its width. It's a 100ml spray, not a tall bottle.
2. **Two-part closure:** a low fat **white ribbed screw collar** with fine vertical flutes, and above it a
   **frosted translucent actuator head**, pale milky-white, slightly taller than the collar, narrower again.
   The reference is ambiguous at thumbnail size between "spray nozzle" and "screw cap"; at 16x it resolves
   clearly as a ribbed collar plus frosted head.
3. **The label WRAPS THE ENTIRE BODY** — from just below the shoulder right down to the base rim, with only
   a thin white rim of plastic showing at the very bottom. My old render had a **floating grey panel** with
   white plastic above and below it, which is what made it read as a mock-up rather than a product.
4. Label ground is **light cool grey**, not white.
5. A **green grass band** with an irregular hand-painted upper edge runs along the bottom of the label.
6. Type stack: sprig emblem, GLADCHEMISTRY, thin rule, WATERLESS (green), HAND (huge dark green),
   SANITIZER (smaller green, tucked tight under HAND), RUB (huge dark green).
7. There is real fine print under GLADCHEMISTRY and under RUB. **Illegible in the reference** — which is the
   correct treatment. I must not invent it.

**Closed word list again:** GLADCHEMISTRY, WATERLESS, HAND, SANITIZER, RUB. Nothing else.

**Five generations.** Attempt 1 invented an efficacy claim — "Alcohol handit with 70% alcohol" plus a
"Nails, Hair" strapline. Attempt 2 dropped the text but my label was still a floating panel and the
proportions were wrong. Attempt 3 fixed the proportions but rendered the fine print as **rounded grey
capsules** that read as placeholder UI, not print. Attempt 4 got the print right but the label went
**beige-grey** and the head went **green-tinted and too tall**. Attempt 5 was clean.

Three lessons, all worth keeping:

- **"Soft and illegible" produces capsules, not print.** The model reads "soft blur" as a rounded blob shape.
  What fixed it: describing the *typographic texture* — "very fine, tightly set, small dark-grey type... reads
  as thin dense horizontal texture... fine rectangular marks on straight baselines only" and naming the wrong
  answer outright: "do NOT draw rounded grey capsules, pills, bars, lozenges or solid grey blobs."
- **A long prompt drifts in the opposite direction on the next pass.** Fixing the print turned the label
  beige and tinted the head green — two details I'd specified correctly in the previous prompt but not
  restated. Restate the colours of every flat area on every pass.
- **The occlusion trap:** measuring the left edge of this bottle is impossible. Don't average across a
  silhouette that's partly hidden — measure only the free side.

Final: wFill 52.8% / hFill 87.0% (bottle h/w 2.35). 7 of 16 rebuilt.

### Turn 91 — Car Wash & Wax 5L

Reference: `IMG-20261118-WA0026.jpg` — and this one is a gift: the can sits alone on white, no neighbours,
no occlusion. First reference in this whole exercise I could measure without having to work around
something. (Backup tag `backup-turn90-hand-sanitizer` pushed at `b54484e` as a restore point before starting.)

**This was the item I had been calling "already solid". It wasn't.** Reading it properly at 4–10x found
three elements I had simply omitted, all of them prominent:

1. **The "NEW" badge** — a small tilted maroon-red oval, white lettering, overlapping the BUBBLES badge's
   rim on the upper right. Completely absent from my render.
2. **The thin olive-green leafy wreath** arcing around the right side of the white ellipse, carrying small
   lavender-purple bell flowers and round berries. I had a few scattered purple bubbles and no wreath —
   the wreath is what ties the label together.
3. **The label's vertical placement.** In her photo the label's top edge is at **40%** of the can's height
   and its bottom at **80%**, leaving a tall plain band of cobalt below it. Mine sat high with the label
   running nearly to the base. This was the biggest single difference and the most obvious at card size.

Also corrected: the can is **h/w 1.44** (mine was 1.24 — too square), and the white handle is chunkier and
spans more of the top than I had it.

**Label size is the model's least stable dimension.** Across three passes the label width measured 0.87,
then 0.65, then 0.75 of the can width, against a reference of 0.62. It also drifted upward twice. What
finally worked was stating the placement as a **percentage of the can's height** ("top edge at 40% down the
can, bottom at 80%") and adding the consequence in plain words: *"Above the label there is blue; below the
label there is blue."* Prose like "the label sits low" did nothing at all.

**A measurement trap worth recording:** cream/ivory label masks keep catching the off-white studio
background, so `cream.sum()` returns the whole frame. I wasted three attempts chasing that. The fix is to
sample the label's actual RGB first and threshold tightly around it (here 244,239,218 — the blue channel
sits clearly below red and green), rather than using a generic "bright and low-saturation" rule.

Final: can h/w 1.51 vs 1.44 reference; label top 36% / bottom 76% vs 40% / 80%; wFill 71.7% / hFill 86.9%.
**8 of 16 rebuilt.** Remaining: Bath Fizzies, Bicarb Sachet, Foam Bath, four Feliz perfumes, reed diffuser.

### Turn 92 — Signature Amber Reed Diffuser, 100ml

Reference: `IMG-20261118-WA0027.jpg` — a 1600x1204 shot, the highest-resolution reference of the set, and
the bottle sits alone on white. No occlusion at all.

**My old render was a different product.** Not a tuning problem — a conceptual error. I had:
- reeds STANDING UP out of the bottle, fanned like a bouquet
- a cream **"Feliz be Glad" label** on the glass
- no chrome collar
- a warm beige/sepia背景 with palm shadows

Hers is nothing like that:

1. **The reeds are LYING BESIDE the bottle**, not standing in it. Two thin matte black sticks at a steep
   diagonal running from the upper left of the frame down to the lower right, passing behind the bottle's
   upper right and continuing well past it at both ends. This is the whole character of the shot and I had
   it completely inverted.
2. **There is NO label.** The glass is bare. No brand name, no volume, no sticker. My invented "Feliz be
   Glad" plaque was pure fabrication and had to go.
3. **Brushed CHROME collar** on the neck — cylindrical, about 40% of the bottle's width, polished metal.
4. **A small white matte plastic plug/cap** above the collar, domed, clearly narrower than the collar.
5. **Thick-walled square glass, squat** — body as wide as it is tall, heavy bevelled edges, deep flat base.
   Overall height only about 1.25x the width.
6. Amber-golden oil filling to about 85%, with a narrow clear headspace under the neck.
7. Background is bright **neutral white**, not warm beige.

Measured from the reference: bottle glass x 784-1075 (w 291), glass top y 565, base y 872, white plug
y 430-478, chrome collar y 478-560. Reeds entering frame at approx (665,109) and leaving at (1290,870).

**The lesson here is about reference discipline, not prompting.** This was one of the first items I ever
made, back when I was working from the catalogue name and a mental picture of what a reed diffuser looks
like, rather than from her photograph. A diffuser with reeds fanned in the bottle and a brand label is a
perfectly plausible product — it just isn't *her* product. Everything in the render was plausible and
nothing was right. **When an item looks "close enough", it may never have been looked at at all.**

Generated clean on the first pass once I had the composition described honestly, because the key
instruction was negative and extremely specific: "They are NOT standing in the bottle. They are lying
beside it" plus "There is NO label on this bottle. The glass is bare."

Note on framing: content runs to all four edges (margins 0-1px) because the reeds deliberately sweep
across the full frame, matching the reference. That is intended here, not a crop error — the bottle
itself sits in the lower left with generous air, exactly as in her photograph.

**9 of 16 rebuilt.** Remaining: Bath Fizzies, Bicarb Sachet, Foam Bath, and four Feliz perfumes.

### Turn 93 — Inspired by Scandal Ladies, 50ml

Reference: `IMG-20261118-WA0028.jpg`, the leftmost of the four Feliz perfumes lined up on white.
I isolated this bottle: teal extent x 415-545, full bottle incl. cap y 177-681 (h 505), body width 116,
cap width 88 — so **cap/body = 0.76** and **body width / total height = 0.23**. Slender, roughly 4:1.

**My old render was again a different product** — the same class of error as the reed diffuser. I had:
- a tall, plain rectangular bottle with parallel sides and a small black cylindrical cap
- rosy-pink juice
- a cream "Feliz be Glad" label on the front
- a dark charcoal background

Hers:
1. **An angular flask that FLARES OUT toward the base** — narrow at the top, widest at the bottom, with a
   stepped flared glass plinth kicking outward. The silhouette is a chisel, not a slab. This is the entire
   character of the bottle.
2. **Vivid TEAL glass** on the edges and especially the flared base, with **pale chartreuse / yellow-green**
   juice inside. The teal-to-chartreuse contrast IS the product's look.
3. **A tall metallic TEAL cap with fine vertical fluting**, about 75% of the body width, sitting on two thin
   polished chrome bands.
4. **A small brushed-silver name plate low on the flared base**, angled slightly, reading "Inspired by /
   SCANDAL / Ladies" in three lines.
5. Thick heavy glass with diagonal facet edges across the front and a long pale streak of reflected light.

**Same root cause as turn 92, and worth naming plainly: I built these Feliz items early on from the
catalogue name, not from her photographs.** "Inspired by Scandal Ladies" is a name, and I dressed it in a
plausible generic flacon with a house label. Plausible is exactly what makes that failure survive review —
nothing about the old image looked broken, it simply was not her product.

Generated clean on the first pass, because the shape instruction was structural rather than decorative:
"narrow at the top and FLARES OUT toward the base... the widest point is at the very bottom... the glass
kicks outward into a wide flat plinth." Naming the silhouette — *a chisel, not a slab* — did more than
listing the colours would have.

Plate text verified at 3x: "Inspired by / SCANDAL / Ladies" exactly, nothing invented, blank elsewhere.

**10 of 16 rebuilt.** Remaining: Bath Fizzies, Bicarb Sachet, Foam Bath, and three Feliz perfumes
(Hugo Men, Diesel Men, Ted Lapidus car & roll-on).

### Turn 94 — Inspired by Hugo Men, 50ml

Reference: `IMG-20261118-WA0028.jpg`, the third bottle from the left in the four-perfume line-up.
Measured from the photo: crystal stopper y 240-330, body y 350-670, body width ~125, total height 430
→ **total h / body w ≈ 3.4**, stopper ≈ **0.45** of body width. Tall and slender.

**Faults in my old render:** plain tall bottle with a small black cylindrical cap, pink juice, cream
"Feliz be Glad" label, dark charcoal background. Another one built from the catalogue name.

**What her bottle actually is:**
1. **A chunky CLEAR ACRYLIC BLOCK stopper** — a solid rectangular slab with soft rounded top edges and
   gently bevelled vertical edges. *Not* cut-crystal. It sits on a **knurled chrome collar** with a slim
   chrome neck ring below.
2. **Thick clear glass** with a faint green-grey tint at the edges and corners, and a bright polished thick
   rim along the square shoulders.
3. **Pale creamy champagne / ivory juice** filling to just under the shoulders, with faint soft internal
   swirls.
4. **A BLACK rectangular name plate** low on the bottom right, angled, reading "Inspired by / HUGO / MEN" —
   matte black with light grey text. (Scandal's plate is brushed silver; this one is black. Worth noting the
   Feliz range mixes plate finishes per item.)

**Three passes to get the proportion right, and the lesson is uncomfortable.** On pass 1 the geometry mask
reported h/w 1.93 against a reference 3.4 — far too squat. I narrowed it; pass 2 came out correct but with
an over-faceted stopper. Fixing the stopper on pass 3 made it squat again. Pass 4 finally held both.

Two things worth recording:

- **The stopper instruction and the proportion instruction fought each other.** Describing a "chunky block"
  and "85% of body width" made the model enlarge the whole bottle. Chunky stopper ≠ chunky bottle, but the
  model treats mass adjectives as global. On the final pass I had to say so explicitly: *"If it looks like a
  cube you have it wrong — make it clearly taller than wide."*
- **A ratio measured against the wrong reference point is worthless.** Measuring "chunky" from the stopper
  is useless because the stopper is a small part of the silhouette. What finally worked was stating TWO
  anchors — overall height vs body width (3.3), AND body height vs body width (2.1) — so the model has a
  second constraint to check itself against.

Plate text verified at 3x: "Inspired by / HUGO / MEN" exactly.

**11 of 16 rebuilt.** Remaining: Bath Fizzies, Bicarb Sachet, Foam Bath, Diesel Men, Ted Lapidus car & roll-on.

### Turn 95 — Inspired by Diesel Men, 50ml

Reference: `IMG-20261118-WA0028.jpg`, second from the left. Measured: cap y 172-330 with two chrome bands
at its foot, body y 345-668, body width ~120, total height 496 → **h/w 4.1**, cap/body **0.73**.

**Faults in my old render:** same template failure as the other Feliz items — generic bottle, black cap,
cream "Feliz be Glad" label, dark charcoal background.

**What her bottle actually is:**
1. **Smoked grey-green glass** — translucent and dark, reading almost black in shadow and olive-green at the
   lit edges. Not clear glass, not black paint.
2. **Sweeping DIAGONAL FACET LINES** across the front face — long angled ridges and grooves crossing from
   upper left to lower right, with a second set crossing the other way, forming a slender lattice of
   highlights. This is the bottle's signature and it is easy to miss at thumbnail size.
3. **Tall glossy black cylindrical cap** with two thin POLISHED CHROME BANDS at its base, separated by a
   narrow black groove.
4. **Brushed silver name plate, bottom centre** — "Inspired by / DIESEL / MEN".
5. Pale yellow-green juice visible through the smoked glass, with the spray tube down the centre and a
   darker pump block near the top.

**This one landed first pass, at h/w 4.09 vs 4.1 reference, body 2.66 vs 2.7, cap 0.77 vs 0.73.** Why:
it was the first item where I gave the model **two independent ratio anchors plus a structural
description** of the surface treatment ("long angled ridges crossing upper left to lower right, and a
second set crossing the other way, forming a slender lattice of highlights"). Describing the facets as a
*lattice of intersecting sets* rather than "diagonal facets" is what produced them correctly — the vaguer
phrasing had produced plain vertical grooves on other packs.

Also worth noting for the range: the Feliz name plates are **not uniform**. Scandal = brushed silver raised
plate on the flared base. Hugo = matte BLACK plate. Diesel = brushed silver plate, bottom centre. I now
check the plate finish per item rather than assuming.

**Standing rule for the remaining items:** two ratio anchors, describe surface treatments as geometry, and
a closed word list. Three turns running that combination has produced a first-pass or near-first-pass result.

**12 of 16 rebuilt.** Remaining: Bath Fizzies, Bicarb Sachet, Foam Bath, Ted Lapidus car & roll-on.

### Turn 96 — Inspired by Ted Lapidus Men, 15ml roll-on

Reference: `IMG-20261118-WA0028.jpg`, the small roll-on at the far right of the four-perfume line-up.
Measured: tube y 420-665, tube width ~68 → **h/w ≈ 3.6**.

**Faults in my old render:** black cylindrical cap, amber juice, cream "Feliz be Glad" label, dark charcoal
background. Same template as the other four Feliz items — wrong product again.

**What her roll-on actually is:**
1. **A bare white roll-on ball**, exposed, no cap over it. The upper half of the sphere shows.
2. **Moulded glass screw threads** on the neck, several fine horizontal ridges, then a **thick rolled glass
   rim** where the neck meets the body, catching a bright highlight. The threads being *in the glass* rather
   than on a plastic collar is the detail that makes it read as a cheap-and-cheerful 15ml roll-on rather
   than a premium vial.
3. **Clear thin glass tube**, straight-sided, with very pale amber/golden-cream juice and a few millimetres
   of headspace.
4. **A dark wrap label low on the body** — wrapping around the cylinder so its edges curve away with the
   glass, occupying roughly the bottom quarter.

**A judgement call worth recording.** In her photograph the label is **black-on-black** — dark type printed
on a dark band, barely readable even at 18x. I first reproduced that faithfully and it came out as a black
smudge: at card size the product name was invisible, which defeats the purpose of a shop listing. So I
raised the type to **light grey on the dark band** — same three lines, same size, same placement, same
band. Nothing invented, nothing added; only the contrast lifted so the name reads. The reference's own
legibility is an artifact of a phone photo shot in poor light, not a design intent I should copy.

Also worth recording as a failure: my first fix attempt was to **draw the text over the top** of the
existing render with PIL. The generated text was still underneath, so the result had doubled lettering —
"TED LAPIDUS" with a ghost "LAPIDUS" behind it. **Compositing type onto an image that already contains
type never works**; regenerate with the contrast specified instead. This is the same lesson as turn 89's
blur-band failures, in a new form.

**13 of 16 rebuilt.** Remaining: Bath Fizzies, Bicarb Sachet, Foam Bath — the three remaining
Gladchemistry items.

### Turn 97 — `gc-bath-fizzies` rebuilt from her photograph

Reference: `IMG-20261118-WA0032.jpg`. This is the item I first rendered in turn 78, and I got it
wrong in a way that survived four generations this turn.

**Measured off her photo.** The pail spans **x 150–1066, i.e. 76% of the frame width**, its outer
flange at y≈1040 and its base at y≈1420 — so mouth diameter **917px** against visible body height
**380px**: the tub is **2.7× wider than it is tall**. The heap peaks at y≈470, about 41% of the
frame height. Four discs span the mouth, giving a disc diameter of roughly **20% of the frame
width**, with thickness about **30–45%** of that diameter. Front crest of the rim at y≈1000.

**What her tub actually is:**
1. A **wide shallow tapered pail** — a small paint-kettle shape, broad mouth, short sides, sides
   leaning inward toward the floor. Not a drum, not a straight cylinder.
2. A **flat outward flange** ringing the mouth, with a moulded lip line at its edge and a recessed
   groove below it. On the front, offset right of centre, a small **moulded lug** — a rounded
   rectangular tab. This is the detail that makes it read as a hardware-store pail.
3. **Plain white polypropylene, no lid, no label, no handle visible.** Matte, faint satin sheen.
4. The mouth **packed flush to the rim**, the pieces crowding the front lip so only a narrow band of
   flange shows beyond them.
5. Broken discs (one in the pen) are **thick blocky pucks with a broad softened bevel**; the faces
   are chalky and dry, faintly speckled — the blue ones almost crystalline. Colours are saturated
   and slightly earthy (**#D0306F** pink, **#DCB548** mustard, **#7C9BB3** steel blue), not the
   baby-pastel tints my old render used.

**The four failures, in order, and what each one taught:**
1. Gen 1 — correct shapes but the pail was **twice as tall as it should be** and the discs were
   small rings, not chunky pucks. Percentages alone were not enough.
2. Gen 2 — proportions close, but a **wide empty white band** of flange showed in front of the pile,
   where her tub is packed flush to the lip.
3. Gen 3 — packed correctly, but **three discs spilled onto the floor**. Nothing in her photo is
   outside the pail. "Heap it" reads as "overflow it" unless the containment is stated.
4. Gen 4 — containment fixed, but the model added an invented **pedestal foot**. Naming the negative
   ("no pedestal, no foot, no base ring") fixed it on the next pass.
5. Gen 5 — accepted. Mouth 85% of frame width (target 88%), body-to-mouth ratio about 0.32 against
   0.37 in the reference.

**Lesson worth keeping: a ratio needs two terms or it drifts.** "Wide and squat" produced a drum twice
over. What worked was stating **mouth diameter as a % of frame width *and* mouth-diameter-to-body-height
as a multiple** — the same two-anchor discipline that landed Diesel Men first pass. And each new
adjectival emphasis ("packed", "heaped") introduces its own failure mode, so state the containment
boundary in the same breath.

Description in `products.ts` corrected from "round ... pale blue" to "chunky pressed ... deep pink,
mustard yellow and dusty blue ... wide open white pail", matching what is actually in her tub.

**14 of 16 rebuilt.** Remaining: Bicarb Sachet, Foam Bath.

### Turn 98 — `gc-bicarb` rebuilt from her photograph

Reference: `IMG-20261118-WA0031.jpg`, the sachet at the far right of the clean line-up. Measured:
bag **y 283–557, x 1060–1253** → height **274px**, width **193px**, so **h/w 1.42**. Text block
**y 351–553**, x 1150–1193: **74% of the bag height**, a narrow column only **22% of the bag width**,
offset slightly right of centre. Red printed line at y≈292–301, about 4% below the top edge.

**Faults in my old render** (turn 79): matte white paper, a flat heat-seal band with three fine
horizontal ridges, straight vertical sides like a coffee bag, and no red line. It also had an
invented pale mint disc in the background, a piece of set-dressing her photo has no counterpart for.

**What her sachet actually is:**
1. **Soft SATIN silver metallised foil**, not mirror chrome and not white paper — pale matte silver,
   almost brushed pewter, with fine mostly-VERTICAL wrinkles and a grainy micro-texture, only
   gentle gradation, no angular shard reflections. Measured mean RGB of her foil is **169,171,168**;
   the accepted render is **167,166,165**, so the tint is within a couple of levels on all three
   channels.
2. A **glossy crimped seal band** across the top, faintly striated, top edge nearly level.
3. The thin wavy **dark magenta-red printed line** just beneath the crimp — the single most
   identifying detail, and the one I had missed entirely.
4. A shallow **scalloped weld band** below that, where the two film layers meet.
5. The type sits on a **faintly paler semi-transparent strip** of film, and runs vertically down the
   LOWER part of the pouch with a lot of bare foil above it — not centred on the whole bag as I had
   it.

**Two passes.** Gen 1 got the structure and the red line but rendered the foil as hard chrome, with
black wedge-shaped shards and blown white highlights — far glossier than a bag of bicarbonate. Gen 2
was an *edit* instruction ("change the surface character, keep the pose, framing and lettering") and
dulled it to the correct satin silver on the first try. Worth remembering: **describing a change to
an existing render is more reliable than re-describing the whole object**, because nothing else drifts.

Measured h/w of the accepted render: **1.34** against 1.42 in the reference — the bag is a shade
broader than hers, acceptable at card size.

Description in `products.ts` corrected: her pouch is foil with a red line and only those four words,
not "a plain sealed foil sachet" — no weight, no ingredients, no other print exists on it.

**15 of 16 rebuilt.** Remaining: Foam Bath.

### Turn 99 — `gc-foam-bath` rebuilt from her photograph — 16 of 16

Reference: `IMG-20261118-WA0031.jpg`. **Measured silhouette** (walking contiguous non-background width
from the bottle axis, per row, over 530 rows): total **H 526px**, **widest 229px at 70% of the way
down**, **waist 133px at 40% (0.58 of widest)**, **upper bulb 181px (0.79 of widest)**, giving a
**height:width of 2.30**.

**Faults in my old render** (turn 71): a squat, gentle-waisted flask (H/W ~1.45) with **pink** juice,
which is what "1.5 l foam bath" had led me to invent. Her bottle is tall and emphatically
hourglass — a broad lower body with the widest point low down, a hard pinch at 40%, then a narrower
bulbous shoulder carrying a big moulded oval medallion, and a plain stubby white screw cap.

**What her bottle actually is:**
1. **Bright, light cherry red** — a translucent cherryade red, almost luminous through the wide parts,
   roughly **#C71726** in the body deepening only moderately at the edges. Not pink, not burgundy.
2. **Measured hourglass**: widest at 70% down, waist at 40%, upper bulb at 79% of the body width.
3. **Plain white cylindrical screw cap**, ~40% of the bottle width, ~11% of its height. No flip-top.
4. **Large recessed oval medallion** moulded into the upper bulb — a shallow oval dish with a
   concentric raised ridge.
5. **Label in the lower third**: top three quarters a **pale lilac panel** (leaf mark, "Gladchemistry
   products", big white "Foam Bath", italic ingredient line), bottom quarter a **dark green band**
   with the pink flower rising across it, two blocks of fine print, the striped triangle mark and
   "1.5L" boxed.

**Accepted render measures H/W 2.19 against 2.30**, widest low in the body, waist visible.
**One honest deviation:** the upper bulb came out nearly as wide as the lower body (ratio ≈ 0.9
against her 0.79), so the waist is less dramatic than the real bottle. Recorded rather than hidden.

**A long fight with invented fine print, worth writing up.** The model kept rendering crisp,
readable lorem-ipsum in the green band. Everything I tried to erase it made things worse before it
got better:
- `tools/soften-fineprint.py` at feather 14/10/5 → softened **rectangles** with readable glyph
  fragments surviving at the box edges.
- Blur radius 30 → an obvious pale smudge; radius 9 → still-glyph fuzzy lumps, and blur **lifts
  luminance**, so the block read *lighter* than the band and announced itself as a rectangle.
- Per-row flat-fill from the band's own green → cleaned, but left hard rectangular seams.
- "Protect the artwork" masks built on **saturation** or on **brightness > 186** both backfired: the
  pale type is itself bright and desaturated, so the mask shielded the text it was meant to remove,
  and the red bottle flanks blew through the saturation test.
- What finally worked was **geometry, not colour**: three rectangles laid out to stop short of the
  stem (x<422) and of the size graphics (x<618), per-row flat fill from unprinted green, a feathered
  4px mask, a small tonal smoothing pass to kill the rectangle edges, then fine print rows at 28%
  opacity. Illegible at 3×, artwork intact.

**Lesson to carry:** when an eraser keeps failing, stop tuning it and **place the region by
measured geometry**. Colour-based protection masks cannot separate pale print from pale artwork.

Also worth noting: 5 generations were spent on this one label band, which is far more than any other
item. The next item with fine print should go straight to geometry.

**16 of 16 rebuilt.** The whole catalogue — three Bubbles gels/sprays plus five Feliz perfumes and
all eight Gladchemistry lines — is now drawn from her own photographs rather than from catalogue
copy.

### Turn 100 — the cart was lying, and the address was wrong

With all 16 pictures done, the outstanding work was the backlog I had been carrying since the
early turns. The user said "next" and then skipped the four questions I put to them, so this turn
fixes only what needs **no business decision from her**.

**Defect: the cart confirmed orders that were never placed.** `CartDrawer.tsx` flipped a boolean,
showed a green tick and **"Order Confirmed!"**, waited 2.2 s, then emptied the cart. No email, no
WhatsApp, no payment, no record on the server. A customer could reasonably believe they had ordered
a product the shop would never hear about. That is worse than having no cart at all.

Fixed by making checkout **honest rather than complete**: it now composes the order (one line per
item, quantity, size, line total, subtotal) and opens it in **WhatsApp addressed to the shop's own
published number, +27 73 719 0821** (`wa.me/27737190821`). The customer sees the exact message
being sent and to whom, and is told plainly that nothing is charged on the site and that the total
is confirmed with them first. The heading changed from "Order Confirmed!" to **"Order sent on
WhatsApp"**, and the button from "Proceed to Checkout" to **"Send order on WhatsApp"** with a
one-line explanation above it. Verified in the production bundle: the number and `wa.me/` are
present, and the string "Order Confirmed" no longer appears anywhere in the build.

This is deliberately not a real checkout. When she wants one, it needs a payment provider and a
way to receive orders; the WhatsApp handoff is the honest interim, not a substitute.

**Defect: the contact details disagreed with her own shop.** Both `Contact.tsx` and `Footer.tsx`
said **"Johannesburg, Gauteng, South Africa"**. Her shop is **Shop 19, Palm Springs Mall, Springs,
1559**. Corrected in both places.

**Still open, and only she can answer them** (asked this turn, skipped):
1. Whether R65 for a Pine/Citrus Gel is **per 200g tub** or **per box of tubs** — per box it would
   be under cost.
2. Whether fragrance pricing really is **flat from 10ml to 100ml** (Scandal and Diesel Men are R195
   at every size; Hugo Men is R260 at 10ml).
3. Whether the **green `WA0029` bottle or the blue `WA0030` "HYGIENE" bottle** is the one sold as
   "Hygiene Dishwashing Liquid" — the listing shows the green picture under the Hygiene name.
4. **Bath Fizzies at R185**: the tub carries no weight, so "1kg Bucket" is unverified.
5. The email **info@gladchemistry.com** is listed on the site but I have no evidence that address
   exists or is monitored. Left in place, but it needs confirming.

**Lesson worth keeping:** when a feature cannot be finished, make it **truthful** instead of
pretending. A green tick that sends nothing is a bug that costs her actual sales.

### Turn 101 — audit: do the 16 photos look like one range? (scan only, nothing changed)

Her question: which set sits more professionally and lines up with each other — and she said explicitly
**do not add the circles back yet, just scan and compare.**

**The catalogue is split down the middle, 8 and 8:**

| Set | Items |
|---|---|
| **No disc behind** (rebuilt in turns 89–99) | Bath Fizzies, Foam Bath, Bicarb, Reed Diffuser, Scandal, Hugo, Diesel, Ted Lapidus |
| **Disc behind** (built turns 67–80) | Hand Sanitizer, Car Wash, Thick Bleach, Dishwashing, Pine Gel, Citrus Gel, All-Purpose, Black Dip |

**Measured, not eyeballed:**

| Property | No-disc set | Disc set |
|---|---|---|
| Background luminance | 199 → 249 (**50-level spread**) | 227 → 242 (15-level spread) |
| Background warmth (R−B) | −1 → +13 (neutral to **warm**) | −18 → −8 (**all cool blue**) |
| Subject height, % of frame | 78 → 98 | 89 → 98 |
| Subject width, % of frame | 44 → 97 (narrow bottles to broad tubs) | 78 → 98 |

**The verdict is not close: the no-disc set is the more professional one, and it is also the set that
matches itself.**

1. **The disc set carries a cool-blue cast on every single item** (R−B between −8 and −18), while the
   newer set is neutral to slightly warm. Put side by side, the older half reads faintly blue-grey and
   cold; the newer half reads warm studio. That single difference is what makes the grid feel
   assembled from two shoots.
2. **The discs are not even consistent within their own set.** Measured luminance delta against the
   backdrop: Hand Sanitizer +3, Car Wash −2, Thick Bleach +7, Dishwashing +6, All-Purpose +4, Black
   Dip +4 — all barely perceptible washes — but **Pine Gel is −73** and **Citrus Gel −27**. So Pine
   Gel has a bold dark-green disc while seven of its neighbours have a ghost of one. That is a worse
   inconsistency than "some have discs and some don't".
3. **Lighting direction is random across the whole catalogue.** Measured on the lower body: lit from
   the left for 9 items, from the right for 7 — with no relationship to which set they belong to
   (Scandal and Hugo, both no-disc perfumes, disagree with each other). Fixing this is a bigger job
   than removing discs, and is worth doing deliberately rather than by accident.
4. **Framing is the one thing the no-disc set is worse at.** Its subject heights run 78–98% and widths
   44–97% against a tight 89–98 / 78–98 in the older set. The narrow perfumes (Scandal, Diesel, Hugo,
   Ted Lapidus at 44–48% width) sit smaller than the broad tubs and tubs-with-handles. The older set
   crops consistently large. **So: keep the newer look, but tighten the framing of the four slim
   bottles.**

**Recommendation (for her to approve, not applied):**
- Treat the **no-disc, neutral/warm** treatment as the house standard.
- Bring the eight older images onto it by **removing their discs and warming the background**, rather
  than by adding discs to the new eight. That means re-rendering eight images, not adding a graphic.
- Do NOT re-add the pale disc. It was added for the old `.stage` cut-out layout and is not what a
  real studio shot of her range looks like; the newer images without it are the better-looking ones.
- Separately, decide one **light direction** and one **subject-height band** (say 88–94% of frame) and
  apply it to all 16 as the images are revisited.

**Nothing in this turn changed any image, code or product data. Scan and comparison only.**

### Turn 101b — Pine Gel nudged down (adjustment only, no re-render)

Her instruction: **"i said adjust not make a fake new one look at the pic it should just move alil down"**.
The disc problem was the whole set's old backdrop; the only fault in *this* image was that the tub sat
too high in its frame, breaking the row when placed beside the Citrus Gel.

Measured against `bubbles-citrus-gel-tub.png` (the neighbour she wants it level with), tub bounding box:

| | top | bottom | centre |
|---|---|---|---|
| Citrus Gel | 11.4% | 93.3% | **52.3%** |
| Pine Gel before | 6.9% | 90.7% | **48.8%** |
| Pine Gel after | 10.4% | 94.3% | **52.3%** |

Fix: the original artwork moved down **41 px** (3.6% of frame) inside the same 928×1152 frame. Nothing
re-rendered, redrawn or regenerated. The vacated strip at the top was filled by extrapolating the
existing backdrop (sampled from the untouched margins) and blended over 26 px; the bottom 41 px were
eased toward the existing floor tone. Verified: the label block is **pixel-identical at the 41 px
offset** (mean abs diff 0.00, against 24.7 unshifted), and the largest row-to-row jump in the top
120 rows is 1.33 versus 1.21 in Citrus's own untouched top — i.e. the blend leaves no visible seam.

The disc was **left exactly as it is**. Its edge is a property of the original render and masking it out
was attempted and abandoned: the tub's pale clear collar and the pale disc share a colour range, so the
mask cannot separate them (the red-overlay check put red onto the tub body). Do not retry that mask.
The four generated re-render candidates in `.work/t101/` were rejected — she asked for an adjustment,
not new artwork.

Only file changed: `public/images/bubbles/bubbles-pine-gel-tub.png`. Original kept at
`.work/t101/pine-ORIGINAL-backup.png`.

### Turn 101c — why the Pine Gel "looked the same": a 7-day image cache

She said **"looks the same its not pushed i think"**. It *was* pushed and *was* deployed — the file hash
in the deployed commit matches the working file exactly (`57658544…`). The problem was caching.

`vercel.json` served everything under `/images/(.*)` with:

    Cache-Control: public, max-age=604800, stale-while-revalidate=86400

Seven days, on **filenames that never change**. Any replacement of an image at the same path is invisible
to anyone who has already loaded the page, for a week. That is a trap for every future image edit, not
just this one, so it is fixed at the root as well as for this image:

1. **The Pine Gel now uses a new path**, `bubbles-pine-gel-tub-v2.png` (identical bytes to the shifted
   file). A new URL cannot be served from cache.
2. **`vercel.json` image cache cut to `max-age=60`** with the same `stale-while-revalidate`. A minute of
   caching still protects the origin; a week no longer hides edits.

Rule for future image work: **if you replace an image's pixels, change its filename** (or expect the old
one to persist for up to a week). Bumping the filename is the cheap, reliable fix.

### Turn 101d — the actual cause: her browser held an 18 Nov version

Her screenshot (24 Nov) showed a Pine Gel with a **small tub, roughly half the frame width** — nothing
like the 95%-width tub I had been editing for several turns. Commit archaeology settled it:

| commit | date | what it shows |
|---|---|---|
| `46aa54a` "Bubbles Pine Gel, and it is a 200g tub" | 18 Nov | small tub, height 53.5% of frame ← **what her screen showed** |
| `ed24bef` rebuild | later | large tub, 84% |
| `1ce0214` zoom out | later | large tub, re-measured |
| `9af9d25` shift down | 24 Nov | large tub, 41 px lower |

So **her browser had been serving the 18 November file for six days**. Every fix in between — the
rebuild, the re-measure, the 41 px nudge — was invisible to her, which is why "looks the same / not
pushed". The 7-day `max-age` on `/images/*` did exactly what it was told. Nothing was ever broken in
the repo; the delivery was.

**What she asked for, read correctly this time:** *put THIS one back* (the 18 Nov version she was
looking at) *and adjust it* (nudge it down) *and push*.

Done exactly that:
- Restored the `46aa54a` artwork as the base — the small-tub composition she actually wants.
- Nudged it down **41 px** (3.6% of frame) so its centre lands at **52.0%**, identical to the Citrus
  Gel beside it. Seam feathered over 30 px; largest row-to-row jump in the top 130 rows is 1.32.
- Saved as **`bubbles-pine-gel-tub-v3.png`** and repointed `products.ts`. **New filename is mandatory** —
  the v2 filename is already cached in her browser for up to 7 days, so reusing any old path would
  have repeated the whole failure.

**Standing rule (added to Errors):** her browser can hold an image for up to a week. When changing an
image, always ship it under a NEW filename and bump the `-vN` suffix. Never assume "pushed" means
"visible to her"; compare her screenshot's composition against the repo before diagnosing a push.

### Turn 102 — technical audit: the home pop-up bug, and a sharper hero

Her report: **"the home items when i press the pop up sales menu looks weird not like the one on the shop
pages"**, and: **"how can we enhance the hero to look more pro without taking the animation out"**.

**1. The pop-up bug — a real layout defect, and the cause was found exactly.**

`ProductCard` wraps itself in a framer-motion `motion.article`, and on the home page each card is ALSO
wrapped in `<div className="grid-anim">`, which GSAP tweens. GSAP writes a `transform` on that div and a
transform **stays in the inline style after the tween**. A `position: fixed` element is positioned
against the nearest ancestor that has a transform, so `ProductModal`'s full-screen overlay resolved
against that one card instead of the viewport. On `/shop` there is no `.grid-anim` wrapper, which is
precisely why the same component behaved correctly there.

Fix: `ProductModal` now renders through **`createPortal(…, document.body)`**. The dialog leaves the card
subtree entirely, so ancestor transforms can no longer affect it, and both pages behave identically.
This is the correct fix rather than removing the wrapper, because the card's own hover tween and the
grid stagger both rely on transforms.

**2. A second bug found while reading that code.** The home grid's filter effect used `gsap.from` and
killed the tween in cleanup on every filter change. `gsap.from` applies its FROM values immediately, so
a card could be left at `opacity: 0` — an invisible product that the filter still listed. Now the effect
kills tweens, clears props, and tweens **to** the resting state, so a card is opaque whenever no tween is
running. `clearProps: 'transform'` also stops stale transforms accumulating on the wrappers.

**3. A fabricated claim removed.** The hero's glass stat card read **"99.9% Germ kill — Bubbles
detergents"**. That figure appears on no label, in no test report and in none of her photographs — it was
invented when the hero was ported from the soda template. Replaced with **"3 Houses — One standard"**,
which is true of the catalogue.

**4. Hero enhancement — with every animation kept.** She asked for more professional *without* losing the
motion, so nothing animated was touched: the morphing blobs still morph, the bubble canvas still rises,
the pack still floats and parallaxes, the headline still staggers in, "Pause motion" still stops it all.
What was added is static depth and hierarchy:

- **A vignette** (`.hero-shell::after`) pulling the corners down so the centre pack reads forward.
- **Fine grain** (`.hero-grain`, a 140 px SVG turbulence tile at 5% opacity, overlay) because flat CSS
  gradients band visibly on wide monitors and the noise breaks the steps.
- **A lit edge and a real contact shadow on the pack** (inset 1px white ring + two-layer drop shadow),
  plus a soft **floor shadow** beneath it so it sits on a surface rather than floating in a void.
- **A restrained rim light on the headline** (two-layer text-shadow, not a stroke).
- **A brand eyebrow pill** above the headline showing the current house with its colour dot. It reuses
  the existing `.hero-side` class, so it joins the entrance tween already running and animates in with
  the rest — no new animation was written.

Verified in the production bundle: `createPortal` present, `.hero-shell:after`, `.hero-grain`,
`.hero-can-wrap:after` and the vignette gradient all emitted into the built CSS, and `99.9% Germ kill`
gone.

### Turn 103 — a gallery, using her own photography (the "Shopify touch")

Her instruction: **"u also made these u still have them lets add some allegiance that shopify touch to our
shop can use them professionally in some place"**. She attached ten of the renders.

**Important honesty note first.** These files are **not** in the repo. No `.jfif` exists anywhere in git
history, and `public/images/frames/` (the only place they were ever referenced) is empty on disk. Every
earlier glossy catalogue render was thrown away after the turn that produced it. So they were taken from
this message's attachments and **committed properly this time**, so they cannot be lost again.

**What they are:** five dark studio shots of the Feliz be Glad fragrances (Scandal Ladies, Hugo Men, Diesel
Men, Ted Lapidus roll-on, and a collection line-up) and five Gladchemistry personal-care shots (Skin Moist
in two framings, SheaCoco Hair Care, Hair Food, Raw Shea Butter).

**Note — these are older-render style.** They do *not* follow the pale-disc, wide-frame standard decided in
turn 101: the fragrance shots are lit on a dark plinth, not a studio sweep. That is deliberate here —
they are used as editorial photography in a **dark band**, where that lighting is correct, and not as
catalogue cards. They are **not** wired into `products.ts`, so no product card shows one.

**Storage:** `public/images/gallery/` — 10 JPEGs, 888 KB total, longest edge 1024–1600, `quality=86`,
progressive. Committed to git this time.

**New component:** `src/components/Gallery.tsx`
- Editorial grid with a caption plate on each tile (kicker + caption, white on a gradient) so it reads as a
  catalogue rather than a wall of pictures.
- Full **lightbox**: click any tile, or use arrow keys; Escape or a backdrop click closes it; the page
  behind is scroll-locked while open.
- The lightbox is **portalled to `<body>`** — same lesson as the product modal in turn 102, so a
  transformed ancestor can never trap it.
- `gridAutoFlow: 'row dense'` so a 2×2 tile never leaves a hole, and the tile counts are chosen to fill
  rows exactly (Home 12 cells, Shop 16, About 4 — all multiples of four columns).
- Tiles are `loading="lazy"` and `decoding="async"`.

**Three placements, each with a job:**
1. **Home**, after the Feliz be Glad story and before "From bench to bathroom": a dark photography band,
   *"Photographed, not borrowed."* — seven tiles including the fragrance line-up as the 2×2 anchor.
2. **Shop**, under the catalogue grid: *"Every pack, in detail."* — all ten, with the collection line-up
   and the Skin Moist label detail as 2×2 anchors.
3. **About**: the `hero-organic.png` template graphic was replaced with her real Skin Moist photograph,
   and the four personal-care shots sit as a gallery under the pillars.

Verified: all ten files return 200 from the built site, all ten paths are present in the production
bundle, and the Skin Moist label was zoomed to full resolution to confirm no invented claim is legible in
the new close-up tile.

### Turn 104 — shorter home grid, and the skincare photography as decoration

Her instruction: **"lets cut the items short on home page n also use some the hair food n stuff on the home
to decorate it n make it more elegant"**.

**1. The home grid is now a selection, not the catalogue.** `(a) cut short — what she asked for`:
`HOME_LIMIT = 6`. Featured products lead within each house, then the rest fill up to six.

The default "All" view was broken by the obvious implementation and is now interleaved by house: taking
the first six products in file order gave four Gladchemistry and two Feliz and **no Bubbles at all**, so
the range looked like it had two houses. The lanes are now taken in turn — one from each house, then a
second round, and so on — so the default view always shows all three. Verified against the real data:

| view | shows |
|---|---|
| All | Bath Fizzies (GC), Reed Diffuser (FBG), Car Wash & Wax (BD), Foam Bath (GC), Scandal (FBG), Thick Bleach (BD) |
| Gladchemistry | 4 of 4 |
| Feliz be Glad | 5 of 5 |
| Bubbles | 6 of 7 — Black Dip drops off |

Copy corrected with it: the line under the heading said *"16 products across three houses… filter by
house to narrow it down"*, which no longer described a six-card grid. It now reads *"A short selection from
each house — the full catalogue of 16 lives in the shop."* and the button says *"See all 16 in the shop"*.

**2. The skincare photography now decorates, rather than only sitting in the gallery band.**
- **Promo section ("Order by the case")**: the two tilted product cards were replaced with three of her
  own shots — Hair Food and SheaCoco behind at −9° and +10°, Raw Shea Butter forward at −2° with a deeper
  shadow. Overlapping depth, not a row of cards.
- **Feliz be Glad story section**: the two older template shots (`/images/reed-diffuser.jpg`,
  `/images/felis-fragrances.jpg`, both cropped to 3:4) were replaced with the dark fragrance line-up and the
  Scandal bottle. Those two carry the same dark-plinth lighting as the section behind them, so the cluster
  stops looking pasted on.
- **Closing section**: a faint Skin Moist photograph bled across the top edge at 10% opacity, masked to fade
  out, `aria-hidden` and behind the copy — texture rather than a picture.

Nothing new animates. All three placements are static decoration, so "Pause motion" is unaffected and the
existing entrance tweens still fire as before.

Build clean; all nine gallery paths referenced from the home page resolve in `dist/`.

### Turn 105 — the hero becomes a showreel

Her instruction: **"the hero needs to swap between the items it has n pro level like how agency would let
it"**.

**Before:** the hero showed exactly one product per house — `PRODUCTS.find(p => p.brand === brandId)` — and
never changed. Four of the sixteen products were unreachable from the hero, and nothing about it suggested
a range.

**Now it rotates**, and the whole control surface is driven by one ordered list:

- `showreel = PRODUCTS.filter(p => p.brand === brandId)`; `slide` indexes it. **Every** product in the
  selected house gets its turn — 4 for Gladchemistry, 5 for Feliz be Glad, 7 for Bubbles. Verified against
  the real data: full loop is 18.4 s, 23.0 s and 32.2 s respectively at 4.6 s a slide.
- **Crossfade** rather than a swap: the outgoing pack slides up and fades over 0.42 s, the incoming one
  rises in. A long dissolve makes a shop hero feel broken; a flat swap makes it feel cheap.
- **A product caption under the pack** — house, product name, price and size, all crossfading with the
  image. This is what turns a floating picture into a product. Its box is a **fixed 86 px** because the
  longest name in the range is *"Household Hygiene Black Dip Cleaning Liquid"* (43 characters) which wraps
  to two lines; without the reserved height the caption would grow and shove the pack upward on every
  rotation.
- **Hover arrows** appear only when the pointer is over the stage (visible by default on touch, where
  there is no hover), so the hero stays clean at rest and is obviously interactive the moment you approach.
- **A two-tier control strip**: row one picks the house, row two picks the pack inside it and doubles as
  the rotation progress — 4 to 7 short pills that widen when active. The visitor can see the rotation
  rather than being surprised by it, and can pin any slide.

**Autoplay is careful about when NOT to run.** It stops on the existing **Pause motion** button, while the
pointer hovers the stage, while keyboard focus is inside it, and under `prefers-reduced-motion`; the
interval is cleared on every dependency change so rotations cannot stack. The house handler resets `slide`
inside the same click, so the pack never renders one frame of the previous house's product.

**Kept intact:** the intro tween, blob morph, bubble canvas, floating pack, pointer parallax on the
"fruit", the headline stagger and the pause control all behave exactly as before. The rotation is additive.

Verified in the built bundle: the 4600 ms interval, the arrow styles (7 selectors), the fixed caption box,
the arrow `aria-label`s, and the house/pack dot roles.

### Turn 106 — the third hero picture, and an honest verdict on how pro the hero is

Her observation: **"the third background pic is a bad pic"** and a question: **"how pro is the hero now?"**

**She was right about the third one, and the problem was worse than one picture.**
`brands.ts` pointed the three houses at `hero-organic.png`, `hero-fragrance.png` and
`bubbles-range-1.jpg`. Measured:

| file | what it actually is | source |
|---|---|---|
| `hero-organic.png` | amber pump bottles with blank labels among eucalyptus and a bath bomb — **not her products** | 1408×768 stock render |
| `hero-fragrance.png` | perfume bottles on a travertine plinth — **not her bottles** | 1408×768 stock render |
| `bubbles-range-1.jpg` | her own kitchen counter: Dishwashing, Thick Bleach, Pine Gel on black granite, phone snap | **720×1280** |

So the first two were stock images standing in for products she does not sell, and the third was a phone
photo of her counter being stretched to **907 px wide** — a 1.26× upscale, which is why it looked soft and
cluttered. All three are gone from the hero.

**Replaced with three purpose-shot studio sweeps**, 1376×768, 45–53 KB each: empty seamless cycloramas in
each house's own colour (sage for Gladchemistry, bronze for Feliz be Glad, teal for Bubbles), lit from the
upper left, grain included to stop banding. Rejected first attempts are kept in `.work/t106/`: one grew dark
blobs at the frame edges, one had visible wall panels and a hard corner.

**Two structural changes so they actually work:**
1. The hero ground is now `radial-gradient(…) , url(sweep) center/cover, var(--ink)` — the photograph is
   *under* the flat brand gradient rather than replacing it. The sweeps are shot dark at the edges for
   exactly this reason, so the gradient covers any seam at any aspect ratio while the photograph supplies
   the grain, the light pool and the falloff CSS cannot fake.
2. The in-stage "splash" was the house photograph at `blur(2px)` — which put **a second set of products
   behind the product being sold**, and was the thing she was actually seeing as the bad third picture.
   Replaced with a soft house-coloured glow: same job of separating the pack from the ground, no
   duplicate imagery.

**Her question — how pro is the hero now? An honest answer, in three parts.**

*Genuinely agency-level now:* it rotates every product in the house with a proper crossfade, names and
prices each one, shows the rotation as a progress bar, reveals arrows only on approach, stops itself on
hover, focus, Pause motion and reduced-motion, and sits on a real photographic ground instead of a CSS
gradient. That is more than most small-brand storefronts do.

*Still short of agency standard, in order of impact:*
1. **The floating "fruit" tiles** — six small rounded squares of product shots drifting around the pack.
   That is a 2021 DTC device. An agency hero would drop them and let the pack breathe.
2. **The headline is a slogan, not a proposition.** "Pure care, properly made." says nothing a competitor
   could not say. It should name what she does and for whom.
3. **Two headings compete.** The H1 and the brand tagline below the pack both try to lead the section.
4. **The stat cards** (16 Products / 3 Houses) are the weakest element on the screen; a visitor learns
   both facts elsewhere within a second of scrolling.
5. **The pack is a photograph in a rounded rectangle.** An agency hero usually has the product cut out
   with no frame at all, so it sits on the sweep as an object.
6. **No scroll cue.** On a 100svh hero with nothing below the fold, visitors do not know there is more.

Not changed without her say-so — these are design decisions, not defects.

---

## Turn 107 — the opening, and the logo

### What she asked
> "nice now play with the elegance n the logo alil be senior dev n also lets not open with the shop grid
> but elegant with the pic i sent but place them evenly or only a few zoomed please a pro site"

Three things: refine the logo, stop opening with the catalogue, and open with her own photographs
arranged *evenly, or with only a few zoomed*.

### What the page does now
`hero → ticker → EDITORIAL OPENING → product grid → brand story → gallery → proof → promo → closer`

The opening is no longer the shop grid. It is a masthead plus a plate row plus one zoom:

| frame | crop | why |
|---|---|---|
| Hair Food | 4:5, jar centred, air above the lid | portrait plate |
| 100% Pure Raw Shea Butter | 4:5, the whole still life | middle plate |
| SheaCoco Hair Care | 4:5 | portrait plate |
| Raw Shea Butter label | **21:9 zoom, 1.4× the plate scale** | the one "zoomed" frame |

Every crop was **cut at the aspect it is displayed at**, from her originals, centred on the measured
subject. Nothing relies on `object-fit` to choose the composition, so no jar can be sliced through its
label at any viewport. The three plates share one baseline and one 4:5 aspect — that is the "evenly"
she asked for — and the single 21:9 frame between them is the "few zoomed".

### The logo
The header, footer and About page were showing a **705×705 JPEG of the whole logo inside a white box with
a green border**, and the navbar had the same JPEG cropped into a 36 px circle. At the one size where a
logo works hardest, it read as a placeholder.

Now: the leaf is a transparent PNG lifted from her artwork, the name is **live type**
(`Glad` in ink, `chemistry` in green, `PRODUCTS` beneath), so it is crisp at any density and recolours
onto dark or cream without a plate behind it. There is a second variant — `gc-mark-solid.png` — which
keeps the white body of the leaf, for use on the ink-coloured header: the outline version dissolves
there, because most of the leaf *is* white.

Feliz keeps her own letterforms; only the white JPEG ground was removed, so her red serif sits on the
tinted brand stages instead of on a white sticker. Bubbles has no supplied artwork, so its mark is drawn
and its name set in the same live-type system.

`favicon.png` and `apple-touch-icon.png` are now her leaf. The template's purple lightning bolt is gone.

### Also fixed
- `<title>` said **"Felis be Glad"** — the brand is *Feliz*. Corrected, plus a description and OG tags.
- `.work/` (analysis proofs, rejected candidates) is now git-ignored rather than shipped.

### Honest note
The three plates are all Gladchemistry personal care, because those are the square studio shots that
survive a 4:5 crop. Her fragrance photographs are 670–805 px wide portraits on dark grounds — superb as
full-bleed, unusable as a 4:5 plate in a row of pale grounds. If she wants the fragrance house in the
opening, it needs a different composition (one dark full-bleed band), not another plate.

---

## Turn 108 — pushing the opening further

She asked whether it was the best it could be, and said push it if so — without breaking direction.

### What moved
1. **The third house is now in the opening.** Turn 107's honest note said the opening showed one house
   three times. Her fragrance photograph (`fragrance-collection-dark.jpg`, 1376×768, a full shelf of
   bottles under warm light) is now a **full-bleed band** between the plates and the zoom: 21:9 on
   desktop, her frame edge to edge, one line set over the dark left third where the photograph is
   genuinely empty. That is Feliz be Glad *and* Bubbles' brand story in one frame — the bottles she
   sells, arranged the way she arranged them.
2. **The phones get their own composition.** A 21:9 band with copy over it collapses on a handset, so
   below 640px the `<picture>` element serves a **4:5 portrait crop** of the same photograph and the
   copy sits underneath, never on top of the bottles. Only the crop the viewport needs is downloaded —
   a phone never pays for the 1600px band.
3. **Contrast was measured, not eyeballed.** White text over the band's scrimmed left third: **min
   5.30:1, 5th percentile 10.24:1, 0% of the copy column below 4.5:1**. The scrim tapers to fully
   transparent by 56% of the width so her photograph is not flattened — an earlier, heavier scrim
   killed half the frame and was rejected.
4. **The logo lock-up is now measured.** The old fixed 8px gap read correctly at 36px and tight at 56px;
   the gap now scales (`7 / 9 / 13px`) and the sub-line is pulled flush by exactly one tracking unit, so
   `PRODUCTS` aligns to the `G` above it at every size.
5. **Section rhythm.** The opening headline moved to a new `.display-spread` scale
   (`clamp(34px, 4.6vw, 62px)`) so the page's two big statements are not the same size competing. The
   grid's "signature range" pill became the same rule-and-eyebrow device as the opening, so the two
   sections read as one system rather than two designers.

### Verified
- `npm run build` clean; no TS6133 orphans.
- Bundle carries both crops, both logo variants and `display-spread`; both `aspect-[4/5]` and
  `aspect-[21/9]` utilities are emitted with the `sm:` media query.
- Old lens: `ed-fragrance-4x5.jpg` cut and discarded — a 614px-wide upscale, and the band composition
  was better.

### Still open (honest)
- The three plates remain Gladchemistry personal care. That is deliberate now — they are the pale
  studio row, and the fragrance lives in the dark band where it belongs.
- Bubbles still has no photograph of its own in the opening. Its bottles are in her kitchen-counter
  shot (`bubbles-range-1.jpg`), which is a phone snap at 720×1280 — not good enough for a band this
  size. A proper Bubbles studio shot would let this section become three houses, three frames.

---

## Turn 109 — the logo is her artwork again

She sent her logo and asked what happened to it. Fair question. The answer is that I over-corrected.

### What I got wrong in turn 107
1. **I re-set her wordmark in live type.** "Glad" and "chemistry" in Outfit next to a knocked-out leaf is *not*
   her logo — it is a lookalike. Her wordmark is her own drawing; it is not ours to retype.
2. **I left-aligned it.** Her lock-up is **centred** — leaf, wordmark and `products` all share one vertical
   axis (measured: leaf centre x 352.5, wordmark centre x 352.0 in her 705×705 file). The header version was
   leaf-then-name in a row, which broke the composition she drew.
3. **I dropped `products` from the header entirely** and replaced it with a tracked-out `PRODUCTS`.
4. **Her `products` line is not tracked out.** It is set in the same open sans as the wordmark, word-spaced
   normally, centred under it — I had invented a letter-spacing treatment.

### What it is now
Everything is cut from **her own JPEG**, knocked out on a luminance ramp with alpha preserved — so the leaf
keeps its two greens and the letterforms are hers to the curve. Three forms, no retyping anywhere:

| form | used at | source |
|---|---|---|
| stacked lock-up | footer, About page, Brands page | `gc-lockup.png` (516×388) |
| leaf + wordmark in a row | the 72px header bar | `gc-mark-solid.png` + `gc-wordmark.png` |
| leaf alone | favicon, apple-touch-icon, tight spaces | `gc-mark.png` / `gc-mark-solid.png` |

The header rolls the same artwork into a row because a centred stack cannot be 60px tall in a 72px bar
without shrinking the name to nothing — that is the one concession, and it uses her pixels, not new type.

**The reverse variant** (`gc-lockup-dark.png`, `gc-wordmark-dark.png`) is the standard solution for the ink
header: her leaf keeps its greens, her dark-green lettering goes to white. Built by recolouring her own
pixels, so the curves and counters are untouched. Without it her dark lettering disappeared into `--ink`,
which is the bug that started the whole substitution in the first place.

### Measured from her file, not guessed
- leaf is **0.72** as wide as it is tall
- wordmark runs **3.1×** the leaf's width
- the stack is centred, not ranged left
- the wordmark's cap height is **0.37×** the leaf's height

The favicon is now cropped from her leaf, so the tab, the header and the footer are all the same mark.

---

## Turn 110 — the price book

She asked for "a book like with the names n prices ... animated book when u click the pages moves to
the next one, no pics in it just pricelist".

### Where the prices come from
Her **WhatsApp business catalogue** — the screenshots she sent — read at full resolution. Transcribed
verbatim into `src/data/pricelist.ts`. Nothing estimated, nothing rounded, and where she lists a range
(`R95,00 – R145,00`) or two sizes on one line (`5 kg R140 20 kg R380`) the string is reproduced as she
wrote it. The fragrance list is her WhatsApp message text, names spelled as she spells them
(*lavie estabelle*, *Sausage*, *coppelia*), because those are the words her customers search for.

### The book
`/price-list` — thirteen pages, one leaf at a time:

| page | content |
|---|---|
| cover | Price list |
| 1 | Gladchemistry · Skin — shea, skin moist, charcoal bar, deobloks |
| 2 | Gladchemistry · Hair — oils, hairfood, sheacoco, castor |
| 3 | Feliz be Glad · Fine fragrance — 20 ml R80, sizes 10–100 ml |
| 4 | The fragrance shelf — the female and male lists, as a note page |
| 5–7 | Bubbles · Household, Floor & bulk, Car care |
| 8 | Combos & start-ups — Combo R95, 137 combo, the three business packs |
| 9–11 | The shop range — the sixteen site products at site prices, 5 / 5 / 6 |
| 12 | How to order |

**The turn** is a two-stage transform on one leaf: it rotates out on its right edge with a shadow
sweeping across the gutter, and the next leaf comes in from the other side, both sharing one
`perspective` on the spread so the spine behaves like a spine. Arrow keys work; the footer dots are
clickable; `prefers-reduced-motion` drops the rotation and keeps a fade.

**No photographs anywhere.** Set as printed type: running head, hairline rule, rows aligned on a
right-hand price column with dot leaders, folio at the foot.

### The thing I did not paper over
Her catalogue and the site **disagree on six lines** — e.g. car wash & wax is R155 in her catalogue and
R165 on the site; citrus & pine gel is R52 vs R65; all-purpose cleaner is R95–R145 vs R44. That is a
pricing decision, not a design one, so the book shows the shop's prices on the shop pages, her prices on
the catalogue pages, and a collapsible table beneath lists every difference. **She has to choose which
list is current** — I will not silently overwrite either.

### Verified
- Every leaf measured at 560 px and at 375 px: all pages ≤ 615 px inside a fixed 640 px page, so the
  book never changes height mid-turn. (An earlier 8-row split overflowed at 375 px and was caught by
  the measurement, not by eye.)
- `npm run build` clean, no TS6133 orphans.
- Offline render of a leaf checked before shipping.

---

## Turn 111 — the photography band: alignment audit

She named the last four tiles ("Raw Shea Butter, 100 g / Hair Food / Skin Moist / SheaCoco Hair Care")
and asked for an alignment audit on desktop and phone, plus a rating of the UI and animations.

### Four real faults, found by measuring

**1. The "tall" tile was a landscape photograph.** `fragrance-collection-dark.jpg` is **1376×768**
(1.79) and was being cover-fitted into a **4:5 portrait** frame — **55% of her photograph discarded**.
The four fragrance bottles are 0.56–0.67 portraits being crushed into squares: **up to 44% lost**.
Fix: `GalleryTile.ratio` now carries the file's own aspect, and the frame is built at that ratio.
**Nothing is cropped to fit a cell any more.**

**2. Column balancing was greedy and visibly ragged.** "Shortest column next" left a **0.45 col-width
staircase** at the foot of the band. Replaced with an exhaustive split search:
**0.15 col-widths at 3 columns, 0.18 at 2.** The search is a pure function of the ratios, so it
survives her swapping a photograph.

**3. Three column stacks in a two-column grid.** On `sm` the auto-placement pushed the third stack onto
an implicit third column — a horizontal scroll on tablets. Columns are now placed explicitly, with
unused columns hidden, and a resize listener picks the split for the width actually on screen
(1 / 2 / 3 columns).

**4. One section used a `6vw` gutter while every other used `5vw`** — its content edge sat 1vw off the
rest of the page. Now one gutter everywhere.

Also: the four tiles she named now use the **plates already cut at 4:5** for the opening, so the band and
the opening show the same frames rather than two different crops of one photograph.

### Accessibility fix
`Gallery` and `EditorialOpening` used Framer's `whileInView`, which writes **inline transforms** — the
CSS `prefers-reduced-motion` block in `index.css` cannot switch those off. Both now call
`useReducedMotion()` and drop the entrance entirely when it is set. That is a real fix, not a nicety.

### Rating
See the table in the reply. The band now: no crop, flat foot, one baseline for captions, captions wrap
rather than ellipsing a product name, and motion that can be turned off.

## Turn 112 — "the mobile pics look different to the PC"

She was right, and it was worth asking. Two places on the site deliberately serve a **different crop**
to a phone; everything else is the same file at every width.

### The one that was wrong
The opening's Feliz band swapped to a **4:5 portrait** plate below 640 px. The photograph is a **wide
shelf** (1376×768), so a 4:5 crop kept only **45% of its width** and sliced through bottles on both
edges — the phone was seeing a different, worse picture of the same shelf.

Replaced with a **3:2** plate (`ed-fragrance-32.jpg`, 1200×800): **84% of the shelf**, the whole row of
bottles reads, and the band is shorter so it no longer pushes the copy off the first screen.

### The one that was fine
The shea-butter zoom plate is 21:9 on a wide screen and 16:9 on a phone. Measured both crops: the label
is **complete and legible in both**; the phone gives up a sliver of the jar rim and one leaf. That is a
comparison, not a loss. Left alone.

### Why the swap exists at all
A 21:9 band with body copy set over its left third collapses on a 375 px screen — the copy would cover
the photograph and the type would run to one word a line. So the phone gets a taller crop and puts the
copy underneath. That reasoning is now written into the component instead of only living in my head.

## Turn 113 — the phone was showing a different package

She said the bicarb, the foam bath and the pine gel look wrong on a phone, and that the phone should
just show the same picture as the PC. She was right, and here is the exact cause.

**The package pictures were never different.** One file, `928×1152` (4:5), served to both. What differed
was the **frame**. The product dialog is one column on a phone, so the picture sits in a **280 px** box
and `object-fit: cover` scaled the picture to fill the width — which made it **426 px tall** and cut
**34% off the top**. From `md` the dialog is two columns and the picture's box is tall enough that cover
crops nothing, so the desktop always looked right. Same file, two different pictures.

What the 34% took: the bicarb's **crimped weld, its red printed line and the top half of "Bicarbonate of
Soda"**; the foam bath's **white cap**; the pine gel's **lid and its green collar**. Three different-looking
packages, none of them hers.

**Fix:** on a phone the frame is a fixed height and the picture is **contained**, so the phone renders the
same photograph as the desktop — whole, smaller, stage tint filling either side. From `md` nothing
changes: still full-bleed cover. The dialog also scrolls inside a `92dvh` cap now, so the taller stack of
text still fits a short phone screen.

No image was edited, regenerated or replaced. One CSS change and one class on the frame.

## Turn 114 — full audit with a real browser

Four rounds of "it didn't change" was my fault: I was auditing by reading CSS and measuring files, never
by rendering the page. The sandbox had no browser. It does now —
`@sparticuz/chromium` + `playwright-core` from npm, with the NSS libraries unpacked from
`al2023.tar.br` to `/tmp/al2023/lib` and `LD_LIBRARY_PATH` pointed at them. That is the fix for the
process, not just the page: every layout claim from here on is a measurement from a rendered page.

Audited six routes at 390 px and 1440 px, recording every image's rendered box against its intrinsic
size, and every element crossing the viewport edge.

### Found

**The shop's photo band was forcing squares.** `SHOP_GALLERY` carried no ratios, and `Gallery` falls back
to `1 / 1`. Ten photographs, **44% off the tall bottles on desktop as well as phone** — the same fault I
had "fixed" on the home page two turns earlier without checking the second instance of it. Fixed: every
tile now carries its own ratio, 0% crop on that band at both widths.

**There was a horizontal scroll at every width on the home page.** The tilted marquee strip was full-bleed
*and* rotated about its own centre with -10px side margins: a 1461px strip at 1.6° hangs ~11px past each
edge. The document was 1461px wide on a 1440px screen and 401px on a 390px phone. The strip is now
full-bleed and unrotated; only the text inside it tilts, which is what makes the tilt read anyway.
**Overflow is now 0px on all six routes at both widths.**

**Two decorative tilts on the home page crossed the gutter.** The 92%-wide plate at -3° and the 34% one at
-2%/-6% with a 6° rotation. Both pulled inside their box; the bottle also stopped being forced to 3:4,
which was cutting 29% off a 0.56 photograph.

**The hero's own pack was 7% cropped**, at every width: a 3:4 frame around 4:5 renders took the cap off
whatever was showing. The frame is 4:5 now.

**The hero caption was printed across the pack.** The pack was centred in the full stage while the caption
is pinned over the stage's bottom, so on a 520px stage the 190px pack reached into it — the product name
was set over the photographed ground. The stage now reserves the caption band (`pb-[96px]`), and a scrim
sits under the caption so white text is not landing on a pale blurred chip or the lime blob.

**Brands and About were cropping 25–26%** of three 1.79 sweep photographs and a square jar photo into 4:3
frames. They now use the photographs' own ratios.

### Verified after the changes
| route | phone 390 | pc 1440 |
|---|---|---|
| /shop /brands /about /price-list /contact | 0 overflow, 0 crops | 0 overflow, 0 crops |
| / | 0 overflow, 2 flagged | 0 overflow, 2 flagged |

The two remaining flags are both **rotated decorative plates**, where the bounding box is larger than the
plate: measured `height: 58%`, computed `width: 176.3`, `height: 220.4` — a ratio of 0.800, exactly the
file's 4:5. The shape is right; only the box that contains the rotation is wider. Not a crop.

### Rating (revised downward, honestly)
Alignment was an 8.5/10 last turn and that was too generous — there was an 11px sideways scroll on every
page and a photo band losing nearly half of every bottle. Those are now actually fixed and measured, so the
number is real this time rather than asserted.

## Turn 115 — the actual cause of "the phone shows a different picture"

Her PC showed a **plain white pillow bag**; her phone showed the **silver sachet with the red line**. I
had been comparing her phone against my own render and finding them identical, which was true and
useless — the phone was correct, so the *PC* was the one holding a stale image.

That white bag is `.work/old-8707373.png`, the artwork from commit `8707373`, four rewrites ago. Same URL,
different bytes. `vercel.json` served `/images/(.*)` with:

    public, max-age=60, stale-while-revalidate=86400

So one device had the old bytes and another had the new ones, and could keep disagreeing for a day. Her
phone loaded it after a rewrite; her PC's cache did not. **The site was not wrong on either device — the
URL was.** A rewritten pack kept its name, so there was no way for a browser to know it had changed.

### Fix: content-hashed filenames
Nineteen product/photo files had been rewritten under an unchanged name (the bicarb four times, the pine
gel six). All nineteen now carry a hash of their own bytes:

    gc-bicarbonate-soda-sachet.228e8bfa.png

and `vercel.json` gives that pattern `max-age=31536000, immutable` — safe precisely *because* the name
changes whenever the picture does. The generic `/images/` rule drops its 24-hour stale window to 60 s.

This is the standing rule from here: **a new picture gets a new filename.** It is the only way to evict an
image from a phone that has already seen the old one, and it is why this cost her four rounds of
"it didn't change".

Verified: all references updated, every hashed file present, zero failed image requests, six routes still
at 0px horizontal overflow and 0 crops at 390px and 1440px.

## Turn 116 — restoring the artwork she preferred

I had the whole thing upside down. Her PC was showing a **stale cached set**, I called it the wrong one,
and I "fixed" it by forcing the newer set onto her — onto the device that had the version she liked.

The set her PC was holding is commit `500e1ec`. Measured against her PC screenshots it matches at a
distance of ~2–7; the current set matches at 14–44. Her words: *"we decided that pc version is the better
version."*

### What the old set actually is
Every pack rendered **small, centred, on a soft pastel disc**, over a plain studio ground:

- Gladchemistry on mint, Bubbles on pale blue, the citrus tub on peach
- the Feliz bottles on their **dark charcoal** ground, each one tiny and deliberate
- the bicarb as a small white pillow bag inside its disc

The newer set zooms each pack until it nearly fills the frame, loses most of the discs, and puts the three
Feliz perfumes on bright white. The old set is more consistent and more elegant — the discs do the work,
and a row of cards reads as one shelf rather than nine different photographs.

### Restored
All sixteen packs are back to the `500e1ec` artwork, written under **new content-hashed filenames**
(`gc-bicarbonate-soda-sachet.825f6375.png`), so no browser can hold the version I forced on her.

Note the pine gel: the old file is `bubbles-pine-gel-tub.png` while the product points at
`bubbles-pine-gel-tub-v3.png`. Both are the same tub, but the old one sits further back inside its disc
and reads better at card size, so `bd-pine-gel` now points at the restored artwork.

Verified: zero failed image requests, nine captured cards visually match her PC screenshots, and six routes
still measure 0px horizontal overflow and 0 crops at 390px and 1440px.

## Turn 117 — page changes started at the bottom, and the pictures were slow

Two complaints, two separate causes.

### 1. Every page change kept the old scroll position
`App.tsx` had no scroll handling at all, and a client-side route change does not scroll a browser. Open
`/shop`, scroll 4000px, tap **Brands** — the new page rendered at 4000px, so she landed near the bottom of
it, usually on the footer. A `ScrollToTop` effect keyed on `pathname` now resets to the top with
`behavior: 'instant'`; smooth scrolling would have animated the whole way up through the outgoing page.
Measured: was at 4000px, tapped Brands, now at 0.

### 2. 22.7 MB of pictures to show 16 products
The product renders were 928×1152 **PNGs of 1.3–1.7 MB each** — 24 MB for eighteen files — displayed at
about 320px wide on a phone. Nothing about that was doing her any good over mobile data.

Re-encoded to **WebP at 784px** wide (still 2× a 392px card):

| | before | after |
|---|---|---|
| 18 product renders | 24.1 MB | **0.4 MB** |
| 17 gallery photographs | 1.60 MB | **0.78 MB** |
| **/shop on a phone** | **22.7 MB** | **1.2 MB** |
| **/shop on a PC** | 23.4 MB | 1.4 MB |

Visually indistinguishable: the bicarb at 14 KB and at 1348 KB produce the same picture side by side.

Also: `ProductCard` now carries `width`/`height` alongside `loading="lazy"`, so the browser reserves each
card's box before the file lands and the grid stops reflowing as pictures stream in. The two Google font
families moved off the render-blocking path (`media="print"` + `onload`), so the hero paints without
waiting on a third-party request.

### Caught by the audit, not by me
Switching to `.webp` left six `-4x5.jpg` references on the home page pointing at files I had just deleted —
the opening's three plates and the photography cluster. The broken-image check found them; all six now
point at the WebP files. **Every route at both widths: 0 missing files, 0 broken images, 0px overflow.**

### Turn 121 — the WhatsApp links that were never sent

She reported "the WhatsApp isn't working — it shows but mine works". That symptom (fine on her
phone, broken for a customer) is the signature of a bug on our side, not of a WhatsApp Business
setting. The number was never the problem: `wa.me/27737190821` is correctly formatted, with the
country code and no leading zero, and it is the same `+27 73 719 0821` that works when she opens
WhatsApp herself. Three separate defects sat behind the complaint.

**Defect 1 — checkout used a scripted popup that browsers may refuse.** `CartDrawer.tsx` did
`window.open('https://wa.me/…', '_blank', 'noopener,noreferrer')`. Playwright with
`window.open` stubbed to return null — which is exactly what a popup blocker, an extension, or
the in-app browser inside Instagram/Facebook/TikTok does — produced **no tab at all**, while the
drawer still flipped to "Order sent on WhatsApp". The customer was told the order had gone and
the shop never heard a word. Re-tested after the fix: the control is an `<a href>` carrying the
whole order, so the browser performs an ordinary user-initiated navigation nothing may block.
A "WhatsApp didn't open? Tap here" link and the number itself now also appear on that panel.

**Defect 2 — the contact form sent nothing and claimed success.** `Contact.tsx` did
`e.preventDefault(); setSubmitted(true)` and printed **"Message Received!"**. Measured: a filled
form and a submit produced **zero network requests** of any kind. There is no server on this
site. It now composes the enquiry and offers two handoffs that actually arrive — WhatsApp and a
pre-filled `mailto:` — with "Your enquiry is ready to send" instead of a false confirmation, and
an "Edit my message" route back.

**Defect 3 — the number was unreachable by tapping, almost everywhere.** Across the whole site
there was exactly **one** clickable contact link (`/price-list`), and no `tel:` link anywhere.
The footer printed the number as plain text; the contact page showed email and address as plain
text. All of them are now `tel:` / `mailto:` / `wa.me` links, and the footer gained a "WhatsApp
us" button.

Centre of gravity moved to `src/lib/whatsapp.ts`: one number, one `waLink()`, one `WA_TARGET`.
`waLink()` `encodeURIComponent`s the body — an unencoded newline or `&` truncates a multi-line
order at the first one, which is its own silent-failure mode.

**Verified**: 35 assertions across 390 px and 1440 px, 0 failures — cart CTA is an `<a>`, the
href decodes to the complete order including the subtotal, a click still reaches `wa.me` with
scripted popups refused, contact links carry the form contents into both WhatsApp and `mailto:`,
the footer and price list links exist. Then the regression sweep: 6 routes × 2 widths, **0 4xx,
0 broken images, 0 px horizontal overflow**. Design unchanged — same buttons, same type, same
rhythm; only the number and the honesty are new.

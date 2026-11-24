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

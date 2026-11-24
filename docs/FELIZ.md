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

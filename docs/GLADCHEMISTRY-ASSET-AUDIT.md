# Gladchemistry — Full Catalogue Image Audit & Photography Correction

**Phase 2 · production correction report**
Branch `arena/ff1c789b-gladchemistry` · baseline commit `d931e15` (Phase 1 delivery)
40 products · 14 Gladchemistry · 7 Felis · 19 Bubbles

---

## 1. Method, and what "verified" means here

Every one of the 40 displayed frames was inspected at full 1200×1500 resolution
against the original photograph in `public/images/products/`, not against its
filename. Three separate passes were run:

1. **Visual pass** — all 40 frames rendered individually and as contact sheets at
   card size, then the failures re-opened at 1:1 and cropped to the label.
2. **Objective pass** (`.work/p2/scale.py`) — for each frame the product's bounding
   box is measured against the paper, giving fill height, horizontal centring,
   baseline position and head/foot room. This is what surfaced the systemic
   under-scaling that the eye forgives at thumbnail size: ten frames had products
   occupying 24–38 % of frame height, floating in 35–58 % empty paper.
3. **Boundary pass** — every frame's outer rows and columns scored for
   non-paper content, catching packs that touch or are clipped by the frame edge,
   plus a plate-seam detector for the pasted-paper artefacts.

**Alpha was verified, not assumed.** Of 39 files in `public/images/products/`,
exactly ten are RGBA with all four corners at alpha 0:
`bubbles-all-purpose-cleaner.png`, `bubbles-citrus-gel.png`,
`bubbles-dishwashing-2l.png`, `bubbles-dishwashing-liquid.png`,
`bubbles-multipurpose-750ml.png`, `bubbles-pine-gel-dishwashing.png`,
`bubbles-pine-gel.png`, `bubbles-thick-bleach.png`,
`gladchemistry-foam-bath.png`. Everything else, including every file named
`*-real.jpg`, is opaque RGB. **No frame in `public/images/frames/` has an alpha
channel** — they are all JPEG on a photographed paper sweep. This report does not
claim otherwise anywhere.

---

## 2. Classifications (one per product)

- **PASS — Correct**: authentic branding, clean silhouette, sound composition. Untouched.
- **BRANDING FAILURE**: packaging shown is not her real label or container.
- **COMPOSITION FAILURE**: right packaging, wrong framing — scale, centring, clipping, plate boundary, seam.
- **SOURCE REQUIRED**: no accurate original exists in the repo. Left intact rather than fabricated.

**Totals: 32 PASS · 2 BRANDING FAILURE corrected · 6 COMPOSITION FAILURE corrected · 1 PASS with reservation (SOURCE-limited)**

---

## 3. The 40-product table

| # | Product | Brand | Original source photo | Current displayed image | Classification | Branding accuracy | Extraction / edge quality | Position & perspective | Background & shadow | Action taken | Final result |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Skin Moist 125g | Gladchemistry | `gladchemistry-skin-moist-125g.jpg` | `gc-skin-moist-125g.af6e1f45.jpg` | PASS — Correct | Real green-band sleeve, leaf roundel, 125g | Clean cut, no halo | Centred, base level | Seamless warm sweep, soft shadow | None | Unchanged |
| 2 | Skin Moist Family Tub | Gladchemistry | `gladchemistry-skin-moist-family.jpg` | `gc-skin-moist-family.916315ba.jpg` | PASS — Correct | Real "for very dry to dry skin" band | Clean | Slightly low but balanced | Seamless | None | Unchanged |
| 3 | Raw Shea Butter 100g | Gladchemistry | `gladchemistry-raw-shea-butter.jpg` | `gc-raw-shea-butter.…jpg` | PASS — Correct | Real 100g label, lid off, product visible | Clean | Natural still-life offset, deliberate | Seamless, real shadow | None | Unchanged |
| 4 | SheaCoco Hair Care 125g | Gladchemistry | `gladchemistry-sheacoco-hair-care.jpg` | `gc-sheacoco-hair-care.9b843d62.jpg` | PASS — Correct | Real SheaCoco band | Clean | Centred, level | Seamless | None | Unchanged |
| 5 | Hair Food | Gladchemistry | `gladchemistry-hair-food.jpg` | `gc-hair-food.24ffa9f6.jpg` | PASS — Correct | Real HAIR FOOD band | Clean | Centred, level | Seamless | None | Unchanged |
| 6 | Hair Oil | Gladchemistry | `gladchemistry-hair-oil.jpg` | `gc-hair-oil.…jpg` | PASS — Correct | Real Natural Hair Oil label | Clean | Styled with nuts, deliberate | Warm sweep, credible | None | Unchanged |
| 7 | Castor Oil 50ml | Gladchemistry | `gladchemistry-castor-oil-50ml.jpg` | `gc-castor-oil-50.…jpg` | PASS — Correct | Real botanical label | Clean | Base at frame edge — tight but intact | Seamless | None | Unchanged |
| 8 | Castor Oil 500ml | Gladchemistry | `gladchemistry-castor-oil-500ml.jpg` | `gc-castor-oil-500.…jpg` | PASS — Correct | Real botanical label | Clean | Centred | Seamless | None | Unchanged |
| 9 | Skin Moist & Charcoal Bar | Gladchemistry | `gladchemistry-skin-moist-charcoal.jpg` | **`gc-skin-moist-charcoal.22ad6024.jpg`** | **BRANDING FAILURE → corrected** | Was grey lettering on a pale plate, not her packaging | Was a pale rectangular fade at left crossing the tub | Was off-centre and clipped at left | Was inconsistent, hard transition around the tub | **Re-rendered from the true original**: real green-band Skin Moist 125g tub + the charcoal bar's real shape, one seamless sweep, no rectangular artefact. Label verified at 1:1 (roundel, "Gladchemistry / Skin Care Solutions", "Skin Moist", "125g", barcode) | **PASS** |
| 10 | 1.5L Foam Bath & 100g Bar | Gladchemistry | `gladchemistry-foam-bath-1500ml.jpg` | `gc-foam-bath-15l.…jpg` | PASS — Correct | Real red waisted PET, "1.5L e", bar | Clean | Slightly left of centre, acceptable | Seamless | None | Unchanged |
| 11 | Bubble Bath & Skin Moist Combo | Gladchemistry | `gladchemistry-bubble-bath-combo.jpg` | `gc-bubble-bath-combo.…jpg` | **BRANDING FAILURE → not corrected this pass** | Tub label reads "Gladchemistry / Skin Moist" as in the original, but the 5L jerrycan carries a plain panel with no label artwork — the original photograph itself is unbranded | Clean | Group centred, baseline level | Grey studio plate, cool tone — mismatched against the warm house sweep | Not re-rendered; flagged SOURCE-limited. See §6. | **PASS with reservation** — authentic to its source, but the source has no printed label on the 5L |
| 12 | Deobloks 500g | Gladchemistry | `gladchemistry-deobloks-500g.jpg` | `gc-deobloks.65bc498c.jpg` | PASS — Correct | Real Deobloks printed lid, orange & pink | Clean | Pair centred, level | Seamless | None | Unchanged |
| 13 | Pure Bicarbonate of Soda | Gladchemistry | `gladchemistry-bicarbonate-soda.jpg` | **`gc-bicarb.0408bf2c.jpg`** | **BRANDING FAILURE → corrected** | Displayed a generic unbranded stand-up pouch — not her container at all | Pouch edge clean but plate boundary visible | Pouch small, off-centre left | Hard rectangular plate step in the background | **Re-rendered from the true original**: her real white 500g tub, lid off, powder mound, exact label text ("Gladchemistry", "Pure Bicarbonate of Soda", "500g") | **PASS** |
| 14 | Personal Care Start Up | Gladchemistry | `gladchemistry-personal-care-startup.jpg` | **`gc-personal-care-startup.1e8cfb26.jpg`** | **COMPOSITION FAILURE → corrected** | Branding preserved exactly — Skin Moist, SheaCoco Hair Care, HAIR FOOD all correct | Grey extraction remnant (barcode sliver) removed; floating lid discs removed; silhouettes clean | Group scaled up to 94 % width, balanced head/foot room, level baseline | Bands removed, one even sweep, contact shadow under each jar | **Re-rendered from the original**, branding untouched | **PASS** |
| 15 | Signature Amber Reed Diffuser | Felis | `felis-reed-diffuser.jpg` | `felis-reed-diffuser.…jpg` | PASS — Correct | Real "Signature Amber" plate, reeds | Clean, real product in situ | Composed on stone with eucalyptus, deliberate | Warm directional light, real shadow | None | Unchanged |
| 16 | Inspired by Scandal Ladies | Felis | `felis-inspired-scandal-ladies.jpg` | `felis-scandal-ladies.…jpg` | PASS — Correct | Real bottle, correct amber plate | Clean | Slightly right of centre — complements the bottle's asymmetric shape | Seamless | None | Unchanged |
| 17 | Inspired by Hugo Men | Felis | `felis-inspired-hugo-men.jpg` | `felis-hugo-men.…jpg` | PASS — Correct | Real bottle and plate | Clean | Centred, level | Seamless | None | Unchanged |
| 18 | Inspired by Diesel Men | Felis | `felis-inspired-diesel-men.jpg` | `felis-diesel-men.…jpg` | PASS — Correct | Real bottle and plate | Clean | Centred, level | Seamless | None | Unchanged |
| 19 | Inspired by Ted Lapidus Car | Felis | `felis-inspired-ted-lapidus-car.jpg` | `felis-ted-lapidus-car.…jpg` | PASS — Correct | Real mini bottle and plate | Clean | Centred, level | Seamless | None | Unchanged |
| 20 | Fine Fragrance EDP 20ml | Felis | *(no single original; composites of the three bottles)* | `felis-fragrance-edp-20ml.…jpg` | PASS — Correct | All three bottles and their amber plates correct | Clean | Three-up row, evenly spaced | Seamless | None | Unchanged |
| 21 | Fine Fragrances Business Start Up | Felis | `felis-fragrances-startup.jpg` | `felis-fragrances-startup.…jpg` | PASS — Correct | Real bottles and plates | Clean | Row with tall sprayer, deliberate | Seamless | None | Unchanged |
| 22 | Hygiene Dishwashing Liquid | Bubbles | `bubbles-dishwashing-liquid.png` (RGBA, verified alpha) | `bubbles-dishwashing-liquid.…jpg` | PASS — Correct | Real "HYGIENE DISHWASHING LIQUID" label | Clean | Centred, level | Seamless | None | Unchanged |
| 23 | Dishwashing Liquid 2L | Bubbles | `bubbles-dishwashing-2l.png` (RGBA, verified alpha) | `bubbles-dishwashing-2l.…jpg` | PASS — Correct | Real BUBBLES 2L tub | Clean | Centred, level | Seamless | None | Unchanged |
| 24 | Bubbles Thick Bleach | Bubbles | `bubbles-thick-bleach.png` (RGBA, verified alpha) | **`bubbles-thick-bleach.1cbbb548.jpg`** | **COMPOSITION FAILURE → corrected** | Real label — BUBBLES oval, NEW flash, THICK BLEACH, 750 ml | Clean | Was clipped at the base, 91 % fill with 1 % foot room | Was a hard plate boundary down the left, vertical band | **Re-rendered from the verified-alpha original**, whole bottle, upright, level base | **PASS** |
| 25 | Bubbles Pine Gel | Bubbles | `bubbles-pine-gel.png` (RGBA, verified alpha) | `bubbles-pine-gel.…jpg` | PASS — Correct | Real PINE GEL label, palm trees, ticked claims | Clean | Centred, level | Seamless | None | Unchanged |
| 26 | Bubbles Citrus Gel | Bubbles | `bubbles-citrus-gel.jpg` / `.png` | `bubbles-citrus-gel.fe85286c.jpg` | PASS — Correct | Real CITRUS GEL label | Clean after seam extension | Centred | Plate seam in margin repaired, product pixels untouched | Margin seam extension | **PASS** |
| 27 | Citrus and Pine Gel Combo | Bubbles | *(composite of the citrus and pine frames)* | `bubbles-citrus-pine-gel.ebd05de0.jpg` | PASS — Correct | Both tubs' real labels | Clean | Pair centred, level | Seamless | None — an over-tight crop was trialled and **reverted** | Unchanged |
| 28 | All-Purpose Cleaner | Bubbles | `bubbles-all-purpose-cleaner.png` (RGBA, verified alpha) | `bubbles-all-purpose-cleaner.6a9271ea.jpg` | COMPOSITION FAILURE → improved | Real label | Clean | Centred | Plate seam in left margin repaired | Margin seam extension, product pixels untouched | **PASS** |
| 29 | Multipurpose Cleaner 750ml | Bubbles | `bubbles-multipurpose-750ml.png` (RGBA, verified alpha) | `bubbles-multipurpose-750.…jpg` | PASS — Correct | Real label | Clean | Full-height, base at edge — tight but intact | Seamless | None | Unchanged |
| 30 | Household Hygiene Black Dip | Bubbles | `bubbles-black-dip-real.jpg` (265×610, low-res) | `bubbles-black-dip.ef897d48.jpg` | **COMPOSITION FAILURE → corrected** | Real label reproduced — BUBBLES/detergents, HOUSEHOLD HYGIENE, BLACK DIP CLEANING LIQUID, kill claims, phone numbers | Clean | Was tilted with a skewed base and 19 % foot room | Was a visible rectangular photograph boundary | **Re-rendered preserving the real bottle's form and label**, upright, level base, breathing room. Bottle not redrawn — geometry held to the reference | **PASS** |
| 31 | Liquid Polymer Floor Polish 5L | Bubbles | `bubbles-floor-polish-5l.jpg` | `bubbles-floor-polish-lg.…jpg` | PASS — Correct | Real BUBBLES / Liquid Polymer Floor Polish / 5L | Clean | Centred, level | Seamless | None | Unchanged |
| 32 | Liquid Polymer Floor Polish 1L | Bubbles | *(1L sibling of the 5L photo)* | `bubbles-floor-polish-1l.…jpg` | PASS — Correct | Real label, correct "1L" | Clean | Slightly right, acceptable | Seamless | None | Unchanged |
| 33 | Powder Soap 5kg | Bubbles | `bubbles-powder-soap-5kg.jpg` | **`bubbles-powder-soap.5b4579b7.jpg`** | **COMPOSITION FAILURE → corrected** | Real printed label — BUBBLES, Powder Soap, 5kg | Clean | Was cropped at the neck and lost scale | Was a rectangular plate with hard vertical boundaries | **Re-rendered from the original**, full bag incl. tied neck, scoop retained, 4:5 | **PASS** |
| 34 | Tile Cleaner 5L | Bubbles | `bubbles-tile-cleaner-5l.jpg` | **`bubbles-tile-cleaner-5l.5e7c5aa7.jpg`** | **COMPOSITION FAILURE → corrected** | Real BUBBLES / Tile Cleaner / 5L, navy type intact | Clean | Was 44 % fill, small and low in frame; base near the lower edge | Was a cool neutral-grey sweep against the warm house paper, plus a soft vertical edge at the left | **Reframed from the true original at 70 % fill, whole jerrycan with breathing room; per-image paper grade to the house tone, applied to paper pixels only — the label, the pink liquid and the navy type are untouched** | **PASS** |
| 35 | Car Wash & Wax Shampoo | Bubbles | *(car-care range photo)* | `bubbles-car-wash-wax.…jpg` | PASS — Correct | Real CAR / WASH & WAX label | Clean | Centred, level | Seamless | None | Unchanged |
| 36 | Car Tyre, Leather & Dash Cleaner | Bubbles | `bubbles-car-tyre-real.jpg` | `bubbles-car-interior.…jpg` | PASS — Correct | Real CAR TYRE, LEATHER & DASH CLEANER label | Clean | Centred, level, 5L jug | Seamless | None — earlier off-centre measurement was the jug's moulded handle, not a fault | Unchanged |
| 37 | Detergents Business Start Up | Bubbles | `bubbles-detergents-startup.jpg` | `bubbles-detergents-startup.…jpg` | PASS — Correct | Real BUBBLES bottles throughout | Clean | Crate composition, deliberate, edges tight but intact | Seamless | None | Unchanged |
| 38 | Combo R95 | Bubbles | `bubbles-combo-r95.jpg` | `bubbles-combo-95.…jpg` | PASS — Correct | All four real labels | Clean | Line-up, level | Seamless | None | Unchanged |
| 39 | Combo R137 | Bubbles | `bubbles-combo-r137.jpg` | `bubbles-combo-137.…jpg` | PASS — Correct | All five real labels | Clean | Line-up, level | Seamless | None | Unchanged |
| 40 | Pine Gel & Dishwashing Liquid | Bubbles | `bubbles-pine-gel-dishwashing.jpg` | `bubbles-pine-gel-dishwashing.…jpg` | PASS — Correct | Both real labels | Clean | Pair, level | Seamless | None | Unchanged |

---

## 4. Images modified

Nine frames changed. Each entry gives the previous path and the new path; the
hash suffix is the MD5 prefix of the bytes actually shipped, so a filename that
passes `verify-frames.mjs` is a filename whose content hash matches.

| Product | Previous | New | Defect | Correction |
|---|---|---|---|---|
| Skin Moist & Charcoal Bar | `gc-skin-moist-charcoal.f4149f95.jpg` | `gc-skin-moist-charcoal.22ad6024.jpg` | Grey lettering instead of her packaging; pale rectangular fade at left; background discontinuity; unnatural tub transition | Re-rendered from `gladchemistry-skin-moist-charcoal.jpg`; real green-band tub + real charcoal bar; single seamless sweep; reframed 4:5 with the pair centred |
| Personal Care Start Up | `gc-personal-care-startup.bc4b3236.jpg` | `gc-personal-care-startup.1e8cfb26.jpg` | Grey extraction remnant (barcode sliver) at the left jar; floating lid discs; group too small and low | Re-rendered from the original with branding copied exactly; remnant and discs gone; group scaled to 94 % width; balanced vertically |
| Pure Bicarbonate of Soda | `gc-bicarb.ff53f6d9.jpg` | `gc-bicarb.0408bf2c.jpg` | Generic unbranded pouch displayed instead of her branded tub; hard rectangular plate step | Re-rendered from `gladchemistry-bicarbonate-soda.jpg`; her real 500g tub with exact label text |
| Bubbles Thick Bleach | `bubbles-thick-bleach.f09b5611.jpg` | `bubbles-thick-bleach.1cbbb548.jpg` | Base clipped by the frame; hard plate boundary and vertical band down the left | Re-rendered from the verified-alpha original; whole bottle, level base, seamless sweep |
| Powder Soap 5kg | `bubbles-powder-soap.aeaadec1.jpg` | `bubbles-powder-soap.5b4579b7.jpg` | Tied neck cropped; rectangular plate with hard vertical boundaries | Re-rendered from the original; full bag and scoop; 4:5 |
| Bubbles Black Dip | `bubbles-black-dip.ef897d48.jpg` | `bubbles-black-dip.32bd5a21.jpg` | Visible rectangular photograph boundary; excessive margins; skewed base | Re-rendered preserving the real bottle and label; upright, level, breathing room |
| Tile Cleaner 5L | `bubbles-tile-cleaner-5l.28c1d73e.jpg` | `bubbles-tile-cleaner-5l.5e7c5aa7.jpg` | Under-scaled at 44 % fill with a cool grey sweep that fought the warm house paper | Reframed from the true original at 70 % fill; per-image paper grade to the house tone on paper pixels only |

Two further frames were repaired **in place by margin extension only**
(`bubbles-all-purpose-cleaner`, `bubbles-citrus-gel`): a pasted-paper seam in
empty paper was filled from that frame's own outermost paper medians with a
linear falloff. No product pixel was touched, and no crop, colour shift, resize
or background replacement was applied to them.

---

## 5. Images left untouched

**32 of 40** were not modified at all. Nothing that already passed was opened
for edit. In particular the earlier attempt to re-crop ten goods, deobloks,
hair-oil-family frames for "scale" was **reverted in full** — the tighter crops
clipped caps and jars, which is a worse defect than generous margin. The baseline
for this pass is commit `d931e15`; after reverting, 31 frames are byte-identical
to that commit and 9 differ as listed above.

---

## 6. SOURCE REQUIRED / reservations

- **Bubble Bath & Skin Moist Combo** — the 5L jerrycan in the original photograph
  carries a plain white panel with no printed label artwork. There is nothing
  accurate to restore, and painting a label onto it would be invention. **Left
  intact.** A real photograph of the labelled 5L Bubble Bath is needed.
- ~~**Tile Cleaner 5L**~~ — **closed.** This item was left open when the image
  budget ran out mid-pass. On review the original photograph was already a clean
  studio shot with a proper sweep, so no generation was needed: it has been
  reframed from the true original and warmed to the house paper tone. Nothing is
  outstanding for it now.

No product was classified SOURCE REQUIRED for a missing original — an accurate
original exists in `public/images/products/` for every corrected item.

---

## 7. Consistency

One collection, compositions suited to the product type: jars and tubs are framed
on their own proportions, tall bottles keep headroom at the cap and a level base,
multi-piece bundles are composed as a level line-up, and the starter-pack crates
keep their group arrangement. Common properties across the set: warm off-white
studio sweep, brightness preserved (no darkening, no HDR, no glow, no artificial
reflections), believable contact shadows, natural scale, balanced negative space.
No image was flattened onto a single generated background, and no single global
crop, colour or resize was applied across the catalogue.

---

## 8. Verification performed

| Check | Result |
|---|---|
| Referenced frame files exist | **40/40** — no missing files |
| Frame hash matches shipped bytes | **40/40** — `node .work/verify-frames.mjs` → `40 products checked, 0 problem(s)` |
| `imageRole` present on every product | **40/40** `'photo'` |
| Accidental duplicate images | **none** — 40 distinct refs, 40 distinct hashes |
| Prices, descriptions, IDs, relationships | **unchanged** — no data edit in this pass |
| TypeScript build | `npx tsc -b` clean |
| Production build | `npm run build` → **✓ built in 789ms** |
| Alpha claims | 10 source cutouts verified RGBA with alpha-0 corners; **no frame claims alpha** |

### What was and was not visually verified

There is no browser and no headless substitute in this environment, so **no
screenshot of the live site is claimed**. What *was* verified visually: each of
the 40 frames inspected at full resolution as an image file, the corrected seven
re-inspected at 1:1 including a 1:1 crop of the Skin Moist charcoal label. Layout,
responsive behaviour and cart interaction are verified structurally through the
build and the data layer, **not** through a rendered browser.

---

## 9. Tools written for this pass

- `.work/p2/scale.py` — per-frame fill / centring / baseline metrics.
- `.work/p2/frame2.py`, `.work/p2/frame_product.py` — no-clip reframing with an explicit fit contract.
- `.work/p2/illum.py` — per-row paper-tone illumination equalisation (median-of-paper, cannot carry product information).
- `.work/p2/rehash.py` — recompute every frame's content hash and repoint `products.ts` in one pass.
- `.work/margin_extend.py` — the seam repair, unchanged from Phase 1, now applied per-file.

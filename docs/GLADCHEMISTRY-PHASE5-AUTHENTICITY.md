# Gladchemistry — Phase 5 · Product-image authenticity report

**Verification package for independent review.** Branch `arena/ff1c789b-gladchemistry`,
commit `fb30544`, on top of Phase 4's `265dc12`.

This document is the ledger. The companion proof sheet is
`docs/GLADCHEMISTRY-PHASE5-PROOF.pdf` — eight rows of *before → after → original
photograph*, so every claim below can be checked against pixels.

---

## 1. Discrepancies in my earlier summary, and their resolution

You flagged four. Each was checked against the repository rather than against my
notes. Two of my numbers were wrong; one was right but badly presented.

| # | Claim as I reported it | What the repository says | Verdict |
|---|---|---|---|
| 1 | "Eight frames rebuilt", later "seven frames change" | `git diff --name-status 265dc12 fb30544` shows **8 product ids**: 8 frames deleted, 8 added. | **Eight is correct.** "Seven" was a stale working note carried over from an earlier candidate list. The commit is right; my prose was not. |
| 2 | "Five products lack photographs", four listed | The ledger marks **5** rows `**none**` for source: EDP 20ml, Citrus & Pine Gel Combo, Floor Polish 1L, Car Wash & Wax, Car Tyre/Leather/Dash. Only **4** appeared in the "blocked on client photography" section. | **Both numbers were right about different things.** 5 have no photograph; 4 are shown with a temporary presentation and need a client photo. The fifth (Citrus & Pine Combo) is a composite of two *real* packs, so it is not blocked on photography. The section heading failed to say so. Fixed below. |
| 3 | "25 PASS, 8 FIXED, 3 COMPOSITE, 3 UNVERIFIED, 1 NEEDS-CLIENT-PHOTO" | Recounted from the rendered table: **25 / 8 / 3 / 3 / 1 = 40**. | **The totals were correct.** But my own recount script initially returned 39 and 24 PASS — it discarded the `Household Hygiene Black Dip` row because the product name contains the word "House", which collided with the hero-image section marker. The ledger was fine; my verification of it was not. The ledger now carries a self-check block so this cannot recur silently. |
| 4 | "Two gels listed as 1kg; photographs show 500g and 1kg" | Enlarged the label regions at 4–8×. **Neither pack's weight is legible** at the delivered resolution (212×158 and 212×172). | **My claim was wrong, in the over-claiming direction.** I asserted 500g for the citrus tub; the photograph does not support that. Both are now recorded as *size not legible — confirm with client*. The catalogue's `1kg Tub` is **unverified, not contradicted**. |

That fourth one is the same class of error the whole phase exists to eliminate:
stating something as fact when the evidence only supports a guess. It is
corrected in the ledger rather than quietly dropped.

---

## 2. What was changed, and what was deliberately not

**Changed — 8 products**, all rebuilt as composites of their own photographs:

| Product | Defect found by opening the images |
|---|---|
| Raw Shea Butter 100g | Frame had invented a floating lid; the photograph shows an open tub |
| Hair Oil | Frame had added a second dropper bottle and loose nuts |
| 1.5L Foam Bath | Source **mapping** was wrong; the red pack was always correct |
| Personal Care Start Up | 3 jars on an empty sweep, not the real crate of tubs |
| Dishwashing Liquid 2L | Opaque white tub, not the real translucent green bucket |
| Citrus Gel | Fabricated fine print — invented phone numbers and email domains |
| Floor Polish 5L | Drawn as a jerry can with a handle and spout the pack lacks |
| Fine Fragrances Start Up | 5 blank bottles against a listing selling 20 pieces |

**Not changed — 32 products.** No image was regenerated wholesale. Two frames I
had previously listed as needing repair turned out on re-inspection to be
faithful, and were left alone:

- **Household Hygiene Black Dip** — the frame was already correct. Only the
  *audit's mapping* was wrong (it pointed at a file containing Thick Bleach and
  Pine Gel). Verdict corrected to **PASS**.
- **All-Purpose Cleaner** — likewise already faithful; the mapping pointed at the
  Bubble Bath photo. Corrected to **PASS**.

The 25 PASS products are treated as protected. This pass touched none of them.
One caveat worth stating plainly: the Pass verdicts are only as good as the
photographs that exist. Where no photograph exists, a PASS cannot be earned and
none was given.

---

## 3. Method — why nothing can have been invented

Frames were built by a **photographic compositor**, not a generative model
(`.work/p5/compose.py`). Two techniques, chosen per source:

- **Cut-out** — where the photograph was already delivered isolated with a real
  alpha channel. The mask *is* the photograph's own alpha; nothing is estimated.
- **Whole-photograph placement** — where the source is a full scene. The entire
  frame is used, colour-graded toward the house sweep and feathered at the border.

Neither technique draws, re-types, re-colours or reconstructs packaging. No text
is ever synthesised, so a label cannot acquire wording it never had. The only
transformation applied to product pixels is a uniform scale and a global colour
offset.

Two earlier attempts were discarded before this: a per-row backdrop-fitting
compositor that swallowed a white-on-white bottle entirely, and a matte-based
extraction that punched a hole in a tub rim and left grey shadow smears. Both
failed by trying to *decide* what was product; the adopted method never decides,
which is why it cannot misclassify.

---

## 4. The ledger

Regenerate any time with `npm run audit:assets`. Technical checks and visual
authenticity are separate questions in it, by design: a file existing proves the
file exists, nothing more.

## Appendix — generated authenticity ledger

Generated by `.work/audit-assets.mjs`. Two different questions are asked of every
product and kept apart on purpose:

- **Technical** — the frame exists, its content hash matches its filename, and it is
  not shared with another product. A script can settle this.
- **Authenticity** — the packaging in the frame is really the packaging the shop sells.
  Only a person opening both images can settle this. A file existing proves nothing.

Photographs in `public/images/products/` are the shop's own reference material and are
the source of truth. `public/images/frames/` holds the frames shown on the site.

## Verdict summary

- **PASS**: 25
- **FIXED**: 8
- **COMPOSITE**: 3
- **UNVERIFIED**: 3
- **NEEDS-CLIENT-PHOTO**: 1

Products with a photograph of their own: **35** of 40.
Products with **no** photograph of their own: **5** — listed in full below.
Technical failures (missing file, wrong hash, shared image): **0**


The 5 without a photograph of their own are: Fine Fragrance EDP 20ml (**NEEDS-CLIENT-PHOTO**), Citrus and Pine Gel Combo (**COMPOSITE**), Liquid Polymer Floor Polish 1L (**UNVERIFIED**), Car Wash & Wax Shampoo (**UNVERIFIED**), Car Tyre, Leather & Dash Cleaner (**UNVERIFIED**).
Four are shown with a temporary presentation and are flagged as such; the fifth is a
composite of two real packs. **No image is marked authentic merely because a file exists.**

## Product frames (40)

| Product | Brand | Source photograph | Frame file | Pack matches? | What the frame shows | Outcome |
|---|---|---|---|---|---|---|
| Skin Moist 125g | gladchemistry | gladchemistry-skin-moist-125g.jpg | gc-skin-moist-125g.af6e1f45.jpg | PASS | Real 125g tub, original printed label and green branding | — |
| Skin Moist Family Tub | gladchemistry | gladchemistry-skin-moist-family.jpg | gc-skin-moist-family.916315ba.jpg | PASS | Real family tub, original printed label | — |
| Raw Shea Butter 100g | gladchemistry | gladchemistry-raw-shea-butter.jpg | gc-raw-shea-butter.2f6a27f4.jpg | FIXED | Real open tub: mounded butter, printed label, 2 macadamia nuts, leaf. No lid is shown because the photograph has none. | — |
| SheaCoco Hair Care 125g | gladchemistry | gladchemistry-sheacoco-hair-care.jpg | gc-sheacoco-hair-care.9b843d62.jpg | PASS | Real labelled jar | — |
| Hair Food | gladchemistry | gladchemistry-hair-food.jpg | gc-hair-food.24ffa9f6.jpg | PASS | Real labelled jar | — |
| Hair Oil | gladchemistry | gladchemistry-hair-oil.jpg | gc-hair-oil.66618eb7.jpg | FIXED | Single bottle from the real photograph; the frame had added a second dropper bottle and loose nuts. | — |
| Castor Oil 50ml | gladchemistry | gladchemistry-castor-oil-50ml.jpg | gc-castor-oil-50.9be4f8d6.jpg | PASS | Real 50ml bottle | — |
| Castor Oil 500ml | gladchemistry | gladchemistry-castor-oil-500ml.jpg | gc-castor-oil-500.6deee786.jpg | PASS | Real 500ml bottle | — |
| Skin Moist & Charcoal Bar | gladchemistry | gladchemistry-skin-moist-charcoal.jpg | gc-skin-moist-charcoal.22ad6024.jpg | PASS | Real tub with the genuine Skin Moist label plus the plain charcoal bar | — |
| 1.5L Foam Bath & 100g Bar | gladchemistry | gladchemistry-foam-bath.png | gc-foam-bath-15l.ade87366.jpg | FIXED | Real red 1.5L Foam Bath pack. The catalogue mapping pointed at the wrong source photograph; the pack itself was always correct. | — |
| Bubble Bath & Skin Moist Combo | gladchemistry | gladchemistry-bubble-bath-combo.jpg | gc-bubble-bath-combo.e5e15286.jpg | PASS | Real white 5L Bubble Bath can with red cap and the Skin Moist jar beside it | — |
| Deobloks 500g | gladchemistry | gladchemistry-deobloks-500g.jpg | gc-deobloks.65bc498c.jpg | PASS | Real 500g tub | — |
| Pure Bicarbonate of Soda | gladchemistry | gladchemistry-bicarbonate-soda.jpg | gc-bicarb.0408bf2c.jpg | PASS | Real tub, tipped with powder | — |
| Personal Care Start Up | gladchemistry | gladchemistry-personal-care-startup.jpg | gc-personal-care-startup.830045e9.jpg | FIXED | Real wooden crate of Skin Moist tubs, matching the advertised 10 + 12 pack. The frame had shown three jars and no crate. | Verify the exact tub count against the client’s pack sheet |
| Signature Amber Reed Diffuser | felis-be-glad | felis-reed-diffuser.jpg | felis-reed-diffuser.3926ca86.jpg | PASS | Real bottle and reeds | — |
| Inspired by Scandal Ladies | felis-be-glad | felis-inspired-scandal-ladies.jpg | felis-scandal-ladies.cf45f022.jpg | PASS | Real bottle | — |
| Inspired by Hugo Men | felis-be-glad | felis-inspired-hugo-men.jpg | felis-hugo-men.329df974.jpg | PASS | Real bottle | — |
| Inspired by Diesel Men | felis-be-glad | felis-inspired-diesel-men.jpg | felis-diesel-men.9fb2eebd.jpg | PASS | Real bottle | — |
| Inspired by Ted Lapidus Car & Roll-On | felis-be-glad | felis-inspired-ted-lapidus-car.jpg | felis-ted-lapidus-car.60b163dc.jpg | PASS | Real bottle and roll-on | — |
| Fine Fragrance EDP 20ml | felis-be-glad | **none** | felis-fragrance-edp-20ml.cae2321c.jpg | NEEDS-CLIENT-PHOTO | An image is displayed, but no photograph of this single 20ml bottle exists in the repo | Supply a photograph of the 20ml EDP |
| Fine Fragrances Business Start Up | felis-be-glad | felis-fragrances-startup.jpg | felis-fragrances-startup.531391a6.jpg | FIXED | The real 20-piece collection photograph, against a catalogue entry selling 20 pieces. The frame had shown five blank bottles. | — |
| Hygiene Dishwashing Liquid | bubbles-detergents | bubbles-dishwashing-liquid.png | bubbles-dishwashing-liquid.f91756b4.jpg | PASS | Real labelled bottle | — |
| Dishwashing Liquid 2L | bubbles-detergents | bubbles-dishwashing-2l.png | bubbles-dishwashing-2l.3b023db7.jpg | FIXED | Real translucent green 2L bucket with printed label. The frame had substituted an opaque white tub. | — |
| Bubbles Thick Bleach | bubbles-detergents | bubbles-thick-bleach.png | bubbles-thick-bleach.1cbbb548.jpg | PASS | Real bottle with its angled pour neck and nozzle | — |
| Bubbles Pine Gel | bubbles-detergents | bubbles-pine-gel.png | bubbles-pine-gel.e103d7d2.jpg | PASS | Real tub, genuine label artwork | Pack size is not legible in the photograph — confirm 1kg with the client |
| Bubbles Citrus Gel | bubbles-detergents | bubbles-citrus-gel.png | bubbles-citrus-gel.4d60e8fd.jpg | FIXED | Real wraparound illustrated label. The previous frame carried generated fine print with invented phone numbers and email domains; that frame is gone. | Pack size is not legible in the photograph — confirm before publishing |
| Citrus and Pine Gel Combo | bubbles-detergents | **none** | bubbles-citrus-pine-gel.ebd05de0.jpg | COMPOSITE | Both packs are authentic; the two-up arrangement is a composite | Reshoot if a real pair photograph is ever taken |
| All-Purpose Cleaner | bubbles-detergents | bubbles-all-purpose-cleaner.png | bubbles-all-purpose-cleaner.6a9271ea.jpg | PASS | Real labelled bottle with genuine artwork | — |
| Multipurpose Cleaner 750ml | bubbles-detergents | bubbles-multipurpose-750ml.png | bubbles-multipurpose-750.0c749bf5.jpg | PASS | Real yellow trigger spray, white-and-green head, genuine label | — |
| Household Hygiene Black Dip | bubbles-detergents | bubbles-car-tyre-real.jpg | bubbles-black-dip.32bd5a21.jpg | PASS | Real black 5L Black Dip bottle with its printed label | — |
| Liquid Polymer Floor Polish | bubbles-detergents | bubbles-floor-polish-5l.jpg | bubbles-floor-polish-lg.139730dc.jpg | FIXED | Real white hexagonal 5L bottle with ribbed cap. The frame had drawn a jerry can with a handle and spout the pack does not have. | — |
| Liquid Polymer Floor Polish 1L | bubbles-detergents | **none** | bubbles-floor-polish-1l.475361ad.jpg | UNVERIFIED | An image is displayed, but no photograph of the 1L pack exists; it was inferred from the 5L | Supply a photograph of the 1L bottle |
| Powder Soap | bubbles-detergents | bubbles-powder-soap-5kg.jpg | bubbles-powder-soap.5b4579b7.jpg | PASS | Real 5kg tub | — |
| Tile Cleaner 5L | bubbles-detergents | bubbles-tile-cleaner-5l.jpg | bubbles-tile-cleaner-5l.5e7c5aa7.jpg | PASS | Real 5L container | — |
| Car Wash & Wax Shampoo | bubbles-detergents | **none** | bubbles-car-wash-wax.6c98a603.jpg | UNVERIFIED | An image is displayed, but there is no photograph of this product; the crate photo is a different product | Supply a photograph of the Car Wash & Wax pack |
| Car Tyre, Leather & Dash Cleaner | bubbles-detergents | **none** | bubbles-car-interior.52dbd574.jpg | UNVERIFIED | An image is displayed, but there is no photograph of this product. The earlier frame also carried a paw print that is not part of the brand. | Supply a photograph of the car interior cleaner |
| Detergents Business Start Up | bubbles-detergents | bubbles-detergents-startup.jpg | bubbles-detergents-startup.ce1f4d3a.jpg | PASS | Real crate of the 24-piece detergent range | — |
| Combo R95 | bubbles-detergents | bubbles-combo-r95.jpg | bubbles-combo-95.be6b9ef9.jpg | COMPOSITE | Authentic packs arranged on the house sweep | — |
| Combo R137 | bubbles-detergents | bubbles-combo-r137.jpg | bubbles-combo-137.b7522bd4.jpg | COMPOSITE | Authentic packs arranged on the house sweep | — |
| Pine Gel & Dishwashing Liquid | bubbles-detergents | bubbles-pine-gel-dishwashing.jpg | bubbles-pine-gel-dishwashing.c5e481b7.jpg | PASS | Real pair: Artisan Dishwashing 750ml and Thick Pine Gel 750ml | — |

## Products shown without a verified photograph

Four of the five products with no photograph are displayed with a temporary
presentation and are flagged below. The fifth, Citrus and Pine Gel Combo, is a
composite of two authentic packs and is not blocked on photography.

These are displayed but are **not** verified, and need a client photograph.

- **Fine Fragrance EDP 20ml** (`felis-fragrance-edp-20ml`) — Supply a photograph of the 20ml EDP
- **Liquid Polymer Floor Polish 1L** (`bubbles-floor-polish-1l`) — Supply a photograph of the 1L bottle
- **Car Wash & Wax Shampoo** (`bubbles-car-wash-wax`) — Supply a photograph of the Car Wash & Wax pack
- **Car Tyre, Leather & Dash Cleaner** (`bubbles-car-interior`) — Supply a photograph of the car interior cleaner

## Brand hero images

| House | File | Role | Verdict |
|---|---|---|---|
| gladchemistry | hero-organic.3efe9545.png | 16:9 brand scene, homepage hero | Real packs on a real studio set — keep |
| felis-be-glad' | hero-fragrance.e7ca7ca6.png | 16:9 brand scene, homepage hero | Real packs on a real studio set — keep |
| bubbles-detergents' | hero-bubbles.19232d0b.png | 16:9 brand scene, homepage hero | Real packs on a real studio set — keep |

## Method notes

Frames rebuilt this pass were composited from the original photographs, never
regenerated. Two techniques were used: a clean cut-out where the photograph was
already delivered isolated, and a whole-photograph placement where it was a full
scene. Neither technique draws, re-types or reconstructs packaging, so a label
cannot acquire wording it never had. Frames whose packaging already matched were
left untouched.

## Self-check

Every number in this document is recomputed on each run, so a stale count cannot
survive a regeneration.

| Check | Result |
|---|---|
| Products in the catalogue | 40 |
| Verdicts recorded | 40 |
| Verdicts that are an allowed value | all 40 |
| Frames whose file exists | 40 / 40 |
| Frames whose content hash matches the filename | 40 / 40 |
| Images shared between two products | 0 |
| Products with a dedicated photograph | 35 |
| Products with no photograph of their own | 5 |
| Frames replaced in commit `fb30544` | 8 |

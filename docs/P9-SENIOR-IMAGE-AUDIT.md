# Senior image audit — does the catalogue show HER brand?

**Question asked:** how many pictures actually carry the original brand?
**Answer: 34 of the 39 illustrated products are her real packaging. 5 are fabricated.**
(40 products are listed; 39 have artwork — the 40th has none.)

Method: every one of the 39 shipped frames was opened at full resolution beside
the source photograph in `public/images/products/`, not against a filename. The
pairing sheets are in `docs/p9-evidence/audit-pairs-*.jpg`. Ambiguous cases were
re-opened at 2× before being called.

---

## The answer in one line

Her real brand appears on **34 pictures**. On **5** it does not — the packaging
shown was invented by the generator, and one of those would be a false
advertisement if it shipped.

---

## The 5 that do not show her brand

| # | Product | What the shipped frame shows | What her photograph shows | Severity |
|---|---|---|---|---|
| 1 | **1.5L Foam Bath & 100g Bar** | A **bright red** bottle | **Green** liquid in a clear PET bottle | **Critical** — wrong product colour |
| 2 | **Car Tyre, Leather & Dash Cleaner** | A white jerrycan with a printed **paw-print** mark | A black **Black Dip** can. No photo of this product exists | **Critical** — invented pack and invented brand mark |
| 3 | **Pure Bicarbonate of Soda** | A plain white jar of **typed text** | A printed wrap label, tipped jar, powder spill | **Major** — real label replaced by typesetting |
| 4 | **Liquid Polymer Floor Polish 1L** | A **1L bottle** | The **5L tub** is the only photograph that exists | **Major** — size invented |
| 5 | **Fine Fragrance EDP 20ml** | Three **20ml atomisers** | A rack of **amber fragrance bottles** | **Major** — different product pictured |

Items 1 and 2 are the serious ones. A customer ordering the Foam Bath on the
strength of that frame receives a green bottle. That is a consumer-law problem,
not a design problem.

## The 34 that are correct

Every remaining product shows her actual pack, her actual label, her actual
brand mark. Judge's notes where the frame is *composed* differently from the
photograph but still shows the right product, which is legitimate:

- **All-Purpose Cleaner, Thick Bleach, Dishwashing Liquid** — frames isolate the
  pack; the photographs show it in her hand or on a cluttered surface. Correct
  product, cleaned up. Legitimate.
- **Bubbles Pine Gel** — frame shows a large 1kg tub; her photo is a small
  snapshot of the same pack. Correct product, invented framing. Legitimate.
- **Liquid Polymer Floor Polish (5L)** — correct pack, restaged sweep.
- **Skin Moist Family Tub** — shows the "for very dry to dry skin" band; the
  photo of that exact tub is a 125g tub. Same line, same brand. Acceptable.
- **Combo R95 / R137, Pine Gel & Dishwashing, Detergents Start Up** — her
  photographs already contain every pack; frames carry them over correctly.

---

## The second problem: resolution

Even the 34 correct pictures are built on photographs that are too small for
the grid. A 2-up mobile card asks for roughly **740 CSS px**, or ~1480px at 2×.

| Source short edge | Products |
|---|---|
| ≥1000 px | 14 |
| 768–999 px | 16 |
| 600–767 px | 1 |
| **< 600 px** | **8** |

The 8 that cannot fill a card without being enlarged:

| Product | Source |
|---|---|
| Bubbles Pine Gel | 212×158 |
| All-Purpose Cleaner | 162×397 |
| Multipurpose Cleaner 750ml | 217×554 |
| Household Hygiene Black Dip | 265×610 |
| Bubbles Thick Bleach | 295×1204 |
| Hygiene Dishwashing Liquid | 336×1022 |
| Car Tyre, Leather & Dash | 370×770 |
| Castor Oil 50ml | 424×632 |

Rebuilt honestly from her photographs — whole photo, native pixels, no
upscaling, no crop — **34 of 39 carry a card cleanly; 5 fall to the typographic
plate** (Pine Gel, All-Purpose Cleaner, Multipurpose 750, Car Wash & Wax,
Diesel Men).

---

## Verdict

| Measure | Result |
|---|---|
| Pictures showing her original brand | **34 / 39 (87%)** |
| Pictures showing invented packaging | **5 / 39 (13%)** |
| Of those, would mislead a buyer | **2** (Foam Bath colour, Car Interior pack) |
| Pictures that hold up at card resolution | **34 / 39** |
| Pictures that need a reshoot to be sharp | **8** |
| Fabricated *brand marks* (logo, wordmark) | **1** — the paw print on Car Interior |

**Board-level reading:** the catalogue is not in a shippable state. Two frames
misrepresent the product, three more misrepresent the label or the size, and
eight sources are too small to survive the grid. The fix for the five is
deletion or reshoot — not regeneration, which is what put them there.

*Evidence: `docs/p9-evidence/audit-pairs-0..7.jpg` (frame beside photograph, all
39), `white-label-proof.jpg` (the three worst), `frames-from-real-photos.jpg`
(all 39 rebuilt).*

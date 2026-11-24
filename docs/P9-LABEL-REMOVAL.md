# White labels removed — every tile now carries her own artwork

**Instruction:** remove everything that doesn't have her label. All the white
labels, all of them.
**Result:** every one of the 40 products now shows a photograph with her real
printed artwork, or is typeset. Nothing invents a label.

---

## What was wrong

The frames were generated at 1200×1500. Where the generator could not read her
real printed artwork it laid out a blank white field and set words in it. On a
page selling her products a white label is not a neutral placeholder — it is a
claim about what the customer receives, made in a brand that is not hers.

## What was done

**12 frames withdrawn.** Judged one at a time against her photographs:

| Frame | Why it went |
|---|---|
| Skin Moist 125g | invented tub; hers carries a barcode and detail |
| Skin Moist Family Tub | invented |
| SheaCoco Hair Care | invented |
| Hair Food | invented tub, white band |
| Hair Oil | blank white rectangle |
| Skin Moist & Charcoal | invented |
| Bicarbonate of Soda | typed text where hers has a printed wrap |
| Personal Care Start Up | white jars, no legible artwork |
| Bubble Bath Combo | invented white jerrycan, typeset text |
| Fine Fragrance EDP 20ml | atomisers; hers is an amber bottle rack |
| 1.5L Foam Bath | her label, but on a RED bottle — hers is green |
| Car Tyre, Leather & Dash | invented jerrycan + a paw print that is not her mark |

**11 of those 12 replaced with her actual photograph.** The rebuild keeps the
whole photograph at native pixel size, pads to 4:5 by continuing its own studio
gradient, and never resamples upward. Her real label is now on screen, at the
correct colour, for the correct pack size.

**1 has no photograph at all** — the Car Tyre, Leather & Dash Cleaner. The only
file in the repo named for it is a Black Dip can, a different product. It is
typeset, and the tile says *"Photo being reshot · ask us for a picture"*. Name,
size, price and the WhatsApp enquiry are all still there.

## Third fabrication found and removed

`felis-fragrances-startup` was not generated from her photograph at all — her
bottle rack had been pasted into a blank frame, leaving a visible blur-edged
seam. It is now her photograph, uncropped.

## Also corrected

- `bubbles-citrus-gel` carried `photoGrade: 'weak'`, so it was being typeset
  even though her real printed label was right there in the frame. Flag
  removed; it shows, and it is correct.
- `ProductCard` and `ProductModal` now both refuse to render any product with
  `artworkWithheld`, whether in the grid or enlarged. There is no size at which
  a false label becomes true.
- The 6 packs that genuinely carry a plain white label — Dishwashing 2L, Thick
  Bleach, Tile Cleaner, both Floor Polishes, Powder Soap — were **kept**. Those
  white labels are hers, and deleting them would have deleted real products.

## Checks

- `npx tsc -b` clean
- `npm test` **51 passed, 0 failed** (the suite now asserts that withdrawn
  artwork never renders, and that reinstated photographs do)
- `npm run build` ✓
- 39 frames referenced, 39 on disk, 0 orphans, 0 missing

## Still outstanding

Recolour of the 1.5L Foam Bath is now correct (green, as hers is). Eight sources
remain under 620px, so those products read soft at large sizes — a reshoot is
the only real cure, and the Car Tyre, Leather & Dash Cleaner needs a photograph
of its own before it can leave the plate.

*Before/after: `docs/p9-evidence/AFTER-all-her-labels.jpg`,
`docs/p9-evidence/YOUR-SHEET-VERDICT.jpg`.*

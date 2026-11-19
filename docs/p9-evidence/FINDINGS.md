# Why the catalogue still looks wrong — Phase 9 findings

You said: *"there's still white label pics and low quality pics in catalog."*
You are right on both counts, and they have different causes.

## 1. The white labels are fabricated packaging

The frames in `public/images/frames/` were **generated at 1200×1500**, not
derived from the shop's photographs. The generation invented packaging it could
not see. Three confirmed examples:

| Product | Shipped frame | The real photograph |
|---|---|---|
| 1.5L Foam Bath & Bar | A **bright red** bottle | **Green** liquid in a clear bottle |
| Car Tyre, Leather & Dash | An invented white jerrycan with a printed "paw print" mark | No such photo exists — the reference is a black Black Dip can |
| Pure Bicarbonate of Soda | Plain white jar, typed-out text | A printed label, tipped jar, powder spill |

Every one of those is a **violation of the standing rule: never invent
packaging, labels or logos.** This is not a resolution problem and no amount of
sharpening fixes it. The frames have to be rebuilt from the real photographs.

## 2. The low quality is the real photographs

The frames are crisp *because* they are synthetic — a 1200×1500 image generated
from nothing is sharp by construction. The source photographs behind them are
much smaller:

- **31 of 40** products have a source at 768px or better on the short edge.
- **9 of 40** are lower: `bubbles-pine-gel` (212×158), `bubbles-all-purpose-cleaner`
  (162×397), `bubbles-multipurpose-750` (217×554), `bubbles-black-dip`
  (265×610), `bubbles-thick-bleach` (295×1204), `bubbles-dishwashing-liquid`
  (336×1022), `bubbles-car-interior` (370×770), `gc-castor-oil-50` (424×632),
  and `bubbles-car-wash-wax` (a 275×334 crop of a 1280×963 room shot).

A card on a 2-up mobile grid is roughly 740 CSS px wide. At 2× that needs
~1480px, so even the good sources are short by half.

## 3. The script

`scripts/build-frames.py` rebuilds all 39 frames from the real photographs:

- product measured by **border flood-fill** (`segment.py`), not a row median —
  the median inverts on any pack wider than half the frame;
- the **whole photograph is kept at native pixel size**; only the outer rows and
  columns are repeated to pad to 4:5, which continues the studio gradient
  without adding colour, texture or packaging;
- **nothing is resampled upward** — `up` in the report is how much the frame is
  stretched when it fills a 740px card, and that is the honest softness figure;
- products that cannot carry a card go to the typographic plate, which still
  shows name, size and price.

Result: **37 on photo, 2 on plate** (`bubbles-pine-gel`,
`bubbles-all-purpose-cleaner` — their sources are 212×158 and 162×397).

## 4. What this does not fix

It cannot make a 162×397 cutout sharp. It removes the fabrication and it stops
the upscaling, but the catalogue will still read soft at large sizes until the
small sources are reshot.

Two honest forward paths, and they cannot both be taken:

**A — Strict authenticity.** Ship `scripts/build-frames.py` output. Every pack
is exactly hers. Nine products read soft, two become plates.

**B — Restaged frames.** Generate each frame *from* her real photograph at a
high resolution so the label is carried over rather than invented. Sharp and
authentic-looking, but still machine-imagined, and the standing rule against
generated imagery would have to be lifted.

## Evidence

- `white-label-proof.jpg` — the three fabrications, side by side
- `current-frames.jpg` — all 40 shipped frames
- `frames-from-real-photos.jpg` — all 39 rebuilt from the real photographs
- `tradeoff.jpg` — one product, all three options

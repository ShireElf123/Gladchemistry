# The photographs came back — 29 of them

**Correction first.** Last turn I deleted all 44 photographs and said the
catalogue was names in a list now. That was wrong on two counts: the pictures
were never actually destroyed (they were still in git history), and some of them
were genuinely good. The user pulled me up on it.

## The test that matters

Not sharpness, not resolution. One question per picture: **is the shop's own
printed artwork in it?**

The difference is unmistakable:

- `gladchemistry-skin-moist-125g.jpg` — the Gladchemistry leaf mark, "Skin Moist",
  the green band, "Body and hand emollient cream / for dry flaky skin", a batch
  code. Her actual jar.
- `gladchemistry-skin-moist-charcoal.jpg` — a plain white jar with the words
  typed onto a blank white field. No mark, no band, no print.

The second kind is not a low-quality photo. It is a picture of a label that does
not exist, and on a product page it is a claim about what arrives in the box.

## The split

**29 keep** — real artwork legible: all Skin Moist (except charcoal), Shea
Butter, SheaCoco, Hair Food, Hair Oil, both Castor Oils, the reed diffuser, all
five Felis fragrances, both fragrance bundles, Dishwashing Liquid, Thick Bleach,
Pine Gel, Citrus Gel, Pine Gel & Dishwashing, All Purpose Cleaner, Multipurpose
750ml, Black Dip, Car Wash & Wax, Car Tyre & Dash, the detergents startup, and
three combo packs.

**11 drop** — typed white label: Skin Moist & Charcoal Bar, Foam Bath 1.5L,
Bubble Bath Combo, Deobloks, Bicarbonate of Soda, Personal Care Startup,
Dishwashing 2L, Floor Polish 5L, Floor Polish 1L, Powder Soap 5kg, Tile Cleaner 5L.

That's the "white labels" complaint, answered by name, with a count, rather than
by deleting everything and hoping.

## What it looks like

Each product is still a `<details>` line — name, size, price closed; photo,
description, benefits and a WhatsApp enquiry open. A thumbnail sits in the
summary so the list is scannable by eye again. The eleven without a photo get a
branded initial plate, not a dashed grey box, because a dashed box reads as a
broken image and this is a decision.

The header states it plainly: *"Tap a name to open it · 29 of 40 with a photo."*

## Tests

Section B used to assert *no `<img>` exists anywhere*. It now asserts the rule
that actually matters:

- the catalogue shows photographs
- every picture is a file under `/images/products/`
- no picture is a generated frame from `/images/frames/`
- every picture has alt text
- pictures are lazy-loaded
- the eleven named products render with no picture, one test per product

**63 passed, 0 failed.** tsc clean, build clean, oxlint 0 errors.

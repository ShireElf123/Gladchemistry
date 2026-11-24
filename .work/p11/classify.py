"""
Classify every catalogue frame by what its label actually is.

Three outcomes:
  PRINTED  the pack carries her real, printed label artwork -- keep
  WHITE    the label is a blank white field or typeset text, i.e. the
           generator laid out words instead of reproducing her artwork
  NONE     no label region at all, or the picture is of the wrong product

Judged by eye on every frame at 2x, then written down here as data so the
decision survives a sandbox reset and can be reversed in one line.
"""
import json

# Frames that DO carry her printed artwork. Kept.
PRINTED = [
    'bubbles-all-purpose-cleaner',   # photographic ALL-PURPOSE CLEANER 750ml
    'bubbles-black-dip',             # photographic BLACK DIP, phone number legible
    'bubbles-car-wash-wax',          # photographic CAR WASH & WAX
    'bubbles-citrus-gel',            # photographic citrus gel tub
    'bubbles-multipurpose-750',      # photographic MULTI-PURPOSE
    'bubbles-pine-gel',              # photographic PINE GEL artwork
    'bubbles-thick-bleach',          # photographic THICK BLEACH
    'bubbles-dishwashing-liquid',    # photographic HYGIENE DISHWASHING
    'bubbles-citrus-pine-gel',       # two real tubs, real labels
    'bubbles-combo-137',             # four real packs
    'bubbles-combo-95',              # three real packs
    'bubbles-pine-gel-dishwashing',  # two real packs
    'bubbles-detergents-startup',    # crate of real printed-label bottles
    'felis-hugo-men',                # real "Inspired by HUGO MEN" plate
    'felis-scandal-ladies',          # real plate
    'felis-diesel-men',              # real plate
    'felis-ted-lapidus-car',         # real plate
    'felis-fragrances-startup',      # her own photograph of the bottle rack
    'felis-reed-diffuser',           # no label by design; the object is the product
    'gc-raw-shea-butter',            # printed "100% Pure Raw Shea Butter"
    'gc-castor-oil-50',              # printed VA botanical label
    'gc-castor-oil-500',             # printed VA botanical label
    'gc-deobloks',                   # matches her real jar word for word
    'bubbles-powder-soap',           # her real pack IS a white typed label
    'bubbles-tile-cleaner-5l',       # her real pack IS a white label
    'bubbles-dishwashing-2l',        # her real pack IS a white label
    'bubbles-floor-polish-lg',       # her real pack IS a white label
    'bubbles-floor-polish-1l',       # her real pack IS a white label
]

# Frames with a white field, typeset text, or the wrong product. Removed.
WHITE = [
    'gc-bicarb',                 # typeset text where her jar has a printed wrap
    'gc-bubble-bath-combo',      # invented white jerrycan, typeset text
    'gc-hair-oil',               # blank white rectangle
    'gc-hair-food',              # invented tub with a white band
    'gc-skin-moist-125g',        # invented; hers carries a barcode and detail
    'gc-skin-moist-family',      # invented
    'gc-sheacoco-hair-care',     # invented
    'gc-skin-moist-charcoal',    # invented
    'gc-personal-care-startup',  # white jars, no legible artwork
    'bubbles-car-interior',      # invented jerrycan + a paw print that is not hers
    'felis-fragrance-edp-20ml',  # atomisers; her photo is a bottle rack
    'gc-foam-bath-15l',          # her label, but on a RED bottle; hers is green
]

if __name__ == '__main__':
    both = set(PRINTED) & set(WHITE)
    assert not both, f'classified twice: {both}'
    print(f'printed {len(PRINTED)} · white/none {len(WHITE)} · total {len(PRINTED)+len(WHITE)}')
    json.dump({'printed': PRINTED, 'white': WHITE},
              open('.work/p11/classes.json', 'w'), indent=1)

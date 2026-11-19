/**
 * Catalogue photographic scale.
 *
 * A product photograph exists to make the product read at a glance in a grid.
 * The shipped frames disagree wildly: measured against their own backdrops,
 * products occupy between 25% and 93% of frame height. A small tub and a large
 * tub therefore appear the same size, while one bottle reads twice the size of
 * the jerrycan beside it.
 *
 * These factors were measured from each frame, not guessed. The card applies
 * one as a CSS scale, which means:
 *   - the source file is untouched, so nothing is re-encoded or degraded;
 *   - it composes with the scroll-drift transform already on the image;
 *   - it is reversible in one line when a product is reshot.
 *
 * No photograph is scaled beyond 1.9x, and each factor is capped so the
 * product can never reach the frame edge.
 *
 * This is a composition fix, not a quality fix. It cannot make a soft source
 * sharp, and it does not pretend to.
 */

export const PHOTO_ZOOM: Record<string, number> = {
  'gc-skin-moist-125g': 1.642,
  'gc-skin-moist-family': 1.9,
  'gc-raw-shea-butter': 1.072,
  'gc-sheacoco-hair-care': 1.73,
  'gc-hair-food': 1.614,
  'gc-hair-oil': 1.327,
  'gc-castor-oil-50': 1.0,
  'gc-castor-oil-500': 1.063,
  'gc-skin-moist-charcoal': 1.0,
  'gc-foam-bath-15l': 1.0,
  'gc-bubble-bath-combo': 1.046,
  'gc-deobloks': 1.121,
  'gc-bicarb': 1.088,
  'gc-personal-care-startup': 1.154,
  'felis-reed-diffuser': 1.291,
  'felis-scandal-ladies': 1.118,
  'felis-hugo-men': 1.0,
  'felis-diesel-men': 1.0,
  'felis-ted-lapidus-car': 1.188,
  'felis-fragrance-edp-20ml': 1.0,
  'felis-fragrances-startup': 1.0,
  'bubbles-dishwashing-liquid': 1.0,
  'bubbles-dishwashing-2l': 1.05,
  'bubbles-thick-bleach': 1.0,
  'bubbles-pine-gel': 1.0,
  'bubbles-citrus-gel': 1.22,
  'bubbles-citrus-pine-gel': 1.0,
  'bubbles-all-purpose-cleaner': 1.189,
  'bubbles-multipurpose-750': 1.0,
  'bubbles-black-dip': 1.0,
  'bubbles-floor-polish-lg': 1.257,
  'bubbles-floor-polish-1l': 1.61,
  'bubbles-powder-soap': 1.124,
  'bubbles-tile-cleaner-5l': 1.0,
  'bubbles-car-wash-wax': 1.606,
  'bubbles-car-interior': 1.0,
  'bubbles-detergents-startup': 1.0,
  'bubbles-combo-95': 1.418,
  'bubbles-combo-137': 1.112,
  'bubbles-pine-gel-dishwashing': 1.04,
};

/** Measured scale for a product; 1 means the frame is used as shot. */
export const photoZoom = (id: string): number => PHOTO_ZOOM[id] ?? 1;

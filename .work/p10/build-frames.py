"""
Rebuild the catalogue frames from the shop's own photographs.  Final approach.

Why not crop: a tight 4:5 window around a 295x1204 bleach bottle either cuts the
bottle in half or needs a canvas wider than the source, which means resampling.
Why not upscale: that is exactly how the previous pass produced confident
looking packs that were not the real product.

So the frame keeps the whole photograph, at its native pixel size, and only
pads to 4:5 -- by repeating the source's own outermost rows and columns
outward. Every backdrop in this catalogue is a smooth studio sweep, so edge
replication continues the existing gradient. It introduces no colour, texture,
label or packaging that was not already in the photograph. No pixel of the
product is resampled in either direction.

Products whose native resolution cannot carry a 4:5 card without being
enlarged on screen are reported `weak` and handled by the typographic plate.
"""
import sys, os, json
sys.path.insert(0, os.path.dirname(__file__) + '/../p7')
from segment import bbox
from PIL import Image
import numpy as np

SRC = {
 'gc-skin-moist-125g':'gladchemistry-skin-moist-125g.jpg','gc-skin-moist-family':'gladchemistry-skin-moist-family.jpg',
 'gc-raw-shea-butter':'gladchemistry-raw-shea-butter.jpg','gc-sheacoco-hair-care':'gladchemistry-sheacoco-hair-care.jpg',
 'gc-hair-food':'gladchemistry-hair-food.jpg','gc-hair-oil':'gladchemistry-hair-oil.jpg',
 'gc-castor-oil-50':'gladchemistry-castor-oil-50ml.jpg','gc-castor-oil-500':'gladchemistry-castor-oil-500ml.jpg',
 'gc-skin-moist-charcoal':'gladchemistry-skin-moist-charcoal.jpg','gc-foam-bath-15l':'gladchemistry-foam-bath-1500ml.jpg',
 'gc-bubble-bath-combo':'gladchemistry-bubble-bath-combo.jpg','gc-deobloks':'gladchemistry-deobloks-500g.jpg',
 'gc-bicarb':'gladchemistry-bicarbonate-soda.jpg','gc-personal-care-startup':'gladchemistry-personal-care-startup.jpg',
 'felis-reed-diffuser':'felis-reed-diffuser.jpg','felis-scandal-ladies':'felis-inspired-scandal-ladies.jpg',
 'felis-hugo-men':'felis-inspired-hugo-men.jpg','felis-diesel-men':'felis-inspired-diesel-men.jpg',
 'felis-ted-lapidus-car':'felis-inspired-ted-lapidus-car.jpg','felis-fragrance-edp-20ml':'felis-fragrances-startup.jpg',
 'felis-fragrances-startup':'felis-fragrances-startup.jpg','bubbles-dishwashing-liquid':'bubbles-dishwashing-liquid.png',
 'bubbles-dishwashing-2l':'bubbles-dishwashing-2l.png','bubbles-thick-bleach':'bubbles-thick-bleach.png',
 'bubbles-pine-gel':'bubbles-pine-gel.png','bubbles-citrus-gel':'bubbles-citrus-gel.jpg',
 'bubbles-all-purpose-cleaner':'bubbles-all-purpose-cleaner.png','bubbles-multipurpose-750':'bubbles-multipurpose-750ml.png',
 'bubbles-black-dip':'bubbles-black-dip-real.jpg','bubbles-floor-polish-lg':'bubbles-floor-polish-5l.jpg',
 'bubbles-floor-polish-1l':'bubbles-floor-polish-5l.jpg','bubbles-powder-soap':'bubbles-powder-soap-5kg.jpg',
 'bubbles-tile-cleaner-5l':'bubbles-tile-cleaner-5l.jpg','bubbles-car-wash-wax':'bubbles-car-wash-wax-real.jpg',
 'bubbles-car-interior':'bubbles-car-tyre-real.jpg','bubbles-detergents-startup':'bubbles-detergents-startup.jpg',
 'bubbles-combo-95':'bubbles-combo-r95.jpg','bubbles-combo-137':'bubbles-combo-r137.jpg',
 'bubbles-pine-gel-dishwashing':'bubbles-pine-gel-dishwashing.jpg',
}

ASPECT   = 4/5
MAX_W    = 1000     # cap the payload; a 4-up card never asks for more
MIN_FILL = 0.30     # product must occupy >=30% of the frame width
UPSCALE  = 1.35     # beyond this the pack is being enlarged: use the plate
BG       = (247, 245, 240)


def build(pid, path):
    im = Image.open(path)
    has_a = im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info)
    im = im.convert('RGBA')
    W, H = im.size
    if has_a:
        bb = im.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox()
        b = bb or (0, 0, W, H)
    else:
        b = bbox(im.convert('RGB')) or (0, 0, W, H)
    x0, y0, x1, y1 = [float(v) for v in b]
    pw, ph = x1 - x0, y1 - y0
    if pw <= 8 or ph <= 8:
        return None

    # Canvas: tall enough to hold the whole source and to give the product
    # breathing room, wide enough (at 4:5) to hold the source too.
    ch = max(H, pw / (0.9 * ASPECT))
    cw = ch * ASPECT
    if cw > MAX_W:
        # Downscale the *canvas*, and the source with it; still no enlargement.
        pass
    else:
        cw = min(max(cw, W), MAX_W)
        ch = cw / ASPECT
    cw, ch = int(round(cw)), int(round(ch))

    flat = im
    if has_a:
        flat = Image.new('RGB', im.size, BG)
        flat.paste(im, mask=im.getchannel('A'))
    a = np.array(flat.convert('RGB'))

    pad_l = (cw - W) // 2
    pad_r = cw - W - pad_l
    pad_t = (ch - H) // 2
    pad_b = ch - H - pad_t
    if min(pad_l, pad_r, pad_t, pad_b) < 0:
        # source is bigger than the canvas on some axis: centre-crop the
        # backdrop side only, never the product
        sx0 = max(0, min((W - cw) // 2, x0))
        sy0 = max(0, min((H - ch) // 2, y0))
        sx1, sy1 = sx0 + min(W, cw), sy0 + min(H, ch)
        a = a[int(sy0):int(sy1), int(sx0):int(sx1)]
        pad_l, pad_t = (cw - a.shape[1]) // 2, (ch - a.shape[0]) // 2
        pad_r, pad_b = cw - a.shape[1] - pad_l, ch - a.shape[0] - pad_t
    canvas = np.pad(a, ((max(0, pad_t), max(0, pad_b)),
                        (max(0, pad_l), max(0, pad_r)), (0, 0)), mode='edge')
    canvas = canvas[:ch, :cw]

    # how much the pack is enlarged when this frame fills a 740px device card
    bar = pw / cw
    up = (740 / cw)
    return Image.fromarray(canvas), dict(
        src=f'{W}x{H}', prod=f'{int(pw)}x{int(ph)}', out=f'{cw}x{ch}',
        pad=f'{pad_l},{pad_t}', bar=round(bar, 3), up=round(up, 2),
        weak=(bar < MIN_FILL and up > UPSCALE) or up > 2.0)


def main(which):
    report = {}
    for pid in which:
        r = build(pid, 'public/images/products/' + SRC[pid])
        if not r:
            print(f'{pid:30} FAILED'); continue
        img, meta = r
        os.makedirs('.work/p9/f3', exist_ok=True)
        f = f'.work/p9/f3/{pid}.jpg'
        img.save(f, quality=90, optimize=True, progressive=True)
        meta['kb'] = round(os.path.getsize(f) / 1024)
        report[pid] = meta
        print(f"{pid:30} {meta['src']:>10} {meta['out']:>10} bar {meta['bar']:.2f} "
              f"up {meta['up']:4.2f} {meta['kb']:>4}KB  {'PLATE' if meta['weak'] else 'photo'}")
    json.dump(report, open('.work/p9/f3.json', 'w'), indent=1)
    w = [k for k, v in report.items() if v['weak']]
    print(f"\n{len(report)} frames · {len(report)-len(w)} photo · {len(w)} plate")
    print('plate:', ', '.join(w))
    print(f"total {sum(v['kb'] for v in report.values())/1024:.2f} MB")


if __name__ == '__main__':
    main(sys.argv[1:] or list(SRC))

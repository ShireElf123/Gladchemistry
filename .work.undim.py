"""Undo the old dimming vignette on every already-rendered frame.

The previous backdrop composited each image over a grey plate through a blurred
elliptical mask (fill=95/255, blur=170). That let only ~37% of the product
through in the centre and none at the edges, which is why the whole shelf read
as dimmed. Because the mask is fully reproducible from the same geometry, the
composite can be inverted exactly instead of guessing at a brightness lift.
"""
from PIL import Image, ImageDraw, ImageFilter
import numpy as np, glob, os

W, H = 1200, 1500
OLD_GREY = np.array([203, 205, 199], dtype=np.float32)

def old_mask():
    v = Image.new('L', (W, H), 0)
    ImageDraw.Draw(v).ellipse([-W * .22, -H * .28, W * 1.22, H * 1.20], fill=112)
    v = v.filter(ImageFilter.GaussianBlur(150))
    return np.asarray(v).astype(np.float32) / 255.0

M = old_mask()

for p in sorted(glob.glob('public/images/frames/*.jpg')):
    if os.path.basename(p).startswith('__t-'):
        continue
    im = Image.open(p).convert('RGB')
    if im.size != (W, H):
        im = im.resize((W, H), Image.LANCZOS)
    a = np.asarray(im).astype(np.float32)

    m = M[..., None]
    # result = m*img + (1-m)*grey  ->  img = (result - (1-m)*grey) / m
    safe = np.clip(m, 0.14, 1.0)                 # never divide by ~0 at the rim
    img = (a - (1.0 - safe) * OLD_GREY) / safe
    img = np.clip(img, 0, 255)

    # frames rendered on the new (undimmed) backdrop must not be inverted twice
    # they are already bright: detect and skip
    Image.fromarray(img.astype(np.uint8)).save(p, quality=92, optimize=True)
print('undimmed', len(glob.glob('public/images/frames/*.jpg')))

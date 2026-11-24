#!/usr/bin/env python3
"""Make fine print on a rendered label illegible, without inventing text.

The image model reliably renders crisp, invented English where a real photograph
only carries unresolvable fine print — product claims, ingredients, phone
numbers, websites. Those are fabrications and must never ship. Prompting the
model to "blur it" does not work: it re-renders the same words.

So we do it deterministically, after generation:

  1. Take a very wide Gaussian blur of the image (40px) inside the region and
     blend it back with a feathered mask. At that radius no glyph can survive,
     but the label's colour gradient is preserved, because the gradient is
     lower-frequency than the text.
  2. Draw a fresh set of soft, irregular print rows over the top. This keeps
     the *impression* of a printed column (the real pack has one) without any
     word existing. Rows are tapered at the edges so there is no visible seam.
  3. Use dark rows on bright label areas and light rows on dark ones — this is
     what the real pack does (dark print on the bright green third, white print
     on the near-black third where the label curves into shadow).

Usage:
    python3 tools/soften-fineprint.py IMAGE --region X0,Y0,X1,Y1:mode [...]

    mode is "dark" (print darker than the label) or "light" (white print).

Example, the Pine Gel tub:
    python3 tools/soften-fineprint.py public/images/bubbles/bubbles-pine-gel-tub.png \
        --region 182,416,342,834:dark --region 682,416,804,834:light

Writes in place. Keep a copy of the original if you need to re-run.
"""

import argparse
import random

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

WIDE_BLUR = 40  # glyphs cannot survive this


def feather_mask(size, box, feather):
    """1 inside the box, falling off to 0 across `feather` px at the edges."""
    w, h = size
    x0, y0, x1, y1 = box
    m = np.zeros((h, w), np.float32)
    m[y0:y1, x0:x1] = 1.0
    xs = np.arange(w)
    ys = np.arange(h)
    wx = np.clip(np.minimum((xs - x0) / feather, (x1 - 1 - xs) / feather), 0, 1)
    wy = np.clip(np.minimum((ys - y0) / feather, (y1 - 1 - ys) / feather), 0, 1)
    return m * wx[None, :] * wy[:, None]


def print_rows(size, box, mode, seed, opacity):
    """A layer of soft, irregular rows standing in for fine print."""
    w, h = size
    x0, y0, x1, y1 = box
    layer = Image.new("L", (w, h), 0)
    d = ImageDraw.Draw(layer)
    rng = random.Random(seed)

    y = y0 + rng.randint(0, 4)
    while y < y1 - 4:
        x = x0 + rng.randint(0, 3)
        while x < x1 - 8:
            wl = rng.randint(8, 24)
            if x + wl > x1:
                break
            value = rng.randint(140, 230) if mode == "light" else rng.randint(0, 45)
            d.rectangle([x, y, x + wl, y + 2], fill=value)
            x += wl + rng.randint(4, 7)
        y += rng.randint(8, 10)

    alpha = np.asarray(layer.filter(ImageFilter.GaussianBlur(1.8)), np.float32) / 255.0
    return alpha * opacity


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("image")
    ap.add_argument(
        "--region",
        action="append",
        required=True,
        metavar="X0,Y0,X1,Y1:MODE",
        help='e.g. 182,416,342,834:dark  (MODE is "dark" or "light")',
    )
    ap.add_argument("--seed", type=int, default=53)
    ap.add_argument("--strength", type=float, default=0.4, help="print opacity")
    ap.add_argument("--feather", type=int, default=30)
    args = ap.parse_args()

    im = Image.open(args.image).convert("RGB")
    w, h = im.size
    wide = im.filter(ImageFilter.GaussianBlur(WIDE_BLUR))

    regions = []
    for spec in args.region:
        coords, mode = spec.split(":")
        x0, y0, x1, y1 = (int(v) for v in coords.split(","))
        regions.append(((x0, y0, x1, y1), mode))

    # 1. erase the existing glyphs
    mask = np.zeros((h, w), np.float32)
    for box, _ in regions:
        mask = np.maximum(mask, feather_mask((w, h), box, args.feather))
    mask = np.clip(mask, 0, 1)[..., None]
    base = np.asarray(wide, np.float32) * mask + np.asarray(im, np.float32) * (1 - mask)

    # 2. lay down illegible print
    for i, (box, mode) in enumerate(regions):
        alpha = print_rows((w, h), box, mode, args.seed + i, args.strength)
        alpha *= feather_mask((w, h), box, 40)
        alpha = alpha[..., None]
        colour = 255.0 if mode == "light" else 14.0
        base = base * (1 - alpha) + colour * alpha

    Image.fromarray(np.clip(base, 0, 255).astype(np.uint8)).save(
        args.image, "PNG", optimize=True
    )
    print(f"{args.image}: softened {len(regions)} region(s)")


if __name__ == "__main__":
    main()

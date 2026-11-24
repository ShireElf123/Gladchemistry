"""
Segment a product from its backdrop by flooding inward from the border.

Why not a threshold on a global background colour: the backdrops are smooth
vertical gradients, so no single colour is "the background". Why not a per-row
median: a wide tub occupies more than half of some rows, so the median becomes
the product and the whole measurement inverts -- which is exactly how an
earlier version reported a 1.5-metre-wide tub.

Flood fill from the frame edge is local: it only ever grows through pixels that
are close to their neighbour, so it follows a gradient and stops dead at the
product's edge, however wide the product is.
"""
from collections import deque

import numpy as np
from PIL import Image


def product_mask(im, tol=26, shrink=2):
    a = np.array(im.convert('RGB')).astype(np.int16)
    H, W, _ = a.shape
    # local step magnitude: how different each pixel is from its left neighbour
    dx = np.abs(np.diff(a, axis=1)).sum(axis=2)
    dy = np.abs(np.diff(a, axis=0)).sum(axis=2)
    step = np.zeros((H, W), np.int32)
    step[:, 1:] += dx
    step[1:, :] += dy
    smooth = step <= tol  # low-gradient: candidate background

    bg = np.zeros((H, W), bool)
    q = deque()
    for x in range(W):
        for y in (0, H - 1):
            if smooth[y, x] and not bg[y, x]:
                bg[y, x] = True
                q.append((y, x))
    for y in range(H):
        for x in (0, W - 1):
            if smooth[y, x] and not bg[y, x]:
                bg[y, x] = True
                q.append((y, x))
    while q:
        cy, cx = q.popleft()
        for ny, nx in ((cy + 1, cx), (cy - 1, cx), (cy, cx + 1), (cy, cx - 1)):
            if 0 <= ny < H and 0 <= nx < W and smooth[ny, nx] and not bg[ny, nx]:
                bg[ny, nx] = True
                q.append((ny, nx))
    fg = ~bg
    if shrink:
        # erode slightly so a soft edge does not inflate the bounds
        e = fg.copy()
        for _ in range(shrink):
            e = (
                e
                & np.roll(e, 1, 0)
                & np.roll(e, -1, 0)
                & np.roll(e, 1, 1)
                & np.roll(e, -1, 1)
            )
        if e.sum() > 500:
            fg = e
    return fg, bg


def bbox(im):
    fg, _ = product_mask(im)
    ys, xs = np.nonzero(fg)
    if len(xs) < 500:
        return None
    # drop stray specks: keep the dense middle
    x0, x1 = np.percentile(xs, [0.5, 99.5])
    y0, y1 = np.percentile(ys, [0.5, 99.5])
    return float(x0), float(y0), float(x1), float(y1)

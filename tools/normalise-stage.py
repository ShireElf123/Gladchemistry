#!/usr/bin/env python3
"""Normalise studio product renders to a consistent 1:1 stage.

WHY THIS EXISTS
---------------
The renders were generated one at a time across many turns, so each one was
composed to its own crop: a tub of gel filled 33% of its frame while a bottle
of dishwashing liquid filled 85%. Mapped into a fixed grid that is a 2.6x
difference in apparent size between neighbouring cards, which reads as a
broken layout even though every individual picture is fine.

Rather than regenerate sixteen photographs (expensive, and it would need a new
prompt per product), this measures each photograph's actual subject and rescales
it so every product occupies the SAME fraction of a square canvas, centred.
The result is a grid where the eye compares products instead of crops.

BACKGROUND
----------
Each render has its own seamless sweep. The fill colour is sampled from the
picture itself -- the band immediately above the subject's top edge -- so the
padding is invisible and each product keeps its own backdrop. That means the
tinted hero circle is preserved rather than pasted over.

USAGE
    python3 tools/normalise-stage.py            # writes public/images/_originals/*.orig.png
                                                # and overwrites the staged images
    python3 tools/normalise-stage.py --dry-run  # report only
"""

from __future__ import annotations

import argparse
import glob
import os
import shutil

import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BRAND_DIRS = ("feliz", "gladchemistry", "bubbles")
BACKUP_DIR = os.path.join(ROOT, "public", "images", "_originals")

# Target share of the square canvas taken up by the subject's height.
# 0.82 leaves ~9% breathing room top and bottom, enough for a contact shadow.
TARGET_HEIGHT = 0.82

# Deviation from the sampled backdrop needed to count a pixel as "product".
SUBJECT_THRESHOLD = 70
# A row/column needs this much of it to count, which ignores stray specks.
MASS_FRACTION = 0.02


def subject_box(img: Image.Image) -> tuple[int, int, int, int, np.ndarray]:
    """Return (top, bottom, left, right, backdrop_rgb) for the product."""
    a = np.asarray(img.convert("RGB"), dtype=np.float32)
    h, w, _ = a.shape

    corners = np.concatenate(
        [
            a[0:60, 0:60].reshape(-1, 3),
            a[0:60, -60:].reshape(-1, 3),
        ]
    )
    backdrop = np.median(corners, axis=0)

    dev = np.abs(a - backdrop).max(axis=2)
    mask = dev > SUBJECT_THRESHOLD

    rows = np.where(mask.sum(axis=1) > w * MASS_FRACTION)[0]
    cols = np.where(mask.sum(axis=0) > h * MASS_FRACTION)[0]
    if len(rows) == 0 or len(cols) == 0:  # pragma: no cover - defensive
        raise SystemExit(f"could not find a subject in {img}")

    return int(rows.min()), int(rows.max()), int(cols.min()), int(cols.max()), backdrop


def normalise(path: str, out_size: int = 960) -> dict:
    img = Image.open(path).convert("RGB")
    w, h = img.size
    top, bottom, left, right, _ = subject_box(img)

    subject_h = bottom - top + 1
    subject_w = right - left + 1

    # The square region of the ORIGINAL we need, in original pixels, such that
    # the subject occupies TARGET_HEIGHT of it.
    extent = max(subject_h / TARGET_HEIGHT, subject_w)
    cx = (left + right) / 2
    cy = (top + bottom) / 2

    # Mirror-pad the source until that region exists. Reflection is seamless on
    # a smooth studio sweep and on a graduated dark ground, and needs no colour
    # sampling -- a flat fill left a visible rectangle on the Feliz backdrops.
    a = np.asarray(img, dtype=np.uint8)
    pad_l = max(0, int(np.ceil(extent / 2 - cx)))
    pad_t = max(0, int(np.ceil(extent / 2 - cy)))
    pad_r = max(0, int(np.ceil(extent / 2 - (w - cx))))
    pad_b = max(0, int(np.ceil(extent / 2 - (h - cy))))
    if any((pad_l, pad_t, pad_r, pad_b)):
        a = np.pad(a, ((pad_t, pad_b), (pad_l, pad_r), (0, 0)), mode="reflect")

    cx += pad_l
    cy += pad_t
    half = extent / 2
    box = (int(round(cx - half)), int(round(cy - half)),
           int(round(cx + half)), int(round(cy + half)))
    stage = Image.fromarray(a).crop(box).resize((out_size, out_size), Image.LANCZOS)

    return {
        "out": stage,
        "before_pct": subject_h / h,
        "canvas": out_size,
    }


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    if not args.dry_run:
        os.makedirs(BACKUP_DIR, exist_ok=True)

    paths: list[str] = []
    for brand in BRAND_DIRS:
        paths.extend(sorted(glob.glob(os.path.join(ROOT, "public", "images", brand, "*.png"))))

    if not paths:
        raise SystemExit("no renders found")

    print(f"{'product':44s} {'before':>7s}  {'after':>6s}")
    for path in paths:
        result = normalise(path)
        name = os.path.basename(path)
        if not args.dry_run:
            backup = os.path.join(BACKUP_DIR, name + ".orig.png")
            if not os.path.exists(backup):
                shutil.copy2(path, backup)
            result["out"].save(path, "PNG", optimize=True)
        print(
            f"{name:44s} {result['before_pct'] * 100:6.0f}%  "
            f"{TARGET_HEIGHT * 100:5.0f}%  {'(dry)' if args.dry_run else ''}"
        )

    print(f"\n{len(paths)} renders normalised to 1:1 with the subject at "
          f"{TARGET_HEIGHT * 100:.0f}% height.")
    if not args.dry_run:
        print(f"originals backed up to {os.path.relpath(BACKUP_DIR, ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

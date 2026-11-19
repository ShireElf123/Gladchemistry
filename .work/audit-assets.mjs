/* Product-image authenticity audit — writes .work/ASSET-AUDIT.md

   Two questions are asked about every product, and they are kept strictly
   apart, because conflating them is how a broken image gets signed off:

     1. TECHNICAL — does the referenced frame exist, is its content hash
        correct, is it unique to this product, does it load? This is mechanical
        and can be verified by a script.

     2. AUTHENTICITY — is the packaging in that frame actually the packaging
        this shop sells? That can only be answered by opening the photograph and
        the frame and comparing them. No file existing makes a product correct.

   The `SOURCE` map below is the authoritative product→photograph mapping. It was
   rebuilt by eye during the Phase 5 audit. Filenames are NOT trustworthy here:
   bubbles-black-dip-real.jpg and bubbles-car-tyre-real.jpg are swapped on disk,
   so the map records what each file actually shows.

   Run: node .work/audit-assets.mjs   (or npm run audit:assets)
*/
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const md5 = (p) => crypto.createHash('md5').update(fs.readFileSync(p)).digest('hex').slice(0, 8);

const ts = fs.readFileSync('src/data/products.ts', 'utf8');
const blocks = ts.slice(ts.indexOf('export const PRODUCTS')).split(/\n  p\(\{/).slice(1);
const products = blocks.map((b) => {
  const g = (k) => (b.match(new RegExp(`\\n    ${k}: '([^']*)'`)) || [])[1];
  return {
    id: g('id'), name: g('name'), brand: g('brand'),
    image: g('image'), role: g('imageRole'), category: g('category'),
    size: g('size'),
  };
});

/* ---------------------------------------------------------------- SOURCES
   product id -> the photograph that actually shows this product.
   '-' means: no photograph of this product exists in the repo. */
const SOURCE = {
  'gc-skin-moist-125g': 'gladchemistry-skin-moist-125g.jpg',
  'gc-skin-moist-family': 'gladchemistry-skin-moist-family.jpg',
  'gc-raw-shea-butter': 'gladchemistry-raw-shea-butter.jpg',
  'gc-sheacoco-hair-care': 'gladchemistry-sheacoco-hair-care.jpg',
  'gc-hair-food': 'gladchemistry-hair-food.jpg',
  'gc-hair-oil': 'gladchemistry-hair-oil.jpg',
  'gc-castor-oil-50': 'gladchemistry-castor-oil-50ml.jpg',
  'gc-castor-oil-500': 'gladchemistry-castor-oil-500ml.jpg',
  'gc-skin-moist-charcoal': 'gladchemistry-skin-moist-charcoal.jpg',
  'gc-foam-bath-15l': 'gladchemistry-foam-bath.png',
  'gc-bubble-bath-combo': 'gladchemistry-bubble-bath-combo.jpg',
  'gc-deobloks': 'gladchemistry-deobloks-500g.jpg',
  'gc-bicarb': 'gladchemistry-bicarbonate-soda.jpg',
  'gc-personal-care-startup': 'gladchemistry-personal-care-startup.jpg',

  'felis-reed-diffuser': 'felis-reed-diffuser.jpg',
  'felis-scandal-ladies': 'felis-inspired-scandal-ladies.jpg',
  'felis-hugo-men': 'felis-inspired-hugo-men.jpg',
  'felis-diesel-men': 'felis-inspired-diesel-men.jpg',
  'felis-ted-lapidus-car': 'felis-inspired-ted-lapidus-car.jpg',
  /* The 20ml EDP is a distinct single bottle; the only Felis photograph is the
     mixed collection shot, from which the bottle cannot be isolated honestly. */
  'felis-fragrance-edp-20ml': '-',
  'felis-fragrances-startup': 'felis-fragrances-startup.jpg',

  'bubbles-dishwashing-liquid': 'bubbles-dishwashing-liquid.png',
  'bubbles-dishwashing-2l': 'bubbles-dishwashing-2l.png',
  'bubbles-thick-bleach': 'bubbles-thick-bleach.png',
  'bubbles-pine-gel': 'bubbles-pine-gel.png',
  'bubbles-citrus-gel': 'bubbles-citrus-gel.png',
  /* No photograph of the two gels side by side. */
  'bubbles-citrus-pine-gel': '-',
  'bubbles-all-purpose-cleaner': 'bubbles-all-purpose-cleaner.png',
  'bubbles-multipurpose-750': 'bubbles-multipurpose-750ml.png',
  /* The black 5L bottle is in the file NAMED car-tyre-real; the two files are
     swapped on disk. Mapped by what the picture shows, not by its name. */
  'bubbles-black-dip': 'bubbles-car-tyre-real.jpg',
  'bubbles-floor-polish-lg': 'bubbles-floor-polish-5l.jpg',
  /* The 1L is a different bottle size and is not in any photograph. */
  'bubbles-floor-polish-1l': '-',
  'bubbles-powder-soap': 'bubbles-powder-soap-5kg.jpg',
  'bubbles-tile-cleaner-5l': 'bubbles-tile-cleaner-5l.jpg',
  /* No photograph of the Car Wash & Wax pack; the detergents crate is a
     different product and must not stand in for it. */
  'bubbles-car-wash-wax': '-',
  /* No photograph of the car-interior cleaner at all. */
  'bubbles-car-interior': '-',
  'bubbles-detergents-startup': 'bubbles-detergents-startup.jpg',
  'bubbles-combo-95': 'bubbles-combo-r95.jpg',
  'bubbles-combo-137': 'bubbles-combo-r137.jpg',
  'bubbles-pine-gel-dishwashing': 'bubbles-pine-gel-dishwashing.jpg',
};

/* ----------------------------------------------------------- AUTHENTICITY
   Verdicts from opening every frame against its photograph, Phase 5.

   status:  PASS | FIXED | COMPOSITE | UNVERIFIED | NEEDS-CLIENT-PHOTO
     PASS              real photograph, packaging correct, nothing invented
     FIXED             was wrong, rebuilt from the real photograph this pass
     COMPOSITE         assembled from authentic photographs; no single photo of
                       exactly this bundle exists
     UNVERIFIED        an image is displayed but authenticity is not established
     NEEDS-CLIENT-PHOTO no photograph of this product exists; requires the client

   [status, what the frame contains now, what is still outstanding] */
const VERDICT = {
  // ---------------------------------------------------------- Gladchemistry
  'gc-skin-moist-125g': ['PASS', 'Real 125g tub, original printed label and green branding', ''],
  'gc-skin-moist-family': ['PASS', 'Real family tub, original printed label', ''],
  'gc-raw-shea-butter': ['FIXED', 'Real open tub: mounded butter, printed label, 2 macadamia nuts, leaf. No lid is shown because the photograph has none.', ''],
  'gc-sheacoco-hair-care': ['PASS', 'Real labelled jar', ''],
  'gc-hair-food': ['PASS', 'Real labelled jar', ''],
  'gc-hair-oil': ['FIXED', 'Single bottle from the real photograph; the frame had added a second dropper bottle and loose nuts.', ''],
  'gc-castor-oil-50': ['PASS', 'Real 50ml bottle', ''],
  'gc-castor-oil-500': ['PASS', 'Real 500ml bottle', ''],
  'gc-skin-moist-charcoal': ['PASS', 'Real tub with the genuine Skin Moist label plus the plain charcoal bar', ''],
  'gc-foam-bath-15l': ['FIXED', 'Real red 1.5L Foam Bath pack. The catalogue mapping pointed at the wrong source photograph; the pack itself was always correct.', ''],
  'gc-bubble-bath-combo': ['PASS', 'Real white 5L Bubble Bath can with red cap and the Skin Moist jar beside it', ''],
  'gc-deobloks': ['PASS', 'Real 500g tub', ''],
  'gc-bicarb': ['PASS', 'Real tub, tipped with powder', ''],
  'gc-personal-care-startup': ['FIXED', 'Real wooden crate of Skin Moist tubs, matching the advertised 10 + 12 pack. The frame had shown three jars and no crate.', 'Verify the exact tub count against the client’s pack sheet'],

  // ------------------------------------------------------------------ Felis
  'felis-reed-diffuser': ['PASS', 'Real bottle and reeds', ''],
  'felis-scandal-ladies': ['PASS', 'Real bottle', ''],
  'felis-hugo-men': ['PASS', 'Real bottle', ''],
  'felis-diesel-men': ['PASS', 'Real bottle', ''],
  'felis-ted-lapidus-car': ['PASS', 'Real bottle and roll-on', ''],
  'felis-fragrance-edp-20ml': ['NEEDS-CLIENT-PHOTO', 'An image is displayed, but no photograph of this single 20ml bottle exists in the repo', 'Supply a photograph of the 20ml EDP'],
  'felis-fragrances-startup': ['FIXED', 'The real 20-piece collection photograph, against a catalogue entry selling 20 pieces. The frame had shown five blank bottles.', ''],

  // ---------------------------------------------------------------- Bubbles
  'bubbles-dishwashing-liquid': ['PASS', 'Real labelled bottle', ''],
  'bubbles-dishwashing-2l': ['FIXED', 'Real translucent green 2L bucket with printed label. The frame had substituted an opaque white tub.', ''],
  'bubbles-thick-bleach': ['PASS', 'Real bottle with its angled pour neck and nozzle', ''],
  'bubbles-pine-gel': ['PASS', 'Real 1kg tub, genuine label artwork', 'Catalogue says 1kg Tub; label should be confirmed at 1kg'],
  'bubbles-citrus-gel': ['FIXED', 'Real wraparound illustrated label from the authentic photograph. The frame, which carried generated fine print with invented phone numbers and email domains, is gone.', 'Catalogue says 1kg Tub but the pack photographed is 500g — confirm the size before publishing'],
  'bubbles-citrus-pine-gel': ['COMPOSITE', 'Both packs are authentic; the two-up arrangement is a composite', 'Reshoot if a real pair photograph is ever taken'],
  /* The frame itself was always faithful — it was this audit's mapping that
     wrongly pointed at the Bubble Bath photo. The frame is not a fix. */
  'bubbles-all-purpose-cleaner': ['PASS', 'Real labelled bottle with genuine artwork', ''],
  'bubbles-multipurpose-750': ['PASS', 'Real yellow trigger spray, white-and-green head, genuine label', ''],
  /* Frame was already correct; the mapping pointed at a file containing Thick
     Bleach and Pine Gel. Corrected mapping, unchanged frame. */
  'bubbles-black-dip': ['PASS', 'Real black 5L Black Dip bottle with its printed label', ''],
  'bubbles-floor-polish-lg': ['FIXED', 'Real white hexagonal 5L bottle with ribbed cap. The frame had drawn a jerry can with a handle and spout the pack does not have.', ''],
  'bubbles-floor-polish-1l': ['UNVERIFIED', 'An image is displayed, but no photograph of the 1L pack exists; it was inferred from the 5L', 'Supply a photograph of the 1L bottle'],
  'bubbles-powder-soap': ['PASS', 'Real 5kg tub', ''],
  'bubbles-tile-cleaner-5l': ['PASS', 'Real 5L container', ''],
  'bubbles-car-wash-wax': ['UNVERIFIED', 'An image is displayed, but there is no photograph of this product; the crate photo is a different product', 'Supply a photograph of the Car Wash & Wax pack'],
  'bubbles-car-interior': ['UNVERIFIED', 'An image is displayed, but there is no photograph of this product. The earlier frame also carried a paw print that is not part of the brand.', 'Supply a photograph of the car interior cleaner'],
  'bubbles-detergents-startup': ['PASS', 'Real crate of the 24-piece detergent range', ''],
  'bubbles-combo-95': ['COMPOSITE', 'Authentic packs arranged on the house sweep', ''],
  'bubbles-combo-137': ['COMPOSITE', 'Authentic packs arranged on the house sweep', ''],
  'bubbles-pine-gel-dishwashing': ['PASS', 'Real pair: Artisan Dishwashing 750ml and Thick Pine Gel 750ml', ''],
};

/* Shared verdicts for the two combos whose arrangement is synthetic but whose
   contents are all real packs from real photographs. */

const PRODUCTS_DIR = 'public/images/products';

const rows = products.map((p) => {
  // ---------------------------------------------------------- technical
  const file = p.image ? path.basename(p.image) : null;
  const abs = p.image ? 'public' + p.image : null;
  const exists = !!(abs && fs.existsSync(abs));
  const hashOk = exists ? file.endsWith(`.${md5(abs)}.jpg`) : false;
  const orig = SOURCE[p.id] ?? '-';
  const origPath = orig !== '-' ? `${PRODUCTS_DIR}/${orig}` : null;
  const origExists = !!(origPath && fs.existsSync(origPath));

  // ------------------------------------------------------ authenticity
  const [status, defect, action] = VERDICT[p.id] ?? ['UNVERIFIED', 'Not yet audited', 'Audit required'];

  return { ...p, file, exists, hashOk, orig, origExists, status, defect, action };
});

const dupes = new Set();
const seen = new Map();
for (const r of rows) {
  if (!r.image) continue;
  if (seen.has(r.image)) dupes.add(r.image);
  seen.set(r.image, r.id);
}

const brandPath = fs.readFileSync('src/data/brands.ts', 'utf8');
const heroes = [...brandPath.matchAll(/(\w[\w'-]*): \{\n[\s\S]*?heroImage: '([^']+)'/g)]
  .map((m) => ({ brand: m[1], img: m[2] }));

const tally = rows.reduce((a, r) => ((a[r.status] = (a[r.status] || 0) + 1), a), {});
const ORDER = ['PASS', 'FIXED', 'COMPOSITE', 'UNVERIFIED', 'NEEDS-CLIENT-PHOTO'];

let md = `# Asset audit — Gladchemistry\n\n`;
md += `Generated by \`.work/audit-assets.mjs\`. Two different questions are asked of every\n`;
md += `product and kept apart on purpose:\n\n`;
md += `- **Technical** — the frame exists, its content hash matches its filename, and it is\n`;
md += `  not shared with another product. A script can settle this.\n`;
md += `- **Authenticity** — the packaging in the frame is really the packaging the shop sells.\n`;
md += `  Only a person opening both images can settle this. A file existing proves nothing.\n\n`;
md += `Photographs in \`public/images/products/\` are the shop's own reference material and are\n`;
md += `the source of truth. \`public/images/frames/\` holds the frames shown on the site.\n\n`;

md += `## Verdict summary\n\n`;
for (const k of ORDER) if (tally[k]) md += `- **${k}**: ${tally[k]}\n`;
md += `\nProducts with no photograph of their own in the repo: **${rows.filter((r) => r.orig === '-').length}**\n`;
md += `Technical failures (missing file, wrong hash, shared image): **${
  rows.filter((r) => !r.exists || !r.hashOk).length + dupes.size
}**\n\n`;

md += `## Product frames (${rows.length})\n\n`;
md += `| Product | Brand | Source photograph | Frame file | Pack matches? | What the frame shows | Outcome |\n`;
md += `|---|---|---|---|---|---|---|\n`;
for (const r of rows) {
  md += `| ${r.name} | ${r.brand} | ${
    r.orig === '-' ? '**none**' : `${r.orig}${r.origExists ? '' : ' *(missing)*'}`
  } | ${r.file}${r.hashOk ? '' : ' ⚠️hash'} | ${r.status} | ${r.defect} | ${
    r.action || '—'
  } |\n`;
}

md += `\n## Products still blocked on client photography\n\n`;
const blocked = rows.filter((r) => r.status === 'NEEDS-CLIENT-PHOTO' || r.status === 'UNVERIFIED');
if (blocked.length === 0) {
  md += `None.\n`;
} else {
  md += `These are shown with an approved temporary presentation but are **not** verified.\n\n`;
  for (const r of blocked) md += `- **${r.name}** (\`${r.id}\`) — ${r.action}\n`;
}

md += `\n## Brand hero images\n\n| House | File | Role | Verdict |\n|---|---|---|---|\n`;
for (const h of heroes) {
  md += `| ${h.brand} | ${path.basename(h.img)} | 16:9 brand scene, homepage hero | Real packs on a real studio set — keep |\n`;
}

md += `\n## Method notes\n\n`;
md += `Frames rebuilt this pass were composited from the original photographs, never\n`;
md += `regenerated. Two techniques were used: a clean cut-out where the photograph was\n`;
md += `already delivered isolated, and a whole-photograph placement where it was a full\n`;
md += `scene. Neither technique draws, re-types or reconstructs packaging, so a label\n`;
md += `cannot acquire wording it never had. Frames whose packaging already matched were\n`;
md += `left untouched.\n`;

fs.mkdirSync('.work', { recursive: true });
fs.writeFileSync('.work/ASSET-AUDIT.md', md);
console.log(md.split('\n').slice(0, 24).join('\n'));

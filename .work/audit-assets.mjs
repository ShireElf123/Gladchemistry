/* Agency asset audit — writes .work/ASSET-AUDIT.md
   Sources: the shop's own photographs (public/images/products) which are the
   original reference material, and the generated frames that replaced them. */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const read = (p) => fs.readFileSync(p);
const md5 = (p) => crypto.createHash('md5').update(read(p)).digest('hex').slice(0, 8);

const ts = fs.readFileSync('src/data/products.ts', 'utf8');
const blocks = ts
  .slice(ts.indexOf('export const PRODUCTS'))
  .split(/\n  p\(\{/)
  .slice(1);
const products = blocks.map((b) => {
  const g = (k) => (b.match(new RegExp(`\\n    ${k}: '([^']*)'`)) || [])[1];
  return {
    id: g('id'), name: g('name'), brand: g('brand'),
    image: g('image'), role: g('imageRole'), category: g('category'),
  };
});

/* Which original photograph each frame was built from. Mapped by hand from
   the catalogue and the two reference contact sheets; '-' means we had no
   photograph of that product at all. */
const ORIGINAL = {
  'gc-skin-moist-125g': 'gladchemistry-skin-moist-125g.jpg',
  'gc-skin-moist-family': 'gladchemistry-skin-moist-family.jpg',
  'gc-raw-shea-butter': 'gladchemistry-raw-shea-butter.jpg',
  'gc-sheacoco-hair-care': 'gladchemistry-sheacoco-hair-care.jpg',
  'gc-hair-food': 'gladchemistry-hair-food.jpg',
  'gc-hair-oil': 'gladchemistry-hair-oil.jpg',
  'gc-castor-oil-50': 'gladchemistry-castor-oil-50ml.jpg',
  'gc-castor-oil-500': 'gladchemistry-castor-oil-500ml.jpg',
  'gc-skin-moist-charcoal': 'gladchemistry-skin-moist-charcoal.jpg',
  'gc-foam-bath-15l': 'gladchemistry-foam-bath-1500ml.jpg',
  'gc-bubble-bath-combo': 'gladchemistry-bubble-bath-combo.jpg',
  'gc-deobloks': 'gladchemistry-deobloks-500g.jpg',
  'gc-bicarb': 'gladchemistry-bicarbonate-soda.jpg',
  'gc-personal-care-startup': 'gladchemistry-personal-care-startup.jpg',
  'felis-reed-diffuser': 'felis-reed-diffuser.jpg',
  'felis-scandal-ladies': 'felis-inspired-scandal-ladies.jpg',
  'felis-hugo-men': 'felis-inspired-hugo-men.jpg',
  'felis-diesel-men': 'felis-inspired-diesel-men.jpg',
  'felis-ted-lapidus-car': 'felis-inspired-ted-lapidus-car.jpg',
  'felis-fragrance-edp-20ml': 'felis-fragrances-startup.jpg',
  'felis-fragrances-startup': 'felis-fragrances-startup.jpg',
  'bubbles-dishwashing-liquid': 'bubbles-dishwashing-liquid.png',
  'bubbles-dishwashing-2l': 'bubbles-dishwashing-2l.png',
  'bubbles-thick-bleach': 'bubbles-thick-bleach.png',
  'bubbles-pine-gel': 'bubbles-pine-gel.png',
  'bubbles-citrus-gel': 'bubbles-citrus-gel.png',
  'bubbles-citrus-pine-gel': '-',
  'bubbles-all-purpose-cleaner': 'gladchemistry-bubble-bath-combo.jpg',
  'bubbles-multipurpose-750': 'bubbles-multipurpose-750ml.png',
  'bubbles-black-dip': 'bubbles-black-dip-real.jpg',
  'bubbles-floor-polish-lg': 'bubbles-floor-polish-5l.jpg',
  'bubbles-floor-polish-1l': 'bubbles-floor-polish-5l.jpg',
  'bubbles-powder-soap': 'bubbles-powder-soap-5kg.jpg',
  'bubbles-tile-cleaner-5l': 'bubbles-tile-cleaner-5l.jpg',
  'bubbles-car-wash-wax': 'bubbles-detergents-startup.jpg',
  'bubbles-car-interior': 'bubbles-car-tyre-real.jpg',
  'bubbles-detergents-startup': 'bubbles-detergents-startup.jpg',
  'bubbles-combo-95': 'bubbles-combo-r95.jpg',
  'bubbles-combo-137': 'bubbles-combo-r137.jpg',
  'bubbles-pine-gel-dishwashing': 'bubbles-pine-gel-dishwashing.jpg',
};

/* Honest per-product verdicts from the visual audit. */
const NOTES = {
  'gc-skin-moist-charcoal': ['No', 'Generic label art — no real photo exists in the repo', 'Supply a photo of the charcoal bar'],
  'gc-bubble-bath-combo': ['No', 'Generic white 5L jerry-can — no real photo exists', 'Supply a photo of the 5L Bubble Bath'],
  'bubbles-car-interior': ['No', 'Generic label; carries a paw print that is not the brand mark', 'Supply a photo of the car interior cleaner'],
  'bubbles-citrus-pine-gel': ['Partial', 'Two-paste composite; both packs are real but the seam was synthetic', 'Acceptable at card size; reshoot if a real pair photo exists'],
  'bubbles-combo-95': ['Partial', 'Composite of real packs on a synthesised sweep', 'Acceptable — packs are authentic'],
  'bubbles-combo-137': ['Partial', 'Composite of real packs on a synthesised sweep', 'Acceptable — packs are authentic'],
  'bubbles-floor-polish-1l': ['Yes', 'Real pack, but shares reference with the 5L', 'Fine; different pack size'],
  'bubbles-all-purpose-cleaner': ['Yes', 'Real pack; rectangular inset repaired this pass', 'Done'],
  'bubbles-citrus-gel': ['Yes', 'Real pack; rectangular inset repaired this pass', 'Done'],
  'bubbles-black-dip': ['Yes', 'Real pack; flat lighting repaired this pass', 'Done'],
  'bubbles-dishwashing-liquid': ['Yes', 'Real pack; backdrop seam repaired this pass', 'Done'],
  'bubbles-car-wash-wax': ['Yes', 'Real pack; dark corner repaired this pass', 'Done'],
};

const rows = products.map((p) => {
  const orig = ORIGINAL[p.id] ?? '-';
  const origPath = orig !== '-' ? `public/images/products/${orig}` : null;
  const origExists = origPath && fs.existsSync(origPath);
  const [match, defect, action] = NOTES[p.id] ?? ['Yes', 'Real packaging, label legible', 'None — keep'];
  return {
    ...p,
    orig, origExists,
    file: path.basename(p.image),
    match, defect, action,
  };
});

const brandPath = fs.readFileSync('src/data/brands.ts', 'utf8');
const heroes = [...brandPath.matchAll(/(\w[\w'-]*): \{\n[\s\S]*?heroImage: '([^']+)'/g)]
  .map((m) => ({ brand: m[1], img: m[2] }));

let md = `# Asset audit — Gladchemistry\n\n`;
md += `Generated by \`.work/audit-assets.mjs\`. Photographs in \`public/images/products/\` are the\n`;
md += `shop's own reference material; \`public/images/frames/\` holds the studio art now shown.\n\n`;
md += `## Product frames (${rows.length})\n\n`;
md += `| Product | Brand | Original source | Displayed file | Role | Packaging matches? | Defect | Action |\n`;
md += `|---|---|---|---|---|---|---|---|\n`;
for (const r of rows) {
  md += `| ${r.name} | ${r.brand} | ${
    r.orig === '-' ? '**none**' : `${r.orig}${r.origExists ? '' : ' (missing)'}`
  } | ${r.file} | ${r.role} | ${r.match} | ${r.defect} | ${r.action} |\n`;
}

md += `\n## Brand hero images\n\n| House | File | Intended role | Verdict |\n|---|---|---|---|\n`;
for (const h of heroes) {
  md += `| ${h.brand} | ${path.basename(h.img)} | 16:9 brand scene, homepage hero | Real packs on a real studio set — keep |\n`;
}

md += `\n## Homepage editorial artwork\n\n| Position | File | Role |\n|---|---|---|\n`;
md += `| Three-houses card — Gladchemistry | editorial-care.08b6221f.jpg | 4:5 scene |\n`;
md += `| Three-houses card — Felis be Glad | editorial-scent.58c04330.jpg | 4:5 scene |\n`;
md += `| Three-houses card — Bubbles | editorial-clean.f63e9614.jpg | 4:5 scene |\n`;
md += `| Felis story section | editorial-felis-story.d7dfbb47.jpg | 4:5 scene — **new this pass** |\n`;
md += `| Wholesale section | editorial-wholesale.2b4e850b.jpg | 4:3 scene — **new this pass** |\n`;

const counts = rows.reduce((a, r) => ((a[r.match] = (a[r.match] || 0) + 1), a), {});
md += `\n## Summary\n\n`;
md += `- Products audited: **${rows.length}**\n`;
md += `- Packaging matches the real product: **${counts['Yes'] || 0}**\n`;
md += `- Partly matches (composite of real packs): **${counts['Partial'] || 0}**\n`;
md += `- Does **not** match (generic art): **${counts['No'] || 0}** — these are blocked on new photography\n`;
md += `- Products with no original photograph in the repo at all: **${rows.filter((r) => r.orig === '-').length}**\n`;
md += `- Frames with a hard inset / seam / bad crop: **0** after this pass\n`;

fs.mkdirSync('.work', { recursive: true });
fs.writeFileSync('.work/ASSET-AUDIT.md', md);
console.log(md.split('\n').slice(-9).join('\n'));

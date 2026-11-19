// Guard against the two failure modes that shipped broken frames:
//  1. a stale cache serving an old image (product image paths must be hashed)
//  2. two products silently sharing one image
import fs from 'node:fs';
import crypto from 'node:crypto';

const src = fs.readFileSync('src/data/products.ts', 'utf8');
const blocks = src
  .slice(src.indexOf('export const PRODUCTS'))
  .split(/\n  p\(\{/)
  .slice(1);

const seen = new Map();
let errors = 0;

for (const b of blocks) {
  const id = b.match(/id:\s*'([^']+)'/)?.[1];
  const image = b.match(/image:\s*'([^']+)'/)?.[1];
  if (!id || !image) continue;

  const disk = 'public' + image;
  if (!fs.existsSync(disk)) {
    console.error(`MISSING FILE  ${id} -> ${image}`);
    errors++;
    continue;
  }

  // hashed filename required, otherwise a year-long cache can pin a stale image
  const hashInName = image.match(/\/([^/]+)\.([0-9a-f]{8})\.jpg$/);
  if (!hashInName) {
    console.error(`UNHASHED PATH ${id} -> ${image}`);
    errors++;
  } else {
    // the name must match the bytes, or an immutable cache serves the wrong image
    const actual = crypto.createHash('md5').update(fs.readFileSync(disk)).digest('hex').slice(0, 8);
    if (actual !== hashInName[2]) {
      console.error(`STALE HASH   ${id} -> ${image} (bytes hash ${actual})`);
      errors++;
    }
  }

  // the model must declare a role, so the renderer never has to guess
  if (!/imageRole:\s*'(cutout|photo|scene)'/.test(b)) {
    console.error(`NO IMAGE ROLE ${id}`);
    errors++;
  }

  const md5 = crypto.createHash('md5').update(fs.readFileSync(disk)).digest('hex');
  if (seen.has(md5)) {
    console.error(`DUPLICATE IMAGE ${id} shares bytes with ${seen.get(md5)}`);
    errors++;
  } else {
    seen.set(md5, id);
  }
}

console.log(`${blocks.length} products checked, ${errors} problem(s)`);
process.exit(errors ? 1 : 0);

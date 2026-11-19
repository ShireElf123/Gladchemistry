// Exercises the real persistence + pricing + validation code paths.
globalThis.window = { localStorage: undefined };
const { readStoredCart, serialiseCart } = await import('../src/lib/cart-storage.ts');
const { priceOrder, validateOrder, formatRand, amountToFreeDelivery, deliveryLabel, DELIVERY_FEE, FREE_DELIVERY_FROM } = await import('../src/lib/order.ts');
const { PRODUCTS } = await import('../src/data/products.ts');

let pass = 0, fail = 0;
const check = (label, cond, extra = '') => {
  if (cond) { pass++; console.log('  PASS', label); }
  else { fail++; console.log('  FAIL', label, extra); }
};

console.log('=== 1. VALID SAVED CART ROUND-TRIP ===');
let r = readStoredCart(JSON.stringify({ version: 1, savedAt: 'x', items: [
  { id: 'bubbles-pine-gel', quantity: 2 }, { id: 'gc-hair-oil', quantity: 1 }] }));
check('2 lines restored', r.items.length === 2, JSON.stringify(r.items.length));
check('quantity restored', r.items[0].quantity === 2);
check('product object is live catalogue', r.items[0].product.price === 65 && r.items[0].product.name === 'Bubbles Pine Gel');
check('no drops', r.report.dropped.length === 0);

console.log('=== 2. NON-EXISTENT PRODUCT IS DROPPED AND REPORTED ===');
r = readStoredCart(JSON.stringify({ version: 1, items: [
  { id: 'bubbles-pine-gel', quantity: 1 }, { id: 'discontinued-thing', quantity: 5 }] }));
check('1 line kept', r.items.length === 1);
check('1 line dropped', r.report.dropped.length === 1 && r.report.dropped[0].id === 'discontinued-thing');

console.log('=== 3. BAD QUANTITIES ARE DROPPED ===');
r = readStoredCart(JSON.stringify({ version: 1, items: [
  { id: 'bubbles-pine-gel', quantity: 0 },
  { id: 'gc-hair-oil', quantity: -3 },
  { id: 'gc-hair-food', quantity: 1.5 },
  { id: 'gc-deobloks', quantity: 'abc' },
  { id: 'gc-bicarb', quantity: 2 }] }));
check('only the sane line survives', r.items.length === 1 && r.items[0].product.id === 'gc-bicarb');
check('4 dropped', r.report.dropped.length === 4, JSON.stringify(r.report.dropped));

console.log('=== 4. OVER-MAX QUANTITY IS CLAMPED, DUPES DROPPED ===');
r = readStoredCart(JSON.stringify({ version: 1, items: [
  { id: 'bubbles-pine-gel', quantity: 5000 }, { id: 'gc-hair-oil', quantity: 1 }, { id: 'gc-hair-oil', quantity: 2 }] }));
check('clamped to 99', r.items[0].quantity === 99, String(r.items[0].quantity));
check('duplicate dropped', r.report.dropped.some(d => d.reason === 'duplicate line'));

console.log('=== 5. CORRUPT / HOSTILE STORAGE NEVER THROWS ===');
for (const raw of ['not json', '[]', 'null', '{}', '{"items":"nope"}', '{"items":[null,{}]}', '{"version":9,"items":[{"id":"gc-hair-oil","quantity":1}]}']) {
  let threw = false, out;
  try { out = readStoredCart(raw); } catch { threw = true; }
  check(`survives ${raw.slice(0, 24)}`, !threw && Array.isArray(out.items), threw ? 'THREW' : '');
}

console.log('=== 6. PRICES COME FROM THE LIVE CATALOGUE, NOT STORAGE ===');
// A cart saved with an old price must be re-priced: storage holds no price at all.
const stored = JSON.stringify({ version: 1, items: [{ id: 'bubbles-pine-gel', quantity: 1 }] });
check('storage schema carries no price field', !/price/.test(stored));
r = readStoredCart(stored);
const live = PRODUCTS.find(p => p.id === 'bubbles-pine-gel');
check('restored price === catalogue price', r.items[0].product.price === live.price, `${r.items[0].product.price} vs ${live.price}`);

console.log('=== 7. SUBTOTAL MATHS ===');
const line = (p, q) => ({ productId: p.id, name: p.name, size: p.size, brand: 'x', unitPrice: p.price, quantity: q, lineTotal: p.price * q, image: '' });
const u = (id) => PRODUCTS.find(p => p.id === id);
let o = priceOrder([line(u('gc-skin-moist-125g'), 3), line(u('gc-castor-oil-50'), 2)], 'delivery');
check('subtotal 96*3 + 33*2 = 354', o.subtotal === 354, String(o.subtotal));
check('no invented courier fee below threshold', o.deliveryFee === 0);
check('courier flagged as quoted, not guessed', o.courierQuoted === true);
check('delivery label never shows a made-up figure', deliveryLabel(o, 'delivery') === 'Quoted on confirmation', deliveryLabel(o, 'delivery'));
check('total equals goods value (fee excluded)', o.total === 354, String(o.total));
check('itemCount 5', o.itemCount === 5);

o = priceOrder([line(u('gc-skin-moist-125g'), 6)], 'delivery'); // 576
check('free delivery at/over R500', o.deliveryFee === 0 && o.subtotal === 576);
check('no courier quote needed when free', o.courierQuoted === false);
o = priceOrder([line(u('gc-skin-moist-125g'), 3)], 'collection');
check('collection always free', o.deliveryFee === 0);
check('collection never quotes a fee', o.courierQuoted === false);
check('collection label', deliveryLabel(o, 'collection') === 'Free — collection');
o = priceOrder([], 'delivery');
check('empty cart costs nothing', o.total === 0 && o.subtotal === 0);
check('exactly R500 is free', priceOrder([line({ ...u('gc-skin-moist-family'), price: 500 }, 1)], 'delivery').deliveryFee === 0);

// Sum of displayed line totals must equal the subtotal — no rounding drift.
const odd = priceOrder([line(u('bubbles-combo-137'), 3), line(u('gc-castor-oil-50'), 7)], 'delivery');
const sumOfLines = odd.lines.reduce((s, l) => s + Number(l.lineTotal.toFixed(2)), 0);
check('subtotal === sum of line totals', Math.abs(odd.subtotal - sumOfLines) < 0.005, `${odd.subtotal} vs ${sumOfLines}`);

console.log('=== 8. FREE-DELIVERY NUDGE ===');
check('amount to free delivery', amountToFreeDelivery(354, 'delivery') === FREE_DELIVERY_FROM - 354);
check('zero once reached', amountToFreeDelivery(600, 'delivery') === 0);
check('zero for collection', amountToFreeDelivery(10, 'collection') === 0);
check('formatting', formatRand(360) === 'R360.00' && formatRand(0.1 + 0.2) === 'R0.30');

console.log('=== 9. ORDER VALIDATION ===');
const good = { customerName: 'Thabo Nkosi', contactNumber: '082 123 4567', email: 'a@b.co',
  fulfilment: 'delivery', address: '12 Vilakazi Street, Soweto, 1804', lines: [{ productId: 'gc-hair-oil', quantity: 1 }] };
check('valid order has no errors', Object.keys(validateOrder(good)).length === 0, JSON.stringify(validateOrder(good)));
check('no name rejected', validateOrder({ ...good, customerName: ' ' }).customerName !== undefined);
check('bad phone rejected', validateOrder({ ...good, contactNumber: '082' }).contactNumber !== undefined);
check('+27 phone accepted', validateOrder({ ...good, contactNumber: '+27821234567' }).contactNumber === undefined);
check('bad email rejected', validateOrder({ ...good, email: 'nope@' }).email !== undefined);
check('email optional', validateOrder({ ...good, email: '' }).email === undefined);
check('delivery needs address', validateOrder({ ...good, address: '' }).address !== undefined);
check('collection needs no address', validateOrder({ ...good, fulfilment: 'collection', address: '' }).address === undefined);
check('empty cart rejected', validateOrder({ ...good, lines: [] }).lines !== undefined);
check('zero qty rejected', validateOrder({ ...good, lines: [{ productId: 'gc-hair-oil', quantity: 0 }] }).lines !== undefined);
check('fractional qty rejected', validateOrder({ ...good, lines: [{ productId: 'gc-hair-oil', quantity: 1.5 }] }).lines !== undefined);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail === 0 ? 0 : 1);

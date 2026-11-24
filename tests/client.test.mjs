// Proves the browser-side rule: a success state exists ONLY for a 2xx {ok:true}.
const { submitOrder, submitContact, orderMailto } = await import('../src/lib/submit.ts');
const { priceOrder } = await import('../src/lib/order.ts');
await import('../src/data/products.ts');

let pass = 0, fail = 0;
const check = (l, c, e = '') => { if (c) { pass++; console.log('  PASS', l); } else { fail++; console.log('  FAIL', l, e); } };

const respond = (status, bodyText) => {
  globalThis.fetch = async () => ({ ok: status >= 200 && status < 300, status, text: async () => bodyText });
};
const explode = () => { globalThis.fetch = async () => { throw new TypeError('Failed to fetch'); }; };

const input = { customerName: 'Thabo', contactNumber: '0821234567', fulfilment: 'collection', lines: [{ productId: 'gc-hair-oil', quantity: 1 }] };

console.log('=== 1. ONLY A REAL 2xx ok:true BECOMES SUCCESS ===');
respond(201, '{"ok":true,"reference":"GC-1"}');
let r = await submitOrder(input);
check('201 {ok:true} -> success', r.ok === true && r.reference === 'GC-1');

for (const [label, status, body] of [
  ['200 html shell (no functions on host)', 200, '<!doctype html><html></html>'],
  ['404 no endpoint', 404, '{"error":"not_found"}'],
  ['500 crash', 500, '{"ok":false}'],
  ['503 not configured', 503, '{"ok":false,"error":"not_configured","message":"Offline"}'],
  ['200 but ok:false', 200, '{"ok":false,"message":"nope"}'],
  ['201 but malformed', 201, 'not json at all'],
  ['302 redirect html', 302, '<html>'],
]) {
  respond(status, body);
  const out = await submitOrder(input);
  check(`${label} -> NOT success`, out.ok === false, JSON.stringify(out));
}

console.log('=== 2. NETWORK FAILURE IS A REAL, RETRYABLE FAILURE ===');
explode();
r = await submitOrder(input);
check('fetch throw -> failure', r.ok === false);
check('marked retryable', r.retryable === true);
check('says nothing was lost', /nothing is lost/i.test(r.message), r.message);

console.log('=== 3. NOT-CONFIGURED IS DISTINGUISHED FROM A TRANSIENT ERROR ===');
respond(503, '{"ok":false,"error":"not_configured","message":"Online ordering is not switched on."}');
r = await submitOrder(input);
check('notConfigured flagged', r.notConfigured === true);
check('not retryable', r.retryable === false);
check('copy is honest', /not switched on/i.test(r.message), r.message);

respond(502, '{"ok":false,"error":"send_failed","message":"could not hand your order"}');
r = await submitOrder(input);
check('send_failed is NOT notConfigured', r.notConfigured === false);
check('send_failed IS retryable', r.retryable === true);

console.log('=== 4. FIELD ERRORS ARE PASSED THROUGH TO THE FORM ===');
respond(422, '{"ok":false,"error":"validation_failed","fields":{"contactNumber":"Use a 10-digit SA number."}}');
r = await submitOrder(input);
check('field message surfaced', r.fields?.contactNumber === 'Use a 10-digit SA number.');
check('not success', r.ok === false);

console.log('=== 5. CATALOGUE CHANGED IS NOT SILENTLY ACCEPTED ===');
respond(409, '{"ok":false,"error":"catalogue_changed","message":"Some items are gone."}');
r = await submitOrder(input);
check('409 surfaced', r.ok === false && /gone/.test(r.message));
check('not retryable blindly', r.retryable === false);

console.log('=== 6. CONTACT FORM HAS THE SAME RULES ===');
respond(201, '{"ok":true}');
r = await submitContact({ name: 'A B', email: 'a@b.co', phone: '', brand: 'All 3 Brands', type: 'retail', message: 'Hello there team' });
check('contact 201 -> success', r.ok === true);
respond(503, '{"ok":false,"error":"not_configured","message":"Not live."}');
r = await submitContact({ name: 'A B', email: 'a@b.co', phone: '', brand: 'All 3 Brands', type: 'retail', message: 'Hello there team' });
check('contact not-configured -> failure', r.ok === false && r.notConfigured === true);
check('no false "Message Received" path exists', r.ok === false);

console.log('=== 7. THE MAIL FALLBACK REALLY CARRIES THE ORDER ===');
const order = priceOrder([{ productId: 'gc-hair-oil', name: 'Hair Oil', size: '100ml', brand: 'Gladchemistry', unitPrice: 55, quantity: 2, lineTotal: 110, image: '' }], 'delivery');
const link = orderMailto(order, { ...input, fulfilment: 'delivery', contactNumber: '082 123 4567', email: 't@e.co', address: '12 Vilakazi St, Soweto', notes: 'Gate 4' });
check('mailto targets the shop inbox', link.startsWith('mailto:info@gladchemistry.com'), link.slice(0, 40));
const decoded = decodeURIComponent(link);
check('contains every line item', decoded.includes('2 x Hair Oil (100ml)'));
check('contains the totals', decoded.includes('Subtotal: R110.00') && decoded.includes('Total: R110.00'));
check('contains the address', decoded.includes('12 Vilakazi St, Soweto'));
check('no invented courier figure', !/R75/.test(decoded), decoded);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail === 0 ? 0 : 1);

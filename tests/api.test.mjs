/**
 * Drives the real api/order.ts and api/contact.ts handlers with a mocked mail
 * provider. Proves the two rules that matter commercially:
 *   1. an order is only accepted when the shop's inbox actually took it
 *   2. money is re-priced from the catalogue — client-sent prices are ignored
 */
const calls = [];
let mode = 'accept';
globalThis.fetch = async (url, init) => {
  calls.push({ url, body: JSON.parse(init.body) });
  if (mode === 'reject') return { ok: false, status: 422, text: async () => '{"message":"invalid from"}' };
  if (mode === 'throw') throw new Error('ECONNRESET');
  return { ok: true, status: 200, text: async () => '{"id":"mock"}' };
};

process.env.RESEND_API_KEY = 're_test_key';
process.env.ORDER_FROM_EMAIL = 'orders@gladchemistry.com';
process.env.ORDER_TO_EMAIL = 'info@gladchemistry.com';

const { default: order } = await import('../api/order.ts');
const { default: contact } = await import('../api/contact.ts');

let pass = 0, fail = 0;
const check = (l, c, e = '') => { if (c) { pass++; console.log('  PASS', l); } else { fail++; console.log('  FAIL', l, e); } };

const mkres = () => {
  const r = { code: 0, body: null };
  r.status = (c) => { r.code = c; return r; };
  r.json = (b) => { r.body = b; };
  r.setHeader = () => {};
  r.end = () => {};
  return r;
};

let ipSeq = 0;
const orderReq = (over = {}) => ({
  method: 'POST',
  headers: { 'x-forwarded-for': `41.0.0.${++ipSeq}` },
  body: {
    customerName: 'Thabo Nkosi',
    contactNumber: '082 123 4567',
    email: 'thabo@example.com',
    fulfilment: 'delivery',
    address: '12 Vilakazi Street, Orlando West, Soweto, 1804',
    notes: 'Gate code 1234',
    // the client claims R1 a unit — the server must ignore this entirely
    lines: [
      { productId: 'bubbles-pine-gel', quantity: 2, price: 1 },
      { productId: 'bubbles-citrus-gel', quantity: 1, price: 1 },
      { productId: 'gc-castor-oil-500', quantity: 1, price: 1 },
    ],
    ...over,
  },
});

console.log('=== A. provider ACCEPTS -> 201 ok:true, priced from the catalogue ===');
let res = mkres();
await order(orderReq(), res);
check('status 201', res.code === 201, String(res.code));
check('ok true', res.body?.ok === true);
check('reference issued', /^GC-\d{6}-[A-Z0-9]{4}$/.test(res.body?.reference ?? ''), res.body?.reference);
check('subtotal is catalogue truth (65*2 + 65 + 90 = 285)', res.body?.subtotal === 285, String(res.body?.subtotal));
check('client-supplied price was ignored', !JSON.stringify(res.body).includes('"total":4'));
check('exactly one mail sent', calls.length === 1, String(calls.length));
check('mail goes to the provider API', calls[0]?.url === 'https://api.resend.com/emails');
check('mail goes to the shop inbox', calls[0]?.body.to[0] === 'info@gladchemistry.com');
check('reply-to is the customer', calls[0]?.body.reply_to === 'thabo@example.com');
check('email lists every item', /2 x Bubbles Pine Gel/.test(calls[0].body.text) && /Castor Oil 500ml/.test(calls[0].body.text));
check('email carries the address', /12 Vilakazi Street/.test(calls[0].body.text));
check('email never invents a courier fee', !/R75/.test(calls[0].body.text));
check('unpublished courier cost is flagged, not guessed', /Quoted on confirmation/.test(calls[0].body.text));

console.log('=== B. free delivery over R500 ===');
calls.length = 0;
res = mkres();
await order(orderReq({ lines: [{ productId: 'felis-fragrances-startup', quantity: 1 }] }), res);
check('subtotal 1250', res.body?.subtotal === 1250);
check('no delivery fee', res.body?.deliveryFee === 0);
check('not flagged as quoted', res.body?.courierQuoted === false);
check('total is the subtotal', res.body?.total === 1250);

console.log('=== C. collection: no fee, address not required ===');
calls.length = 0;
res = mkres();
await order(orderReq({ fulfilment: 'collection', address: '' }), res);
check('accepted without an address', res.code === 201, String(res.code));
check('no fee', res.body?.deliveryFee === 0);
check('email states the actual shop address', /Palm Springs Shopping Mall, Shop 19, Springs, 1559/.test(calls[0].body.text));

console.log('=== D. provider REJECTS -> never ok:true ===');
mode = 'reject';
res = mkres();
await order(orderReq(), res);
check('502', res.code === 502, String(res.code));
check('not ok', res.body?.ok === false);

console.log('=== E. provider THROWS -> never ok:true ===');
mode = 'throw';
res = mkres();
await order(orderReq(), res);
check('502', res.code === 502, String(res.code));
check('not ok', res.body?.ok === false);

console.log('=== F. no transport configured -> 503, not a fake success ===');
mode = 'accept';
const savedKey = process.env.RESEND_API_KEY;
delete process.env.RESEND_API_KEY;
res = mkres();
await order(orderReq(), res);
check('503', res.code === 503, String(res.code));
check('not ok', res.body?.ok === false);
check('error is not_configured', res.body?.error === 'not_configured');
process.env.RESEND_API_KEY = savedKey;

console.log('=== G. bad input is rejected before any mail ===');
calls.length = 0;
res = mkres();
await order(orderReq({ customerName: 'A', contactNumber: '123', address: '', lines: [] }), res);
check('422', res.code === 422, String(res.code));
check('field messages returned', Object.keys(res.body?.fields ?? {}).length === 4, JSON.stringify(res.body?.fields));
check('no mail attempted', calls.length === 0);

console.log('=== H. an unknown product is refused, never silently dropped ===');
calls.length = 0;
res = mkres();
await order(orderReq({ lines: [{ productId: 'bubbles-pine-gel', quantity: 1 }, { productId: 'ghost', quantity: 1 }] }), res);
check('409', res.code === 409, String(res.code));
check('names the bad id', res.body?.unknownIds?.[0] === 'ghost');
check('no mail sent', calls.length === 0);

console.log('=== I. the capability probe is read-only and truthful ===');
res = mkres();
await order({ method: 'GET', headers: {}, body: null }, res);
check('GET probe -> 200', res.code === 200, String(res.code));
check('reports online ordering live when configured', res.body?.onlineOrdering === true);

delete process.env.RESEND_API_KEY;
res = mkres();
await order({ method: 'GET', headers: {}, body: null }, res);
check('reports NOT live when unconfigured', res.body?.onlineOrdering === false);
process.env.RESEND_API_KEY = savedKey;

res = mkres();
await contact({ method: 'GET', headers: {}, body: null }, res);
check('contact probe responds', res.body?.onlineMessaging === true);

console.log('=== I2. writes by any other method are refused ===');
for (const method of ['PUT', 'DELETE', 'PATCH']) {
  res = mkres();
  await order({ method, headers: {}, body: {} }, res);
  check(`${method} -> 405`, res.code === 405, String(res.code));
}

console.log('=== J. CONTACT: accepted ===');
calls.length = 0;
res = mkres();
await contact({ method: 'POST', headers: { 'x-forwarded-for': '41.9.0.9' }, body: {
  name: 'Lerato Dube', email: 'lerato@example.com', phone: '072 555 1234',
  brand: 'Bubbles Detergents (Home & Car Care)', type: 'wholesale',
  message: 'We would like wholesale pricing on the 20kg powder soap for four stores in Pretoria.' } }, res);
check('201', res.code === 201, String(res.code));
check('ok', res.body?.ok === true);
check('wholesale is labelled in the subject', /Wholesale/.test(calls[0].body.subject), calls[0].body.subject);
check('body carries the message', /20kg powder soap/.test(calls[0].body.text));

console.log('=== K. CONTACT: bad input ===');
calls.length = 0;
res = mkres();
await contact({ method: 'POST', headers: { 'x-forwarded-for': '41.9.0.10' }, body: { name: 'L', email: 'nope', message: 'hi' } }, res);
check('422', res.code === 422, String(res.code));
check('three field errors', Object.keys(res.body?.fields ?? {}).length === 3, JSON.stringify(res.body?.fields));
check('nothing sent', calls.length === 0);

console.log('=== L. CONTACT: unconfigured transport ===');
delete process.env.RESEND_API_KEY;
res = mkres();
await contact({ method: 'POST', headers: { 'x-forwarded-for': '41.9.0.11' }, body: {
  name: 'Lerato Dube', email: 'lerato@example.com', phone: '', brand: 'All 3 Brands', type: 'retail',
  message: 'Do you deliver outside Gauteng?' } }, res);
check('503', res.code === 503);
check('not_configured', res.body?.error === 'not_configured');
check('not ok', res.body?.ok === false);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail === 0 ? 0 : 1);

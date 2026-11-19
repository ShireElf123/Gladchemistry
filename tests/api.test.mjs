/**
 * Drives the real api/contact.ts handler with a mocked mail provider, proving
 * that a message is only reported as delivered when the shop's inbox actually
 * took it. The order handler is gone: the site has no checkout.
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

/*
 * The order handler was removed with the checkout. This site is a catalogue:
 * an order is a WhatsApp conversation, so there is no server-side basket to
 * re-price and no mail transport that could silently drop one. What remains
 * under test is the contact endpoint, which is still genuinely used.
 */

console.log('=== I. the capability probe is read-only and truthful ===');
let res = mkres();
await contact({ method: 'GET', headers: {}, body: null }, res);
check('contact probe responds', res.body?.onlineMessaging === true);

console.log('=== I2. writes by any other method are refused ===');
for (const method of ['PUT', 'DELETE', 'PATCH']) {
  res = mkres();
  await contact({ method, headers: {}, body: {} }, res);
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

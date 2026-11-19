/**
 * Real interaction tests in jsdom: click, type, submit — against the shipped
 * components, with the network stubbed. This is the honest substitute for a
 * browser session that this environment cannot run.
 */
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://gladchemistry.test/shop',
  pretendToBeVisual: true,
});

globalThis.window = dom.window;
globalThis.document = dom.window.document;
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
for (const k of [
  'HTMLElement', 'HTMLInputElement', 'HTMLTextAreaElement', 'HTMLFormElement',
  'Node', 'Element', 'MouseEvent', 'Event', 'getComputedStyle',
  'requestAnimationFrame', 'cancelAnimationFrame', 'localStorage',
]) {
  globalThis[k] = dom.window[k];
}

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// jsdom ships neither observer; framer-motion's inView needs both present.
class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
dom.window.IntersectionObserver = NoopObserver;
globalThis.IntersectionObserver = NoopObserver;
dom.window.ResizeObserver = NoopObserver;
globalThis.ResizeObserver = NoopObserver;
dom.window.matchMedia = () => ({
  matches: false,
  addEventListener() {},
  removeEventListener() {},
  addListener() {},
  removeListener() {},
});

const React = (await import('react')).default;
const { act } = await import('react');
const { createRoot } = await import('react-dom/client');
const { Harness } = await import('./build/ui.js');

let pass = 0;
let fail = 0;
const check = (label, condition, extra = '') => {
  if (condition) {
    pass++;
    console.log('  PASS', label);
  } else {
    fail++;
    console.log('  FAIL', label, extra);
  }
};

const bodyText = () => dom.window.document.body.textContent ?? '';

const findByText = (re) => {
  const nodes = [...dom.window.document.querySelectorAll('button, a, h2, h3, p, dt, dd, label, span')];
  return nodes.find((el) => re.test(el.textContent ?? '')) ?? null;
};

const flush = async (n = 8) => {
  for (let i = 0; i < n; i++) {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  }
};

const click = async (el) => {
  if (!el) throw new Error('nothing to click');
  await act(async () => {
    el.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  });
  await flush();
};

const type = async (el, value) => {
  if (!el) throw new Error('no field to type into');
  const proto =
    el instanceof dom.window.HTMLTextAreaElement
      ? dom.window.HTMLTextAreaElement.prototype
      : dom.window.HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
  await act(async () => {
    setter.call(el, value);
    el.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
  });
  await flush(2);
};

const submit = async (form) => {
  if (!form) throw new Error('no form');
  await act(async () => {
    form.dispatchEvent(new dom.window.Event('submit', { bubbles: true, cancelable: true }));
  });
  await flush(10);
};

const mount = async (props) => {
  const host = dom.window.document.createElement('div');
  dom.window.document.body.appendChild(host);
  const root = createRoot(host);
  await act(async () => {
    root.render(React.createElement(Harness, props));
  });
  await flush(3);
  return {
    host,
    async destroy() {
      await act(async () => {
        root.unmount();
      });
      host.remove();
    },
  };
};

// Default network: the capability probe says "live"; suites override as needed.
globalThis.fetch = async (url, init) => {
  if (init?.method === 'GET') {
    return {
      ok: true,
      status: 200,
      text: async () => '{"ok":true,"onlineOrdering":true,"onlineMessaging":true}',
    };
  }
  throw new Error('unexpected POST — this test did not expect a submission');
};

const openCartWith = (items) => {
  dom.window.localStorage.setItem(
    'gladchemistry.cart.v1',
    JSON.stringify({ version: 1, savedAt: new Date().toISOString(), items })
  );
};

const storage = () => JSON.parse(dom.window.localStorage.getItem('gladchemistry.cart.v1') || 'null');

/* ------------------------------------------------------------------ A */

console.log('=== A. EMPTY CART ===');
dom.window.localStorage.clear();
let app = await mount({ open: true });
check('drawer renders', bodyText().length > 0);
check('empty state shown', /Your cart is empty/.test(bodyText()));
check('no "Order Confirmed!" copy exists', !/Order Confirmed/i.test(bodyText()));
check('no checkout button with an empty cart', !/Continue to order details/.test(bodyText()));
await app.destroy();

/* ------------------------------------------------------------------ B */

console.log('=== B. A SAVED CART SURVIVES A RELOAD ===');
dom.window.localStorage.clear();
openCartWith([
  { id: 'bubbles-pine-gel', quantity: 2 },
  { id: 'gc-hair-oil', quantity: 1 },
]);
app = await mount({ open: true });
check('both lines restored', /Bubbles Pine Gel/.test(bodyText()) && /Hair Oil/.test(bodyText()));
check(
  'subtotal re-priced from the live catalogue (65x2 + 55 = 185)',
  /R185\.00/.test(bodyText()),
  bodyText().match(/R[\d.,]+/g)?.join(' ')
);

/* ------------------------------------------------------------------ C */

console.log('=== C. QUANTITY CONTROLS ===');
await click(dom.window.document.querySelector('button[aria-label="More Bubbles Pine Gel"]'));
check('increment updates the line and subtotal (250)', /R250\.00/.test(bodyText()), bodyText().match(/R[\d.,]+/g)?.join(' '));
await click(dom.window.document.querySelector('button[aria-label="Fewer Bubbles Pine Gel"]'));
await click(dom.window.document.querySelector('button[aria-label="Fewer Bubbles Pine Gel"]'));
check('decrement back to 1 (120)', /R120\.00/.test(bodyText()), bodyText().match(/R[\d.,]+/g)?.join(' '));

/* ------------------------------------------------------------------ D */

console.log('=== D. REMOVE + PERSISTENCE ===');
await click(dom.window.document.querySelector('button[aria-label="Remove Hair Oil"]'));
check('removed line disappears', !/Hair Oil/.test(bodyText()));
check('storage reflects the removal', (storage()?.items ?? []).length === 1, JSON.stringify(storage()));

/* ------------------------------------------------------------------ E */

console.log('=== E. THUMBNAIL IS CONTAIN-FIT, NEVER CROPPED ===');
const thumb = dom.window.document.querySelector('img[alt="Bubbles Pine Gel"]');
check('cart thumbnail exists', Boolean(thumb));
check('thumbnail uses object-contain', /object-contain/.test(thumb?.className ?? ''), thumb?.className);
check('thumbnail has no object-cover', !/object-cover/.test(thumb?.className ?? ''));

await click(dom.window.document.querySelector('button[aria-label="Remove Bubbles Pine Gel"]'));
check('emptying the cart clears storage', (storage()?.items ?? []).length === 0);
await app.destroy();

/* ------------------------------------------------------------------ F */

console.log('=== F. CHECKOUT FORM VALIDATES BEFORE TOUCHING THE NETWORK ===');
openCartWith([{ id: 'gc-hair-oil', quantity: 1 }]);
app = await mount({ open: true });
await click(findByText(/Continue to order details/));
check('details step opens', /How would you like it\?/.test(bodyText()));
check('both fulfilment options offered', /Delivery/.test(bodyText()) && /Collect in Springs/.test(bodyText()));

let calls = 0;
globalThis.fetch = async () => {
  calls++;
  return { ok: true, status: 201, text: async () => '{"ok":true,"reference":"GC-TEST"}' };
};
await submit(dom.window.document.querySelector('form#checkout-form'));
check('empty submit sent nothing', calls === 0, `${calls} calls`);
check('name required', /Please enter your full name/.test(bodyText()));
check('phone required', /contact number is required/i.test(bodyText()));
check('address required for delivery', /street address and suburb/i.test(bodyText()));
check('no confirmation appeared', !/Order sent to the shop/.test(bodyText()));

/* ------------------------------------------------------------------ G */

console.log('=== G. COLLECTION DROPS THE ADDRESS REQUIREMENT ===');
await click(findByText(/Collect in Springs/));
check('address field disappears', !dom.window.document.querySelector('#gc-address'));
check('shop address is stated', /Palm Springs Shopping Mall, Shop 19, Springs, 1559/.test(bodyText()));
await click(findByText(/^Delivery$/));

/* ------------------------------------------------------------------ H */

console.log('=== H. A GENUINE ACCEPTANCE IS THE ONLY WAY TO A CONFIRMATION ===');
await type(dom.window.document.querySelector('#gc-name'), 'Thabo Nkosi');
await type(dom.window.document.querySelector('#gc-phone'), '082 123 4567');
await type(dom.window.document.querySelector('#gc-address'), '12 Vilakazi Street, Orlando West, Soweto, 1804');
await type(dom.window.document.querySelector('#gc-notes'), 'Gate code 1234');
await flush(2);
check('errors cleared as the user types', !/Please enter your full name/.test(bodyText()));
await submit(dom.window.document.querySelector('form#checkout-form'));
check('exactly one request', calls === 1, `${calls}`);
check('confirmation shown after acceptance', /Order sent to the shop/.test(bodyText()));
check('reference shown', /GC-TEST/.test(bodyText()));
check('cart cleared only after acceptance', (storage()?.items ?? []).length === 0, JSON.stringify(storage()));
await app.destroy();

/* ------------------------------------------------------------------ I */

console.log('=== I. A REJECTED ORDER SHOWS AN ERROR AND KEEPS THE CART ===');
openCartWith([{ id: 'gc-hair-oil', quantity: 1 }]);
app = await mount({ open: true });
await click(findByText(/Continue to order details/));
await type(dom.window.document.querySelector('#gc-name'), 'Thabo Nkosi');
await type(dom.window.document.querySelector('#gc-phone'), '082 123 4567');
await type(dom.window.document.querySelector('#gc-address'), '12 Vilakazi Street, Soweto, 1804');

globalThis.fetch = async () => ({
  ok: false,
  status: 503,
  text: async () =>
    '{"ok":false,"error":"not_configured","message":"Online ordering is not switched on for this deployment yet."}',
});
await submit(dom.window.document.querySelector('form#checkout-form'));
check('no confirmation', !/Order sent to the shop/.test(bodyText()));
check('honest headline', /Online ordering is not live yet/.test(bodyText()));
check('cart kept', (storage()?.items ?? []).length === 1, JSON.stringify(storage()));
check('email fallback offered', /Email this order/.test(bodyText()));
check('whatsapp fallback offered', /WhatsApp/.test(bodyText()));
check('phone fallback offered', /073 719 0821/.test(bodyText()));

/* ------------------------------------------------------------------ J */

console.log('=== J. A TRANSIENT FAILURE IS DISTINGUISHED FROM NOT-CONFIGURED ===');
globalThis.fetch = async () => ({
  ok: false,
  status: 502,
  text: async () =>
    '{"ok":false,"error":"send_failed","message":"We could not hand your order to the shop just now."}',
});
await submit(dom.window.document.querySelector('form#checkout-form'));
check('retry message shown', /That did not go through/.test(bodyText()));
check('not mislabelled as unconfigured', !/Online ordering is not live yet/.test(bodyText()));
check('still no confirmation', !/Order sent to the shop/.test(bodyText()));
check('cart still kept', (storage()?.items ?? []).length === 1);
await app.destroy();

/* ------------------------------------------------------------------ K */

console.log('=== K. CONTACT FORM: VALIDATION ===');
dom.window.localStorage.clear();
app = await mount({ open: false, page: 'contact' });
check('form renders', /Contact & Wholesale/.test(bodyText()));
check('no fake success on load', !/Message Received|Message delivered/.test(bodyText()));

let contactCalls = 0;
globalThis.fetch = async () => {
  contactCalls++;
  return { ok: true, status: 201, text: async () => '{"ok":true}' };
};
await submit(dom.window.document.querySelector('form'));
check('invalid form sent nothing', contactCalls === 0, String(contactCalls));
check('name error', /Please enter your full name/.test(bodyText()));
check('email error', /email address is required/i.test(bodyText()));
check('message error', /at least 10 characters/.test(bodyText()));
check('no success shown', !/Message delivered/.test(bodyText()));

/* ------------------------------------------------------------------ L */

console.log('=== L. CONTACT FORM: GENUINE SUCCESS ===');
await type(dom.window.document.querySelector('#ct-name'), 'Lerato Dube');
await type(dom.window.document.querySelector('#ct-email'), 'lerato@example.com');
await type(dom.window.document.querySelector('#ct-phone'), '072 555 1234');
await type(dom.window.document.querySelector('#ct-message'), 'Please send wholesale pricing for the 20kg powder soap.');
await flush(2);
await submit(dom.window.document.querySelector('form'));
check('sent once', contactCalls === 1, String(contactCalls));
check('success shown after acceptance', /Message delivered/.test(bodyText()));

/* ------------------------------------------------------------------ M */

console.log('=== M. CONTACT FORM: REAL FAILURE ===');
await click(findByText(/Send Another Message/));
await type(dom.window.document.querySelector('#ct-name'), 'Lerato Dube');
await type(dom.window.document.querySelector('#ct-email'), 'lerato@example.com');
await type(dom.window.document.querySelector('#ct-message'), 'Please send wholesale pricing for the 20kg powder soap.');

globalThis.fetch = async () => ({
  ok: false,
  status: 503,
  text: async () =>
    '{"ok":false,"error":"not_configured","message":"Online messaging is not switched on for this deployment yet."}',
});
await submit(dom.window.document.querySelector('form'));
check('no success message', !/Message delivered/.test(bodyText()));
check('failure stated', /Online messaging is not live yet/.test(bodyText()));
check('email fallback offered', /Send by email instead/.test(bodyText()));
check('typed content is preserved for the fallback', /Lerato Dube/.test(dom.window.document.querySelector('form')?.textContent ?? '') || Boolean(dom.window.document.querySelector('#ct-name')?.value));
await app.destroy();

/* ------------------------------------------------------------------ N2 */

console.log('=== N2. CONTACT FORM NEVER PRETENDS TO BE LIVE ===');
globalThis.fetch = async () => ({
  ok: true,
  status: 200,
  text: async () => '{"ok":true,"onlineOrdering":false,"onlineMessaging":false}',
});
app = await mount({ open: false, page: 'contact' });
check('offline messaging is announced up front', /Online messaging is not switched on yet/.test(bodyText()));
check('a working email-app route is offered', /Write this in my email app/.test(bodyText()));
check('no success message on load', !/Message delivered/.test(bodyText()));
await app.destroy();

globalThis.fetch = async (url, init) => {
  if (init?.method === 'GET') {
    return { ok: true, status: 200, text: async () => '<!doctype html><html></html>' };
  }
  throw new Error('unexpected POST');
};
app = await mount({ open: false, page: 'contact' });
check('missing endpoint is reported honestly', /This deployment cannot send messages/.test(bodyText()));
await app.destroy();

/* ------------------------------------------------------------------ N */

console.log('=== N. THE SHOP DOES NOT OFFER A CHECKOUT IT CANNOT DELIVER ===');
openCartWith([{ id: 'gc-hair-oil', quantity: 1 }]);

// Deployment with no mail transport: the cart still works, the form is not
// offered as if it were live, and the real handoff is put in front of the user.
globalThis.fetch = async (url, init) => {
  if (init?.method === 'GET') {
    return { ok: true, status: 200, text: async () => '{"ok":true,"onlineOrdering":false}' };
  }
  throw new Error('no POST should be attempted in the offline state');
};
app = await mount({ open: true });
check('offline state is announced', /Online ordering is not live yet/.test(bodyText()));
check('the reason is not hidden', /not live yet/i.test(bodyText()));
check('email handoff available', Boolean(findByText(/^Continue to order details$/)));
check('no false promise of a live checkout', !/Online ordering is live/.test(bodyText()));

// Reaching the details step in the offline state must offer a real route, not a
// submit button we already know will fail.
await click(findByText(/^Continue to order details$/));
await type(dom.window.document.querySelector('#gc-name'), 'Thabo Nkosi');
await type(dom.window.document.querySelector('#gc-phone'), '082 123 4567');
await type(dom.window.document.querySelector('#gc-address'), '12 Vilakazi Street, Soweto, 1804');
await flush(2);
check('no submit button that cannot work', !/Send order to the shop/.test(bodyText()));
check('finished order is handed to a real channel', Boolean(findByText(/Email this order to the shop/)));
const mailHref = [...dom.window.document.querySelectorAll('a')].find(a => a.href.startsWith('mailto:info@gladchemistry.com'));
check('mailto carries the shop inbox', Boolean(mailHref));
check('mailto carries the typed order', /Thabo%20Nkosi|Thabo Nkosi/.test(decodeURIComponent(mailHref?.href ?? '')));
await app.destroy();

// Static host with no functions at all: the shell comes back instead of JSON.
globalThis.fetch = async () => ({
  ok: true,
  status: 200,
  text: async () => '<!doctype html><html><body>app shell</body></html>',
});
app = await mount({ open: true });
check('unavailable state detected from a non-JSON response', /No online ordering on this deployment/.test(bodyText()));
check('three genuine handoff routes offered', /Email/.test(bodyText()) && /WhatsApp/.test(bodyText()) && /Call/.test(bodyText()));
check('shop phone present', /073 719 0821/.test(bodyText()));
await app.destroy();

// Probe itself throws (offline device).
globalThis.fetch = async () => {
  throw new TypeError('Failed to fetch');
};
app = await mount({ open: true });
check('a failed probe degrades to unavailable, not to a fake live', /No online ordering on this deployment/.test(bodyText()));
await app.destroy();

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

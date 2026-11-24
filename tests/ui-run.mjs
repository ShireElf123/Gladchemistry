/**
 * Real interaction tests in jsdom: click, type, submit — against the shipped
 * components, with the network stubbed. This is the honest substitute for a
 * browser session that this environment cannot run.
 */
import { JSDOM } from 'jsdom';
import { Smoke, goTo } from './build/smoke.js';

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

/* ------------------------------------------------------------------ A */

console.log('=== A. THE CATALOGUE IS NOT A CHECKOUT ===');
dom.window.localStorage.clear();
let app = await mount({ page: 'card' });
check('card renders', bodyText().length > 0);
check('no "Order Confirmed!" copy exists', !/Order Confirmed/i.test(bodyText()));
check('no cart vocabulary on the card', !/Add to cart/i.test(bodyText()));
check('no checkout vocabulary on the card', !/Continue to order details/i.test(bodyText()));
check('an enquiry route is offered', /Enquire/.test(bodyText()));
await app.destroy();

/* ------------------------------------------------------------------ B */

console.log('=== B. A PRODUCT WITH A GOOD PHOTOGRAPH SHOWS IT ===');
app = await mount({ page: 'card', productId: 'bubbles-pine-gel' });
const img = dom.window.document.querySelector('.stage img');
check('the photograph is rendered', Boolean(img), img?.getAttribute('src'));
check('it carries alt text naming the product', /Pine Gel/i.test(img?.getAttribute('alt') ?? ''));
await app.destroy();

/* ------------------------------------------------------------------ C */

console.log('=== C. ARTWORK WHOSE LABEL IS NOT HERS IS TYPESET, NEVER SHOWN ===');

/* The car interior cleaner is the one product with no photograph of it in the
   repo at all. The frame that used to ship invented a white jerrycan and a
   paw-print mark that is not her brand, so the picture was withdrawn. The tile
   must still sell the product: name, size, price, enquiry. */
app = await mount({ page: 'card', productId: 'bubbles-car-interior' });
check('no image element at all', !dom.window.document.querySelector('.stage img'));
check('the name is still listed', /Car Tyre/i.test(bodyText()));
check('the price is still listed', /R50/.test(bodyText()));
check('the size is still listed', /1L/i.test(bodyText()));
check('a typographic plate is used', Boolean(dom.window.document.querySelector('.plate')));
check('the plate says why, not "coming soon"', /reshot/i.test(bodyText()));
check('the enquiry link survives', Boolean(dom.window.document.querySelector('a[href*="wa.me"]')));
await app.destroy();

/* And the products that DID get her real photograph back must actually show it,
   otherwise the withdrawal has quietly emptied the catalogue instead of fixing
   it. */
app = await mount({ page: 'card', productId: 'gc-foam-bath-15l' });
const fb = dom.window.document.querySelector('.stage img');
check('reinstated photo is rendered', Boolean(fb), fb?.getAttribute('src'));
check('it is her photograph, not a generated frame', /c85579b9/.test(fb?.getAttribute('src') ?? ''));
check('the plate is NOT used', !dom.window.document.querySelector('.plate'));
await app.destroy();

/* ------------------------------------------------------------------ D */

console.log('=== D. THE NAVBAR OFFERS A CONVERSATION, NOT A BASKET ===');
app = await mount({ page: 'navbar' });
const wa = dom.window.document.querySelector('a[href*="wa.me"]');
check('a WhatsApp link exists', Boolean(wa), wa?.getAttribute('href'));
check('it targets the shop number', /27737190821/.test(wa?.getAttribute('href') ?? ''));
check('no cart button', !/Cart/i.test(bodyText()));
check('the real shop address is announced', /Palm Springs/i.test(bodyText()));
check('no unverified delivery promise', !/Free delivery/i.test(bodyText()));
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

console.log('=== N. ORDERING IS A CONVERSATION, AND IT DOES NOT PRETEND OTHERWISE ===');

// There is no checkout to be offline. Every route offered must be a channel the
// shop genuinely answers on: WhatsApp, a phone call, or email.
globalThis.fetch = async () => {
  throw new Error('the catalogue must not POST an order anywhere');
};
app = await mount({ page: 'card', productId: 'gc-hair-oil' });
const enquire = dom.window.document.querySelector('a.enquire');
check('the card offers an enquiry link', Boolean(enquire));
const href = enquire?.getAttribute('href') ?? '';
check('it goes to WhatsApp', href.startsWith('https://wa.me/27737190821'), href);
check('the message names the product', /Hair%20Oil/.test(href));
check('the message states the price', /R55/.test(href), href);
check(
  'nothing on the card claims online ordering is live',
  !/Online ordering is live/.test(bodyText()) && !/Add to cart/.test(bodyText())
);
await app.destroy();

// The contact route must remain a real, working fallback for anyone who prefers
// not to use WhatsApp.
app = await mount({ page: 'contact' });
check('the shop phone number is published', /073 719 0821/.test(bodyText()));
await app.destroy();

// The whole app must render on every route. A blank page is the one failure that
// unit tests never catch, so it is checked here against the real router.
console.log('\n=== Z. EVERY ROUTE RENDERS ===');
for (const path of ['/', '/shop', '/brands', '/about', '/contact', '/nope']) {
  goTo(path);
  const host = dom.window.document.createElement('div');
  dom.window.document.body.innerHTML = '';
  dom.window.document.body.appendChild(host);
  const { createRoot } = await import('react-dom/client');
  const React = (await import('react')).default;
  const { act } = await import('react');
  const root = createRoot(host);
  await act(async () => { root.render(React.createElement(Smoke)); });
  await flush(3);
  const text = host.textContent ?? '';
  const nodes = host.querySelectorAll('*').length;
  check(`${path} renders content`, text.trim().length > 200 && nodes > 20, `${text.length} chars, ${nodes} nodes`);
  await act(async () => { root.unmount(); });
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

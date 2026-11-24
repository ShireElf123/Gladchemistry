/* Render the shipped Shop page in jsdom and dump its visible text, so the
   catalogue can be reviewed without a browser. */
import { JSDOM } from 'jsdom';
import fs from 'fs';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'https://gladchemistry.test/shop',
  pretendToBeVisual: true,
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
for (const k of ['HTMLElement','HTMLInputElement','HTMLTextAreaElement','HTMLFormElement','Node','Element','MouseEvent','Event','getComputedStyle','requestAnimationFrame','cancelAnimationFrame','localStorage']) {
  globalThis[k] = dom.window[k];
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
class NoopObserver { observe(){} unobserve(){} disconnect(){} takeRecords(){return [];} }
dom.window.IntersectionObserver = NoopObserver; globalThis.IntersectionObserver = NoopObserver;
dom.window.ResizeObserver = NoopObserver; globalThis.ResizeObserver = NoopObserver;
dom.window.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });

const React = (await import('react')).default;
const { act } = await import('react');
const { createRoot } = await import('react-dom/client');
const { Smoke } = await import('/home/user/Gladchemistry/tests/build/smoke.js');

const root = createRoot(document.getElementById('root'));
await act(async () => { root.render(React.createElement(Smoke)); });
for (let i=0;i<10;i++) await act(async () => { await new Promise(r=>setTimeout(r,0)); });

const body = document.body;
console.log('IMG ELEMENTS:', document.querySelectorAll('img').length);
console.log('IMG SRCs:', [...document.querySelectorAll('img')].map(i=>i.getAttribute('src')));
console.log('DETAILS COUNT:', document.querySelectorAll('details').length);
console.log('--- visible text ---');
console.log((body.textContent ?? '').replace(/\s+/g,' ').slice(0, 2200));
fs.writeFileSync('.work/shop.html', body.innerHTML);
process.exit(0);

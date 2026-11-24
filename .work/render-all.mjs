import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'https://gladchemistry.test/', pretendToBeVisual: true });
globalThis.window = dom.window; globalThis.document = dom.window.document;
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
for (const k of ['HTMLElement','HTMLInputElement','HTMLTextAreaElement','HTMLFormElement','Node','Element','MouseEvent','Event','getComputedStyle','requestAnimationFrame','cancelAnimationFrame','localStorage']) globalThis[k] = dom.window[k];
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
class NO { observe(){} unobserve(){} disconnect(){} takeRecords(){return [];} }
dom.window.IntersectionObserver = NO; globalThis.IntersectionObserver = NO;
dom.window.ResizeObserver = NO; globalThis.ResizeObserver = NO;
dom.window.matchMedia = () => ({ matches:false, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
const React = (await import('react')).default;
const { act } = await import('react');
const { createRoot } = await import('react-dom/client');
const { Smoke, goTo } = await import('/home/user/Gladchemistry/tests/build/smoke.js');
const root = createRoot(document.getElementById('root'));
for (const path of ['/', '/shop', '/brands', '/about', '/contact']) {
  goTo(path);
  await act(async () => { root.render(React.createElement(Smoke)); });
  for (let i=0;i<8;i++) await act(async () => { await new Promise(r=>setTimeout(r,0)); });
  const imgs = [...document.querySelectorAll('img')].map(i=>i.getAttribute('src'));
  const bad = imgs.filter(s => s && !s.includes('gladchemistry-logo'));
  const txt = (document.body.textContent ?? '').replace(/\s+/g,' ').trim();
  console.log(`${path.padEnd(9)} imgs=${imgs.length} non-logo=${bad.length} details=${document.querySelectorAll('details').length} chars=${txt.length}`);
  if (bad.length) console.log('   BAD:', bad);
}
process.exit(0);

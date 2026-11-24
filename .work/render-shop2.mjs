import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'https://gladchemistry.test/shop', pretendToBeVisual: true });
globalThis.window = dom.window; globalThis.document = dom.window.document;
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
for (const k of ['HTMLElement','HTMLInputElement','HTMLTextAreaElement','HTMLFormElement','Node','Element','MouseEvent','Event','getComputedStyle','requestAnimationFrame','cancelAnimationFrame','localStorage']) globalThis[k]=dom.window[k];
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
class NO { observe(){} unobserve(){} disconnect(){} takeRecords(){return[];} }
dom.window.IntersectionObserver=NO; globalThis.IntersectionObserver=NO;
dom.window.ResizeObserver=NO; globalThis.ResizeObserver=NO;
dom.window.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
const React=(await import('react')).default; const {act}=await import('react');
const {createRoot}=await import('react-dom/client');
const {Smoke,goTo}=await import('/home/user/Gladchemistry/tests/build/smoke.js');
goTo('/shop');
const root=createRoot(document.getElementById('root'));
await act(async()=>{root.render(React.createElement(Smoke));});
for(let i=0;i<10;i++) await act(async()=>{await new Promise(r=>setTimeout(r,0));});
const imgs=[...document.querySelectorAll('img')].map(i=>({src:i.getAttribute('src'),alt:i.getAttribute('alt'),w:i.getAttribute('width')}));
const details=[...document.querySelectorAll('details')];
console.log('details:',details.length,'img elements:',imgs.length);
console.log('detail imgs:',imgs.length-details.length);
const withImg=details.filter(d=>d.querySelector('img')).length;
console.log('details WITH a photo:',withImg,' without:',details.length-withImg);
imgs.slice(0,6).forEach(i=>console.log('  ',i.src,'|',i.alt));
process.exit(0);

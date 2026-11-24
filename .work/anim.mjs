import { JSDOM } from 'jsdom';
const dom=new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>',{url:'https://x.test/',pretendToBeVisual:true});
globalThis.window=dom.window; globalThis.document=dom.window.document;
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
for(const k of ['HTMLElement','HTMLInputElement','HTMLTextAreaElement','HTMLFormElement','Node','Element','MouseEvent','Event','getComputedStyle','requestAnimationFrame','cancelAnimationFrame','localStorage'])globalThis[k]=dom.window[k];
globalThis.IS_REACT_ACT_ENVIRONMENT=true;
class NO{observe(){}unobserve(){}disconnect(){}takeRecords(){return[];}}
dom.window.IntersectionObserver=NO;globalThis.IntersectionObserver=NO;
dom.window.ResizeObserver=NO;globalThis.ResizeObserver=NO;
dom.window.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
dom.window.scrollTo=()=>{};
const React=(await import('react')).default;const{act}=await import('react');
const{createRoot}=await import('react-dom/client');
const{Smoke,goTo}=await import('/home/user/Gladchemistry/tests/build/smoke.js');
goTo('/');
const root=createRoot(document.getElementById('root'));
await act(async()=>{root.render(React.createElement(Smoke));});
for(let i=0;i<15;i++)await act(async()=>{await new Promise(r=>setTimeout(r,20));});
const g=document.querySelectorAll('.grid-anim');
console.log('grid-anim elements:',g.length);
console.log('reveal elements:',document.querySelectorAll('.reveal').length);
console.log('details:',document.querySelectorAll('details').length);
// did gsap touch them? check inline transform/opacity
let touched=0;
g.forEach(e=>{if(e.style.transform||e.style.opacity) touched++;});
console.log('grid-anim with gsap inline styles:',touched);
let rv=0; document.querySelectorAll('.reveal').forEach(e=>{if(e.style.transform||e.style.opacity) rv++;});
console.log('reveal with gsap inline styles:',rv);
process.exit(0);

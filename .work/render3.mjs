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
const React=(await import('react')).default;const{act}=await import('react');
const{createRoot}=await import('react-dom/client');
const{Smoke,goTo}=await import('/home/user/Gladchemistry/tests/build/smoke.js');
const root=createRoot(document.getElementById('root'));
for(const path of ['/shop','/brands']){
  goTo(path);
  await act(async()=>{root.render(React.createElement(Smoke));});
  for(let i=0;i<10;i++)await act(async()=>{await new Promise(r=>setTimeout(r,0));});
  const d=[...document.querySelectorAll('details')];
  const imgs=[...document.querySelectorAll('img')].map(i=>i.getAttribute('src'));
  const detImgs=d.filter(x=>x.querySelector('img')).length;
  console.log(`\n${path}: details=${d.length} withPhoto=${detImgs} imgs=${imgs.length}`);
  [...new Set(imgs)].forEach(s=>console.log('   ',s));
}
process.exit(0);

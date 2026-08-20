import { chromium } from 'playwright';
const BASE='http://127.0.0.1:5173/abrazame-webcore/';
const b=await chromium.launch({headless:true});
const p=await b.newPage();
await p.goto(BASE,{waitUntil:'networkidle'});
await p.waitForTimeout(1000);
let r=await p.evaluate(()=>{
  const s=(el,prop)=> el?getComputedStyle(el)[prop]:'none';
  return {
    bodyBg:getComputedStyle(document.body).backgroundColor,
    textureBg:getComputedStyle(document.querySelector('.aero-layout__texture')).backgroundColor,
    contentBg:getComputedStyle(document.querySelector('.aero-layout__content')).backgroundColor,
    windowBg:getComputedStyle(document.querySelector('.aero-window')).backgroundColor,
    titleBg:getComputedStyle(document.querySelector('.aero-titlebar')).backgroundColor,
    panelBg:getComputedStyle(document.querySelector('.aero-panel')).backgroundColor,
    h2Size:getComputedStyle(document.querySelector('.aero-panel h2')).fontSize,
    hasHScroll:document.documentElement.scrollWidth>document.documentElement.clientWidth,
    mood:document.documentElement.dataset.mood
  };
});
console.log(r);
await b.close();
let ok=true;
if(!r.bodyBg.includes('70, 189, 115')) ok=false;
if(!r.textureBg.includes('40, 116, 216')) ok=false;
if(!r.contentBg.includes('55, 55, 216')) ok=false;
if(!r.titleBg.includes('192, 0, 216') && !r.titleBg.includes('92, 52, 183')) ok=false;
if(!r.panelBg.includes('255, 255, 255')) ok=false;
if(r.h2Size!=='14px') ok=false;
if(r.hasHScroll) ok=false;
console.log(ok?'PORTAL PASS':'PORTAL FAIL');
process.exit(ok?0:1);

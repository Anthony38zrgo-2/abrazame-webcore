import { chromium } from 'playwright';
const BASE = process.env.BASE_URL || process.env.BASE || 'http://127.0.0.1:5173/abrazame-webcore/';
const b = await chromium.launch({headless:true});
const p = await b.newPage({ viewport:{width:1024, height:768}});
await p.goto(BASE, {waitUntil:'networkidle'});
await p.waitForTimeout(800);
let outer = await p.evaluate(()=> {
  const el = document.querySelector('header .aero-window');
  const r = el.getBoundingClientRect();
  return {w: Math.round(r.width), h: Math.round(r.height), top: Math.round(r.top)};
});
let inner = await p.evaluate(()=> {
  const el = document.querySelector('.aero-panel');
  const r = el.getBoundingClientRect();
  return {w: Math.round(r.width), h: Math.round(r.height)};
});
let h2 = await p.evaluate(()=> document.querySelector('h2')?.innerText.slice(0,20));
let img = await p.evaluate(()=> !!document.querySelector('img[alt="liminal"]'));
console.log('outer', outer);
console.log('inner', inner);
console.log('h2', JSON.stringify(h2));
console.log('img', img);
let clutter = await p.evaluate(()=> ({
  marquee: !!document.querySelector('.emo-marquee'),
  hit: !!document.querySelector('.hit-counter'),
  winamp: !!document.querySelector('.winamp'),
  glitter: document.querySelectorAll('.glitter-divider').length,
  floating: document.querySelectorAll('.floating-gifs__item').length,
  cursor: !!document.querySelector('.cursor-trail'),
  avatar: !!document.querySelector('.emo-avatar'),
  crt: !!document.querySelector('.crt-overlay')
}));
console.log('clutter', clutter);
await p.screenshot({path:'docs/captures/emo-home-1024.png'});
console.log('screenshot docs/captures/emo-home-1024.png');
await b.close();

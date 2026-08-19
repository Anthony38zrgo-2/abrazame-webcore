import { chromium } from 'playwright';
const b = await chromium.launch({headless:true});
const p = await b.newPage();
await p.goto('http://127.0.0.1:5173/abrazame-webcore/#/c1', {waitUntil:'networkidle'});
let sideGifs = await p.evaluate(()=> Array.from(document.querySelectorAll('aside img')).length);
console.log('side gifs count', sideGifs);
let floating = await p.evaluate(()=> document.querySelectorAll('.floating-gifs').length);
console.log('floating gifs containers', floating);
let hasRomeroButton = await p.evaluate(()=> !!document.querySelector('img[alt="romero"]'));
console.log('romero button', hasRomeroButton);
let rainSymbols = await p.evaluate(()=> {
  const el = document.querySelector('.aero-rain span');
  return el ? el.textContent : 'none';
});
console.log('rain symbol sample', JSON.stringify(rainSymbols));
await b.close();

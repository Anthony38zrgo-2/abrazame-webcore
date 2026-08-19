#!/usr/bin/env node
// scripts/audit-overflow.mjs — auditoría DOM hasHScroll / clip (creado)
import { chromium } from 'playwright';

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5173/abrazame-webcore/';

async function main() {
  console.log(`[audit-overflow] auditing ${BASE_URL}`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 15000 }).catch(async () => {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 15000 });
  });

  const result = await page.evaluate(() => {
    const hasHScroll = document.documentElement.scrollWidth > document.documentElement.clientWidth;
    const offenders = [];
    const all = document.querySelectorAll('*');
    all.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > window.innerWidth) {
        const style = getComputedStyle(el);
        offenders.push({
          tag: el.tagName,
          class: el.className?.toString().slice(0,80) || '',
          width: Math.round(rect.width),
          overflow: style.overflow,
          overflowX: style.overflowX,
          clip: style.clipPath || style.clip || '',
        });
      }
    });
    const clipped = [];
    all.forEach(el => {
      const s = getComputedStyle(el);
      if (s.overflow === 'hidden' || s.overflowX === 'hidden' || s.clipPath !== 'none') {
        clipped.push({ tag: el.tagName, class: el.className?.toString().slice(0,80) || '', overflow: s.overflow, overflowX: s.overflowX, clipPath: s.clipPath });
      }
    });
    return {
      hasHScroll,
      viewport: { w: window.innerWidth, h: window.innerHeight },
      docWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      offenders: offenders.slice(0,10),
      clippedSample: clipped.slice(0,5),
    };
  });

  console.log(JSON.stringify(result, null, 2));
  if (result.hasHScroll) {
    console.warn('⚠ hasHScroll = true — hay overflow horizontal!');
    if (result.offenders.length) console.warn('Offenders:', result.offenders);
  } else {
    console.log('✓ No hay scroll horizontal — overflow OK');
  }
  if (result.clippedSample.length) {
    console.log('Clip/overflow hidden samples:', result.clippedSample);
  }
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });

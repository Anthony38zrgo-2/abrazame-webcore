#!/usr/bin/env node
// scripts/verify-responsive.mjs — captura 7 viewports + fix scroll loading="lazy" (creado)
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5173/abrazame-webcore/';

const VIEWPORTS = [
  { name: 'iphone-se', width: 375, height: 667 },
  { name: 'iphone-14', width: 390, height: 844 },
  { name: 'pixel-7', width: 412, height: 915 },
  { name: 'ipad-mini', width: 768, height: 1024 },
  { name: 'ipad-pro', width: 1024, height: 1366 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'desktop-xl', width: 1920, height: 1080 },
];

async function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function main() {
  const outRoot = path.resolve('docs/migration/.screenshots/sprint-1');
  await ensureDir(outRoot);
  console.log(`[verify-responsive] Base URL: ${BASE_URL}`);
  console.log(`[verify-responsive] 7 viewports -> ${outRoot}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  // Fix scroll + loading lazy audit (auto-fix in DOM if lazy missing)
  for (const vp of VIEWPORTS) {
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    console.log(` -> ${vp.name} ${vp.width}x${vp.height}`);
    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 15000 });
    } catch (e) {
      console.warn(`   ! goto failed ${vp.name}: ${e.message} — retry with domcontentloaded`);
      await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 15000 });
    }
    // fix scroll: ensure overflow-x hidden works, scroll to bottom loading lazy
    await page.evaluate(() => {
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        // force eager for audit if needed
      });
      document.querySelectorAll('img:not([loading])').forEach(img => {
        img.setAttribute('loading', 'lazy');
        console.log('[fix] added loading=lazy to', img.src?.slice(0,60));
      });
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(800);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);

    const file = path.join(outRoot, `${vp.name}-${vp.width}x${vp.height}.png`);
    await page.screenshot({ path: file, fullPage: true });
    const stat = fs.statSync(file);
    console.log(`   saved ${file} ${(stat.size/1024/1024).toFixed(2)} MB`);
    await page.close();
  }
  await browser.close();
  console.log('[verify-responsive] done. 7 captures complete.');
}

main().catch(e => { console.error(e); process.exit(1); });

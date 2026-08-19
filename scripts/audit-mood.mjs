#!/usr/bin/env node
// audit-mood — verifica que cada CHAPTER_MOODS tenga CSS y que --aero-accent cambie por sección
import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://127.0.0.1:5173/abrazame-webcore/';

const CHAPTERS = ['#/', '#/c1', '#/c2', '#/c3', '#/c4', '#/c5', '#/c6'];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  console.log('[audit-mood] checking moods per hash');

  for (const hash of CHAPTERS) {
    const url = BASE + hash;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(800);
    const result = await page.evaluate(() => {
      const root = document.documentElement;
      const mood = root.dataset.mood || '(none)';
      const accent = getComputedStyle(root).getPropertyValue('--aero-accent').trim();
      const sections = Array.from(document.querySelectorAll('[data-mood]')).map(el => ({
        id: el.id || el.dataset.sectionId || '(no-id)',
        mood: el.dataset.mood,
        accentAtSection: '' // will be filled after scroll
      }));
      return { hash: location.hash, mood, accent, sections, htmlHasMood: !!mood };
    });
    console.log(`  ${hash} -> mood=${result.mood} accent=${result.accent} sections=${result.sections.length}`);
    if (result.sections.length) {
      console.log('    sections:', result.sections.map(s=>`${s.id}:${s.mood}`).join(', '));
    }
    // scroll to each section and check accent changes
    for (const sec of result.sections) {
      const el = page.locator(`#${sec.id}`);
      if (await el.count() > 0) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(650); // wait for 600ms transition
        const accentAfter = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--aero-accent').trim());
        console.log(`      scroll #${sec.id} -> accent ${accentAfter}`);
      }
    }
    if (!result.mood || result.mood === '(none)') {
      console.warn(`    ⚠ ${hash} sin mood aplicado`);
    }
  }
  await browser.close();
  console.log('[audit-mood] done');
}
main().catch(e=>{ console.error(e); process.exit(1); });

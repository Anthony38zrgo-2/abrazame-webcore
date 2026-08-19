import fs from 'fs';
import path from 'path';

const chapters = [
  { file: 'src/pages/Chapter2.vue', title: 'chapter_2.txt', variant: 'melancholy', cname: 'Chapter2' },
  { file: 'src/pages/Chapter3.vue', title: 'chapter_3.txt', variant: 'romance', cname: 'Chapter3' },
  { file: 'src/pages/Chapter4.vue', title: 'chapter_4.txt', variant: 'melancholy', cname: 'Chapter4' },
  { file: 'src/pages/Chapter5.vue', title: 'chapter_5.txt', variant: 'infernal', cname: 'Chapter5' },
  { file: 'src/pages/Chapter6.vue', title: 'chapter_6.txt', variant: 'vhs', cname: 'Chapter6' },
];

for (const ch of chapters) {
  let s = fs.readFileSync(ch.file, 'utf8');
  // replace win98 imports if not already
  if (!s.includes('AeroWindow')) {
    s = s.replace(/<script setup lang="ts">/, `<script setup lang="ts">\nimport AeroWindow from '@/components/aero/AeroWindow.vue'\nimport AeroTitlebar from '@/components/aero/AeroTitlebar.vue'\nimport AeroPanel from '@/components/aero/AeroPanel.vue'\nimport MoodSection from '@/components/aero/MoodSection.vue'`);
  }
  // replace outer wrapper
  s = s.replace(/<template>\s*<div\s+class="win98-window[^"]*">\s*<div class="win98-titlebar[^>]*>[\s\S]*?<div class="win98-title-buttons[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<div class="win98-panel[^>]*">/, 
    `<template>\n  <AeroWindow variant="${ch.variant}" class="max-w-5xl mx-auto">\n    <AeroTitlebar title="${ch.title}" variant="${ch.variant}" />\n    <AeroPanel>`);
  // replace closing wrappers and scoped style duplication
  s = s.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/template>\s*<style scoped>[\s\S]*?<\/style>/,
    `    </AeroPanel>\n  </AeroWindow>\n</template>`);
  // fix image borders
  s = s.replace(/class="mt-8 border-4 border-neutral-900 w-1\/2 mx-auto block shadow-md"/g, 'class="mt-8 w-1/2 mx-auto block rounded-xl border border-white/60 shadow-lg" loading="lazy"');
  // inject MoodSections around core content if not present
  if (!s.includes('MoodSection id=')) {
    // wrap the h2 + img as outside, and wrap the narrative div
    s = s.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/, `<h2$1>$2</h2>`);
    // inject first MoodSection after img
    s = s.replace(/(<img[^>]*>\s*)/, `$1      <MoodSection id="main" mood="${ch.variant === 'infernal' ? 'infernal' : ch.variant === 'vhs' ? 'vhs' : ch.variant}" label="Principal">\n        <div class="mt-8 text-xl md:text-2xl leading-relaxed space-y-8 max-w-4xl mx-auto text-slate-900">`);
    // close it before </AeroPanel>
    s = s.replace(/(<\/div>\s*)\n\s*<\/AeroPanel>/, `$1        </div>\n      </MoodSection>\n    </AeroPanel>`);
  }
  // cleanup any remaining win98 references
  s = s.replace(/win98-/g, 'aero-');
  fs.writeFileSync(ch.file, s, 'utf8');
  console.log(`migrated ${ch.file}`);
}
console.log('done');

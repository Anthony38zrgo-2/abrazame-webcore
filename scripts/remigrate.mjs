import fs from 'fs';
const map={
  'src/pages/Chapter2.vue':{title:'chapter_2.txt', variant:'melancholy'},
  'src/pages/Chapter3.vue':{title:'chapter_3.txt', variant:'romance'},
  'src/pages/Chapter4.vue':{title:'chapter_4.txt', variant:'melancholy'},
  'src/pages/Chapter5.vue':{title:'chapter_5.txt', variant:'infernal'},
  'src/pages/Chapter6.vue':{title:'chapter_6.txt', variant:'vhs'},
};
for (const [file, cfg] of Object.entries(map)) {
  let raw = fs.readFileSync(file,'utf8');
  const scriptStart = raw.indexOf('<script setup');
  const scriptEnd = raw.indexOf('</script>') + '</script>'.length;
  const scriptContent = raw.slice(scriptStart + '<script setup lang="ts">'.length, raw.indexOf('</script>')).trim();
  // after panel
  const panelIdx = raw.indexOf('<div class="win98-panel');
  let afterPanel = raw.slice(panelIdx);
  const h2Pos = afterPanel.indexOf('<h2');
  let fromH2 = afterPanel.slice(h2Pos);
  fromH2 = fromH2.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/template>[\s\S]*/, '');
  fromH2 = fromH2.replace(/class="mt-8 border-4 border-neutral-900 w-1\/2 mx-auto block shadow-md"/g, 'class="mt-8 w-1/2 mx-auto block rounded-xl border border-white/60 shadow-lg" loading="lazy"');
  // BUILD
  const before = `<script setup lang="ts">
import AeroWindow from '@/components/aero/AeroWindow.vue'
import AeroTitlebar from '@/components/aero/AeroTitlebar.vue'
import AeroPanel from '@/components/aero/AeroPanel.vue'
import MoodSection from '@/components/aero/MoodSection.vue'
${scriptContent}
</script>`;
  let template = `
<template>
  <AeroWindow variant="${cfg.variant}" class="max-w-5xl mx-auto">
    <AeroTitlebar title="${cfg.title}" variant="${cfg.variant}" />
    <AeroPanel>
${fromH2}
    </AeroPanel>
  </AeroWindow>
</template>
`;
  // wrap main narrative in MoodSection
  template = template.replace(/(<img[^>]*>\s*)/, `$1      <MoodSection id="main" mood="${cfg.variant}" label="Principal">\n        <div class="mt-8 text-xl md:text-2xl leading-relaxed space-y-8 max-w-4xl mx-auto text-slate-900">`);
  // find the last </div> before </AeroPanel> to close MoodSection
  template = template.replace(/(\s*<\/div>)\s*\n\s*    <\/AeroPanel>/, `$1\n        </div>\n      </MoodSection>\n    </AeroPanel>`);
  fs.writeFileSync(file, before + template, 'utf8');
  console.log('rewrote '+file);
}

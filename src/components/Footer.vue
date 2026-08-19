<script setup lang="ts">
import AeroWindow from '@/components/aero/AeroWindow.vue'
import AeroTitlebar from '@/components/aero/AeroTitlebar.vue'
import missingPng from "@public/textures/missing.png";
</script>

<template>
  <footer class="p-4">
    <AeroWindow variant="occult">
      <AeroTitlebar title="footer_information.sys" variant="occult" icon="⸸" />
      <div class="relative overflow-hidden px-6 py-10" style="background: linear-gradient(to bottom, #0a0a0a, #000);">
        <div class="absolute inset-0 pointer-events-none opacity-40" :style="{
          backgroundImage: `url(${missingPng})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x',
        }"></div>
        <div class="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        <div class="relative z-10 min-h-[220px] flex items-center justify-center">
          <div class="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-6 flex flex-col items-center text-center rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div class="text-4xl text-red-400 font-serif tracking-widest">✞ 666 ✞</div>
            <div class="text-xl font-mono text-white/90 mt-4">© 2026<br /><span class="text-white font-bold">Abrázame después del apocalipsis</span></div>
            <div class="text-lg italic text-red-300 mt-3">escrito por DoomerDoge</div>
            <div class="mt-6 flex gap-6 text-red-400 text-2xl">☩ ☨ ☩</div>
          </div>
        </div>
      </div>
    </AeroWindow>
  </footer>
</template>

<script setup lang="ts">
import { UiWindow, UiTitlebar } from '@/components/ui'
import missingPng from "@public/textures/missing.png";
</script>

<template>
  <footer class="p-4">
    <UiWindow variant="occult">
      <UiTitlebar title="footer_information.sys" variant="occult" icon="⸸" />
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
    </UiWindow>
  </footer>
</template>

<style scoped>
footer {
  padding: 4px !important;
}
/* Fondo del panel footer — blanco sólido, sin gradiente negro */
footer div[style*="linear-gradient"] {
  background: #FFFFFF !important;
  background-image: none !important;
  padding: 8px !important;
}
/* Oculta overlays decorativos (missing.png, blur negro) */
footer div.absolute.inset-0 {
  display: none !important;
}
/* Caja interna — portal blanco con borde duro */
footer div.bg-white\/10 {
  background: #FFFFFF !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: 2px solid #000000 !important;
  border-radius: 6px !important;
  box-shadow: none !important;
  padding: 8px !important;
  min-height: auto !important;
}
/* Texto footer — oscuro y compacto */
footer .text-4xl {
  font-size: 14px !important;
  line-height: 1.2 !important;
  color: #C000D8 !important;
  font-family: Verdana, Arial, Tahoma, sans-serif !important;
  font-weight: 700 !important;
}
footer .text-xl {
  font-size: 11px !important;
  line-height: 1.4 !important;
  color: #222222 !important;
  font-family: Verdana, Arial, Tahoma, sans-serif !important;
}
footer .text-lg {
  font-size: 11px !important;
  color: #222222 !important;
  font-style: normal !important;
}
footer .text-red-400 {
  color: #C000D8 !important;
}
footer .text-white,
footer .text-white\/90 {
  color: #222222 !important;
}
footer .text-red-300 {
  color: #222222 !important;
}
footer .min-h-\[220px\] {
  min-height: auto !important;
}
</style>

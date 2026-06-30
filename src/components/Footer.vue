<script setup lang="ts">
import missingPng from "@public/textures/missing.png";
</script>

<template>
  <footer class="win98-window overflow-hidden border border-red-950 shadow-[0_0_30px_rgba(127,29,29,0.2)]">
    <div class="win98-titlebar-occult flex items-center justify-between px-2 py-2 select-none">
      <span
        class="text-xs font-mono tracking-wider text-red-100 flex items-center gap-2 drop-shadow-[0_0_4px_rgba(239,68,68,0.7)]">
        <span class="text-red-500 animate-pulse">⸸</span> footer_information.sys
      </span>

      <div class="win98-title-buttons flex gap-1">
        <div class="win98-button-dark flex items-center justify-center text-[9px]"></div>
        <div class="win98-button-dark flex items-center justify-center text-[9px]"></div>
        <div class="win98-button-dark flex items-center justify-center text-[9px]"></div>
      </div>
    </div>

    <div class="relative overflow-hidden bg-black px-6 py-10">
      <div class="absolute inset-0 pointer-events-none" :style="{
        backgroundImage: `url(${missingPng})`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
      }"></div>

      <div class="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <div class="relative z-10 min-h-[220px] flex items-center justify-center">
        <div
          class="bg-black/95 border border-red-900 px-8 py-6 flex flex-col items-center justify-center text-center shadow-[0_0_35px_rgba(153,27,27,0.45)] relative">
          <div class="text-4xl text-red-600 font-serif select-none tracking-widest text-shadow-red animate-flicker">
            ✞ 666 ✞
          </div>

          <div class="text-2xl font-mono text-neutral-200 mt-4 tracking-tight leading-relaxed">
            © 2026
            <br />
            <span class="text-white font-sans font-bold">Abrázame después del apocalipsis</span>
          </div>

          <div class="text-lg font-serif italic text-red-500 mt-4">
            escrito por DoomerDoge
          </div>

          <div class="mt-6 flex items-center gap-6 text-red-600 text-3xl select-none">
            <span>☩</span><span>☨</span><span>☩</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Barra de título gótica inspirada en Windows 98 Plus! Dark Theme */
.win98-titlebar-occult {
  /* Degradado lineal de izquierda (Rojo sangre profundo) a derecha (Negro puro) */
  background: linear-gradient(90deg,
      rgba(136, 0, 21, 1) 0%,
      rgba(20, 0, 4, 1) 100%);
  border-bottom: 2px solid rgba(185, 28, 28, 0.4);
}

/* Botones clásicos de ventana adaptados al look destructivo/industrial */
.win98-button-dark {
  width: 16px;
  height: 14px;
  background: #1a0508;
  border-top: 1.5px solid #4c0519;
  border-left: 1.5px solid #4c0519;
  border-right: 1.5px solid #000;
  border-bottom: 1.5px solid #000;
  cursor: pointer;
  box-shadow: inset 1px 1px 0px rgba(239, 68, 68, 0.1);
  transition: all 0.1s ease;
}

.win98-button-dark:active {
  border-top: 1.5px solid #000;
  border-left: 1.5px solid #000;
  border-right: 1.5px solid #4c0519;
  border-bottom: 1.5px solid #4c0519;
  background: #0f0204;
}

/* Efectos de glitch/parpadeo de texto ritual */
.text-shadow-red {
  text-shadow:
    0 0 10px rgba(239, 68, 68, 0.8),
    0 0 20px rgba(153, 27, 27, 0.4);
}

@keyframes flicker {

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1;
  }

  20%,
  24%,
  55% {
    opacity: 0.7;
    filter: saturate(1.5);
  }
}

.animate-flicker {
  animation: flicker 4s infinite alternate;
}
</style>

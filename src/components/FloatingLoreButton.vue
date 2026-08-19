<script setup lang="ts">
import { ref } from 'vue'
import AeroWindow from '@/components/aero/AeroWindow.vue'
import AeroTitlebar from '@/components/aero/AeroTitlebar.vue'
import romeroGif from '@public/gifs/romero.gif'

const open = ref(false)
</script>

<template>
  <div class="fixed bottom-6 right-6 z-[9999]">
    <div class="group relative">
      <div class="absolute bottom-24 right-0 whitespace-nowrap bg-white/80 backdrop-blur text-sky-900 border border-white/60 px-4 py-2 text-sm rounded-full opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 shadow">¿Quieres saber qué demonios es esto?</div>
      <button @click="open = !open" class="aero-button aero-button--glass p-2 rounded-2xl">
        <img :src="romeroGif" class="w-16 h-16 object-contain rounded-xl" alt="romero" />
      </button>
    </div>

    <Transition name="fade">
      <div v-if="open" class="absolute bottom-28 right-0 w-[420px]">
        <AeroWindow variant="system">
          <AeroTitlebar title="README.txt" variant="system" @close="open=false" />
          <div class="aero-panel p-5 text-slate-800 text-[15px] leading-relaxed bg-white/80">
            <p>Hola.</p>
            <p class="mt-3">Este sitio es un experimento visual inspirado en <b>Webcore, Dreamcore</b> y la vieja internet — ahora en <b>Windows Vista Aero 2006</b> lost media.</p>
            <p class="mt-3">“Abrázame después del apocalipsis” es una novela sobre soledad, ansiedad, amor y supervivencia después del fin del mundo.</p>
            <p class="mt-3 text-sky-700 font-semibold">Bienvenido a Prosperidad.</p>
          </div>
        </AeroWindow>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,.fade-leave-active{transition: opacity 0.3s ease, transform 0.3s ease;}
.fade-enter-from,.fade-leave-to{opacity:0; transform: scale(0.95) translateY(10px);}
</style>

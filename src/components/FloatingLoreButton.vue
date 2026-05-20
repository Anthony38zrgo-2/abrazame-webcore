<script setup lang="ts">
import { ref } from 'vue'
import romeroGif from '@public/gifs/romero.gif'

const open = ref(false)
</script>

<template>
  <div class="fixed bottom-6 right-6 z-[9999]">
    <!-- Hover Text (Triggered by the group hover inside the main wrapper) -->
    <div class="group relative">
      <div
        class="
          absolute
          bottom-24
          right-0
          whitespace-nowrap
          bg-black
          text-red-500
          border-2
          border-red-700
          px-4
          py-2
          text-xl
          opacity-0
          pointer-events-none
          transition-all
          duration-300
          group-hover:opacity-100
        "
      >
        ¿Quieres saber qué demonios es esto?
      </div>

      <!-- Floating Button -->
      <button
        @click="open = !open"
        class="
          bg-black
          border-2
          border-red-700
          p-2
          hover:bg-red-950
          transition-all
          duration-300
        "
      >
        <img
          :src="romeroGif"
          class="w-20 h-20 object-contain"
          alt="romero"
        />
      </button>
    </div>

    <!-- Popup Window -->
    <Transition name="fade">
      <div
        v-if="open"
        class="
          absolute
          bottom-28
          right-0
          w-[420px]
          win98-window
        "
      >
        <!-- Window Header -->
        <div class="win98-titlebar">
          <span>README.txt</span>
          <div class="win98-title-buttons">
            <button
              @click="open = false"
              class="
                w-6
                h-6
                rounded-full
                bg-red-600
                border
                border-white
                flex
                items-center
                justify-center
                text-white
                text-sm
                font-bold
                hover:bg-red-500
                transition-all
                duration-200
              "
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Window Content -->
        <div
          class="
            win98-panel
            p-5
            text-black
            text-xl
            leading-relaxed
          "
        >
          <p>Hola.</p>
          <p class="mt-4">
            Este sitio es un experimento visual inspirado
            en Webcore, Dreamcore y la vieja internet de
            finales de los 90s y principios de los 2000.
          </p>
          <p class="mt-4">
            “Abrázame después del apocalipsis”
            es una novela sobre soledad, ansiedad,
            amor y supervivencia emocional
            después del fin del mundo.
          </p>
          <p class="mt-4 text-red-700">
            Bienvenido a Prosperidad.
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
</style>

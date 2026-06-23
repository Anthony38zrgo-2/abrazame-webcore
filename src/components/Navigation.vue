<script setup lang="ts">
import { computed } from 'vue'
import { currentHash, currentChapterNumber } from '@/router'

// Definimos el total de capítulos publicados para evitar enlaces rotos
const TOTAL_CHAPTERS = 6
const BASE_URL = '/abrazame-webcore/'

const isHome = computed(() => currentHash.value === '#/' || !currentHash.value)

// Lógica de Atrás (Inyectando la ruta base de Vite)
const previousLink = computed(() => {
  if (isHome.value) return `${BASE_URL}#/`
  const chapter = currentChapterNumber.value
  if (chapter === null || chapter <= 1) return `${BASE_URL}#/`
  return `${BASE_URL}#/c${chapter - 1}`
})

const previousLabel = computed(() => {
  if (isHome.value) return 'HOME'
  const chapter = currentChapterNumber.value
  if (chapter === null || chapter <= 1) return 'HOME'
  return `CAPÍTULO ${chapter - 1}`
})

// Lógica de Adelante (Con tope máximo e inyectando la ruta base)
const hasNext = computed(() => {
  if (isHome.value) return true
  const chapter = currentChapterNumber.value
  return chapter !== null && chapter < TOTAL_CHAPTERS
})

const nextLink = computed(() => {
  if (isHome.value) return `${BASE_URL}#/c1`
  const chapter = currentChapterNumber.value
  if (chapter === null) return `${BASE_URL}#/c1`
  if (chapter >= TOTAL_CHAPTERS) return `${BASE_URL}#/`
  return `${BASE_URL}#/c${chapter + 1}`
})

const nextLabel = computed(() => {
  if (isHome.value) return 'CAPÍTULO 1'
  const chapter = currentChapterNumber.value
  if (chapter === null) return 'CAPÍTULO 1'
  return `CAPÍTULO ${chapter + 1}`
})
</script>

<template>
  <div class="mt-12 flex items-center justify-between gap-6 flex-wrap max-w-5xl mx-auto px-4 select-none">

    <!-- Botón Anterior (Estilo Win98 Dark) -->
    <a :href="previousLink" :class="[
      'win98-nav-btn inline-flex items-center gap-2 px-4 py-2 font-mono text-lg transition-all duration-100',
      isHome ? 'opacity-50 pointer-events-none' : ''
    ]">
      <span class="text-red-500 font-sans text-xl">◀</span>
      <span>{{ previousLabel }}</span>
    </a>

    <!-- Botón Siguiente (Se oculta o deshabilita si es el fin de la demo) -->
    <a v-if="hasNext" :href="nextLink"
      class="win98-nav-btn inline-flex items-center gap-2 px-4 py-2 font-mono text-lg text-red-100 transition-all duration-100 ml-auto">
      <span>{{ nextLabel }}</span>
      <span class="text-red-500 font-sans text-xl">▶</span>
    </a>

    <!-- Indicador de Fin de Lectura si ya no hay más capítulos -->
    <div v-else
      class="font-mono text-sm text-neutral-500 italic ml-auto flex items-center gap-2 border border-dashed border-neutral-400 px-4 py-2 bg-[#e4e2d5]">
      <span>⸸ Continuará...</span>
    </div>

  </div>
</template>

<style scoped>
/* Botón clásico de Windows 98 pero con paleta oscura y gótica */
.win98-nav-btn {
  background: #2a0c10;
  /* Fondo rojizo oscuro */
  color: #fca5a5;
  /* Texto rosado pálido */
  border-top: 2px solid #4c111a;
  border-left: 2px solid #4c111a;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.1);
}

/* Efecto 'Click' / Deprimido de Windows 98 al pasar el cursor o hacer click */
.win98-nav-btn:hover:active {
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  border-right: 2px solid #4c111a;
  border-bottom: 2px solid #4c111a;
  box-shadow: none;
  padding-top: 9px;
  padding-left: 17px;
  padding-bottom: 7px;
  padding-right: 15px;
}

.win98-nav-btn:hover {
  background: #3f1218;
  color: #fee2e2;
}
</style>
<script setup lang="ts">
import { computed } from 'vue'
import { currentHash, currentChapterNumber } from '@/router/hash'

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
/* PORTAL 2004 — botón web antigua, sólido, borde duro */
.win98-nav-btn {
  background: #E0E0E0 !important;
  background-image: none !important;
  color: #222222 !important;
  border: 2px solid #000000 !important;
  border-radius: 4px !important;
  box-shadow: none !important;
  font-family: Verdana, Arial, Tahoma, sans-serif !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  padding: 3px 8px !important;
  gap: 4px !important;
  text-decoration: none !important;
  line-height: 1 !important;
}
.win98-nav-btn span {
  font-size: 11px !important;
  color: #222222 !important;
}
.win98-nav-btn:hover {
  background: #FFFFFF !important;
  color: #222222 !important;
}
.win98-nav-btn:hover:active {
  border: 2px solid #000000 !important;
  box-shadow: inset 1px 1px 0 rgba(0,0,0,0.4) !important;
  padding: 3px 8px !important;
}
/* Next button destacado azul portal */
.win98-nav-btn[href*="#/c"] {
  background: #2874D8 !important;
  color: #FFFFFF !important;
}
.win98-nav-btn[href*="#/c"] span {
  color: #FFFFFF !important;
}
.win98-nav-btn[href*="#/c"]:hover {
  background: #1F5FB0 !important;
  color: #FFFFFF !important;
}
/* Continuará — caja portal simple */
div.bg-\[\#e4e2d5\] {
  background: #FFFFFF !important;
  border: 1px solid #000000 !important;
  border-radius: 4px !important;
  color: #222222 !important;
  font-family: Verdana, sans-serif !important;
  font-size: 10px !important;
  padding: 4px 6px !important;
}
</style>

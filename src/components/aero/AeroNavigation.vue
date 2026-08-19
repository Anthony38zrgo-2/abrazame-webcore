<script setup lang="ts">
import { computed } from 'vue'
import { currentHash, currentChapterNumber } from '@/router/hash'

const TOTAL = 6
const BASE = '/abrazame-webcore/'
const isHome = computed(() => currentHash.value === '#/' || !currentHash.value)
const prevLink = computed(() => {
  if (isHome.value) return `${BASE}#/`
  const c = currentChapterNumber.value
  if (c===null || c<=1) return `${BASE}#/`
  return `${BASE}#/c${c-1}`
})
const prevLabel = computed(() => {
  if (isHome.value) return 'HOME'
  const c = currentChapterNumber.value
  if (c===null || c<=1) return 'HOME'
  return `CAPÍTULO ${c-1}`
})
const hasNext = computed(() => {
  if (isHome.value) return true
  const c = currentChapterNumber.value
  return c!==null && c < TOTAL
})
const nextLink = computed(() => {
  if (isHome.value) return `${BASE}#/c1`
  const c = currentChapterNumber.value
  if (c===null) return `${BASE}#/c1`
  if (c>=TOTAL) return `${BASE}#/`
  return `${BASE}#/c${c+1}`
})
const nextLabel = computed(() => {
  if (isHome.value) return 'CAPÍTULO 1'
  const c = currentChapterNumber.value
  if (c===null) return 'CAPÍTULO 1'
  return `CAPÍTULO ${c+1}`
})
</script>

<template>
  <div class="aero-nav mt-10">
    <a :href="prevLink" class="aero-button aero-button--ghost" :class="{ 'opacity-40 pointer-events-none': isHome }">
      <span>◀</span><span>{{ prevLabel }}</span>
    </a>
    <a v-if="hasNext" :href="nextLink" class="aero-button aero-button--primary ml-auto">
      <span>{{ nextLabel }}</span><span>▶</span>
    </a>
    <div v-else class="ml-auto text-sm italic text-white/70 border border-white/30 px-4 py-2 rounded-full bg-white/10 backdrop-blur">⸸ Continuará...</div>
  </div>
</template>

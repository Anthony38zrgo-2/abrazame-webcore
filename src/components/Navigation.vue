<script setup lang="ts">
import { computed } from 'vue'
import { currentHash, currentChapterNumber } from '@/router'

const isHome = computed(() => currentHash.value === '#/')

const previousLink = computed(() => {
  if (isHome.value) return '#/'
  const chapter = currentChapterNumber.value
  if (chapter === null || chapter <= 1) return '#/'
  return `#/c${chapter - 1}`
})

const previousLabel = computed(() => {
  if (isHome.value) return 'HOME'
  const chapter = currentChapterNumber.value
  if (chapter === null || chapter <= 1) return 'HOME'
  return `CAPÍTULO ${chapter - 1}`
})

const nextLink = computed(() => {
  if (isHome.value) return '#/c1'
  const chapter = currentChapterNumber.value
  if (chapter === null) return '#/c1'
  return `#/c${chapter + 1}`
})

const nextLabel = computed(() => {
  if (isHome.value) return 'CAPÍTULO 1'
  const chapter = currentChapterNumber.value
  if (chapter === null) return 'CAPÍTULO 1'
  return `CAPÍTULO ${chapter + 1}`
})
</script>

<template>
  <div class="mt-10 flex items-center justify-between gap-6 flex-wrap">
    <!-- Previous -->
    <a
      :href="previousLink"
      class="
        inline-flex
        items-center
        gap-3

        px-5
        py-3

        border-2
        border-blue-700

        bg-black
        text-blue-400

        text-xl

        hover:bg-blue-950
        hover:text-blue-200

        transition-all
        duration-300
      "
    >
      <span class="material-icons text-3xl">
        arrow_back
      </span>
      <span>
        {{ previousLabel }}
      </span>
    </a>

    <!-- Next -->
    <a
      :href="nextLink"
      class="
        inline-flex
        items-center
        gap-3

        px-5
        py-3

        border-2
        border-red-700

        bg-black
        text-red-500

        text-xl

        hover:bg-red-950
        hover:text-red-300

        transition-all
        duration-300
      "
    >
      <span>
        {{ nextLabel }}
      </span>
      <span class="material-icons text-3xl">
        arrow_forward
      </span>
    </a>
  </div>
</template>

<style scoped>
</style>

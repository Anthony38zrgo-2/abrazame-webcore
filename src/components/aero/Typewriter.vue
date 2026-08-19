<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { currentSection } from '@/composables/useMood'

const props = withDefaults(defineProps<{
  sectionId: string
  staggerMs?: number
}>(), { staggerMs: 90 })

const active = ref(false)
const container = ref<HTMLElement | null>(null)

watch(currentSection, async (val) => {
  if (val === props.sectionId && !active.value) {
    active.value = true
    await nextTick()
  }
})

onMounted(() => {
  if (currentSection.value === props.sectionId) active.value = true
})
</script>

<template>
  <div ref="container" class="typewriter" :class="{ 'typing-active': active }" :data-typewriter="sectionId">
    <slot />
  </div>
</template>

<style scoped>
.typewriter :deep(p),
.typewriter :deep(blockquote) {
  opacity: 1 !important;
  transform: none !important;
  transition: none !important;
}
.typewriter.typing-active :deep(p),
.typewriter.typing-active :deep(blockquote) {
  opacity: 1 !important;
  transform: none !important;
}
.typewriter.typing-active :deep(p:nth-child(n)) { transition-delay: 0ms !important; }
.typewriter.typing-active :deep(blockquote) { transition-delay: 0ms !important; }
.typewriter.typing-active :deep(p:last-child)::after {
  display: none !important;
  content: none !important;
}
</style>

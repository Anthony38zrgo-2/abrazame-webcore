<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { currentSection } from '@/composables/useMood'

const props = withDefaults(defineProps<{
  sectionId: string
  staggerMs?: number
}>(), { staggerMs: 90 })

const active = ref(false)
const container = ref<HTMLElement | null>(null)

// when this section becomes the currentSection, trigger typing
watch(currentSection, async (val) => {
  if (val === props.sectionId && !active.value) {
    active.value = true
    await nextTick()
    // force reflow for transition
  }
})

// also check initial
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
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 420ms ease, transform 420ms cubic-bezier(0.22,1,0.36,1);
  /* font will be inherited from section[data-mood] */
}
.typewriter.typing-active :deep(p),
.typewriter.typing-active :deep(blockquote) {
  opacity: 1;
  transform: translateY(0);
}
/* stagger via nth-child delay — up to 20 lines */
.typewriter.typing-active :deep(p:nth-child(1)) { transition-delay: 0ms; }
.typewriter.typing-active :deep(p:nth-child(2)) { transition-delay: 90ms; }
.typewriter.typing-active :deep(p:nth-child(3)) { transition-delay: 180ms; }
.typewriter.typing-active :deep(p:nth-child(4)) { transition-delay: 270ms; }
.typewriter.typing-active :deep(p:nth-child(5)) { transition-delay: 360ms; }
.typewriter.typing-active :deep(p:nth-child(6)) { transition-delay: 450ms; }
.typewriter.typing-active :deep(p:nth-child(7)) { transition-delay: 540ms; }
.typewriter.typing-active :deep(p:nth-child(8)) { transition-delay: 630ms; }
.typewriter.typing-active :deep(p:nth-child(9)) { transition-delay: 720ms; }
.typewriter.typing-active :deep(p:nth-child(10)) { transition-delay: 810ms; }
.typewriter.typing-active :deep(blockquote) { transition-delay: 400ms; }

/* cursor blink for active typing */
.typewriter.typing-active :deep(p:last-child)::after {
  content: "▌";
  margin-left: 3px;
  opacity: 0.7;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 0%,50% { opacity:1 } 51%,100% { opacity:0 } }
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { registerSection, unregisterSection } from '@/composables/useMood'
import type { MoodId } from '@/types/mood'

interface Props {
  id: string
  mood: MoodId
  label?: string
}

const props = defineProps<Props>()
const el = ref<HTMLElement | null>(null)

onMounted(() => {
  registerSection(props.id, props.mood)
})

onUnmounted(() => {
  unregisterSection(props.id)
})
</script>

<template>
  <section
    ref="el"
    :id="id"
    :data-mood="mood ?? undefined"
    :data-section-id="id"
    :aria-label="label"
    class="scroll-mt-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
  >
    <slot />
  </section>
</template>

<style scoped>
section {
  transition:
    background-color 700ms ease,
    color 700ms ease,
    border-color 700ms ease,
    font-family 400ms ease,
    filter 700ms ease;
}
</style>

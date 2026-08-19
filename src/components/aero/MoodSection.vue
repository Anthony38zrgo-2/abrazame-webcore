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
    class="scroll-mt-2"
  >
    <slot />
  </section>
</template>

<style scoped>
section {
  transition: none !important;
  scroll-margin-top: 8px !important;
}
</style>

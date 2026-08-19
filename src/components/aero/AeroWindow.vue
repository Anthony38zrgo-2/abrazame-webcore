<script setup lang="ts">
import type { AeroVariant, MoodId } from '@/types/mood'

interface Props {
  variant?: AeroVariant
  mood?: MoodId
  glass?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'system',
  mood: undefined,
  glass: true,
})
</script>

<template>
  <div class="aero-window" :data-variant="variant" :data-mood="mood || undefined">
    <slot />
  </div>
</template>

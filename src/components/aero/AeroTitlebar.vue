<script setup lang="ts">
import type { AeroVariant } from '@/types/mood'

interface Props {
  title?: string
  icon?: string
  variant?: AeroVariant
  showControls?: boolean
}

withDefaults(defineProps<Props>(), {
  title: '',
  icon: '⸸',
  variant: 'system',
  showControls: true,
})

const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <div class="aero-titlebar" :data-variant="variant">
    <div class="aero-titlebar__label">
      <span class="aero-titlebar__icon">{{ icon }}</span>
      <span class="aero-titlebar__text">
        <slot>{{ title }}</slot>
      </span>
    </div>
    <div v-if="showControls" class="aero-titlebar__controls">
      <div class="aero-title-button" aria-hidden="true">—</div>
      <div class="aero-title-button" aria-hidden="true">□</div>
      <button class="aero-title-button aero-title-button--close" @click="emit('close')" aria-label="close">✕</button>
    </div>
  </div>
</template>

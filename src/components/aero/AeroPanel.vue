<script setup lang="ts">
interface Props {
  padding?: 'sm'|'md'|'lg'
  translucent?: boolean
}
withDefaults(defineProps<Props>(), { padding: 'md', translucent: true })
</script>

<template>
  <div class="aero-panel" :class="{ 'aero-panel--solid': !translucent }" :data-padding="padding">
    <div :class="padding==='sm' ? 'p-6' : padding==='lg' ? 'p-12 md:p-14' : 'p-8 md:p-12'">
      <slot />
    </div>
  </div>
</template>

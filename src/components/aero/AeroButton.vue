<script setup lang="ts">
interface Props {
  variant?: 'glass'|'primary'|'ghost'
  href?: string
}
withDefaults(defineProps<Props>(), { variant: 'glass' })
</script>

<template>
  <component :is="href ? 'a' : 'button'" :href="href" class="aero-button" :class="`aero-button--${variant}`">
    <slot />
  </component>
</template>

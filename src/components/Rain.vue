<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  count?: number
  symbols?: string[]
  minSize?: number
  maxSize?: number
  minDuration?: number
  maxDuration?: number
  minOpacity?: number
  maxOpacity?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 120,
  symbols: () => ['✝', '☩', '✞', '†', '☨'],
  minSize: 12,
  maxSize: 34,
  minDuration: 6,
  maxDuration: 18,
  minOpacity: 0.25,
  maxOpacity: 0.95
})

const drops = computed(() => {
  return Array.from({ length: props.count }).map(() => {
    const symbol = props.symbols[Math.floor(Math.random() * props.symbols.length)]
    const left = Math.random() * 100
    const duration = props.minDuration + Math.random() * (props.maxDuration - props.minDuration)
    const delay = Math.random() * 8
    const size = props.minSize + Math.random() * (props.maxSize - props.minSize)
    const opacity = props.minOpacity + Math.random() * (props.maxOpacity - props.minOpacity)

    return {
      symbol,
      left,
      duration,
      delay,
      size,
      opacity
    }
  })
})
</script>

<template>
  <div class="cross-rain">
    <span
      v-for="(drop, index) in drops"
      :key="index"
      :style="{
        left: `${drop.left}%`,
        animationDuration: `${drop.duration}s`,
        animationDelay: `${drop.delay}s`,
        fontSize: `${drop.size}px`,
        opacity: drop.opacity
      }"
    >
      {{ drop.symbol }}
    </span>
  </div>
</template>

<style scoped>
/* Core rain styling is globally loaded via rain.css to preserve layout texture compatibility */
</style>

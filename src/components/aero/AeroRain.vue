<script setup lang="ts">
import { computed, watch } from 'vue'
import { currentMood } from '@/composables/useMood'
import { getMood } from '@/moods/registry'

interface Props {
  countOverride?: number
  symbolsOverride?: string[]
}

const props = defineProps<Props>()

const rainDef = computed(() => {
  const mood = currentMood.value
  const def = getMood(mood)
  return def?.rain ?? { count: 120, symbols: ['✝','☩','✞'], color: 'rgba(110,140,200,0.55)', minSize: 12, maxSize: 24 }
})

const count = computed(() => props.countOverride ?? rainDef.value.count)
const symbols = computed(() => props.symbolsOverride ?? rainDef.value.symbols)

const drops = computed(() => {
  const c = count.value
  const syms = symbols.value
  const r = rainDef.value
  void currentMood.value
  return Array.from({ length: c }).map(() => {
    const symbol = syms[Math.floor(Math.random() * syms.length)]
    const left = Math.random() * 100
    const duration = 18 + Math.random() * 27
    const delay = -20 + Math.random() * 20
    const size = (r.minSize ?? 12) + Math.random() * ((r.maxSize ?? 24) - (r.minSize ?? 12))
    const opacity = 0.3 + Math.random() * 0.35
    const initRot = `${Math.floor(Math.random()*360)}deg`
    const swayAmount = `${Math.floor(10 + Math.random()*16)}px`
    const swayDuration = `${(4 + Math.random()*4).toFixed(1)}s`
    const blurAmount = '0px'
    return {
      symbol,
      style: {
        left: `${left}%`,
        fontSize: `${size}px`,
        opacity,
        animationDelay: `${delay}s`,
        color: '#FFFFFF',
        '--init-rot': initRot,
        '--sway-amount': swayAmount,
        '--sway-duration': swayDuration,
        '--fall-duration': `${duration}s`,
        '--blur-amount': blurAmount,
      } as Record<string,string|number>
    }
  })
})
</script>

<template>
  <Transition name="rain-fade" mode="out-in">
    <div :key="String(currentMood)" class="aero-rain" aria-hidden="true">
      <span v-for="(d,i) in drops" :key="i" :style="d.style as any">{{ d.symbol }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.aero-rain span {
  position: absolute;
  top: -10vh;
  user-select: none;
  filter: none !important;
  text-shadow: none !important;
  will-change: auto;
  animation: aeroRain var(--fall-duration) linear infinite, crossSway var(--sway-duration) ease-in-out infinite alternate;
  opacity: 0.35;
}
@keyframes aeroRain {
  0% { transform: translateY(-10vh) rotate(var(--init-rot)); opacity: 0; }
  10% { opacity: 0.35; }
  90% { opacity: 0.35; }
  100% { transform: translateY(110vh) rotate(calc(var(--init-rot) + 360deg)); opacity: 0; }
}
@keyframes crossSway {
  0% { margin-left: calc(-1 * var(--sway-amount)); }
  100% { margin-left: var(--sway-amount); }
}
.rain-fade-enter-active, .rain-fade-leave-active { transition: none !important; }
.rain-fade-enter-from, .rain-fade-leave-to { opacity: 0 !important; }
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
const dots = ref<{x:number,y:number}[]>(Array.from({length:8},()=>({x:-100,y:-100})))
let raf = 0
let idx = 0
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const onMove = (e: MouseEvent) => {
    dots.value[idx] = { x: e.clientX, y: e.clientY }
    idx = (idx + 1) % dots.value.length
  }
  window.addEventListener('mousemove', onMove)
  onUnmounted(() => window.removeEventListener('mousemove', onMove))
})
</script>
<template>
  <div class="cursor-trail" aria-hidden="true">
    <span v-for="(d,i) in dots" :key="i" class="cursor-trail__dot" :style="{ left: d.x+'px', top: d.y+'px', opacity: (1 - i*0.11).toFixed(2) }">✧</span>
  </div>
</template>
<style scoped>
.cursor-trail { position: fixed; inset: 0; pointer-events: none; z-index: 9998; }
.cursor-trail__dot {
  position: absolute;
  font-size: 10px;
  color: #FF00FF;
  text-shadow: 0 0 4px #FF00FF;
  transform: translate(-50%, -50%);
  transition: left 80ms linear, top 80ms linear;
}
@media (prefers-reduced-motion: reduce) {
  .cursor-trail { display: none; }
}
</style>

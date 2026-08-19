<script setup lang="ts">
import { ref, onMounted } from 'vue'
const count = ref('000342')
onMounted(() => {
  const key = 'emo-hit-counter'
  let n = parseInt(localStorage.getItem(key) || '342', 10)
  n += 1
  localStorage.setItem(key, String(n))
  count.value = String(n).padStart(6, '0')
})
</script>
<template>
  <div class="hit-counter" aria-label="hit counter">
    <span class="hit-counter__label">you are visitor #</span>
    <span class="hit-counter__digits">{{ count }}</span>
  </div>
</template>
<style scoped>
.hit-counter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #000;
  color: #00FFFF;
  border: 2px inset #ACA899;
  padding: 2px 6px;
  font-family: "Courier New", monospace;
  font-size: 11px;
}
.hit-counter__label { color: #FF1493; text-transform: lowercase; }
.hit-counter__digits {
  background: #000;
  color: #00FF00;
  font-family: "Digital-7", "Courier New", monospace;
  letter-spacing: 0.12em;
  padding: 0 4px;
  border: 1px solid #333;
}
</style>

<template>
  <div class="crt-overlay" aria-hidden="true"></div>
</template>

<style scoped>
.crt-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background:
    repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.09) 3px),
    radial-gradient(ellipse at center, transparent 58%, rgba(0,0,0,0.32) 100%);
  filter: contrast(1.12) brightness(0.99);
  transform: scale(1.015);
  opacity: 0.95;
}
@media (prefers-reduced-motion: reduce) {
  .crt-overlay { display: none; }
}
</style>

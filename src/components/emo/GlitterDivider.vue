<template>
  <div class="glitter-divider" aria-hidden="true">
    <img src="/gifs/romero.gif" alt="" class="glitter-divider__gif" />
  </div>
</template>
<style scoped>
.glitter-divider {
  width: 100%;
  height: 12px;
  overflow: hidden;
  background: repeating-linear-gradient(to right, #FF1493 0px, #00FFFF 12px, #CCFF00 24px, #FF1493 36px);
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  image-rendering: pixelated;
}
.glitter-divider__gif {
  width: 100%;
  height: 12px;
  object-fit: cover;
  mix-blend-mode: screen;
  opacity: 0.7;
}
</style>

<template>
  <div class="floating-gifs" aria-hidden="true">
    <img src="/gifs/tubos.gif" alt="" class="floating-gifs__item floating-gifs__item--skull" />
    <span class="floating-gifs__item floating-gifs__item--sparkle">✧</span>
    <span class="floating-gifs__item floating-gifs__item--star">★</span>
    <img src="/gifs/tubos.gif" alt="" class="floating-gifs__item floating-gifs__item--skull2" />
    <span class="floating-gifs__item floating-gifs__item--heart">♥</span>
    <span class="floating-gifs__item floating-gifs__item--heart2">♡</span>
  </div>
</template>
<style scoped>
.floating-gifs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}
.floating-gifs__item {
  position: absolute;
  image-rendering: pixelated;
  filter: drop-shadow(1px 1px 0 #000);
}
.floating-gifs__item--heart { top: 18%; left: 6%; width: 32px; }
.floating-gifs__item--skull { top: 60%; right: 8%; width: 28px; }
.floating-gifs__item--sparkle { top: 30%; right: 14%; font-size: 18px; color: #FF00FF; text-shadow: 0 0 6px #FF00FF; }
.floating-gifs__item--star { top: 72%; left: 9%; font-size: 16px; color: #CCFF00; }
.floating-gifs__item--heart2 { bottom: 14%; left: 4%; width: 24px; opacity: 0.9; }
.floating-gifs__item--skull2 { bottom: 22%; right: 6%; width: 22px; opacity: 0.85; }
@media (max-width: 768px) {
  .floating-gifs { display: none; }
}
</style>

<template>
  <div class="emo-marquee" aria-hidden="true">
    <div class="emo-marquee__track">
      <span>xX_soledad_Xx • te extraño • 2007 • no me dejes sola • xX_luto_Xx • te extraño • 2007 •</span>
      <span aria-hidden="true">xX_soledad_Xx • te extraño • 2007 • no me dejes sola • xX_luto_Xx • te extraño • 2007 •</span>
    </div>
  </div>
</template>
<style scoped>
.emo-marquee {
  width: 100%;
  overflow: hidden;
  background: #000;
  color: #00FFFF;
  font-family: "Tahoma", sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  border-bottom: 2px solid #FF1493;
  white-space: nowrap;
}
.emo-marquee__track {
  display: inline-flex;
  gap: 2rem;
  animation: marquee 14s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .emo-marquee__track { animation: none; }
}
</style>

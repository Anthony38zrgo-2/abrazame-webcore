<template>
  <div class="emo-avatar" aria-label="avatar">
    <img src="/textures/liminal.jpg" alt="avatar" class="emo-avatar__img" />
    <span class="emo-avatar__label">xX_Dalia_Xx</span>
  </div>
</template>
<style scoped>
.emo-avatar {
  position: fixed;
  bottom: 12px;
  right: 12px;
  width: 96px;
  z-index: 10;
  background: #000;
  border: 3px solid #FF00FF;
  outline: 2px solid #000;
  box-shadow: 2px 2px 0 #000;
}
.emo-avatar__img {
  width: 100%;
  height: 96px;
  object-fit: cover;
  image-rendering: pixelated;
  filter: contrast(1.2) saturate(1.3);
}
.emo-avatar__label {
  display: block;
  background: #000;
  color: #00FFFF;
  font-family: "Tahoma", sans-serif;
  font-size: 9px;
  text-align: center;
  padding: 2px 0;
  letter-spacing: 0.06em;
}
@media (max-width: 768px) {
  .emo-avatar { width: 72px; bottom: 8px; right: 8px; }
  .emo-avatar__img { height: 72px; }
}
</style>

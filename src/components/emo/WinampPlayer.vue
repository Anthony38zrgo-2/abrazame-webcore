<template>
  <div class="winamp" aria-label="Winamp player">
    <div class="winamp__title">Winamp —  * My Chemical Romance - Helena [03:22] *</div>
    <div class="winamp__controls">
      <button class="winamp__btn">◄◄</button>
      <button class="winamp__btn winamp__btn--play">▶</button>
      <button class="winamp__btn">■</button>
      <button class="winamp__btn">►►</button>
      <div class="winamp__bar"><div class="winamp__progress" style="width: 34%"></div></div>
      <span class="winamp__time">01:12</span>
    </div>
    <audio controls preload="none" style="width:100%; height:18px; margin-top:4px;" src=""></audio>
  </div>
</template>
<style scoped>
.winamp {
  width: 260px;
  background: #222;
  border: 2px outset #ECE9D8;
  padding: 4px;
  font-family: "Tahoma", sans-serif;
  font-size: 10px;
  color: #00FF00;
  box-shadow: 2px 2px 0 #000;
}
.winamp__title {
  background: #000;
  color: #00FF00;
  padding: 2px 6px;
  font-family: "Courier New", monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px inset #333;
}
.winamp__controls {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
}
.winamp__btn {
  width: 18px; height: 18px;
  background: #C0C0C0;
  border: 1px outset #ECE9D8;
  font-size: 8px;
  line-height: 1;
  cursor: pointer;
}
.winamp__btn--play { background: #FF1493; color: white; }
.winamp__bar { flex:1; height: 6px; background: #000; border: 1px inset #333; position: relative; }
.winamp__progress { height: 100%; background: #00FFFF; }
.winamp__time { font-family: "Courier New", monospace; font-size: 9px; }
</style>

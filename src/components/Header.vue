<script setup lang="ts">
import AeroWindow from '@/components/aero/AeroWindow.vue'
import AeroTitlebar from '@/components/aero/AeroTitlebar.vue'
</script>

<template>
  <header class="p-3 md:p-4">
    <AeroWindow variant="system">
      <AeroTitlebar variant="system" icon="♥">
        <span class="header-title">
          ¡Abrázame!, después del apocalipsis
        </span>
      </AeroTitlebar>
    </AeroWindow>
  </header>
</template>

<style scoped>
.header-title {
  font-family: "Times New Roman", "Georgia", serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.02em;
  background: linear-gradient(to right, #FF6B00, #FF0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 6px rgba(255,107,0,0.6)) drop-shadow(1px 1px 0 #000);
  font-style: italic;
}
@media (min-width: 768px) {
  .header-title { font-size: 17px; }
}
</style>

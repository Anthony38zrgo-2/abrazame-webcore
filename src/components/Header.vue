<script setup lang="ts">
import { UiWindow, UiTitlebar } from '@/components/ui'
</script>

<template>
  <header class="p-3 md:p-4">
    <UiWindow variant="system">
      <UiTitlebar variant="system" icon="♥">
        <span class="header-title">
          ¡Abrázame!, después del apocalipsis
        </span>
      </UiTitlebar>
    </UiWindow>
  </header>
</template>

<style scoped>
header {
  padding: 4px !important;
}
.header-title {
  font-family: Verdana, Arial, Tahoma, sans-serif !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0 !important;
  color: #FFFFFF !important;
  background: none !important;
  -webkit-background-clip: initial !important;
  -webkit-text-fill-color: #FFFFFF !important;
  filter: none !important;
  font-style: normal !important;
  text-transform: uppercase !important;
}
</style>

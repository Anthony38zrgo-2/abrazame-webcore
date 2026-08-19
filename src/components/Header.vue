<script setup lang="ts">
import AeroWindow from '@/components/aero/AeroWindow.vue'
import AeroTitlebar from '@/components/aero/AeroTitlebar.vue'
</script>

<template>
  <header class="p-3 md:p-4">
    <AeroWindow variant="system">
      <AeroTitlebar variant="system" icon="♥">
        <span class="font-['Cormorant_Garamond'] text-[15px] md:text-[17px] font-semibold tracking-[0.015em] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
          ¡Abrázame!, <span class="font-normal italic opacity-90">después del apocalipsis</span>
        </span>
      </AeroTitlebar>
    </AeroWindow>
  </header>
</template>

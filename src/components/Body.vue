<script setup lang="ts">
import AeroRain from '@/components/aero/AeroRain.vue'
import AeroNavigation from '@/components/aero/AeroNavigation.vue'
import { currentComponent } from '@/router'
import { useMood } from '@/composables/useMood'

useMood()
</script>

<template>
  <AeroRain />
  <main class="aero-layout__body">
    <aside class="aero-layout__texture" aria-hidden="true"></aside>

    <section class="aero-layout__content">
      <div class="relative z-10">
        <component :is="currentComponent" />
        <AeroNavigation />
      </div>
    </section>

    <aside class="aero-layout__texture" aria-hidden="true"></aside>
  </main>
</template>

<script setup lang="ts">
import Rain from '@/components/Rain.vue'
import Navigation from '@/components/Navigation.vue'
import { currentComponent } from '@/router'
</script>

<template>
  <main class="layout-body">
    <!-- Left Texture -->
    <aside class="layout-texture"></aside>

    <!-- Main Content -->
    <section class="layout-content">
      <!-- RAIN_COMPONENT -->
      <Rain :count="180" :symbols="['✝', '☩', '✞', '†', '☨']" />

      <div class="relative z-10">
        <!-- DYNAMIC_CONTENT -->
        <component :is="currentComponent" />

        <!-- NAVIGATION_COMPONENT -->
        <Navigation />
      </div>
    </section>

    <!-- Right Texture -->
    <aside class="layout-texture"></aside>
  </main>
</template>

<style scoped>
</style>

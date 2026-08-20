<script setup lang="ts">
import { UiRain, UiNavigation } from '@/components/ui'
import { currentComponent } from '@/router'
import { useMood } from '@/composables/useMood'

useMood()
</script>

<template>
  <UiRain />
  <main class="aero-layout__body">
    <aside class="aero-layout__texture" aria-hidden="true"></aside>

    <section class="aero-layout__content">
      <div class="relative z-10">
        <component :is="currentComponent" />
        <UiNavigation />
      </div>
    </section>

    <aside class="aero-layout__texture" aria-hidden="true"></aside>
  </main>
</template>

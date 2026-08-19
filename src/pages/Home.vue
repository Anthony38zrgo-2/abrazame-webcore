<script setup lang="ts">
import liminalJpg from '@public/textures/liminal.jpg'
import AeroWindow from '@/components/aero/AeroWindow.vue'
import AeroTitlebar from '@/components/aero/AeroTitlebar.vue'
import AeroPanel from '@/components/aero/AeroPanel.vue'
import AeroButton from '@/components/aero/AeroButton.vue'
import MoodSection from '@/components/aero/MoodSection.vue'
</script>

<template>
  <AeroWindow variant="rgb" mood="nostalgia" class="max-w-5xl mx-auto">
    <AeroTitlebar title="intro.txt" variant="rgb" />
    <AeroPanel>
      <MoodSection id="intro" mood="nostalgia" label="Intro otoñal">
        <h2 class="text-5xl font-light tracking-tight text-slate-900">Soledad, luto, pensamientos y náuseas.</h2>
        <p class="text-2xl mt-6 leading-relaxed text-slate-700">Sin nadie a quien abrazar.<br />Sin nadie a quien amar.<br />¿Algún día cambiará?</p>
        <img :src="liminalJpg" class="mt-8 w-full rounded-xl border border-white/60 shadow-lg object-cover" alt="liminal" loading="lazy" />
        <div class="mt-10 flex justify-center">
          <AeroButton variant="primary" href="#/c1"><span class="text-xl">✞</span> LEER CAPÍTULO UNO <span class="text-xl">✞</span></AeroButton>
        </div>
      </MoodSection>
    </AeroPanel>
  </AeroWindow>
</template>

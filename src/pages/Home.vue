<script setup lang="ts">
import liminalJpg from '@public/textures/liminal.jpg'
import AeroWindow from '@/components/aero/AeroWindow.vue'
import AeroTitlebar from '@/components/aero/AeroTitlebar.vue'
import AeroPanel from '@/components/aero/AeroPanel.vue'
import AeroButton from '@/components/aero/AeroButton.vue'
import MoodSection from '@/components/aero/MoodSection.vue'
import GlitterDivider from '@/components/emo/GlitterDivider.vue'
</script>

<template>
  <AeroWindow variant="rgb" mood="nostalgia" class="max-w-5xl mx-auto">
    <AeroTitlebar title="intro.txt" variant="rgb" />
    <AeroPanel>
      <MoodSection id="intro" mood="nostalgia" label="Intro otoñal">
        <!-- Título con gradient naranja→rojo + glow -->
        <h2 class="emo-title text-[2rem] md:text-[2.6rem] lg:text-[3rem] leading-none font-bold tracking-tight text-balance border-b border-amber-200 pb-5">
          Soledad, luto, pensamientos y nauseas.
        </h2>
        <GlitterDivider class="mt-4" />
        <!-- Body Verdana 10px #003366 lowercase -->
        <p class="emo-body text-[11px] md:text-[12px] leading-[1.6] mt-6 text-[#003366]" style="font-family: Verdana, Geneva, sans-serif; text-transform: lowercase;">
          sin nadie a quien abrazar.<br />sin nadie a quien amar.<br />¿algun dia cambiara?
        </p>
        <div class="mt-2">
          <a href="#/c1" class="emo-link text-[11px] underline" style="font-family: Verdana, sans-serif; color: #0000FF;">leer capítulo uno</a>
        </div>
        <!-- Ilustración con stickers MS Paint -->
        <div class="relative mt-8">
          <img :src="liminalJpg" class="w-full md:w-[68%] aspect-[4/3] object-cover mx-auto block rounded-lg border border-white/60 shadow-lg" alt="liminal" loading="lazy" />
          <!-- Stickers -->
          <span class="absolute -top-3 -right-2 md:right-[14%] text-[22px] rotate-12 drop-shadow-[1px_1px_0_#000] select-none" aria-hidden="true">💖</span>
          <span class="absolute -bottom-2 -left-1 md:left-[15%] text-[18px] -rotate-6 drop-shadow-[1px_1px_0_#000]" aria-hidden="true">★</span>
          <span class="absolute bottom-2 right-3 md:right-[16%] text-[10px] font-bold bg-black text-[#00FFFF] px-1 border border-white" aria-hidden="true">2007</span>
          <span class="absolute top-2 left-2 md:left-[17%] text-[14px] opacity-90" aria-hidden="true">✧</span>
        </div>
        <GlitterDivider class="mt-6" />
        <div class="mt-6 flex justify-center">
          <AeroButton variant="primary" href="#/c1"><span class="text-xl">✞</span> LEER CAPÍTULO UNO <span class="text-xl">✞</span></AeroButton>
        </div>
      </MoodSection>
    </AeroPanel>
  </AeroWindow>
</template>

<style scoped>
.emo-title {
  font-family: "Times New Roman", Georgia, serif;
  background: linear-gradient(to right, #FF6B00, #FF0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 6px rgba(255,107,0,0.55)) drop-shadow(1px 1px 0 #000);
  font-style: italic;
}
.emo-body {
  font-family: Verdana, Geneva, sans-serif;
  color: #003366;
}
.emo-link {
  color: #0000FF;
  text-decoration: underline;
}
.emo-link:hover { color: #FF00FF; }
</style>

<script setup lang="ts">
import c1aJpg from "@public/images/c1a.jpg";
import AeroWindow from '@/components/aero/AeroWindow.vue'
import AeroTitlebar from '@/components/aero/AeroTitlebar.vue'
import AeroPanel from '@/components/aero/AeroPanel.vue'
import MoodSection from '@/components/aero/MoodSection.vue'
import LeafIcon from '@/assets/moods/leaf.svg'
import RainIcon from '@/assets/moods/rain.svg'
import EyeIcon from '@/assets/moods/eye-red.svg'
import Typewriter from '@/components/aero/Typewriter.vue'
</script>

<template>
  <AeroWindow variant="lore" class="max-w-5xl mx-auto">
    <AeroTitlebar title="chapter_1.txt" variant="lore" />
    <AeroPanel>
      <!-- atardecer — nostalgia otoñal -->
      <MoodSection id="atardecer" mood="nostalgia" label="Atardecer">
        <div class="relative rounded-xl border border-white/40 bg-white/55 backdrop-blur-[6px] p-6 md:p-8 shadow-sm overflow-hidden transition-all duration-700">
          <LeafIcon class="absolute -top-2 -right-2 w-14 h-14 text-amber-600/25 blur-[0.3px] pointer-events-none rotate-12" />
          <div class="absolute inset-0 pointer-events-none opacity-[0.18]" style="mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)">
            <span class="absolute top-[12%] left-[8%] text-amber-700/30 text-xl">🍂</span>
            <span class="absolute top-[28%] right-[12%] text-amber-600/25 text-lg">🍁</span>
          </div>
          <h2 class="text-[1.9rem] md:text-[2.45rem] lg:text-[2.75rem] leading-[1.15] font-['Cormorant_Garamond'] font-semibold text-amber-950 tracking-[-0.015em] text-balance border-b border-amber-200/70 pb-4">
            Pensamientos y Náuseas
          </h2>
          <img :src="c1aJpg" class="mt-8 w-full md:w-[68%] aspect-[4/3] object-cover mx-auto block rounded-lg border border-white/60 shadow-lg" alt="chapter 1" loading="lazy" />
          <div class="mt-8 text-[17.5px] md:text-[18.5px] leading-[1.82] space-y-6 max-w-[65ch] mx-auto text-amber-950 font-['Cormorant_Garamond'] font-[400]">
            <p>Contemplaba el atardecer y mi mente regresó a la última cena con mis padres, justo la noche antes de que el apocalipsis llegara al pueblo y me dejara sola.</p>
            <p>En el horizonte, el sol dibujaba pinceladas cálidas, tonos anaranjados y rosáceos que contrastaban con el gris profundo de las nubes de lluvia.</p>
            <p>Mientras tanto, mis manos seguían cosechando café mecánicamente, aferradas a una rutina que mantengo incluso años después de que todas las personas del mundo desaparecieran.</p>
            <p>Junto a mí descansaba la escultura de arcilla con forma de conejo que modelé hace tanto tiempo.</p>
            <p>Buscando consuelo en su figura estática, acaricié sus orejas frías y rompí el silencio:</p>
            <blockquote class="border-l-[3px] border-amber-600 bg-amber-500/[0.07] pl-5 py-3 italic text-amber-900 rounded-r-lg font-[450]">—¿No crees que a papá y a mamá les habría encantado esta nueva cosecha?</blockquote>
            <p>Mi voz sonó frágil, un intento desesperado por llenar el vacío con una conversación que solo existía en mi cabeza.</p>
            <p>Aunque la arcilla permanecía inmóvil, mi mente dibujaba respuestas y gestos familiares.</p>
            <p>Cuando las primeras gotas de lluvia me obligaron a buscar refugio, me despedí de él como si fuera de carne y hueso:</p>
            <blockquote class="border-l-[3px] border-amber-600 bg-amber-500/[0.07] pl-5 py-3 italic text-amber-900 rounded-r-lg">—Espero que disfrutes del agua, vecino Antonio.</blockquote>
            <p>Me detuve en el umbral para verlo una última vez; la lluvia comenzaba a oscurecer la arcilla y sonreí con tristeza.</p>
          </div>
        </div>
      </MoodSection>

      <!-- lluvia — typewriter + sub-card -->
      <MoodSection id="lluvia" mood="rain" label="Lluvia">
        <div class="relative rounded-xl border border-white/40 bg-white/55 backdrop-blur-[6px] p-6 md:p-8 my-8 shadow-sm overflow-hidden">
          <RainIcon class="absolute top-3 right-4 w-8 h-8 text-sky-700/20 blur-[0.3px] pointer-events-none" />
          <div class="absolute inset-0 pointer-events-none opacity-[0.12]" style="mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)">
            <span class="absolute top-[15%] left-[6%] text-sky-600/30">│</span>
            <span class="absolute top-[45%] right-[8%] text-sky-500/25">╎</span>
          </div>
          <Typewriter sectionId="lluvia">
            <div class="space-y-6 text-[17.5px] md:text-[18px] leading-[1.75] max-w-[65ch] mx-auto font-mono font-[400] text-slate-900">
              <p>De pronto, el rugido de un motor viejo rompió la tranquilidad del valle.</p>
              <p>Solté un pequeño grito, asustada. Mi corazón se detuvo un instante antes de volver a latir violentamente; la taquicardia se apoderó de mi pecho.</p>
              <p>Al girarme, distinguí la silueta borrosa de un hombre con sombrero negro descendiendo de una moto oscura.</p>
              <p>“No es real”, pensé, frotándome los ojos con fuerza. Pero la figura no desapareció.</p>
              <p>Cuando el extraño colapsó en el lodo al fin pude reaccionar. Corrí a su lado, ignorando la lluvia que ya empezaba a calar mi ropa.</p>
              <p>Al tocarlo, el impacto fue eléctrico: era sólido, real.</p>
              <p>Una vez a salvo, el cuerpo me pasó factura. Me refugié en una esquina, respirando hondo hasta domar la taquicardia.</p>
              <p>Cuando mi mente se despejó, noté que él me observaba. Gateé hacia él y toqué su mano. El calor de su piel fue la prueba definitiva.</p>
              <p>Sentí una sacudida que no experimentaba hacía años: alguien más respiraba el mismo aire que yo.</p>
              <p>A diferencia de mi conejo de arcilla, él era innegablemente real.</p>
              <p>Más tarde, él levantó la mirada agotada hacia mí para susurrar:</p>
              <blockquote class="border-l-[3px] border-sky-600 bg-sky-500/[0.06] pl-5 py-3 italic text-sky-900 rounded-r-lg">—Gracias por dejarme pasar. Hace tiempo que no veía a alguien con vida. ¿Eres real o estoy delirando?</blockquote>
              <p>No hablamos más aquella noche. Cuando el cansancio lo venció, lo acomodé junto a las mantas y me quedé observándolo hasta que el sueño también me venció a mí.</p>
            </div>
          </Typewriter>
        </div>
      </MoodSection>

      <!-- motor — VHS + typewriter -->
      <MoodSection id="motor" mood="vhs" label="Motor">
        <div class="relative rounded-xl border border-white/40 bg-white/55 backdrop-blur-[6px] p-6 md:p-8 my-8 shadow-sm overflow-hidden">
          <div class="absolute inset-0 pointer-events-none opacity-[0.06]" style="background: repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, black 3px)"></div>
          <EyeIcon class="absolute top-4 right-4 w-7 h-7 text-red-600/15 blur-[0.3px] pointer-events-none" />
          <Typewriter sectionId="motor">
            <div class="space-y-6 text-[17.5px] md:text-[18px] leading-[1.65] max-w-[65ch] mx-auto font-['VT323'] tracking-[0.02em] font-[400] text-zinc-900">
              <p>Al despertar, descubrí que la manta me cubría a mí y que una almohada sostenía mi cabeza.</p>
              <p>El motero ya estaba de pie, contemplando los murales que había pintado en las paredes.</p>
              <blockquote class="border-l-[3px] border-zinc-600 bg-black/[0.04] pl-5 py-3 italic text-zinc-800 rounded-r-lg">—¿Te gustan los conejos? Esta pintura parece especial. ¿Qué significa?</blockquote>
              <p>Un dolor agudo me atravesó el pecho. Quise responder, pero la garganta se me cerró.</p>
              <p>Ese dibujo era la última cena con mis padres y vecinos, la noche antes de que el mundo se acabara.</p>
              <p>Él se acercó despacio y pasó su mano por mi cabello con torpeza.</p>
              <p>Ese contacto humano fue demasiado: mis defensas cayeron y las lágrimas brotaron sin control.</p>
              <blockquote class="border-l-[3px] border-zinc-600 bg-black/[0.04] pl-5 py-3 italic rounded-r-lg">—Has vivido cosas muy difíciles, ¿verdad?</blockquote>
              <blockquote class="border-l-[3px] border-zinc-600 bg-black/[0.04] pl-5 py-3 italic rounded-r-lg">—Me llamo Iván. Es un placer conocerte.</blockquote>
              <p>Le estreché la mano y, con señas, le pedí un momento a solas.</p>
              <p>Me encerré en el baño y me quité la ropa que llevaba puesta desde hacía años.</p>
              <p>Mientras el agua caliente corría sobre mi cuerpo, intenté despejar mi mente.</p>
              <p>Sabía que al salir tendría que enfrentar algo para lo que no estaba lista: interactuar con una persona después de haber visto a tantos morir.</p>
            </div>
          </Typewriter>
        </div>
      </MoodSection>
    </AeroPanel>
  </AeroWindow>
</template>

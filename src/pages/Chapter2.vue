<script setup lang="ts">
import { ref } from 'vue';
import c2aJpg from "@public/images/c2a.jpg";

// Control de estado para revelar la nota escrita por Dalia
const notaRevelada = ref(false);
</script>

<template>
    <div
        class="win98-window max-w-5xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-neutral-400 bg-[#f0eedf]">
        <!-- Barra de título clásica Windows 98 con temática gótica -->
        <div class="win98-titlebar win98-titlebar-lore flex items-center justify-between px-3 py-2.5 select-none">
            <span
                class="text-sm font-mono tracking-wider text-red-100 drop-shadow-[0_0_4px_rgba(220,38,38,0.6)] flex items-center gap-2">
                <span class="text-red-500">⸸</span> chapter_2.txt
            </span>
            <div class="win98-title-buttons flex gap-1.5">
                <div class="win98-button-dark"></div>
                <div class="win98-button-dark"></div>
                <div class="win98-button-dark"></div>
            </div>
        </div>

        <!-- Panel contenedor del texto -->
        <div class="win98-panel p-8 md:p-12 bg-[#e4e2d5] border-t border-neutral-300">
            <h2
                class="text-5xl leading-tight font-serif text-neutral-900 tracking-wide border-b border-neutral-400 pb-6">
                Dalia Bianchi
            </h2>

            <!-- Ilustración del Capítulo 2 -->
            <img :src="c2aJpg" class="mt-8 border-4 border-neutral-900 w-1/2 mx-auto block shadow-md"
                alt="chapter 2 illustration - Prosperidad y los conejos" />

            <!-- Cuerpo del Texto Narrativo (Perspectiva de Iván) -->
            <div
                class="mt-12 text-xl font-sans md:text-2xl leading-relaxed space-y-8 tracking-wide max-w-4xl mx-auto text-neutral-950">
                <p>
                    La soledad no era nueva para mí; era una vieja conocida que ya me pesaba desde antes del
                    apocalipsis, mucho antes de que el mundo se quedara en silencio.
                </p>

                <p>
                    Tras años devorando kilómetros de asfalto en mi vieja moto, buscando algo —o a alguien—, mis
                    esperanzas me arrastraron hasta un pueblo perdido en los Andes bautizado 'Prosperidad'. Mi entrada
                    estuvo lejos de ser triunfal: el tanque de mi moto se secó justo en el límite del pueblo. Yo, que
                    llevaba días sin probar bocado, me apagué junto con el motor. Lo último que recuerdo es el suelo
                    acercándose y unas casas blancas de tejas naranjas desenfocadas por mi propia debilidad.
                </p>

                <p>
                    Cuando desperté, aún sentía un martilleo constante en las sienes, pero la curiosidad pudo más que el
                    dolor. Me incorporé con dificultad para inspeccionar mi entorno: estaba en el interior de una casa
                    cálida. A mi lado, en una silla, dormía una chica pelirroja de mediana estatura. Al verla tiritar
                    ligeramente, comprendí que se había quedado dormida cuidándome, así que tomé la misma manta que me
                    cubría a mí y la tapé con cuidado hasta los hombros.
                </p>

                <p>
                    La luz del amanecer empezaba a revelar algo fascinante que no había notado antes: las paredes. La
                    casa entera era un lienzo. Había múltiples dibujos: algunos hechos con témpera, otros con grafiti,
                    lapiceros o plumones. Me dio la impresión de estar viendo pinturas rupestres modernas, un diario de
                    vivencias plasmado en figuras abstractas. Lo curioso es que todos los dibujos giraban en torno a
                    conejos. Y en cada escena, siempre aparecía un conejo blanco con manchas rojizas y ojos celestes.
                    Entendí de inmediato que era ella, autorretratándose en los muros de su encierro.
                </p>

                <p>
                    Tambaleándome, me senté en una silla vieja de caoba frente a ella, intentando enfocar la vista, pero
                    el mareo regresó con una violencia inusitada. No era simple debilidad por hambre; conocía este
                    vértigo. Era esa maldita enfermedad crónica que me habían diagnosticado hacía años y que creía
                    controlada. «¿Tantos años de tratamiento para que justo ahora regrese esta mierda?», pensé con
                    amargura.
                </p>

                <p>
                    En ese momento, la chica despertó. Me miró extrañada, casi asustada de verme en pie. Yo intenté
                    saludarla, ser amable, pero ella parecía profundamente afectada, como si mi presencia hubiera
                    removido escombros en su interior. Tuvimos un intercambio breve y torpe donde ella no pudo decir su
                    nombre, y luego huyó hacia el baño a ducharse.
                </p>

                <p>
                    Me quedé sentado en la silla de caoba esperándola, pero el mundo empezó a girar demasiado rápido.
                    Los mareos se volvieron insoportables. Apenas tuve fuerzas para arrastrarme de vuelta a la cama
                    antes de que la consciencia se me escapara de nuevo. Los días siguientes son una laguna en mi
                    memoria. Una niebla espesa interrumpida solo por la presencia constante de la chica de ojos azul
                    celeste. Ella me cuidaba en absoluto silencio, velando mi fiebre con la dedicación que uno le da a
                    un familiar enfermo, no a un extraño que cayó en su puerta.
                </p>

                <p>
                    En medio de mis delirios, el clima nostálgico de Prosperidad y la calidez de sus cuidados
                    confundieron a mi mente rota: empecé a creer que estaba con Adelaide, mi difunta esposa. Hubo
                    momentos en los que juré que yo ya había muerto y estaba en una especie de limbo dulce junto a ella.
                    La comida que me daba a cucharadas tenía el mismo sabor que la de Adelaide; la forma en que ponía su
                    mano en mi frente para medir la fiebre era su tacto. Por primera vez en años, desapareció mi
                    necesidad de huir en la moto. Quería quedarme ahí, atrapado en esa fantasía, aunque fuera en
                    silencio.
                </p>

                <p>
                    Pero la fiebre finalmente cedió. Cuando recuperé la lucidez suficiente y los mareos bajaron hasta
                    ser tolerables, la imagen de Adelaide se desvaneció, dejándome de nuevo con la desconocida
                    pelirroja. Fue entonces cuando sentí la necesidad imperiosa de saber, de verdad, quién era la
                    persona que me había salvado la vida dos veces.
                </p>

                <p>
                    Sin embargo, ante mi pregunta, sus labios solo articularon murmullos rotos. Sus manos temblaban y su
                    garganta parecía bloquearse, presa de un miedo antiguo. Intentaba decir 'Dal...', pero la voz se le
                    quebraba. Frustrada, corrió a su habitación y regresó con una foto vieja entre las manos: una niña
                    sonriente y un nombre al pie: 'Dalia Bianchi'.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Así que te llamas 'Dal'... —bromeé suavemente para aligerar su angustia, pero ella, muy seria,
                    señaló el papel con el dedo—. Dalia Bianchi. Es un nombre hermoso... Gracias por traerme de vuelta,
                    Dalia.
                </blockquote>

                <p>
                    Su seriedad se desvaneció, dando paso a una sonrisa tímida. Poco después trajo la cena: un puré de
                    papas con especias y verduras que olía a gloria. Esta vez pude comer solo, sin ayuda. Cuando
                    terminamos, ella me cubrió con la misma manta y se retiró a dormir. Yo intenté hacer lo mismo, pero
                    no hubo descanso, solo el regreso a la maldita pesadilla recurrente.
                </p>

                <p>
                    Me encontré perdido en una ciudad inmensa, rodeado por una multitud de maniquíes vivientes.
                    Caminaban rápido, chocando contra mí, ignorando mis gritos de auxilio como si yo no existiera en su
                    frecuencia. Entonces, en medio de esa masa uniforme, la vi: mi hija Sofía. Me miraba sonriendo,
                    ajena al caos. La adrenalina disparó mis piernas y corrí desesperado hacia ella, rompiendo la
                    multitud. Pero justo cuando mis dedos iban a rozar los suyos, el apocalipsis estalló. En una
                    fracción de segundo, el mundo se quebró. Todos se convirtieron en polvo. La sonrisa de mi hija se
                    desmoronó entre mis manos, deshaciéndose en ceniza y dejándome solo, de rodillas, en medio de calles
                    muertas.
                </p>

                <p>
                    Desperté llorando, con el pecho agitado. Dalia Bianchi estaba ahí, velando mi angustia. Al ver mi
                    vulnerabilidad se acercó y, con voz temblorosa pero audible, susurró:
                </p>

                <!-- Diálogo de Dalia (Rojo, ahora que habla) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Descuida... ya... ya no estás... no estás solo. Ya pasó.
                </blockquote>

                <p>
                    Hablaba entrecortado, tartamudeando, pero se le podía entender. Me abrazó con fuerza mientras
                    repetía esas palabras como un mantra. En su cercanía noté un suave perfume floral y sentí una paz
                    extraña, casi espiritual, que no había experimentado ni antes del fin del mundo. Mis ojos oscuros
                    buscaron los suyos, celestes y cristalinos; en ese silencio compartido, reconocimos el dolor del
                    otro. Ella desvió la mirada hacia el dibujo de los conejos, tomó un papel y un lápiz, y escribió
                    algo rápidamente. Me lo entregó con mano temblorosa:
                </p>

                <!-- Elemento interactivo web para leer la nota manuscrita de Dalia -->
                <div class="my-8 p-6 bg-amber-50/40 border border-amber-900/20 rounded shadow-inner text-center">
                    <button v-if="!notaRevelada" @click="notaRevelada = true"
                        class="px-4 py-2 bg-red-900 text-red-100 font-mono text-sm hover:bg-red-800 transition shadow">
                        [ Leer nota manuscrita de Dalia ]
                    </button>

                    <blockquote v-else
                        class="text-left border-l-4 border-amber-700 bg-amber-900/5 pl-6 py-3 italic text-amber-950 font-serif tracking-normal animate-fade-in">
                        "Esos conejos son la última vez que nos reunimos todos en la iglesia de Prosperidad. Sabíamos
                        que el fin llegaba, así que decidimos compartir el último aliento: cantamos, comimos y bailamos.
                        Mientras sonaba la música, pasó lo inevitable. Uno a uno se fueron desvaneciendo. Abracé a mi
                        familia cerrando los ojos, lista para irme con ellos. Pero al abrirlos... solo quedaba mi abrazo
                        vacío. El apocalipsis se los llevó a todos, menos a mí."
                    </blockquote>
                </div>

                <p>
                    Dalia temblaba y lloraba en silencio mientras yo leía. Había abierto su herida más profunda para
                    curar la mía. Le devolví el papel y tomé su mano:
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Descuida, Dalia. Tú tampoco estás sola. Ya pasó.
                </blockquote>

                <p>
                    Me sonrió tiernamente a través de las lágrimas. De repente, algo llamó su atención en la ventana.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¡Conejo!
                </blockquote>

                <p>
                    Me asomé. Afuera, bajo la luz azulada y fría del amanecer, un viejo y gordo conejo gris luchaba
                    contra el viento. Miré a la pequeña pelirroja; su expresión era una mezcla de alegría por ver al
                    animal y tristeza residual por lo que acabábamos de compartir. Aquel conejo no era un animal
                    cualquiera para ella, era casi un viejo amigo.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¿No quisieras acariciarlo? —le propuse—. Quizá entre los dos podamos atraparlo.
                </blockquote>

                <p>
                    Dalia asintió, secándose las lágrimas con la manga de su suéter beige. Suspiró y abrió la puerta. El
                    aire fresco y húmedo me despejó la mente de golpe. Ella se puso una casaca impermeable roja y yo
                    tomé un paraguas de la entrada por si la lluvia regresaba. Vi un brillo de entusiasmo en su rostro,
                    algo contagioso. Al menos los mareos se habían ido, permitiéndome salir a caminar por el pueblo
                    junto a una pelirroja pecosa.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Redesigned Titlebar (Crimson to Dark gradient) */
.win98-titlebar-lore {
    background: linear-gradient(90deg,
            rgba(136, 0, 21, 1) 0%,
            rgba(20, 0, 4, 1) 100%);
    border-bottom: 2px solid rgba(185, 28, 28, 0.4);
}

/* Dark retro look for the buttons */
.win98-button-dark {
    width: 16px;
    height: 14px;
    background: #1a0508;
    border-top: 1.5px solid #4c0519;
    border-left: 1.5px solid #4c0519;
    border-right: 1.5px solid #000;
    border-bottom: 1.5px solid #000;
}

/* Transición suave para cuando se revela la nota */
.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
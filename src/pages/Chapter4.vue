<script setup lang="ts">
import c4aJpg from "@public/images/c4a.png";
</script>

<template>
    <div
        class="win98-window max-w-5xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-neutral-400 bg-[#f0eedf]">
        <!-- Barra de título clásica Windows 98 con temática gótica -->
        <div class="win98-titlebar win98-titlebar-lore flex items-center justify-between px-3 py-2.5 select-none">
            <span
                class="text-sm font-mono tracking-wider text-red-100 drop-shadow-[0_0_4px_rgba(220,38,38,0.6)] flex items-center gap-2">
                <span class="text-red-500">⸸</span> chapter_4.txt
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
                El laberinto de pensamientos
            </h2>

            <!-- Ilustración del Capítulo 4 -->
            <img :src="c4aJpg" class="mt-8 border-4 border-neutral-900 w-1/2 mx-auto block shadow-md"
                alt="chapter 4 illustration - El laberinto de pensamientos nocturnos" />

            <!-- Cuerpo del Texto Narrativo (Perspectiva de Iván) -->
            <div
                class="mt-12 text-xl font-sans md:text-2xl leading-relaxed space-y-8 tracking-wide max-w-4xl mx-auto text-neutral-950">
                <p>
                    Tanto camino recorrido, tanta montaña cruzada para encontrar un milagro, y ahora que la tengo aquí,
                    roncando a dos metros... la angustia me pesa más que la soledad. Eran las tres de la mañana.
                    Estábamos en la sala, tapados con esas frazadas viejas de tigre que pesan demasiado. Dalia roncaba
                    suave, tranquila. Yo no podía. Mi cabeza no paraba. El insomnio es mi costumbre desde hace años,
                    pero esta noche era diferente. No era solo falta de sueño. Era culpa... por no ser sincero con Dal
                    Dal. No podía estar quieto, así que fui a la ventana. La luna estaba ahí, sola. El viento movía las
                    hojas y me acordé de Sofía, de cómo ese sonido la calmaba. Me acordé de mi casa antes de separarme,
                    de las promesas de viaje que nunca cumplí. Todo eso ya no existe.
                </p>

                <p>
                    El fin del mundo borró todo y nos dejó a la pelirroja y a mí. ¿Por qué a nosotros? Parece una broma
                    cruel: dejar vivo a un hombre que se está apagando lentamente y ponerlo a cuidar a una chica que
                    tiene pánico a que la dejen sola. Si no hubiera llegado a este pueblo, seguramente habría muerto en
                    la carretera, como se suponía que pasaría. En la moto me distraía, ignoraba el dolor, pero aquí, en
                    silencio, la verdad es clara: soy un hombre enfermo, y cada día que no se lo digo, siento que la
                    estoy traicionando más.
                </p>

                <p>
                    La quiero tanto que no puedo decirle que me desahuciaron hace ya muchos años, sé que a ella le va a
                    afectar mucho... tendré las palabras correctas y el valor para decírselo.
                </p>

                <p>
                    Un ruido cortó mis pensamientos. Era Dalia.
                </p>

                <p>
                    Estaba atrapada en una pesadilla, moviéndose bajo las mantas como si algo la asfixiara. Balbuceaba
                    palabras sueltas, angustiadas. Me acerqué y le toqué el hombro con cuidado para despertarla. Abrió
                    los ojos de golpe; estaban llenos de lágrimas y terror. Al verme, el pánico cambió a vergüenza y se
                    escondió rápido bajo la frazada, hecha un ovillo. Su cuerpo temblaba entero.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Estoy aquí, Dal —le susurré—. Tranquila. Creo que a ninguno de los dos nos van a dejar dormir hoy.
                </blockquote>

                <p>
                    Pasaron unos minutos hasta que el temblor bajó. Con un hilo de voz que apenas escuché, dijo:
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Iván... por favor, ve a mi cuarto y tráeme un pijama y ropa interior limpia. Me da mucha
                    vergüenza... mojé el sofá.
                </blockquote>

                <p>
                    No dije nada. No hacía falta. Solo le acaricié el pelo un momento para que supiera que no pasaba
                    nada. Fui a su cuarto y abrí los cajones. Casi todo era ropa vieja, cosas que parecían de su madre o
                    casacas enormes de su padre. La ropa le quedaba grande, como si estuviera jugando a ser adulta en
                    una casa vacía. Agarré lo primero que encontré y volví a la sala.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Ahora... necesito que te des la vuelta. Si me miras, te juro que te golpeo —me advirtió,
                    encogiéndose todavía más.
                </blockquote>

                <p>
                    Solté media sonrisa para quitarle peso al asunto y me giré.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Tranquila. Soy una tumba.
                </blockquote>

                <p>
                    Mientras esperaba, mis ojos se fueron a la estantería. Tenía muchos discos, pero uno estaba repetido
                    varias veces, gastado de tanto uso. Era el <em>Unknown Pleasures</em> de Joy Division. Me
                    sorprendió. Tenía buen gusto para la tristeza. Sin que se diera cuenta, puse uno en el equipo de
                    sonido y subí el volumen lo justo para tapar el ruido de la ropa al cambiarse. Dejé que la música
                    llenara ese silencio incómodo.
                </p>

                <p>
                    Dalia, ya con su pijama gris y una bufanda rosa, se acercó y me dio un golpecito en el hombro.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —No te vi, ¿por qué la violencia, pequeña pecosa? —dije, sobándome el brazo exageradamente.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Ve acostumbrándote si piensas quedarte —replicó, levantando una ceja—. Soy así con las personas que
                    aprecio.
                </blockquote>

                <p>
                    Me quedé mirándola un segundo. Su voz sonaba más firme, con ese sarcasmo que estaba empezando a
                    asomar. De golpe caí en cuenta: hacía una semana que no la veía agarrar el cuaderno para escribir.
                    Ya no necesitaba papel para decirme lo que pensaba. Ella estaba recuperando el habla, volviendo a
                    ser alguien completa, mientras yo sigo ocultándole que me estoy rompiendo por dentro.
                </p>

                <p>
                    Tras un breve silencio, ella misma subió un poco el volumen. El bajo hipnótico de la canción empezó
                    a resonar por la casa.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¿Quieres saber qué soñé? —preguntó, mirándome de reojo.
                </blockquote>

                <p>
                    Asentí.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Es una pesadilla de siempre —dijo, mirando a la nada—. Escaleras infinitas. Un lugar feo, de puro
                    concreto y luces amarillas que parpadean. Subo con mis viejos, tropiezo y, cuando me levanto, ya no
                    están. Subo y subo buscándolos, pero no hay nada. Ni ruido, ni pasos. Solo yo. Llevaba años sin
                    soñar eso, pero hoy volvió... y fue distinto. Esta vez, en lugar de subir, bajé. Y encontré la
                    salida. Tú estabas ahí, Iván. Parado en la puerta, esperando.
                </blockquote>

                <p>
                    Sentí un golpe en el estómago. Yo era su salida. Maldita sea.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Pero lo que me dolió fue que, al mirar para atrás, hacia las escaleras... mis padres me estaban
                    mirando. Hacía tanto que no les veía las caras... Quise correr hacia ellos, pero empezaron a subir
                    rápido, escapándose de mí. Como si al elegir la puerta... los estuviera traicionando. Eso fue lo que
                    me despertó. La culpa.
                </blockquote>

                <p>
                    Bajé el volumen de la música y le puse su casaca roja sobre los hombros. La tomé de la mano y
                    salimos a la entrada de su casa, nos sentamos en una roca grande. El viento frío nos golpeó la cara,
                    pero se sentía bien; nos despabilaba del encierro y del olor a humedad.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Dalia —dije, mirando la oscuridad del valle—, no sé si tengas confianza para hablar de esto ahora,
                    pero... ¿puedo hacerte una pregunta? Si el mundo no se hubiera ido a la mierda, ¿qué habrías hecho
                    con tu vida?
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Yo... mmm —se rascó la nuca, dudando—. Tenía un plan. Me encanta la electrónica. De chica desarmaba
                    las radios para ver sus entrañas. Mis padres me regañaban, pero luego me compraron un Arduino y
                    componentes. Supongo que, si hubiera ido a la universidad, habría sido ingeniera... o experta en
                    robótica.
                </blockquote>

                <p>
                    Sonreí, la pequeña de ojos azules no solo era artista; era una nerd aplicada. Tenía todo el sentido
                    del mundo que hubiera logrado mantener su casa funcionando.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Una ingeniera —murmuré—. Eso es útil.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¿Y tú? ¿Qué habrías sido tú?
                </blockquote>

                <p>
                    La pregunta me pesó.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Yo no sé qué habría sido de mí, Dal. Mientras tú buscas a tus padres en escaleras, yo sigo atrapado
                    en un laberinto mental. Mi familia era lo único que me daba sentido. Creí que buscar a alguien tras
                    el fin del mundo llenaría ese hueco, pero ahora que te encontré... esa sensación de no saber para
                    qué existo ha vuelto con fuerza.
                </blockquote>

                <p>
                    Dalia me tomó las manos. Sus ojos, bajo la luz lunar, brillaron con una intensidad celeste.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Quizás he vivido todo este tiempo en el pasado,ini subiendo esas escaleras —dijo, apretándome los
                    dedos—. Pero si pudiera cambiar las cosas... es difícil. Si pudiera elegir, tendría a mis padres y
                    sería ingeniera, sí... pero jamás te habría conocido. Y eso sería muy triste, porque eres de las
                    pocas personas que siento que me entienden. No podemos cambiar el pasado, ni sabemos el futuro.
                    ¿Quién iba a decir que dos supervivientes rotos se encontrarían en medio de la nada? Pero te prometí
                    algo, Iván. Voy a hacer ese conejo de arcilla para Sofía. Y otro para Adelaide. Eso sí puedo
                    hacerlo.
                </blockquote>

                <p>
                    Su respuesta me desarmó, por dentro sentí mucha culpa. Ella planeaba futuros cercanos, esculturas,
                    días tranquilos. Yo no sabía si esos mareos regresarían con otros síntomas más uno de estos días,
                    tal y como predijeron los doctores en aquella sala del hospital de la Gran Ciudad.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Dal... en tu sueño, yo estaba en la puerta de salida —dije despacio, midiendo el terreno—. Quizás
                    esa puerta significa algo. Quizás algún día puedas acompañarme a ver a dónde lleva. A ver qué hay
                    fuera de Prosperidad.
                </blockquote>

                <p>
                    Sentí cómo su cuerpo se tensaba bajo la casaca roja. Se separó un poco de mí, lo suficiente para
                    mirarme a los ojos con un terror puro.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Iván, tienes que entender algo —su voz temblor—. Yo nunca salí de aquí. Nunca. Ni siquiera antes.
                    Mis padres viajaban a la ciudad, pero yo... yo siempre tenía una excusa para quedarme. Pánico,
                    mareos, lo que sea. Me aterra lo que hay más allá de esas montañas. Siempre me ha aterrado. No sé si
                    soy capaz de dar un paso fuera de este pueblo sin que me dé un ataque de ansiedad. Me da miedo,
                    Iván. Mucho miedo.
                </blockquote>

                <p>
                    La confesión hizo que la comprendiera, por eso ella se siente un alma tan inocente, jamás vio las
                    cosas horribles en la gran ciudad. Le apreté la mano, pero mi propio miedo me mordió la garganta. Si
                    la sacaba de aquí, ¿podría protegerla? ¿Qué pasaría si mi enfermedad empeoraba en medio de la nada y
                    la dejaba sola en un lugar desconocido para ella?
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Lo sé —admití, sintiéndome más fraude que nunca—. Y está bien tener miedo. Yo tampoco sé si estoy
                    listo para...
                </blockquote>

                <p>
                    Me detuve, estaba a punto de confesarle qué tan grave era mi mal, pero miré su rostro y simplemente
                    no podía quebrarle el corazón. Amaba ese cabello rojizo, esas pecas, los conejos de arcilla, amaba
                    todo de ella, tanto como para no saber qué demonios hacer y quedarme paralizado.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¿And cómo sabremos cuándo hacerlo? —murmuró acariciando su cabello esponjoso.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —No tengo idea —dije, mirando el camino de piedra que se perdía en la noche—. Supongo que
                    simplemente lo sabremos, confiaremos en nuestra intuición.
                </blockquote>

                <p>
                    Nos quedamos quietos, callados... pero se sentía bien. Dalia me daba la seguridad de que, pasara lo
                    que pasara, íbamos a estar juntos en esto. Agarrados fuerte de la mano, caminando hacia la
                    incertidumbre sin mirar atrás.
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
</style>
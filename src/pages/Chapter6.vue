<script setup lang="ts">
import c6aJpg from "@public/images/c6a.png";
</script>

<template>
    <div
        class="win98-window max-w-5xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-neutral-400 bg-[#f0eedf]">
        <!-- Barra de título clásica Windows 98 con temática gótica -->
        <div class="win98-titlebar win98-titlebar-lore flex items-center justify-between px-3 py-2.5 select-none">
            <span
                class="text-sm font-mono tracking-wider text-red-100 drop-shadow-[0_0_4px_rgba(220,38,38,0.6)] flex items-center gap-2">
                <span class="text-red-500">⸸</span> chapter_6.txt
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
                ¡Cierra los ojos y sígueme!
            </h2>

            <!-- Ilustración del Capítulo 6 -->
            <img :src="c6aJpg" class="mt-8 border-4 border-neutral-900 w-1/2 mx-auto block shadow-md"
                alt="chapter 6 illustration - La armadura y la partida" />

            <!-- Cuerpo del Texto Narrativo (Perspectiva de Iván) -->
            <div
                class="mt-12 text-xl font-sans md:text-2xl leading-relaxed space-y-8 tracking-wide max-w-4xl mx-auto text-neutral-950">
                <p>
                    Me desperté con el cuerpo rígido, preparándome mentalmente para otro día de llevarle comida a la
                    iglesia y tragarme su rechazo. Pero un olor fuerte a arcilla fresca me detuvo. Miré a mi lado. El
                    famoso conejo de Sofía estaba ahí, terminado, pero no se parecía en nada a los bocetos que había
                    dibujado últimamente, de hecho, parecía una idea fresca que había tenido hace poco. Y a un par de
                    metros, Dalia roncaba suavemente en el sofá, exhausta y con los ojos hinchados. Tragué saliva; la
                    culpa me quemaba la garganta. A cualquiera le habría escupido en la cara que tengo cáncer avanzado,
                    pero a ella... a ella simplemente no pude. Tenía terror de que me mirara con lástima o que huyera.
                    Y, sin embargo, a pesar de mi gran mentira y de todo el daño que le hice, había regresado a casa.
                </p>

                <p>
                    Acaricié la oreja caída del conejo. Se sentía áspera. A pesar de sus defectos, capturaba exactamente
                    lo que yo recordaba de Sofía. Dalia había tirado su perfeccionismo por la borda y me había dejado
                    este mensaje mudo. Me recosté en el suelo, mirando cómo el techo se teñía de rosado con el amanecer.
                    Cerré los ojos. Tengo cáncer avanzado, es un hecho. Tengo fecha de caducidad. Pero los médicos que
                    me dieron un par de meses de vida hace años están todos muertos, y yo no. La ironía es un chiste de
                    mal gusto. Llegué a este pueblo fantasma buscando un rincón tranquilo para apagarme, y ahora,
                    escuchando a esta pequeña pecosa roncar a mi lado, lo único que quiero es encontrar la manera de
                    ganar un poco más de tiempo.
                </p>

                <p>
                    Si algún día tuviera que morir, ya sea del jodido cáncer o de cualquier otra cosa, al menos debe ser
                    una muerte que tenga sentido. Debía dejar algo en Dalia, un recuerdo, quizás varios recuerdos. Ella
                    disfruta mucho de mi compañía, y yo recién estoy dándome cuenta de que me encanta tenerla a mi lado.
                    Me levanté y le di un pequeño beso en la frente, como siempre solía hacerlo, sin que se diera
                    cuenta. Pero esta vez sí estaba despierta. Sus ojos estaban bien abiertos; parecía un gato naranja
                    mirando con curiosidad. Yo solo pude decirle con cierto temblor en la voz:
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¿Es... un beso de buenos días?
                </blockquote>

                <p>
                    Dalia se levantó del sofá, bostezando; tenía un gesto de enfado. Se puso a preparar el desayuno sin
                    decir nada. Mientras tanto, yo me puse a hablar con el conejo de arcilla:
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Tengo que decirte algo, Sofía, pero es un secreto. Tengo una sorpresa para esa tonta que está allá.
                </blockquote>

                <p>
                    Dal giró su cabeza con curiosidad. Murmuré algo en el oído del conejo e, inmediatamente, Dalia
                    estaba atrás de mí, queriendo escuchar.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Bueno, creo que no voy a poder contarte todo el plan, Sofía; hay alguien que está espiando...
                    Bueno, saldré a preparar la sorpresa.
                </blockquote>

                <p>
                    La cara de Dal de paso a ser otra vez de enfado, pero esta vez parecía fingido, como queriendo que
                    yo le contara la sorpresa. Si iba a morir, ya fuera por el cáncer o por cualquier otra miseria de
                    este mundo, tenía que ser una muerte útil. Debía dejarle recuerdos, enseñarle que hay algo más que
                    este encierro.
                </p>

                <p>
                    Me levanté en silencio. La miré dormir un segundo más y salí de la casa. El aire helado me golpeó el
                    pecho. Fui directo a la moto. Llevaba días haciéndole mantenimiento, pero necesitaba escucharla
                    encender para convencerme de que aún podíamos movernos. Metí la llave y el motor cobró vida con un
                    estruendo pesado. Apenas pasaron tres segundos cuando escuché un grito ahogado. Dalia salió
                    disparada por la puerta, con los ojos inyectados en pánico. Se lanzó contra mí, abrazándome el torso
                    como si yo estuviera a punto de desaparecer en el aire.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¡Por favor, no te vayas! —suplicó, con la voz rota—. ¡Quédate, Iván, no me dejes sola!
                </blockquote>

                <p>
                    Me sentí la peor escoria del planeta. Su miedo al abandono era una herida abierta y yo acababa de
                    echarle sal sin querer. La rodeé con mis brazos y apoyé mi frente contra la suya.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Tranquila, Dal Dal. No me voy —le susurré, sintiendo cómo su corazón latía desbocado contra mi
                    pecho—. Solo quería asegurarme de que esta chatarra aún funciona. Porque nos vamos a ir juntos. A la
                    Gran Ciudad.
                </blockquote>

                <p>
                    Dalia se dejó caer al suelo, apoyando la espalda contra el neumático de la vieja moto. El sol
                    empezaba a asomarse por encima de las montañas, arrojando una luz pálida sobre las ruinas de
                    Prosperidad y despejando por fin la tormenta de los últimos días.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Siempre he tenido terror a que me dejen atrás —susurró, abrazándose las rodillas—. Incluso antes de
                    todo esto. Mi madre me asfixiaba controlando cada paso que daba, pero en el fondo siempre estaba
                    ausente. La Nona solo venía una semana al año y luego regresaba a la ciudad. Tengo miedo de que
                    desaparezcas, Iván. No porque te largues en esta moto, ni siquiera por el jodido cáncer. Tengo
                    pánico de despertar una mañana, buscarte y que el silencio me trague de nuevo, como lo hizo con
                    todos los demás. Mira. Estoy aterrada.
                </blockquote>

                <p>
                    Un ventarrón helado cruzó el porche, haciéndola tiritar bajo su ropa oscura. Levantó las manos hacia
                    mí; temblaban sin control. Sin decir una palabra, me quité la casaca de cuero pesada y se la puse
                    sobre los hombros para cortar el frío. Me arrodillé frente a ella y envolvió sus manos heladas con
                    las mías, frotando mis pulgares sobre sus nudillos vendados para devolverles el calor.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Yo también tengo miedo, pecas —admití, soltando un suspiro que pareció cargar con años de culpa—.
                    Tengo pánico de arruinarlo todo otra vez. De repetir los errores que me costaron mi familia mucho
                    antes del apocalipsis. Fui un desastre protegiendo a los míos. Llegué a este pueblo fantasma
                    buscando un rincón para apagarme en paz, pero me diste una razón para pelear contra el reloj. No
                    podemos quedarnos aquí fingiendo que el tiempo no pasa. Si me quedan meses, o semanas, no pienso
                    gastarlos esperando la muerte en un sofá. Quiero vivirlos de verdad. Y no me imagino haciéndolo con
                    nadie más.
                </blockquote>

                <p>
                    El nerviosismo cruzó el rostro de Dalia. Pero en lugar de esquivar la mirada hacia el horizonte o
                    soltar una broma defensiva, apretó mis manos con fuerza. Se encogió un poco más dentro de mi casaca,
                    ahogándose en el olor a cuero viejo, y asintió despacio, dejando que el peso de todo lo que no nos
                    atrevíamos a decir en voz alta se asentara entre los dos.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Cierra los ojos y sígueme —pidió de pronto, poniéndose de pie.
                </blockquote>

                <p>
                    Me sorprendió la petición, pero obedecí. Me guio de la mano lentamente; yo solo confiaba en no
                    tropezarme con la chatarra del patio. Cuando nos detuvimos y me pidió que abriera los ojos, vi que
                    estábamos frente a la estatua de arcilla que representaba a la Nona. Dalia se quedó mirando la
                    figura unos minutos, mientras el viento helado hacía ondear su largo cabello rojizo.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Prométeme algo, Iván —dijo, con un tono tan serio que me heló la sangre—. Prométeme que vas a
                    lanzarte al vacío conmigo. No en un sentido literal, tonto. Lánzate conmigo al vacío de lo que hay
                    afuera. Quiero ver junto a ti qué hay en ese lugar oscuro. Si tenemos que ir a la Gran Ciudad para
                    que no te apagues en este sillón, lo haremos. A pesar de todos los miedos que tengamos.
                </blockquote>

                <p>
                    Había una determinación en su mandíbula que nunca le había visto. Parecía que, por primera vez,
                    estaba dispuesta a enfrentar al monstruo que la mantenía encerrada.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¿No importa si te da un ataque de pánico en medio de la carretera, pecas? —pregunté, buscando
                    asegurarme de que entendía el riesgo.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Por puro terror a salir es que saboteaba el conejo de arcilla —admití, mirando el suelo—. Mi
                    perfeccionismo era solo una excusa para extender el tiempo y mantenerte aquí, a salvo, en
                    Prosperidad. Pero si de verdad tus días están contados, no me basta con cuidarte. Tengo que conocer
                    tu pasado. Necesito ir a la Gran Ciudad y ver de dónde vienes, entender tus heridas. Solo así podré
                    acompañarte de verdad hasta el final.
                </blockquote>

                <p>
                    Sus palabras me desarmaron. Esa necesidad suya de comprenderme me inundó de una tranquilidad que no
                    sentía desde hacía una vida. Tragando el nudo en mi garganta, le hice la pregunta definitiva:
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¿Y cuándo quieres que saltemos a ese vacío?
                </blockquote>

                <p>
                    Esperaba que me dijera "el próximo mes", o "cuando deje de llover". Pero en lugar de responder,
                    Dalia soltó mis manos. Se dio media vuelta en completo silencio y caminó rápido hacia el interior de
                    la casa, cerrando la puerta de su cuarto tras de sí. Me quedé solo en el porche, completamente
                    desconcertado. ¿Había dicho algo malo? ¿La sola idea de fijar una fecha la había paralizado de
                    nuevo?
                </p>

                <p>
                    Pasaron los minutos. El motor de mi moto ya se había enfriado y yo estaba a punto de entrar a
                    buscarla, temiendo encontrarla hecha un ovillo en el suelo, cuando la puerta de madera volvió a
                    abrirse. Me quedé sin aliento.
                </p>

                <p>
                    Ya no llevaba la ropa holgada y desgastada con la que se escondía del mundo. Llevaba un suéter negro
                    ceñido y una falda oscura adornada con gruesos bordados andinos en blanco y negro. Calzaba unas
                    botas negras altas que resonaron contra la madera con una autoridad nueva. Alrededor de su cuello
                    pálido descansaba un collar de púas, y coronando su cabeza, un sombrero fedora negro que le daba una
                    sombra afilada a su mirada. Era una estética cruda, post-punk. Viéndola parada ahí, tan imponente,
                    entendí que no era solo ropa. Era una armadura.
                </p>

                <p>
                    Ese atuendo era su grito de guerra, una rebelión silenciosa contra la memoria de la madre
                    sobreprotectora que le enseñó a tenerle miedo a todo. Vestida así, ya no era la niña asustada que
                    sobrevivió de milagro; era una mujer reclamando la fuerza necesaria para enfrentar el apocalipsis de
                    frente. Levantó el rostro, clavando sus ojos celestes en mí desde debajo del ala del sombrero.
                </p>

                <!-- Diálogo de Dalia (Rojo - Con su armadura Post-Punk) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¡Hoy! —respondió, retomando la conversación exactamente donde la había dejado, pero con una
                    seguridad inquebrantable—. Tiene que ser hoy, Iván. Ayúdame a preparar todo para irnos. Necesitamos
                    provisiones para el camino, medicamentos, ropa adicional... nos vamos.
                </blockquote>

                <p>
                    La miré, envuelta en esa ropa que gritaba rebelión. Si ella tenía las agallas para abandonar su
                    único lugar seguro, yo no iba a ser quien la frenara. Regresar a la Gran Ciudad significaba caminar
                    sobre los fantasmas de mi pasado. Eso, suponiendo que llegáramos. Mi cuerpo era una máquina con los
                    engranajes podridos, y el viaje fácilmente podía terminar conmigo muerto en la orilla de alguna
                    carretera vacía. Pero viéndola tan decidida a enfrentar al mundo por mí, el terror a morir perdió
                    fuerza. Dalia había desnudado su alma al dejarme vivir en Prosperidad; ahora me tocaba a mí llevarla
                    al lugar donde mi alma se había roto. Me acerqué a la vieja moto roja y encendí el motor una vez
                    más.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Empaca rápido, pecas —le dije, entregándole una cuerda—. Nos vamos.
                </blockquote>
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
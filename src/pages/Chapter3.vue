<script setup lang="ts">
import c3aJpg from "@public/images/c3a.png";
</script>

<template>
    <div
        class="win98-window max-w-5xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-neutral-400 bg-[#f0eedf]">
        <!-- Barra de título clásica Windows 98 con temática gótica -->
        <div class="win98-titlebar win98-titlebar-lore flex items-center justify-between px-3 py-2.5 select-none">
            <span
                class="text-sm font-mono tracking-wider text-red-100 drop-shadow-[0_0_4px_rgba(220,38,38,0.6)] flex items-center gap-2">
                <span class="text-red-500">⸸</span> chapter_3.txt
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
                El conejo de Prosperidad
            </h2>

            <!-- Ilustración del Capítulo 3 -->
            <img :src="c3aJpg" class="mt-8 border-4 border-neutral-900 w-1/2 mx-auto block shadow-md"
                alt="chapter 3 illustration - La iglesia y el refugio" />

            <!-- Cuerpo del Texto Narrativo (Perspectiva de Dalia) -->
            <div
                class="mt-12 text-xl font-sans md:text-2xl leading-relaxed space-y-8 tracking-wide max-w-4xl mx-auto text-neutral-950">
                <p>
                    El cielo empezaba a oscurecer más y más. Un viejo paraguas con parches nos protegía de la lluvia,
                    que se volvía cada vez más intensa. Temía que Iván se resfriara; después de todo, era la primera vez
                    que él salía de mi casa desde que había llegado al pueblo de Prosperidad, no parecía que se había
                    recuperado del todo. Aun así, estaba ahí, motivándome a salir en un día hermosamente lluvioso.
                </p>

                <p>
                    Mi torpeza, mezclada con la concentración que tenía en mis propios pensamientos, me hizo olvidar que
                    suelo resbalarme cuando camino por un lugar empedrado. Y eso fue lo que pasó. Terminé en el suelo,
                    con la rodilla golpeada, mirando avergonzada a Iván mientras él se reía de mi torpeza, sin dejar de
                    cubrirme con el paraguas para que no me mojara completamente. Le saqué la lengua por burlarse de mí;
                    él se rió aún más y luego hizo el mismo gesto, imitándome. Crucé los brazos fingiendo que me había
                    enojado por su burla.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Dal Dal, ¿así que te vas a quedar ahí, eh? —preguntó Iván, inclinándose hacia mí—. Si quieres, me
                    siento contigo aquí... pero creo que podríamos ir a un lugar de este pueblo donde no esté tan
                    mojado.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¿Dal Dal? —le respondí con el ceño exageradamente fruncido—. Es el peor apodo que alguien me ha
                    puesto.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Quizás sí —dijo él encogiéndose de hombros—. Pensaba que tenías algún problema con el habla cuando
                    decías "Dal Dal", pero después me di cuenta de que era por tu nombre: Dalia. Señorita... ¿podemos
                    movernos?
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Yo te voy a apodar "tonto motero" —contesté, señalándolo con un dedo—. Eres muy tonto como para
                    viajar tanto tiempo sin comer y desmayarte frente a mi casa. ¿Sabes qué? Acompáñame. No vamos a
                    poder buscar al conejo gris con toda esta lluvia.
                </blockquote>

                <p>
                    Lo guié hacia la iglesia de Prosperidad, con su fachada blanca, resquebrajada por el paso del
                    tiempo. La puerta siempre quedaba entreabierta, siempre paraba allí. Entramos y encendí una vela
                    para iluminarnos. Cerré la puerta para que no entrara el agua de la lluvia, que a ese punto ya era
                    torrencial. Me di vuelta y vi a Iván, casi hechizado por uno de los dibujos que había hecho hace
                    mucho tiempo, uno de los tantos que cubrían las paredes de la iglesia.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Dalia, esto... esto es hermoso —dijo él, aún mirando la pintura—. Cuando estaba en la gran ciudad,
                    solía ir a eventos artísticos, pero jamás había visto algo con tanta personalidad. Los colores que
                    usas... por alguna razón me transmiten cierta nostalgia. ¿Puedo preguntar qué significa para ti esta
                    pintura de un conejo siendo levantado por unas manos formadas por mariposas?
                </blockquote>

                <p>
                    Primero saqué un poco de comida y agua de mi mochila. Mientras comíamos mirando el aguacero por una
                    pequeña ventana, le conté el significado de esa pintura hecha con aerosol.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Después de dos meses del apocalipsis, me costaba comer —empecé a decir, bajando la voz—. Fui al
                    acantilado que está cerca del lago y... casi cometo una estupidez. Estaba, literalmente, al borde de
                    un abismo físico, pero también de uno emocional. Era tan difícil simplemente vivir, comer, respirar.
                    Todos desaparecieron de la noche a la mañana en el apocalipsis, pero siempre me preguntaba: ¿por qué
                    yo? ¿Qué tenía de especial? ¿Por qué no me habían llevado junto a mis seres queridos? Iba a lanzarme
                    al abismo hasta que vi a un conejo gris mirándome tiernamente, como queriendo que lo abrazara, y eso
                    fue lo que hice. Pero tan pronto como lo dejé en el suelo, salió corriendo, no sin antes mirarme.
                    Después de ese día siempre aparecía cerca de mi casa; venía por comida, pero jamás volvió a dejarse
                    abrazar, solo me vigilaba o cuidaba desde la lejanía.
                </blockquote>

                <p>
                    Iván terminó su pan y luego se acercó más a la ventana. Con voz serena, dijo:
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —No eres la única que pensó en acabar con todo. Yo ya lo había intentado antes del apocalipsis.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¿Qué? ¿Por qué? —le pregunté, mirándolo fijo a los ojos castaños.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Ya me sentía solo antes de que se los llevaran a todos —explicó—. Las calles ya estaban desoladas
                    para mí, con o sin personas. Un día, después de un evento artístico, estando completamente ebrio,
                    casi me tiré de un puente. But... hubo algo que me detuvo: miré mi celular, vi la foto de mi hija.
                    No la visitaba desde hacía un año. No podía acabar con mi vida, no mientras Sofía me necesitara,
                    aunque fuera solo económicamente, ya que su madre jamás iba a permitir que pusiera un pie cerca de
                    ella.
                </blockquote>

                <p>
                    Hubo un silencio incómodo; eran temas muy sensibles, pero a la vez sentía que podía soltar el peso
                    de años de dolor y sufrimiento, hablando con alguien que había pasado por algo similar. Continué la
                    conversación porque sabía que ambos lo necesitábamos.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Iván, ¿puedo hacerte una pregunta? —dije con la voz temblorosa.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Solo una —contestó él, sacándome la lengua.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Si Sofía también desapareció, ¿por qué seguiste con tu vida? ¿Qué te motivó a continuar? —pregunté,
                    sin apartar la vista de él.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Eso me lo pregunté durante muchos años —respondió—. ¿Por qué seguía viajando en mi moto buscando a
                    alguien con vida? Si mi mente me decía que todos estaban muertos, si sabía que Sofía no volvería.
                    Quería volver a sentirme vivo. Desde hace muchos años quería hacerlo: trabajar, esforzarme demasiado
                    para ganar suficiente dinero y darle una buena vida a Sofía... no tener amigos... todo me hacía
                    sentir vacío. Pero llegó el apocalipsis y me hizo dar cuenta de algo: más allá de Sofía, no tenía
                    ningún sueño, no perseguía ninguna pasión. Solo trabajaba como si estuviera en piloto automático,
                    viendo mi vida como un espectador de una película tragicómica. Me dolió mucho aceptar que jamás
                    volvería a ver a Sofía, pero pensé: "Si no hay personas en este mundo, ¿Por qué no explorarlo todo
                    junto a mi vieja moto?". Y eso fue lo que hice. No esperaba encontrar a alguien en el camino. Mi
                    vida empezó a cobrar un nuevo sentido. Hay paisajes tan hermosos como tu dibujo, Dalia... paisajes,
                    momentos, música, que vale la pena vivir.
                </blockquote>

                <p>
                    Me ruboricé de inmediato porque había mencionado mi dibujo. Él lo notó y se rió.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Ahora estás más roja que tu cabello, ¿eh? —dijo burlón—. No sueles recibir cumplidos muy a menudo
                    supongo. Pensé que esos conejos de arcilla te decían cosas bonitas y eran tus fieles admiradores.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¡Tonto! —repliqué—. Esos conejos de arcilla... sí me decían cosas bonitas en vida.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¿A qué te refieres? —preguntó con curiosidad.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Esos conejos, cada uno de ellos representa a alguien que desapareció... a los seres que más quería
                    —expliqué.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¿Puedes hacer un conejo de arcilla de Sofía? —pidió—. Te pagaré de alguna manera si lo haces.
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —No es necesario que me pagues, Iván —respondí—. Haré ese conejo solo si me prometes algo. Sé que
                    eres un aventurero y nada te ata aquí, a Prosperidad. Sé que en algún momento te irás con tu moto.
                    Pero... ¿podría quedarte una semana? Es lo que me toma hacer un conejo de arcilla, más o menos.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¿Así que la chica pecosa quiere que me quede aquí, eh? —sonrió—. Bien... no tenía pensado irme, ni
                    se me había pasado por la cabeza. Todos estos días he sentido mucho más que en todos los años antes
                    del apocalipsis. Me pregunto si será por este sitio, que transmite tanta calidez, o si es por
                    alguien que vive aquí... o quizás sea por los conejos de arcilla. O tal vez... sean las pequeñas
                    manos que hicieron esos conejos.
                </blockquote>

                <p>
                    No sabía dónde enterrar mi cabeza de lo avergonzada que estaba. Lo único que se me ocurrió en ese
                    momento fue abrazarlo; tenía el impulso de hacerlo, pero fui cobarde.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Gracias —dije con la voz quebrada.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Gracias a ti —respondió, levantando la mano como si me saludara. Le tomé la mano para seguirle la
                    corriente—. Gracias, Dalia Bianchi, por hacerme sentir más vivo hoy —dijo—. ¡Oye, mira! ¿Ese no es
                    tu conejo?
                </blockquote>

                <p>
                    El conejo gris estaba ahí afuera, empapándose. Lo dejé entrar. Todo parecía un sueño: después de
                    tantos años, ya no escapaba de mí. Se acercó y se recostó en mi regazo. ¿Por qué justo ahora? Quizá
                    quería acompañarme en el mejor momento de mi vida, después de haber estado conmigo en los peores
                    días.
                </p>

                <p>
                    La lluvia cesó, y tan pronto como abrí la puerta, el conejo salió corriendo por las calles
                    empedradas, no sin antes mirarme fijamente antes de esconderse entre los arbustos. En un solo día
                    había cumplido los deseos que había pedido en todos mis cumpleaños pasados: volver a abrazar a ese
                    conejo y encontrar a alguien con vida. Sabía que lo primero era posible, pero lo segundo... jamás
                    pensé que un desconocido llegaría a mi puerta y decidiría quedarse.
                </p>

                <p>
                    Todo este tiempo había vivido para cumplir esos deseos, y ahora que se habían cumplido... ¿qué se
                    suponía que debía hacer después? Quizá era algo que debía reflexionar en mi casa, mirando el techo
                    como solía hacerlo... pero esta vez, en compañía de alguien más.
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
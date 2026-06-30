<script setup lang="ts">
import c5aJpg from "@public/images/c5a.png";
</script>

<template>
    <div
        class="win98-window max-w-5xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-neutral-400 bg-[#f0eedf]">
        <!-- Barra de título clásica Windows 98 con temática gótica -->
        <div class="win98-titlebar win98-titlebar-lore flex items-center justify-between px-3 py-2.5 select-none">
            <span
                class="text-sm font-mono tracking-wider text-red-100 drop-shadow-[0_0_4px_rgba(220,38,38,0.6)] flex items-center gap-2">
                <span class="text-red-500">⸸</span> chapter_5.txt
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
                Tonto Iván
            </h2>

            <!-- Ilustración del Capítulo 5 -->
            <img :src="c5aJpg" class="mt-8 border-4 border-neutral-900 w-1/2 mx-auto block shadow-md"
                alt="chapter 5 illustration - La verdad desvelada" />

            <!-- Cuerpo del Texto Narrativo (Perspectiva de Dalia Bianchi) -->
            <div
                class="mt-12 text-xl font-sans md:text-2xl leading-relaxed space-y-8 tracking-wide max-w-4xl mx-auto text-neutral-950">
                <p>
                    Pasaron un par de semanas, y el fin del mundo se quedó afuera de la casa. La rutina con Iván se
                    volvió un refugio cálido. Había días de sol en los que destrozábamos la tierra del huerto hasta que
                    los brazos nos ardían; otros, cuando las tormentas nos obligaban a encerrarnos, dejábamos que los
                    discos de vinilo retumbaran en la sala, cubriendo el silencio con música y olor a lluvia. El
                    silencio de la casa empezó a curarme. El nudo perpetuo en mi estómago cedió, y esa pesadilla
                    constante de las escaleras infinitas —con su frío concreto y el eco de mis pasos solitarios— empezó
                    por fin a desdibujarse al cerrar los ojos.
                </p>

                <p>
                    El sofá amanecía seco la mayoría de las veces. Pero en esas noches oscuras donde el sueño me
                    obligaba a subir de nuevo al vacío y el terror me hacía perder el control, Iván siempre aparecía. No
                    había preguntas incómodas ni miradas de lástima. Solo el roce de una tela limpia sobre mis hombros
                    temblorosos y su compañía silenciosa, vigilando la noche hasta que los monstruos decidieran
                    marcharse. Pero esa misma calma me aterraba. Sabía que mientras menos lo necesitara para sobrevivir,
                    más cerca estaba el día en que él encendiera su moto. Para mantener a raya el pánico de que me
                    abandonara, convertí la promesa del conejo de arcilla en mi barricada. Tenía que ser tan
                    malditamente perfecto que a él le fuera imposible irse.
                </p>

                <p>
                    Empapelé la casa con bocetos; papeles manchados esparcidos por la mesa, el piso y las paredes. Nada
                    servía. A veces, aplastaba la figura a propósito cuando casi estaba lista. Esa búsqueda enfermiza me
                    asfixiaba, devolviéndome a mi infancia, sintiendo el fantasma de la mirada crítica y sobreprotectora
                    de mi madre clavada en mi nuca, susurrándome que nada de lo que hiciera sería suficiente para
                    retener a alguien.
                </p>

                <p>
                    Una mañana, mi ilusión de control se hizo pedazos por accidente. Iván estaba afuera, desmontando el
                    motor de su moto roja. Dijo que quería darle mantenimiento "por si acaso", preparándola para ese
                    viaje que me aterraba. Yo me había quedado adentro, alisando con frustración la oreja de mi enésima
                    versión del conejo.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¡Pecas! —gritó desde el porche—. ¿Me pasas la llave inglesa que está en el fondo de mi mochila?
                </blockquote>

                <p>
                    Fui hacia la mesa con las manos aún manchadas de barro. Al abrir el cierre y rebuscar a ciegas, mis
                    dedos se enredaron con el borde rígido de un folder viejo. Al sacarlo para hacer espacio, unos
                    papeles resbalaron y cayeron boca arriba sobre la madera. Fui a recogerlos quejándome de mi torpeza,
                    pero mis ojos se clavaron en el membrete del hospital.
                </p>

                <p>
                    El aire de la habitación se volvió de plomo. Oncología. Cáncer terminal. Las fechas eran de antes de
                    que el mundo se acabara. Las líneas describían mareos repentinos, fatiga severa, desmayos... De
                    pronto, sus "bajones de presión", sus pastillas y su cansancio cobraron un sentido macabro. Todo
                    encajaba.
                </p>

                <p>
                    El papel tembló en mis manos manchadas. Apreté la mandíbula con tanta fuerza que sentí el crujido en
                    mis propios dientes. Todo mi plan, toda mi estupidez de retenerlo con una figura de barro, se
                    desmoronó. Él no me iba a abandonar porque se aburriera de mí; se estaba muriendo. Todo empezó a dar
                    vueltas, perdiendo forma como la estática de un televisor roto. Metí los papeles de vuelta
                    torpemente. Me faltaba el oxígeno. Salí por la puerta trasera sin hacer ruido, casi corriendo,
                    huyendo hacia el único lugar lo suficientemente vacío para contener mi pánico: la iglesia.
                </p>

                <p>
                    El suelo frío de piedra me recibió como siempre. Me dejé caer de rodillas, temblando, mirando ese
                    techo resquebrajado que conocía desde niña. Intenté respirar, contar hasta diez, aplicar cada
                    estúpida técnica que me había enseñado a mí misma para evitar el colapso... pero el oxígeno no
                    entraba. El dolor emocional fue tan físico, una punzada tan violenten en el estómago, que terminé
                    vomitando bilis y terror en una esquina oscura de la iglesia. Tosía, con la garganta ardiendo y las
                    lágrimas empañándome la vista, cuando escuché las bisagras de la vieja puerta de madera. No era el
                    viento. Era él.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¿Dal? —Su voz resonó en la nave vacía, alarmada—. Te escuché desde afuera, ¿estás bien?
                </blockquote>

                <p>
                    Sus botas resonaron rápido contra la piedra hasta que se detuvo en seco a un par de metros. Su
                    mirada no estaba en mi rostro empapado en sudor, sino en mi mano manchada de arcilla, que estrujaba
                    el folder médico arrugado. El silencio que siguió fue asfixiante. Vi cómo su postura se desmoronaba;
                    los hombros le cayeron y su respiración se atascó.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Dime que es viejo —mi voz salió como un hilo roto, rogando—. Dime que es de antes del fin del mundo
                    y que ya te curaste. O que es de otra persona. Dime que es mentira, Iván.
                </blockquote>

                <p>
                    Él tragó saliva. Sus ojos oscuros se llenaron de una culpa insoportable.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Lo siento, pecas —susurró, incapaz de sostener mi mirada—. No... no sabía cómo decírtelo.
                </blockquote>

                <p>
                    La pfirmación me golpeó como un bloque de cemento. La negación se esfumó, dejando paso a una rabia
                    caliente y ciega.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¡Mentiroso! —El grito me desgarró la garganta. Me puse de pie tambaleándome, retrocediendo para que
                    no se me acercara—. ¡Me mentiste todos los malditos días! ¡Cada vez que te desmayabas, cada vez que
                    decías que era solo cansancio! ¡Me hiciste creer que estábamos sanando!
                </blockquote>

                <p>
                    Él dio un paso hacia mí con las manos en alto, como si intentara calmar a un animal acorralado.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —¡No quería romperte! —alzó la voz, desesperado, rompiendo su fachada de tipo duro—. Fui un cobarde.
                    Tenía tanto miedo de que, al saber que me estaba muriendo, me miraras con lástima o... o que
                    simplemente te alejaras. Y yo ya no quería estar solo.
                </blockquote>

                <p>
                    Me lancé sobre él, pero no para un abrazo. Le di un empujón torpe en el pecho, luego otro,
                    golpeándolo con los puños cerrados mientras lloraba a gritos de pura impotencia.
                </p>

                <!-- Diálogo de Dalia (Rojo - Hablado entre sollozos) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —¡Yo no te iba a dejar! —sollocé, golpeándolo sin fuerza real hasta que mis rodillas cedieron.
                </blockquote>

                <p>
                    Él me atrapó antes de que cayera al suelo y me envolvió en sus brazos. Luché por soltarme un par de
                    segundos, pero estaba exhausta. Mi cuerpo entero temblaba contra su pecho, empapando su casaca de
                    lágrimas. Él escondió su rostro en mi cuello, respirando entrecortadamente.
                </p>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Te juro que iba a decírtelo —murmuró contra mi piel—. Pero cada día que pasaba, sentía algo más
                    intenso por ti. Y mientras más me importabas, más pánico me daba destruirte.
                </blockquote>

                <p>
                    Sus palabras me atravesaron. En medio del momento más aterrador y traicionero de mi vida, me
                    confesaba lo que ambos sabíamos y no nos atrevíamos a nombrar. Lo amaba, sí, pero en ese segundo
                    también lo odiaba por ser tan egoísta, por obligarme a querer a un fantasma. Me separé de él
                    lentamente. Mis manos se apoyaron en su pecho, empujándolo lo justo para crear una distancia fría
                    entre los dos. Lo miré a los ojos; él también estaba llorando.
                </p>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —No puedo hacer esto ahora, Iván —dije, con la voz ronca pero firme—. No puedo mirarte a la cara y
                    pretender que entiendo por qué me hiciste esto.
                </blockquote>

                <!-- Diálogo de Iván (Azul) -->
                <blockquote
                    class="border-l-4 border-blue-800 bg-blue-900/5 pl-6 py-2 italic text-blue-900 font-mono my-6 tracking-normal">
                    —Dal...
                </blockquote>

                <!-- Diálogo de Dalia (Rojo) -->
                <blockquote
                    class="border-l-4 border-red-700 bg-red-900/5 pl-6 py-2 italic text-red-900 font-mono my-6 tracking-normal">
                    —Vete —lo interrumpí, dando un paso atrás hacia el altar—. Necesito que regreses a la casa. Déjame
                    sola esta noche, dormiré aquí. No te acerques. Por favor.
                </blockquote>

                <p>
                    Iván cerró la boca, tragándose sus excusas. Asintió despacio, con una expresión de derrota absoluta.
                    Se dio la media vuelta y caminó hacia la salida, dejándome sola con el eco de sus pasos, el frío de
                    la iglesia y la certeza de que el tiempo se nos estaba acabando. Me puse mis viejos audífonos. El
                    bajo pesado y la guitarra melancólica inundaron mis oídos, levantando un muro contra el ruido de la
                    tormenta que empezaba a azotar Prosperidad. Me dejé caer de espaldas sobre la piedra helada y clavé
                    la mirada en el techo, directo en el rostro descolorido de ese Dios pintado en el yeso descascarado.
                    Lo odié. Lo odié con cada célula de mi cuerpo.
                </p>

                <p>
                    Si de verdad había alguien allá arriba moviendo los hilos, era un sádico. Me había dejado viva en
                    medio de un mundo muerto. Me había obligado a enterrar a los míos, a tragar polvo y a enloquecer de
                    soledad en este pueblo fantasma, todo para preparar su gran obra maestra de la crueldad. Me manda a
                    un hombre que logra espantar mis pesadillas, a alguien que encaja en mis espacios rotos con una
                    perfección que asusta... solo para revelarme que tiene fecha de caducidad. Sobrevivir al apocalipsis
                    para que tu media naranja se muera de cáncer. Qué asquerosa injusticia.
                </p>

                <!-- Bloque Estilizado de Sueño Low-Poly / Secuencia Retro CGI -->
                <div
                    class="my-10 p-6 border-2 border-dashed border-red-500/30 bg-neutral-950 text-neutral-200 rounded font-mono text-lg shadow-inner">
                    <div class="text-xs text-red-500 tracking-widest uppercase mb-4 animate-pulse">▼ [
                        SIMULATION_LOAD_DREAM_STATE ]</div>
                    <div class="space-y-6">
                        <p>
                            En unos minutos, el agotamiento emocional me apagó como a un televisor viejo. Abrí mis ojos
                            plomos claros y la iglesia ya no estaba. No había techo, solo un cielo azul estático, sin
                            nubes ni sol, como un fondo de pantalla que no terminaba de cargar. Estaba de pie sobre un
                            pasto de texturas repetitivas, demasiado verde, demasiado plano. A mis pies cruzaba un
                            riachuelo, pero el agua no fluía con naturalidad; eran bloques translúcidos que atravesaban
                            mis tobillos descalzos sin mojarme, como si mi cuerpo fuera un error de código en el
                            paisaje. La guitarra triste de mis audífonos seguía sonando, pero ahora venía de todas
                            partes, con un eco metálico y comprimido, como la banda sonora de un videojuego en pausa.
                        </p>
                        <p>
                            El riachuelo dividía el mundo con una línea recta e innatural. De mi lado, árboles que
                            parecían figuras de papel maché de baja resolución vibraban en colores primaverales. Del
                            otro lado, la geometría estaba muerta: ramas grises, afiladas como polígonos, flotando sobre
                            un suelo de baldosas de ajedrez negras y blancas. Ahí, sentada sobre el capó aplastado de un
                            auto sedán viejo que parecía incrustado a la mitad en el suelo de ajedrez, estaba una
                            silueta familiar.
                        </p>

                        <blockquote class="border-l-2 border-neutral-400 pl-4 py-1 italic text-neutral-300">
                            —Pecas —resonó su voz. No movió los labios, pero la escuché dentro de mi cabeza.
                        </blockquote>

                        <p>
                            Corrí hacia ella, cruzando el agua cuadriculada. Mientras más me acercaba, el olor a
                            plástico caliente y gasolina derramada se mezclaba con algo imposible en ese lugar
                            artificial: su clásico perfume de flores. Era la Nona. Me arrojé a sus brazos. El impacto
                            fue tan hiperreal, tan sólido y cálido en medio de ese mundo de bordes falsos, que rompí a
                            llorar con desesperación. Sus manos arrugadas me tomaron del rostro.
                        </p>

                        <blockquote class="border-l-2 border-neutral-400 pl-4 py-1 italic text-neutral-300">
                            —Con esa cara arruinas tu belleza, te van a salir arrugas antes de tiempo —dijo, y esta vez
                            sí vi sus labios moverse. Su sonrisa era un ancla de humanidad en medio del vacío—. Sé que
                            duele, pequeña. Creíste que podías arreglarlo todo, igual que conmigo.
                        </blockquote>

                        <p>
                            Acarició mis mejillas, secando mis lágrimas. Luego, me giró suavemente por los hombros para
                            que mirara el sedán destrozado sobre el que estaba sentada. El parabrisas estaba hecho
                            añicos, pero los pedazos de vidrio flotaban suspendidos en el aire, congelados en el tiempo.
                        </p>

                        <blockquote class="border-l-2 border-neutral-400 pl-4 py-1 italic text-neutral-300">
                            —Llora todo lo que necesites, Dalia Bianchi. Pero mírame —señaló el metal retorcido del
                            auto—. Tu perfeccionismo intenta moldear el mundo como si fuera arcilla, pero la vida es
                            imperfecta, azarosa. Tú querías que yo me sanara. Me insistías todos los días para que
                            retomara la quimioterapia. Y cuando por fin te hice caso... El cáncer no me mató, Dalia. Fue
                            el asfalto. Un camión en la carretera, un evento que ningún médico podía prever. El motero
                            se va a ir algún día, Pecas. Pero no será necesariamente por lo que tus miedos dictan. No
                            pierdas el tiempo intentando detener el reloj o esculpir un destino perfecto. Solo asegúrate
                            de ser su mejor recuerdo. Así como lo fuiste para mí.
                        </blockquote>
                    </div>
                    <div class="text-xs text-red-500 tracking-widest uppercase mt-4 text-right animate-pulse">▲ [
                        EXECUTION_INTERRUPTED_BY_THUNDER ]</div>
                </div>

                <p>
                    El cielo azul parpadeó en negro como un monitor fallando. Un trueno ensordecedor rompió la
                    simulación y me arrancó del sueño de golpe. Pasé tres días refugiada en la iglesia, paralizada por
                    el miedo. Afuera, la lluvia no daba tregua. Pero Iván no me dejó sola. Cada tarde entraba empapado,
                    dejaba en silencio un tazón de café, algo de comida y flores silvestres marchitas, y se marchaba. Su
                    devoción muda, cargada de culpa, me destrozaba.
                </p>

                <p>
                    Al cuarto día, mirando esas flores mojadas en el suelo, las palabras de la Nona resonaron más fuerte
                    que la tormenta: "No puedes controlar los azares de la vida". La parálisis se rompió.
                </p>

                <p>
                    Me puse de pie. Salí corriendo bajo el aguacero, tropezando con las piedras del camino hasta entrar
                    a la casa. Iván dormía en el sofá, completamente rendido. Fui directo a la mesa. Sin dudar, mis
                    manos volaron sobre la arcilla. Terminé el conejo en minutos. Era imperfecto: una oreja un poco
                    caída, el lomo asimétrico, la textura rugosa. Sonreí. Así debía ser. Lo dejé secando justo al lado
                    de la cabeza de Iván, para que fuera lo primero que viera al despertar.
                </p>

                <p>
                    Me senté en el suelo a mirarlo respirar. Me quemaba por dentro saber que tenía cáncer, pero ya no
                    iba a huir. Tenía una misión: ser su mejor recuerdo. Cerré mis ojos plomos claros, apretando los
                    audífonos contra mis oídos, deseando con todas mis fuerzas que la Nona volviera a aparecer en mis
                    sueños para darme un consejo más.
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
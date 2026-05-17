export function FloatingLoreButton(): string {

    return `
        <div
            x-data="{ open: false }"

            class="
                fixed

                bottom-6
                right-6

                z-[9999]
            "
        >

            <!-- Hover Text -->
            <div
                class="
                    absolute

                    bottom-24
                    right-0

                    whitespace-nowrap

                    bg-black
                    text-red-500

                    border-2
                    border-red-700

                    px-4
                    py-2

                    text-xl

                    opacity-0
                    pointer-events-none

                    transition-all
                    duration-300

                    group-hover:opacity-100
                "
            >
                ¿Quieres saber qué demonios es esto?
            </div>

            <!-- Floating Button -->
            <div
                class="group relative"
            >

                <button
                    @click="open = !open"

                    class="
                        bg-black

                        border-2
                        border-red-700

                        p-2

                        hover:bg-red-950

                        transition-all
                        duration-300
                    "
                >

                    <img
                        src="./gifs/romero.gif"

                        class="
                            w-20
                            h-20

                            object-contain
                        "
                    />

                </button>

            </div>

            <!-- Popup -->
            <div
                x-show="open"

                x-transition

                class="
                    absolute

                    bottom-28
                    right-0

                    w-[420px]

                    win98-window
                "
            >

                <!-- Window Header -->
                <div class="win98-titlebar">

                    <span>
                        README.txt
                    </span>

                   <div class="win98-title-buttons">

                <button
                    @click="open = false"

                    class="
                        w-6
                        h-6

                        rounded-full

                        bg-red-600

                        border
                        border-white

                        flex
                        items-center
                        justify-center

                        text-white
                        text-sm
                        font-bold

                        hover:bg-red-500

                        transition-all
                        duration-200
                    "
                >
                    ✕
                </button>
            </div>

                </div>

                <!-- Window Content -->
                <div
                    class="
                        win98-panel

                        p-5

                        text-black
                        text-xl
                        leading-relaxed
                    "
                >

                    <p>
                        Hola.
                    </p>

                    <p class="mt-4">
                        Este sitio es un experimento visual inspirado
                        en Webcore, Dreamcore y la vieja internet de
                        finales de los 90s y principios de los 2000.
                    </p>

                    <p class="mt-4">
                        “Abrázame después del apocalipsis”
                        es una novela sobre soledad, ansiedad,
                        amor y supervivencia emocional
                        después del fin del mundo.
                    </p>

                    <p class="mt-4 text-red-700">
                        Bienvenido a Prosperidad.
                    </p>

                </div>

            </div>

        </div>
    `
}
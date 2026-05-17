export function Home(): string {

    return `
        <div class="win98-window max-w-5xl mx-auto">

            <div class="win98-titlebar win98-titlebar-rgb">

                <span>
                    intro.txt
                </span>

            </div>

            <div class="win98-panel p-8 text-black">

                <h2 class="text-5xl">
                    Soledad, luto, pensamientos y náuseas.
                </h2>

                <p class="text-3xl mt-6 leading-relaxed">
                    Sin nadie a quien abrazar.
                    Sin nadie a quien amar.
                    ¿Algún día cambiará?
                </p>

                <img
                    src="./textures/liminal.jpg"
                    class="mt-8 border-4 border-black w-full"
                />

                <div
                    class="
                        mt-10

                        flex
                        justify-center
                    "
                >

                    <a
                        href="#/c1"

                        class="
                            inline-flex
                            items-center
                            gap-4

                            px-6
                            py-4

                            border-2
                            border-red-700

                            bg-black
                            text-red-500

                            text-2xl

                            hover:bg-red-950
                            hover:text-red-300

                            transition-all
                            duration-300
                        "
                    >

                        <span class="text-4xl">
                            ✞
                        </span>

                        <span>
                            LEER CAPÍTULO UNO
                        </span>

                        <span class="text-4xl">
                            ✞
                        </span>

                    </a>

                </div>

            </div>

        </div>
    `
}
const gifUrl = `${import.meta.env.BASE_URL}gifs/tubos.gif`

export function Footer(): string {

    return `
        <footer
            class="
                win98-window
                overflow-hidden
            "
        >

            <!-- Titlebar -->
            <div class="win98-titlebar">

                <span>
                    footer_information.sys
                </span>

                <div class="win98-title-buttons">

                    <div class="win98-button"></div>

                    <div class="win98-button"></div>

                    <div class="win98-button"></div>

                </div>

            </div>

            <!-- Footer Content -->
            <div
                class="
                    relative
                    overflow-hidden

                    bg-black

                    px-6
                    py-10
                "
            >

                <!-- Animated GIF Background -->
                <div
                    class="
                        absolute
                        inset-0

                        pointer-events-none
                    "
                    style="
                        background-image: url('${gifUrl}');

                        background-size: auto 100%;

                        background-position: center;

                        background-repeat: repeat-x;
                    "
                ></div>

                <!-- Overlay -->
                <div
                    class="
                        absolute
                        inset-0

                        bg-black/40
                    "
                ></div>

                <!-- Centered Content -->
                <div
                    class="
                        relative
                        z-10

                        min-h-[220px]

                        flex
                        items-center
                        justify-center
                    "
                >

                    <!-- Inner Box -->
                    <div
                        class="
                            bg-black/70

                            border
                            border-red-700

                            px-8
                            py-6

                            flex
                            flex-col
                            items-center
                            justify-center

                            text-center

                            shadow-[0_0_25px_rgba(255,0,0,0.35)]
                        "
                    >

                        <!-- Top Symbol -->
                        <div
                            class="
                                text-4xl
                                text-red-500
                            "
                        >
                            ✞ 666 ✞
                        </div>

                        <!-- Main Text -->
                        <div
                            class="
                                text-2xl
                                text-white

                                mt-4
                            "
                        >
                            © 2026
                            <br />
                            Abrázame después del apocalipsis
                        </div>

                        <!-- Author -->
                        <div
                            class="
                                text-xl
                                text-red-400

                                mt-4
                            "
                        >
                            escrito por DoomerDoge
                        </div>

                        <!-- Bottom Symbols -->
                        <div
                            class="
                                mt-6

                                flex
                                items-center
                                gap-6

                                text-red-500
                                text-3xl
                            "
                        >
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    `
}
export function Navigation(): string {

    const hash =
        window.location.hash || '#/'

    const currentChapter =
        Number(
            hash.replace('#/c', '')
        )

    const isHome =
        hash === '#/'

    let previousLink = '#/'
    let previousLabel = 'HOME'

    let nextLink = '#/c1'
    let nextLabel = 'CAPÍTULO 1'

    if (!isHome && !Number.isNaN(currentChapter)) {

        previousLink =
            currentChapter <= 1
                ? '#/'
                : `#/c${currentChapter - 1}`

        previousLabel =
            currentChapter <= 1
                ? 'HOME'
                : `CAPÍTULO ${currentChapter - 1}`

        nextLink =
            `#/c${currentChapter + 1}`

        nextLabel =
            `CAPÍTULO ${currentChapter + 1}`
    }

    return `
        <div
            class="
                mt-10

                flex
                items-center
                justify-between

                gap-6
                flex-wrap
            "
        >

            <!-- Previous -->
            <a
                href="${previousLink}"

                class="
                    inline-flex
                    items-center
                    gap-3

                    px-5
                    py-3

                    border-2
                    border-blue-700

                    bg-black
                    text-blue-400

                    text-xl

                    hover:bg-blue-950
                    hover:text-blue-200

                    transition-all
                    duration-300
                "
            >

                <span class="material-icons text-3xl">
                    arrow_back
                </span>

                <span>
                    ${previousLabel}
                </span>

            </a>

            <!-- Next -->
            <a
                href="${nextLink}"

                class="
                    inline-flex
                    items-center
                    gap-3

                    px-5
                    py-3

                    border-2
                    border-red-700

                    bg-black
                    text-red-500

                    text-xl

                    hover:bg-red-950
                    hover:text-red-300

                    transition-all
                    duration-300
                "
            >

                <span>
                    ${nextLabel}
                </span>

                <span class="material-icons text-3xl">
                    arrow_forward
                </span>

            </a>

        </div>
    `
}
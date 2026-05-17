import rainTemplate from './templates/Rain.html?raw'

type RainConfig = {
    count?: number
    symbols?: string[]
    minSize?: number
    maxSize?: number
    minDuration?: number
    maxDuration?: number
    minOpacity?: number
    maxOpacity?: number
}

export function Rain(config?: RainConfig): string {

    const {
        count = 120,

        symbols = [
            '✝',
            '☩',
            '✞',
            '†',
            '☨'
        ],

        minSize = 12,
        maxSize = 34,

        minDuration = 6,
        maxDuration = 18,

        minOpacity = 0.25,
        maxOpacity = 0.95

    } = config || {}

    const drops = Array
        .from({ length: count })
        .map(() => {

            const symbol =
                symbols[
                    Math.floor(
                        Math.random() * symbols.length
                    )
                ]

            const left =
                Math.random() * 100

            const duration =
                minDuration +
                Math.random() *
                (maxDuration - minDuration)

            const delay =
                Math.random() * 8

            const size =
                minSize +
                Math.random() *
                (maxSize - minSize)

            const opacity =
                minOpacity +
                Math.random() *
                (maxOpacity - minOpacity)

            return `
                <span
                    style="
                        left: ${left}%;

                        animation-duration: ${duration}s;

                        animation-delay: ${delay}s;

                        font-size: ${size}px;

                        opacity: ${opacity};
                    "
                >
                    ${symbol}
                </span>
            `
        })
        .join('')

    return rainTemplate.replace(
        '<!-- RAIN_DROPS -->',
        drops
    )
}
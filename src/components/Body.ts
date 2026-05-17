import bodyTemplate from './templates/Body.html?raw'

import { Rain } from './Rain'

import { Router } from '../router'

import { Navigation } from './Navigation'

export function Body(): string {

    let template = bodyTemplate

    template = template.replace(
        '<!-- RAIN_COMPONENT -->',

        Rain({
            count: 180,

            symbols: [
                '✝',
                '☩',
                '✞',
                '†',
                '☨'
            ]
        })
    )

    template = template.replace(
        '<!-- DYNAMIC_CONTENT -->',
        Router()
    )

    template = template.replace(
        '<!-- NAVIGATION_COMPONENT -->',
        Navigation()
    )

    return template
}
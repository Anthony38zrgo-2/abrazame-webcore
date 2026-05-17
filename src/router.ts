import { Home } from './pages/Home'

import { Chapter1 } from './pages/Chapter1'

export function Router(): string {

    const path =
        window.location.hash || '#/'

    switch (path) {

        case '#/c1':
            return Chapter1()

        case '#/':
        default:
            return Home()
    }
}
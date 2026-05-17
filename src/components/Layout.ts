import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'
import { FloatingLoreButton } from './FloatingLoreButton'

export function Layout(): string {
    return `
        <div class="layout-wrapper">

            ${Header()}

            ${Body()}

            ${Footer()}

            ${FloatingLoreButton()}

        </div>
    `
}
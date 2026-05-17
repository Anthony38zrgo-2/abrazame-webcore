import './styles/globals.css'
import './styles/windows98.css'
import './styles/layout.css'
import './styles/rain.css'
import './styles/titlebars.css'

import 'material-icons/iconfont/material-icons.css'

import Alpine from 'alpinejs'

import { Layout } from './components/Layout'

window.Alpine = Alpine

Alpine.start()

const app =
    document.querySelector<HTMLDivElement>('#app')

function renderApp(): void {

    if (!app) return

    app.innerHTML = Layout()
}

renderApp()

window.addEventListener(
    'hashchange',
    renderApp
)
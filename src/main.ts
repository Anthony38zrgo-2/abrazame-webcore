import './styles/aero/index.css'
import './styles/aero/layout.css'
// legacy kept as fallback 1 sprint — remove after aero stable
import './styles/globals.css'
import './styles/windows98.css'
import './styles/layout.css'
import './styles/rain.css'
import './styles/titlebars.css'

import 'material-icons/iconfont/material-icons.css'

import { createApp } from 'vue'
import App from '@/App.vue'

createApp(App).mount('#app')
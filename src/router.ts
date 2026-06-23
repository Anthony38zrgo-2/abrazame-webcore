import { ref, computed } from 'vue'
import Home from '@/pages/Home.vue'
import Chapter1 from '@/pages/Chapter1.vue'
import Chapter2 from '@/pages/Chapter2.vue'
import Chapter3 from '@/pages/Chapter3.vue'
import Chapter4 from '@/pages/Chapter4.vue'
import Chapter5 from '@/pages/Chapter5.vue'
import Chapter6 from '@/pages/Chapter6.vue'

// Extraemos limpiamente solo la parte del hash ignorando la ruta base anterior
// Si window.location.hash es "#/c2", nos aseguramos de estandarizarlo
const getCleanHash = () => {
    const hash = window.location.hash
    // Buscamos el patrón #/ seguido de cualquier cosa para aislarlo de la subruta
    const match = hash.match(/#\/[a-zA-Z0-9\-_/]*/)
    return match ? match[0] : '#/'
}

export const currentHash = ref(getCleanHash())

window.addEventListener('hashchange', () => {
    currentHash.value = getCleanHash()
})

// Componente computado a renderizar
export const currentComponent = computed(() => {
    switch (currentHash.value) {
        case '#/c1':
            return Chapter1
        case '#/c2':
            return Chapter2
        case '#/c3':
            return Chapter3
        case '#/c4':
            return Chapter4
        case '#/c5':
            return Chapter5
        case '#/c6':
            return Chapter6
        case '#/':
        default:
            return Home
    }
})

// Lógica de navegación ultra-segura basada en patrones
export const currentChapterNumber = computed(() => {
    const hash = currentHash.value
    
    // Si contiene 'c' seguido de un número (ej: #/c2), extraemos solo los dígitos
    const match = hash.match(/#\/c(\d+)/)
    if (match && match[1]) {
        return parseInt(match[1], 10)
    }
    
    return null
})
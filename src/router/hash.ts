import { ref, computed } from 'vue'

// Extraemos limpiamente solo la parte del hash ignorando la ruta base anterior
// Si window.location.hash es "#/c2", nos aseguramos de estandarizarlo
const getCleanHash = () => {
    const hash = window.location.hash
    const match = hash.match(/#\/[a-zA-Z0-9\-_/]*/)
    return match ? match[0] : '#/'
}

export const currentHash = ref(getCleanHash())

window.addEventListener('hashchange', () => {
    currentHash.value = getCleanHash()
})

// Lógica de navegación ultra-segura basada en patrones
export const currentChapterNumber = computed(() => {
    const hash = currentHash.value
    const match = hash.match(/#\/c(\d+)/)
    if (match && match[1]) {
        return parseInt(match[1], 10)
    }
    return null
})

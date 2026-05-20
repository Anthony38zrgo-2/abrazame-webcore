import { ref, computed } from 'vue'
import Home from '@/pages/Home.vue'
import Chapter1 from '@/pages/Chapter1.vue'

// Reactive state for the current route hash
export const currentHash = ref(window.location.hash || '#/')

// Sync with window location hash
window.addEventListener('hashchange', () => {
    currentHash.value = window.location.hash || '#/'
})

// Computed component to render
export const currentComponent = computed(() => {
    switch (currentHash.value) {
        case '#/c1':
            return Chapter1
        case '#/':
        default:
            return Home
    }
})

// Computed chapter number for navigation logic
export const currentChapterNumber = computed(() => {
    const hash = currentHash.value
    if (hash === '#/' || hash === '') {
        return null
    }
    const num = Number(hash.replace('#/c', ''))
    return Number.isNaN(num) ? null : num
})
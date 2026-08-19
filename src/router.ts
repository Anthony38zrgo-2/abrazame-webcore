import { computed } from 'vue'
import Home from '@/pages/Home.vue'
import Chapter1 from '@/pages/Chapter1.vue'
import Chapter2 from '@/pages/Chapter2.vue'
import Chapter3 from '@/pages/Chapter3.vue'
import Chapter4 from '@/pages/Chapter4.vue'
import Chapter5 from '@/pages/Chapter5.vue'
import Chapter6 from '@/pages/Chapter6.vue'
import { currentHash } from '@/router/hash'

// Re-export para compatibilidad con imports legados
export { currentHash, currentChapterNumber } from '@/router/hash'

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
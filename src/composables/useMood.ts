import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { currentHash } from '@/router'
import { getMood } from '@/moods/registry'
import { getChapterMood } from '@/moods/chapters'
import type { MoodId } from '@/types/mood'

const currentMood = ref<MoodId>('system')
const currentSection = ref<string | null>(null)
let observer: IntersectionObserver | null = null
const sectionMap = new Map<string, MoodId>()

function applyMood(mood: MoodId) {
  const def = getMood(mood)
  if (!def) return
  currentMood.value = mood
  const root = document.documentElement
  root.dataset.mood = mood ?? ''
  // CSS vars atomicas para transición
  root.style.setProperty('--aero-accent', def.accent)
  root.style.setProperty('--aero-accent-strong', def.accentStrong)
  root.style.setProperty('--aero-title-from', def.titleFrom)
  root.style.setProperty('--aero-title-to', def.titleTo)
  root.style.setProperty('--aero-glass-bg', def.glassBg)
  root.style.setProperty('--aero-panel-bg', def.panelBg)
  if (def.cursor) {
    root.style.setProperty('--aero-cursor', `url('/abrazame-webcore/cursors/${def.cursor}.png'), auto`)
  } else {
    root.style.removeProperty('--aero-cursor')
  }
}

function registerSection(id: string, mood: MoodId) {
  if (id && mood) sectionMap.set(id, mood)
}

function unregisterSection(id: string) {
  sectionMap.delete(id)
}

function setupObserver() {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver((entries) => {
    // elige la entrada más visible
    let best: IntersectionObserverEntry | null = null
    let maxRatio = 0
    for (const e of entries) {
      if (e.isIntersecting && e.intersectionRatio > maxRatio) {
        maxRatio = e.intersectionRatio
        best = e
      }
    }
    if (best) {
      const el = best.target as HTMLElement
      const mood = (el.dataset.mood as MoodId) || sectionMap.get(el.id) || null
      const sid = el.id || el.dataset.sectionId || null
      if (mood) {
        currentSection.value = sid
        applyMood(mood)
      }
    }
  }, { threshold: [0.15, 0.35, 0.6], rootMargin: '-5% 0px -30% 0px' })
  ;(window as any).__aeroObserver = observer

  // observar solo secciones (evita <html data-mood>)
  document.querySelectorAll<HTMLElement>('section[data-mood], [data-section-id]').forEach(el => {
    if (el.tagName.toLowerCase() !== 'html') observer!.observe(el)
  })
}

function refreshObserver() {
  // re-scan después de cambio de capítulo
  setTimeout(setupObserver, 120)
}

function setupScrollFallback() {
  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-mood]'))
      if (!sections.length) { ticking = false; return }
      const center = window.innerHeight / 2
      let best: HTMLElement | null = null
      let bestDist = Infinity
      for (const el of sections) {
        const rect = el.getBoundingClientRect()
        // solo considerar si algo visible
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue
        const mid = rect.top + rect.height / 2
        const dist = Math.abs(mid - center)
        if (dist < bestDist) { bestDist = dist; best = el }
      }
      if (best && bestDist < window.innerHeight * 0.6) {
        const mood = best.dataset.mood as MoodId
        if (mood && mood !== currentMood.value) {
          currentSection.value = best.id
          applyMood(mood)
        }
      }
      ticking = false
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  // initial check
  setTimeout(onScroll, 500)
}

// Cuando cambia el hash, restaurar base mood del capítulo
watch(currentHash, (hash) => {
  const clean = hash.match(/#\/[a-z0-9\-_/]*/)?.[0] ?? '#/'
  // normaliza #/c1 etc
  const baseKey = clean.startsWith('#/c') ? clean.replace(/\/.*/, '').slice(0,3) : clean // '#/c1'
  // busca exacto o fallback a base
  const chapter = getChapterMood(baseKey) ?? getChapterMood(clean)
  applyMood(chapter.base)
  currentSection.value = null
  sectionMap.clear()
  refreshObserver()
})

// Expuesto como composable (singleton refs)
let scrollFallbackSetup = false
export function useMood() {
  onMounted(() => {
    // aplica mood inicial según hash actual
    const hash = currentHash.value
    const chapter = getChapterMood(hash)
    applyMood(chapter.base)
    setupObserver()
    if (!scrollFallbackSetup) { setupScrollFallback(); scrollFallbackSetup = true }
  })
  onUnmounted(() => {
    // no desconectar global observer si hay múltiples instancias, solo si es el último
  })

  return {
    currentMood: computed(() => currentMood.value),
    currentSection: computed(() => currentSection.value),
    currentMoodDef: computed(() => getMood(currentMood.value)),
    applyMood,
    registerSection,
    unregisterSection,
    refreshObserver,
  }
}

// helpers estáticos para uso fuera de setup
export { applyMood, registerSection, unregisterSection, currentMood, currentSection }

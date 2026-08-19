import { ref, computed, watch, onMounted } from 'vue'
import { currentHash } from '@/router/hash'
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
  observer?.disconnect()

  observer = new IntersectionObserver((entries) => {
    let best: IntersectionObserverEntry | null = null
    let maxRatio = 0

    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio
        best = entry
      }
    }

    if (!best) return

    const element = best.target as HTMLElement
    const mood = (element.dataset.mood as MoodId) || sectionMap.get(element.id) || null
    const sectionId = element.id || element.dataset.sectionId || null

    if (mood) {
      currentSection.value = sectionId
      applyMood(mood)
    }
  }, {
    threshold: [0.15, 0.35, 0.6],
    rootMargin: '-5% 0px -30% 0px',
  })

  document.querySelectorAll<HTMLElement>('section[data-mood], [data-section-id]').forEach((element) => {
    observer?.observe(element)
  })
}

function refreshObserver() {
  window.setTimeout(setupObserver, 120)
}

let scrollFallbackSetup = false
function setupScrollFallback() {
  if (scrollFallbackSetup) return
  scrollFallbackSetup = true

  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true

    requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-mood]'))
      if (!sections.length) {
        ticking = false
        return
      }

      const center = window.innerHeight / 2
      let best: HTMLElement | null = null
      let bestDistance = Infinity

      for (const element of sections) {
        const rect = element.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue

        const midpoint = rect.top + rect.height / 2
        const distance = Math.abs(midpoint - center)
        if (distance < bestDistance) {
          bestDistance = distance
          best = element
        }
      }

      if (best && bestDistance < window.innerHeight * 0.6) {
        const mood = best.dataset.mood as MoodId
        if (mood && mood !== currentMood.value) {
          currentSection.value = best.id || best.dataset.sectionId || null
          applyMood(mood)
        }
      }

      ticking = false
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.setTimeout(onScroll, 500)
}

function applyChapterBaseMood(hash: string) {
  const chapter = getChapterMood(hash)
  applyMood(chapter.base)
  currentSection.value = null
  sectionMap.clear()
}

watch(currentHash, (hash) => {
  applyChapterBaseMood(hash)
  refreshObserver()
})

export function useMood() {
  onMounted(() => {
    applyChapterBaseMood(currentHash.value)
    setupObserver()
    setupScrollFallback()
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

export { applyMood, registerSection, unregisterSection, currentMood, currentSection }

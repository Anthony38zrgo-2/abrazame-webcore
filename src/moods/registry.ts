import type { MoodDef, MoodId } from '@/types/mood'

export const MOODS: Record<Exclude<MoodId, null>, MoodDef & { design?: 'aero'|'win98' }> = {
  nostalgia: {
    id: 'nostalgia', label: 'Nostalgia otoñal', design: 'aero',
    accent: '#d97706', accentStrong: '#7c2d12', titleFrom: '#7c2d12', titleTo: '#fdba74',
    glassBg: 'rgba(255,237,213,0.32)', panelBg: 'rgba(255,251,235,0.92)',
    rain: { count: 36, symbols: ['🍂','🍁','🍃'], color: 'rgba(180,90,20,0.62)', minSize: 16, maxSize: 26 },
    cursor: 'autumn'
  },
  melancholy: {
    id: 'melancholy', label: 'Melancolía profunda',
    accent: '#3a6ea8', accentStrong: '#0b0a33', titleFrom: '#0b0a33', titleTo: '#2a5a8f',
    glassBg: 'rgba(210,225,255,0.16)', panelBg: 'rgba(240,245,255,0.76)',
    rain: { count: 120, symbols: ['✝','☩','✞'], color: 'rgba(110,140,200,0.55)' }
  },
  lore: {
    id: 'lore', label: 'Lore weirdcore',
    accent: '#7a2fbf', accentStrong: '#2a0a4f', titleFrom: '#2a0a4f', titleTo: '#7a2fbf',
    glassBg: 'rgba(232,210,255,0.16)', panelBg: 'rgba(250,240,255,0.76)',
    rain: { count: 140, symbols: ['✝','☩','✞','†','☨'], color: 'rgba(160,90,220,0.55)' }
  },
  rain: {
    id: 'rain', label: 'Lluvia',
    accent: '#0ea5e9', accentStrong: '#0c2a4a', titleFrom: '#0c2a4a', titleTo: '#38bdf8',
    glassBg: 'rgba(255,237,213,0.32)', panelBg: 'rgba(255,251,235,0.92)', // mantiene color inicial
    rain: { count: 140, symbols: ['│','╎','┆'], color: 'rgba(14,165,233,0.75)', minSize: 14, maxSize: 22 }
  },
  infernal: {
    id: 'infernal', label: 'Infernal',
    accent: '#dc2626', accentStrong: '#450a0a', titleFrom: '#450a0a', titleTo: '#f87171',
    glassBg: 'rgba(254,226,226,0.22)', panelBg: 'rgba(254,242,242,0.92)',
    rain: { count: 60, symbols: ['⛧','✞'], color: 'rgba(220,38,38,0.7)' }
  },
  nightmare: {
    id: 'nightmare', label: 'Pesadilla',
    accent: '#991b1b', accentStrong: '#1a0000', titleFrom: '#1a0000', titleTo: '#ef4444',
    glassBg: 'rgba(254,226,226,0.22)', panelBg: 'rgba(255,241,242,0.9)',
    rain: { count: 80, symbols: ['👁'], color: 'rgba(220,38,38,0.5)' }
  },
  terminal: {
    id: 'terminal', label: 'Terminal',
    accent: '#1f8a1f', accentStrong: '#001a00', titleFrom: '#001a00', titleTo: '#1f8a1f',
    glassBg: 'rgba(210,255,210,0.14)', panelBg: 'rgba(240,255,240,0.78)',
    rain: { count: 100, symbols: ['█','▓','▒'], color: 'rgba(40,180,40,0.6)' }
  },
  romance: {
    id: 'romance', label: 'Romance',
    accent: '#d43a7a', accentStrong: '#3a003a', titleFrom: '#3a003a', titleTo: '#d43a7a',
    glassBg: 'rgba(255,210,230,0.16)', panelBg: 'rgba(255,240,248,0.78)',
    rain: { count: 80, symbols: ['♥','♡','✿'], color: 'rgba(220,80,120,0.55)' }
  },
  vhs: {
    id: 'vhs', label: 'VHS',
    accent: '#52525b', accentStrong: '#18181b', titleFrom: '#18181b', titleTo: '#a1a1aa',
    glassBg: 'rgba(255,237,213,0.32)', panelBg: 'rgba(255,251,235,0.92)', // mantiene color inicial
    rain: { count: 30, symbols: ['—','–'], color: 'rgba(82,82,91,0.35)' }
  },
  system: {
    id: 'system', label: 'System',
    accent: '#3a8dde', accentStrong: '#0a3a6b', titleFrom: '#0a3a6b', titleTo: '#3a9ad9',
    glassBg: 'rgba(255,255,255,0.18)', panelBg: 'rgba(255,255,255,0.74)',
    rain: { count: 110, symbols: ['✝','☩'], color: 'rgba(90,140,200,0.5)' }
  },
  story: {
    id: 'story', label: 'Story',
    accent: '#3d7bd6', accentStrong: '#02006b', titleFrom: '#02006b', titleTo: '#3d7bd6',
    glassBg: 'rgba(210,225,255,0.18)', panelBg: 'rgba(245,248,255,0.76)',
    rain: { count: 100, symbols: ['✝','☩','✞'], color: 'rgba(80,110,180,0.5)' }
  },
  occult: {
    id: 'occult', label: 'Occult',
    accent: '#6a0a1a', accentStrong: '#1a0508', titleFrom: '#1a0508', titleTo: '#6a0a1a',
    glassBg: 'rgba(255,210,220,0.12)', panelBg: 'rgba(255,240,242,0.76)',
    rain: { count: 150, symbols: ['⸸','✞'], color: 'rgba(180,60,60,0.6)' }
  },
}

export function getMood(id: MoodId): MoodDef | null {
  if (!id) return null
  return MOODS[id] ?? null
}

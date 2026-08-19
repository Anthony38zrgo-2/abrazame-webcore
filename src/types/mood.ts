export type MoodId = 'nostalgia' | 'melancholy' | 'lore' | 'infernal' | 'nightmare' | 'terminal' | 'romance' | 'rain' | 'vhs' | 'system' | 'story' | 'occult' | null

export interface MoodDef {
  id: MoodId
  label: string
  design?: 'aero' | 'win98'
  accent: string
  accentStrong: string
  titleFrom: string
  titleTo: string
  glassBg: string
  panelBg: string
  rain?: {
    count: number
    symbols: string[]
    color: string
    minSize?: number
    maxSize?: number
  }
  cursor?: string
}

export interface ChapterMood {
  hash: string // '#/c1'
  base: MoodId
  sections: { id: string; mood: MoodId; label: string }[]
}

export type AeroVariant = 'system' | 'story' | 'lore' | 'melancholy' | 'infernal' | 'nightmare' | 'terminal' | 'romance' | 'rain' | 'vhs' | 'rgb' | 'occult'

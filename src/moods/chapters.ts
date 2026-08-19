import type { ChapterMood } from '@/types/mood'

export const CHAPTER_MOODS: ChapterMood[] = [
  {
    hash: '#/', base: 'system',
    sections: [
      { id: 'intro', mood: 'nostalgia', label: 'Intro otoñal' }
    ]
  },
  {
    hash: '#/c1', base: 'lore',
    sections: [
      { id: 'atardecer', mood: 'nostalgia', label: 'Atardecer / cosecha' },
      { id: 'lluvia', mood: 'rain', label: 'Lluvia torrencial' },
      { id: 'motor', mood: 'vhs', label: 'Motor / VHS' }
    ]
  },
  {
    hash: '#/c2', base: 'melancholy',
    sections: [
      { id: 'mural-conejos', mood: 'lore', label: 'Mural conejos' },
      { id: 'delirio-adelaide', mood: 'nostalgia', label: 'Delirio Adelaide' },
      { id: 'pesadilla-maniquies', mood: 'nightmare', label: 'Pesadilla maniquíes' },
      { id: 'nota-dalia', mood: 'rain', label: 'Nota Dalia' }
    ]
  },
  {
    hash: '#/c3', base: 'romance',
    sections: [
      { id: 'ansiedad-puerta', mood: 'melancholy', label: 'Ansiedad' },
      { id: 'conejo-arcilla', mood: 'nostalgia', label: 'Conejo arcilla' },
      { id: 'iglesia', mood: 'lore', label: 'Iglesia / acantilado' },
      { id: 'promesa', mood: 'romance', label: 'Promesa semana' }
    ]
  },
  {
    hash: '#/c4', base: 'melancholy',
    sections: [
      { id: 'laberinto', mood: 'nightmare', label: 'Laberinto pensamientos' },
      { id: 'noche', mood: 'rain', label: 'Noche lluvia' }
    ]
  },
  {
    hash: '#/c5', base: 'infernal',
    sections: [
      { id: 'verdad', mood: 'lore', label: 'Verdad desvelada' },
      { id: 'confesion', mood: 'romance', label: 'Confesión' }
    ]
  },
  {
    hash: '#/c6', base: 'vhs',
    sections: [
      { id: 'armadura', mood: 'terminal', label: 'Armadura' },
      { id: 'partida', mood: 'nostalgia', label: 'Partida / ojos cerrados' }
    ]
  },
]

export function getChapterMood(hash: string) {
  return CHAPTER_MOODS.find(c => c.hash === hash) ?? CHAPTER_MOODS[0]
}

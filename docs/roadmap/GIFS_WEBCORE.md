# Roadmap — GIFs Webcore (Curaduría Manual)

> **Objetivo:** Incluir GIFs que acentúen el efecto **Webcore / Weirdcore / Vaporwave** de forma 100% curada, sin depender de APIs con key expuesta en `gh-pages`. Este documento es la guía definitiva para añadir GIFs manualmente desde webs externas.

---

## 1. Filosofía: ¿Por qué manual y no API?

| Criterio | API (Giphy/Tenor) | Librería curada manual |
|---|---|---|
| **Estética** | Catálogo moderno, stickers 2024, mucho ruido | **Auténtica 1996-2012**: `Under Construction`, `skull`, `cottage`, `frutiger_aero` |
| **Key / Rate** | Requiere `VITE_GIPHY_KEY`, 42 req/h, CORS, 429 | Sin key, sin rate, funciona offline |
| **gh-pages** | Key queda expuesta en bundle | 0 secretos |
| **Control** | Búsqueda `q=webcore` no garantiza paleta | Paleta controlada (ámbar/sky/zinc) por `mood` |
| **Peso** | GIFs 2-8 MB sin comprimir | Comprimidos a 80-300KB con `gifsicle` |

**Decisión del proyecto:** **Primario = librería local** `public/gifs/webcore/`. **Secundario opcional** `Giphy` solo detrás de `VITE_GIPHY_KEY` con fallback a esta librería (no implementar hasta que la librería esté completa).

---

## 2. Fuentes externas curadas (dónde buscar)

### A. GifCities — Internet Archive (1996-2009, 100% Webcore)
- **URL:** `https://gifcities.org/?q=`
- **Queries recomendadas:** `webcore`, `vaporwave`, `weirdcore`, `cottagecore`, `frutiger_aero`, `forest`, `rain`, `eye`, `cross`, `pentagram`, `leaf`, `under construction`, `email`, `skull`
- **Dump completo:** `https://archive.org/details/geocities_gifs` (zip 4GB, filtrar por `*leaf*`, `*rain*`)

### B. Geocities / Neocities vivas
- `https://geocities.ws` — mirror de Geocities, buscar `gif`
- `https://neocities.org/browse?tag=webcore` + `tag=vaporwave`
- Joyas: `https://anlucas.neocities.org` (88x31), `https://gifypet.neocities.org`, `https://88x31.nl`

### C. Tumblr Webcore 2012 (cottage/liminal)
- Dumps en `https://archive.org/search?query=webcore+gif` y Pinterest `we heart it` packs
- Paleta otoñal: hojas, cabañas, lluvia en ventana, CRT

### D. Criterio de selección (checklist)
- [ ] Loop perfecto (sin salto)
- [ ] ≤400KB ideal, ≤700KB máximo
- [ ] Paleta limitada (≤64 colores), sin texto moderno
- [ ] Fondo transparente o negro (para `mix-blend` detrás del card)
- [ ] Licencia: sin marca de agua, CC0 o `archive.org` Terms permite hotlink con copia local

---

## 3. Proceso manual paso a paso (5 min por GIF)

1. **Buscar:** Abrir GifCities con `q=leaf`, previsualizar 10, elegir 1 con loop.
2. **Descargar:** Click derecho → Guardar como `leaf-fall-01.gif` (no `download (3).gif`).
3. **Comprimir:** 
   ```bash
   # con gifsicle (recomendado, mantiene loop)
   gifsicle -O3 --resize 320x_ --colors 64 -o leaf-fall-01.min.gif leaf-fall-01.gif
   # o con ffmpeg (si gifsicle no está)
   ffmpeg -i leaf-fall-01.gif -vf "scale=320:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=64[p];[b][p]paletteuse" leaf-fall-01.min.gif
   ```
   Verificar: `ls -lh` debe quedar 80-300KB.

4. **Renombrar semántico:** `nostalgia_leaf-fall-01.gif`, `rain_window-02.gif`, `vhs_eye-blink-01.gif`, `lore_cross-01.gif`, `infernal_pentagram-01.gif`

5. **Mover:** `public/gifs/webcore/{mood}/` donde `mood` ∈ `nostalgia|rain|vhs|lore|infernal|nightmare`
   ```
   public/gifs/webcore/
     nostalgia/leaf-fall-01.gif
     rain/rain-window-02.gif
     vhs/static-01.gif
     lore/cross-01.gif
     infernal/pentagram-01.gif
   ```

6. **Registrar en manifest:** Editar `src/assets/gifs/manifest.json`:
   ```json
   {
     "nostalgia": [
       { "src": "webcore/nostalgia/leaf-fall-01.gif", "source": "https://gifcities.org/?q=leaf", "weight": 1 }
     ],
     "rain": [
       { "src": "webcore/rain/rain-window-02.gif", "source": "https://archive.org/details/geocities_gifs", "weight": 1 }
     ]
   }
   ```

7. **Commit:** `git add public/gifs/webcore src/assets/gifs/manifest.json && git commit -m "chore(gifs): add nostalgia leaf-fall-01 from gifcities"`

---

## 4. Estructura de carpetas + manifest (contrato reutilizable)

```
public/gifs/webcore/
  nostalgia/   # 🍂 otoño, Cormorant
  rain/        # │ lluvia, JetBrains
  vhs/         # ─ scanline, VT323
  lore/        # ✝ cruz, Unifraktur
  infernal/    # ⛧ pentagrama, Creepster
  nightmare/   # 👁 ojo rojo, Creepster

src/assets/gifs/
  manifest.json   # fuente de verdad, importada por useGif.ts

src/components/aero/GifLayer.vue
  props: { mood: MoodId, placement: 'behind-card'|'inline', lazy: boolean }
  -> <img :src="`/gifs/${src}`" loading="lazy" decoding="async" class="aero-gif" />

src/composables/useGif.ts
  export function useGif(mood: MoodId) {
    const list = manifest[mood] ?? manifest['nostalgia'];
    return list[Math.floor(Math.random()*list.length)];
  }
```

**Ejemplo `manifest.json` completo:**
```json
{
  "nostalgia": [
    { "src": "webcore/nostalgia/leaf-fall-01.gif", "source": "gifcities leaf", "alt": "hojas otoñales cayendo" },
    { "src": "webcore/nostalgia/cottage-02.gif", "source": "neocities cottage", "alt": "cabaña con luz cálida" }
  ],
  "rain": [
    { "src": "webcore/rain/rain-window-02.gif", "source": "geocities_gifs", "alt": "lluvia en ventana" }
  ],
  "vhs": [
    { "src": "webcore/vhs/static-01.gif", "source": "gifcities static", "alt": "ruido VHS" }
  ]
}
```

---

## 5. Integración en c1 (cómo se ve)

- `MoodSection#atardecer mood="nostalgia"` → `<GifLayer mood="nostalgia" placement="behind-card" class="opacity-[0.18] mask-linear" />`
  - Detrás del card `AeroWindow` (`fixed z0` vs `z10` del contenido), no tapa texto.
- `MoodSection#lluvia mood="rain"` → `GifLayer` inline sutil dentro del sub-card `bg-white/55`.
- `MoodSection#motor mood="vhs"` → `GifLayer` con `mix-blend: screen` + scanline.

Todo usa `loading="lazy"` + `IntersectionObserver` ya existente en `MoodSection` + `motion` crossfade 600ms (`rain-fade`).

---

## 6. Licencia y ética

- **Citar fuente:** cada entrada en `manifest.json` debe tener `source` con URL exacta.
- **No hotlink:** descargar copia local, no `<img src="https://gifcities.org/...">` (evita CORS y 404 si archive cae).
- **Evitar:** GIFs con marca `tenor.com`, `giphy.com` watermark, o con personas reales sin consentimiento.
- **Respeto:** `archive.org` permite uso no comercial con atribución; mantener `© Internet Archive` en `docs/roadmap` si se usa dump masivo.

---

## 7. QA checklist (antes de PR)

- [ ] `loading="lazy"` y `decoding="async"` en `<img>`
- [ ] `max-w-full` + `audit-overflow.mjs` → `hasHScroll false` en 7 viewports
- [ ] Peso total por `mood` <1.5MB (ej. 5 GIFs × 300KB)
- [ ] `pnpm exec vite build` no sube >200KB JS (GIFs van a `public/`, no a bundle)
- [ ] `pnpm preview` en `http://127.0.0.1:5173/abrazame-webcore/#/c1` scrollea `atardecer→lluvia` y el GIF hace crossfade sin tapar texto

---

## 8. Próximos pasos (cuando se apruebe este roadmap)

1. Crear `public/gifs/webcore/{mood}/` + `src/assets/gifs/manifest.json` vacío.
2. Curar 5 GIFs por `nostalgia/rain/vhs` (15 total) siguiendo §3.
3. Implementar `useGif.ts` + `GifLayer.vue` (1h) y conectar en `c1`.
4. Opcional: `VITE_GIPHY_KEY` con fallback a este manifest (documentado, no obligatorio).

> **Nota:** Este roadmap es documentación viva. Actualizar `§2 Fuentes` cada vez que se encuentre un nuevo archivo webcore auténtico.

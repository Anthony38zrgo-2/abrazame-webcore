# Mood System

## Objetivo

El mood system cambia la identidad visual de la lectura sin acoplar la lógica narrativa a una página concreta. Cada capítulo tiene un mood base y puede declarar moods adicionales por sección.

## Fuentes de verdad

### `src/moods/registry.ts`

Contiene las definiciones de mood: colores, fondos, lluvia, cursor y demás tokens visuales. Las nuevas definiciones deben agregarse aquí y tiparse en `src/types/mood.ts`.

### `src/moods/chapters.ts`

Define el mood base de cada ruta y la relación sección → mood. También es responsable de normalizar los hashes mediante `normalizeChapterHash()`.

No se debe duplicar lógica de resolución de rutas dentro de componentes o composables.

## Flujo

1. El router actualiza `currentHash`.
2. `useMood()` llama `getChapterMood(currentHash)`.
3. Se aplica inmediatamente el mood base del capítulo.
4. Se vuelve a registrar el `IntersectionObserver` después de renderizar la página.
5. Cuando una sección se vuelve dominante en el viewport, se aplica su mood.
6. El scroll fallback replica ese comportamiento cuando el observer no produce una transición útil.

## Contrato de sección

Una sección narrativa que participe en moods debe exponer un `id` estable y `data-mood`, normalmente mediante `MoodSection`.

Ejemplo:

```vue
<MoodSection id="lluvia" mood="rain" label="Lluvia">
  ...
</MoodSection>
```

El `id` debe coincidir con la entrada correspondiente de `CHAPTER_MOODS`.

## Routing

Las rutas válidas actuales son:

- `#/`
- `#/c1`
- `#/c2`
- `#/c3`
- `#/c4`
- `#/c5`
- `#/c6`

Hashes desconocidos se normalizan a Home. Esto evita que un fallback prematuro aplique `system` a un capítulo válido durante un `hashchange`.

## UI y themes

Los consumidores nuevos deben preferir imports desde `@/components/ui`. Esa fachada mantiene nombres semánticos (`UiWindow`, `UiPanel`, `UiButton`, etc.) mientras la implementación puede evolucionar de Aero a XP/webcore sin obligar a renombrar los componentes narrativos.

Los componentes `src/components/aero/*` continúan existiendo como implementación compatible mientras se realiza la migración progresiva.

## QA

Con el servidor de desarrollo activo:

```bash
pnpm qa:mood
pnpm qa:overflow
pnpm qa:responsive
```

`qa:mood` debe comprobar al menos que cada hash aplica un mood y que al desplazarse entre secciones cambia `--aero-accent`.

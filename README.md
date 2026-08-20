# Abrázame Webcore

Experiencia narrativa web construida con Vue 3, TypeScript, Vite y Tailwind CSS. La presentación cambia de mood durante la lectura mediante variables CSS y secciones observadas en el viewport.

## Desarrollo

El package manager canónico es **pnpm**.

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## QA visual

Los scripts de Playwright existentes se exponen desde `package.json`:

```bash
pnpm qa:mood
pnpm qa:overflow
pnpm qa:responsive
pnpm qa:emo
pnpm qa:side
```

Los audits que navegan la aplicación esperan por defecto `http://127.0.0.1:5173/abrazame-webcore/`. Se puede sobrescribir con `BASE_URL`.

## Arquitectura

- `src/pages/`: Home y capítulos narrativos.
- `src/components/ui/`: fachada neutral para componentes de interfaz. Actualmente delega en la implementación Aero para conservar compatibilidad visual.
- `src/components/aero/`: implementación visual heredada que continúa respaldando la UI actual.
- `src/components/emo/`: elementos decorativos webcore/emo.
- `src/moods/registry.ts`: fuente de verdad de tokens y definiciones de mood.
- `src/moods/chapters.ts`: asignación de mood base y moods por sección para cada capítulo.
- `src/composables/useMood.ts`: integración Vue/DOM del motor de moods.
- `src/styles/xp/`: capa de tema más reciente, cargada después de Aero.

## Política de estilos

El runtime carga únicamente:

1. `styles/globals.css`: reset y Tailwind.
2. `styles/aero/*`: implementación visual base compatible con los componentes existentes.
3. `styles/xp/*`: tema actual y sobrescrituras intencionales.

Los estilos Win98 históricos ya no forman parte de la cascada activa. La historia visual anterior debe recuperarse desde Git o desde `docs/backup/`, no mediante imports globales.

## Moods

Las rutas reconocidas son `#/`, `#/c1` ... `#/c6`. `normalizeChapterHash()` normaliza el hash y `getChapterMood()` resuelve siempre un capítulo válido. Los cambios de ruta aplican primero el mood base del capítulo; después `IntersectionObserver` puede activar el mood de la sección visible.

Más detalles en `docs/roadmap/MOODS_SYSTEM.md`.

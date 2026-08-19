import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'

/**
 * Compatibility bridge for legacy `@public/...` imports.
 *
 * Vite intentionally does not allow files from `public/` to be imported as
 * modules. Existing Vue files historically used `@public` imports only to get
 * a URL string, so this virtual module resolves those imports to the configured
 * public base without pulling the binary files into the module graph.
 *
 * New code should prefer direct public URLs or import.meta.env.BASE_URL.
 */
function publicUrlImports(): Plugin {
    const sourcePrefix = '@public/'
    const virtualPrefix = '\0public-url:'
    let base = '/'

    return {
        name: 'public-url-imports',
        enforce: 'pre',
        configResolved(config) {
            base = config.base
        },
        resolveId(id) {
            if (!id.startsWith(sourcePrefix)) return null
            return `${virtualPrefix}${id.slice(sourcePrefix.length)}`
        },
        load(id) {
            if (!id.startsWith(virtualPrefix)) return null

            const assetPath = id.slice(virtualPrefix.length).replace(/^\/+/, '')
            const publicUrl = `${base}${assetPath}`
            return `export default ${JSON.stringify(publicUrl)}`
        },
    }
}

export default defineConfig({
    plugins: [publicUrlImports(), vue(), svgLoader()],
    base: '/abrazame-webcore/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})

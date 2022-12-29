// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'
export default defineNuxtConfig({
    ssr: false,
    routeRules: {
        "/**": { cors: true }
    },
    runtimeConfig: {
        public: {
            iconSufix: '-svgrepo-com',
            // fetchUri: 'http://127.0.0.1:8000',
            fetchUri: 'https://api-el-salvador-production.up.railway.app',
            baseURL: '/api-el-salvador-ui/'
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/content',
        '@caeher/nuxt-gallery'
    ],
    plugins: [
        "~/plugins/clickOutside.ts"
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: './tailwind.config'
    },
    colorMode: {
        preference: 'light', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },
    app: {
        baseURL: '/api-el-salvador-ui/',
        rootId: 'ElSalvador'
    },
    experimental: {
        payloadExtraction: false
    },
    content: {
        sources: {
            content: {
                driver: 'fs',
                prefix: '/blog', // All contents inside this source will be prefixed with `/blog`
                base: resolve(__dirname, 'content')
            }
        }
    }
})


// https://nuxt.com/docs/api/configuration/nuxt-config
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
            baseURL:  '/api-el-salvador-ui/'
        }
    }, 
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
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
    }
})


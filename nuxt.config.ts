// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    routeRules: {
        "/**": { cors: true }
    },
    runtimeConfig: {
        public: {
            iconSufix: '-svgrepo-com',
            fetchUri: 'https://5d6f-190-87-160-21.ngrok.io'
        }
    }, 
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
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
})


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            iconSufix: '-svgrepo-com'
        }
    }, 
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    plugins: [
        '~/plugins/custom-elements.ts'
    ],
    vue: {
        // compilerOptions: {
        //     isCustomElement: (tag: string) => tag.startsWith('Map')
        // }
    },
    // components: {
    //     // dirs: [
    //     //     {
    //     //         path: '~/components/map',
    //     //         global: true
    //     //     },
    //     //     '~/components'
    //     // ]
    // },
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
    }
})


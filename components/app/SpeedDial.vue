<script setup lang="ts">
const isOpen = ref(false)
const colorMode = useColorMode()
function toggleSpeedDial (val:string) {
    colorMode.preference = val
    nextTick()
    setTimeout(() => {
        isOpen.value = !isOpen.value
    }, 200)
}
</script>
<template>
    <div data-dial-init class="fixed bottom-6 right-3 md:right-24 group">
        <Transition>
            <div v-if="isOpen" id="speed-dial-menu-text-outside-button-square"
                class="flex flex-col items-center mb-4 space-y-2">
                <button @click="toggleSpeedDial('light')" type="button"
                    class="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <img class="mx-auto mt-px w-6 h-6" src="svgs/sun-svgrepo-com.svg" alt="Sun for light mode">
                    <span class="block absolute -left-16 top-1/2 mb-px text-xs font-medium -translate-y-1/2">Light
                        mode</span>
                </button>
                <button @click="toggleSpeedDial('dark')" type="button"
                    class="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <img class="mx-auto mt-px w-6 h-6" src="svgs/moon-svgrepo-com.svg"
                        alt="Moon for dark mode">
                    <span class="block absolute -left-16 top-1/2 mb-px text-xs font-medium -translate-y-1/2">Dark
                        mode</span>
                </button>
            </div>
        </Transition>
        <button type="button" @click="isOpen = !isOpen" data-dial-toggle="speed-dial-menu-text-outside-button-square"
            aria-controls="speed-dial-menu-text-outside-button-square" aria-expanded="false"
            class="flex justify-center items-center w-14 h-14 text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
            <template v-if="$colorMode.preference == 'light'">
                <img class="w-8 h-8 transition-transform group-hover:rotate-45" src="svgs/sun-svgrepo-com.svg"
                    alt="Sun for light mode">
            </template>
            <template v-else>
                <img class="w-8 h-8 transition-transform group-hover:rotate-45" src="svgs/moon-svgrepo-com.svg"
                    alt="Sun for light mode">
            </template>
            <span class="sr-only">Open actions menu</span>
        </button>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
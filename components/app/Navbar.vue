<script setup lang="ts">
const isNavbarOpen = ref(false)

</script>
<template>
    <nav class="sticky top-0 z-50 shadow bg-white py-3 px-3 sm:px-12 md:px-24 lg:px-40 dark:bg-slate-900 dark:text-slate-300">
        <div class="flex flex-wrap justify-between items-center">
            <div id="brand">
                <NuxtLink to="/">
                    Maquilishuat
                </NuxtLink>
            </div>
            <div id="burger" class="block md:hidden">
                <button v-click-outside="() => isNavbarOpen = false" @click="isNavbarOpen = !isNavbarOpen">
                    <SvgBars class="text-slate-900 dark:text-slate-300 w-6 h-6"/>
                </button>
            </div>
            <div id="collapse" class="hidden md:block">
                <ul class="flex">
                    <li>
                        <NuxtLink 
                            class="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800" 
                            to="/">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            class="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800" 
                            to="/about">
                            About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            class="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800" 
                            to="/colaborate">
                            Colaborate
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="isNavbarOpen" id="collapse-mobile" class="mt-3 -mx-3">
            <ul class="grid grid-cols-1 gap-y-1 mx-3">
                <li>
                    <NuxtLink class="block w-full p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" to="/">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="block w-full p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" to="#">
                        About
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="block w-full p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" to="#">
                        Colaborate
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
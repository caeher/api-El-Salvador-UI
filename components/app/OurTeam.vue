<script setup lang="ts">
import { PropType } from 'vue'
import ITeam from '~~/ts/interfaces/Team'

const props = defineProps({
    teamGroup: {
        type: Array as PropType<ITeam[]>,
        required: true
    }
})

const {public: {iconSufix}} = useRuntimeConfig()

</script>

<template>
    <div class="overflow-hidden relative">
        <ProfilePolyfonHexagon class="absolute" />
    </div>
    <div class="bg-white dark:bg-slate-900">
        <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
                <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl dark:text-slate-300">Meet our team</h2>
                    <p class="text-xl text-slate-500 dark:text-slate-300"></p>
                </div>
                <ul role="list"
                    class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3">
                    <li v-for="(team, index) in teamGroup" :key="index" class="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg drop-shadow">
                        <div class="space-y-6">
                            <div class="h-full">
                                <ProfileAvatar class="mx-auto h-44 w-40" :image="team.image"/>
                            </div>
                            <div class="space-y-2">
                                <div class="space-y-1 text-lg font-medium leading-6">
                                    <h3 class="dark:text-white">{{ team.name }}</h3>
                                    <p class="text-indigo-600">{{ team.occupation }}</p>
                                </div>
                                <ul role="list" class="flex justify-center space-x-5">
                                    <li v-for="(link, sub) in team.socialLinks" :key="`${index}-${sub}`">
                                        <a :href="link.url" class="text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">{{ link.name }}</span>
                                            <img class="w-5 h-5" :src="`svgs/${link.icon}${iconSufix}.svg`" :alt="`${link.icon} icon`"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
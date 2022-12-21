<script setup lang="ts">
import { PropType } from 'vue';
import {ISocialList} from '~/ts/interfaces/ISocialList'

const props = defineProps({
    list: {
        type: Object as PropType<ISocialList>,
        required: true,
    }
})

const {public: {iconSufix, baseURL}} = useRuntimeConfig()
</script>
<template>
    <nav>
        <h5 class="text-xl text-slate-700 font-bold text-center">Follow</h5>
        <ul class="flex justify-center mt-6 gap-3">
            <li 
                v-for="item in list.items" :key="item.key">
                <template v-if="item.icon">
                    <NuxtLink :href="item.url" target="_blank" :external="true">
                        <img class="w-6 h-6" :src="`${baseURL}svgs/${item.icon}${iconSufix}.svg`" :alt="`${item.name} icon`"/>
                    </NuxtLink>
                </template>
                <template v-else>
                    <NuxtLink :href="item.url" target="_blank" :external="true">
                        {{ item.name }}
                    </NuxtLink>
                </template>
            </li>
        </ul>
    </nav>
</template>
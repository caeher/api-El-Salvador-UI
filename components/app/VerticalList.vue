<script setup lang="ts">
import { PropType } from 'vue';
import { IList } from '~~/ts/interfaces/IList';

const props = defineProps({
    list: {
        type: Object as PropType<IList>,
        required: true
    }
})
</script>
<template>
    <nav>
        <div class="m-2.5">
            <h5 class="text-xl font-bold text-slate-700 dark:text-slate-300">{{ list.name }}</h5>
            <ul class="mt-3">
                <li v-for="item in list.items" :key="item.key" class="">
                    <NuxtLink class="block p-2.5 cursor-pointer dark:text-slate-300 rounded-lg dark:hover:bg-slate-800"
                        to="#">
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
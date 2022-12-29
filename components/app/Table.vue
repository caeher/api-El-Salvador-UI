<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
    header: {
        type: Array as PropType<string[]>,
        required: true,
    },
    body: {
        type: Array as PropType<object[]>,
        required: true
    }
})

</script>
<template>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs p-3 text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-200">
                <tr>
                    <th 
                        v-for="(item, index) in header"
                        :key="index"
                        scope="col" class="py-3 px-6">
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(row, index) in body"
                    :key="index"
                    class="bg-white border-b dark:bg-slate-900 dark:border-slate-700">
                    <td 
                        v-for="(item, sub) in Object.values(row)"
                        :key="`${index}-${sub}`"
                        class="py-4 px-6">
                        {{ item }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
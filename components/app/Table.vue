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
        <table class="w-full text-sm text-left text-gray-700 dark:text-gray-200">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-900 dark:text-gray-200">
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
                    class="bg-gray-50 border-b dark:bg-[#000006] dark:border-gray-900">
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
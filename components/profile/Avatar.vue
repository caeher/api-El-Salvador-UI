<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
    image: {
        type: String as PropType<string>,
        required: false,
        default: 'https://img.fotocommunity.com/jeune-fille-a-la-capuche-f8ec96db-d297-4884-aae4-e1aaa6bc62e5.jpg?height=160'
    },
    cssProp: {
        type: String as PropType<string>,
        required: false,
        default: ''
    }
})


const cssComputed = computed(() => {
    return `
    -webkit-clip-path: url(#hexagon);
    clip-path: url(#hexagon);
    `
})
</script>
<template>
    <div class="relative h-full">
        <img class="absolute z-10 clipped" :src="image" alt="avatar profile" :style="cssComputed">
        <div class="absolute clipped bg-slate-300 dark:bg-slate-500 scale-105" :style="cssComputed"></div>
    </div>
</template>
<style scoped>
.clipped {
    width: 160px;
    height: 182px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
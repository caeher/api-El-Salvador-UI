<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    imgSrc: {
        type: String as PropType<string>,
        required: true
    },
    altText: {
        type: String as PropType<string>,
        required: false,
        default: ''
    }
})
</script>
<template>
    <figure class="aspect-w-12 aspect-h-8 rounded-xl shadow-lg overflow-hidden">
        <img class="w-full h-full object-center object-cover" :src="imgSrc" :alt="altText">
    </figure>
</template>
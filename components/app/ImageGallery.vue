<script setup lang="ts">
import { Modal } from '~~/utils/sweetalert';
const images = [
    '/images/one.jpg',
    '/images/two.webp',
    '/images/three.jpg',
    '/images/four.jpg',
    '/images/five.jpg',
    '/images/six.jpg'
]

function modalImage(imageUrl:string) {
    Modal.fire({
        title: 'title',
        imageUrl,
        imageAlt: 'title',
        customClass: {
            image: '!mt-0 rounded-t w-full',
        },
        width: 900
    })
}
</script>
<template>
    <div>
        <h5 class="text-center text-xl font-bold dark:text-slate-300">Gallery</h5>
        <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6 lg:gap-9">
            <div v-for="img in images" >
                <AppFigure :img-src="img" @click="modalImage(img)"/>
            </div>
        </div>
    </div>
</template>
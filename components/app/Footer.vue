<script setup lang="ts">
import {footerList as lists} from '~~/utils/footer'
</script>

<template>
    <footer class="py-16 px-3 sm:px-5 md:px-6 lg:px-24 xl:px-32 bg-white dark:bg-gray-900">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
            <template
                v-for="list in lists">
                <AppVerticalList 
                    :list="list"/>
            </template>
        </div>
    </footer>
</template>
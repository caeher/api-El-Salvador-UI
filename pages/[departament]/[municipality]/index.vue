<script setup lang="ts">
const {params} = useRoute()
</script>
<template>
    <AppNarrowContent>
        <AppProse>
            <h1 class="text-center break-words">
                {{ params.municipality }}
            </h1>
        </AppProse>
    </AppNarrowContent>
</template>
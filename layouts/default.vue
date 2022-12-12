<script setup lang="ts">
import { socialLinks } from '~~/utils/social-link'; 
</script>
<template>

    <slot />
    <AppEmptyContainer />
    <AppSocialNetwork :list="socialLinks"/>
    <AppEmptyContainer />
    <AppFooter />
</template>
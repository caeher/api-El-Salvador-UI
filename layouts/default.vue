<script setup lang="ts">
import { socialLinks } from '~~/utils/social-link'; 
</script>
<template>
    <AppNavbar />
    <slot />
    <AppEmptyContainer />
    <AppSocialNetwork :list="socialLinks"/>
    <AppEmptyContainer />
    <AppFooter />
</template>
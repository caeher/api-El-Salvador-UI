<script setup lang="ts">
import { socialLinks } from '~~/utils/social-link'; 
</script>
<template>
    <UiNavbar />
    <slot />
    <AppSocialNetwork :list="socialLinks"/>
    <!-- <AppFooter /> -->
    <UiFooter />
</template>
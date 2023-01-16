<script setup lang="ts">
import { teams } from '~~/utils/teams';
definePageMeta({
    layout: 'ui'
})

</script>
<template>
    <div class="min-h-screen">
        <UiContent title="Acerca de nosotros" class="pb-6">
            <ContentDoc path="/_info/about" />
        </UiContent>
        <!-- <AppSimpleContent>
            <AppProse>
            </AppProse>
        </AppSimpleContent> -->
        <AppOurTeam :team-group="teams"/>
    </div>
</template>
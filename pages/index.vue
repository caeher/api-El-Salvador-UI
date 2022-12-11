<script setup lang="ts">
const router = useRouter()
function routerMap(maps: string | null) {
    console.log(maps)
    if (maps) {
        router.push({
            path: `/${maps}`
        })
    }
}
</script>
<template>
    <div>
        <AppNarrowContent class="min-h-screen">
            <AppProse>
                <h1 class="text-center">
                    El Salvador
                </h1>
                <MapElSalvador @maps="routerMap" class="w-full"></MapElSalvador>
            </AppProse>
        </AppNarrowContent>
    </div>
</template>
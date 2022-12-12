<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code';

const router = useRouter()
function routerMap(maps: string | null) {
    if (maps) {
        if(useSecureParams(elSalvadorCode[maps].name)) {
            const p = elSalvadorCode[maps].name.toLowerCase().split(' ').join('-')
            router.push({
                path: `/${p}`
            })
        }
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
            <AppEmptyContainer />
            <AppImageGallery/>
        </AppNarrowContent>
    </div>
</template>
<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code';

const router = useRouter()
function routerMap(maps: string | null) {
    if (maps) {
        if (useSecureParams(elSalvadorCode[maps].name)) {
            const p = elSalvadorCode[maps].name.toLowerCase().split(' ').join('-')
            router.push({
                path: `/${p}`
            })
        }
    }
}

const departaments = Object.values(elSalvadorCode).map((dep: any) => {
    return {
        name: dep.name,
        municipalities_cout: Object.keys(dep.municipalities).length
    }
})
</script>
<template>
    <div>
        <AppSimpleContent class="min-h-screen">
            <AppProse>
                <h1 class="text-center">
                    El Salvador
                </h1>
                <MapElSalvador @maps="routerMap" class="w-full"></MapElSalvador>

            </AppProse>
            <div class="px-3 sm:px-12 md:px-20 lg:px-32 xl:px-40">
                <div class="mt-12">
                    <AppTable :header="['Departament', 'Municipalities count']" :body="departaments" />
                </div>
            </div>
            <AppEmptyContainer />
        </AppSimpleContent>
    </div>
</template>
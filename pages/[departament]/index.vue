<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code'
const { params: { departament } } = useRoute()
const router = useRouter()
const isComponent = ref(false)
let asyncComponent: any
const { public: { fetchUri } } = useRuntimeConfig()

if (!departament) {
    showError({ statusCode: 404, statusMessage: 'Error' })
} else {
    asyncComponent = defineAsyncComponent(() => {
        return import(`../../components/map/SV/${useComponentParse(departament.toString())}.vue`)
    })
    isComponent.value = true
}

function routerMap(maps: string | null) {
    console.log(maps)
    if (maps) {
        const slvCodeValue = Object.values(elSalvadorCode)
        const dep: any[]= slvCodeValue.filter((val: any) => val.municipalities[maps] !== undefined)
        if (dep.length == 1) {
            const municipality = dep[0].municipalities[maps]
            if (useSecureParams(municipality)) {
                const p = dep[0].name.toLowerCase().split(' ').join('-')
                router.push({
                    path: `/${p}/${municipality.toLowerCase().split(' ').join('-')}`
                })
            }
        }
    }
}

const { data: departamentData, pending: departamentPending, error: departamentError } = await useAsyncData('departament', async () => {
    if (useSecureParams(departament.toString())) {
        return $fetch(`${fetchUri}/departaments/${departament.toString().split('-').join(' ')}`)
    }
})

if (departamentError.value || departamentData.value == undefined) {
    showError({ statusCode: 404, statusMessage: 'Error' })
}


</script>
<template>
    <div>
        <AppNarrowContent>
            <AppProse class="mx-auto">
                <h1 class="text-center">
                    {{ departamentData?.depname  }}
                </h1>
                <template v-if="isComponent">
                    <component :is="asyncComponent" class="w-full" @maps="routerMap">
                    </component>
                </template>
            </AppProse>
            <AppEmptyContainer />
            <AppImageGallery/>
        </AppNarrowContent>
    </div>
</template>
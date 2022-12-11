<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code'
const { params } = useRoute()
const router = useRouter()

const isComponent = ref(false)
let asyncComponent: any

if (!elSalvadorCode[params.departament.toString()]) {
    showError({ statusCode: 404, statusMessage: 'Error' })
} else {
    asyncComponent = defineAsyncComponent(() => {
        return import(`../../components/map/SV/${elSalvadorCode[params.departament.toString()].component}.vue`)
    })
    isComponent.value = true
}

function routerMap(maps: string | null) {
    if (maps) {
        router.push({
            path: `/${params.departament.toString()}/${maps}`
        })
    }
}
</script>
<template>
    <div>
        <AppNarrowContent>
            <AppProse>
                <h1 class="text-center">
                    {{ elSalvadorCode[params.departament.toString()].name }}
                </h1>
                <template v-if="isComponent">
                    <component :is="asyncComponent" class="w-full" @maps="routerMap">
                    </component>
                </template>
            </AppProse>
        </AppNarrowContent>
    </div>
</template>
<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code'
import IDepartament from '~~/ts/interfaces/Departament'
import IUseFetchResponse from '~~/ts/interfaces/UseFetchResponse'
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

const { data: departamentData, refresh: departamentRefresh,pending: departamentPending } = <IUseFetchResponse<IDepartament>> await useAsyncData('departaments',async () => {
    if (useSecureParams(departament.toString())) {
        return $fetch(`${fetchUri}/departaments/${departament.toString().split('-').join(' ')}`)
        
    }
})
console.log(departamentData)
if (departamentData.value == undefined) {
    throw createError({
        statusCode: 404,
        message: 'Not found',
        fatal: true
    })
}

const dataTable:{header: string[], body: object[]} = { header: [], body: []}
console.log(departamentData)
if(departamentData.value) {
    dataTable.header.push(...['Municipio'])
    dataTable.body.push(
        ...departamentData.value?.muns.map((mun:{munname:string}) => {
            return {
                munname: mun.munname
            }
        })
    )
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

                <template v-if="dataTable.header.length>0">
                    <AppTable 
                        :header="dataTable.header"
                        :body="dataTable.body"
                        />
                </template>
            </AppProse>
            <AppEmptyContainer />
        </AppNarrowContent>
    </div>
</template>
<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code'
import IUseFetchResponse from '~~/ts/interfaces/UseFetchResponse'
import IMunicipality from '~~/ts/interfaces/Municipality'
import { AsyncData } from '#app';
const { params: { departament: departamentParam, municipality: municipalityParam } } = useRoute()
const { public: { fetchUri, baseURL } } = useRuntimeConfig()

const [departament] = Object.values<{
    name: string,
    municipalities: Object
}>(elSalvadorCode).filter((val: any) => val.name.toLowerCase() == departamentParam.toString().toLowerCase().split('-').join(' '))


if (departament === undefined) {
    throw createError({
        statusCode: 404,
        message: 'Municipality not found',
        fatal: true
    })
}
const municipio = municipalityParam.toString().toLowerCase().split('-').join(' ')
const [municipality]: string[] = Object.values(departament.municipalities).filter((val: string) => val.toLowerCase() == municipio)
if (municipality === undefined) {
    throw createError({
        statusCode: 404,
        message: 'Municipality not found',
        fatal: true
    })
}

const { data: municipalityData, pending: municipalityPending } = <IUseFetchResponse<IMunicipality>>await useAsyncData('municipality', async () => {
    console.log(municipality)
    if (useSecureParams(municipality)) {
        return $fetch(`${fetchUri}/municipalities/${municipality}?departament=${departamentParam.toString().toLowerCase().split('-').join(' ')}`)
    }
})

if (!municipalityData.value) {
    throw createError({
        statusCode: 404,
        message: 'Municipality not found',
        fatal: true
    })
}
const dataTable = {
    header: ['departament', 'isocode', 'zone'],
    body: [
        {
            departament: municipalityData.value.department.depname,
            isocode: municipalityData.value.department.isocode,
            zone: municipalityData.value.department.zone.zonename
        }
    ]
}

const { data: images, pending: imagesPending } = <AsyncData<string[], Error>> await useAsyncData('images', async () => {
    return $fetch(`${fetchUri}/scraper/images/${municipality}`)
})
console.log(imagesPending, municipalityPending)
definePageMeta({
    layout: 'ui'
})

useHead({
    meta: [
        { 
            name: 'title',
            content: `Códigos zip de ${municipality} departamento de ${departament.name}`
        }
    ]
})
</script>
<template>
    <AppNarrowContent>
        <div class="grid grid-cols-1 lg:grid-cols-12">
            <div class="lg:col-span-2"></div>
            <div class="lg:col-span-8">
                <template v-if="municipalityPending">
                    <div class="animate-pulse p-24">
                        hola
                    </div>
                </template>
                <AppContentContainer>
                    <template #title>
                        {{ municipalityData?.munname }}
                    </template>
                    <template #body>
                        <div class="mt-6">
                            <AppTable :header="dataTable.header" :body="dataTable.body" />
                        </div>
                    </template>
                </AppContentContainer>
                <AppEmptyContainer />
                <template v-if="imagesPending">
                    <div class="animate-pulse p-24">
                        hola
                    </div>
                </template>

                <BasicGallery v-if="images" :images="images" rounded="lg" shadow="md" drop-shadow="md"/>
            </div>
            <div class="lg:col-span-2"></div>
        </div>
    </AppNarrowContent>
</template>
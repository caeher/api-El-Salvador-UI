<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code'
import IUseFetchResponse from '~~/ts/interfaces/UseFetchResponse'
import IMunicipality from '~~/ts/interfaces/Municipality'
const { params: { departament: departamentParam, municipality: municipalityParam } } = useRoute()
const { public: { fetchUri } } = useRuntimeConfig()

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
const [municipality]: string[] = Object.values(departament.municipalities).filter((val: string) => val.toLowerCase() == municipalityParam.toString().toLowerCase().split('-').join(' '))

if (municipality === undefined) {
    throw createError({
        statusCode: 404,
        message: 'Municipality not found',
        fatal: true
    })
}

const { data: municipalityData, pending: municipalityPending } = <IUseFetchResponse<IMunicipality>>await useAsyncData('municipality', async () => {
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
            departament: municipalityData.value.departament.depname,
            isocode: municipalityData.value.departament.isocode,
            zone: municipalityData.value.departament.zone.zonename
        }
    ]
}
</script>
<template>
    <AppNarrowContent>
        <div class="grid grid-cols-1 lg:grid-cols-12">
            <div class="lg:col-span-3"></div>
            <div class="lg:col-span-6">
                <AppContentContainer>
                    <template #title>
                        {{ municipalityData?.munname }}

                    </template>
                    <template #body>
                        <div class="px-3 mt-6">
                            <AppTable :header="dataTable.header" :body="dataTable.body" />
                        </div>
                    </template>
                </AppContentContainer>
            </div>
            <div class="lg:col-span-3"></div>
        </div>
    </AppNarrowContent>
</template>
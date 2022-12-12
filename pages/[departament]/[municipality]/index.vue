<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code';
const {params: {departament: departamentParam, municipality: municipalityParam}} = useRoute()
const {public: {fetchUri}} = useRuntimeConfig()

const [departament] = Object.values<{
    name: string,
    municipalities: Object
}>(elSalvadorCode).filter( (val:any) => val.name.toLowerCase() == departamentParam.toString().toLowerCase().split('-').join(' '))

if(departament === undefined) {
    showError({ statusCode: 404, statusMessage: 'Error' })
}
const [municipality] :string[] = Object.values(departament.municipalities).filter( (val: string) => val.toLowerCase() == municipalityParam.toString().toLowerCase().split('-').join(' ') )

if(municipality === undefined) {
    showError({ statusCode: 404, statusMessage: 'Error' })
}

const {data: municipalityData , error: municipalityError, pending: municipalityPending}  = await useAsyncData('municipality', async () => {
    if(useSecureParams(municipality)) {
        return $fetch(`${fetchUri}/municipalities/${municipality}`)
    }
})

if(municipalityError.value) {
    showError({ statusCode: 404, statusMessage: 'Error' })
}


</script>
<template>
    <AppNarrowContent>
        <AppProse>
            <h1 class="text-center break-words">
                {{ municipalityData?.munname }}
            </h1>
        </AppProse>
        <AppEmptyContainer />
        <AppImageGallery/>
    </AppNarrowContent>
</template>
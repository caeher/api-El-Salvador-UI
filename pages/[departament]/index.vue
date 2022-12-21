<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code'
import IDepartament from '~~/ts/interfaces/Departament'
import { AsyncData } from '#app';
import { IZone } from '~~/ts/interfaces/Zone';

const { params: { departament } } = useRoute()
const router = useRouter()
const isComponent = ref(false)
let asyncComponent: any
const { public: { fetchUri } } = useRuntimeConfig()

if (!departament) {
    throw createError({
        statusCode: 404,
        message: 'Not found',
        fatal: true
    })
} else {
    asyncComponent = defineAsyncComponent(() => {
        return import(`../../components/map/SV/${useComponentParse(departament.toString())}.vue`)
    })
    isComponent.value = true
}

function routerMap(maps: string | null) {
    if (maps) {
        const slvCodeValue = Object.values(elSalvadorCode)
        const dep: any[] = slvCodeValue.filter((val: any) => val.municipalities[maps] !== undefined)
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

const { data: departamentData, refresh: departamentRefresh, pending: departamentPending } = <AsyncData<IDepartament, Error>>await useAsyncData('departaments', async () => {
    if (useSecureParams(departament.toString())) {
        return $fetch(`${fetchUri}/departaments/${departament.toString().split('-').join(' ')}`)

    }
})

if (departamentData.value == undefined) {
    throw createError({
        statusCode: 404,
        message: 'Not found',
        fatal: true
    })
}

// Zone request
const { data: zoneData, error: zoneError, pending: zonePeding } = <AsyncData<IZone, Error>>await useAsyncData('zone', async () => {
    return $fetch(`${fetchUri}/zones/${departamentData.value?.zone.zonename}`)
})

// Scrapper request
const { data: scrapperData, error: scrapperError, pending: scrapperPending } = <AsyncData<{ summary: string } & any, Error>>await useAsyncData('scrapper', async () => {
    let depScrapper: string = departament.toString().trim()
    if (depScrapper.includes('-')) {
        depScrapper = depScrapper.split('-').join('_')
    }
    if (depScrapper.includes(' ')) {
        depScrapper = depScrapper.split(' ').join('_')
    }
    return $fetch(`${fetchUri}/scraper/${depScrapper}`)
})

// Fill table data

const dataTable: { header: string[], body: object[] } = { header: [], body: [] }
if (departamentData.value) {
    dataTable.header.push(...['Municipio', 'ZIP Code'])

    const scrapperKeys = Object.keys(scrapperData.value)

    dataTable.body.push(
        ...departamentData.value?.muns.map((mun: { munname: string }) => {
            let scraperKeySelect: string = ''
            let normalizeMun: string = mun.munname.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            for (let i = 0; i < scrapperKeys.length; i++) {
                scraperKeySelect = ''
                let isIn: boolean = false
                let munAux = scrapperKeys[i].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ')
                munAux.forEach(word => {
                    if (normalizeMun.includes(word)) {
                        isIn = true
                    } else {
                        isIn = false
                    }
                })
                if (isIn) {
                    scraperKeySelect = scrapperKeys[i]
                    break
                }
            }
            return {
                munname: mun.munname,
                zip_code: scraperKeySelect != '' ? scrapperData.value[scraperKeySelect] : ''
            }
        })
    )
}


</script>
<template>
    <div>
        <AppNarrowContent>
            <AppProse class="mx-auto">
                <template v-if="isComponent">
                    <component :is="asyncComponent" class="w-full" @maps="routerMap">
                    </component>
                </template>
            </AppProse>

            <div class="grid items-start grid-flow-dense grid-rows-1 grid-cols-1 lg:grid-cols-12 mt-24 gap-3">
                <div class="lg:col-span-3"></div>
                <div class="lg:col-span-6">
                    <AppContentContainer>
                        <template #title>
                            {{ departamentData?.depname }}
                        </template>
                        <template #body>
                            <AppProse class="mx-auto">
                                <p>{{ scrapperData['Summary'] }}</p>
                            </AppProse>
                            <div class="px-3">
                                <template v-if="dataTable.header.length > 0">
                                    <AppTable :header="dataTable.header" :body="dataTable.body" />
                                </template>
                            </div>
                        </template>
                    </AppContentContainer>
                </div>
                <div class="lg:col-span-3 sticky top-20">
                    <div class="">
                        <div class="bg-white dark:bg-slate-900 drop-shadow rounded-lg p-3">
                            <h2 class="text-4xl font-bold text-center pb-3">{{ zoneData?.zonename }}</h2>
                            <hr>
                            <p class="pt-3">Otros departamentos en esta zona</p>
                            <ul role="list" class="divide-y divide-gray-200">
                                <li 
                                    v-for="(dep, index) in zoneData?.departaments"
                                    :key="`zone-${index}`">
                                    <NuxtLink class="px-4 py-4 sm:px-0 flex justify-between" :href="`${dep.depname.toLowerCase().split(' ').join('-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`">
                                        {{  dep.depname }}
                                        <AppBadge>
                                            {{  dep.muns.length }}
                                        </AppBadge>
                                    </NuxtLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </AppNarrowContent>
    </div>
</template>
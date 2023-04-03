<script setup lang="ts">
import { elSalvadorCode } from '~~/utils/el-salvador-code'
import {Modal, Toast} from '~~/utils/sweetalert'

const router = useRouter()
const {public: {baseURL}} = useRuntimeConfig()

/**
 * Modal de confirmación de redirección
 * @param maps 
 */
function beforeRouterMap(maps: string | null) {
    if (maps) {
        const p = elSalvadorCode[maps].name
        Modal.fire({
            title: p,
            footer: 'Esta a punto de ser redirigido al departamento',
            imageUrl: baseURL + elSalvadorCode[maps].image,
            showCloseButton: false,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!'
        }).then((result) => {
            if(result.isConfirmed) {
                routerMap(p)
            } else if(result.isDenied || result.isDismissed) {
                Toast.fire({
                    title: 'Acción cancelada',
                    icon: 'info'
                })
            }
        }).catch((error) => {
            routerMap("/");
        })
    }
}
/**
 * Elimina los acentos y espacios en blanco y redirige
 * @param maps 
 */
function routerMap(maps: string) {
    console.log(maps)
    let p = maps.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    if (useSecureParams(p)) {
        p = p.toLowerCase().split(' ').join('-')
        router.push({
            path: `/map/${p}`
        })
    }

}

const departaments = Object.values(elSalvadorCode).map((dep: any) => {
    return {
        name: dep.name,
        municipalities_cout: Object.keys(dep.municipalities).length
    }
})


definePageMeta({
    layout: 'ui'
});

</script>
<template>
    <div>
        <AppSimpleContent class="min-h-screen">
            <AppProse>
                <h1 class="text-center">
                    El Salvador
                </h1>
                <MapElSalvador @maps="beforeRouterMap" class="w-full"></MapElSalvador>

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
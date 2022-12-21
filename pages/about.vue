<script setup lang="ts">
import { teams } from '~~/utils/teams';
</script>
<template>
    <div class="min-h-screen">
        <AppSimpleContent>
            <AppProse>
                <h1 class="text-center">Acerca de nosotros</h1>
                <p>Api El Salvador es una iniciativa por parte de estudiantes de Ingeniería en Sistemas Informáticos modalidad en linea de la Universidad del El Salvador que pretende convertirse en una recopilacion de datos de El Salvador.</p>
                <h2>Front End</h2>
                <p>Es la parte de la interfaz de usuario lo que permite la navegación y visualización de todos los datos aquí recopilados</p>
                <p>Para realizarlo se eligió <a href="https://nuxt.com/" target="_blank">NuxtJs</a>, un potente framework basado en Vuejs que permite la creacion de aplicaciones web multi-render por lo que si en un futuro se quire escala a algo m[as grande se podrá hacer creando nuevos nuxtModule</p>
                <h2>Back End</h2>
                ---

                <h2>Colaboración</h2>
                <p>Si deseas colaborar en este proyecto eres bienvenido, por favor leer esta seccion <NuxtLink href="/colaborate">colaborate</NuxtLink></p>
            </AppProse>
        </AppSimpleContent>
        <AppOurTeam :team-group="teams"/>
    </div>
</template>
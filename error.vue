<script setup>
const props = defineProps({
    error: Object
})
const errorHandler = () => clearError({ redirect: '/' })
console.log(props.error)
</script>
<template>
    <div>
        <AppNavbar />
        <div class="min-h-screen px-3 sm:px-12 md:px-24 lg:px-32 xl:px-40 py-24">
            <AppSimpleContent>
                <AppProse>
                    <div class="relative text-blue-900">
                        <AppError class="" />
                        <div class="absolute 
                        sm:inset-y-1/3 sm:inset-x-1/3 sm:top-36
                        inset-y-1/4 inset-x-1/4
                        ">
                            <h1 class="
                        text-5xl sm:text-9xl text-center font-bold
                        bg-clip-text text-transparent bg-gradient-to-r
                        from-blue-500 via-white to-blue-500
                        ">
                                {{ error.statusCode }}
                            </h1>
                        </div>
                        <div class="mt-12">
                            <p class="text-3xl text-center">
                                {{ error.message }}
                            </p>
                        </div>
                        <div class="mt-12">
                            <div class="flex justify-center">
                                <div class="w-full sm:w-1/4">
                                    <AppButton class="w-full" type="info" @click="errorHandler">
                                        Go Home
                                    </AppButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppProse>
            </AppSimpleContent>
        </div>
        <AppSpeedDial />
        <AppFooter />
    </div>
</template>
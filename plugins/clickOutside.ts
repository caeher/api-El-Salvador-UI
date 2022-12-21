export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {

        mounted(el, binding, vnode) {
            el.clickOutsideEvent = function (event: Event) {
                event.stopPropagation()
                if (!(el === event.target || el.contains(event.target))) {
                    if(binding.value instanceof Function) {
                        binding.value(event, el)
                    }
                }
            };
            document.body.addEventListener('click', el.clickOutsideEvent)
        },

        unmounted(el) {
            document.body.removeEventListener('click', el.clickOutsideEvent)
        }

    })
})

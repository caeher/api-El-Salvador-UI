<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const { public: { navbar } } = useRuntimeConfig()

const route = useRoute()


onMounted(() => {
  // This codeblock looking the current tab active in the navbar
  if(navbar) {
    for(let i = 0; i < navbar.length; i++) {
      if (route.path === navbar[i].path) {
        navbar[i].current = true
      } else {
        navbar[i].current = false
      }
    }
  }
})

watch(() => route.path, () => {
  // This codeblock looking the current tab active in the navbar
  if(navbar) {
    for(let i = 0; i < navbar.length; i++) {
      if (route.path === navbar[i].path) {
        navbar[i].current = true
      } else {
        navbar[i].current = false
      }
    }
  }
})

</script>
<template>
  <Disclosure as="nav" class="bg-white dark:bg-black border-b border-gray-50 dark:border-gray-900 shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex px-2 lg:px-0">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink href="/" class="text-black dark:text-white">Maquilishuat</NuxtLink>
          </div>
          <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
            <template v-for="item in navbar" :key="item.path">
              <NuxtLink
                class="dark:text-gray-300"
                :class="[item.current ? 'inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900' : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700']"
                :href="item.path">
                {{ item.name }}
              </NuxtLink>
            </template>
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        
      </div>
    </div>

    <DisclosurePanel class="lg:hidden dark:bg-black">
      <div class="space-y-1 pt-2 pb-3">
        <template v-for="item in navbar" :key="item.path">
          <DisclosureButton as="div">
            <NuxtLink
              class="dark:text-gray-300"
              :class="[item.current ? 'block border-l-4 border-indigo-500 bg-indigo-50 dark:bg-gray-800 py-2 pl-3 pr-4 text-base font-medium text-indigo-700' : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 dark:bg-dark hover:text-gray-800']"
              :href="item.path">
              {{ item.name }}
            </NuxtLink>
          </DisclosureButton>
        </template>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>


<style scoped></style>

<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<string>,
    required: false,
    default: 'main'
  },
  icon: {
    type: String as PropType<string>,
      required: false,
      default: null
  }
})

const typeC = computed(() => {
  return props.type;
})

const isIcon = computed(() => {
  return props.icon ? true : false
})
</script>

<template>
  <span class="badge" :class="[typeC]">
    <slot />
  </span>
</template>

<style scoped lang="postcss">
.badge {
  @apply px-5 py-0.5 rounded-full shadow;
  &.main {
    @apply bg-fuchsia-200 hover:bg-fuchsia-300 text-fuchsia-700;
  }
  &.danger {
    @apply bg-rose-200 hover:bg-rose-300 text-rose-700;
  }
  &.info {
    @apply bg-indigo-200 hover:bg-indigo-300 text-indigo-700;
  }
  &.success {
    @apply bg-emerald-200 hover:bg-emerald-300 text-emerald-700;
  }
  &.warning {
    @apply bg-amber-200 hover:bg-amber-300 text-amber-700;
  }
}
</style>

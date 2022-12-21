<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
  tag: {
    type: String as PropType<string>,
    required: false,
    default: 'button'
  },
  type: {
    type: String as PropType<string>,
    required: false,
    default: 'main'
  },
  nativeType: {
    type: String as PropType<string>,
    required: false,
    default: null
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

const isNativeType = computed(() => {
  return props.nativeType ? true : false
})

const isIcon = computed(() => {
  return props.icon ? true : false
})
</script>

<template>
  <template v-if="!isNativeType">
    <component 
      :is="tag" 
      class="btn" 
      :class="[
        typeC
      ]" 
      v-bind="$attrs">
      <template v-if="isIcon">
        
      </template>
      <slot />
    </component>
  </template>
  <template v-else>
    <component 
      :is="tag" 
      class="btn" 
      :class="[
        typeC
      ]" 
      :type="nativeType"
      v-bind="$attrs">
      <slot />
    </component>
  </template>
</template>

<style scoped lang="postcss">
.btn {
  @apply px-5 py-2 rounded-lg shadow;
  @apply cursor-pointer;
  @apply ring ring-offset-1 ring-offset-transparent focus:ring-offset-white ring-transparent;
  &.main {
    @apply bg-fuchsia-500 hover:bg-fuchsia-600 text-white;
    @apply focus:ring-fuchsia-400 active:ring-fuchsia-300;
  }
  &.danger {
    @apply bg-rose-500 hover:bg-rose-600 text-white;
    @apply focus:ring-rose-400 active:ring-rose-300;
  }
  &.info {
    @apply bg-indigo-500 hover:bg-indigo-600 text-white;
    @apply focus:ring-indigo-400 active:ring-indigo-300;
  }
  &.success {
    @apply bg-emerald-500 hover:bg-emerald-600 text-white;
    @apply focus:ring-emerald-400 active:ring-emerald-300;
  }
  &.warning {
    @apply bg-amber-500 hover:bg-amber-600 text-white;
    @apply focus:ring-amber-400 active:ring-amber-300;
  }
}
</style>

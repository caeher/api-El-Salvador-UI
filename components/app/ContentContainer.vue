<script lang="ts" setup></script>

<template>
  <div class="bg-white dark:bg-slate-900 drop-shadow rounded-lg px-3 pb-3 pt-12 relative lg:col-span-6">
    <div class="absolute inset-x-0 -top-12">
      <div class="mx-6 p-6 bg-blue-500 rounded-lg">
        <h1 class="text-center text-white text-4xl md:text-5xl font-bold">
          <slot name="title" />
        </h1>
      </div>
    </div>
    <slot name="body" />
  </div>
</template>

<style scoped>

</style>

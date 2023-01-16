<script lang="ts" setup></script>

<template>
  <div class="rounded-lg pb-3 pt-12 relative">
    <div class="absolute inset-x-0 -top-12">
      <div class="p-6 rounded-xl mq-border">
        <h1 class="uppercase mq-clip-text text-center text-4xl md:text-5xl font-bold">
          <slot name="title" />
        </h1>
      </div>
    </div>
    <slot name="body" />
  </div>
</template>

<style scoped>

</style>

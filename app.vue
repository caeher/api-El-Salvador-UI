<template>
  <NuxtLayout>
    <NuxtPage />
    <AppSpeedDial />
  </NuxtLayout>
</template>

<style lang="postcss">
html, body {
  @apply h-full;
  /* @apply bg-gradient-to-tr */
}
body {
  /* @apply bg-slate-100 dark:bg-slate-900/95; */
  @apply dark:bg-gradient-to-l dark:from-black dark:via-gray-900 dark:to-black
}
</style>

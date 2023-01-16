<script lang="ts" setup>

const logContent = (doc: any) => {
  console.log(doc)
}

const { public: { baseURL } } = useRuntimeConfig()

definePageMeta({
  layout: 'ui'
})
</script>

<template>
  <div class="min-h-screen">
    <div class="">
      <UiContent title="">
        <ContentDoc>
          <template #not-found>
            <h1>Document not found</h1>
          </template>
        </ContentDoc>
      </UiContent>
    </div>
  </div>
</template>

<style scoped>

</style>

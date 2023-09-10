<script lang="ts" setup>
const config = useRuntimeConfig();
const route = useRoute();
const { data: item, pending, error, refresh } = await useLazyAsyncData(
  "blogDetails",
  () =>
    $fetch(`/api/api.php/records/blog/${route.params.id}`, {
      baseURL: config.public.apiUrlBitu,
      headers: { "x-api-key": config.public.apiKeyBitu },
    })
);
</script>

<template>
  <NuxtLayout>
    <div v-if="pending">loading...</div>
    <div v-else>
      <img
        :src="`${config.public.apiUrlBitu}/assets/uploads/images/blog/${item.acak}-1.jpg`"
      />
      <h1 class="text-3xl">{{ item.nama }}</h1>
      <p v-html="item.ktrg"></p>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>

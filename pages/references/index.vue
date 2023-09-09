<script lang="ts" setup>
useHead({ title: "References" });
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrlBitu;
const {
  data: list,
  error,
  pending,
  refresh,
} = await useLazyAsyncData("reference", () =>
  $fetch(`/api/api.php/records/reference`, {
    baseURL: config.public.apiUrlBitu,
    headers: {
      "x-api-key": config.public.apiKeyBitu,
    },
  })
);
</script>

<template>
  <NuxtLayout>
    <div v-if="pending">loading...</div>
    <div
      v-else
      v-for="(item, index) in list.records"
      :key="index"
      v-text="item.nama"
    ></div>
  </NuxtLayout>
</template>

<style scoped></style>

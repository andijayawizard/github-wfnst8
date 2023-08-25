<script lang="ts" setup>
useHead({ title: "Our Services" });
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrlBitu;
const params = "/api/api.php/records/services?filter=pub,eq,1";
const {
  data: list,
  error,
  pending,
  refresh,
} = await useLazyAsyncData("services", () =>
  $fetch(`${apiUrl}${params}`, {
    headers: {
      "x-api-key": config.public.apiKeyBitu,
    },
  })
);
</script>

<template>
  <NuxtLayout>
    <Features />
  </NuxtLayout>
</template>

<style scoped></style>

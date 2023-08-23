<script lang="ts" setup>
const config = useRuntimeConfig();
const route = useRoute();
const { data: item, pending } = await useFetch(
  `${config.public.apiUrlBitu}/api/api.php/records/services/${route.params.id}`,
  {
    headers: {
      "x-api-key": config.public.apiKeyBitu,
    },
  }
);
useHead({
  // titleTemplate: (item) => `${item.nama}`,
  title: "Service Details",
});
</script>

<template>
  <NuxtLayout>
    <div v-if="pending">loading...</div>
    <div v-else>
      <img
        :src="`${config.public.apiUrlBitu}/assets/uploads/images/services/${item.acak}-1.jpg`"
      />
      <h1 class="text-3xl">{{ item.nama }}</h1>
      <p v-html="item.ktrg"></p>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>

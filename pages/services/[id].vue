<template>
  <div v-if="pending">loading...</div>
  <div v-else>
    <img
      :src="`${config.public.apiUrlBitu}/assets/uploads/images/services/${item.acak}-1.jpg`"
    />
    <h1 class="text-3xl">{{ item.nama }}</h1>
    <p v-html="item.ktrg"></p>
  </div>
</template>
<script setup>
useHead({
  title: "Blog Details",
});
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
</script>

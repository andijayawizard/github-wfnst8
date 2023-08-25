<script lang="ts" setup>
const config = useRuntimeConfig();
const { data: list, pending } = await useFetch(
  `${config.public.apiUrlBitu}/api/api.php/records/projects`,
  {
    headers: {
      "x-api-key": config.public.apiKeyBitu,
    },
  }
);
</script>

<template>
  <div v-if="pending">please wait, loading...</div>
  <div
    v-for="(item, index) in list.records"
    :key="index"
    class="max-w-sm w-1/2 rounded overflow-hidden shadow-lg m-2"
  >
    <img
      class="w-full"
      :src="`${config.public.apiUrlBitu}/assets/uploads/images/projects/${item.acak}-1.jpg`"
      :alt="item.nama"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ item.nama }}</div>
      <p class="text-gray-700 text-base">
        {{ item.rgks }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#photography</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#travel</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#winter</span
      >
    </div>
  </div>
</template>

<style scoped></style>

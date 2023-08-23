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
    <div v-if="pending">loading...</div>
    <div v-else class="flex flex-wrap">
      <div
        v-for="(item, index) in list.records"
        :key="index"
        class="max-w-sm rounded overflow-hidden shadow-lg m-2"
      >
        <img
          class="w-full"
          :src="`${apiUrl}/assets/uploads/images/services/${item.acak}-1.jpg`"
          :alt="item.nama"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <NuxtLink :to="`/services/${item.id}`">{{ item.nama }}</NuxtLink>
          </div>
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
    </div>
  </NuxtLayout>
</template>

<style scoped></style>

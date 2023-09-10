<script lang="ts" setup>
useHead({ title: "Read Our Blog" });
const config = useRuntimeConfig();
const apiUrlLocal = config.public.apiUrlLocal;
// const params = "/api/blogs";
const params = "/api/api.php/records/blog?filter=pub,eq,1&page=1,10";
const { data: list, error, pending, refresh } = await useLazyAsyncData("blog", () =>
  $fetch(`${params}`, {
    method: "GET",
    baseURL: config.public.apiUrlBitu,
    headers: {
      "x-api-key": config.public.apiKeyBitu,
    },
    pick: ["id"],
  })
);
</script>

<template>
  <NuxtLayout>
    <div v-if="pending">loading...</div>
    <div v-else>
      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in list.records"
          :key="index"
          class="max-w-sm w-1/2 rounded overflow-hidden shadow-lg m-2"
        >
          <!-- <img
            class="w-full"
            :src="`${apiUrl}/assets/uploads/images/blog/${item.acak}-1.jpg`"
            :alt="item.nama"
          /> -->
          <NuxtLink :to="`/blog/${item.id}`">
            <img
              class="w-full"
              :src="`${config.public.apiUrlBitu}/assets/uploads/images/blog/${item.acak}-1.jpg`"
              :alt="item.nama"
            />
          </NuxtLink>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2" v-text="item.nama"></div>
            <p class="text-gray-700 text-base" v-text="item.rgks"></p>
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
    </div>
  </NuxtLayout>
</template>

<style scoped></style>

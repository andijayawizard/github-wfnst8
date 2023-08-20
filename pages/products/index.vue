<template>
  <h1 class="text-3xl">our qualified products</h1>
  <div>this is the products page</div>
  <!-- page visits: {{ count }} -->
  <div v-if="pending">loading...</div>
  <div v-else>
    <div class="flex flex-wrap">
      <div v-for="item in list.records" :key="item.id" class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="`${apiUrl}/assets/uploads/images/products/${item.acak}-1.jpg`" :alt="item.nama">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{item.nama}}</div>
          <p class="text-gray-700 text-base">
            {{item.rgks}}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const config=useRuntimeConfig()
const apiUrl=config.public.apiUrlBitu
// const apiUrl='https://api.roastandbrew.coffee'
const search = ref('');
const page = ref(1);
// const params='/api/v1/cafes'
const params='/api/api.php/records/products?filter=pub,eq,1'

const { data: list, error } = await useAsyncData(
  'cafes',
  () => $fetch( `${params}`, {
    method: 'GET',
    baseURL: `${apiUrl}`,
    params: {
      page: page.value,
      search: search.value,
    },
    headers: {
      'x-api-key': config.public.apiKeyBitu
    }
  } ), {
    watch: [
      page,
      search
    ]
  }
);
</script>
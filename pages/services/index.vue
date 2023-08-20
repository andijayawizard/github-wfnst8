<template>
  <h1 class="text-3xl">Our Services</h1>
  <div v-if="pending">loading...</div>
  <div v-else class="flex flex-wrap">
    <div v-for="item in list.records" :key="item.id" class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="`${apiUrl}/assets/uploads/images/services/${item.acak}-1.jpg`" :alt="item.nama">
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

</template>

<script setup>
  const config=useRuntimeConfig()
  const apiUrl=config.public.apiUrlBitu
  const params='/api/api.php/records/services?filter=pub,eq,1'
  const {data: list, error, pending, refresh}=await useLazyFetch(`${apiUrl}${params}`, {
    headers: {
      'x-api-key': config.public.apiKeyBitu
    }
  })
</script>
<template>
  <h1 class="text-3xl">blog</h1>
  <p>read our interested blog</p>
  <div v-if="pending">loading...</div>
  <div v-else>
    <div class="flex flex-wrap">
      <div v-for="item in list.records" :key="item.id" class="max-w-sm w-1/2 rounded overflow-hidden shadow-lg m-2">
        <img class="w-full" :src="`${apiUrl}/assets/uploads/images/blog/${item.acak}-1.jpg`" :alt="item.nama">
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
  const params='/api/api.php/records/blog?filter=pub,eq,1&page=1,10'
  const {data: list, error, pending, refresh}=await useLazyAsyncData('blog', ()=>$fetch(`${params}`, {
    method: 'GET',
    baseURL: `${apiUrl}`,
    headers: {
      'x-api-key': config.public.apiKeyBitu
    },
    pick: ['id']
  }))
  // const {data: list, pending}=await useLazyFetch(`${apiUrl}${params}`, {
  //   headers: {
  //     'x-api-key': config.public.apiKeyBitu
  //   },
  // })
  // console.log(data)
</script>
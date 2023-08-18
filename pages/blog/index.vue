<template>
  <h1 class="text-3xl">blog</h1>
  <p>read our interested blog</p>
  <p>base url: {{apiUrl}}</p>
  <div v-if="pending">loading...</div>
  <div v-else>
    <div class="py-2 hover:text-indigo-300" v-for="item in list" :key="item.id" v-text="item.title"></div>
  </div>
</template>
<script setup>
  const config=useRuntimeConfig()
  const apiUrl=config.public.API_BASE_URL
  const {data: list, error, pending, refresh}=await useFetch(`${apiUrl}/products`, {
    lazy: true,
    headers: {
      'x-api-key': config.private.API_KEY
    }
  })
  // const {data: list, pending}=await useFetch(`${apiUrl}/products`, {
  //   headers: {
  //     'x-api-key': process.env.API_KEY
  //   },
  //   lazy: true
  // })
  // console.log(data)
</script>
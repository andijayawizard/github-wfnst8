<template>
  <h1 class="text-3xl">about us</h1>
  <div>
    <p v-if="pending">loading...</p>
    <p v-else>{{ item.ktrg }}</p>
    </div>
</template>
<script setup>
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrlBitu
const {data: item, pending} = await useLazyAsyncData('about', ()=>$fetch(`${apiUrl}/api/api.php/records/menuweb/2`, {
  headers: {
    'x-api-key': config.public.apiKeyBitu
  }
}))
</script>
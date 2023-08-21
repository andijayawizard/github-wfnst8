<template>details services</template>
<script setup>
const config=useRuntimeConfig()
const apiUrl=config.public.apiUrlBitu
	const {data: item}=await useFetch(`${apiUrl}/api/api.php/services/${item.seo}`, {
		headers: {
			'x-api-key': config.public.apiKeyBitu
		}
	})
</script>
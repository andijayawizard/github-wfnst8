<template>
	<div>
		blog details
	</div>
</template>
<script setup>
useHead({
	title: 'Blog Details'
})
const config=useRuntimeConfig()
const route=useRoute()
	const {data: item}=await useFetch(`${config.public.apiUrlBitu}/api/api.php/records/services/${route.params.id}`, {
		headers: {
			'x-api-key': config.public.apiKeyBitu
		}
	})
</script>
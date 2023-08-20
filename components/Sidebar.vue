<template>
<div v-if="pending">loading...</div>
<div v-else>
	<ul class="flex sm:flex-col overflow-hidden content-center justify-between">
		<li v-for="(item, index) in list.records" :key="index" class="py-2 hover:bg-indigo-300 rounded">
			<NuxtLink :to="`/${item.seo}`">
				<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
				<span class="hidden sm:inline">{{item.caption}}</span>
			</NuxtLink>
		</li>
	</ul>
</div>
</template>
<script setup>
const config=useRuntimeConfig()
const apiUrl=config.public.apiUrlBitu
const params='/api/api.php/records/menuweb?filter=pub,eq,1'
const {data: list, pending}=await useLazyFetch(`${apiUrl}${params}`, {
	headers: {
		'x-api-key': config.public.apiKeyBitu
	}
})
const images={
	number: {
	0: 'home',
	1: 'cog',
	2: 'gift',
	3: 'chart-bar',
	4: 'collection'

	}
}
</script>
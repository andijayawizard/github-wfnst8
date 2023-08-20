<template>
<div v-if="pending">loading...</div>
<div v-else>
	<ul class="flex sm:flex-col overflow-hidden content-center justify-between">
		<li v-for="item in list.records" :key="item.id" class="py-2 hover:bg-indigo-300 rounded">
			<NuxtLink :to="`/${item.seo}`">
				<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
				<span class="hidden sm:inline">{{item.caption}}</span>
			</NuxtLink>
		</li>
		<li class="py-2 hover:bg-indigo-300 rounded">
				<a class="truncate" href="#">
						<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/cog.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Settings</span>
				</a>
		</li>
		<li class="py-2 hover:bg-indigo-300 rounded">
				<a class="" href="#">
						<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/gift.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Products</span>
				</a>
		</li>
		<li class="py-2 hover:bg-indigo-300 rounded">
				<a class="" href="#">
						<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/chart-bar.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Reports</span>
				</a>
		</li>
		<li class="py-2 hover:bg-indigo-300 rounded">
				<a class="" href="#">
						<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/collection.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Integrations</span>
				</a>
		</li>
	</ul>
</div>
</template>
<script setup>
const config=useRuntimeConfig()
const apiUrl=config.public.apiUrlBitu
const params='/api/api.php/records/menuweb'
const {data: list, pending}=await useLazyFetch(`${apiUrl}${params}`, {
	headers: {
		'x-api-key': config.public.apiKeyBitu
	}
})
</script>
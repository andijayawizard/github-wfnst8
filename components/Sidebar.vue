<template>
	<ul class="flex sm:flex-col overflow-hidden content-center justify-between">
		<li class="py-2 hover:bg-indigo-300 rounded">
			<NuxtLink to="/">
				<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
						<span class="hidden sm:inline">Home</span>
			</NuxtLink>
		</li>
		<li class="py-2 hover:bg-indigo-300 rounded">
			<NuxtLink to="/about-us">
				<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
						<span class="hidden sm:inline">About Us</span>
			</NuxtLink>
		</li>
		<li class="py-2 hover:bg-indigo-300 rounded">
			<NuxtLink to="/products">
				<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
						<span class="hidden sm:inline">Products</span>
			</NuxtLink>
		</li>
		<li class="py-2 hover:bg-indigo-300 rounded">
			<NuxtLink to="/services">
				<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
						<span class="hidden sm:inline">Services</span>
			</NuxtLink>
		</li>
		<li class="py-2 hover:bg-indigo-300 rounded">
			<NuxtLink to="/blog">
				<img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
						<span class="hidden sm:inline">Blog</span>
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
</template>
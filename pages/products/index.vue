<template>
  <h1 class="text-3xl">our qualified products</h1>
  <div>this is the products page</div>
  <!-- page visits: {{ count }} -->
  <div v-if="pending">loading...</div>
  <div v-else>
    <div class="py-2 hover:text-indigo-300" v-for="cafe in cafes.data" :key="cafe.id" v-text="cafe.company.name+' - '+cafe.location_name"></div>
  </div>
</template>
<script setup>
const search = ref('');
const page = ref(1);

const { data: cafes, error } = await useAsyncData(
  'cafes',
  () => $fetch( `/api/v1/cafes`, {
    method: 'GET',
    baseURL: 'https://api.roastandbrew.coffee',
    params: {
      page: page.value,
      search: search.value,
    }
  } ), {
    watch: [
      page,
      search
    ]
  }
);
</script>
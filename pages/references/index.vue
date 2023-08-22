<template>
  <div>
    <h1 class="text-3xl">references</h1>
    <p>our references</p>
    <div v-if="pending">loading...</div>
    <div v-else>
      <div v-for="item in list.records">{{ item.nama }}</div>
    </div>
  </div>
</template>
<script>
const config = useRunfimeConfig();
const { data: list, pending } = await useAsyncData("references", () =>
  $fetch(`${config.public.apiUrlBitu}/api/api.php/records/references`, {
    headers: {
      "x-api-key": config.public.apiKeyBitu,
    },
  })
);
</script>

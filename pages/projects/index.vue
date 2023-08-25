<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
useHead({ title: "Our Projects" });
</script>

<template>
  <NuxtLayout>
    My Exist Projects
    <p>our new projects</p>
    <div class="flex flex-wrap">
      <ProjectCard />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>

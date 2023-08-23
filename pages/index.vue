<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
useHead({
  title: "Selamat datang di BituNuxt",
});
</script>

<template>
  <NuxtLayout>
    <div>
      <!-- <Hero /> -->
      <!-- ====== Features Section Start -->
      <Features />
      <!-- ====== Features Section End -->

      <!-- ====== About Section Start -->
      <About />
      <!-- ====== About Section End -->

      <!-- ====== Pricing Section Start -->
      <Pricing />
      <!-- ====== Pricing Section End -->

      <!-- ====== Faq Section Start -->
      <Faq />
      <!-- ====== Faq Section End -->

      <!-- ====== Testimonials Start ====== -->
      <Testimonials />
      <!-- ====== Testimonials End ====== -->

      <!-- ====== Team Section Start -->
      <Team />
      <!-- ====== Team Section End -->

      <!-- ====== Contact Start ====== -->
      <Contact />
      <!-- ====== Contact End ====== -->
    </div>
  </NuxtLayout>
</template>

<style scoped></style>

<template>
  <div class="fixed w-full h-full">
    <div class="container mx-auto px-4 py-8">
      <Header />
      <main class="mt-8">
        <nuxt />
      </main>
    </div>
    <Wave class="absolute bottom-0 left-0" style="z-index: -1" />
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header";
import Wave from "@/components/Wave";
export default {
  components: {
    Header,
    Wave,
  },
};
</script>

<style lang="scss" scoped>
</style>
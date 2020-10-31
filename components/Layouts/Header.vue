<template>
  <header class="flex items-center justify-between">
    <a href="">
      <h2 class="text-5xl font-bold uppercase flex items-center">
        <span class="heading-stroke" data-title="Nuxt Plyr"> Nuxt Plyr </span>
      </h2>
    </a>
    <a href="https://github.com/dyprast/nuxt-plyr" target="blank">
      <IconGithub />
    </a>
  </header>
</template>

<script>
import IconGithub from "@/components/Icons/Github";

export default {
  components: {
    IconGithub,
  },
};
</script>
<script >
import AppHeader from "../src/components/AppHeader.vue";

export default {
  name: 'App',
  components: {
    AppHeader,

  },
}

</script>

<template>
  <AppHeader></AppHeader>

  <RouterView></RouterView>
</template>

<style scoped>

</style>

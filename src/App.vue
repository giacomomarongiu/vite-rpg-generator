<script >
import AppHeader from "../src/components/AppHeader.vue";
import AppFooter from "../src/components/AppFooter.vue";


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter

  },
}

</script>

<template>
  <AppHeader></AppHeader>

  <RouterView></RouterView>

  <AppFooter></AppFooter>
</template>

<style scoped>

</style>

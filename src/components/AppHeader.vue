<script>
export default {
  name: "AppHeader",
}


</script>

<template>
  <nav class="bg-primary">
    <form class="container justify-content-end bg-primary">
      <RouterLink class="btn  btn-outline-dark border-0" :to="{ name: 'home' }">
        Home
      </RouterLink>
      <RouterLink class="btn  btn-outline-dark border-0" :to="{ name: 'blog' }">Blog
      </RouterLink>
      <RouterLink class="btn btn-outline-dark border-0" :to="{ name: 'characters' }">Characters
      </RouterLink>
    </form>
  </nav>
</template>

<style scoped>

</style>

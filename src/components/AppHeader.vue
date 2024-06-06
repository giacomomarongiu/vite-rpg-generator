<script>
export default {
  name: "AppHeader",
}


</script>

<template>
  <nav class="bg-dark text-warning">
    <form class="container justify-content-end bg-dark text-warning">
      <RouterLink class="btn btn-outline-dark border-0" :to="{ name: 'home' }">
        <img src="/public/logo.png" width="250px" alt="">
      </RouterLink>
      <RouterLink class="btn btn-outline-dark text-warning border-0" :to="{ name: 'hell' }">Blog
      </RouterLink>
      <RouterLink class="btn btn-outline-dark text-warning border-0" :to="{ name: 'characters' }">Characters
      </RouterLink>
    </form>
  </nav>
</template>

<style scoped></style>

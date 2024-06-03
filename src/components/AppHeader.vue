<script>
export default {
  name: "AppHeader",
}


</script>

<template>
  <div class="links d-flex justify-content-end">
    <nav class="navbar bg-transparent">
      <form class="container-fluid justify-content-end bg-transparent">
        <RouterLink class="btn border-0 btn-sm btn-outline-secondary bg-none text-decoration-none"
          :to="{ name: 'home' }">Home
        </RouterLink>
        <RouterLink class="btn border-0  btn-sm btn-outline-secondary bg-none text-decoration-none"
          :to="{ name: 'blog' }">Blog
        </RouterLink>
      </form>
    </nav>
  </div>
</template>

<style scoped>

</style>

<template>
  <div>
    <h1>Not Found</h1>
    <p>could not find any page that matches {{ $route.params.pathMatch }}</p>
  </div>
</template>

<script>
  export default {
    
    created() {
      setTimeout(() => {
        this.$router.replace('/')
      }, 3000)
    }
  }
</script>

<style lang="scss" scoped>

</style>
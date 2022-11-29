<template>
  <div>
    <h1>Details</h1>
    <!-- <h2>{{ $route.params.id }}</h2>
    <h2>{{ dataId }}</h2> -->
    <h2>{{ id }}</h2>
      <p>{{todo.title}}</p>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        dataId: this.$route.params.id,
        todo: null
      }
    },

    created() {
      // this.getProduct(this.$route.params.id)
      // this.getProduct(this.id)
      fetch('http://localhost:9999/api/todos/' + this.id)
        .then(response => response.json())
        .then(data => this.todo = data)
    }
  }
</script>

<style lang="scss" scoped>

</style>
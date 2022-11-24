<template>
  <header>
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'appHeader',
    props: ['title']
  }
</script>

<style scoped>
  header {
    background-color: rgb(62, 7, 105);
    color: #fff;
    padding: 1rem 0;
  }
</style>
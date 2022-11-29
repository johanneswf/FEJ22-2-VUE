<template>
  <footer class="footer">
    <div class="container d-flex">
      <p>Coyright &copy; {{ (new Date()).getFullYear() }} </p>
      <div>
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/about" class="link">About</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .footer {
    background-color: rgb(12, 60, 35);
    color: #fff;
    padding-block: 2rem;
  }
  .link {
    display: block;
  }
</style>
<template>
  <nav class="navbar">
    <div class="container d-flex">
      <h1>LOGO</h1>
      <ul class="d-flex">
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><RouterLink :to="{ name: 'about' }" class="link">About</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .navbar {
    background-color: rgb(12, 60, 35);
    color: #fff;
    padding: 1rem 0;
  }
  ul {
    list-style: none;
    gap: 1rem;
  }

  .router-link-active {
    text-decoration: underline;
  }
</style>
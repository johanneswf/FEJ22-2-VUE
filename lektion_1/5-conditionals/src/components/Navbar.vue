<template>
  <nav>
    <div class="container">
      <h1>LOGO</h1>
      <ul v-if="!isLoggedIn">
        <li><a href="#">Login</a></li>
        <li><a href="#">Register</a></li>
      </ul>
      <ul v-else>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['isLoggedIn']
  }
</script>

<style scoped>

  nav {
    background-color: rgb(63, 80, 35);
    color: #fff;
  }

  nav .container,
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    gap: 2rem;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  a:hover {
    background-color: #0000003d;
  }

</style>
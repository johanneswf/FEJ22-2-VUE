<template>
  <nav class="navbar">
    <div class="container">
      <h1>App title</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
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
    background-color: cadetblue;
  }

  .navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


</style>
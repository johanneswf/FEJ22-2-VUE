<template>
  <div>
    <h1>Home</h1>
    <!-- <RouterLink :to="`/details/${product.id}`" class="card"> -->
    <RouterLink to="/details/1" class="card">
      <h3>Produkt 1</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </RouterLink>
    <RouterLink to="/details/2" class="card">
      <h3>Produkt 2</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </RouterLink>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
  .card {
    text-decoration: none;
    color: #000;
    display: block;
    margin-block: 2rem;
    border: 1px solid #333;
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
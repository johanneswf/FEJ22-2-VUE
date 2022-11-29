<template>
  <div>
    <Navbar />
    <RouterView/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

  export default {
    components: { Navbar }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
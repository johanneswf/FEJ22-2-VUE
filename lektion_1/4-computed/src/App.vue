<template>
  <div>
    <Navbar />
    <Computed />
  </div>
</template>

<script>
import Computed from './components/Computed.vue';
import Navbar from './components/Navbar.vue';

  export default {
    components: { Computed, Navbar }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
     margin: 0 10%;
  }

</style>

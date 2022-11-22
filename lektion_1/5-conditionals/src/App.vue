<template>
  <Navbar :isLoggedIn="isLoggedIn" />
  <div class="container">
    <button @click="isLoggedIn = !isLoggedIn">{{isLoggedIn ? 'Logout' :'Login'}}</button>
    <FormError />
  </div>
</template>

<script>
import FormError from './components/FormError.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar, FormError },
  data() {
    return {
      isLoggedIn: false
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .mt-5 {
    margin-top: 2rem;
  }
</style>

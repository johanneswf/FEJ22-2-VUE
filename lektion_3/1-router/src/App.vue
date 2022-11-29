<template>
  <div class="app">
    <Navbar />
    <div class="container grow">
      <RouterView/>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import Navbar from './components/Navbar.vue';

  export default {
    components: { Navbar, AppFooter }
}
</script>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .grow {
    flex: 1;
  }
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
  .link {
    text-decoration: none;
    color: #fff;
  }
  .link:hover {
    color: #d9d9d9;
  }
</style>
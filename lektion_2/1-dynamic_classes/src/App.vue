<template>
  <Header :title="title" />
  <div class="container">
    <ExampleOne />
    <ExampleTwo />
  </div>
</template>

<script>
import ExampleOne from './components/ExampleOne.vue';
import ExampleTwo from './components/ExampleTwo.vue';
import Header from './components/Header.vue';
  export default {
    components: {
    Header,
    ExampleOne,
    ExampleTwo
},
    data() {
      return {
        title: 'Dynamiska klasser'
      }
    }
  }
</script>

<style>
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>
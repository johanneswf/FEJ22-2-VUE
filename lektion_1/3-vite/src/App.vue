<template>
  <p>{{ title }}</p>
  <p>{{ count }}</p>
  <button v-on:click="count++">öka</button>
  <button @click="count--">minska</button>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hej från Vue',
        count: 0
      }
    }
  }
</script>

<style>

</style>
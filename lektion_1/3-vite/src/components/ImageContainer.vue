<template>
  <div class="text-center p-3 border mt-5">
    <img @mouseover="handleMouseOver($event, 'hgej hjeh')" src="/assets/bild2.jpg" alt="bild" class="mb-4">
    <button @click="handleClick(5)" class="btn btn-primary">Knapp</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      handleMouseOver(e, hej) {
        console.log(e)
        console.log(hej)
      },
      handleClick(value) {
        console.log('hej')
        this.counter += value
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
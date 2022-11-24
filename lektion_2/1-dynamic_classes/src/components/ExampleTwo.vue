<template>
  <div>
    <button @click="active = !active">Toggle</button>
    <div class="output" :class="computedClasses">
      <h2>EN TEXT</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: false
      }
    },
    computed: {
      computedClasses() {
        return {
          border: this.active,
          'bg-dark': this.active,
          'text-white': this.active
        }
      }
    }
  }
</script>

<style scoped>
  .output {
    margin-top: 1rem;
    background-color: #e3e3e3;
    width: 300px;
    aspect-ratio: 1;
    padding: 1rem;
  }
  .border {
    border: 2px solid #000;
  }
  .bg-dark {
    background-color: #333333;
  }
  .text-white {
    color: #fff;
  }
</style>
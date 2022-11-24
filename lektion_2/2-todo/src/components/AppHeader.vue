<template>
  <div class="header">
    <h1>Todos By Joakim</h1>
    <select v-model="select" @change="$emit('sort', select)">
      <option value="">Show all</option>
      <option value="false">Show uncompleted</option>
      <option value="true">Show completed</option>
    </select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        select: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
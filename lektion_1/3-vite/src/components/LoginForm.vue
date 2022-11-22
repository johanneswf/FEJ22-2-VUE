<template>
  <form class="mt-4 border p-3" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Name:</label>
      <input type="text" id="name" @keyup="handleChange" ref="name" class="form-control">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password: </label>
      <input type="text" id="password" class="form-control" v-model="password">
    </div>
    <button class="btn btn-primary">Submit</button>
    <br>
    {{ password }}
    {{ name }}
  </form>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      handleChange(e) {
        // this.name = this.$refs.name.value
      },
      handleSubmit() {
        const user = {
          name: this.$refs.name.value,
          password: this.password
        }
        console.log(user)
        this.$refs.name.value = ''
        this.password = ''
        this.$refs.name.focus()
      }
    },
    created() {

    },
    updated() {
      console.log('form updated')
    },
    unmounted() {},
  }
</script>

<style lang="scss" scoped>

</style>
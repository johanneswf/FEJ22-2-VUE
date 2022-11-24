<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <p class="error">{{ error }}</p>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Add Todo" ref="titleInput" v-model="title">
      <button class="btn btn-primary">ADD</button>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        error: ''
      }
    },
    methods: {
      handleSubmit() {
        if(this.title.trim() === "") {
          this.error = 'You need to enter something'
          this.$refs.titleInput.focus()
          return
        }

        this.error = ''
        this.$emit('add-todo', this.title)
        this.title = ''
        this.$refs.titleInput.focus()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
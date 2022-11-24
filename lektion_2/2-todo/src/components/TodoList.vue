<template>
  <div class="output">
    <Todo v-for="todo in todos" :todo="todo" :key="todo.id" />
  </div>
</template>

<script>
import Todo from './Todo.vue';

  export default {
    components: { Todo },
    props: ['todos']
}
</script>

<style lang="scss" scoped>

</style>
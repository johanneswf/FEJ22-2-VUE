<template>
  <div class="todo">
    <p class="todo-title" :class="{done: todo.completed}">{{ todo.title }}</p>
    <button><i class="fa-solid fa-trash-can"></i></button>
  </div>
</template>

<script>
  export default {
    props: ['todo']
  }
</script>

<style scoped>
  .done {
    color: #a7a7a7;
    text-decoration: line-through;
  }
</style>
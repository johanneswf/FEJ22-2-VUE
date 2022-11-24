<template>
  <div class="output">
    <div v-if="todos.length">
      <TransitionGroup name="fade-slide">
        <Todo v-for="todo in todos" :todo="todo" :key="todo.id" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" />
      </TransitionGroup>
    </div>
    <p v-else>No todos to show</p>
  </div>
</template>

<script>
import Todo from './Todo.vue';

  export default {
    components: { Todo },
    props: ['todos']
}
</script>

<style scoped>
  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 500ms ease-out;
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateX(-40px);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }

</style>
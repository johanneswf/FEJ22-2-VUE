<template>
  <div class="output">
    <div v-if="todos.length">
      <TransitionGroup name="fade-slide">
        <div v-for="todo in todos" :key="todo.id">
          <Todo v-if="sort === ''" :todo="todo" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" />
          
          <Todo v-else-if="todo.completed === sort" :todo="todo" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" />
        </div>
      </TransitionGroup>
    </div>
    <p v-else>No todos to show</p>
  </div>
</template>

<script>
import Todo from './Todo.vue';

  export default {
    components: { Todo },
    props: ['todos', 'sort']
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
    transform: translateY(-40px);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }

</style>
<template>
  <div class="wrapper">
    <AppHeader />
    <TodoList :todos="todos" />
    <AddTodoForm @add-todo="handleAddTodo" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import TodoList from './components/TodoList.vue';
import AddTodoForm from './components/AddTodoForm.vue';

  export default {
    components: { 
      AppHeader,
      TodoList,
      AddTodoForm
    },
    data() {
      return {
        todos: [
          { id: 1, title: 'Todo Item One', completed: false },
          { id: 2, title: 'Todo Item Two', completed: true },
          { id: 3, title: 'Todo Item Three', completed: false },
          { id: 4, title: 'Todo Item Four', completed: true },
          { id: 5, title: 'Todo Item Five', completed: false }
        ]
      }
    },
    methods: {
      handleAddTodo(title) {
        const todo = {
          id: Date.now(),
          title,
          completed: false
        }
        this.todos.push(todo)
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
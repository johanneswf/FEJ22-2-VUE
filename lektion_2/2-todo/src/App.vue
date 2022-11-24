<template>
  <div class="wrapper">
    <AppHeader />
    <TodoList />
    <AddTodoForm />
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
    }
}
</script>

<style lang="scss" scoped>

</style>
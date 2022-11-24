<template>
  <div class="wrapper">
    <AppHeader @sort="sortTodos" />
    <TodoList :todos="sortedTodos" @toggle-complete="handleToggleComplete" @delete-todo="handleDeleteTodo" />
    <AddTodoForm @add-todo="handleAddTodo" />
  </div>
</template>

<script>
import axios from 'axios'
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
        todos: [],
        sort: '',
        apiUri: 'http://localhost:3000/todos'
      }
    },
    methods: {
      async fetchTodos() {
        const res = await axios.get(this.apiUri)
        this.todos = res.data
      },
      async handleAddTodo(title) {
        // const todo = {
        //   id: Date.now(),
        //   title,
        //   completed: false
        // }
        // this.todos.push(todo)
        try {
          const res = await axios.post(this.apiUri, { title, completed: false })
          if(res.status !== 201) {
            throw new Error(res.status, res.statusText);
          }
          this.todos.push(res.data)
        } catch (err) {
          console.log(err)
        }
      },
      sortTodos(val) {
        switch(val) {
          case 'false':
            this.sort = false
            break         
          case 'true':
            this.sort = true
            break
          default:
            this.sort = ''
        }
      },
      handleToggleComplete(todo) {
        todo.completed = !todo.completed
      },
      handleDeleteTodo(todo) {
        this.todos = this.todos.filter(_todo => _todo.id !== todo.id)
      }
    },
    computed: {
      sortedTodos() {
        if(this.sort === '') {
          return this.todos
        }
        return this.todos.filter(todo => todo.completed === this.sort)
      }
    },
    created() {
      this.fetchTodos()
    }
}
</script>

<style lang="scss" scoped>

</style>
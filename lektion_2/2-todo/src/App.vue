<template>
  <div class="wrapper">
    <AppHeader @sort="sortTodos" />
    <TodoList :sort="sort" :todos="todos" @toggle-complete="handleToggleComplete" @delete-todo="handleDeleteTodo" />
    <AddTodoForm @add-todo="handleAddTodo" />
    <Modal v-if="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import TodoList from './components/TodoList.vue';
import AddTodoForm from './components/AddTodoForm.vue';
import Modal from './components/Modal.vue';

  export default {
    components: { 
      AppHeader,
      TodoList,
      AddTodoForm,
      Modal
    },
    data() {
      return {
        todos: [],
        sort: '',
        apiUri: 'http://localhost:3000/todos/',
        showModal: false
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
      async handleToggleComplete(todo) {
        // todo.completed = !todo.completed
        try {
          const res = await axios.patch(this.apiUri + todo.id, { completed: !todo.completed} )
          if(res.status !== 200) {
            throw new Error(res.status, res.statusText)
          }
          todo.completed = !todo.completed
        } catch(err) {
          console.log(err)
        }
      },
      async handleDeleteTodo(todo) {
        // this.todos = this.todos.filter(_todo => _todo.id !== todo.id)
        if(!todo.completed) {
          // visa ett fel
          this.showModal = true
          return
        }
        try {
          const res = await axios.delete(this.apiUri + todo.id)
          if(res.status !== 200) {
            throw new Error(res.status, res.statusText)
          }
          this.todos = this.todos.filter(_todo => _todo.id !== todo.id)
          
        } catch (err) {
          
        }
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
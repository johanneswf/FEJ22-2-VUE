<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <h2 class="title">Create a new post</h2>

      <div class="form-group">
        <label for="title" class="form-label">Title: </label>
        <input type="text" class="form-control" id="title" v-model.trim="post.title">
        <p class="error" v-if="errors.title">Please enter a title</p>
      </div>

      <div class="form-group">
        <label for="imgUrl" class="form-label">Image URL: </label>
        <input type="text" class="form-control" id="imgUrl" v-model.trim="post.imgUrl">
        <p class="error" v-if="errors.imgUrl">Please enter an image url</p>
      </div>

      <!-- <div class="form-group">
        <label for="body" class="form-label">Content: </label>
        <textarea class="form-control" id="body" v-model.trim="post.body"></textarea>
        <p class="error" v-if="errors.body">Please enter some content</p>
      </div> -->
      <QuillEditor theme="snow" :toolbar="TOOLBAR_OPTIONS" ref="quill" />
      
      <p class="form-label">Categories: </p>
      <div class="form-group">

        <div class="input-group" v-for="(cat, index) in post.categories" :key="index">
          <input type="text" class="form-control" v-model.trim="post.categories[index]">
          <button @click="removeCategory(index)" type="button" class="btn"><i class="fa-solid fa-trash"></i></button>
        </div>


        <p class="error" v-if="errors.categories">Please enter atleast one category</p>
        <button type="button" class="btn btn-success" @click="addCategory">Add a category</button>

      </div>

      <div class="form-group">
        <label for="author" class="form-label">Author: </label>
        <select class="form-control" id="author" v-model="post.author">
          <option value="" selected disabled></option>
          <option v-for="author in authors" :key="author" :value="author">{{author}}</option>
        </select>
        <p class="error" v-if="errors.author">Please choose an author</p>
      </div>

      <button class="btn btn-primary">Create Post</button>
      
    </form>
    
  </div>
</template>

<script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css'

  const TOOLBAR_OPTIONS = [
    ['bold', 'italic', 'underline'],
    ['image'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
  ]

  const quill = ref(null)

  const router = useRouter()

  const post = ref({
    title: '',
    body: '',
    imgUrl: '',
    categories: [''],
    author: ''
  })
  const errors = ref({
    title: false,
    body: false,
    imgUrl: false,
    categories: false,
    author: false
  })
  const authors = ref(['Joakim', 'Hans', 'Jeanette', 'Johannes', 'Tommy'])

  const handleSubmit = async () => {
    
    // console.log(quill.value.getHTML())
    post.value.body = quill.value.getHTML()

    errors.value.title = !post.value.title ? true : false
    errors.value.body = !post.value.body ? true : false
    errors.value.imgUrl = !post.value.imgUrl ? true : false
    errors.value.author = !post.value.author ? true : false
    // if(!post.value.categories.length || !post.value.categories[0]) {
    if(!post.value.categories.length || post.value.categories.findIndex(t => t=='') !== -1) {
      errors.value.categories = true
    } else {
      errors.value.categories = false
    }


    // if(errors.value.title || errors.value.body || errors.value.imgUrl || errors.value.categories || errors.value.author) {
    //   console.log('fel i formuläret')
    //   return
    // }


    // NY KOD!
    /* det här kommer att göra om alla keys i ett objekt till en array, sen kollar jag bara om den  
      arrayen innehåller ett true värde. Så slipper man göra den långa if satsen som vi gjorde ovan
    */
    if(Object.values(errors.value).includes(true)) {
      console.log('fel i formuläret')
      return
    }

    const res = await axios.post('http://localhost:3000/posts', post.value)
    if(res.status === 201) {
      router.push({ name: 'home' })
    }

  }

  const addCategory = () => {
    post.value.categories.push('')
  }

  const removeCategory = (i) => {
    post.value.categories.splice(i, 1)
  }

</script>

<style scoped>
  .create {
    margin-bottom: 2rem;
  }
  .title {
    text-align: center;
    font-size: 1.8rem;
  }
  .form-group {
    margin-bottom: 2rem;
  }
  .form-label {
    display: block;
    margin-bottom: .5rem;
  }
  .form-control {
    width: 100%;
    display: block;
  }
  .error {
    font-size: .9rem;
    color: firebrick;
    margin-top: .4rem;
  }
  textarea {
    resize: none;
    height: 250px;
    overflow: auto;
  }
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .fa-trash {
    color: firebrick;
    font-size: 1.2rem;
  }
</style>
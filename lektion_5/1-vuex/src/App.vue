<template>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';



export default {
  name: 'App',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  created() {
    this.getPosts()
  }
}
</script>

<style>

</style>

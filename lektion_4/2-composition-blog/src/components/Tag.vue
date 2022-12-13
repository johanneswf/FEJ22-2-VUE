<template>
  <li @click="search(category)">{{ category }}</li>
</template>

<script setup>
import { useRouter } from 'vue-router';


  defineProps(['category'])
  const router = useRouter()

  const search = (category) => {
    router.push({ name: 'home', query: { searchQuery: category }})
  }
</script>

<style lang="scss" scoped>

</style>
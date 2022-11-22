<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <Card :imgUrl="image" title="Card 1" body=" Hej på dig" />
    <Card imgUrl="/assets/bild2.jpg" title=" Card 2" body=" lorem ipsum osv." />
    <Card imgUrl="https://images.unsplash.com/photo-1669090787997-1d7878a44be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
  </div>
</template>

<script>
import Card from './Card.vue';
import imgOne from '@/assets/bild1.jpg'
  export default {
    components: { Card },
    data() {
      return {
        image: imgOne
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
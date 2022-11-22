<template>
  <Header :title="title" />
  <div class="container mt-5">
    <!-- <CardDeck /> -->
    <!-- <ImageContainer /> -->
    <LoginForm />
  </div>
</template>

<script>
import CardDeck from './components/CardDeck.vue';
import Header from './components/Header.vue'
import ImageContainer from './components/ImageContainer.vue';
import LoginForm from './components/LoginForm.vue';
  export default {
    components: {
    Header,
    CardDeck,
    ImageContainer,
    LoginForm
},
    data() {
      return {
        title: 'Hej från Vue',
        count: 0
      }
    },
    updated() {
      console.log('app uppdated')
    }
  }
</script>

<style>

</style>
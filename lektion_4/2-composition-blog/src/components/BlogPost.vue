<template>
  <div class="post">
    <div class="img-container">
      <img :src="post.imgUrl" alt="">
    </div>
    <div class="content">
      <h2 class="content_title">{{ post.title }}</h2>
      <div class="content_info"></div>
      <p class="content_body">{{ post.body }}</p>
    </div>
  </div>
</template>

<!-- <script>
  export default {
    props: ['post'],
    setup(props) {
      console.log(props.post)
    }
  }
</script> -->
<script setup>
  const props = defineProps(['post'])
  console.log(props.post)

</script>

<style scoped>
  .post {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #c0c5ce;
  }
  .post:nth-child(even) {
    flex-direction: row-reverse;
  }
  .img-container {
    height: 300px;
    width: 45%;
  }
  .img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .content {
    flex: 1;
    padding: 1rem 2rem;
  }
  .content_title {
    text-align: center;
  }
</style>
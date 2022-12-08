<template>
  <div>
    Hej {{ wife }}
  </div>
</template>

<script setup>
  import {ref } from 'vue'
  const wife = ref('Jeanette')
</script>

<style>

</style>
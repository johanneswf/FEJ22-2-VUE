<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    
    <br><br>
    <button @click="handleClick">click me</button>
    <button @click="handleReset">reset</button>

  </div>
</template>

<script setup>

  import { useCounterStore } from '@/stores/counter'
  import { storeToRefs } from 'pinia'

  const counterStore = useCounterStore()
  // Det här gör så att vi tappar reaktiviteten på våra variabler
  // const { count, doubleCount } = useCounterStore()  

  const { count, doubleCount } = storeToRefs(counterStore)

  const handleClick = () => {
    // counterStore.increment()
    counterStore.count ++
  }

  const handleReset = () => {
    // Fungerar bara med en OPTIONS Store
    counterStore.$reset()
  }

</script>

<style scoped>

</style>
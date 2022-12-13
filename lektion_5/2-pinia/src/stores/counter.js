import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


// OPTIONS Store - Options API
// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0 }),
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count ++
//     }
//   }
// })


//SETUP Store
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

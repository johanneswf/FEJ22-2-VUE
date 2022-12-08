
<template>
  <div>
    <p>hej {{name}}</p>
    <p ref="paraRef">{{firstName}}</p>
    <p>{{lastName.name}}</p>
    <button @click="handleClick">Byt namn</button>
    <button @click="changeLastName">Byt Efternamn</button>
  </div>
</template>

<script>
  import { onMounted, ref, reactive } from 'vue'
  export default {
    data() {
      return {
        name: 'Joakim'
      }
    },
    setup() {
      // Setup kommer att köras innan alla lifecycle hooks
      /*
      console.log('setup')
      onMounted(() => {
        console.log('mounted')
      })
      */
     
    //  let firstName = 'Joakim'

      const firstName = ref('Hans')

      // console.log(firstName)
      const handleClick = () => {
        firstName.value = 'Nisse'
        console.log(firstName.value)
      }

      // const lastName = reactive({ name: 'Wahlström' })
      const lastName = ref({ name: 'Wahlström' })
      // console.log(lastName)
      const changeLastName = () => {
        // med Reactive
        //lastName.name = 'Andersson'

        // med ref
        lastName.value.name = 'Andersson'
      }

      return {
        firstName,
        handleClick,
        lastName,
        changeLastName
      }
    },
    // created() {
    //   console.log('created')
    // }
  }
</script>

<style>

</style>
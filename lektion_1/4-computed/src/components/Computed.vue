<template>
  <div class="container">
    <br>
    <button @click="addToA">Lägg till på A</button>
    <button @click="addToB">Lägg till på B</button>
    <button @click="number++">öka number</button>
    <br><br>
    <p>Nummret är {{ number }}</p>
    <br>
    <p>A = {{a}}</p>
    <p>B = {{b}}</p>
    <br><br>
    <p>A plus nummer = {{ aPlusNr }}</p>
    <p>B plus nummer = {{ bPlusNr }}</p>

    <br><br>

    <div v-for="(user, index) in activeUsers" :key="index">
      <p>{{user.name}}</p>
    </div>

    <input type="number" v-model="price">

    <br><br>
    <p>pris inkl. moms: {{ priceIncVat }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 0,
        b: 0,
        number: 10,
        users: [
          { name: 'Joakim', active: true },
          { name: 'Hans', active: false },
          { name: 'Tommy', active: false },
          { name: 'Johannes', active: true },
        ],
        price: 0
      }
    },
    methods: {
      addToA() {

        this.a++
      },
      addToB() {

        this.b++
      }
    },
    computed: {
      aPlusNr() {
        console.log('ökade a')
        return this.a + this.number
      },
      bPlusNr() {
        console.log('ökade b')
        return this.b + this.number
      },
      activeUsers() {
        console.log('filterade users')
        return this.users.filter(user => user.active)
      },
      priceIncVat() {
        console.log('räknade ut skatt')
        return this.price * 1.25
      }
    }
  }
</script>

<style scoped>

</style>
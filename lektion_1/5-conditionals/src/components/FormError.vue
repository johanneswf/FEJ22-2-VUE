<template>
  <div class="mt-5">
    <button @click="error = !error">Toggle Error</button>
    <button @click="success = !success">Toggle Success</button>
    <br><br>
    <!-- <p v-if="error">Någonting blev fel, ERROR</p>
    <p v-else-if="success">Jippi det fungerar, SUCCESS</p> -->
    <p v-show="error">Någonting blev fel, ERROR</p>
    <p v-show="success">Jippi det fungerar, SUCCESS</p>
      <br><br>

    <div>
      <div v-if="users.length">
        <p>{{users[0].name}}</p>
      </div>
      <h2 v-else> det finns inga användare</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        error: false,
        success: false,
        users: [
          {name: 'Joakim'},
          {}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
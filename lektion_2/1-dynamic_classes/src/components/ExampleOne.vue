<template>
  <div>
    <h2 :class="{ green: isGreen, red: false }" >EN TEXT</h2>

    <div @click="available = !available" :class="{available: available}" >
      <span>Joakim</span>
    </div>

    <!-- <div class="form-group" :class="{'is-invalid': error}"> -->
      <button @click="error = !error">error?</button>
    <!-- <div :class="`form-group ${error ? 'is-invalid' : ''}`"> -->
    <div :class="`form-group ${error && 'is-invalid'}`">
      <label for="">Name</label>
      <input type="text">
      <p class="error">Någonting har blivit fel</p>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isGreen: true,
        error: true,
        available: false
      }
    }
  }
</script>

<style scoped>

  .form-group {
    margin: 2rem 0;
  }
  label,
  input {
    display: block;
    width: 100%;
  }
  input {
    padding: .5em;
    border: 1px solid rgb(114, 114, 114);
    border-radius: .4em;
  }
  .error {
    color: firebrick;
    display: none;
  }

  .is-invalid .error {
    display: block;
  }
  .is-invalid input {
    border: 2px solid firebrick;
  }

  span {
    background-color: red;
    margin-top: 1rem;
    display: inline-block;
    padding: 1rem;
    cursor: pointer;
  }
  .available span {
    background-color: green;
  }
</style>
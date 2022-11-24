<template>
  <Teleport to="#modals">
    <div class="overlay" @click.self="$emit('close-modal')">
      <div class="modal">
        <div class="modal_header">
          <h2>{{ title }}</h2>
        </div>
        <div class="modal_body">
          <slot>
            <p>You need to complete the todo first</p>
          </slot>
          <button class="btn btn-primary" @click="$emit('close-modal')">Close</button>
          <!-- <hr> -->
          <slot name="links"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
  export default {
    props: ['title'],
    emits: ['close-modal']
  }
</script>

<style scoped>
  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.303);
    inset: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background-color: #fff;
    /* padding: 3rem; */
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 3px 7px 12px #00000046;
  }
  .modal_header {
    background-color: var(--clr-primary);
    padding: 1rem;
    color: #fff;
    text-align: center;
  }
  .modal_body {
    padding: 2rem;
    /* margin-bottom: 1rem; */
  }
  .btn{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
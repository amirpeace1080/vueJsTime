<template>
  <div>
      <h5>Counter is {{counter}}</h5>
      <button @click="counter++">Clcik</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter: this.intial
        }
    },
    props:{
        intial: {
            type: Number,
            required: true,
            default: 8
        }
    }
}
</script>

<style>

</style>
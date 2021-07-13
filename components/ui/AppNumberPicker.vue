<template>
  <div>
      <h1>Number Picker</h1>

      <button @click="minus">Minus</button>
      {{ value }}
      <button @click="plus">Plus</button>
  </div>
</template>

<script>
export default {
    model:{
        prop: 'value',
        event: 'change'
    },
    props:{
        value:{
            type: Number,
            required: true,
        },
        minValue:{
            type: Number,
            default: 0,
        },
        plusValue:{
            type: Number,
            default: 10
        }
    },
    methods: {
        plus(){
            if(this.value+1 <= this.plusValue){
                this.$emit("change", this.value+1)
            }
        },
        minus(){
            if(this.value-1 >= this.minValue){
                this.$emit("change", this.value-1)
            }
        }
    },
}
</script>

<style>

</style>
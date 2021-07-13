<template>
  <div>
    <h1>AppTextInput</h1>
    <input v-bind="$attrs" :value="value" v-on="{...$listeners, input}" />

  </div>
</template>

<script>
export default {
    props:{
        value:{
            type: String,
            defalut: '',
        }
    },
    methods: {
        input(e){
            this.$emit('input',e.target.value)
        }
    },
}
</script>

<style>

</style>
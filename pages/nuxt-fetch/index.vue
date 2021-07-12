<template>
  <div>
      <h1>Nuxt-fetch</h1>
      <h2 v-if="loading">loading...</h2>
      <h3 v-else> {{title}} </h3>
  </div>
</template>

<script>
export default {
    name: 'NuxtFetch',
    fetch(){
        this.loading=true;
        return this.$axios.$get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response)=>{
            this.title = response.title
            this.loading = false
        }).catch((e)=>{
            this.loading = false;
            console.log(e);
        })
    },
    data() {
        return {
            title: '',
            loading: false,
        }
    },
}
</script>

<style>

</style>
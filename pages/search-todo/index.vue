<template>
  <div>
      <h1>Search-Todo</h1>
      <input type="text" :value="title" @input="onInput" />

      <h4 v-if="loading">Loading</h4>

      <ul v-else>
          <li v-for="item in list" :key="item.id"> {{item.title}} </li>
      </ul>
  </div>
</template>

<script>
export default {
    fetch(){
        return this.service()
    },
    data() {
        return {
            title: '',
            list: [],
            loading: false,
        }
    },
    methods: {
        service(){
            this.loading = true;
            return this.$axios.$get("https://jsonplaceholder.typicode.com/todos", {params:{
            title_like:this.title
        }})
        .then((response)=>{
            this.list = response
            this.loading= false;
        }).catch((e)=>{
            this.loading = flase;
            console.log(e);
        })
        },
        onInput(e){
            this.title = e.target.value;
            this.service()
        }
    },
}
</script>

<style>

</style>
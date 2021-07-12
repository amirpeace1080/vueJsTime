<template>
  <div>
      <h1>Search-Todo</h1>
      <input type="text" :value="title" @input="onInput" />
      <ul>
          <li v-for="item in list" :key="item.id"> {{item.title}} </li>
      </ul>
  </div>
</template>

<script>
export default {
    fetch(){
        return this.$axios.$get("https://jsonplaceholder.typicode.com/todos", {params:{
            title_like:this.title
        }})
        .then((response)=>{
            this.list = response
        })
    },
    data() {
        return {
            title: '',
            list: []
        }
    },
    methods: {
        onInput(e){
            this.title = e.target.value;
            this.$fetch()
        }
    },
}
</script>

<style>

</style>
<template>
  <div>
      <button @click="btnSendQuery">send query</button>
      <h1>search</h1>
      <button @click="backToProduct">go to product</button>
      <nuxt-link :to="{name: 'product-slug', params:{slug: 'samsung-j7'}}">click me</nuxt-link>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    backToProduct(){
      this.$router.push('/product/1')
    },
    btnSendQuery(){
      this.$router.push({query:{query: 'hello_world',brand_id:12}})
    }
  },
  beforeMount() {
    console.log(this.$route.query);
  },
}
</script>

<style>

</style>
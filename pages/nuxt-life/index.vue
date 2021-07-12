<template>
  <div>
      <h1>Nuxt Life Page</h1>
      {{ name }}
      {{ title }}
  </div>
</template>

<script>
export default {
    async asyncData({$axios}) {
        const response = await $axios.$get("https://jsonplaceholder.typicode.com/todos/1")
        return {title: response.title}
    },
    data() {
        return {
            name: 'ali'
        }
    },
}
</script>

<style>

</style>
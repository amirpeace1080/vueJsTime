<template>
  <div>
      <h1>Nuxt MiddleWare</h1>
  </div>
</template>

<script>
export default {
    name: "nuxt-middleware",
    middleware: ['auth'],
    data() {
        return {
            //
        }
    },
}
</script>

<style>

</style>
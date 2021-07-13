<template>
  <div>
    <nuxt-link to="/nuxt-middleware">Nuxt-MiddleWare</nuxt-link>
    <nuxt-link to="/nuxt-fetch">nuxt-fetch</nuxt-link>
    <Counter :intial="intial" />
    <button @click="intial++">Clcik</button>
    <Tutorial/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intial: 4
    }
  },
}
</script>

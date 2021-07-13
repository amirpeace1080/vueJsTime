<template>
  <div>
      <h1>Plugin</h1>
  </div>
</template>

<script>
export default {
    fetch(){
        console.log("fetch");
        this.$myTestPlugin.test()
    }
}
</script>

<style>

</style>
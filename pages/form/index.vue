<template>
  <div>
    <h1>Form</h1>
    <label>First Name : </label>
    <input type="text" v-model="firstName" />
  </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
        }
    },
    watch:{
        firstName(value){
            console.log("first name is : ", value);
        }
    }
}
</script>

<style></style>

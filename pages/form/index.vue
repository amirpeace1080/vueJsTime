<template>
  <div>
    <h1>Form</h1>
    <label>First Name : </label>
    <AppTextInput v-model="firstName" />
  </div>
</template>

<script>
import AppTextInput from '@/components/ui/AppTextInput.vue'

export default {
    components:{
        AppTextInput,
    },
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

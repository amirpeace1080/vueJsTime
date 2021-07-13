<template>
  <div>
    <h1>Form</h1>
    <label>First Name : </label>
    <AppTextInput v-model="firstName" />
    <AppNumberPicker :minValue="4" v-model="count" />
  </div>
</template>

<script>
import AppTextInput from '@/components/ui/AppTextInput.vue'
import AppNumberPicker from '@/components/ui/AppNumberPicker.vue'

export default {
    components:{
        AppTextInput,
        AppNumberPicker,
    },
    data() {
        return {
            firstName: '',
            count: 1,
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

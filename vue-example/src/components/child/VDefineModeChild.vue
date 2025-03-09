<template>
     <div  class="section">
        <h4>defineModel实现v-model</h4>
         <p>
            <input type="text" v-model="firstName"/>
         </p>
         <button @click="update">切换大小写</button>
     </div>
</template>

<script setup>
// 组件v-model
const [firstName, firstNameModifiers]  = defineModel('firstName',{
    default:'',
    set(value){
        if(firstNameModifiers.capitalize) {
            return value.charAt(0).toLocaleUpperCase()+value.slice(1);
        }
        return value
    }
})
// v-model没加参数默认值为modelvalue
const [isCapitalize,modifiers] = defineModel()
console.log(modifiers)
function update(){
    isCapitalize.value = !isCapitalize.value;
}
</script>

<style>
div.section {
  margin: 20px 0;
}
</style>
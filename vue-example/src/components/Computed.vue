<template>
    <div class="com">
        <h2>computed计算属性</h2>
      <p>{{ bookMessage }} </p>
      {{ fullName }}
      <button @click="addFn">添加</button>
      <button @click="modify">修改</button>
    </div>
    
</template>
    
<script setup>
import { computed, isRef, reactive ,ref,useTemplateRef, watch, watchEffect} from 'vue';
const author = reactive({
    name: 'aa',
    books: [
       'vue2',
       'vue3',
       'vue4'
    ]
})
const firstName = ref('li')
const lastName = ref('bai')
const fullName = computed({
    get(){
        return firstName.value + lastName.value
    },
    set(newVlaue) {
        console.log(newVlaue)
    }
})
const bookMessage = computed({
    get(){
        return author.books.length
    },
    set(newValue) {
        console.log(newValue)
    }
})
function addFn(){
    author.books.push('vue5')
}
function modify(){
    fullName.value = 'anyu'
}
</script>
    
<style>
    
</style>
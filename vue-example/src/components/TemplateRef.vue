<template>
    <div class="com">
        <h2>模版引用</h2>
        <!-- <input ref="hello" />
        <input :ref="(el) => { console.log('input') }" /> -->
        <p  @click="()=> {  console.log('父组件响应子组件原生冒泡click')}">
            <TemplateRefChild 
            ref="child" 
            :title="title"
            @input-change="inputChange"
            isTime=""
            :id="null"
            @click="()=> {console.log('父组件响应子组件事件click')}"
            />
        </p>
    </div>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect, useTemplateRef } from 'vue';
import TemplateRefChild from './child/TemplateRefChild.vue';

const hello = ref('input');
const title = ref('模版子组件')
const inputRef = useTemplateRef('hello')
const childRef = useTemplateRef('child')
function inputChange() {
    console.log('inputChange')
    inputRef.value.focus()
}
onMounted(() => {
    console.log(childRef.value)
    title.value = '模版子组件title修改'
})
</script>

<style></style>
<template>
    <!-- defineEXpose -->
    <div class="section">
        <h4># defineExpose</h4>
        {{ bar }}
        {{ foo }}
    </div>
    <!-- emit -->
    <div  class="section">
        <h4 @click="$emit('change-title')"># {{ title }}</h4>
        <button @click="$emit('click')">子组件传递事件</button>
        <button @click="() => { console.log('子组件原生事件') }">子组件元素原生事件</button>
    </div>
</template>

<script setup>
import { watch, watchEffect } from 'vue'

// 模版引用
const bar = 'bar'
const foo = 'foo'
defineExpose({
    bar,
    foo
})
// props
const { title } = defineProps({
    title: String,
    disabled: {
        type: Boolean,
    },
    isTime: {
        type: Boolean
    },
    id: {
        type: [null],
        required: true
    },
})
watchEffect(() => {
    console.log('响应props解构' + title)
})
// emits事件
const emit = defineEmits([
    'input-change',
    'changeTitle',
    'click',
])
</script>

<style>
div.section {
  margin: 20px 0;
}
</style>
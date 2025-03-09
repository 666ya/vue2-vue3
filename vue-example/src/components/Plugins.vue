<template>
   <div class="com">
    <h2>Plugins</h2>
    <p>  {{ i18n.greetings.hello }}</p>
    <p v-i18n>{{ text }}</p>
   </div>     
</template>
    
<script setup>
import { inject, ref } from 'vue';
    const text = ref('greetings.hello')
    const i18n = inject('i18n')
    console.log(i18n)
</script>
    
<style>
    
</style>
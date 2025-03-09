<template>
    <div class="com">
        <div v-highlight>自定义指令</div>
    </div>
       
</template>
    
<script setup>
    // const vHighlight = {
    //     mounted(el){
    //         el.classList.add('is-highlight')
    //     }
    // }
    const vHighlight = (el) => {
        el.classList.add('is-highlight')
    }
</script>
    
<style>
.is-highlight{
    color:  red;
}
</style>
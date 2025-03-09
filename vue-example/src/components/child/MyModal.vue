<template>
    <button @click="open = true">打开</button>
    <Teleport to="body">
        <div v-if="open" class="modal">
        <p>Hello from the modal</p>
        <button @click="open = false"> Close</button>
    </div>
    </Teleport>
    
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false)

</script>

<style scoped>
.modal{
    position: fixed;
    z-index: 1000;
    top: 20%;
    left:50%;
    width: 300px;
    margin-left: 50px;
    background-color: white;
}
</style>
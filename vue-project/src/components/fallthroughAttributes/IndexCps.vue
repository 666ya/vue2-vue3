<template>
  <div @click="clickFn">
    <CustomButton class="baz" :isShow="show" />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import CustomButton from "./CustomButton.vue";
const show = ref(false);
function clickFn() {
  alert("穿透了，grandparent");
  show.value = true;
}
</script>

<style scoped>
div {
  padding: 20px;
  background: gray;
}
</style>

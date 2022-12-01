<template>
  <div>
    <p v-if="isShow">
      <label>姓名：</label>
      <input type="text" name="name" />
    </p>
    <p v-else>
      <label>邮箱:</label>
      <input type="text" name="email" />
    </p>
    <button @click="handleChagne">切换</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(true);
function handleChagne() {
  isShow.value = !isShow.value;
}
</script>

<style lang="scss" scoped>
</style>
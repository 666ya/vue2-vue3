<template>
  <div>
    <p>
      已经出版的：<span>{{ publishedBookMessage }}</span>
    </p>
    <p>
      姓名: <span>{{ fistName }}</span
      >+<span>{{ lastName }}</span
      >：<span>{{ fullName }}</span>
      <button @click="changeName">修改名字</button>
    </p>
  </div>
</template>

<script setup>
console.log(this);
import { reactive, computed, ref } from "vue";
const author = reactive({
  name: "李白",
  books: ["vue1", "vue2", "vue3"],
});
const publishedBookMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
console.log(publishedBookMessage.value);

const fistName = ref("迈克尔");
const lastName = ref("乔丹");
const fullName = computed({
  get() {
    return fistName.value + " " + lastName.value;
  },
  set(value) {
    [fistName.value, lastName.value] = value.split(" ");
  },
});
function changeName() {
  fullName.value = "勒布朗 詹姆斯";
}
</script>

<style lang="scss" scoped>
</style>
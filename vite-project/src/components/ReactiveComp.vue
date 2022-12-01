<script setup>
import { reactive, ref } from "vue";
const count = ref(10);
function refIncrement() {
  count.value++;
}
const rawObj = {
  count: 0,
};
const refObj = ref(rawObj);
const reactiveObj = reactive(rawObj);
// console.log(refObj.value === reactiveObj); // true
const reactiveState = reactive({
  count: ref(0),
});
const reactiveMap = reactive(new Map([["count", ref(0)]]));
const reactiveArray = reactive([ref(0)]);

console.log(reactiveState.count);
console.log(reactiveMap.get("count"));
console.log(reactiveArray[0]);
const mapValue = reactiveMap.get("count");

// reactive
const state = reactive({
  count: 0,
});
function increment() {
  state.count++;
}
</script>

<template>
  <p>
    reactive:
    <button @click="increment">{{ state.count }}</button>
  </p>
  <p>
    ref:
    <button @click="refIncrement">{{ count }}</button>
    <button>{{ mapValue }}</button>
  </p>
</template>


<style lang="scss" scoped>
</style>
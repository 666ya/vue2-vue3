<template>
  <div>
    <p>
     <h5>optionsAPI</h5>
      <div>{{ count }}</div>
      <div>{{ laterCount }}</div>
      <div>{{ laterObj.count }}</div>
    </p>
     <p>
     <h5>compositionAPI</h5>
      <div>reactive：{{ stateReactive.count }}</div>
      <div>ref：{{ stateRef }}</div>
      <div>refObj：{{ stateRefObj.count }}</div>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      someObject: {},
    };
  },
  created() {
    this.laterCount = 2;
    this.laterObj = {
      count: 3,
    };
    setTimeout(() => {
      this.count++;
      this.laterCount++;
      this.laterObj.count++;
    }, 1000);
  },
};
</script>
<script setup>
import { reactive, ref } from "vue";
const stateReactive=  reactive({
  count: 1,
});
// const n = stateReactive.count
// stateReactive.count++
// console.log(n)
const stateRef = ref(2)
// const n = stateRef.value
// stateRef.value++
// console.log(n)
const stateRefObj = ref({
  count: 3
})
// const n = stateRefObj.value.count
//  stateRefObj.value.count++
//  console.log(n)
const count = ref(0)
const state = reactive({
  count
})
console.log(count)
console.log(state.count)
state.count++
console.log(count.value)
</script>

<style lang="scss" scoped></style>

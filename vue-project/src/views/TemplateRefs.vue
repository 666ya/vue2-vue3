<template>
  <div>
    <p ref="refString">ref-string</p>
    <p id="refFunction" :ref="refFn">ref-function</p>
    <p ref="refSetUp">ref-setup</p>
    <p>
      <span v-for="item in 10" ref="items" :key="item">{{ item }}</span>
    </p>
  </div>
</template>
<script setup>
console.log("aaa");
const refSetUp = ref(null);
const items = ref([]);
onMounted(() => {
  console.log(item);
  console.log(refSetUp.value);
});
</script>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    console.log("bbb");
    const refSetUp = ref(null);
    onMounted(() => {
      console.log(refSetUp.value);
    });
    return {
      refSetUp,
    };
  },
  data() {
    return {
      value: "",
      ref: "",
    };
  },
  mounted() {
    console.log(this.$refs.refString);
  },
  methods: {
    refFn(el) {
      console.log(el);
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <button class="foo">点击</button>
    <span>{{ this.$attrs }}</span>
  </div>
</template>
<script>
import { ref, onUpdated, onMounted } from "vue";
export default {
  inheritAttrs: false,
  setup(props, ctx) {
    const attrs = ref(true);
    attrs.value = ctx.attrs.isShow;
    onUpdated(() => {
      attrs.value = ctx.attrs.isShow;
    });
    return {
      attrs,
    };
  },
};
</script>
<!-- <script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
console.log(attrs);
</script> -->

<style lang="scss" scoped></style>

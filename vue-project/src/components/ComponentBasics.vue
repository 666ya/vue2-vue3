<template>
  <div class="container">
    <component :is="'a'">appear-active-class=""</component>
  </div>
</template>

<script>
import { h } from "vue";
export default {
  data() {
    return {
      vnode: h("p", "aaa"),
    };
  },
  created() {
    console.log(this.vnode);
  },
};
</script>

<style scoped>
.container {
  color: red;
}
</style>

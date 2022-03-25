<template>
  <TemplateCom />
</template>
<script>
import { h } from "vue";
import WarnHandlerVue from "./components/WarnHandler.vue";
import TemplateCom from "./components/TemplateCom.vue";
export default {
  data() {
    return {};
  },
  components: {
    TemplateCom,
  },
  render() {
    return h("div", "aaa");
  },
};
</script>

<style lang="scss" scoped></style>

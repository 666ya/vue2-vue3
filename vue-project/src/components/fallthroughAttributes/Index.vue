<template>
  <div>
    <IndexOpsVue v-if="show" />
    <IndexCpsVue v-else />
  </div>
</template>

<script>
import IndexCpsVue from "./IndexCps.vue";
import IndexOpsVue from "./IndexOps.vue";
export default {
  components: {
    IndexCpsVue,
    IndexOpsVue,
  },
  computed: {
    show() {
      return sessionStorage.getItem("api") === "options";
    },
  },
};
</script>

<style lang="scss" scoped></style>

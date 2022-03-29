<template>
  <div>
    <ClassStyleBindingChild class="baz foo" />
  </div>
</template>

<script>
import ClassStyleBindingChild from "./ClassStyleBindingChild.vue";
export default {
  components: {
    ClassStyleBindingChild,
  },
  data() {
    return {
      key: "value",
    };
  },
};
</script>

<style scoped>
.baz {
  font-size: 20px;
}
.foo {
  color: green;
}
</style>

<template>
  <div>
    <input v-focus type="text" />
    <p>{{ $translate("greetings.hello") }}</p>
  </div>
</template>

<script>
const focus = {
  created(el, binding, vnode, prevNode) {
    console.log("directive-created");
    console.log(el);
    console.log(binding);
    console.log(vnode);
    console.log(prevNode);
  },
  beforeMount(el) {
    console.log("beforeMount" + el);
  },
  mounted(el) {
    console.log("mounted" + el);
    el.focus();
  },
};
export default {
  directives: {
    focus,
  },
  inject: ["il8n"],
  data() {
    return {};
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log(this.il8n);
    console.log(this.il8n.greetings.hello);
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style lang="scss" scoped></style>

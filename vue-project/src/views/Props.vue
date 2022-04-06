<template>
  <div><ChildComp /><button @click="key = '改变了'">改变props值</button></div>
</template>

<script>
const ChildComp = {
  props: {
    value: {
      default: "aa",
    },
    obj: {
      type: Object,
      default: (rawProps) => {
        return {
          message: rawProps.value,
        };
      },
    },
  },
  data() {
    return {
      initValue: this.value,
    };
  },
  created() {
    console.log(this.obj);
  },
  template: `<div><p>子组件本地值：{{ initValue }}</p><p>props值：{{ value }}</p><p>对象默认值：{{ obj.message }}</p></div>`,
};
export default {
  components: {
    ChildComp,
  },
  data() {
    return {
      key: "value",
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <input v-focus type="text" />
    <p>{{ $translate("greetings.hello") }}</p>
     <p>自定义选项合并策略：{{$options.customOption }}</p>
  </div>
</template>

<script>import { onScopeDispose } from "vue";

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
  customOption: 'localCustomOption',
  mixins: [
    {
      customOption: 'globalCustonOtopins'
    }
  ],
  props: ['users'],
  directives: {
    focus,
  },
  inject: ["il8n"],
  data() {
    return {};
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style lang="scss" scoped></style>

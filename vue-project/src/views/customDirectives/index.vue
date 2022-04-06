<template>
  <div>
    <input v-focus type="text" />
    <p>{{ $translate("greetings.hello") }}</p>
     <p>自定义选项合并策略：{{$options.customOption }}</p>
  </div>
</template>

<script>
import { nextTick } from "vue";
const focus = {
  created(el, binding, vnode, prevNode) {
    console.log("directive-created");
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
    return {
      value: '11'
    };
  },
  mounted() {
    nextTick(() => {console.log(this)})
  },
};
</script>

<style lang="scss" scoped></style>

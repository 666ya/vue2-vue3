<template>
  <div>
    <a v-bind:[attrName]="attrValue" v-on:[eventName]="eventFn">指令变量</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrName: "id",
      attrValue: "id",
      eventName: "click",
    };
  },
  methods: {
    eventFn() {
      alert(event.type);
    },
  },
};
</script>

<style lang="scss" scoped></style>

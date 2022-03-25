<template>
  <div>
    <span v-html="rawHtml"></span>
    <input v-bind="attrObjcet" type="checkbox" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: true,
      attrObjcet: {
        checked: "aaa",
        id: "container",
      },
      rawHtml: '<span style="color:red">this is rawHtml</span>',
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "aa",
    };
  },
  created() {
    const a = this.$watch(
      "value",
      (newValue) => {
        if (newValue === "bb") {
          a();
        }
        console.log(newValue);
      },
      {
        immediate: true,
      }
    );
    console.log(a);
  },
};
</script>

<style lang="scss" scoped></style>

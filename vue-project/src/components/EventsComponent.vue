<template>
  <div>
    <!-- <CustomInput v-model:input.cap="modelValue" /> -->
    <CustomButton @click="clickFn" class="bar" />
    {{ modelValue }}
  </div>
</template>

<script>
const BaseButton = {
  props: {
    class: "",
  },
  template: `<button class="foo">点击</button>`,
  methods: {
    clickFn() {
      console.log("child");
    },
  },
};
const CustomButton = {
  components: {
    BaseButton,
  },
  methods: {
    clickFn() {
      console.log("parent");
    },
  },
  template: `<BaseButton @click="clickFn"/>`,
};

const CustomInput = {
  props: {
    input: "",
    inputModifiers: {
      default: () => ({}),
    },
  },
  computed: {
    value: {
      get() {
        return this.input;
      },
      set(value) {
        let newValue = value;
        if (this.inputModifiers.cap) {
          newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
        }
        this.$emit("update:input", newValue);
      },
    },
  },
  created() {
    console.log(this.inputModifiers);
  },
  template: `<input v-model="value"/>`,
};
export default {
  components: {
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      modelValue: "",
    };
  },
  methods: {
    clickFn(event) {
      console.log("grandparent");
    },
  },
};
</script>

<style lang="scss" scoped></style>

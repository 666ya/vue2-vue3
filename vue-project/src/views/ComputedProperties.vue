<template>
  <div>
    {{ fullName }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "James",
      lastName: "Lebran",
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
    // fullName() {
    //   return this.firstName + this.lastName;
    // }
  },
  mounted() {
    this.fullName = "Jodan Mikel";
    console.log(this.firstName);
  },
};
</script>
<script setup>
import { computed, ref } from "vue";
const firstName = ref("John");
const lastName = ref("Doe");
// const fullName = computed(() => {
//   return firstName.value + " " + lastName.value;
// });
const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
</script>

<style lang="scss" scoped></style>

<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <h4><a class="anchor">#</a>{{ item.name }}</h4>
      <component :is="item.component"></component>
    </li>
  </ul>
</template>

<script>
import DirectivesArguments from "./DirectivesArguments.vue";
export default {
  components: {
    DirectivesArguments,
  },
  data() {
    return {
      list: [
        {
          name: "Arguments",
          component: "DirectivesArguments",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

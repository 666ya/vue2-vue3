<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <h3><a class="anchor">#</a>{{ item.name }}</h3>
      <component :is="item.component"></component>
    </div>
  </div>
</template>

<script>
import Directives from "./templateSyntax/Directives.vue";
export default {
  components: {
    Directives,
  },
  data() {
    return {
      list: [
        {
          name: "Directives",
          component: "Directives",
        },
      ],
    };
  },
  methods: {
    fn() {
      alert("指令变量");
    },
  },
};
</script>

<style lang="scss" scoped></style>

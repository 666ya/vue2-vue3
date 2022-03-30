<template>
  <input
    type="checkbox"
    v-model="toggleValue"
    true-value="options"
    false-value="composition"
  />
  <label>{{ toggleValue }}</label>
  <!-- <TemplateSyntax /> -->
  <!-- <ReactivityFundaments /> -->
  <!-- <ComputedProperties /> -->
  <!-- <ClassStyleBinding /> -->
  <!-- <EventHanding /> -->
  <!-- <Watchers /> -->
  <!-- <TemplateRefs /> -->
  <!-- <ComponentBasics /> -->
  <!-- <Props /> -->
  <FallthroughAttribute />
</template>
<script>
import TemplateSyntax from "./components/TemplateSyntax.vue";
import ReactivityFundaments from "./components/ReactivityFundaments.vue";
import ComputedProperties from "./components/ComputedProperties.vue";
import ClassStyleBinding from "./components/ClassStyleBinding.vue";
import EventHanding from "./components/EventHanding.vue";
import Watchers from "./components/Watchers.vue";
import TemplateRefs from "./components/TemplateRefs.vue";
import ComponentBasics from "./components/ComponentBasics.vue";
import Props from "./components/Props.vue";
import EventsComponent from "./components/EventsComponent.vue";
import FallthroughAttribute from "./components/fallthroughAttributes/Index.vue";
export default {
  data() {
    return {
      toggleValue: sessionStorage.getItem("api") || "options",
    };
  },
  components: {
    TemplateSyntax,
    ReactivityFundaments,
    ComputedProperties,
    ClassStyleBinding,
    EventHanding,
    Watchers,
    TemplateRefs,
    ComponentBasics,
    Props,
    EventsComponent,
    FallthroughAttribute,
  },
  watch: {
    toggleValue: function (value) {
      sessionStorage.setItem("api", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

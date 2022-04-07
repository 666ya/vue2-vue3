<template>
<!-- {{ obj.value }} -->
  <!-- <input
    type="checkbox"
    v-model="toggleValue"
    true-value="options"
    false-value="composition"
  />
  <label>{{ toggleValue }}</label> -->
   <!-- <TemplateSyntax /> -->
  <!-- <ReactivityFundaments /> -->
  <!-- <ComputedProperties /> -->
  <!-- <ClassStyleBinding /> -->
  <!-- <EventHanding /> -->
  <!-- <Watchers /> -->
  <Emits/>
  <!-- <TemplateRefs /> -->
  <!-- <ComponentBasics /> -->
  <!-- <Props /> -->
  <!-- <FallthroughAttribute /> -->
  <!-- <Composables /> -->
   <!-- <CustomDirectives></CustomDirectives> -->
   <!-- <Suspense>
      <CustomDirectives></CustomDirectives>
          <template #fallback>
            <div class="skeleton"></div>
          </template>
   </Suspense> -->
</template>
<script>
import { defineAsyncComponent } from "vue";
import LoadingComponent from "./components/LoadingComponent.vue";
const TemplateSyntax = defineAsyncComponent(() => import('./views/TemplateSyntax.vue'))
const ReactivityFundaments = defineAsyncComponent(() => import('./views/ReactivityFundaments.vue'))
const ComputedProperties = defineAsyncComponent(() => import('./views/ComputedProperties.vue'))
const ClassStyleBinding = defineAsyncComponent(() => import('./views/ClassStyleBinding.vue'))
const EventHanding = defineAsyncComponent(() => import('./views/EventHanding.vue'))
const Watchers = defineAsyncComponent(() => import('./views/Watchers.vue'))
const Emits = defineAsyncComponent(() => import('./views/Emits.vue'))
const TemplateRefs = defineAsyncComponent(() => import('./views/TemplateRefs.vue'))
const ComponentBasics = defineAsyncComponent(() => import('./views/ComponentBasics.vue'))
const Props = defineAsyncComponent(() => import('./views/Props.vue'))
const EventsComponent = defineAsyncComponent(() => import('./views/EventsComponent.vue'))
const FallthroughAttribute = defineAsyncComponent(() => import('./views/fallthroughAttributes/Index.vue'))
// const Composables = defineAsyncComponent(() => import('./views/composables/Index.vue'))
const CustomDirectives = defineAsyncComponent({
  loader: () => import('./views/customDirectives/index.vue')
})
export default {
   components: {
    TemplateSyntax,
    ReactivityFundaments,
    ComputedProperties,
    ClassStyleBinding,
    EventHanding,
    Watchers,
    Emits,
    TemplateRefs,
    ComponentBasics,
    Props,
    EventsComponent,
    FallthroughAttribute,
    // Composables,
    CustomDirectives,
  },
  data() {
    return {
      $string: '4',
      afterValue: '3',
      toggleValue: sessionStorage.getItem("api") || "options",
    };
  },
   watch: {
    toggleValue: function (value) {
      sessionStorage.setItem("api", value);
    },
  },
  beforeCreate(){
    this.zzd = 1
  },
  mounted(){
    // console.log(this.$string)
    // console.log(this.zzd)
    // console.log(this.$data.$string)
    setTimeout(() => {
      this.$string = 444
      this.zzd = 333
    },5000)
  },
 
};
</script>

<style scoped>
.skeleton{
  background:#3e96f0;
}
</style>

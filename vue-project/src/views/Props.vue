<template>
  <div><ChildComp :person="person" :age="3" /><button @click="key = '改变了'">改变props值</button></div>
</template>

<script>
class Person {
  name = '王维'
  age = '38'
}
const person = new Person()
const ChildComp = {
  props: {
    disabled: {
      type: [Boolean, Number]
    },
    value: {
      default: "aa",
    },
    person:{
      type: Person,
      required: true,
      default: () => ({name: '李白'})
    },
    obj: {
      type: Object,
      default: (rawProps) => {
        console.log(rawProps)
        return {
          message: rawProps.value,
        };
      },
    },
    age: {
      type: [Number,String],
      required: true,
      default: 0,
      validator: (value) => value < 0
    }
  },
  data() {
    return {
      initValue: this.value,
    };
  },
  template: `<input type='text' v-model='age'/>`,
  // template: `<div><p>Boolean值：{{ disabled }}</p><p>子组件本地值：{{ initValue }}</p><p>props值：{{ value }}</p><p>对象默认值：{{ obj.message }}</p></div>`,
};
export default {
  components: {
    ChildComp,
  },
  data() {
    return {
      key: "value",
      person
    };
  },
};
</script>

<style lang="scss" scoped></style>

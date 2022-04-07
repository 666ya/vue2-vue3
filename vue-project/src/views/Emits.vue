<template>
  <div>
    <p>父组件接受的子组件值：{{ emitValue }}</p>
    <ChildComp @handle-click="handleClick" />
  </div>
</template>

<script>
const ChildComp = {
  // emits: ['handleClick'],
  // emits: {
  //   handleClick(value) {
  //     if (value === 'aaa') {
  //       console.log('aaa')
  //       return false
  //     }
  //     return true
  //   }
  // },
  data() {
    return {
      childValue: ''
    }
  },
  mounted() {
  },
  methods: {
    clickFn() {
      this.$emit('handleClick', this.childValue)
    }
  },
  template: `<div>子组件值：<input type="text" v-model="childValue"/><button @click="clickFn">emit到父组件</button></div>`
}
export default {
  components: {
    ChildComp
  },
  data() {
    return {
      parentValue: 'parentValue',
      emitValue: ''
    }
  },
  methods: {
    handleClick(value) {
      console.log('执行了')
      this.emitValue = value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <p>父组件接受的子组件值：{{ emitValue }}</p>
    <ChildComp ref="comp" @click="handleNativeClick" @handle-click="handleClick" />
  </div>
</template>

<script>
const ChildComp = {
  emits: ['click'],
  expose: ['privateMethod'],
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
    // console.log(this.$attrs)
  },
  methods: {
    clickFn() {
      // this.$emit('handleClick', this.childValue)
      this.$emit('click', this.childValue)
    },
    publickMethod() {
      console.log('publickMethod')
    },
    privateMethod() {
      console.log('privateMethod')
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
  mounted() {
    console.log(this.$refs['comp'])
  },
  methods: {
    handleClick(value) {
      console.log('emit event')
      this.emitValue = value
    },
    handleNativeClick(value) {
      console.log('native event')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
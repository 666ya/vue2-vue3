<template>
  <div>
    <input v-model="value" />
    <span ref="name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "aa",
      name: 'test'
    };
  },
  watch:{
    // name: 'handleNameWatched'  第一种：methodname string
    // name: function(value,oldValue){  // 第二种  callback
    //   console.log(value)
    // }
    name: {
      handler: function(value,oldValue){
        console.log(value)
        console.log(oldValue)
      },
      immediate: false,
      flush: 'pre',
      onTrack(e){
        console.log(e)
      },
      onTrigger(e){
        console.log(e)
      }
    }
  },
  created() {
    this.name = '李白'
    this.name = '王维'
    // const a = this.$watch(
    //   "value",
    //   (newValue) => {
    //     if (newValue === "bb") {
    //       a();
    //     }
    //     console.log(newValue);
    //   },
    //   {
    //     immediate: true,
    //   }
    // );
  },
  methods: {
    handleNameWatched(value,oldValue){
      console.log(value)
      console.log(oldValue)
    }
  },
};
</script>

<style lang="scss" scoped></style>

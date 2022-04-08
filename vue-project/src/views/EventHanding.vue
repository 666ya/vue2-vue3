<template>
  <div>
    <p @click="clikFn">
      <span v-on:click="count++">inline handler:{{ count }}</span>
      <span v-on:click.once="say('message', $event)">inline handler access event argument</span>
    </p>
    <p>
      <span v-on:click="increase">methods handler</span>
    </p>
    <p tabindex="1">
      <span v-on:click.right.prevent="keyModifyFn">key modifiers</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "inlineHhandler",
      count: 1,
    };
  },
  methods: {
    say(str, ev) {
      //   console.log(event);
      //   console.log(ev);
      //   ev.stopPropagation();

      //   event.stopPropagation();
      console.log(1);
    },
    /**
     * 
     * @param {*} a 
     */
    clikFn(a) {
      console.log(event);
      return a
    },
    /**
     * 
     * @param {*} event 
     */
    increase(event) {
      alert(event.type);
    },
    keyModifyFn(event) {
      alert("11");
      console.log(event.type);
    },
  },
};
</script>

<style scoped>
p {
  padding: 20px 0;
  background: gray;
}
span {
  display: block;
}
</style>

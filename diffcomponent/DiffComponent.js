const template = `<div class="component">
<ul>
    <li>
        <h3>key Attribute</h3>
         <div>
         <div v-if="show">
            <label>Username</label>
            <input  placeholder="Enter your username">
          </div>
          <div v-else>
            <label>Email</label>
            <input  placeholder="Enter your email address">
          </div>
          <button @click="login"> 切换登录方式 </button>
        </div>
    </li>
     <li>
        <span v-for="item in list">{{ item }}</span>
    </li>
    <li>
       <h3><span>*</span>Transition 作为根节点</h3>
       <transition-com v-show="showModal"></transition-com>
       <button @click="showModal = !showModal">过渡效果切换</button>
    </li>
    <li>
       <h3>Transition Group 根元素</h3>
       <transition-group>
            <label key="aa">aaa</label>
        </transition-group>
    </li>
    <li>
       <h3>移除v-on.native修饰符</h3>
       <onnativecom v-on:click="handleClick" v-on:close="handleClose"></onnativecom>
    </li>
     <li>
       <h3>侦听数据</h3>
       <list-com></list-com>
    </li>
     <li>
       <h3>Attribute强制行为</h3>
       <attr-com></attr-com>
    </li>
</ul>
</div>`
const TransitionCom = {
  name: 'TransitionCom',
  data() {
    return {}
  },
  template: `
    <div>
      <transition name="fade">
        <div>{{ 'hello' }}</div>
      </transition>
    </div>`
}
const OnNativeCom = {
  name: 'onnativecom',
  emits: ['click'],
  data() {
    return {}
  },
  methods: {
    handleClose(e){
      this.$emit('close')
    }
  },
  template: `
    <div>
        组件根元素
        <p @click.prevent="handleClose">非根元素（自定义事件）</p>
    </div>
    `
}
// 侦听数组(非兼容)
const ListCom = {
  name: 'ListCom',
  data(){
    return {
      list: [0,1,2],
      refItem: []
    }
  },
  watch:{
    list(val, oldVal){
      alert('list changed')
    }
  },
  methods:{
    handleClick() {
      // this.list = [1,2,3,4,5]
      // this.list.push(this.list.length)
    }
  },
  template: `<div><span v-for="item in list" :ref="item" :key=""item>{{ item }}</span><button @click="handleClick">点击改变数据</button></div>`
}

// attr强制行为
const AttrCom = {
  name: 'AttrCom',
  data() {
    return {
      truthy: undefined,
      foo: false,
      name: '测试Attribute',
      templateFlag: true
    }
  },
  template: `<div>
        <template>
          '没有特殊指令的标记 (v-if/else-if/else、v-for 或 v-slot) 的template 现在被视为普通元素，并将渲染为原生的template元素，而不是渲染其内部内容。'
        </template>
        <input v-model="name" :foo="foo" :title="truthy" :disabled="truthy"/>
        </div>`
}
const DiffComponent = {
  name: "DiffComponent",
  components: {
    TransitionCom,
    ListCom,
    onnativecom: OnNativeCom,
    AttrCom
  },
  props: {
    list: {
      default () {
        return this ? this.dataList : [1, 2, 3]
      }
    }
  },
  data() {
    return {
      show: true,
      name: "",
      email: "",
      loginType: "",
      dataList: [1, 2],
      showModal: true
    };
  },
  methods: {
    handleClose(){
      alert('自定义事件')
    },
    handleClick() {
      alert('移除v-on.native修饰符')
    },
    login() {
      console.log("aa");
      this.show = !this.show
      this.loginType = this.loginType ? "" : "username";
    },
  },
  template: template,
};
export default DiffComponent
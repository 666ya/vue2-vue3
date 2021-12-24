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
       <onnativecom  v-on:click.native="handleClick"></onnativecom>
    </li>
</ul>
</div>`
const TransitionCom = {
  name: 'TransitionCom',
  data(){
    return {
    }
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
  data(){
    return {
    }
  },
  methods: {
    handleClick() {
      alert('移除v-on.native修饰符')
    },
    close(){
     alert('组件事件')
    }
  },
  template: `<div>组件根元素点击事件</div>`
}


const DiffComponent = {
  name: "DiffComponent",
  components: {
    TransitionCom,
    onnativecom: OnNativeCom
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
    login() {
      console.log("aa");
      this.show = !this.show
      this.loginType = this.loginType ? "" : "username";
    },
  },
  template: template,
};
export default DiffComponent
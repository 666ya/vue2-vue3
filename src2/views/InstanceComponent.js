 // Vue实例
 const obj = {
     content: 'freeze冻结值'
 }
 // Object.freeze(obj)
 const InstanceComponent = {
     name: 'InstanceComponent',
     props: {
         title: String,
         list: {
             default () {
                 return this.dataList
             }
         }
     },
     watch: {
         title: {
             handler: function (val) {
                 if (val) {
                     console.log('watch')
                 }
             },
             immediate: true
         }
     },
     data() {
         return {
             obj,
             dataList: ['1', '2']
         }
     },
     //  beforeCreate() {
     //      console.log(this)
     //      console.log('子组件beforeCreate')
     //  },
     //  created() {
     //      console.log(this)
     //      console.log('子组件created')
     //  },
     //  mounted() {
     //      console.log(this)
     //      console.log('子组件mounted')
     //  },
     //  beforeUpdate() {
     //      console.log(this)
     //      console.log('子组件beforeUpdate')
     //  },
     //  updated() {
     //      console.log(this)
     //      console.log('子组件updated')
     //  },
     //  beforeDestroy() {
     //      console.log(this)
     //      console.log('子组件beforeDestroy')
     //  },
     //  destroyed() {
     //      console.log(this)
     //      console.log('子组件destroyed')
     //  },
     methods: {
         handleDestory() {
             console.log('销毁')
             this.$destory()
         }
     },
     template: `
        <p>
        <span v-for="item in list">{{ item }}</span>
         <span>{{ title }}{{ obj.content }}</span>
         <button @click="obj.content = '改变了'">改变freeze冻结值</button>
         <button @click="handleDestory">销毁</button>
         </p>
         `,
 }
 export default InstanceComponent
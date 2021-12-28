const TodoList = {
  name: 'TodoList',
  data() {
    return {
      list: [1, 2, 3, 4]
    }
  },
  template: `<div>
    <span v-for="item in list">
<!--        <slot name="header" :item="item" other="头部属性"></slot>-->
        {{ item }} <slot :item="item"></slot>
        <slot :item="item" name="footer"></slot>
    </span>
    </div>`
}
const template = `<div></div>`
export default {
  name: 'SlotCom',
  components: {
    TodoList
  },
  data() {
    return {}
  },
  template: `<todo-list v-slot:default="headerProps">
<!--                <template #header="headerProps">头部{{ headerProps }}</template>-->
                    默认插槽：{{ headerProps }}
<!--                <template v-slot:footer="footerProps">尾部{{ footerProps }}</template>-->
            </todo-list>`
}


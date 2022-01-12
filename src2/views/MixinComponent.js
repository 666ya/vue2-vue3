// 局部过滤器
const filterTemplate = `
    <div>
        <h5>过滤器</h5>
        <div>
            <span>状态是：{{ status | statusFilter('status') }}</span></span>
        </div>
    </div>
`
const FilterComponent = {
    name: 'FilterComponent',
    data() {
        return {
            status: '1'
        }
    },
    mounted() {
        var filter = Vue.filter('statusFilter')
        // console.log(filter)
    },
    template: filterTemplate
}
// 局部自定义指令
const directiveTemplate = `
<div>
    <input v-focus="inputValue"  v-model="inputValue"/>
    <div>
        <span v-selfDirective:[selfColor]></span>
        <button @click="changeSelfColor">改变自定义颜色</button>
    </div>
</div>`
const DirectiveComponent = {
    name: 'DirectiveComponent',
    data() {
        return {
            inputValue: '自定义指令',
            selfColor: 'red'
        }
    },
    directives: {
        selfDirective(el, binding) {
            el.innerHTML = binding.name
            el.style.color = binding.arg
        },
        // 'selfDirective': {
        //     inserted: function (el, binding) {
        //         console.log('insert：' + binding.arg)
        //         el.style.color = binding.arg
        //         el.innerHTML = binding.name
        //     },
        //     componentUpdated(el, binding) {
        //         el.style.color = binding.arg
        //     }
        // },
        focus: {
            inserted: function (el, binding) {
                // console.log('局部自定义指令')
                el.innerHTML = binding.name
                el.blur()
            }
        }
    },
    methods: {
        changeSelfColor() {
            var myDirective = Vue.directive('focus')
            console.log(myDirective)
            this.selfColor = 'blue'
        }
    },
    template: directiveTemplate
}

// 可复用性 & 组合组件
const template = `
<div>
    {{ publicData }}
    <directive-component></directive-component>
    <filter-component></filter-component>
</div>
`
export default {
    name: 'MixinConponent',
    components: {
        DirectiveComponent,
        FilterComponent
    },
    props: ['publicData'],
    data() {
        return {
            title: ''
        }
    },
    template: '<div>aa</div>',
    created() {
        console.log(this.$options.custom)
    }
}
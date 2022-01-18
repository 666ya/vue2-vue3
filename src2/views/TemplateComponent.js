const InjectCom = {
    name: 'InjectCom',
    inject: {
        foo: {
            from: 'provideValue',
            default: 'bar'
        }
    },
    data() {
        return {
            title: 'Inject组件',
            value: this.foo
        }
    },
    template: `<div>
    <span>{{ title }}</span>
    <span>{{ 'inject的值为：' + foo }}</span>
    </div>`
}
const ChildComponent = {
    name: 'ChildComponent',
    components: {
        InjectCom
    },
    data() {
        return {
            title: '子组件'
        }
    },
    template: `
    <div>
        <span>{{ title }}</span>
        <inject-com></inject-com>
    </div>
    `
}
const ParentCom = {
    name: 'ParentCom',
    components: {
        ChildComponent
    },
    provide: function () {
        return {
            provideValue: this.value
        }
    },
    computed: {
        value() {
            return this.bar
        }
    },
    data() {
        return {
            title: 'provide组件',
            bar: '数据'
        }
    },
    methods: {
        handleChange() {
            this.bar = 'provide'
            console.log(this.value)
        }
    },
    template: `<div>
        <button @click="handleChange">改变provide的值</button>
        <child-component></child-component>
    </div>`
}
const TemplateComponent = {
    name: 'TemplateComponent',
    comments: true,
    components: {
        ParentCom
    },
    data() {
        return {
            msg: '分隔符delimiters',
            obj: {
                a: {
                    name: {
                        key: '测试',
                        list: [1, 2, 3, 4]
                    }
                }
            },
            isButtonDisabled: true
        }
    },
    // watch: {
    //     obj: {
    //         handler(val) {
    //             console.log(val)
    //         },
    //         deep: true
    //     }
    // },
    methods: {
        handleWatch() {
            this.obj.a.name.list.push(5)
            //  this.obj.a.name.key = '测试改变'
        }
    },
    created() {
        this.rootProperty = 1
        console.log(this.$data)
    },
    mounted() {
        // this.$set(this.obj, 'c', 2)
        this.$set(this, 'rootProperty', 2)
        // this.$set(this.obj, 'c', 2)
        console.log(this.rootProperty)
        // console.log(this.$data)
        // this.rootProperyt++
        // this.obj.b = 2
        // setTimeout(() => {
        //     this.$set(this.obj, 'b', 3)
        //     console.log(this.obj.b)
        // }, 5000)
    },
    template: `
        <div>
            <parent-com></parent-com>
            <button v-bind:disabled="isButtonDisabled">属性值</button>
            <div>对象值为：{{ obj.c }}</div>
            <div>根数据对象：{{ rootProperty  }}</div>
            <div>
                <span>{{ obj.a.name.key }}</span>
                <span>{{ msg }}</span>
                <!-- 注释 -->
                <button @click="handleWatch">深度监听</button></button>
            </div>
        </div>
        `
}
export default TemplateComponent
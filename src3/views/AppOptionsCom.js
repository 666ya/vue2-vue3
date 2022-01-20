// render || template
const {
    h
} = Vue
const template = `<div> {{ templateTitle }} </div>`
const RenderCom = {
    render() {
        return h('div', this.$slots.default())
    },
    data() {
        return {
            renderTitle: 'render函数渲染模板(优先级更高)',
            templateTitle: 'tempalte模板'
        }
    },
    template: template
}
// data
const dataTemplate = `<div>{{ obj.b }}</div>`
const DataCom = {
    name: 'DataCom',
    data() {
        return {
            msg: 'title',
            obj: {
                a: 1,
                title: this.msg
            }
        }
    },
    mounted() {
        this.obj.b = 2
        this.obj.b++
    },
    template: dataTemplate
}
// watch
const watchTemplate = `<div>{{ obj.b }}</div>`
const WatchCom = {
    name: 'WatchCom',
    data() {
        return {
            firstName: '李',
            lastName: '白',
            obj: {
                a: 1,
                b: 2
            }
        }
    },
    computed: {
        objBoth() {
            return [this.obj.b, this.obj.a]
        },
        fullName() {
            return [this.firstName, this.lastName]
        }
    },
    watch: {
        objBoth: function (value) {
            console.log(value)
        },
        fullName(value) {
            console.log(value)
        }
    },
    mounted() {
        this.obj.a++
        this.obj.b++
        this.firstName = '王'
    },
    template: watchTemplate
}
// expose
const {
    ref
} = Vue
const ExposeCom = {
    name: 'ExposeCom',
    expose: ['exposeName'],
    data() {
        return {
            name: 'name',
            exposeName: 'expose'
        }
    },
    setup() {
        const name = ref('')
        name.value = 'setupname'
        return {
            name
        }
    },
    template: `<div>{{ name }} {{ exposeName }}</div>`
}
// extends
const SourceCom = {
    name: 'SourceCom',
    // compilerOptions: {
    //     comments: false,
    //     delimiters: ['$((', '))']
    // },
    components: {
        DataCom
    },
    // directives: {
    //     focus: (el) => {
    //         el.focus()
    //     }
    // },
    // mixins: [DataCom],
    provide: {
        sourceProvide: 'sourceProvide'
    },
    // inject: ['sourceProvide'],
    inheritAttrs: false,
    props: {
        foo: {
            type: String
        },
        sourcePropsTitle: {
            type: String,
            default: 'sourcePropsTitle'
        }
    },
    emits: ['click'],
    expose: ['sourceExposeData'],
    setup() {
        const sourceSetUpValue = ref('')
        sourceSetUpValue.value = 'sourceSetUpValue'
        return {
            sourceSetUpValue
        }
    },
    data() {
        return {
            sourceData: '源组件数据',
            sourceExposeData: 'sourceExposeData'
        }
    },
    computed: {
        fullName() {
            return 'name'
        }
    },
    template: `<div ref="source"><div><p>foo:{{ foo }} bar:{{ $attrs.bar }}</p></div><input v-focus v-model="sourceData" />sourceTempalte: {{ sourceData }}</div>`,
    // render() {
    //     console.log(this)
    //     // console.log(this.sourceSetUpValue)
    //     return h('div', this.sourceSetUpValue)
    // }
}
const ExtendCom = {
    name: 'ExtendCom',
    components: {
        SourceCom
    },
    extends: SourceCom,
    compilerOptions: {
        comments: false,
        delimiters: ['${', '}'],
    },
    data() {
        return {
            extendData: 'extendData',
            foo: 'foo',
            bar: 'bar'
        }
    },
    mounted() {
        setTimeout(() => {
            this.foo = this.foo + 'string'
            this.bar = this.bar + 'string'
        }, 1000)
        // console.log(this.$options)
    },
    template: '<div><source-com :foo="foo" :bar="bar"></source-com>extendTempalte:{ extendData }</div>'
}


// 应用选项
export default {
    name: 'AppOptionsCom',
    data() {
        return {
            extendData: 'qqq'
        }
    },
    components: {
        RenderCom,
        DataCom,
        WatchCom,
        ExposeCom,
        ExtendCom,
        SourceCom
    },
    template: '<extend-com></extend-com>'
}
const {
    ref
} = Vue
const ChildCom = {
    name: 'ChildCom',
    // inheritAttrs: false,
    props: {
        foo: {
            type: String
        },
        sourcePropsTitle: {
            type: String,
            default: 'sourcePropsTitle'
        }
    },
    // emits: ['selfClick'],
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
            obj: {
                a: 1,
                b: 2
            },
            sourceData: '源组件数据',
            sourceExposeData: 'sourceExposeData'
        }
    },
    computed: {
        fullName() {
            return 'name'
        }
    },
    created() {
        this.noTrackData = 1
    },
    mounted() {
        this.obj.c = 'c'
        this.noTrackData++
        console.log(this.noTrackData)
        this.obj.c = 'c'
        // setTimeout(() => {
        //     this.obj.c = 'c'
        //     console.log(this.$data)
        // }, 5000)
        // console.log(this.$props)
        // console.log(this.$attrs)
        // console.log(this.$el)
        // console.log(this.$options)
        // console.log(this.$parent)
        // console.log(this.$root)
        // console.log(this.$slots)
        // console.log(this.$refs.source)
        console.log(this.$refs)
    },
    methods: {
        handleClick() {
            console.log('事件绑定到了组件根元素')
        }
    },
    template: `<div ref="source" class="rootEle"><p ref="pEle">foo: {{ foo }}</p><p>bar: {{ $attrs.bar }}</p><p>sourceData: {{ sourceData }}</p><p>noTrackData: {{ noTrackData }}</p></div>`,
    // render() {
    //     console.log(this)
    //     // console.log(this.sourceSetUpValue)
    //     return h('div', this.sourceSetUpValue)
    // }
}
const ParentCom = {
    name: 'ParemtCom',
    components: {
        ChildCom
    },
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
        console.log(this.refs)
        // setTimeout(() => {
        //     this.foo = this.foo + 'string'
        //     this.bar = this.bar + 'string'
        // }, 1000)
    },
    methods: {
        handleClick(data) {
            console.log('aaa')
        },
        handleSelfClick(data) {
            console.log('自定义事件')
        }
    },
    template: '<div><child-com ref="cildCom" :foo="foo" :bar="bar" v-on:click="handleClick" @selfClick="handleSelfClick"></child-com>extendTempalte:{ extendData }</div>'
}

// 实例property
export default {
    name: 'InstancePropertyCom',
    data() {
        return {
            extendData: 'qqq'
        }
    },
    components: {
        ParentCom
    },
    template: '<parent-com></parent-com>'
}
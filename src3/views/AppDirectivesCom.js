// v-bind
const VBind = {
    name: 'VBind',
    inheritAttrs: false,
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    mounted() {
        console.log(this.$props)
        console.log(this.$attrs)
    },
    template: `<div>{{ title }}</div>`
}
// 指令
export default {
    name: 'AppDirectivesCom',
    components: {
        VBind
    },
    data() {
        return {
            bars: 'bars',
            title: 'v-bind'
        }
    },
    template: `<v-bind :title.attr='title' :dialog-prams.camel="true" :bars='bars' foo='foo'></v-bind>`
};
// use
const useTemplate = `<div>字符串转小写插件：{{ str }}</div>`
// inject
const injectTemplate = `<div>inject接受的值为{{ userLogin }}</div>`
// directive
// const directiveTemplate = `<div><input v-focus :readonly="readonly" v-toFixed:readonly="readonly" v-model="inputValue" /><button @click="handleClick">切换只读状态</button></div>`
const directiveTemplate = `<input v-focus :readonly="readonly" v-toFixed:readonly="readonly" v-model="inputValue" />`
const {
    inject,
    onMounted,
    ref
} = Vue
export default {
    name: 'AppApiCom',
    inject: ['userLogin', 'toLowerCaseProvide'],
    data() {
        return {
            readonly: true,
            inputValue: '123.12345',
            str: 'ABCDDDqqq'
        }
    },
    methods: {
        handleClick() {
            this.readonly = !this.readonly
        }
    },
    mounted() {
        this.str = this.toLowerCaseProvide(this.str)
    },
    template: directiveTemplate
}
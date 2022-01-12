// inject
const injectTemplate = `<div>inject接受的值为{{ userLogin }}</div>`
// directive
const directiveTemplate = `<div><input :readonly="readonly" v-toFixed:readonly="readonly" v-model="inputValue" /><button @click="handleClick">切换只读状态</button></div>`
const {
    inject,
    onMounted,
    ref
} = Vue
export default {
    name: 'AppApiCom',
    // inject: ['userLogin'],
    data() {
        return {
            userLogin: false,
            readonly: true,
            inputValue: '123.12345'
        }
    },
    setup(props) {
        const userLogin = ref(0)
        return {
            userLogin
        }
    },
    methods: {
        handleClick() {
            this.readonly = !this.readonly
        }
    },
    mounted() {

    },
    template: injectTemplate
}
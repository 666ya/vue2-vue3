export default {
    name: 'AppConfigCom',
    template: '<div>globalPropperties: {{ globalPropperty }} {{ globalTest }}</div>',
    data() {
        return {
            globalPropperty: ''
        }
    },
    mounted() {
        this.globalPropperty = this.$global
        console.log(this.$options.myOption)
    },
    myOption: '这是组件自定义选项'
}
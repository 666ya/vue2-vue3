const directiveTemplate = `<div><input v-focus v-model="inputValue" /></div>`
export default {
    name: 'AppApiCom',
    template: directiveTemplate,
    data() {
        return {
            inputValue: '自定义指令'
        }
    }
}
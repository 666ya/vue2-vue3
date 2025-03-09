export default {
    name: 'FunctionnalCom',
    functional: true,
    // template: `<div>无状态组件</div>`
    // template: '<div>无状态组件</div>'
    render(createElement){
        return  createElement('div','无状态组件')
    } 
}
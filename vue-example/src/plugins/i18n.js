// export default {
//     install:(app,options) => {
//         app.provide('i18n',options)
//         // app.config.globalProperties.$translate = (key) => {
//         //     return key.split('.').reduce((o,i) => {
//         //         if(o) return o[i]
//         //     },options)
//         // }
//     }
// }
const install = (app,options) => {
    app.provide('i18n',options)
    app.directive('i18n',(el) => {
        console.log(el.innerText)
        console.log(el.innerText.split('.'))
        el.innerText =   el.innerText.split('.').reduce((o,i)=> {
            if(o) return o[i]
        },options)
    })
}
export default install
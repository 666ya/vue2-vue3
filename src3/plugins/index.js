function toLowerCaseFn(options) {
    const result = typeof (options) === 'string' ? options.toLocaleLowerCase() : options
    return result
}
var unstils = {
    a: 1,
    b: 2
}
// 对象形式
// const toLowerCasePlugin = {
//     install(app, options) {
//         app.provide('toLowerCaseProvide', (params) => typeof (params) === 'string' ? params.toLocaleLowerCase() : params)
//     }
// }
// 函数形式
function toLowerCasePlugin(app, options) {
    app.provide('toLowerCaseProvide', (params) => typeof (params) === 'string' ? params.toLocaleLowerCase() : params)
}
export {
    toLowerCasePlugin
}
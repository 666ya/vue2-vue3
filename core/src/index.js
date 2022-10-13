// example
const reactiveObj = reactive({
    foo: {
        bar: 1
    }
})
const shallowObj = shallowReactive({
    foo: {
        bar: 1
    }
})

const readonlyObj = readonly({
    foo: {
        bar: 1
    }
})
const shallowReadonlyObj = shallowReadonly({
    foo: {
        bar: 1
    }
})

effect(() => {
    console.log(shallowReadonlyObj.foo.bar)
})
setTimeout(() => {
    shallowReadonlyObj.foo = {
        bar: 2
    }
    // console.log(shallowReadonlyObj.foo.bar)
}, 2000)
// })
// 可调度行
// effect(() => {
//     console.log(obj.count)
// }, {
//     scheduler(fn) {
//         jobQueue.add(fn)
//         flushJob()
//     }
// })
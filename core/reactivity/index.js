let activeEffect
const bucket = new WeakMap()

function track(target, key) {
    if (!activeEffect) return
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    // const effectToRun = new Set()
    // effects && effects.forEach(effectFn => {
    //     if (effectFn !== activeEffect) {
    //         effectToRun.add(effectFn)
    //     }
    // })
    const effectToRun = new Set(effects)
    effectToRun && effectToRun.forEach(effectFn => effectFn())
}
// 注册副作用
function effect(fn) {
    const effectFn = () => {
        for (let i = 0; i < effectFn.deps.length; i++) {
            const dep = effectFn.deps[i]
            dep.delete(effectFn)
        }
        effectFn.deps.length = 0
        if (activeEffect) {
            effectFn.parent = activeEffect
            activeEffect = effectFn
        } else {
            activeEffect = effectFn
        }
        fn()
        activeEffect = effectFn.parent
    }
    effectFn.deps = []
    effectFn()
}

// example
const rawObj = {
    text: 'text',
    show: true,
    foo: true,
    bar: true,
    count: 1
}
const obj = new Proxy(rawObj, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newValue, recevier) {
        target[key] = newValue
        trigger(target, key)
    }
})
// 无线循环
effect(() => {
    obj.count++
})
// let temp1, temp2
// effect(function effect1() {
//     console.log('function effect1')
//     effect(function effect2() {
//         console.log('function effect2')
//         temp2 = obj.bar
//     })

//     temp1 = obj.foo
// })


// effect(() => {
//     console.log('app effect')
//     document.querySelector('#app').textContent = obj.text
// })

// setTimeout(() => {
//     obj.foo = false
// }, 2000)

// obj.text = '修改'
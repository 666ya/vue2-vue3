let activeEffect = null

function effect(eff) {
    activeEffect = eff
    activeEffect()
    activeEffect = null
}
let targetMap = new WeakMap()

function track(target, key) {
    if (activeEffect) {
        let depsMap = targetMap.get(target)
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()))
        }
        let dep = depsMap.get(key)
        if (!dep) {
            depsMap.set(key, (dep = new Set()))
        }
        dep.add(activeEffect)
    }
}

function trigger(target, key) {
    const depsMap = targetMap.get(target)
    if (!depsMap) {
        return
    }
    let dep = depsMap.get(key)
    if (dep) {
        dep.forEach(effect => effect());
    }

}

function reactive(target) {
    const handler = {
        get(target, key, recevier) {
            let result = Reflect.get(target, key, recevier)
            track(target, key)
            return result
        },
        set(target, key, value, recevier) {
            const oldValue = target[key]
            let result = Reflect.set(target, key, value, recevier)
            if (oldValue != result) {
                trigger(target, key)
            }
            return result
        }
    }
    return new Proxy(target, handler)
}


let product = reactive({
    price: 5,
    quantity: 3
})
let total = 0
let salePrice = 0
effect(() => {
    total = product.price * product.quantity
    console.log(total)
})
effect(() => {
    salePrice = product.price * 0.9
})


// effect()
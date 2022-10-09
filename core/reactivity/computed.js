// computed
class ComputedRefImpl {
    constructor(getter, setter) {
        this._dirty = true
        this._setter = setter
        this.effect = getter
        this._value = undefined
    }
    get value() {
        if (this._dirty) {
            this._dirty = false
            this._value = this.effect()
        }
        return this._value
    }
    set value(newValue) {
        this._setter(newValue)
    }
}

function computed(getterOrOptions) {
    let getter
    let setter
    if (typeof getterOrOptions === 'function') {
        setter = () => {}
        getter = getterOrOptions
    } else {
        getter = getterOrOptions.get
        setter = getterOrOptions.set
    }
    const cRef = new ComputedRefImpl(getter, setter)
    return cRef
}

// trigger
function trigger(target, key, newValue) {
    if (target[key] !== newValue) {
        effect()
    }
}
// track
function track(target, key) {

}
const rawObj = {
    count: 1,
    show: false
}
const reactiveObj = new Proxy(rawObj, {
    get(target, key, recevier) {
        return Reflect.get(target, key, recevier)
    },
    set(target, key, newValue, recevier) {
        trigger(target, key, newValue)
        return Reflect.set(target, key, newValue, recevier)
    }
})

const count = computed(() => {
    return reactiveObj.count + 1
})

function effect() {
    console.log('触发副作用' + count.value)
}
effect()
reactiveObj.show = false
setTimeout(() => {
    reactiveObj.count++
}, 2000)
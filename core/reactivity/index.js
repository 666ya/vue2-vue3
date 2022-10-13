let activeEffect
const bucket = new WeakMap()
// 定义一个任务队列
const jobQueue = new Set()
const p = Promise.resolve()
let isFlushing = false

function flushJob() {
    if (isFlushing) return
    isFlushing = true
    p.then(() => {
        jobQueue.forEach(job => job())
    }).finally(() => {
        isFlushing = false
    })
}

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
    const effectToRun = new Set(effects)
    effectToRun && effectToRun.forEach(effectFn => {
        if (effectFn.options.scheduler) {
            effectFn.options.scheduler(effectFn)
        } else {
            effectFn()
        }
    })
}
// 注册副作用
function effect(fn, options = {}) {
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
        const res = fn()
        activeEffect = effectFn.parent
        return res
    }
    effectFn.options = options
    effectFn.deps = []
    // 懒加载
    if (!options.lazy) {
        effectFn()
    }
    return effectFn
}
// computed
function computed(getter) {
    let _value, _dirty = true
    const effectFn = effect(getter, {
        lazy: true,
        scheduler() {
            _dirty = true
            trigger(obj,
                'value')
        }
    })
    const obj = {
        get value() {
            if (_dirty) {
                _value = effectFn()
                _dirty = false
            }
            track(obj, 'value')
            return _value
        }
    }
    return obj
}


// watch
function traverse(value, seen = new Set()) {
    if (typeof value !== 'objcet' || value === null || seen.has(value)) return
    seen.add(value)
    for (const key in value) {
        traverse(value[key], seen)
    }
    return value
}

function watch(source, cb, options = {}) {
    let getter
    if (typeof source === 'function') {
        getter = source
    } else {
        getter = () => traverse(source)
    }
    let oldValue, newValue
    const job = () => {
        newValue = effectFn()
        cb(newValue, oldValue)
        oldValue = newValue
    }
    const effectFn = effect(
        () => getter(), {
            lazy: true,
            scheduler: () => {
                if (options.flush === 'post') {
                    const p = Promise.resolve()
                    p.then(job)
                } else {
                    job()
                }
            }
        })
    if (options.immediate) {
        job()
    } else {
        oldValue = effectFn()
    }

}

// handler
var baseHandler = {
    get(target, key, receiver) {
        if (key === 'raw') {
            return target
        }
        track(target, key)
        const res = Reflect.get(target, key, receiver)
        if (typeof res === 'object' && res !== null) {
            return reactive(res)
        }
        return res
    },
    set(target, key, newValue, recevier) {
        const oldValue = target[key]
        const res = Reflect.set(target, key, newValue, recevier)
        if (target === recevier.raw) {
            if (oldValue !== newValue && (oldValue === oldValue || newValue === newValue)) {
                trigger(target, key)
            }
            return res
        }

    }
}

function createReactive(obj, isShallow = false, isReadonly = false) {
    return new Proxy(obj, {
        get(target, key, receiver) {
            if (key === 'raw') {
                return target
            }
            if (!isReadonly) {
                track(target, key)
            }
            const res = Reflect.get(target, key, receiver)
            if (isShallow) {
                return res
            }
            if (typeof res === 'object' && res !== null) {
                return isReadonly ? readonly(res) : reactive(res)
            }
            return res
        },
        set(target, key, newValue, recevier) {
            if (isReadonly) {
                console.log(`属性${key}是只读的`)
                return true
            }
            const oldValue = target[key]
            const res = Reflect.set(target, key, newValue, recevier)
            if (target === recevier.raw) {
                if (oldValue !== newValue && (oldValue === oldValue || newValue === newValue)) {
                    trigger(target, key)
                }
                return res
            }

        }
    })
}

function reactive(obj) {
    return createReactive(obj)
}

function shallowReactive(obj) {
    return createReactive(obj, true)
}

function readonly(obj) {
    return createReactive(obj, false, true /* 只读 */ )
}

function shallowReadonly(obj) {
    return createReactive(obj, true, true /* 只读 */ )
}
let activeEffect
class Dep {
    subscribe = new Set()
    depend() {
        if (activeEffect) {
            this.subscribe.add(activeEffect)
        }
    }
    notify() {
        this.subscribe.forEach(effect => effect())
    }
}

function reactive(raw) {
    Object.keys(raw).forEach(key => {
        const dep = new Dep()
        let value = raw[key]
        Object.defineProperty(raw, key, {
            get() {
                dep.depend()
                return value
            },
            set(newValue) {
                value = newValue
                dep.notify()
            }
        })
    })
    return raw
}

function watchEffect(effect) {
    activeEffect = effect
    effect()
    activeEffect = null
}
const data = reactive({
    count: 1,
    form: {
        name: 'title'
    },
    foo: 'bar'
})
watchEffect(() => {
    b = data.count * 10
    c = data.foo
})


var b = 10
var c = ''
data.count++
data.foo = 'foo'
// data.form.name = 'changed'
console.log(b)
console.log(c)
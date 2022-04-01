function ref(value) {
    const refObject = {
        get value() {
            return value
        },
        set value(newValue) {
            value = newValue
        }
    }
    return refObject
}
const count = ref(0)
const {
    value
} = count
console.log(value)

// reactive
function reactive(obj) {
    const handler = {
        get(target, key) {
            return target[key]
        },
        set(target, key, newValue) {
            target[key] = newValue
        }
    }
    return new Proxy(obj, handler)
}
const obj = reactive({
    count: 1
})
console.log(obj)
obj.count = 2
console.log(obj)
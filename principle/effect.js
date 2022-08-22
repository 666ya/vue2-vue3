let targetWeakMap = new WeakMap()
console.log(targetWeakMap)

function track(target, type, key) {
    const depsMap = targetWeakMap.get(target)
    // if (!depsMap) {
    //     targetWeakMap.add(target, new Map())
    // }
    // const deps = depsMap.get(key)
    // if (!deps) {
    //     console.log(depsMap)
    // }
}
track()
console.log(targetWeakMap)
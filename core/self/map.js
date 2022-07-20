// var camelizeRE = /-(\w)/g;
// var fun = function (str) {
//     return str.replace(camelizeRE, function (_, c) { return (c ? c.toUpperCase() : ''); });
// };


// const hyphenateRE = /\B([A-Z])/g

// const hyphenate = (str) => str.replace(hyphenateRE, "-$1").toLowerCase()


// console.log(hyphenate('ABcDc'))
// console.log(hyphenate('true'))
// console.log(hyphenate('测试'))



var obj = {
    book: {
        name: '名字',
        year: '2017',

    }
}

const proxy = new Proxy(obj, {
    get(target, key, reciver) {
        console.log('get propxy')
        console.log(key)
        return target[key]
    },
    // defineProperty(target, key, descriptor) {
    //     return Reflect.defineProperty(target, key, descriptor)
    // }
})
console.log(proxy.book.name)


// Object.defineProperty(proxy, 'foo', {
//     enumerable: true,
//     configurable: true,
//     get() {
//         return obj.bar
//     }
// })

// console.log(proxy.bar)


// class ComputedRefImpl { 
//     _value = '2'
//     _dirty = true
//     get value() { 
//         this._dirty = false
//         return this._value
//     }
//     set value(newValue) { 
//         this._value = newValue
//     }
// }
// const cref = new ComputedRefImpl()

// console.log(cref)

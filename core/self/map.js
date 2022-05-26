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
    bar: 'bar'
}

const proxy = new Proxy(obj, {
    get(target, key, reciver) { 
        console.log('get propxy')
        return target[key]
    },
    defineProperty(target, key, descriptor) { 
        return Reflect.defineProperty(target, key, descriptor)
    }
})

Object.defineProperty(proxy, 'foo', {
    enumerable: true,
    configurable: true,
    get() { 
        return obj.bar
    }
})

// console.log(proxy.bar)

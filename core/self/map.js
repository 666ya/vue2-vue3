var camelizeRE = /-(\w)/g;
var fun = function (str) {
    return str.replace(camelizeRE, function (_, c) { return (c ? c.toUpperCase() : ''); });
};


const hyphenateRE = /\B([A-Z])/g

const hyphenate = (str) => str.replace(hyphenateRE, "-$1").toLowerCase()


console.log(hyphenate('ABcDc'))
console.log(hyphenate('true'))
console.log(hyphenate('测试'))

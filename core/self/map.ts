const camelizeRE = /-(\w)/g
var fun = (str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

const a = fun('a-b-c')
console.log(a)
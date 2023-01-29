function defaultString(item) {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }
    return item.toString()
}
class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `[#${key}: ${this.value}]`
    }
}
class Dictionary {
    constructor(toStrFn = defaultString) {
        this.toStrFn = toStrFn
        this.table = {}
    }
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }
        return false
    }
    remove(key) {
        if (this.has(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }
    has(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value
    }
    keyValues() {
        const valuePairs = []
        for (const k in this.table) {
            if (this.has(k)) {
                valuePairs.push(this.table[k])
            }
        }
        return valuePairs
    }
    keys() {
        return this.keyValues().map(valuePair => valuePair.key)
    }
    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }
    forEach(callbackFn) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if (result === false) {
                break
            }
        }
    }
    size() {
        return Object.keys(this.table).length
    }
    isEmpty() {
        return this.size() === 0
    }
    clear() {
        this.table = {}
    }
    toStrng() {
        if (this.isEmpty()) {
            return ''
        }
        const valuePairs = this.keyValues()
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString
    }
}

const dict = new Dictionary()
dict.set('Gandalf', 'gandalf@email.com')
dict.set('John', 'john@email.com')
dict.set('Tyrion', 'Tyrion@email.com')




console.log(dict.has('John'))
console.log(dict.size())
console.log(dict.keys())
console.log(dict.values())
console.log(dict.get('Tyrion'))


dict.remove('John')
console.log(dict.keys())
console.log(dict.values())
console.log(dict.keyValues())

dict.forEach((k, v) => {
    console.log('forEach：', `key: ${k},value: ${v}`)
})
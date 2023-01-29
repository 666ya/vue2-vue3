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
class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }
    loselosrHashCode(key) {
        if (typeof key === 'number') {
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }
    hashCode(key) {
        return this.loselosrHashCode(key)
    }
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)
            return true
        }
        return false
    }
    remove(key) {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if (valuePair != null) {
            delete this.table[hash]
            return true
        }
        return false
    }
    get(key) {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        return valuePair = null ? undefined : valuePair.value
    }
}
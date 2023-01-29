class Set {
    constructor() {
        this.count = 0
        this.items = {}
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            this.count++
            return true
        }
        return false
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            this.count--
            return true
        }
        return false
    }
    clear() {
        this.items = {}
        this.count = 0
    }
    size() {
        return this.count
    }
    values() {
        let valuesArray = []
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                valuesArray.push(this.items[key])
            }

        }
        return valuesArray
    }
    // 并集
    union(otherSet) {
        const unionSet = new Set()
        // 仅Es2015支持
        // this.values().forEach(value => unionSet.add(value))
        // otherSet.values().forEach(value => unionSet.add(value))
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    }
    // 交集
    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        // 仅Es2015支持
        // this.values().forEach(value => {
        //     if (otherSet.has(value)) {
        //         intersectionSet.add(value)
        //     }
        // })
        // let values = this.values()
        // for (let i = 0; i < values.length; i++) {
        //     if (otherSet.has(values[i])) {
        //         intersectionSet.add(values[i])
        //     }
        // }
        // 优化: 取最新的循环
        let biggerArray = values
        let smallArray = otherValues
        if (biggerArray.length - smallArray.length > 0) {
            biggerArray = otherValues
            smallArray = values
        }
        for (let i = 0; i < smallArray.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }
    // 差集
    difference(otherSet) {
        const defferenceSet = new Set()
        // 仅Es2015支持
        // this.values().forEach(value => {
        //     if (!otherSet.has(value)) {
        //         defferenceSet.add(value)
        //     }
        // })
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                defferenceSet.add(values[i])
            }
        }
        return defferenceSet
    }
    // 子集
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        }
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                return false
            }
        }
        return true
    }
}

const set = new Set()
set.add(1)


const set1 = new Set()
set1.add(1)

console.log(set1.isSubsetOf(set))
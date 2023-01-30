function defaultEqualFn(a, b) {
    return a === b
}
class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}

class LinkedList {
    constructor(equalFn = defaultEqualFn) {
        this.head = undefined
        this.count = 0
        this.equalFn = equalFn
    }
    push(element) {
        const node = new Node(element)
        if (this.head == null) {
            // 空链表
            this.head = node
        } else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            if (index === 0) {
                let current = this.head
                node.next = current
                this.head = node
            } else {
                let previous = this.getElementAt(index - 1)
                let current = this.getElementAt(index)
                previous.next = node
                node.next = current
            }
            this.count++
            return true
        }
        return false
    }
    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalFn(current.element, element)) {
                return i
            }
            current = current.next
        }
        return -1
        // if (this.head == null) {
        //     return -1
        // }
        // let current = this.head
        // let index = 0
        // while (current.next != null) {
        //     if (this.equalFn(current.element, element)) {
        //         return index
        //     } else {
        //         index++
        //         current = current.next
        //     }
        // }
        // return -1
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
            } else {
                let previous
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                // const previous = this.getElementAt(index - 1)
                // const current = this.getElementAt(index)
                // previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }
    remove(element) {
        const index = this.indexOf(element)
        // if (index >= 0) {
        //     this.removeAt(index)
        // }
        this.removeAt(index)
    }
    isEmpty() {
        return this.count === 0
    }
    size() {
        return this.count
    }
    getHead() {
        return this.head
    }
    toString() {
        // if (this.isEmpty()) {
        //     return ''
        // }
        // let current = this.head
        // let objString = `${current.element}`
        // while (current.next != null) {
        //     current = current.next
        //     objString = `${objString},${current.element}`
        // }
        // return objString
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 0; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}

function defaultToString(item) {
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
    constructor(key, value, hash) {
        this.key = key
        this.value = value
        this.hash = hash
    }
    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}
class HashTableSeparateChaining {
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
            if (this.table[position] == null) {
                this.table[position] = new ValuePair(key, value, this.hashCode(key))
            } else {
                let index = position + 1
                while (this.table[index] != null) {
                    index++
                }
                this.table[index] = new ValuePair(key, value, this.hashCode(key))
            }
            return true
        }
        return false
    }
    remove(key) {
        const position = this.hashCode(key)
        if (this.table[position] != null) {
            let index = position
            while (this.table[index] != null && this.table[index].key !== key) {
                index++
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index]
                this.verifyRemoveSideEffect(key, index)
                return true
            }
        }
        return false
    }
    verifyRemoveSideEffect(key, removePosition) {
        const hash = this.hashCode(key)
        let index = removePosition + 1
        while (this.table[index] != null) {
            let postHash = this.hashCode(this.table[index].key)
            if (postHash <= hash || postHash <= removePosition) {
                this.table[removePosition] = this.table[index]
                delete this.table[index]
                removePosition = index
            }
            index++
        }
    }
    get(key) {
        const position = this.hashCode(key)
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                return this.table[position].value
            }
            let index = position + 1
            while (this.table[index] != null && this.table[index].key !== key) {
                // if (this.table[index].key === key) {
                //     return this.table[index].value
                // }
                index++
            }
            if (this.table[index] != null && this.table[index].key === key) {
                return this.table[index].value
            }
        }
        return undefined
    }
}


const table = new HashTableSeparateChaining()

table.put('Ygritte', 'Ygritte@qq.com')
table.put('Jonathan', 'Jonathan@163.com')
table.put('Jamie', 'Jamie@163.com')
table.put('Jack', 'Jack@163.com')
table.put('Jasmine', 'Jasmine@163.com')
table.put('Jake', 'Jake@163.com')
table.put('Nathan', 'Nathan@163.com')
table.put('Athelstan', 'Athelstan@163.com')
table.put('Sue', 'Sue@163.com')
table.put('Aethelwulf', 'Aethelwulf@163.com')
table.put('Sargeras', 'Sargeras@163.com')


table.remove('Jonathan')
console.log(table)
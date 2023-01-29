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
            if (index === 0) {
                this.head = undefined
            } else {
                const previous = this.getElementAt(index - 1)
                const current = this.getElementAt(index)
                previous.next = current.next
            }
            this.count--
        }
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
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `[#${key}: ${this.value}]`
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
                this.table[position] = new LinkedList()
            }
            this.table[position].push(new ValuePair(key, value))
            return true
        }
        return false
    }
}


const table = new HashTableSeparateChaining()

table.put('fy', 'fy@qq.com')
table.put('fy', 'fy@163.com')

console.log(table)
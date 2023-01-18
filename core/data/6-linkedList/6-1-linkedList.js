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

const link = new LinkedList()
for (let i = 0; i < 11; i++) {
    link.push(i)
}
console.log(link.insert(11, 11))
console.log(link.indexOf(2))
console.log(link.toString())
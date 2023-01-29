function defaultEqualFn(a, b) {
    return a === b
}
class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}
class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev
    }
}

class DoublyLinkedLisst {
    constructor(equalFn = defaultEqualFn) {
        this.head = undefined
        this.tail = undefined
        this.count = 0
        this.equalFn = equalFn

    }
    push(element) {
        if (!this.head) {
            const node = new DoublyNode(element)
            this.head = node
            this.tail = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            const node = new DoublyNode(element, undefined, current)
            current.next = node
            this.tail = node
        }
        this.count++
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head
            for (let i = 0; i < index && current; i++) {
                current = current.next
            }
            return current
        }
        return undefined
    }
    insert(index, element) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head
            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    current.prev = node
                    this.head = node
                }
            } else if (index === this.count) {
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.count++
            return true
        }
        return false
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
                if (this.count === 1) {
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) {
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.count--
            return current.element
        }
        return undefined
    }
    toString() {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 0; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}

const link = new DoublyLinkedLisst()
for (let i = 0; i < 11; i++) {
    link.push(i)
}
link.removeAt(3)
console.log(link.toString())
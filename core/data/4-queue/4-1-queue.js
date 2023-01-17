class Queue {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    enQueue(element) {
        this.items[this.count] = element
        this.count++
    }
    deQueue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    size() {
        return this.count - this.lowestCount
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

// example
function hotPotato(elementsList, number) {
    const queue = new Queue()
    const eliminatedList = []
    for (let i = 0; i < elementsList.length; i++) {
        queue.enQueue(elementsList[i])
    }
    while (queue.size() > 1) {
        // for (let i = 0; i < number; i++) {
        //     const result = queue.deQueue()
        //     if (i === number - 1) {
        //         eliminated.enQueue(result)
        //         console.log(result + '被淘汰')
        //     } else {
        //         queue.enQueue(result)
        //     }
        // }
        for (let i = 0; i < number; i++) {
            queue.enQueue(queue.deQueue())
        }
        eliminatedList.push(queue.deQueue())
    }
    return {
        eliminatedList,
        winner: queue.deQueue()
    }

}
const elementsList = ['赵', '钱', '宋', '李', '周', '吴']

const result = hotPotato(elementsList, 4)
result.eliminatedList.forEach(name => {
    console.log(name + '被淘汰')
})
console.log(result.winner + '获得胜利')
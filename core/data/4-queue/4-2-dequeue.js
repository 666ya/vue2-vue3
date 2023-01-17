class Dequeue {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    addBack(element) {
        this.items[this.count] = element
        this.count++
    }
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }

        // for (let i = this.count; i > this.lowestCount; i--) {
        //     this.items[i] = this.items[i - 1]
        // }
        // this.items[this.lowestCount] = element
        // this.count++
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
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
//
// const startTime = new Date().getTime()
// const queue = new Dequeue()
// for (let i = 0; i < 100000; i++) {
//     if (i & 1 !== 0) {
//         // 奇数
//         queue.addFront(i)
//     } else if (i % 5 === 0) {
//         queue.removeFront()
//     } else if (i % 6 === 0) {
//         queue.removeBack()
//     } else {
//         // 偶数
//         queue.addBack(i)
//     }
// }
// const result = queue.toString()
// const endTime = new Date().getTime()
// console.log(queue.lowestCount)

// console.log(`${endTime - startTime}` + '：  ' + result)


// 回文example
function panlindromeChecker(str) {
    if (str == null || (str != null && str.length === 0)) {
        return false
    }
    const dequeue = new Dequeue()
    const loswerStr = str.toLowerCase().split(' ').join('')
    for (let i = 0; i < loswerStr.length; i++) {
        dequeue.addBack(loswerStr[i])
    }
    let isEqual = true
    while (dequeue.size() > 1 && isEqual) {
        if (dequeue.removeFront() !== dequeue.removeBack()) {
            isEqual = false
        }
    }
    return isEqual
}
const startTime = new Date().getTime()
const result = panlindromeChecker('kayak')
const endTime = new Date().getTime()
console.log(`${endTime-startTime}` + '： ' + result)
let nums = [1, 2, 8, 4, 5, 6]
let count = 0
// 经典
const bubbleSort = (array) => {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            count++
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

// 优化
const bubbleSortOptimize = (array) => {
    const len = array.length
    for (let i = 0; i < len; i++) {
        let flag = false // 优化点1
        for (let j = 0; j < len - 1 - i; j++) { // j < len - 1 - i 优化点2
            count++
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                flag = true
            }
        }
        if (!flag) {
            break
        }
    }
    return array
}
console.log(bubbleSortOptimize(nums))
console.log(count)
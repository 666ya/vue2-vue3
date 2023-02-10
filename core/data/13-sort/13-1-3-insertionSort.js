/**
 * @param {number[]} array
 * @return {number[]}
 */
const insertionSort = (array) => {
    const len = array.length
    let temp
    for (let i = 1; i < len; i++) {
        let j = i
        temp = array[i]
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp
    }
    return array
}

console.log(insertionSort([5, 4, 3, 2, 1]))
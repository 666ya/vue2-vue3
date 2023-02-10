let nums = [5, 4, 3, 2, 1]
const selectionSort = (array) => {
    const len = array.length
    let indexMin
    for (let i = 0; i < len - 1; i++) {
        indexMin = i
        for (let j = i; j < len; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        if (i != indexMin) {
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
//[5, 4, 3, 2, 1]
/**
 *  i =0  indexMin = 0
 */
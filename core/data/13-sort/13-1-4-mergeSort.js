// 归并排序 [2,1,0]
// 迭代法
function mergePass(arr = []) {
    let temp = []
    let N = arr.length
    let length = 1
    let t
    for (t = 0; Math.pow(2, t) < N; t++, length *= 2) {
        const even = t % 2 === 0
        for (let left = 0; left < N; left += 2 * length) {
            const middle = left + length < N ? left + length : left
            const right = left + (2 * length) < N ? left + (2 * length) : N
            merge(even ? arr : temp, even ? temp : arr, left, middle, right)
        }
    }
    if (t % 2 === 0) {
        return arr
    }
    return temp
}

function merge(arr, temp, left, middle, right) {
    const leftEnd = middle - 1
    while (left <= leftEnd && middle < right) {
        if (arr[left] > arr[middle]) {
            temp[left + middle - leftEnd - 1] = arr[middle++]
        } else {
            temp[left + middle - leftEnd - 1] = arr[left++]
        }
    }
    while (left > leftEnd && middle < right) {
        temp[left + middle - leftEnd - 1] = arr[middle++]
    }
    while (left <= leftEnd && middle >= right) {
        temp[left + middle - leftEnd - 1] = arr[left++]
    }
}
let nums = [2, 1, 0]
console.log(mergePass(nums))
//[2, 1, 0]
/**
 *  t = 0  
 */
//length=1 left=0  middle=1 right=2 leftEnd=0
//temp[0] = arr[1] = 1
//[1]

// left=0 middle=2 right=2 leftEnd=0
//temp[1] = arr[0] = 2
//[1,2]

// left=1 middle=2 right=2 leftEnd=0
// 跳过

// length=1 left=2 middle=2 right=3 leftEnd=1
// temp = [1,2,0]

// length=1 left=2 middle=3 right=3 leftEnd=1
// 跳过

/**
 *  t = 1
 */
// length=2 even=false

// left=0 middle=2 right=3 leftEnd=1
// array[0] = 0  [0,1,0]

//left=0 middle=3 right3 leftEnd=1
//array[1] = 1    [0,1,0]

// left=1 middle=3 right=3 leftEnd=1
// arrry[2] = 2  [0,1,2]

// left=2 middle=3 right=3 leftEnd=1

/**
 *  t=2  跳过
 */
// 返回【0,1,2】
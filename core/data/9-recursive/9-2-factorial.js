// function factorialFunction(number) {
//     if (number < 0) {
//         return undefined
//     }
//     let total = 1
//     for (let i = number; i > 1; i--) {
//         total = total * i
//     }
//     return total
// }



// function factorialFunction(n) {
//     console.trace()
//     if (n == 1 || n == 0) {
//         return n * 1
//     }
//     return n * factorialFunction(n - 1)
// }
function factorialFunction(n, total) {
    if (n <= 1) {
        return total
    }
    return factorialFunction(n - 1, n * total)
}
console.log(factorialFunction(5, 1))
// let i = 0

// function recursiveFn(i) {
//     console.log(i)
//     recursiveFn(i)
// }
// try {
//     recursiveFn()
// } catch (error) {
//     console.log('i=' + i + 'error' + error)
// }
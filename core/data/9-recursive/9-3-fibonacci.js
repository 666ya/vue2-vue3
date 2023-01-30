function fibonacciFn(number) {
    if (number < 0) {
        return undefined
    } else if (number < 2) {
        return number
    }
    let f0 = 0
    let f1 = 1
    let fx = 0
    // for (let i = 0; i < number - 1; i++) {
    //     fx = f0 + f1
    //     f0 = f1
    //     f1 = fx
    // }
    for (let i = 2; i <= number; i++) {
        fx = f0 + f1
        f0 = f1
        f1 = fx
    }
    return fx
}

console.log(fibonacciFn(9))
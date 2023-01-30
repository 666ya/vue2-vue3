function understandRecursive() {
    const recursionAnswer = confirm('Do you understand recursion ?')
    if (recursionAnswer === true) {
        return true
    }
    understandRecursive(recursionAnswer)
}
understandRecursive()
const arr = reactive(['foo'])
effect(() => {
    console.log(arr[0])
})

setTimeout(() => {
    arr[0] = 'bar'
}, 2000)

// arr[1] = 'bar'
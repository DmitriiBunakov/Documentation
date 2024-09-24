
setTimeout(() => {

queueMicrotask(() => {
    console.log('queueMicrotask');
})

requestAnimationFrame(() => {
    console.log('raf');
})

setTimeout(() => {
    console.log('timer');
},)

Promise.resolve()
    .then(() => {
        console.log('resolve');
    })
})
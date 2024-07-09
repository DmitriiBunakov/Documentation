// const fs = require('fs')

// console.log('1');

// setImmediate(() => {
//     console.log('setImmediate');
// })

// fs.readFile('./script1.js', () => {
//     console.log('readFile');
// })

// process.nextTick(() => {
//     console.log('nextTick');
// })

// setTimeout(() => {
//     console.log('setTimeout');

//     process.nextTick(() => {
//         console.log('nextTick');
//     })
// })

// queueMicrotask(() => {
//     console.log('queueMicrotask');

//     process.nextTick(() => {
//         console.log('nextTick');
//     })
// })

// Promise.resolve()
//     .then(() => {
//         console.log('resolve');
//     })




for (let index = 0; index < 10; index++) {
    queueMicrotask(() => console.log('queue'))
    Promise.resolve(index).then(console.log)
}

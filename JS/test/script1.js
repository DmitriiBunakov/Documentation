function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function* createAsyncGenerator() {
    yield sleep(1000).then(() => {
        console.log('first console');
        return 'first'
    });
    console.log(1);
    yield sleep(1000).then(() => {
        console.log('second console');
        return 'second'
    });
    console.log(2);
    yield sleep(1000).then(() => {
        console.log('third console');
        return 'third';
    });
    console.log(3);
}

const gen = createAsyncGenerator()

gen.next().then((a) => {
    console.log(a);
});
console.log('next');

gen.next().then((a) => {
    console.log(a);
})
console.log('next');

gen.next().then((a) => {
    console.log(a);
})
console.log('next');
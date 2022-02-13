setTimeout(() => {
    console.log('timer 0');
});

new Promise(resolve => {
    console.log('create promise');

    setTimeout(() => {
        console.log('timer 0 from promise');
        resolve('resolve');
    });
})
    .then(data => {
        console.log(data);
        return 'второй then';
    })
    .then(data => {
        console.log(data);
    });

console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);

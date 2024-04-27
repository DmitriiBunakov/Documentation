const source = new EventSource('http://localhost:5500')

source.addEventListener('message', (event) => {
    console.log(event);
})

source.addEventListener('error', (error) => {
    console.log(error);
})


// setTimeout(() => {
//     fetch('http://localhost:5500')
//         .then(console.log)
// }, 1000)



setTimeout(() => {
    console.log('close');
    source.close();
}, 10000)
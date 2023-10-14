// function longTask() {
//     let i = 0;

//     for (let index = 0; index < 1_000_000_000_0; index++) {
//         i++;
//     }

//     console.log(i);
// }

// longTask();

// document.addEventListener('click', () => {
//     longTask();
// })


// fetch('https://jsonplaceholder.typicode.com/23todos/1')
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(json => console.log(json))
//     .catch(e => {
//         console.log('error', e);
//     });


// async function* nonBlockingGenerator() {
//     yield await new Promise(resolve => setTimeout(resolve, 2000));
// }

// async function splitToNonBlocking(tasks) {
//     let result;

//     for (const task of tasks) {
//         console.log(task);
//         await nonBlockingGenerator().next();
//         result = await task();
//     }

//     return result;
// }

// function plus(a, b) {
//     return a + b;
// }
// function pow(a, b) {
//     return a * b;
// }
// async function main() {
//     const result = await splitToNonBlocking([
//         plus,
//         pow,
//     ], 1);
//     console.log(result);
// }
// main();




// window.addEventListener('message', event => {
//     if (event.data === 'message' && event.source === window) {
//         console.log('message');
//     }
// })

// document.addEventListener('test', e => {
//     console.log('test', e);
// })

// document.dispatchEvent(new Event('test'))

// setTimeout(() => {
//     console.log('timer');
// })

// postMessage('message')


// Promise.resolve().then(() => {
//     console.log('promise');
// })

document.body.addEventListener('click', function name(e) {
    // e.target.classList.remove('test')
    requestAnimationFrame(() => {
        console.dir(e.target.offsetHeight);
    })
})
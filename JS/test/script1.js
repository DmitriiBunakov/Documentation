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

const lazyImg = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000'

setTimeout(() => {
    document.querySelector('img').src = lazyImg;
}, 1000)

console.log('SCRIPT');

// window.addEventListener('fetch', (event) => {
//     console.log(event);
// })

// const src = 'http://127.0.0.1:5500/JS/test/css.css';
// const htmlSrc = 'http://127.0.0.1:5500/JS/test/index.html';


// const CACHE = window.caches.open('test');


// CACHE.then(cache => {
//     cache.add(src).then(() => {
//         console.log('success');
//     })

//     cache.addAll([
//         htmlSrc,
//         lazyImg,
//     ]).then(() => {
//         console.log('all');
//     })
// })



// const worker = new Worker('./worker.js');
// const worker = new SharedWorker('./worker.js');
// const worker = new ServiceWorker('./worker.js');

// worker.port.start()

// let i = 0;


// setInterval(() => {
//     // worker.postMessage('some message')
//     i++;
// }, 2000)


// worker.postMessage(1);

// setTimeout(() => {
    // worker.postMessage(2);
// }, 3000)

// worker.addEventListener('message', event => {
    // console.log(event);
// })

navigator.serviceWorker.register('./service-worker.js')
    .then(a => {
        console.log(a);


        setTimeout(() => {
            console.log('timer');
            a.update()
        }, 5000)


        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    })
    .catch(e => {
        console.log(e);
    })

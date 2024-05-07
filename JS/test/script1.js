
const worker = new Worker('./worker.js');

worker.addEventListener('message', event => {
    console.log('event from worker', event);
})

worker.postMessage('some data');
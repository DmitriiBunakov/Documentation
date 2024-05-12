
// const worker = new Worker('./worker.js');

// worker.addEventListener('message', event => {
//     console.log('event from worker', event);
// })

// worker.postMessage('some data');


fetch('http://127.0.0.1:3000')
    .then(data => {
        console.log(data);
        return data.json()
    })
    .then(console.log)
    .catch(e => {
        console.log(e);
    })
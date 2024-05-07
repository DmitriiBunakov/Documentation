
console.log('worker');

self.addEventListener('message', (event) => {
    console.log(event);
})

let c = 0;
setInterval(() => {
    self.postMessage(c);
    c++;
}, 2000);
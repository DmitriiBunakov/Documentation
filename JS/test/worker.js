let a;
console.log(a);

self.addEventListener('message', event => {
    a = event.data;
    console.log(a);
})
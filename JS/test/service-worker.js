console.log('Service worker');

self.addEventListener('activate', (e) => {
    console.log(e);
})

self.addEventListener('install', (e) => {
    console.log(e);
})

self.addEventListener('fetch', (e) => {
    console.log(e);


    if (e.request.url.includes('https://jsonplaceholder')) {
        e.respondWith(fetch('https://jsonplaceholder.typicode.com/todos'))
    }
})
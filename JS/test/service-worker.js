console.log('Service worker');

// const image = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000';
const scriptUrl = 'script1.js';
const cssUrl = 'css.css';

self.addEventListener('activate', (e) => {
    console.log('activate', e);

    const cache_v1 = caches.open('v2');

    e.waitUntil(
        cache_v1.then(cache => {
            return cache.addAll([
                // '/',
                // '/index.html',
                scriptUrl,
                cssUrl,
            ])
            .then(() => {
                cache.keys().then(a => {
                    console.log(a);
                 })
            })
        })
    )
})

self.addEventListener('install', (e) => {
    console.log('install', e);
})

self.addEventListener('fetch', (e) => {
    console.log(e);
})

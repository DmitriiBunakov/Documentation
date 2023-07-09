
// const object = new Array(10).fill(null).map(item => {
//     return () => {
//         return new Promise(r => {
//             setTimeout(() => {
//                 r(true)
//             }, 500)
//         })
//     }
// })

// async function test() {
//     console.log(1);

//     for (const iterator of object) {
//         await iterator();
//         console.log('after iterator');
//     }


//     console.log(2);
// }

// console.log(0);
// test()
// console.log(10);

// window.addEventListener('DOMContentLoaded', async event => {
//     const media = await window.navigator.mediaDevices.getDisplayMedia();
//     const videoElement = document.querySelector('video');

//     media.onremovetrack = event => {
//         console.log(event);
//     }

//     console.log(media.getVideoTracks());

//     videoElement.srcObject = media;
//     videoElement.play()


//     navigator.geolocation.getCurrentPosition(position => {
//         console.log(position);
//     });
// })


// window.addEventListener('DOMContentLoaded', async () => {
//     const audio = document.querySelector('audio');

//     navigator.mediaDevices
//         .getUserMedia({ video: false, audio: true })
//         .then(stream => {
//             audio.srcObject = stream;
//             audio.volume = 1;
//             audio.autoplay = true;

//         })
//         .catch((err) => {
//             console.error(`you got an error: ${err}`);
//         });
// })


// function just() {
//     return 1;
// }

// async function test() {
//     console.time();
//     for (let index = 0; index < 1_000_000; index++) {
//         const result = just();
//     }
//     console.timeEnd();
// }
// test();



setTimeout(() => {
    console.log('timer');
}, 0)

const a = document.createElement('button');
document.body.append(a);
a.addEventListener('click', () => {
    console.log('click');
})


for (let index = 0; index < 1_000_000; index++) {
    a.getBoundingClientRect();
    a.style.width = '100px';    
    a.style.height = '100px';    
    a.style.backgroundColor = 'red';    
}


function test() {
    Promise.resolve().then(test)
}
// test()
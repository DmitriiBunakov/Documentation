
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





// let string = '';

// for (let index = 0; index < 1_0; index++) {
//     string += index;
// }

// // console.log(string);


// let arr = [string];

// // for (let index = 0; index < 1_000_00; index++) {
//     // arr.push(string);
// // }


// console.log(arr);




console.log(1);

setImmediate(() => {
    console.log('immediate');

    process.nextTick(() => {
        console.log('next tick immediate');
    })
})

process.nextTick(() => {
    console.log('next tick');
})


setTimeout(() => {
    console.log('timer');
    process.nextTick(() => {
        console.log('next tick timer');
    })
}, 0)

Promise.resolve()
    .then(() => {
        console.log('promise');

        queueMicrotask(() => {
            console.log('queueMicrotask');
        })

        process.nextTick(() => {
            console.log('next tick 2');
        })
    })

process.nextTick(() => {
    console.log('next tick 2');
})

console.log(2);

let i = 0;
// nextTick()


function nextTick() {
    if (i > 1_000_000) {
        return
    }

    process.nextTick(() => {
        i++;
        console.log('next tick');
        nextTick();
    })
}
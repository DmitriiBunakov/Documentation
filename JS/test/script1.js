// function getResult(nums, targets) {
//     let result = [];

//     for (let index = 0; index < nums.length; index++) {

//         for (let index2 = 0; index2 < nums.length; index2++) {
//             const value = nums[index] + nums[index2];
//             const indexElement = targets.findIndex(item => item === value);

//             if (indexElement >= 0) {
//                 result.push(value);
//                 nums.push(value);
 
//                 index = index2 = 0;
//             }
//         }
//     }
//     console.log(result.length);

//     return result.length;
// }

// getResult([5, 7, 5], [12]);



// class Test {
//     ready = new Promise(resolve => {
//         this.resolve = resolve;
//     });
//     resolve;

//     constructor() {
//         this.init();
//     }

//     init() {
//         console.log('start');
//         this.load1()
//             .then(() => {
//                 console.log('then 1');
//             });
//     }

//     async load1() {
//         const promise = new Promise(resolve => {
//             console.log('create promise load1');
//             setTimeout(() => {
//                 console.log('load1 resolve');
//                 resolve();
//             }, 3000);
//         });
//         await promise;
//     }

//     async load2() {
//         const promise = new Promise(resolve => {
//             console.log('create promise load2');
//             setTimeout(() => {
//                 console.log('load2 resolve');
//                 resolve();
//             }, 3000);
//         });
//         await promise;
//     }
// }


// function uniq(strings) {
//     return Array.from(new Set(strings));
// }

// function toLowerCase(strings) {
//     return strings.map(item => item.toLowerCase());
// }

// function add1(strings) {
//     return strings.map(item => item + 1);
// }

// const array = [
//     'TEST',
//     'TEST',
//     'Value',
//     'VAlUe',
//     'UnIq',
//     'Zero',
//     'zERO',
// ]

// function compose(...functions) {
//     return (value) => {
//         return functions.reduceRight((prev, curr) => typeof prev === 'function' ? curr(prev(value)) : curr(prev))
//     }
// }

// const composed = compose(
//     add1,
//     uniq,
//     toLowerCase
// )(array);

// console.log(composed);








//debounce timer
// function debounce(func, ms) {
//     let timerEnded = true;

//     return function(...args) {
//         if (timerEnded) {
//             timerEnded = false;
//             setTimeout(() => timerEnded = true, ms);
//             func(...args);
//         }
//     }
// }

// function log(a) {
//     console.log(a);
// }

// let debounced = debounce(log, 1000);

// debounced(1);
// debounced(2);

// setTimeout(() => {
//     debounced(3);
// }, 500);

// setTimeout(() => {
//     debounced(4);
// }, 1000);

// debounced(5);





// debounce date
// function debounce(func, ms) {
//     let lastCall;

//     return function(...args) {
//         const call = Date.now();

//         if (lastCall === undefined || call >= lastCall + ms) {
//             lastCall = call;
//             func(...args);
//         }
//     }
// }

// function log(a) {
//     console.log(a);
// }

// let debounced = debounce(log, 1000);

// debounced(1);
// debounced(2);

// setTimeout(() => {
//     debounced(3);
// }, 500);

// setTimeout(() => {
//     debounced(4);
// }, 1000);

// debounced(5);











// throttle timer
// function log(a) {
//     console.log(a);
// }

// function throttle(func, ms) {
//     let canCall = true;
//     let lastCallTimerId;
//     let timerId;

//     return (...args) => {
//         if (canCall) {
//             clearTimeout(timerId);
//             canCall = false;
//             lastCallTimerId = setTimeout(() => canCall = true, ms);
//             func(...args);
//         } else {
//             clearTimeout(timerId);

//             timerId = setTimeout(() => {
//                 clearTimeout(lastCallTimerId);
//                 lastCallTimerId = setTimeout(() => canCall = true, ms);
//                 func(...args);
//             }, ms);
//         }
//     }
// }

// let throttled = throttle(log, 1000);

// throttled(1);
// throttled(2);

// setTimeout(() => throttled(3), 100);
// setTimeout(() => throttled(4), 1100);
// setTimeout(() => throttled(5), 1500);







// throttle date 1
// function log(a) {
//     console.log(a);
// }

// function throttle(callback, ms) {
//     let lastCall;
//     let timerId;

//     return function(...args) {
//         const now = Date.now();

//         if (lastCall === undefined || now - lastCall >= ms) {
//             clearTimeout(timerId);
//             callback(...args);
//             lastCall = now;
//             return;
//         }

//         clearTimeout(timerId);

//         timerId = setTimeout(() => {
//             lastCall = now;
//             callback(...args);
//         }, ms);
//     }
// }

// let throttled = throttle(log, 1000);

// throttled(1);
// throttled(2);

// setTimeout(() => throttled(3), 100);
// setTimeout(() => throttled(4), 1100);
// setTimeout(() => throttled(5), 1500);






// throttle date 2
// function log(a) {
//     console.log(a);
// }

// function throttle(callback, ms) {
//     let lastCall;
//     let timerId;

//     return function inside(...args) {
//         const now = Date.now();

//         if (lastCall === undefined || now - lastCall >= ms) {
//             clearTimeout(timerId);
//             callback(...args);
//             lastCall = now;
//             return;
//         }

//         clearTimeout(timerId);
//         timerId = setTimeout(inside, ms, ...args);
//     }
// }

// let throttled = throttle(log, 1000);

// throttled(1);
// throttled(2);

// setTimeout(() => throttled(3), 100);
// setTimeout(() => throttled(4), 1100);
// setTimeout(() => throttled(5), 1500);
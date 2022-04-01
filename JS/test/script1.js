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

<<<<<<< HEAD

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



var value = 10;
let worker = function() {
    console.log(value);
    let value = 20;
};
worker();
=======
>>>>>>> e008cbc0bfc1879b792148e2911c21646f09ec60

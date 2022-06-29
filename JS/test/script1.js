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
// function debounce(callback, ms) {
//     let canCall = true;

//     return function inside(...args) {
//         if (canCall) {
//             canCall = false;
//             callback.apply(this, args);
//             setTimeout(() => canCall = true, ms);
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
//             callback.apply(this, args);
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

// function throttle(callback, ms) {
//     let canCall = true;
//     let wasCallOnPending = false;
//     let lastArgs;

//     return function inside(...args) {
//         lastArgs = args;

//         if (canCall) {
//             canCall = false;
//             callback.apply(this, args);

//             setTimeout(() => {
//                 canCall = true;

//                 if (wasCallOnPending) {
//                     wasCallOnPending = false;
//                     inside.apply(this, lastArgs);
//                 }
//             }, ms);
//         } else {
//             wasCallOnPending = true;
//         }
//     }
// }

// let throttled = throttle(log, 1000);

// throttled(1);
// throttled(2);

// setTimeout(() => throttled(3), 100);
// setTimeout(() => throttled(4), 1100);
// setTimeout(() => throttled(5), 1500);











// class LinkedNode {
//     value;
//     next;

//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     head = null;
//     tail = null;

//     constructor(iterable) {
//         if (iterable && Symbol.iterator in iterable) {
//             this.#createListFromIterable(iterable);
//         }
//     }

//     prepend(data) {
//         if (!this.head) {
//             const element = new LinkedNode(data);
//             this.head = this.tail = element;
//             return element;
//         }

//         const newNode = new LinkedNode(data, this.head);
//         this.head = newNode;
//     }

//     append(data) {
//         if (!this.tail) {
//             const element = new LinkedNode(data);
//             this.head = this.tail = element;
//             return element;
//         }

//         let penultimate = this.head;
//         while (penultimate.next) {
//             penultimate = penultimate.next;
//         }

//         const newNode = new LinkedNode(data);
//         this.tail = penultimate.next = newNode;
//         return newNode;
//     }

//     find(data) {
//         let findedNode;
//         let element = this.head;

//         while (element && (element.value || element.next)) {
//             if (element.value === data) {
//                 findedNode = element;
//                 return findedNode;
//             }

//             element = element.next;
//         }

//         return null;
//     }

//     remove(data) {
//         let findedNode;
//         let previousNode = null;
//         let element = this.head;

//         while (element && (element.value || element.next)) {
//             if (element.value === data) {
//                 findedNode = element;
//                 break;
//             } else {
//                 previousNode = element;
//             }

//             element = element.next;
//         }

//         return this.#removeConditionsHandler(findedNode, previousNode);
//     }

//     contains(data) {
//         return !!this.find(data);
//     }

//     removeLast() {
//         let previousNode;
//         let findedNode;
//         let element = this.head;

//         while(element && (element.next || element.value)) {
//             if (element === this.tail) {
//                 findedNode = element;
//                 break;
//             } else {
//                 previousNode = element;
//             }

//             element = element.next;
//         }

//         return this.#removeConditionsHandler(findedNode, previousNode);
//     }

//     removeFirst() {
//         return this.#removeConditionsHandler(this.head, null);
//     }

//     toArray() {
//         const array = [];
//         let element = this.head;

//         while (element && (element.next || element.value)) {
//             array.push(element.value);
//             element = element.next;
//         }

//         return array;
//     }

//     #removeConditionsHandler(findedNode, previousNode) {
//         if (findedNode) {
//             const nextElement = findedNode.next;

//             if (previousNode && nextElement) {
//                 previousNode.next = nextElement;
//             }

//             if (previousNode && !nextElement) {
//                 previousNode.next = nextElement;
//                 this.tail = previousNode;
//             }

//             if (nextElement && !previousNode) {
//                 this.head = nextElement;
//             }

//             if (!previousNode && !nextElement) {
//                 this.head = this.tail = null;
//             }

//             return true;
//         } else {
//             return false;
//         }
//     }

//     #createListFromIterable(iterable) {
//         let previousElement;

//         for (const iterator of iterable) {
//             const newNode = new LinkedNode(iterator);

//             if (previousElement) {
//                 previousElement.next = previousElement = newNode;
//             } else {
//                 this.head = previousElement = newNode;
//             }
//         }

//         this.tail = previousElement;
//     }
// }

// const linkedList = new LinkedList([1, 2, 3, 4, 5]);



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearchCycle(collection, target) {
//     let result = -1;

//     if (Array.isArray(collection) && collection.length) {
//         let start = 0;
//         let end = collection.length;
//         let middle = Math.floor(end / 2);

//         while(start < end) {
//             const currentItem = collection[middle];

//             if (currentItem === target) {
//                 result = middle;
//                 break;
//             }

//             currentItem > target ? (end = middle) : (start = middle);
//             middle = Math.floor((start + end) / 2);
//             console.log(start, end);
//         }
//     }

//     return result;
// }


// function binarySearchRecursive(collection, target) {
//     let result = -1;

//     if (Array.isArray(collection) && collection.length) {
//         let start = 0;
//         let end = collection.length;
//         result = helper(start, end);
//     }

//     return result;

//     function helper(start, end) {
//         let middle = Math.floor((end + start) / 2);
//         const currentItem = collection[middle];

//         if (start + 1 === end) {
//             return result;
//         }

//         if (currentItem === target) {
//             return middle;
//         }

//         return currentItem > target ? helper(start, middle) : helper(middle, end);
//     }
// }
// console.log(binarySearchRecursive(array, 11));




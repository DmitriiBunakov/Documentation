//? глубокое копирование
{
    //? для массивов внутри обьектов работает также хорошо, потому что for in работает и для массивов

    let o1 = {
        a: 1,
        b: 2,
        c: {
            a: 10,
            b: 11,
            c: {
                name: 'dima',
            },
            d: [
                {
                    a: 'father',
                    b: 'mother',
                },
                {
                    a: 'family',
                }
            ],
        },
    }
    let obj = {};
    function cloneDeep(target, objectToBeCloned) {
        for (let key in objectToBeCloned) {
            if (typeof objectToBeCloned[key] !== 'object') {
                target[key] = objectToBeCloned[key];
            } else {
                target[key] = {};
                cloneDeep(target[key], objectToBeCloned[key]);
            }
        }
    }
    cloneDeep(obj, o1);
    obj.c.d[0].a = 'dima';
    console.log(o1);
    console.log(obj);
}





//? итерация обьектов
//? проходим только по свойствам обьекта, если мы вручную установим прототип, то из за того, что используем Object.keys мы получим только СВОИ свойства, с классами же будет перебирать все родительские
{
    let object = {
        value: 'third',
        name: 'last',
        '5': 'second',
        1: 'first',

        [Symbol.iterator]() {
            const keys = Object.keys(this);
            const iterable = this;
            return {
                current: 0,
                last: keys.length - 1,
                next() {
                    return {
                        done: this.current > this.last,
                        value: iterable[keys[this.current++]],
                    }
                },
            };
        }
    }
    console.log(...object);

    //?====================================================================================================
    let object2 = {
        value: 'third',
        name: 'last',
        '5': 'second',
        1: 'first',

        [Symbol.iterator]: iterator,
    }

    function iterator() {
        const _keys = Object.keys(this);
        const _iterable = this;
        return {
            current: 0,
            last: _keys.length - 1,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: _iterable[_keys[this.current++]] };
                } else {
                    return { done: true, value: undefined };
                }
            }
        }
    }
    console.log(...object2);
}

//? создаю класс с итерацией
{
    class A {
        constructor(data) {
            this.data = data;
        }

        [Symbol.iterator]() {
            const _keys = Object.keys(this);
            const _iterable = this;
            return {
                current: 0,
                last: _keys.length - 1,
                next() {
                    if (this.current <= this.last) {
                        return { done: false, value: _iterable[_keys[this.current++]] };
                    } else {
                        return { done: true, value: undefined };
                    }
                }
            }
        }
    }
    class B extends A {
        constructor(data) {
            super(data);
        }

        valueFromSecondObj = 'secondObj';
    }
    class C extends B {
        constructor(data) {
            super(data);
        }

        valueFrom3Obj = '3obj';
    }
    let object = new C('dima');

    console.log(...object);
}





//? рекурсия
{
    let company = {
        sales: [
            {
                name: 'John',
                salary: 1000
            },
            {
                name: 'Alice',
                salary: 600
            }
        ],

        development: {
            sites: [
                {
                    name: 'Peter',
                    salary: 2000
                }, {
                    name: 'Alex',
                    salary: 1800
                }
            ],

            internals: [
                {
                    name: 'Jack',
                    salary: 1300
                }
            ]
        }
    };

    function find(arg) {
        let res = 0;
        if (Array.isArray(arg)) {
            for (let item of arg) {
                res += item.salary;
            }
            return res;
        } else {
            Object.keys(arg).forEach(item => {
                res += find(arg[item]);
            });
            return res;
        }
    }
    let res = find(company);
    console.log(res);
}



//? замыкания
{
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];
    function sortByField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    users.sort(sortByField('Johnson'));
    console.log(users);
}





//? Subscriber
{
    class Subscriber {
        _subscribers = {};

        constructor(initValue) {
            this._value = initValue;
        }

        emit(value) {
            this._value = value;
            for(const key of Object.getOwnPropertySymbols(this._subscribers)) {
                this._subscribers[key](this._value);
            }
        }

        subscribe(callback) {
            const symbol = Symbol();
            this._subscribers[symbol] = callback;
            this._subscribers[symbol](this._value);

            const _this = this;
            let subscribeObject = {
                unsubscribe() {
                    _this.#unsubscribe(symbol);
                    subscribeObject = null;
                },
            };
            return subscribeObject;
        }

        #unsubscribe(functionId) {
            delete this._subscribers[functionId];
        }
    }

    let example = new Subscriber(1);

    let first$ = example.subscribe((value) => {
            console.log('first', value);
        });

    example.subscribe((value) => {
            console.log('second', value);
        });

    example.emit(2);
    first$.unsubscribe();
    example.emit(3);
    example.emit(4);
    example.emit(5);
    example.emit(6);
}



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


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

    function zp(department) {
        if (Array.isArray(department)) {
            return department.reduce((acc, item) => acc + item.salary, 0);
        } else {
            let sum = 0;
            for (const key in department) {
                sum += zp(department[key]);
            }
            return sum;
        }
    }
    let res = zp(company);
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
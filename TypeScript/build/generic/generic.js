"use strict";
let arrNumber = [1, 1, 2, 3, 5, 8, 13];
let arrString = ['a', 'b', 'c', 'd', 'e'];
function reverse(array) {
    return array.reverse();
}
console.log(reverse(arrNumber));
console.log(reverse(arrString));
// generic тип сам определяет, какой тип будет сидеть в переменной
let cars = ['Ford', 'Audi'];
let cars2 = ['Ford', 'Audi'];
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved');
    }, 2000);
});
promise.then(res => {
    // console.log(res)
});
/*без genericoв строго указываем что должно приходить, и не можем переопределять в других вызовах функции значения и
приходящие данные */
// function mergeObject(a: { name: string }, b: { age: number }): { name: string } & { age: number } {
//     return Object.assign({}, a, b)
// }
/*тут мы , например, устанавливаем 2 generica для функции, они сами определяют входные данные
благодаря extends от обьекта, мы не можем сюда вписать абсолютно любое значение, то есть принимает все что угодно, но это
должно быть обьектом     в obj3 будет ошибка*/
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
let obj1 = mergeObject({ name: 'Dima' }, { age: 22 });
let obj2222 = mergeObject({ class: '1a' }, { quantity: 32 });
// let obj3 = mergeObject('aaa', 'bbbb') //error будет
let obj4 = mergeObject({ a: {}, b: {} }, { name: 'Alisa', age: { current: 25 } });
// console.log(obj1)
// console.log(obj2222)
// console.log(obj4)
function identify(argument) {
    return argument;
}
let r1 = identify(1);
let r2 = identify('привет');
// console.log(r1.toFixed())
// console.log(r2.toUpperCase())
let secondIdentify = identify;
let r3 = secondIdentify({ name: 'Dima' });
let r4 = secondIdentify('hello');
let thirdIdentify = identify;
let r5 = thirdIdentify('Alex');
// console.log(r5)
let fourhIdentify = identify;
let r6 = fourhIdentify(6);
let five = identify;
let r7 = five({ age: 22, name: 'Dima', sex: 'male' });
let returnNumber = (arg) => {
    return arg;
};
let n = returnNumber(1);
function withCount(value) {
    return {
        value,
        count: `В этом обьекте ${value.length} символов`
    };
}
let res = withCount('привет');
let res1 = withCount([1, 2, 3, 4, 5]);
// let res2 = withCount(5574) //error будет
let res3 = withCount({ length: 20 }); // немного некорректная работа, т.к. по умолчания в обьекте нет length
let man = {
    age: 22,
    name: 'Dima',
    sex: 'man',
    strong: true
};
let man22 = {
    age: 22,
};
/*
нужно получить значение обьекта по ключу  keyof
*/
function getObjectValue(object, key) {
    return object[key];
}
let someObject = {
    name: 'Dima',
    age: 22,
    sex: 'male',
    strong: true
};
// let v = getObjectValue(someObject, 'name')
// console.log(v)
// let v1 = getObjectValue(someObject, 'age')
// console.log(v1)
// let v2 = getObjectValue(someObject, 45) //error будет, т.к. такого ключа нет в обьекте передаваемом
// console.log(v2)
// let someArray = [10, 'string', true]
// let v3 = getObjectValue(someArray, 0)
// console.log(v3)
// let v4 = getObjectValue(someArray, 3)
// console.log(v4)
/*Работа с классами
в Collection принимаем один из доступных типов данных в и складируем в массив
*/
class Collection {
    // private _items: Type[] = []
    constructor(_items = []) {
        this._items = _items;
        this.add = (...item) => {
            this._items.push(...item);
        };
        this.remove = (item) => {
            this._items = this._items.filter(elem => elem != item);
        };
    }
    get items() {
        return this._items;
    }
}
let collectionStrings = new Collection([1, 2, 3, 4, 5]);
collectionStrings.add(1);
collectionStrings.add(14545, 234324324324, 234324324324324);
collectionStrings.add(4545);
collectionStrings.add(14545);
collectionStrings.remove(4545);
function createAndValidateCar(model, year) {
    let car = {};
    if (model.length > 3)
        car.model = model;
    if (year > 1850)
        car.year = year;
    return car;
}
// let car1 = createAndValidateCar('Ford', 1851)
// console.log(car1)
// let car2 = createAndValidateCar('Yo', 1545)
// console.log(car2)
// let car3 = createAndValidateCar('Lexus', 2020)
// console.log(car3)
/*
Можно запретить изменение переменной
*/
const carsString = ['Ford', 'Audi', 'BMW'];
const objectMe = {
    name: 'Dima',
    age: 22,
};
// console.log(objectMe.age = 2)

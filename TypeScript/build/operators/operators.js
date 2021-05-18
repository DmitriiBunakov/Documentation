"use strict";
let u1 = "email";
u1 = "name";
// u1 = 'qwe'
let u2 = {
    name: 'Dima',
    email: '1234567890'
};
function getArea(shape) {
    if (shape.radius) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
let obj = {
    name: "circle"
};
let obj2 = {
    name: 'rectangle',
    radius: 50
};
// console.log(getArea(obj))
// console.log(getArea(obj2))
//производный тип от известного обьекта
let obj11 = { name: 'dima', age: 21 };
let obj22 = {
    age: 21,
    name: 'Alex'
};
let obj222 = "location";
// typeof
/*ReturnType используется, чтобы получить тип на основе возвращаемого значения*/
function createPerson(name, age) {
    return { name, age };
}
let person123 = {
    age: 3,
    name: ''
};
let personInfo = '';
let someValue = true;
let myArr = [
    { name: 'Dima', age: 22 },
    { name: 'Alex', age: 26 },
    { name: 'Sveta', age: 18 },
];
/*Типы литералов шаблонов
https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
*/

"use strict";
let isFetching = false;
let isLoading = true;
let int = 1;
let float = 1.2;
let num = 3e10;
let str = 'привет, мир!';
let arrayNumbers = [1, 1, 2, 3, 5, 8, 13];
let arrayNumbers2 = [1, 1, 2, 3, 5, 8, 13];
let arrayWords = ['привет', 'мир'];
//tuple
let differentValuesArray = ['дима', 22];
let arrTuple1 = [45, 'string', true, false];
// arrTuple1[1]=0
console.log(arrTuple1);
function logTuple(...args) {
    console.log(...args);
}
logTuple(...arrTuple1);
/*в этом примере в функцию также нужно установить readonly, иначе будет ошибка */
let arrrr = [3, 4];
function calcAB([a, b]) {
    return a * b;
}
console.log(calcAB(arrrr));
//any
let variable = 42;
variable = 'string';
//functions
function sayMyName(name) {
    return `Меня зовут ${name}`;
}
console.log(sayMyName('дима'));
let arrowFn = () => { };
//never
function throwError(message) {
    throw new Error(message);
}
throwError('ошибка');
let login = 'логин';
let id = 1123;
id = '1123';
let some = '';
let id111 = { id: 123413123 };
let name111 = { name: 'Alex' };
let asdsa = '21';

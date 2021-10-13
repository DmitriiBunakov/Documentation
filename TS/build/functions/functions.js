"use strict";
function add(a, b) {
    return a + b;
}
function position(a, b) {
    if (a && !b) {
        return { x: a, y: undefined, default: a };
    }
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    return { x: a, y: b, };
}
console.log(position());
console.log(position(12, 24));
/*что, если надо сравнить 2 массива которые составлены из разных типов, для этого при вызове можно указать или такой
массив типов или другой */
let arr11 = [1, 2];
let arr22 = ['í', 'am', 'god'];
let longestArray = function (a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
};
// console.log(longestArray<number[] | string[]>(arr11, arr22))
// console.log(longestArray<number[] | string>(arr11, 'Привет, как дела у тебя, парень?'))
function foreach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
let arr = [1, 2, 3, 4, 5];
foreach(arr, (item, i, arr) => {
    // console.log(item)
    // console.log(i)
    // console.log(arr)
});
function withDestructure({ a, b, c }) {
    console.log(a + b + c);
}
let obj12 = { a: 1, b: 2, c: 3 };
withDestructure(obj12);
function withDestructure1(props) {
    let { a, b, c } = props;
    console.log(a);
    console.log(b);
    console.log(c);
}
let obj122 = { a: 1, b: 2, c: 3 };
withDestructure1(obj122);
function readonlyArray1Fn(arr) {
    // arr.pop()
}
function readonlyArray2Fn(arr) {
    // arr.pop()
}

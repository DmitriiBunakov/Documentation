"use strict";
let object = {
    id: '1455',
    color: 'red',
    size: {
        height: 250,
        width: 150,
    },
};
/*мы хотим пока что не инициализировать обьект со всеми свойствами, можем оставить пустым и указать что он типа Rect as
либо <Rect>{}
*/
let object2 = { id: 'sdf' };
let object3 = {};
object2.color = 'black';
let rect = {
    id: '123',
    size: {
        height: 423,
        width: 120
    },
    getArea() {
        return this.size.height * this.size.width;
    }
};
console.log(rect.getArea());
class Clock {
    constructor() {
        this.time = new Date();
        this.setTime = (date) => {
            this.time = date;
        };
    }
}
let css = {
    border: '1px solid black',
    marginTop: '20px',
    borderRadius: '5px',
};
let objectStrings = {
    a: '',
    b: '',
    // c: 45,
    d: '',
};
let man1 = {
    name: 'Dima',
    age: 22
};
let man2 = man1;
man1.age = man1.age + 50;
// console.log(man1)
// console.log(man2)

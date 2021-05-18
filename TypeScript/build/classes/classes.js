"use strict";
class TypeScript {
    constructor(version) {
        this.loginfo = (name) => {
            return `[${name}]: TypeScript version is ${this.version}`;
        };
        this.version = version;
    }
}
let typescript = new TypeScript('2.01.5');
console.log(typescript);
console.log(typescript.loginfo('My'));
// readonly можно только читать
// class Car {
//     readonly model: string
//     readonly numberOfWheel: number = 4
//     constructor(model: string, numberOfWheel: number) {
//         this.model = model
//         this.numberOfWheel = numberOfWheel
//     }
// }
// мождно переписать красивее, то, что зададим readonly в конструкторе TS сам запишем в свойства класса
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfWheel = 4;
    }
}
//модификаторы
/*
protected - имеем доступ только в классе самом и подклассах, но не имеем доступ в экзмеплярах
public - имеем доступ всегда
private - имеем доступ только в самом классе, в экзепляре нет доступа
*/
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
        this.go = () => {
            console.log('go');
        };
        this.sayVoice = () => {
            return this.voice;
        };
    }
}
let animal = new Animal();
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
let cat = new Cat();
cat.setVoice('мяу');
console.log(cat.sayVoice());
/*абстрактные классы
нужны для того, чтобы от них можно было наследоваться, но нельзя их вызывать, только для наследования существуют

все методы указанные как abstract должны быть реализованы в подклассах
*/
class Component {
    constructor() {
        this.getinfo = () => this;
    }
}
class AppComponent extends Component {
    render() { console.log('render'); }
}
let abstractElem = new AppComponent();
console.log(abstractElem.getinfo());
//
class Maan {
    constructor() {
        this.name = 'Man';
    }
}
function create(arg) {
    return new arg();
}
let me = create(Maan);
console.log(me);
/*чтобы присвоить наследоваться от класса и взять все его свойства, нужно будет в дочернем классе прописать
сначала все свойства родителя и поместить их в super, а затем новые добавлять *

readonly нельзя через set даже менять значение
private можно через set изменять но нельзя ничего делать напрямую вне класса
protected можно тоже только через аксессоры , и можно только в классах и подклассах

если в QWE name задать как private, его все равно нужно копировать в QWE2 но там нельзя с ним взаимодействовать и даже
нельзя назначить новую переменную этого же имени
*/
class QWE {
    constructor(name) {
        this.name = name;
    }
}
let qwe = new QWE('Dima');
class QWE2 extends QWE {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    get Age() {
        return this.age;
    }
    set Age(age) {
        this.age = age;
    }
}
let qwe2 = new QWE2('Dima', 22);
qwe2.Age;
class Clock2 {
    constructor() {
        this.time = new Date();
        this.setTime = (date) => {
            this.time = date;
        };
    }
}
/*переопределение методов и свойств */
class Try1 {
    hello() {
        console.log('Hello World');
    }
}
class Try2 extends Try1 {
    hello(text) {
        if (!text) {
            super.hello();
        }
        else {
            console.log(`Hello ${text}`);
        }
    }
}
let try1 = new Try2();
// try1.hello()
/*Static */
class QWEr {
    static logSome() {
        console.log(this.x);
    }
}
QWEr.x = 45;
QWEr.logSome();

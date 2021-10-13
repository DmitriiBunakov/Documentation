"use strict";
// string
// number
// bigint
// boolean
// symbol
// undefined
// object
// function
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*в JS  0   NaN   ""   0n   null    undefined  в IF приводятся к false*/
/*строгое и нестрогое сравнение в JS*/
// console.log(0 == false) //выведет TRUE в JS потому что сравнение приводит к числу
// console.log(0 === false) //выведет FALSE в JS потому что сравнивает по типам
//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// Простые типы
let number_;
number_ = 45;
let string_ = 'privet';
string_ = '';
let array_ = [];
array_ = [1, 1, 2, 3, 5];
array_ = [];
function someFunction(arg) {
    return arg;
}
// console.log(someFunction(1))
// console.log(someFunction('privet'))
function someFunction1(arg) {
    return arg;
}
// console.log(someFunction1(45445))
let somearrowFunction = (arg) => {
    return arg;
};
// console.log(somearrowFunction('hello'))
// дополнительные параметры функции, можно по умолчанию сделать
let somearrowFunction1 = (arg, arg2 = 0) => {
    return arg + arg2;
};
// console.log(somearrowFunction1(78, 54))
// дополнительные параметры функции, можно обойти условием
let somearrowFunction2 = (arg1, arg2) => {
    if (arg2)
        return arg1 + arg2;
    return arg1;
};
// console.log(somearrowFunction2(12))
let somearrowFunction3 = (arg) => {
    return arg;
};
let somePersonInfo = {
    age: 22,
    name: 'Dima',
    info: {
        height: 176,
        weight: 87,
        eyesColor: 'blue'
    }
};
let someP = {
    age: 45,
    name: 'Igor'
};
let someP1 = {
    age: 45,
    name: 'Alex'
};
//!====================================================================================================
// утверждения типа as
/*можно привести значение к определенному типу
например, когда получаем элемент со страницы, может быть там null, поэтому приводим к типу
можно также через ! восклицательный знак указать, что точно там есть значение

если тип неприводим никак, то можно схитрить и сделать двойное приведение через any
*/
let elementSome = document.querySelector('#root');
elementSome.addEventListener('click', () => { });
let a = null;
a = 45;
function doSome(arg) {
    return arg;
}
// console.log(doSome('bottom'))
//!====================================================================================================	
// Ненулевой оператор утверждения (постфикс !)
/*TypeScript также имеет специальный синтаксис для удаления nullи undefinedиз типа без какой-либо явной проверки.
Запись !после любого выражения фактически является утверждением типа, что значение не является nullили undefined: */
//!====================================================================================================
// символы никогда не равны, если только не сравнивать по типу
let Symbol1 = Symbol('key');
let Symbol2 = Symbol('key');
// console.log(Symbol1 === Symbol2)
//!====================================================================================================
// Narrowing или сужение
/*принцип сужения, это ветвление логики, например в функцию приходит параметр, который может быть и массивом и
строкой, для этого нужна разная логика, и мы в теле прописываем ветвление  */
function narrowingFunction(arg) {
    if (arg && typeof arg === 'object') {
        return arg.filter(() => true);
    }
    if (arg)
        return arg.toUpperCase();
    return undefined;
}
function getArea2(arg) {
    if (arg.name === 'circle') {
        return Math.PI * Math.pow(arg.radius, 2);
    }
    return 0;
}
//!====================================================================================================
//ФУНКЦИИ FUNCTIONS
// Создание классов через функцию
class SomePrimer {
    constructor(name) {
        this.name = name;
    }
}
function createClassFn(constructor, arg) {
    return new constructor(arg);
}
function createClassFn2(constructor, arg) {
    return new constructor(arg);
}
let createdClass = createClassFn(SomePrimer, 'Dima');
// console.log(createdClass)
//?====================================================================================================
// ОГРАНИЧЕНИЯ
function returnOnlyObjects(arg) {
    return arg;
}
// console.log(returnOnlyObjects({ a: 'privet' }))
function returnOnlySomeHaveLength(arg) {
    return arg;
}
// console.log(returnOnlySomeHaveLength([]))
//?====================================================================================================
// Указание аргументов типа, но чтобы можно было разные указать, указываем тип вручную при вызове обобщения 
function returnArguments(arg, arg2) {
    return [...arg, ...arg2];
}
function soSome(a, b, c) {
    if (a && !b) {
        return `[1]: ${a}`;
    }
    if (a && b && c) {
        return (`
[1]:${a}
[2]:${b}
[3]:${c}`);
    }
    return 'ничего не передано';
}
// console.log(soSome())
// console.log(soSome('Привет'))
// console.log(soSome('Привет', 'как дела?', 'что нового'))
//?====================================================================================================
// VOID тип подразумевается, когда функция не возвращает ничего
//?====================================================================================================
// UNKNOWN, нельзя никак манипулировать с данными, дополнительня защита , либо когда возвращается что то неизвестное
function safeParse(s) {
    return JSON.parse(s);
}
//?====================================================================================================
// NEVER, когда функция не возвращает никогда значение никакое, либо когда значение по условия осталось пустое
function fail(msg) {
    throw new Error(msg);
}
//?====================================================================================================
// ОСТАТОЧНЫЕ АГРУМЕНТЫ SPREAD 
function spreadSome({ a, b, c }) {
    return [a, b, c];
}
// console.log(spreadSome({ a: 1, b: '', c: {} }))
function spreadSome2([a, b, c]) {
    return a + b + c;
}
let someObj = {
    a: 'Alex',
    b: '22',
};
let BOX = [1, 2, 3];
let BOX1 = {
    a: [{ name: 'Dima' }, { name: 'Alex' }]
};
//?====================================================================================================
// ReadonlyArray
function readonlyArrayType(arg) {
    console.log(arg);
}
// readonlyArrayType<string | number>(['', 1, {}, []])
function readonlyArrayType2(arg) {
    console.log(arg);
}
// readonlyArrayType2([1, '', {}])
//?====================================================================================================
// TUPLE кортежи
/*Тип кортежа - это еще один тип Arrayтипа, который точно знает, сколько элементов он содержит, и какие именно типы
он содержит в определенных позициях. */
function doSomething12343(arg) {
    return [arg[0], arg[1]];
}
// console.log(doSomething12343([1, 'hi']))
//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/generics.html
// СОЗДАНИЕ ТИПОВ ИЗ ТИПОВ
// GENERICS обощения
/*возможность создавать компонент, который может работать с множеством типов, а не с одним. Это позволяет пользователям
использовать эти компоненты и использовать свои собственные типы. */
function getValueFromObj(obj, key) {
    return obj[key];
}
let object34234324 = { name: 'Dima', age: 45 };
function sdfds() {
    return [];
}
let sdfd = "privet";
let sdfsd = "text";
let arr34234 = [
    { name: 'Dima', age: 21 },
    { name: 'Alex', age: 45 },
];
let Someobject3243234 = {
    name: 'Some name',
    age: 'some age'
};
let adsfsdf657 = 2;
//?====================================================================================================
// Infer
/*это переменная в в каком то типе */
let someArrrrfg = [1, ''];
let someeeObject = {
    age: () => 45,
    name: () => 'Dima',
    info: () => { return { height: 78, weight: 78 }; }
};
let someeeObject2 = {
    getAge: (arg) => { return arg; },
    getName: (arg) => { return arg; },
    getInfo: (arg) => { return arg; }
};
// привести тип, если он наследуется от обьекта к строке, если нет, то оставить старый
let someObject34234 = {
    location: 'Voronezh',
    year: 2021,
    cold: {
        name: 'Dima'
    }
};
let helWorld = "HELLO WORLD";
//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/classes.html
// классы classes
/*
readonly нельзя присваивать нигде, кроме конструктора, можно только читать
*/
class Point123345245340 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
let Point123345245340234 = new Point123345245340('Dima', 22);
class SomeClAss {
    constructor(name, age) {
        this.logInfoAboutThis = () => {
            return this;
        };
        this.name = name;
        this.age = age;
    }
}
let Alexandr = new SomeClAss('Alexander', 32);
Alexandr.name = '';
// console.log(Alexandr.logInfoAboutThis())
//?====================================================================================================
// переопределение методов
/*
если нам нужно в начальном классе свойству type задать дефолтное значение, просто задаем его и все, а в дочерних
классах если хотим свойство оставить тоже, не устанавливаем this.type в дочернем классе, конструктор сам перезапишет
type на родительский
super это вызывается конструктор родительского класса, если мы хотим оставить значения родителя, то в дочернем классе не
нужно устанавливать их через this.some = some в конструкторе, Крч! Если мы не перезаписали его, он остается старым

Public поле доступно везде и всегд, ограничений по установке нет
Protected поле доступно в классе и экзеплярах, ограничений по установке нет,НО!можно в подклассе убрать protected и
открыть доступ
Private поле доступно только в классе, ограничений по установке нет, но зато можно установить getter на него и получать
в подклассах

но при обычном выполнении без TS private будет виден всегда, и через циклы и т.д

к родительскому методу и свойствам можно обратиться через super, а в нынешнем классе можно переопределить его и , например,
обращаться к родительскому через какое то условие

static наследуются, вызываются только через конструктор класса(САМО НАЗВАНИЕ КЛАССА), также можно применить в TS защиту
protected, private...
*/
class Animal1 {
    constructor() {
        this.showVoice = () => {
            console.log(this._defaultVoice);
        };
        this.logInfoAboutThis = () => {
            return this;
        };
        this.greeting = () => {
            console.log('Hello World!');
        };
        this.sayBuyTo = (target) => {
            if (target) {
                console.log(`Пока ${target}`);
                return;
            }
            console.log(`Пока`);
        };
        this.type = 'Animal';
        this._defaultVoice = 'я животное, это мой голос';
    }
    get defaultVoice() {
        return this._defaultVoice;
    }
    set defaultVoice(value) {
        this._defaultVoice = value;
    }
}
Animal1.alwaysLogGood = () => {
    console.log('Iam always Amazing');
};
class Animal2 extends Animal1 {
    constructor(type) {
        super();
        this.type = type;
    }
}
class Dog80988 extends Animal2 {
    constructor(type, voice) {
        super(type);
        this.showVoice = () => {
            if (this.voice === this.defaultVoice) {
            }
            return this.voice;
        };
        this.greeting = () => {
            console.log(`Привет, ${this.type}`);
        };
        this.sayBuyTo = (name) => {
            if (name) {
                console.log(`Пока, [${name.toUpperCase()}], до скорой встречи!`);
            }
        };
        this.type = type;
        this.voice = voice;
    }
}
let Dog098980 = new Dog80988('Собака', 'гав гаф гаф');
// console.log(Dog098980.logInfoAboutThis())
// console.log(Dog098980.showVoice())
// Dog098980.greeting()
// Dog098980.sayBuyTo('Друг')
// Dog80988.alwaysLogGood()
//?====================================================================================================
// обобщения для классов
/*можно также использовать обобщения для классов */
class Box {
    constructor(value) {
        this.contents = value;
    }
}
let dsfds = new Box([121, 312, 123,]);
//?====================================================================================================
// абстрактные классы
/*абстрактный класс не может быть создан напрямую, только наследуются от него

методы и свойства указанные как abstract, обязательны к объявлению в потомке класса
если типа свойства указан, то в абстрактном классе обязательно нужно прописать конструктор, как и в обычном классе


*/
class AbstractClass {
    constructor() {
        this.type = 'Человек';
        this.logInfo = () => {
            return this;
        };
    }
}
class SomeClassss extends AbstractClass {
    constructor(name) {
        super();
        this.greeting = (text) => {
            console.log(`Привет, ${text.toUpperCase()}!`);
        };
        this.name = name;
    }
}
let someobjectFromClassss = new SomeClassss('Дмитрий');
// console.log(someobjectFromClassss.logInfo())
// someobjectFromClassss.greeting('друг')
//?====================================================================================================
// отношения между классами
/*если классы имеют одинаковые свойства, но второй класс, от которого мы создаем инстанс, мы укажем ему тип того класса,
который имеет меньше полей, то все пройдет хорошо и мы создадимся от класса, у которого полей больше, то есть
перекроем установленный при объявлении тип
Но наоборот это уже не пройдет*/
class SomeManClass1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class SomeManClass2 {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
let someMan1 = new SomeManClass2('Dima', 22, 60000);
/*функция, которая принимает обьект типа один,и вторым аргументом обьект того же типа, но с необязательными параметрами
и возвращает обьект, переписывая некоторые свойства первого обьекта, заменяет их */
let someeeObj = {
    age: 22,
    name: 'Dima'
};
function updatesomeeeObj(arg, arg2) {
    return Object.assign(Object.assign({}, arg), arg2);
}
let r11 = updatesomeeeObj(someeeObj, { name: 'Alex' });
//?====================================================================================================
/*Parameters<Type>создает кортежный тип из типов, используемых в параметрах типа функции Type. */
function someFunctionDoSome(arg, arg2) { }
function someReturnFnc1234(arg) {
    return arg;
}
//?====================================================================================================
/*InstanceType<Type> Создает тип, состоящий из типа экземпляра функции-конструктора в Type. */
class SomeExamp {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let someVal = {
    x: '',
    y: ''
};
function toHex() {
    return this.toUpperCase();
}
//?====================================================================================================
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>
//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/decorators.html
// Декораторы
/*Декоратор срабатывает, когда мы описываем класс, не создаем instance класса, а именно описываем сам класс, в этот
момент декоратор срабатывает */
function ClassDecorator(constructor) {
    console.log(constructor);
}
function ValueDecorator(target, propName) {
    console.log(target);
    console.log(propName);
}
function MethodDecorator(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log(descriptor);
}
// @ClassDecorator
class ExampleDecoratorsClass {
    constructor(name) {
        this.name = name;
    }
    // @MethodDecorator
    loginfo() {
        console.log(this);
    }
}
function DecoratorCLassExample(Constructor) {
    // console.log(Constructor) //этот код сработает сразу при объявлении
    return class extends Constructor {
        constructor(...params) {
            super(...params);
            // console.log(params) // этот код только при создании инстанса класса
            this.somevalue = 'тут какое то значение';
        }
        /*если перезаписать метод, то когда мы объявим декоратор для метода в нормальном классе, он не сработает */
        logName() {
            console.log(`{${this.somevalue}}` + ' теперь выводится вместо [this.name]');
        }
    };
}
function DecoratorMethodExample(_, _2, descriptor) {
    return {
        value: function () {
            console.log(this);
        }
    };
}
let ComponentMain = class ComponentMain {
    constructor(name) {
        this.name = name;
    }
    /*декоратор не сработает, т.к в классовом декораторе мы перезаписали этот класс и следовательно сам декоратор */
    logName() {
        console.log(`Имя обьекта: [${this.name.toUpperCase}]`);
    }
};
__decorate([
    DecoratorMethodExample,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentMain.prototype, "logName", null);
ComponentMain = __decorate([
    DecoratorCLassExample,
    __metadata("design:paramtypes", [String])
], ComponentMain);
let ComponentMain23432 = new ComponentMain('Component');
// ComponentMain23432.logName()
// ComponentMain23432.logName = function () {
//     console.log('ну переназначил')
// }
// console.log(ComponentMain23432)
//?====================================================================================================
// Декоратор метода, срабатывает, когда объявляем instance класса
function DecorMethod(target, propName, descriptor) {
    let oldFn = descriptor.value;
    return {
        value: function () {
            console.log('Привет, Декораторы!');
        }
    };
    // return {
    //     get() {
    //         return oldFn.bind(this)
    //     }
    // }
}
class Someclass4382 {
    constructor(name) {
        this.name = name;
    }
    logSomething() {
        console.log(`Выводит имя компоненты: [${this.name.toUpperCase()}]`);
    }
}
__decorate([
    DecorMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Someclass4382.prototype, "logSomething", null);
let validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = Object.assign(Object.assign({}, validators[target.constructor.name]), { [propName]: 'required' });
}
function validateField(obj) {
    let options = validators[obj.constructor.name];
    let isValid = true;
    Object.keys(options).forEach(key => {
        if (options[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
class SomeCLassEx {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
__decorate([
    Required,
    __metadata("design:type", Object)
], SomeCLassEx.prototype, "email", void 0);
__decorate([
    Required,
    __metadata("design:type", Object)
], SomeCLassEx.prototype, "name", void 0);
function Component3424(obj) {
    return (Constructor) => {
        return class extends Constructor {
            constructor(...props) {
                super(props);
            }
            render() {
                let el = document.querySelector(obj.selector);
                if (el) {
                    el.innerHTML = obj.template;
                }
            }
        };
    };
}
let AppMain = class AppMain {
    constructor(name) {
        this.name = name;
    }
    render() { }
};
AppMain = __decorate([
    Component3424({
        selector: '#root',
        template: `
    <div style='font-size:25px;'>
        <div>
            <span>Это создано с помощью декоратора!</span>
        </div>
    </div>
    `
    }),
    __metadata("design:paramtypes", [String])
], AppMain);
let classCreated3442 = new AppMain('Some Component');
classCreated3442.render();
var Form;
(function (Form) {
    class MyForm {
        constructor(name) {
            this.name = name;
            this.state = "state";
            this.props = "some props";
        }
        getInfo() {
            return {
                props: this.props,
                state: this.state
            };
        }
    }
    Form.myForm = new MyForm('SomeClass');
    // console.log(myForm.getInfo())
})(Form || (Form = {}));
// console.log(Form.myForm)
class PersonInfoClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getInfo() {
        return `Fullname: ${this.fullName}.`;
    }
    getThis() {
        return this;
    }
}
class UserClass extends PersonInfoClass {
    constructor(firstName, lastName, county, city) {
        super(firstName, lastName);
        this.county = county;
        this.city = city;
    }
    get address() {
        return `${this.county} ${this.city}`;
    }
    getInfo() {
        return `${super.getInfo()} Address: ${this.address}`;
    }
}
let dima = new UserClass('Dima', 'Sidorov', 'Russia', 'Voronezh');
// console.log(dima.getInfo());
class Employ extends PersonInfoClass {
    constructor(firstName, lastName, branch) {
        super(firstName, lastName);
        this.branch = branch;
    }
    getInfo() {
        return `${super.getInfo()} Branch: ${this.branch} development`;
    }
}
let employer = new Employ('Danil', 'Sidorov', 'Moscow');
function doSOome(arg) {
    let counter = 0;
    return arg(counter);
}
function count(n) {
    return ++n;
}
let fff1 = doSOome(count);
doSOome(count);
doSOome(count);
console.log(doSOome(count));
console.log(fff1);

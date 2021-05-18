/*THIS ЗИС КОНТЕКСТ */
// https://tproger.ru/translations/javascript-this-keyword/
/*THIS это динамическая сущность и указывает на то место, где функция была вызвана
Простая функция: window обьект или undefined strict mode
Метод: сам обьект
Простая функция внутри метода: window обьект или undefined strict mode
Стрелочная ф-я внутри метода: контекст родителя, на шаг выше поднимается, то есть сам обьект
Стрелочный метод: сам обьект, инстанс класса
Стрелочная ф-я стрелочного метода: сам обьект, инстанс класса
Простая функция внутри стрелочного метода: window обьект или undefined strict mode

Если метод отделить от обьекта, то он будет window или undefined, чтобы это исправить нужно привязать его
То же самое будет, если метод передать в виде callbacka куда то, контекст потеряется

bind,call,apply устанавливают контекст силой
Bind вернет новую функцию, аргументы можно передать в новую функцию, либо после контекста, через запятую
Bind после того, как привязали, неизменен никак
Call, Apply вызовет функцию сразу, аргументы через запятую и в массиве соответственно

В конструкторе this будет новосозданным обьектом, неважно метод стрелочный или обычный, this будет обьект, а из за
внутенних функций уже контекст зависит
Неважно класс это или функция
Но обязательно нужно прописывать new, иначе this потеряется

This — это объект, которому принадлежит метод
Контекстом вызова конструктора является только что созданный объект.
Ловушка с new, если new не прописать контекст потеряется

Стрелочная функция берет контекст родителя, и ее конект нельзя изенить никакими привязками
*/
// let thisLearn = {
//     helloThis: function () {
//         console.group()
//         console.log('Метод простой')
//         console.log(this, this === thisLearn)
//         console.groupEnd()
//         function helloWindow() {
//             console.group()
//             console.log('Простая функция внутри метода')
//             console.log(this, this === thisLearn)
//             console.groupEnd()
//         }
//         let hellothisLearn = () => {
//             console.group()
//             console.log('Стрелочная ф-я внутри метода')
//             console.log(this, this === thisLearn)
//             console.groupEnd()
//         }
//         helloWindow()
//         hellothisLearn()
//     },
//     helloThisParent: () => {
//         console.group()
//         console.log('Метод стрелочный')
//         console.log(this, this === thisLearn)
//         console.groupEnd()
//         function helloWindow() {
//             console.group()
//             console.log('Метод простой в стрелочном методе')
//             console.log(this, this === thisLearn)
//             console.groupEnd()
//         }
//         let hellowindowToo = () => {
//             console.group()
//             console.log('Метод стрелочный в стрелочном методе')
//             console.log(this, this === thisLearn)
//             console.groupEnd()
//         }
//         helloWindow()
//         hellowindowToo()
//     }
// }
// thisLearn.helloThis()
// thisLearn.helloThisParent()
// let helloThis = thisLearn.helloThis.bind(thisLearn);
// helloThis();
// setTimeout(thisLearn.helloThis.bind(thisLearn), 1000)


// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.sayHello = () => {
//         console.log(this)
//         function sayThisWindow() {
//             console.log(this)
//         }
//         let sayThisObject = () => {
//             console.log(this)
//         }
//         sayThisWindow()
//         sayThisObject()
//     }
//     this.sayThis = function () {
//         console.log(this);
//         function sayThisWindow() {
//             console.log(this)
//         }
//         let sayThisObject = () => {
//             console.log(this)
//         }
//         sayThisWindow()
//         sayThisObject()
//     }
// }
// let igor = new Person('Igor', 45)
// igor.sayHello()
// igor.sayThis()
// class Town {
//     constructor(name, people) {
//         this.name = name
//         this.people = people
//     }
//     sayHello = () => {
//         console.log(this);
//     }
//     sayHello2 = function () {
//         console.log(this);
//     }
// }
// let voronezh = new Town('Voronezh', 1_500_000)
// voronezh.sayHello()
// voronezh.sayHello2()


// function ThisAfterCreateWithoutNew(name, count) {
//     this.name = name
//     this.count = count
//     this.sayThis = function () { console.log(this) }
//     return this
// }
// let thisWithNew = new ThisAfterCreateWithoutNew('Dima', 154861)
// let thisWithoutNew = ThisAfterCreateWithoutNew('Dima', 154861)
// thisWithNew.sayThis()
// thisWithoutNew.sayThis()
// console.log(thisWithNew instanceof ThisAfterCreateWithoutNew);
// console.log(thisWithoutNew instanceof ThisAfterCreateWithoutNew);


// function multiply(n) {
//     console.log(this * n)
// }
// let double = multiply.bind(2)
// triple = double.bind(3)
// double(3)
// triple(4)
// multiply.call(5, 3)
// multiply.apply(2, [3])

/*пример, что можно установить прототип, чтобы не экспортировать эту функцию везде во все файлы */
// let array = [1, 2, 3, 4, 5]
// function multiplyArray(array, n) {
//     return array.map(item => item * n)
// }
// Array.prototype.multiply = function (n) {
//     return this.map(item => item * n)
// }
// console.log(multiplyArray(array, 5))
// console.log(array.multiply(5))
// console.log(array)



// let object = {}
// let arrowFunction = () => {
//     console.log(this)
// }
// arrowFunction = arrowFunction.bind(object)
// arrowFunction()


/*Пользовательские методы привязки */
// function hello(arg1, arg2) {
//     console.group()
//     console.log(this)
//     console.log(arg1);
//     console.log(arg2);
//     console.groupEnd()
// }
// let object = {
// name: 'Dima',
// }
// let array = [1, 2, 3, 4, 5]

// Function.prototype.mycall = function (context, ...arguments) {
//     let id = Date.now()
//     context[id] = this
//     context[id](...arguments)
//     delete context[id]
// }
// hello.mycall(object, 3, 5)
// hello.mycall(array, 10, 10)
// Function.prototype.myapply = function (context, [...arguments]) {
//     let id = Date.now()
//     context[id] = this
//     context[id](...arguments)
//     delete context[id]
// }
// hello.myapply(object, [7, 7])
// hello.myapply(array, [7, 7])
// Function.prototype.mybind = function (context, ...arguments) {
//     return (...arguments2) => {
//         let id = Date.now()
//         context[id] = this
//         arguments.length ? context[id](...arguments) : context[id](...arguments2)
//         delete context[id]
//     }
// }
// hello.mybind(object)(4, 8)
// hello.mybind(array, 4, 8)()




// function hello() {
//     console.log(this)
// }
// hello();
// window.hello()
// let me = {
//     name: 'Dima',
//     age: 22,
//     sayHello: hello,
//     sayHelloFrowmWindow: hello.bind(window),
//     logInfo: function (work, sex) {
//         console.group()
//         console.log(`Меня зовут ${this.name}`)
//         console.log(`Меня зовут ${this.age}`)
//         console.log(`Меня зовут ${work}`)
//         console.log(`Меня зовут ${sex}`)
//         console.groupEnd()
//     }
// }
// me.sayHello()
// me.logInfo('javascript','male')
// me.sayHelloFrowmWindow()

// let lena = Object.create(me, {
// name: {
//         value: 'Elena',
//         writable: false,
//         configurable: false,
//         enumerable: false,
//     },
//     age: {
//         value: 18,
//         writable: false,
//     }
// })
// lena.sayHello()
// lena.logInfo('developer', 'female')

// let danil = Object.create(me)
// danil.name = 'Danil'
// danil.age = 15
// danil.sayHello()
// danil.logInfo('developer', 'male')

// let irina = {
//     name: 'Irina',
//     age: 32,
// }
// let logIrinaInfoBind = me.logInfo.bind(irina)
// let logIrinaInfoBind2 = me.logInfo.bind(irina, 'driver', 'female')
// logIrinaInfoBind('driver', 'female')
// logIrinaInfoBind2()
// me.logInfo.call(lena, 'driver', 'female')
// me.logInfo.apply(lena, ['driver', 'female'])
















/*ЗАМЫКАНИЯ */
/*
Это функция внутри функции по большому счету. Т.е все переменные доступные внутренней функции от внешней.
*/
// function createIncrementore(n) {
//     return (numberTarget) => {
//         return n + numberTarget
//     }
// }
// let addTwo = createIncrementore(2)
// let addTen = createIncrementore(10)
// console.log(addTwo(5))
// console.log(addTen(5))

// function createDomainUrl(domain) {
//     return (url) => {
//         return `https://${url}.${domain}`
//     }
// }
// let comUrl = createDomainUrl('com')
// console.log(comUrl('google'))

/*Bind с помощью замыкания */
// function logInfo(...arguments) {
//     console.log(`Name is ${this.name}, age is ${this.age}${arguments.length > 0 ? ', ' + arguments : ''} `)
// }
// let object = { name: 'Dima', age: 22 }
// let object2 = { name: 'Danil', age: 15 }
// let bind = function (context, fn) {
//     return (...arguments) => {
//         let id = Date.now()
//         context[id] = fn
//         context[id](...arguments)
//         delete context[id]
//     }
// }
// let logInfoObject1 = bind(object, logInfo)
// let logInfoObject2 = bind(object2, logInfo)
// logInfoObject1(1, 2, 3)
// logInfoObject2()














/*АССИНХРОННОСТЬ ASYNC EVENTLOOP*/
/*
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICBjb25zb2xlLmxvZygnY2xpY2snKQp9KTsKCmNvbnNvbGUubG9nKCJIaSEiKTsKCi8vIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKLy8gICAgIGNvbnNvbGUubG9nKCJDbGljayB0aGUgYnV0dG9uISIpOwovLyB9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJlbmQiKTsKY29uc29sZS5sb2coImVuZCIpOwpjb25zb2xlLmxvZygiZW5kIik7CmNvbnNvbGUubG9nKCJlbmQiKTtjb25zb2xlLmxvZygiZW5kIik7Y29uc29sZS5sb2coImVuZCIpOwpjb25zb2xlLmxvZygiZW5kIik7CmNvbnNvbGUubG9nKCJlbmQiKTsKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwpjb25zb2xlLmxvZygiZW5kIik7CmNvbnNvbGUubG9nKCJlbmQiKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
Принцип работы: сначала браузер бежит по коду и вызывает методы и т.д. Все это попадает в stack
Синхронные функции выполняются сразу, и идет дальше
Обработчики событий сначала попадают в stack и регистрируют обработчик, а затем в webapi, где ждут событие,
как только клик произойдет функция, которую вызываем в обработчике попадет в очередь, и будет ждать выполнения
всего кода, пока stack не будет пустым она будет ждать. Затем она попадет в stack ,вызовется и выведет результат.

Ловушка SetTimeout, если установить его в 0, все равно код будет асинхронным, т.к. сначала все равно код попадет
в Webapi, а затем в очередь и только потом в stack
И дело в том, что он еще устанавливает по умолчанию 10милисекунд
*/
// console.log('start');
// console.log('start 2');
// window.setTimeout(() => {
//     console.log('timeout 500ms start 3');
// }, 500)
// console.log('start 4');














/*PROMISE ОБЕЩАНИЕ */
// console.log('request data')
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('preparing data')
//         let data = {
//             name: 'TV'
//         }
//         resolve(data)
//     }, 2000)
// })
//     .then(res => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 res.modifyed = true
//                 resolve(res)
//             }, 2000)
//         })
//     })
//     .then(res => {
//         console.log('data received', res)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//          console.log('finish')
//      })


// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(() => resolve(), ms))
// }
// sleep(2000).then(() => console.log('sleeped 2 sec'))
// sleep(4000).then(() => console.log('sleeped 4 sec'))

// Promise.all([sleep(2000), sleep(4000)])
//     .then(() => {
//         console.log('Ждем последнего')
//     })

// Promise.race([sleep(2000), sleep(4000)])
//     .then(() => {
//         console.log('Ждем первого')
//     })












/*ОБЬЕКТ OBJECT */
/*
Прототип можно установить:
Object.setPrototypeOf(john, soldier) первый наследуется от второго
Object.create({},soldier) первый обькт тот от которого наследуемся
object.__proto__ = soldier устаревший способ

Обьекты копируются по ссылке, т.е. один и тот же обьект, если мы присвоили через =

Создание через create, первый обьект, это то от чего наследуемся, воторой-значения, которые настраиваются
enumerable это будут ли ключи доступны при циклах например
writable можно ли настраивать поля, переназначать
configurable можно ли удалять поле обьекта

Цикл for in лучше сопровождать условием на собственные значения, потому что он будет бегать еще и по прототипам обьекта
избегаем этого с помощью hasownproperty
*/
// let person = Object.create({
//     sayHello: function () { console.log(this) }
// }, {
//     name: {
//         value: 'Dima',
//         enumerable: true,
//         writable: false,
//         configurable: false,
//     },
//     birthDay: {
//         value: 1998,
//         enumerable: true,
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthDay
//         },
//         set(value) {
//             this._value = value
//         }
//     }
// })
// person.name = 'Danil'
// delete person.name
// person.age = 26
// console.log(person.age)
// person.sayHello()
// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key])
//     }
// }


/*
keys получает все ключи и засовыывает в массив
'name' in object проверяет наличие ключа в обьекте
*/
// let object = {
//     name: 'Dima',
//     age: 22,
//     sex: 'man'
// }
// console.log(Object.keys(object))
// console.log('name' in object)

/*
Объеденение обьектов(1ый арг-куда копируем, 2ой - что копируем)
Если будут одинаковые свойства второй обькт перезапишет их
Создает поверхностную копию
*/
// let object2 = {
//     name: 'Danil'
// }
// let newObj = Object.assign(object, object2)
// console.log(newObj)


/*
К сожалению, этот метод нельзя использовать для копирования методов объекта, которые были написаны
пользователем вручную.
Чтобы глубоко скопировать методы обьекта, используем Assign
*/
// JSON.stringify(person)/*Перевод в JSON формат */
// JSON.parse(JSON.stringify(person))/*Перевод из JSON формата */
// let a = JSON.parse(JSON.stringify(person))/*Глубокое копирование */











/*КЛАССЫ CLASS */
/*
К типу можно обращаеть только через сам класс

Классы могут наследоваться друг от друга через extends
В конструкторе потомка вызывается super для копирования всех значений parenta
В потомке можно перезаписать значения и функции, но если мы хотим вызвать в перезаписанной функции родительскую, то мы
должны прописать super.имя метода родителя

Если у родителя метод назначен стрелочным, то если мы вызовем его у потомка через super, когда переопределили его, то не сработает
и выведет ошибку

getter и setter нужны для получения и установки значений, для скрытия деталей, чтобы не вмешиваться напрямую

приватные свойства пишутся через #name
*/
// class Animal {
//     static type = 'Animal'
//     constructor() {
//         this.home = true
//         this.legs = 4
//         this.age = 10
//     }
//     logThis() { console.log(this) }
//     sayHi() { console.log('Im some animal') }
// }
// console.log(Animal.type)
// class Cat extends Animal {
//     static type = 'Cat'
//     constructor(props) {
//         super(props)
//         this.color = props.color
//         this.age = props.age
//     }
//     sayHi = () => {
//         super.sayHi()
//         console.log('Im cat')
//     }
//     get ageInfo() {
//         return this.age * 5
//     }
//     set ageInfo(value) {
//         this.age = value
//     }
// }
// let cat = new Cat({ color: 'black' })
// cat.logThis()
// cat.sayHi()
// cat.ageInfo = 9
// console.log(cat.ageInfo)


// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//     hide() {
//         this.$el.style.display = 'none'
//     }
//     show(value) {
//         this.$el.style.display = `${value}`
//     }
// }
// class Box extends Component {
//     constructor(props) {
//         super(props.selector)
//         this.$el.style.width = this.$el.style.height = props.size + 'px'
//         this.$el.style.backgroundColor = props.color
//     }
// }
// let box1 = new Box({
//     selector: '#block',
//     size: 100,
//     color: 'red'
// })













/*ASYNC AWAIT */
/*
Await не пускает код работать дальше, пока промис на текущей строчки не выполнится1
Ошибки обрабатываются черезе try catch
Из асинхронной функции возвращается также промис, который можно обрабатывать
*/
// function sleep(ms) { return new Promise(resolve => { setTimeout(() => { resolve() }, ms) }) }
// let url = 'https://jsonplaceholder.typicode.com/todos'

// let getData = () => {
//     console.log('start fetching')
//     return sleep(2000)
//         .then(() => fetch(url))
//         .then(res => res.json())
// }
// getData()
//     .then(res => {
//         console.log(res)
//     })

// let getDataAsync = async () => {
//     console.log('start fetching')
//     try {
//         await sleep(2000)
//         let res = await fetch(url)
//         let data = await res.json()
//         return data
//     } catch (e) {
//         console.error(e)
//     } finally {
//         console.log('конец в любом случае')
//     }
// }
// getDataAsync().then(res => {
//     console.log(res);
// })
















/*PROXY */
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

Все эти методы, это ловушки, мы перехватываем каждое действие с обьектом , внутри можно прописывать логику самую разную

При удалении если мы хотим удалить нужно повторить функционал по удалению в самом методе
*/

// let person = {
//     name: 'Dima',
//     age: 22,
//     job: 'Fullstack',
// }
// let objectProxy = new Proxy(person, {
//     get(target, prop, receiver) {
//         if (!(prop in target)) {
//             return prop.split('_').map(p => target[p]).join(' ')
//         }
//         return target[prop]
//     },
//     set(target, prop, value) {
//         if (prop in target) {
//             target[prop] = value
//         } else {
//             console.log('no prop field in target')
//         }
//     },
//     has(target, prop) {
//         return ['name', 'job', 'age'].includes(prop)
//     },
//     deleteProperty(target, prop) {
//         console.log(`delete: ${prop}`)
//         delete target[prop]
//     }
// })
// objectProxy.name
// objectProxy.sex = 'male'
// console.log('name' in objectProxy)
// delete objectProxy.name
// console.log(objectProxy)
// console.log(objectProxy.name_age)



/*PROXY functions */
/*
Можно следить за функцией
apply когда вызывается(target - функция, thisArg - переданный контекст, args - аргументы переданные)
*/
// function logText(text) { console.log(`Log: ${text}`) }

// let logTextProxy = new Proxy(logText, {
//     apply(target, thisArgs, args) {
//         console.log(target)
//         console.log(thisArgs)
//         console.log(args)
//         target(args)
//     },
// })
// logTextProxy('SOME TEXT')



/*PROXY classes*/
/*
construct перехват создания класса
*/
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
// let PersonProxy = new Proxy(Person, {
//     construct(target, args) {
//         console.log(target)
//         console.log(args)
//         return new Proxy(new target(...args), {
//             get(targetobject, prop) {
//                 console.log(targetobject[prop])
//             }
//         })
//     }
// })
// let person = new PersonProxy('Dima', 22)
// person.age



/*примеры */
// let withHiddenProps = (target, prefix = '_') => new Proxy(target, {
//     get(object, prop, receiver) {
//         if ((prop in object) && !prop.startsWith(prefix)) {
//             return object[prop]
//         } else return undefined
//     },
//     has(object, prop) {
//         if (prop in object && !prop.startsWith(prefix)) {
//             return true
//         } else { return false }
//     },
//     ownKeys(object) {
//         return Object.keys(object).filter(item => !item.startsWith(prefix))
//     }
// })
// let object = withHiddenProps({
//     name: 'Dima',
//     age: 22,
//     _money: 0,
//     getInfo() {
//         return this
//     }
// })
// console.log(object._money)
// console.log('_money' in object)
// console.log(Object.keys(object))
// console.log(object.getInfo())

















/*ГЕНЕРАТОР-ФУНКЦИЯ */
/*
По функции генератору можно проитерироваться через for of
*/
// function* stringGenerator() {
//     yield 'h'
//     yield 'e'
//     yield 'l'
//     yield 'l'
// }
// let str = stringGenerator()
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())
// for (const k of str) {
//     console.log(k)
// }
















/*ARRAY */
// Array.prototype.myReduce = function (callback, initialvalue = 0) {
//     let result = initialvalue
//     for (let i = 0; i < this.length; i++) {
//         result += callback(result, this[i]) - result
//     }
//     return result
// }
// let array = [5, 5, 5, 5]
// array = array.myReduce((total, next) => total + next)
// console.log(array)


// Array.prototype.myFind = function (callback) {
//     let result
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this) ? result = this[i] : result = undefined
//         if (result) return result
//     }
//     return result
// }
// let arr = [{ name: 'dima' }, { name: 'danil' }, { name: 'igor' }]
// let dima = arr.myFind(item => item.name === 'danil')
// let lena = arr.myFind(item => item.name === '')
// console.log(dima)
// console.log(lena)







//!====================================================================================================
// Map
/*Позволяет хранить данные с ключом Любого типа, может быть обьект, boolean , и т.д. 
Естественно, одинаковые ключи будут перезаписываться*/
let map = new Map()
map.set(true, 'key')
    .set(NaN, 'WTF, как это работает?)').set(false, 'бред какой то)').set('value', 'some value')
    .set({ name: 'Dima', age: 22 }, 'просто обькт в роли ключа)')
    .set([1, 1, 2, 3, 5, 8, 11, 19], 'а тут числа фибонначи')


// forEach поступают аргументы: значение, ключ, сам обьект
map.forEach((value, key, array) => {
    // console.log(value)
    // console.log(key)
    // console.log(array)
})
let getArrayFromMap = [...map];
// console.log(getArrayFromMap);
let getArrayFromMap2 = Array.from(map);
// console.log(getArrayFromMap2);
let getObjectFromMap = Object.fromEntries(map.entries())
// console.log(getObjectFromMap);


//?====================================================================================================
/*для перебора есть 3 метода
map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по
умолчанию в for..of.*/
let keysMap = map.keys()
let valuesMap = map.values()
let arrOfMap = map.entries()

// for (let a of keysMap) {
//     console.log(a)
// }
// for (let a of valuesMap) {
//     console.log(a)
// }
// for (let a of arrOfMap) {
//     console.log(a)
// }

//?====================================================================================================
/*можно создавать Map из массива массивов, где подмассивы должны иметь 2 значения в виде ключи - значение 
значит - можно создавать с помощью Object.entries map, и наоборот Object.fromEntries
*/
let map2 = new Map([
    [1, 5],
    ['привет', 'как дела?']
])

let someObjectExample2543 = {
    name: 'Dima',
    age: 22
}
let map3 = new Map(Object.entries(someObjectExample2543))



//!====================================================================================================
// Set
/*Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться
только один раз. Очень удобно удалять повторяющиеся значения массива*/
let someArr245245 = ['привет', 'как дела?', 'привет', 1, 1, 2, 'Dima', { name: 'Dima' }]

let set = new Set(someArr245245)
// console.log(set)
//?====================================================================================================
/*перебирается с помощью forEach и for of
Заметим забавную вещь. Функция в forEach у Set имеет 3 аргумента: значение value, потом снова то же самое значение
valueAgain, и только потом целевой объект. Это действительно так, значение появляется в списке аргументов дважды.
Это сделано для совместимости с объектом Map, в котором колбэк forEach имеет 3 аргумента. Выглядит немного странно,
но в некоторых случаях может помочь легко заменить Map на Set и наоборот. */

/*имеет те же самые свойства для перебора, что и Map для обратносовместимости */

// Пример
/*let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
function removeAnnagrams(arr) {
    let newarr = []
    arr.forEach(item => {
        let correctlyWord = item.toLowerCase().split('').sort().join('')
        newarr.push(correctlyWord)
    })
    return [...new Set(newarr)]
}
console.log(removeAnnagrams(arr)) */



//?====================================================================================================
/*в отличии от map и set , как только поля будут пустые, память будет очищена и удалена от этих обьектов 
в WeakSet можно передавать в массив только обьекты*/
let weakMap = new WeakMap()
let weakSet = new WeakSet()


// Сборщик мусора
/*сборщик видит, что мы удалили обьект, и он его удаляет из памяти, но в массиве остается значение обьекта */
let obj345435 = { name: 'Dima' };
let arr43434 = [obj345435];
obj345435 = null;
// console.log(obj345435);
// console.log(arr43434[0]);


/*после удаления ссылки на обьект, из WeakMap сразу удаляется и значение завязанное на этой ссылке, для производительности */
let obj3454325 = { name: 'Dima' };
let weakmap = new WeakMap([
    [obj3454325, 'someobject']
]);
// console.log(weakmap.get(obj3454325));
// obj3454325 = null;
// console.log(weakmap); //WeakMap { <items unknown> }
// console.log(weakmap.has(obj3454325));


let pbj76656 = { name: 'Dima' };
let weakset = new WeakSet([pbj76656, pbj76656, pbj76656]);
// console.log(weakset);
// pbj76656 = null;
// console.log(weakset);
// console.log(weakset.has(pbj76656));






//!====================================================================================================
// XMLHTTP and Fetch
let urlReq5435 = 'https://jsonplaceholder.typicode.com/users';
function doRequest(method, url, data = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = function () {
            reject(xhr.response);
        }
        xhr.send(JSON.stringify(data));
    })
}
// doRequest('GET', urlReq5435)
//     .then(res => { console.log(res); })
//     .catch(error => { console.log(error); });

// doRequest('POST', urlReq5435, { name: 'Dima', age: 22 })
//     .then(res => { console.log(res); })
//     .catch(err => console.log(err));


//?====================================================================================================
// https://learn.javascript.ru/fetch
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
/*Fetch */

// fetch(urlReq5435, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify({ name: 'Dima', age: 22 }),
//     credentials: 'include',
// })
//     .then(res => {
//         console.log(res);
//         if (res.ok) {
//             return res.json()
//         } else {
//             throw new Error(res.status)
//         }
//     })
//     .then(res => { console.log(res); })
//     .catch(err => { console.log(err); });


/*=================================================================================================*/
async function doReq(url, method = 'GET', body = null) {
    let res = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body),
        credentials: 'include',
    })
    if (!res.ok) {
        throw new Error(res.status);
    }
    return await res.json();
}
// doReq(urlReq5435, 'POST', { age: 22, name: 'Igor' })
//     .then(res => console.log(res))
//     .catch(err => { console.log(err) });



//!====================================================================================================
// Spread Rest
/*как работал, например, max при ES5 */
let arr5645654 = [1, 45, 748, 6, 56, 1, 35, 54];
// console.log(Math.max.apply(null, arr5645654));
// console.log(Math.max(...arr5645654));

//!====================================================================================================
// деструктуризация
/*можно пропускать значения, которые не хотим вытаскивать */
let arrrrrr = [1, 2, 3, 4];
let [a, , c,] = arrrrrr;
// console.log(a, c);

/*можно также задавать дефолтное значение */
let arrr2 = [1, undefined, undefined, 4, 5];
let [a1, b1 = 2, c1 = 3, ...otherRest] = arrr2;
// console.log(a1, b1, c1, otherRest);


/*=================================================================================================*/
let obj34345435 = {
    name: 'Dima',
    age: 22,
    location: {
        town: 'Vrn',
        coutry: 'Russia'
    }
}
/*можно переименовать переменную черезе : синтаксис */
let { name: nameOfThisPerson, age, location: location2 } = obj34345435;



//!====================================================================================================
/*LOCALSTORAGE
может работать ТОЛЬКО со строками
*/
// localStorage.setItem('SomeName', 5); //если значение есть, перезапишется значение
// localStorage.getItem('SomeName');
// localStorage.removeItem('SomeName');
// localStorage.clear(); // Очистить полность
// Можно записывать обьекты, данные какие то. Обьекты записываются в формате JSON(нужно перевести в него)



//!====================================================================================================
/*CORS COOCKIE ПЕЧЕНЬКА */
/*
COOCKIE файл, который цепляется для передачи на сервер при любом запросе.
Например логинизация. Мы отправляем запрос на сервер с паролем и логином, и нам возвращается coockie в которую
сервер записал наш ID в закодированном виде, если мы переходим например во вкладку сообщения, то мы отправляем с
запросом coockie в котором уже есть ID наш и сервер говорит, да, это ты, ты залогинен, и отдает сообщения, которые
нам принадлежат.
Запомнить меня это время жизни coockie условно говоря. Т.е. без нее живет пол часа после завершения сессии, с ней
допустим месяц.


Браузер не отправляет coockie если идет кросс доменный запрос.
Нужно указывать дополнительные параметры, чтобы разрешить передавать cockie.
В axios нужно установить в axios вторым аргументом обьект с настройками, в котором withCredentials = true, также там
можно установить headers: {}.
*/


//!====================================================================================================
/*API */
/*
API это интерфейс взаимодействия с программой. Методы, обьекты, то, с чем мы взаимодествуем. Методы обьекта ,
интерфейс программного приложения.
*/
/*SERVER REST API */
/*
GET - POST - PUT - DELETE (CRUD - create, read, update, delete).
Есть разные endpoint'ы(ресурсы) с которыми мы взаимодействуем http-запросами. Сервер там сам определяет, что мы
хотим сделать. Т.е. мы шлем на один и тот же адрес разные методы, а сервер сам определяет и делает то, что мы хотим.
То есть сейчас есть адрес один './google.com/users/' на который мы делаем запросы.

Раньше же существовало несколько endpoint'ов './google.com/users/get', если получить, './google.com/users/post',
если создать и т.д. Что дико не удобно.
Endpoint это URL на которые мы можем слать запросы.


GET запрос
В запросе например мы хотим указать количество возвращаемых данных в ответе или номер страницы возвращаемой:
https://social-network.samuraijs.com/api/1.0?page=2&size=5
page=2&size=5, вот это идет после вопросительного знака в запросе, и означает это get query параметры. Все эти данные
мы берем с бэкенда, т.е. page на бэкенде может быть записано по другому и нужно узнавать у бэкэндщиков правильное
написание запроса.

API сервера это интерфейс с которым можно взаимодействовать.
Url куда шлем запросы
Методы взаимодействия с ним
Request payload То что мы должны слать на сервер
Response data То что мы должны получить с сервера
HTTP коды, ответы сервера
*/




//? Создание своего плеера, Плеер, Video, Audio, Player, HTMLMediaElement
//? https://developer.mozilla.org/ru/docs/Web/API/HTMLMediaElement



//!====================================================================================================
//? Lazyloading Ленивая загрузка
//? https://www.youtube.com/watch?v=IdUbsiQUxa4&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81
//* Логика с картинками следующая: убираем src с картинок и вешаем эти значения в касомный аттрибут, затем, когда доскролили до элемента, вешаем значение аттрибута в src и удаляем кастомный
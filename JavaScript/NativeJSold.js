'use strict';
/*ИНКРЕМЕНТ И ДЕКРЕМЕНТ*/
// let incr = 10;
// let decr = 10;
// incr++; инкремент
// decr--; декремент
// Постфиксная форма сначала возвращает старое значение, а только потом производит изменения
// console.log(--incr);
// console.log(decr--);













/*ОБЬЕКТ*/
// let obj = {
// 	name: 'dima',
// 	age: 21,
// 	options: {
// 		weight: '75кг',
// 		height: '180см',
// 		famyli: {
// 			mother: true,
// 			father: true,
// 		}
// 	}
// };


// Перебрать все значения обьекта через FOR IN
// for(let key in obj) {

// 	if(typeof(obj[key]) === 'object') {

// 		for(let key2 in obj[key]) {
// 			console.log(`${key2} - ${obj[key][key2]}`);
// 		}

// 	} else {
// 		console.log(`${key} - ${obj[key]}`);
// 	}
// }


// Перебрать все значения обьекта через FOR IN на 2 уровня ниже
// for(let key in obj) {
// 	if(typeof(obj[key]) === 'object') {
// 		for(let key2 in obj[key]) {
// 			if(typeof(obj[key][key2]) === 'object') {
// 				for(let key3 in obj[key][key2]) {
// 					console.log(`${key3} - ${obj[key][key2][key3]}`);
// 				}
// 			} else {
// 				console.log(`${key2} - ${obj[key][key2]}`);
// 			}
// 		}
// 	} else {
// 		console.log(`${key} - ${obj[key]}`);
// 	}
// }


// console.log(Object.keys(obj).length); /*Получить все ключи массива на первом 
// уровне(и потом можно узнать их количество, чтобы не перебирать их через цикл)*/

// let {name, age} = obj; /*Деструктуризация обьекта*/
// console.log(name, age);

// Удалить свойство из обьекта
// delete obj.name;

/*ПРОВЕРИТЬ НАЛИЧИЕ ЗНАЧЕНИЯ В ОБЬЕКТЕ*/
// console.log('sdf' in obj); /*IN ищет этот ключ, возвращает BOOLEAN*/


// Данные в обьект записывать через СКОБКИ КВАДРАТНЫЕ!
// Если имя будет словом, то поместить еще и в кавычки!


// ОБЬЕКТЫ КОПИРУЮТСЯ ПО ССЫЛКЕ!


// ПОВЕРХНОСТНАЯ КОПИЯ ОБЬЕКТА
// let object = {
// 	age: 21,
// 	name: 'Dima',
// 	options: {
// 		weight: 74,
// 		height: 180
// 	}
// };
// let newObject = {};
// function copy(obj) {
// 	for(let key in obj) {
// 		newObject[key] = obj[key];
// 	}
// }
// copy(object);
// newObject.options.weight = 100;
// newObject.options.height = 200;
// newObject.name = 'alex';
// console.log(newObject);
// console.log(object);


// let someobj = {
// 	a: 5,
// 	b: 10,
// 	c: {
// 		x: 7,
// 		q: 15
// 	}
// };
// let add = {
// 	d: 'dima',
// 	t: 'alex'
// };


// console.log(Object.assign(someobj, add)); /*Объеденение обьектов(1ый арг-куда копируем, 2ой - что копируем) */


/*Object.assign() создает ПОВЕРХНОСТНУЮ КОПИЮ!! */
// let newSomeObj = Object.assign({}, someobj);
// newSomeObj.c.x = 'Поменял';
// newSomeObj.c.q = 'И тут';
// console.log(newSomeObj);
// console.log(someobj);


/*SPREAD оператор разворачивает обьект и массив -   ... */
/*СОЗДАЕТ также поверхностную копию */
// let qw = {
// 	a: 45,
// 	b: 45,
// 	r: {
// 		name: 'dima',
// 		age: 26
// 	}
// };
// let qw2 = {...qw};
// qw2.a = 100;
// qw.r.name = 'ALEX';
// console.log(qw);
// console.log(qw2);


/*КОПИРОВАНИЕ ГЛУБОКОЕ!!!!! */
// let person = {
//     name: 'Alex',
//     tel: '+79009298465',
//     parents: {
//         mom: 'Olga',
//         dad: 'Dima'
//     },
// };
// console.log(JSON.stringify(person)); /*Перевод в JSON формат */
// console.log(JSON.parse(JSON.stringify(person))); /*Перевод из JSON формата */
// let a = JSON.parse(JSON.stringify(person));/*Глубокое копирование */
// a.parents.mom = 'ELENA';
// console.log(person);
// console.log(a);
/*К сожалению, этот метод нельзя использовать для копирования методов объекта, которые были написаны
 пользователем вручную. */
/*чтобы глубоко скопировать методы обьекта, используем Assign */



/*GET и SET */
// let persone = {
//     name: 'Alex',
//     age: 25,

//     get userAge(){
//         return this.age;
//     },
//     set userAge(num){
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);


// let persone = {
//     name: 'Alex',
//     surname: 'Bunakov',
//     get fullName(){
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(value){
//         [this.name, this.surname] = value.split(' ');
//     }
// };

// console.log(persone.fullName);
// console.log(persone.fullName = 'Dima Bunakov');
// console.log(persone.name);
// console.log(persone.surname);

















/*Массивы*/
// let arr = [1, 2, 3, 5, 8];

// arr.pop(); /*Удаляет последний элемент*/
// arr.push(10); /*Добавляет элемент в конец*/
// arr.shift(); /*Удалить первый элемент массива*/
// arr.unshift(0, 0 , 0 , 0); /*Добавляет элементы в массив вначало*/

/*Метод для перебора массива, СТРОКИ, MAP, SET   НЕ РАБОТАЕТ С ОБЬЕКТОМ*/
// for(let key of arr) {
// 	console.log(key);
// }


// let str = 'Dima, Alex, Ann, Alexander';
// let products = str.split(','); /*Строку записывает в массив через указанный разделитель*/
// let str2 = products.join(';'); /*Массив склеиваем в строку через указанный разделитель*/
// console.log(products.sort()); /*Сортируем по алфавиту*/

/*Метод SORT цифры сортирует посимвольно, как строку, строки он сортирует по регистру, сначала большие буквы*/
// let numbers = [26, 85, 83, 10, 1, 13];
// console.log(numbers.sort());

/*Для сортировки цифр нужно использовать CALLBACK функцию*/
// console.log(numbers.sort((a, b)=> {
// 	return a - b;
// })); 


/*МЕТОДЫ ПЕРЕБОРА МАССИВА */
// FILTER фильт по условию
// let names = ['Dima', 'Alexander', 'Stas', 'Marianna'];
// names = names.filter(function(item){
//     return item.length < 5;
// });
// console.log(names);


// MAP трансформирует КАЖДЫЙ элемент
// let names = ['Dima', 'Alexander', 'Stas', 'Marianna'];
// names = names.map(function(item){
//     return item.toUpperCase();
// });
// console.log(names);


// Every\some
// let some = [4, 'Привет', 'Как то'];
// console.log(some.some(function(item){
//     return typeof(item) === 'number';
// }));

// console.log(some.every(function(item){
//     return typeof(item) === 'number';
// }));

// REDUCE складывает все значения воедино
// let a = [1,2,3,4,5];
// a = a.reduce(function(s,c){
//     return s+c;
// });
// console.log(a);


// ENTRIES, FROMENTRIES трансформирует обьект в матрицу и из нее
/*Обьект переводим в матрицу, перебираем с помощью FILTER , если есть значение PERSONE,
затем перебираем MAP чтобы получить уже только имена и получаем обьект с именами */
// let a = {
//     dima: 'persone',
//     alex: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };
// let newA = Object.entries(a);
// console.log(newA);
// newA = newA.filter(function(item,i){
//     return item[1] == 'persone';
// });
// newA = newA.map(function(item){
//     return item[0];
// });
// console.log(newA);



/*КОПИРОВАНИЕ МАССИВОВ */

// let arr = [1, 5, 9];
// let newArr = arr.slice(); /*Метод slice() создает поверхностную копию, т.е. все обьекты 
// внутри будут ссылками на старый обьект*/
// newArr[1] = 'some';
// console.log(newArr);
// console.log(arr);

/*SPREAD оператор разворачивает массив на отдельные структуры , можно копировать им массивы и обьекты*/
// let video = ['youtube', 'vimeo', 'rutube'];
// let blogs = ['wordpress', 'livejornal', 'blogger'];
// let internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);




















/*ООП */
// let soldier = {
// 	health: 400,
// 	armor: 100,
// 	sayHi(text) {
// 		console.log(`${text}`);
// 	}
// };
// let john = {
// 	health: 100
// };
// john.__proto__ = soldier; /*устаревший способ установки прототипа */

// Object.setPrototypeOf(john, soldier);  /*Устанавливаем прототип */

// let dima = Object.create(soldier); /*Создаем обьект, который прототипно наследуется от soldier */
// console.log(john, john.armor);
// john.sayHi('ПРИВЕТ, МИР!');
// dima.sayHi('HELLO');








/*ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ DOM*/
// document.body.append(); /*Добавляет элемент в конец родителя */
// document.body.prepend(); /*Добавляет элемент вначло родителя */

// element.before(div); /*Перед каким то элементом */
// element.after(div); /*После какого то элемента */
// element.remove(); /*Удалить элемент из документа */

// element.replaceWith(div); /*Какой элемент мы хотим заменить элементом в скобках */


// element.innerHTML = '<p>HELLO WORLD</p>'; /*Вставить HTML код */
// element.textContent = 'HELLO WORLD'; /*Вставить текст в элемент */

// element.insertAdjacentHTML('afterend', '<h1>HELLO WORLD</h1>'); /*Вставить HTML код перед, после и т.д. */








/*СОБЫТИЯ И ИХ ОБРАБОТЧИКИ */
/*Чтобы удалить собитие нужно CALLBACK передать как отдельную функцию */
// let btns = document.querySelectorAll('button');
// btns.forEach(function(item) {
//     item.style.cssText = 'width: 200px; height: 100px; background-color: blue';
//     item.addEventListener('click', function(e) {
//         // console.log(e.target);
//     }, {once: true}); /*Можно передать третий аргумент в обработчик собития(например ONCE) */
// });
// document.addEventListener('keydown', function(e) {
//     // console.log(e);
// });

// нужно передавать 3 им аргументом опции, чтобы например, прервать скролл внутри пассивного события












/*НАВИГАЦИЯ ПО  ДЕРЕВУ */
// console.log(document.body.childNodes); /*Получить все узлы родителя */

// console.log(document.body.firstChild); /*Получить первый узел родителя */
// console.log(document.body.firstElementChild); /*Получить первый узел родителя */

// console.log(document.body.lastChild); /*Получить полсдений узел родителя */
// console.log(document.body.lastElementChild); /*Получить полсдений узел родителя */

// console.log(document.querySelector('button').parentNode);/*Получить родителя элемента */
// console.log(document.querySelector('button').parentElement);/*Получить родителя элемента */
// console.log(document.querySelector('button').parentNode.parentNode); /*Можно продублировать */

// console.log(document.querySelector('[data-cur]')); /*Получить элемент по названию атрибута */
// console.log(document.querySelector('[data-cur]').previousElementSibling); /*Получить предыдущий элемент*/
// console.log(document.querySelector('[data-cur]').nextElementSibling); /*Получить следующий элемент*/


/*ПОЛУЧИТЬ ВСЕ NODES БЕЗ КОММЕНТАРИЕВ И ТЕКСТОВЫХ НОД */
// let a = document.body.childNodes;
// console.log(a);
// for(let item of a) {
//     if(item.nodeName != '#text' && item.nodeName != '#comment') {
//         console.log(item);
//     }
// }

















/*ДЕЛЕГИРОВАНИЙ СОБЫТИЙ!!
бЕЗ ДЕЛЕГИРОВАНИЯ СОБЫТИЙ, СОЗДАННЫЕ ЭЛЕМЕНТЫ ДИНАМИЧЕСКИ, НЕ ПОЛУЧАЮТ ОБРАБОТЧИК СОБЫТИЙ, ЕСЛИ ОН
БЫЛ ЗАДАН ДЛЯ КНОПОК РАНЬШЕ*/
// let bnts = document.querySelectorAll('button');
// let wrapper = document.querySelector('.wrapper');
// wrapper.addEventListener('click', function(e){
//     if(e.target.tagName == 'BUTTON') {
//         console.dir(e.target);
//     }
//     if(e.target.matches('.red')){
//         console.log('ТОЛЬКО С КРАСНЫМ КЛАССОМ');
//     }
// });
// let a = [5];
// for(let i = 0; i < a[0]; i++){
//     let element = document.createElement('button');
//     element.style.cssText = 'width: 200px; height: 100px; background-color: blue';
//     element.classList.add('red');
//     wrapper.append(element);
// }














/*SET TIME OUT */
/*Рекурсивный setTimeout лучше 
setInterval тем, что он ждет выполнения функции, а только потом запускает таймер, и так по кругу
setInterval же, запускает таймер не дожидаясь завершения функции(Особенно важно в больших функциях)*/















// THIS
/*Контекст в обычной функции показывает WINDOW , если нет строго режима либо UNDEFINED при включенном */
// function showThis(){
//     console.log(this);
// }
// showThis();

// function showThis(a,b){
//     console.log(this);
//     calc();
//     function calc(){
//         return this.a + this.b;
//     }
// }
// showThis(5, 5);


/*Контекст у методов обьекта будет сам обьект 
У функции в методе контекcт опять же будет , как у простой функции*/
// let obj = {
//     a: 5,
//     b: 10,
//     sum: function () {
//         console.log(this); //контекст сам обьект
//         function cry() {
//             console.log(this); // контекст undefined
//         }
//         cry();
//     }
// };
// obj.sum();


/*
Ловушка контекста 
Допустим есть обьект
При ВЫЗОВЕ метода будет являться сам обьект, но если метод будет вызываться другой функцией, как callback,
контекст потеряется!!!
То есть когда метод является CALLBACK'ом, THIS потеряется!!!
Почему? Допустим мы отдали метод обьекта в callback и думаем, что this останется у обьекта, но на самом деле this
будет то, ГДЕ ВЫЗВАН метод, то есть THIS будет там, где вызван метод в роли callback.

Контекстом будет являтся то, что находится слева от вызова:
props.sayHi();  This будет обьект props.
Но если мы деструктуризируем обьект и вытащим метод:
let {sayHi} = props;
sayHi();   This будет уже то, ГДЕ вызван метод.
*/
// let contextTry = (callback) => {
//     callback();
// }
// let obj = {
//     a: 'dima',
//     log() {
//         console.log(this);
//     }
// }
// obj.log();
// contextTry(obj.log); //здесь контекст потеряется!!!

// contextTry(() => { obj.log() }); //здесь же все будет хорошо

// obj.log = obj.log.bind(obj); //либо привязать его так
// contextTry(obj.log.bind(obj)); //либо так, чтобы контекст не терялся
// contextTry(() => obj.log.call(obj)); 
/*тут обязательно нужно вызвать через callback, потому что call в отличии от bind не возвращает новую функцию,
и получается функция contextTry не может вызвать obj.log.call(obj)*/






/*В конструкторах и классах, контекст будет НОВЫМ СОЗДАННЫМ ОБЬЕКТОМ(новый экземпляр обьекта) */
// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(this.name, this.id);
//     };
// }
// let dima = new User('Dima', 21);


/*Ручная установка контекста в функцию (CALL и APPLY)*/
// function sayName(surname) {
//     this.surname = surname;
//     console.log(this);
//     console.log(this.name);
// }
// let user = {
//     name: 'Dima'
// };
// sayName.call(user, 'Bunakov');/*Аргументы функции передаются через запятую */
// sayName.apply(user, ['Smith']);/*Аргументы функции передаются в массиве */


/*Забиндить контекст вызова BIND
Создает новую функцию под которую мы подвязываем конекст
THIS здесь, это цифра 2 в методе BIND, double новая созданная функция с контекстом переданным в BIND */
// function count(num){
//     console.log(this * num);
// }
// let double = count.bind(2);
// double(10);
// double(48);


/*СТРЕЛОЧНАЯ ФУНКЦИЯ БЕРЕТ КОНТЕКСТ У СВОЕГО РОДИТЕЛЯ */
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(this.name, this.id, this); // сам обьект является контекстом у методов обьекта

//         /*undefined */
//         let a = function () {
//             console.log(this);
//         };
//         /*контекст родителя, то есть сам обьект */
//         let b = () => {
//             console.log(this);
//         };
//         a();
//         b();
//     }
// }
// let dima = new User('Dima', 21);
// dima.hello();

/*В обработчике события контекст это сама цель, если функция обычная, если стрелочная, то window если нет строгого
режима*/
// document.querySelector('.btn').addEventListener('click', function () {
//     console.log(this);
// });
// document.querySelector('.btn').addEventListener('click', () => {
//     console.log(this);
// });











// ФУНКЦИЯ КОСТРУКТОР
// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(this.name, this.id);
//     };
// }
// User.prototype.exit = function(){ /*Создаем прототипно свойство или метод конструктора */
//     console.log(`${this.name} ушел`);
// };
// let dima = new User('Dima', 21);
// let alex = new User('Alex', 20);
// alex.hello();
// alex.exit();

// console.log(dima);
// console.log(alex);













/*КЛАССЫ */
// class Recktangle{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     calcArea(){
//         return this.height * this.width;
//     }
// }

// let a = new Recktangle(150, 200);
// console.log(a.calcArea());

// let b = new Recktangle(20,100);
// console.log(b.calcArea());

// /*Наследование класса(имеет все методы и свойства родителя) */
// class ColoredRecktangle extends Recktangle{
//     constructor(height, width, text, color){
//         super(height, width);/*ВЫЗЫВАЕТ СВОЙСТВА РОДИТЕЛЯ(все строки из конструктора)ВСЕГДА СТОИТ НА 1ом месте */
//         this.text = text;
//         this.color = color;

//     }
// }

// let c = new ColoredRecktangle(100,100,'Привет', 'red');
// console.log(c);
// console.log(c.calcArea());


// приватные свойства записываются через #    #name = 'dima';


// чтобы отрендерить снова например слайдер , как у меня, можно просто вызвать метод рендер снова, на той же переменной,
// и , если требуется обнулить внутренние переменные, чтобы избежать багов















/*SPREAD оператор разворачивает массив на отдельные структуры , можно копировать им массивы и обьекты*/
// let video = ['youtube', 'vimeo', 'rutube'];
// let blogs = ['wordpress', 'livejornal', 'blogger'];
// let internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

/*REST оператор ставится в конце! Используется для того, если ты не знаешь сколько аргументов последует далее
Он собирает их в массив*/
// function log(a,b, ...rest){
//     console.log(a, b, rest);
// }
// console.log('basic', 'rest', 'Привет', 'qwe', 1);

// function calcOrDouble(num, basis = 2){
//     console.log(num * basis);
// }
// calcOrDouble(5);















/*JSON */
// let person = {
//     name: 'Alex',
//     tel: '+79009298465',
//     parents: {
//         mom: 'Olga',
//         dad: 'Dima'
//     },
// };
// console.log(JSON.stringify(person)); /*Перевод в JSON формат */
// console.log(JSON.parse(JSON.stringify(person))); /*Перевод из JSON формата */
// let a = JSON.parse(JSON.stringify(person));/*ГЛУБОКОЕ КОПИРОВАНИЕ ОБЬЕКТА */
// a.parents.mom = 'ELENA';
// console.log(person);
// console.log(a);
/*К сожалению, этот метод нельзя использовать для копирования методов объекта, которые были написаны
 пользователем вручную. */


















/*AJAX */
// let inputRub = document.querySelector('#rub'),
// inputUSD = document.querySelector('#usd');

// inputRub.addEventListener('input', function(e){
//     let req = new XMLHttpRequest();
//     req.open('GET', 'js/current.json');
//     req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     req.send();/*Передается аргумент, если мы отправляем что то */
// req.addEventListener('readystatechange', function(e){
//     if(req.readyState == 4 && req.status == 200){
//         console.log(req.response);
//         let data = JSON.parse(req.response);
//         inputUSD.value = (inputRub.value / data.current.usd).toFixed(2);
//     } else{
//         inputUSD.value = 'Что-то пошло не так';
//     }
// });
//     req.addEventListener('load', function(e){
//         if(req.status == 200){
//             console.log(req.response);
//             let data = JSON.parse(req.response);
//             inputUSD.value = (inputRub.value / data.current.usd).toFixed(2);
//         } else{
//             inputUSD.value = 'Что-то пошло не так';
//         }
//     });
// });

















/*PROMISE */
/*В resove передается значение, которое хотим вернуть, и вызывается эта функция как CALLBACK,
она же и есть THEN метод(в THEN передается как раз RETURN из PROMISE)
Если в Promise ассинхронный код, надо вернуть new Promise в THEN, если код обычный, можно вернуть 
просто значение, которое будет использовано далее по коду */
// console.log('Запрос данных');
// let r = new Promise(function(resolve){
//     setTimeout(function(){
//         console.log('Подготовка данных');
//         resolve();
//     },2000);
// }).then(function(){
//     let product = {
//         name: 'TV',
//         price: 2500
//     };
//     return product;
// }).then(function(product){
//     return new Promise(function(resolve, reject){
//         product.status = 'ordered';
//         resolve(product);
//     }); 
// }).then(function(product){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log(`Статус заказа: ${product.status}`);
//             resolve(product);
//         });
//     });
// }).then(function(product){
//     product.ordered = true;
//     return product;
// }).then(function(product){
//     console.log(product);
// }).then(function(){
//     console.log('Ваши данные обработаны и заказ скоро будет отправлен');
// }).finally(function(){
//     console.log('Спасибо за доверие');
// });


// let req = new Promise(function(resolve){
//     console.log('Запрос на сервер');
//     resolve();
// });
// req.then(function(){
//     let product = {
//         name: 'TV'
//     };
//     return product;
// }).then(function(product){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             product.price = 2000;
//             resolve(product);
//         }, 2000);
//     });
// }).then(function(product){
//     product.status = 'IT IS';
//     return product;
// }).then(function(product){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             product.ordering = 'ordered';
//            resolve(product);
//         }, 2000);
//     });
// }).then(function(product){
//     console.log('Данные обработаны');
//     return product;
// }).then(function(product){
//     return new Promise(function(resolve){
//         product.deliver = 'Is Sent';
//         resolve(product);
//     });
// }).then(function(product){
//     console.log(product);
//     return product;
// }).then(function(product){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log('Ваш заказ обработан');
//             resolve(product);
//         }, 2000);
//     });
// }).then(function(product){
//     console.log(product);
//     return product;
// }).then(function(product){
//     console.log('Ждите доставки');
// });


/*Метод All ждет выполнения всех Promises(выполнится после завершения последнего) */
// function test(time){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(time);
//         }, time);
//     });
// }
// test(1000).then(function(time){
//     console.log(`Отработал за ${time} миллисекунд`);
// });
// test(2000).then(function(time){
//     console.log(`Отработал за ${time} миллисекунд`);
// });
// Promise.all([test(1000), test(2000)]).then(function(time){
//     console.log(`Отбаботал за ${time} миллисекунд`);
// });
// /*Выполняется после первого готового Promise */
// Promise.race([test(1000), test(2000)]).then(function(time){
//     console.log('Ждем первого готового, выполнил за ' + time);
// });














/*FETCH API */
/*FETCH не возвращает ошибку при ошибках 404 и т.д */
/*Возвращает PROMISE, чтобы далее можно было обработать(ниже GET запрос) */
/*resoponse.json() трансформирует из формата JSON в обычный обьект JS */
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json));

// /*POST запрос */
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-type': 'application/json'
//     },
// })
// .then(response => response.json())
// .then(json => console.log(json));












// Foreach
// На него не действует return. то есть все равно будет перебирать ВСЕ элементы

















/*Из FORMDATA В JSON */
// let obj = {};
// formdata.forEach(function(item, i){
//     obj[i] = item;
// });

// let json = JSON.stringify(Object.fromEntries(formdata.entries()));



// чтобы была доступна FORMDATA в верстке в форме должны быть атрибуты name у обьектов формы

/*в формдату можно append новые свойства
 
отправка json formdata
если хотим запушить в formdata обьект, то сначала нужно его перевести в json, а затем пушить, а затем 
и саму formdata перевести в json*/













/*Async/ await 
Используются для превращения код в синхронный*/
// Условие проверяет статус ответа из PROMISE от FETCH, если что то не так, выкидываем ошибку(без нее не работает CATCH)
// let postData = async function(url, data){
//     let res = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: data
//     });
//     if(!res.ok){
//         throw new Error('Произошла хуйня');
//     }
//     return await res.json();
// };
















/*Подключение библиотек */
/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>  перед главным скриптом*/















// WINDOW














/*LOCALSTORAGE */
// localStorage.setItem('SomeName', 5); //если значение есть, перезапишется значение
// localStorage.getItem('SomeName');
// localStorage.removeItem('SomeName');
// localStorage.clear(); // Очистить полность
// Можно записывать обьекты, данные какие то. Обьекты записываются в формате JSON(нужно перевести в него)


















/*РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ */
// 3 Флага: 
// i   -   вне зависимости от регистра
// g   -   глобальный поиск
// m   -   многострочный режим
// г    -   позволяет работать со знаками препинаний и т.д

// \n   -   можно переносить строки на новую вниз, таким образом
// console.log('При\nвет'); 



// .   -   любой элемент либо все символы

// console.log('Пр вет'.match(/р.в/i));
// console.log('Т-ы дибил'.match(/т.ы/i));


// Классы
// \d  -   ищем цифры

// \w   -   ищем буквы латиницы, подчеркивания или цифры(русские не ищет буквы)

// \s   -   все пробелы
// console.log('1 - 2'.match(/\d\s-\s\d/)); 

// \D   -   не числа

// \W   -   не буквы


/*Метод Search ищет только первое вхождение*/
// let name1 = 'Nina';
// console.log(name1.search(/n/i));



/*MATCH создает массив с найденными совпадениями */
// let name1 = 'Nina';
// console.log(name1.match(/n/ig));

// Можно вытаскивать только цифры и записывать потом в переменную
// let some = '17-11nk,-1998';
// let arr = some.match(/\d/g);
// let a = arr.reduce((s,c)=>s+c);
// console.log(a);


// Можно по шаблону вытаскивать значения(тут например указана последовательность символов слово,цифра,слово,цифра)
// let str = 'My name is r2d2';
// console.log(str.match(/\w\d\w\d/g));


// Получили телефон и сделали из него строку
// let phone = '+790092984fg65';
// let a = phone.match(/\d/g).join('');
/* а тут посчитали сумму его всех цифр*/
// let b = phone.match(/\d/g);
// b = b.map(function(item){
//     return +item;
// });
// console.log(b.reduce((s,c) => s+c));



/*REPLACE */
// let name1 = 'Nina';
// console.log(name1.replace(/./g, '*'));

// let some = '12-13-14-15';
// console.log(some.replace(/-/g, ':'));



/*TEST (метод регулярного выражения) */
// let name2 = 'Voldemort';
// let reg = /volde/ig;
// console.log(reg.test(name2));



/*Если регулярное выражение ничего не нашло, выведет NULL. Ниже конструкция позволяет создавать всегда массив */
// let a = 'qwer'.match(/\d/g) || [];
// console.log(a);




// В строке замены replacement мы можем использовать специальные комбинации символов для вставки фрагментов совпадения:
//      $&	вставляет всё найденное совпадение
//      $`	вставляет часть строки до совпадения
//      $'	вставляет часть строки после совпадения
//      $$	вставляет символ "$"



// Якоря ^ означает начало строки и $ конец строки
// console.log(/^\d\d:\d\d$/.test('12:34')); //проверяем, правильно ли записана дата и нет ли лишних символов
// console.log(/\d\d:\d\d/.test('14352:345')); // если без якорей, будет искать где то в середине

// флаг m      меняет поведение поиска(в нем ^ начало каждой строки)
/* без него находит только в первой строке цифру, несмотря на g*/
// let a = `1ое место:
// 2ое место:
// 3е место:`;
// console.log(a.match(/^\d/g));
// /* с ним уже находит все*/
// console.log(a.match(/^\d/gm));

// /*С $ все тоже самое,только без m будет искать в самое последней строке текста */
// let a = `место: 1
// место: 2
// место: 3`;
// console.log(a.match(/\d$/g));
// /* с ним уже находит все*/
// console.log(a.match(/\d$/gm));
// /*Символ перевода ищет только в тех местах, где есть перевод(незатрагивает последнюю строку) */
// console.log(a.match(/\d\n/g));



/*Граница слова \b*/
// let a = 'Завтрак в 09:00 в комнате 123:456';
// console.log(a.match(/\b\d\d:\d\d\b/));

// let a = 'dima привет';
// console.log(a.match(/\b..../g));



















/*GETTER and SETTER */
/*Синтаксис с функцией */
// function User(name, age){
//     this.name = name;
//     let userAge = age;
//     this.say = function(){
//         console.log(`Имя ${this.name}, вораст: ${userAge}`);
//     };
//     this.getAge = function(){
//         return userAge;
//     };
//     this.setAge = function(num){
//         if(typeof(num) === 'number' && num > 0 && num < 110){
//             userAge = num;
//         } else{
//             console.log('Какая то ошибка');
//         }
//     };
// }

// let dima = new User('Dima', 21);
// console.log(dima.userAge);
// console.log(dima.getAge());
// console.log(dima.setAge(30));
// dima.say();



/*Синтаксис с классом
Свойства, в которые нельзя вмешиваться напрямую, записываются через "_" и устанавливаются только
с помощью GET and SET */
// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     #surname = 'Bunakov'; //Создаем приватное свойство обьекта(нельзя обратиться снаружи)
//     sayAll(){
//         return `${this.name} ${this.#surname} ${this.age}`;
//     }
//     get surnameFrom(){
//         return this.#surname;
//     }
//     set surnameFrom(str){
//         this.#surname = str;
//     }
// }

// let Dima = new User('Dima', 21);
// console.log(Dima.surname);//Пробуем достучаться до скрытого свойства
// console.log(Dima.sayAll());

// console.log(Dima.surnameFrom);
// console.log(Dima.surnameFrom = 'Kopitov');
// console.log(Dima);


















/*МОДУЛЬ 
Создаем локальные функции видимости*/
// let num = 1;
// (function(){
//     let num = 10;
//     console.log(num);
// }());
// console.log(num);



// let user = (function(){
//     let privat = () => {
//         console.log('I am Privat');
//     };
//     return {
//         saySomething: privat
//     };
// }());
// user.saySomething();











/*TRY CATCH */
// Аргумент error указывает место ошибки в блоке try
// try{
//     console.log('Работает');
//     console.log(a);
//     console.log('Работает');
// } catch(e){
//     console.log(e);
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);
// } finally{
//     console.log('Выполнить в любом случае');
// }
// console.log('Все еще работает');

















/*ФУНКЦИЯ ГЕНЕРАТОР */
// Каждый следующий вызов будет изменяться значение результата(yield)
// function* generator(){
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }
// let str = generator();


// // можно перебрать все значения с помощью FOR OF
// function* count(n){
//     for(let i = 0; i < n; i++){
//         yield i;
//     }
// }
// for(let k of count(7)){
//     console.log(k);
// }

















/*АНИМАЦИЯ JS */
// const btn = document.querySelector('.btn'),
//       elem = document.querySelector('.box');  
// let pos = 0;

// function myAnimation() {
//     pos++;
//     elem.style.top = pos + "px";
//     elem.style.left = pos + 'px';

//     if (pos < 300) {
//         requestAnimationFrame(myAnimation);
//     }
// }

// btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);


















/*ВСЕ, ЧТО МЫ ПОЛУЧАЕМ С ПОМОЩЬЮ КОМАНД ПРИХОДИТ В ВИДЕ СТРОКИ!!!
НАПРИМЕР В СЛАЙДЕРЕ , КОГДА С ТОЧКАМИ ПОЛУЧАЛИ АТРИБУТ, ВЫЛАЗИЛА ОШИБКА, ПРИ ЗАПИСИ */

// Конкатенация это сложение чего то со строкой
// console.log(typeof(!!'0')); /*Преобразование в BOOLEAN */

/*ПУСТОЙ МАССИВ РАВЕН СТРОКЕ */
// console.log([]+1+2); 

/*&& вернет последнее значение, если оно правдиво
запинается на лжи,
|| запинается на правде*/

// console.dir(); /*ВЫВОДИТ ВСЕ МЕТОДЫ И СВОЙСТВА ОБЬЕКТА */

// Инкапсуляция - это скрытие внутреностей(функций , переменных и т.д.) от внешнего вмешательства

// Получить INPUT с определенным значением name     qs('input[name="user_phone"]');

// Получить все тэги не включая с классом 'sizes-hit'       document.querySelectorAll('p:not(.sizes-hit)');

// dataTransfer это файлы при перетаскивании

// чтобы отправлять много файлов в HTML нужно в input устновить атрибут miltiple , чтобы только определенный тип файлов:
// нужно установить accept и присвоить значение image/*




// ES8
// let arr = [1,2,3,20];
// let arr2 = [300, 500];
// console.log(Math.max(...arr, 1000, ...arr2));


// let admin = {
//     name: 'admin',
//     rules: 'full'
// }
// let user = {
//     name: 'user',
//     rules: 'restricted',
//     me: 'yes'
// }
// // let a = Object.assign({}, user, admin); /*Записать свойства в новый обьект */
// let a = {...user, ...admin};
// console.log(a);


// function say(a,b, ...arr){
//     console.log(arr);
// }
// say(1,2, 'а вот это уже массив', 'с данными');


// let a = 5;
// let b = 6;
// let obj = {
//     a,
//     b,
//     calcSq(){
//         console.log(this.a * this.b);
//     }};
// console.log(obj);
// obj.calcSq();


/*деструктуризация в деструктуризации */
// let obj = {
//     a: 25,
//     b: 'привет',
//     name: {
//         first: 'sam',
//         second: 'smith'
//     }
// }
// let {a, b, name: {first, second}} = obj;
// console.log(a,b,name);
// console.log(first, second);


// let arr = [[1,2], ['привет', 'пока']];
// let [[a,b], [c,d]] = arr;
// console.log(a,b,c,d);






// EVENT LOOP
/*Сначала выполнится синхронный код, потом асинхронный
сначала асинхронный вызов попадет в web apis , а после него в очередь выполнения callstack, 
где уже выполнится синхронный код */
// ну и setTimeout не может быть равен 0, он равен примерно 4 миллисекунды
// setTimeout(function(){
//     console.log(1);
// }, 0)
// console.log(2);
























/*В этой функции я получил значение из INPUT и с 
помощью регулярок, удалил все цифры, и туда нельзя записать ничего, кроме цифр */
// function getInputsInformation(parentElement){
//     let elements = document.querySelectorAll(`${parentElement} input`);
//     elements.forEach(function(item){
//         item.addEventListener('input', function(e){
//             if(e.target.getAttribute('id') == 'height'){
//                 height = e.target.value.replace(/\D/g, '');
//                 e.target.value = height;
//             } else if(e.target.getAttribute('id') == 'weight'){
//                 weight = e.target.value.replace(/\D/g, '');
//                 e.target.value = weight;
//             } else{
//                 age = e.target.value.replace(/\D/g, '');
//                 e.target.value = age;
//             }
//             calcTotal();
//         });
//     });
// }















/*Мобила телефон target */
// e.targetTouches это мобильный считыватель касаний



















// CSS
// attr()
























/*React sass */
// npm install node-sass --save       //позволяет подлючать sass в реакт, теже импорты, что и обычные css файлы
// import './style.scss';


// npm install node-sass


// npm uninstall node-sass
// npm install node-sass@4.14.1   //эта версия нужна, потому что выходит ошибка, если вместе с node-sass устанавливать sass-loader



// npm install reactstrap bootstrap@4 --save  //установка bootrtrap в реакт
// можно импортировать готовые компоненты из реактстрэп, кнопки, слайдеры,  и т.д.
// import {Button} from 'reactstrap';
// и в index.js, в самом главном файле импортировать bootstrap import 'bootstrap/dist/css/bootstrap.css';



/*css in js */
// npm install --save styled-components

// import styled from 'styled-components';
/*let appBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
 
    // если есть вложенный элемент, то
    h1{
        font-size: 24px;
        :hover{
            color: red;
        }
    }
    // условия могут быть также если в элемент передан пропс. Этот компонент принимает допустим props colored
    h2{
        color: ${props => props.colored ? 'red' : 'black'}; 
    }
 `

// appBlock можно также в будущем превратить в любой тэг, для этого при вызове нужно указать < appBlock as='a' />
// превратили в ссылку этот div


// можно использовать, дорабатывать уже готовые компоненты; стили возьмутся из предыдущего компонента и добавятся новые
let StyledAppBlock = styled(appBlock)`
    width: 500px;
    color: orange;
 `
 */











//  Фишки
// Math.random() * 100 + 25; диапозон рандома от 25 до 100












/*REACT */
// Внутри create-react-app уже есть BABEL и WEBPACK!!

// npm i create-react-app

// npx create-react-app my-app
// cd my-app
// npm start


// PropTypes  /* eslint-disable react/prop-types */ чтобы отключить вначале файла поставить надо
// либо нужно указывать точно, какой это тип пропса, строка, обьект и т.д.
// PostListItem.propTypes = {
//     label: PropTypes.string
// }

// React.Fragment принимает один key и все! Если тэг пустой, то key не принимает



// Изображения подключаются в тэги след. образами:
//если изображение лежит в папке PUBLIC используется переменная process.env.PUBLIC_URL + 'путь до изображения'
//  <img src={process.env.PUBLIC_URL + 'img/error.png'} alt='Произошла ошибка'></img>
// Либо import img from './sdfsdfsd.png';




// Контролируемые элементы (input, select, textarea). Если state был изменен с информацией из этих тэгов, то нужно
// замкнуть круг, и вставить state в тэг. <input value={this.state.value}/>





// вызывать функции работы со страницей , да и вообще, приложения лучше в методах жизненного цикла





/*componentWillUnmount */
// если у нас есть таймер console.log(1) через каждые 2 секунды, то при удалении элемента, в котором он работал
// он будет продолжать работать дальше. Такие вещи нужно останавливать и обнулять в хуке жизненного цикла удаления


/*componentDidUpdate */
// принимает 2 аргумента
// первый - prevProps, мы должны сравнить на разницу между прошлым и нынешним props, иначе метод будет 
// постоянно вызываться




/*componentDidCatch обрабатывает ошибки только внутри методов жизненного цикла и методов в render и
не обрабатывает ошибки в асинхронных операциях 
ТАКЖЕ он срабатывает на Родительском компоненте, например: APP > compontent(тут ошибка, значит сработает в APP) или
APP > component > item(тут ошибка, а метод стоит в component, то сработает на component)*/

//НЕМНОГО ПАТТЕРНОВ REACT
// render-function определяет сверху, какие значения вывести в компоненте


/*this.props.children
в файле characterPage мы передаем Field как chidlren ItemDetails компонента , в свое время Field возвращает 
верстку на основе аргументов передаваемых в него(item - это сам обьект, label и field это чем заполнить статическую 
инфу и по какому параметру искать в item(в обьекте) значение, которым заполнится один из span'ов
В ItemDetails у нас вызывается функция ContentDetails, в которую мы передаем this.props.children от ItemDetails, 
передается она, как аргумент children, затмем мы с помощью метода React.Children.map трансформируем this.props.children
в котором вызываем метод React.cloneElement и копируем этот самый элемент из this.props.children и в этом методе же
мы записываем в него новое значение elem={item}(берем из ItemDetails.this.state.item)(это и есть сам персонаж, 
книга или дом) и теперь у нас создается на основе this.props.children столько элементов, сколько мы передали в 
компонент ItemDetails в файле characterPage
ЕЩЕ РАЗ! React.cloneElement мы добавляем , можно сказать привязываем персонажа, книгу , крч обьект к определенному 
ребенку из this.props.children*/

/*Если без  ContentDetails
то, в render мы  
    <div className="char-details rounded">
        <h4>{name}</h4>
            <ul className='list-group list-group-flush'>
                {React.Children.map(this.props.children, (child)=>{
                    return React.cloneElement(child, {item}) //item приходит из this.state
                })}
            </ul>
    </div>
и естественно в Field elem меняем на item*/




/*React Router нужен для навигации по сайту, она разбита на 2 части(1ая для 
отображения в браузере, 2ая для построения мобильных приложений) 
import {BrowserRouter as Router, Route} from 'react-router-dom';
Для подключения роутера, все приложение обертывают в Router, и React.Fragment переименовывают в DIV, т.к. часто 
ломаются стили, и к этому диву подключаются стили app.css*/
// import {withRouter} from 'react-router-dom'; нужен для доступа записи в history, match, location.
// просто так React не имеет доступа к ним


// npm i react-router-dom
/*import {Link} from 'react-router-dom';  <Link to='/books'>Books</Link>   
    и ссылки, которые ведут на элементы, мы заменяем этим Link'ом */
/* <Route exact={true} path='/characters' component={CharacterPage}/> exact прописывается, 
чтобы реакт грузил только одно совпадение по пути в адресной строке(иначе же, если ссылки
имеют общее начало, то будут грузиться все)*/


/*пример работы history в приложении GOT
при клике на listItem берем оттуда id, последние цифры, пушим их в history(это адесная строка), и затем, мы 
передаем этот id из адресной строки(this.props.match.params.id) в itemDetails , где уже запрос к серверу бросам,
чтобы получить информацию о персонаже или чем то еще */





// defaultProps
// Component.defaultProps = {
//     названиеПропса: значение
// }
// передается в компонент, если сверху не был передан этот пропс

// npm i prop-types




/*ХУКИ*/
// let [data, refreshData] = useState([{name: 'Dima', gender: 'male'}]);
// refreshData - метод обновления data

// этот хук появления, обновления, удаления
// useEffect(()=>{
//     console.log(Math.random());
/*чтобы сделать фунцкионал componentWillUnmount, нужно вернуть функцию, которая будет 
содержать функционал при удалении компонента 
чтобы сравнить prevProps и currentProps, вторым аргументом можно передать то, что сравниваем, 
если информация примитив, то так и записываем "[переменная]", если это сложная структура, 
то просто ставим "[]"*/
//     return ()=>{
//         clearInterval();
//     }
// }, [])







/*React.Context */
// let Сontext = React.createContext();

/*затем в главный файл импортируем context и оборачиваем все приложение, в Provider только можно value передать*/
{
    /* <Сontext.Provider value={'DIMA'}>
        <App/>
    </Сontext.Provider> */
}
/*и в нужном компоненте вызываем consumer из которго вытаскиваем value*/
{
    /* <Сontext.consumer>
        {(value)={
            return(
                <h1>my name is {value}</h1>
            )
        }}
    </Сontext.consumer> */
}

/*Если же компонент классовый то:
let Name extends Component{
    // либо static contextType = Сontext;
    render(){
         <h1>my name is {this.context}</h1>
    }
}
Name.contextType = Сontext; //мы привязываем к классу контекст*/










/*REDUX*/
// npm install redux react-redux

// import {createStore, bindActionCreators} from 'redux';  // импорт из redux

// let reducer = (state = 0, action) => { //функция изменения state
// 	switch (action.type) {
// 		case 'INC':
// 			return state + 1;
// 		default:
// 			return state;
// 	}
// }
/*если в REDUCER не вернуть state, будет много ошибок */

// const store = createStore(reducer); //создаем store привязывая функцию

// store.subscribe(()=>{ //метод срабатывает, когда store обновляется
// 	console.log(store.getState());
// });

// store.dispatch({type: 'INC'}); //обновляем store
// store.dispatch({type: 'INC'});

// let bindActionCreators = (creater, dispatch) => (...args) => { //как она работает изнутри
// 	return dispatch(creater(...args));
// }
// let rndDispatch = bindActionCreators(rnd, dispatch);
// onClick={()=>rndDispatch(переменная)}

/*принимает в себя функцию, которая содержит TYPE для определения действия, и вторым аргументом dispatch,
т.е.
document.querySelector('#inc').addEventListener('click', ()=>{
    store.dispatch(inc()); //запись раньше или store.dispatch({type: 'INC'});
    incDispatch() //запись щас
}); */







// import {Provider} from 'react-redux';
// Provider передает все состояния хранящиеся в приложении, в Provider передается store
/*
<Provider store={store}></Provider>
*/
/*чтобы получить доступ к store в любом компоненте, нужно компонент вернуть с функцией connect */
// import {connect} from 'react-redux';
// export default connect(mapStateToProps, mapDispathcToProps)(Component)

// mapStateToProps это функция, которая берет нужное состояние и передает его, как пропс
/* store может быть всем, чем угодно, берется из reducer
    let mapStateToProps = (store) => {
        return {
            value: store
        }
    }
*/

// mapDispathcToProps это функция, которая берет нужный action и передает его, как пропс
/*
    import { bindActionCreators } from 'redux';
    import * as actions from '../actions';
    //
    let mapDispathcToProps = (dispatch) => {
        return bindActionCreators(actions, dispatch);
    }


    // или
    import {inc, dec, rnd}s from '../actions';
    let mapDispathcToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: () => {
            let value = 2;
            dispatch(rnd(value));
        }
    }
}

если нам не нужно выбирать определенный action, то можно просто передать actions , как второй аргумент в connect,
вместо функции mapDispathcToProps

функция Reducer должна быть чистой всегда! Там не должно быть всяких внутренних подсчетов, обращений к серверу
и т.д.
*/




























/*SCSS */
/*Синтаксис */
// .block{
//     font-size: 24px;
//     .someClass{
//         font-size: 25px;
//     }
//     &:hover: {
//         color: red;
//     }
// }

// a{
//     color: blue;
//     .block &{
//         color: black
//     }
// }

/*переменная, затем просто вставляется в код название ее */
// $fz: 100px;

/*Шаблон, затем подключается ниже следующим образом(это как бы базовое значение)
можно так же через extend подключить класс какой то*/
// %borderBottom{
//     border: 5px solid red;
// }

// div{
//     @extend %borderBottom;
// }

/*Миксин */
// @mixin fontS($f){
//     font-size: $f;
// }

// div{
//     @include fontS('100px');
// }


















/*расширения vscode */
// EMMET
// SCSS IntelliSense
// SCSS Formatter
// Auto Complete Tag
// Better Comments
// CSS Navigation



// LIVE SASS COMPILER
/* нужно прописать в setting.json

    "liveSassCompile.settings.generateMap": false,
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            // "autoprefix": "last 5 versions",
            "extensionName": ".css",
            "savePath": "/ css "
        }
    ]

    чтобы имортировать файлы в scss нужно имя писать _header.scss , а при импорте просто @import "_header";
*/

// eCSStractor for VSCode

















// css
// ~ означает, поищи на этом уровне вложенности, но дальше самого себя
// пример: input ~ .name(будет искать .name , который находится дальше инпута)




















//Скролл плавный
/*offsetTop считается относительно body
targetTo.offsetParent.id == 'body'; */






/*ПОМЕТКИ */
// почему то :hover срабатывает на мобильных устройствах при клике, и не заканчивается после окончания клика







// Определяем конструктор Person
// let Person = function (firstName, secondName) {
//     this.firstName = firstName;
//     this.secondName = secondName;
// };
// Person.prototype.walk = function () {
//     console.log("I am walking!" + this.firstName);
// };
// Person.prototype.sayHello = function () {
//     console.log("Hello, I'm " + this.firstName);
// };
// Person.prototype.sayThis = function () {
//     console.log(this);
// }


// function Student(firstName, subject) {
//     Person.call(this); // перебрасываем свойства от родителя сюда
//     this.firstName = firstName;
//     this.subject = subject;
// };
// // Object.setPrototypeOf(Student.prototype, Person.prototype); //можно установить прототип так
// Student.prototype = Object.create(Person.prototype); // можно так
// Student.prototype.constructor = Student;
// Student.prototype.sayThis = function () {
//     console.log(this);
// };
// Student.prototype.sayHello = function () {
//     console.log(this.firstName + ' учит ' + this.subject);
// };

// let person = new Person('Alex', 'Bunakov');
// var student1 = new Student("Dima", "Программирование");


// console.log(Student.prototype);
// person.sayThis();
// student1.sayThis();
// student1.sayHello();
// student1.walk();
// student1.sayGoodBye();

// // Проверяем, что instanceof работает корректно
// console.log(student1 instanceof Person);
// console.log(student1 instanceof Student);









/*Задача с деревом TREE */
// let tree = {
//     value: 6,
//     rigth: {
//         value: 4,
//         rigth: {
//             value: 8,
//             left: {
//                 value: 2,
//             },
//             rigth: {
//                 value: 4,
//                 left: {
//                     value: 5
//                 }
//             }
//         }
//     },
//     left: {
//         value: 10,
//         left: {
//             value: 3,
//         },
//         rigth: {
//             value: 8,
//             rigth: {
//                 value: 1,
//                 left: {
//                     value: 4
//                 }
//             }
//         }
//     }
// }

// function treeFn(tree) {
//     let sum = tree.value
//     if (tree.rigth) sum += treeFn(tree.rigth)
//     if (tree.left) sum += treeFn(tree.left)
//     return sum
// }
// console.log(treeFn(tree))

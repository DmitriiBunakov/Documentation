//? TypeScript



//? CLI
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
//? Интерфейс командной строки/Commin line interface


//? Установка
//? npm i -D typescript


//? TSconfig.json
// https://www.typescriptlang.org/tsconfig

//? Инициализация конфига для проекта(чтобы вызывать tsc typescript должен быть установлен глобально)
//? npx tsc --init - команда создаст tsconfig.json


//? Для компиляции файлов ts в js, нужно вызвать команду npx tsc, которая будет компилировать файлы и помещать их в папку определенную согласно настройкам, все файлы не будут собраны в один бандл, т.к. это дело webpack
//? npx tsc --watch будет смотреть за изменениями файлов


//? При использовании сторонних библиотек(lodash), typescript может не знать о их типизации, для этого в проект надо дополнительно устанавливать пакеты типизаций
// https://www.typescriptlang.org/dt/search?search=










//!================================================================================================================================================
//? /String/Строки/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

//? typescript различает типы string и String, также это относится ко всем примитивам
//? string может быть определен только для строк, объявленных без создания через конструктор, потому что строки, созданные через new String будут являться по факту обьектами, а не примитивами
//? String же может использоваться и для строк созданных через конструктор и обычных строк
/*
const string1: string = 'Test';
const string2: String = 'Test';

const stringConstructor1: string = new String('Test');      тут будет ошибка, т.к. String тип по факту объект
const stringConstructor2: String = new String('Test');
*/










//!================================================================================================================================================
//? /Number/Числа/

//?
/*
const number1: number = 1;
const number2: Number = new Number(1);

const numberConstructor1: number = new Number(1);       тут будет ошибка, т.к. Number тип по факту объект
const numberConstructor2: Number = new Number(1);
*/










//!================================================================================================================================================
//? /Object/Объекты/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types

//? Типы объектов определяются просто обычным литералом объекта
/*
const object: {name: string, age: number, sex?: string} = {
    age: 23,
    name: 'Alex',
    sex: 'male',
};
*/


//? знак ? указывает свойство как необязательное, при обращении к такому свойству нужно проверить на наличие
/*
function test(a: {name: string, age: number, sex?: string}) {
    console.log(a.sex.toUpperCase());       ошибка, т.к. свойство возможно undefined
}
*/










//!================================================================================================================================================
//? /Union Types/Типы объединения/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

//? Это тип, созданный из объединения нескольких типов
/*
function test(a: number | string) {
    console.log('My id is' + a);
}
*/


//? Чтобы с ними работать успешно, нужно проверить к какому типу подходит переменная
/*
function test(a: number | string) {
    if (typeof a === 'number') {
        a.toFixed();
    } else {
        a.toUpperCase();
    }
}
*/


//? Бывает, что переменная разных типов имеет в прототипах один и тот же метод, поэтому для такого случая можно не делать сужение
/*
function test(a: number[] | string) {
    return a.slice(0, 3);
}
*/










//!================================================================================================================================================
//? /Type Aliases/Типы/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

//? Чтобы постоянно не повторять какой то тип, например, какой то объект, можно вынести этот тип в тип. В type aliases можно выносить объединения из разных типов
/*
type TTest = {
    name: string
    age: number
}

type TId = number | string;
*/


//? Типы не могут быть переопределены или расширены, в отличии от интерфейсов, а также нельзя наследовать


//? Типы нельзя наследовать, но можно делать пересечения. Созданный ниже тип будет хранить в себе все свойства из двух типов
//? Но если при при объединении значения в типах имеют разный тип, значение просто приобретает тип never и у него нельзя вызвать методы
/*
type TMan = {
    name: string
    age: number
    test: string
}
type TMan2 = {
    sex: string
    work: boolean
    test: boolean
}
type TUnionMan = TMan & TMan2;

function test(a: TUnionMan) {
    a.test.         нельзя вызвать методы, т.к. тип является never, при объединении значение просто приобрело тип never
}
*/










//!================================================================================================================================================
//? /Interfaces/Интерфейсы/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

//? Еще типы объектов можно создавать через интерфейсы, и использоваться они могут только для обьектов
/*
interface IPoint {
    x: number
    y: number
}
*/


//? Интерфейсы могут наследоваться от других, также можно наследоваться от нескольких интерфейсов, интерфейсы расширяемы, т.е. после объявления можно обраться к тому же интерфейсу и обновить его
//? нельзя наследовать интерфейс от другого, если они имеют одно и то же имя свойства, которое имеет разные типы
//? а также если в одном оно обязательно, а в другом нет
/*
interface IPoint {
    x: number
    y: number
}
interface IPoint2 {
    z?: number
    c?: number
}
interface ITest extends IPoint, IPoint2 {
    name: string
    boolean: boolean
}
*/










//!================================================================================================================================================
//? /Type Assertions/Утверждения типа/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

//? Иногда ts не знает об используемых типах, и можно использовать утверждение типа as
//? иногда удобно использовать запись через <>
/*
const test = document.querySelector('.test') as HTMLDivElement;
const test = <HTMLDivElement>document.querySelector('.test');
*/


//? Также можно преобразовывать один тип в другой через такую конструкцию
/*
const test: number = '1' as number;     тут будет ошибка, т.к. тип не перекрывает другой
const test: number = '1' as any as number;      а тут уже будет все хорошо
*/










//!================================================================================================================================================
//? /Literal types/Литеральные типы/Буквенные типы/Логические литералы/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

//? Можно задать тип конкретного содержания строки. Очень удобно, когда нужно точно определить какую строку должна принять функция
/*
type TTest = 'test' | 'example' | 'value';
function test(a: TTest) {}
test('example');
*/


//? Типы числовых литералов работают так же
/*
type TTest = -1 | 0 | 1;
function test(a: TTest) {}
test(-1);
*/


//? Можно также использовать логические литералы и обьекты, а также любые типы
/*
type TTest = {
    name: string
    age: number
};
function test(a: TTest | 'auto') {}
test('auto');
test({name: '', age: 23});
*/


//? Компилятор автоматически приводит свойства у не типизированных обьектов к соответствующим. Он НЕ будет создавать литеральные(конкретные перечисления)
/*
const request = {url: 'https://', method: 'GET'};
function test(url: string, method: 'POST' | 'GET') {}
test(request.url, request.method);      второй аргумент выдаст ошибку, т.к. при создании обьекта значения свойств компилятором ts будут приведены к строкам
*/


//? as const
//? Преобразует тип объекта в литеральный, и будут в типе использоваться конкретные значения свойств, а также делает их только для чтения
/*
const request = {url: 'https://example.com', method: 'GET'} as const;
function test(url: string, method: 'POST' | 'GET') {}
test(request.url, request.method);
*/
//? Все переменные будут константами и также преобразованы в литеральные типы, даже для вложенных объектов это работает
/*
let test = 'TEST' as const;
test = '';

const test = {
    a: 23,
    object: {
        value: '1',
        zero: 0,
    },
} as const;
test.object.value = 1;      ошибка, только для чтения
*/










//!================================================================================================================================================
//? /null/undefined/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined

//? То, как оно ведет себя зависит от настройки strictNullChecks
//? с включенной настройкой нельзя уже объявленное значение обнулить до undefined или null, с отключенной опцией можно










//!================================================================================================================================================
//? /BigInt/
// TODO
/*
const bigint1: bigint = 100n;
*/










//!================================================================================================================================================
//? /Non-null Assertion Operator/Оператор ненулевого присваивания/
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-

//? Оператор делает фактически явное утверждение, что значение не равно undefined или null
/*
const test = document.querySelector('.test');
test?.addEventListener('click', () => {});          чтобы так не писать, можно использовать !

const test = document.querySelector('.test')!;
*/










//!================================================================================================================================================
//? /Narrowing/Сужение/
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html

//? В ts можно делать сужение возможных типов при обращении к свойствам и методам
/*
function printAll(strs: string | string[] | null) {
    if (typeof strs === 'object' && strs) {         тут делаем проверку на null, потому что typeof null вернет обьект, признаная ошибка, ts знает о ней
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === 'string') {
    } else {
    }
}
*/

//? Тут ts динамически определит по свойству, к какому типу относится переданный параметр функции
/*
interface Circle {
	kind: 'circle';
	radius: number;
}
interface Square {
	kind: 'square';
	sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }

    return Math.PI * shape.sideLength ** 2;
}
*/

//? При сужении можно получить тип never, это значит, что такого типа просто не должно быть

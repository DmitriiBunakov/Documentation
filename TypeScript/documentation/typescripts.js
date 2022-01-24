//? TypeScript



//? CLI
// https://www.typescriptlang.org/docs/handbook/compiler-options.html


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





//?================================================================================================================================================
//? /Readonly/

//? Модификатор говорит, что свойство только для чтения. Но это работает как сахар, js все равно присвоит при обращении к свойству для чтения новое значение, например, если у нас ридонли обьект, который копирован по ссылке. В первом примере все будет круто, но во втором уже нет
/*
interface IReadOnlyTest {
    readonly a: number
    readonly b: number
}
const test: IReadOnlyTest = {
    a: 1,
    b: 2,
};
const test2 = test;
test2.a = 1;


Пример 2
interface IReadOnlyTest {
    readonly a: number
    readonly b: number
}
interface ITest {
    a: number
    b: number
}

const test: IReadOnlyTest = {
    a: 1,
    b: 2,
};

const test2: ITest = test;
test2.a = 1;
*/





//? Можно явно указывать индексы, чему будут равны ключи обьекта
/*
interface IStringArray {
    [index: number]: string;
}

const secondItem: IStringArray = {
    '': 'test',         тут будет ошибка, т.к. ключи только числа
    1: '1',
    2: '2',
};
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

//? Также нельзя применять модифицирующие методы
/*
const args = [8, 5] as const;
args.splice(1);
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
//? /Functions/Функции/
// https://www.typescriptlang.org/docs/handbook/2/functions.html

//? Функции можно описывать через типы
/*
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + ' returned ' + fn(6));
}
*/

//? Также можно указывать тип конструктора, потому что часто функции принимают какой то конструктор
/*
type SomeConstructor = {
    new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
*/

//? Можно в ts ограничивать передаваемые параметры, по приципу наследуется тип или нет
/*
function test<T extends {length: number}>(arr: T) {
    console.log(arr);
}
test([1, 2, 3]);
*/

//? Необязательные параметры будут автоматически либо тип либо undefined. Естественно, что нужно проверять, есть ли это значения или нет
/*
function test(a?: string) {}
*/





//? Можно делать перегрузки функций. Значит, что мы описываем возможные аргументы функций, и для каждого случая в теле функции мы делаем реализацию
/*
function test(a: number, b: number): number;
function test(a: number, b?: number): boolean;
function test(a: number, b?: number, c?: number): number;
function test(a: number, b?: number, c?: number): boolean | number {
    if (a && b && c) {
        return a * b * c;
    } else if (a && b) {
        return a + b;
    } else {
        return !!a;
    }
}
test(1);
*/

//? В перегрузках нельзя при вызове использовать динамически вычисляемые типы. Т.е. ts вычислает тип выражения на ходу и определяет его тип, поэтому в примере ниже перегрузка не подойдет для подобного вызова функции, ее надо переписать на обычное объединение параметров функции
/*
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
    return x.length;
}

len('');        // OK
len([0]);       // OK
len(Math.random() > 0.5 ? 'hello' : [0]);       ошибка, т.е. ts определит тип выражения как string | number[], что не подходит под перегрузку
*/


//? Rest параметры также можно типизировать, по дефолту они устанавливаются в тип any[]
/*
function multiply(n: number, ...m: any[]) {
    return m.map(item => item + n);
}
const a = multiply(10, 1, 2, 3, 4, '2', '1');
*/










//!================================================================================================================================================
//? /Void/
//? Функции могут ничего не возвращать, тогда используется тип void, это значит что ничего не вернулось(undefined). Но такую функцию нельзя проверить в условии на истинность, т.к. undefined по факту возвращается, но неявно
/*
function test(): void {}
*/





//!================================================================================================================================================
//? /Unknown/

//? Безопасное значение any, оно не позволяет делать ничего с переменной, т.к. оно не известно





//!================================================================================================================================================
//? /Never/

//? Некоторые функции никогда не возвращают значения. Еще иногда применяеют в алиасах типов, для исключения свойства из обьекта, например. Можно посмотреть пример https://www.typescriptlang.org/docs/handbook/utility-types.html
/*
function fail(msg: string): void {
    throw new Error(msg);
}
*/





//!================================================================================================================================================
//? /Function/

//? Тип функция позволяет получить методы функций встроенные, а возвращенное значение таких функций будет any
/*
function test(f: Function) {
    return f(1, 2, 3);
}
test((() => {}));
*/





//!================================================================================================================================================
//? /Кортеж/Tuple/

//? Это массив, который знает на каком индексе у него какое значение. Также могут иметь необязательные значения
/*
type TTuple = [number, string, string?]
const arr: TTuple =[1, ''];
*/

//? К ним могут применяться остаточные параметры, которые должны быть кортежем или массивом
/*
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const arr: BooleansStringNumber = [...[true], '', 2];
*/






//!================================================================================================================================================
//? /Деструктуризация/

//? При деструктуризации типизация идет после синтаксиса деструктуризации
/*
type TTest = {
    a: string
    age: number
}
const test: TTest = {
    a: 'name',
    age: 23,
};
const {a: first = '', age: second = 25}: {a: string, age: number} = test;
*/










//!================================================================================================================================================
//? /Generics/Дженерики/

//? Создание типа на ходу. Т.е. мы при вызове указываем с каким типом работает данная функция
/*
function test<T>(a: T): T {
    return a;
}
test<number>(5);
test<string>('');
*/

//? Вот пример, когда аргумент должен наследоваться от массива
/*
function test<K, T extends K[]>(a: T): T {
    return a;
}
test<number, number[]>([1, 2, 3]);
test<string, string[]>(['']);
*/

//? Можно явно указывать, что ждем конструктор
/*
function create<Type>(c: {new (): Type}): Type {
    return new c();
}
*/





//!================================================================================================================================================
//? /Keyof/

//? Создает тип из ключей обьекта
/*
type TTest = {
    test: string
    age: number
}
type TTest2 = keyof TTest;
const test: TTest2 = 'test';
*/





//!================================================================================================================================================
//? /Typeof/

//? Создает тип на основе значения переменной
/*
const test: string = 'test';
const secondTest: typeof test = 'string';
*/





//!================================================================================================================================================
//? /Индексированный доступ/Условное определение типа/
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

//? Создает тип по индексу из обьекта или массива
/*
type Person = {
    age: number
    name: string
    alive: boolean
};
type Age = Person['age'];
*/


//? Тип можно создавать условиями
/*
type TTest<T extends number | string> = T extends number? 'number': 'string';
type TTest2 = TTest<2>
type TTest3 = TTest<''>
*/
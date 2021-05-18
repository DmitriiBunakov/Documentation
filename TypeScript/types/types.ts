let isFetching: boolean = false
let isLoading: boolean = true


let int: number = 1
let float: number = 1.2
let num: number = 3e10


let str: string = 'привет, мир!'


let arrayNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13]
let arrayNumbers2: number[] = [1, 1, 2, 3, 5, 8, 13]
let arrayWords: string[] = ['привет', 'мир']


//tuple
let differentValuesArray: [string, number] = ['дима', 22]

let arrTuple1: readonly [number, string, ...boolean[]] = [45, 'string', true, false]
// arrTuple1[1]=0
console.log(arrTuple1)

function logTuple<T>(...args: [number, string, ...T[]]) {
    console.log(...args);
}
logTuple(...arrTuple1)

/*в этом примере в функцию также нужно установить readonly, иначе будет ошибка */
let arrrr = [3, 4] as const
function calcAB([a, b]: readonly [number, number]) {
    return a * b
}
console.log(calcAB(arrrr))



//any
let variable: any = 42
variable = 'string'


//functions
function sayMyName(name: string): string {
    return `Меня зовут ${name}`
}
console.log(sayMyName('дима'))

let arrowFn: () => void = () => { }


//never
function throwError(message: string): never {
    throw new Error(message)
}
throwError('ошибка')


//type allias
type Login = 'логин'
let login: Login = 'логин'

type StrOrNum = string | number
let id: StrOrNum = 1123
id = '1123'


//null undefined
type Sometype = null | string | undefined
let some: Sometype = '';







/*
Условные типы, если тип наследуется от одного из представленных, то мы используем один из данных)
https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
*/
interface IdLabel {
    id: number
}
interface NameLabel {
    name: string
}
type IdOrNameLabel<T extends number | string> = T extends number ? IdLabel : NameLabel

let id111: IdOrNameLabel<number> = { id: 123413123 }
let name111: IdOrNameLabel<string> = { name: 'Alex' }




/*ограничение условного типа 
получаем тип на основе типа, переданного как Т у которого есть поле message
*/
type Email = { message: string }
type Some1 = { id: number }

type MessageOf<T extends { message: unknown }> = T['message']
type MessageOfEmailType = MessageOf<Email>
let asdsa: MessageOfEmailType = '21'

// тут же мы хотим сделать условие, что если нет message, то будет тип never
type MessageOf2<T> = T extends { message: unknown } ? T['message'] : never
type MessageOfEmailType2 = MessageOf2<Email>
type MessageOfSome1Type2 = MessageOf2<Some1>


// если T наследуется от массива любого, то тип будет равен T[number], получаем тип из массива по номеру, else пришедшее
type Flatten<T> = T extends Array<any> ? T[number] : T
type Object1 = Flatten<{ a: string, b: number }[]>
type DefaultFlatten = Flatten<number>


/*Сопоставленные типы
https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
*/

type OptionsFlags<T> = {
    [key in keyof T]: boolean
}
type Some11 = {
    doSomething: () => void
    sayHi: () => void
}

type AllKeysOf = OptionsFlags<Some11>


/*можно модифицировать копирование типов с помощью readonly и ? */
type AllKeysOfWithValuesModify<T> = {
    -readonly [key in keyof T]-?: T[key]
}
type Modifyed = AllKeysOfWithValuesModify<Some11>



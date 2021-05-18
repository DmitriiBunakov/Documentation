let arrNumber: Array<number> = [1, 1, 2, 3, 5, 8, 13]
let arrString: Array<string> = ['a', 'b', 'c', 'd', 'e']

function reverse<T>(array: Array<T>): Array<T> {
    return array.reverse()
}
console.log(reverse(arrNumber))
console.log(reverse(arrString))




// generic тип сам определяет, какой тип будет сидеть в переменной

let cars: Array<string> = ['Ford', 'Audi']
let cars2: Array<string> = ['Ford', 'Audi']


let promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved')
    }, 2000)
})
promise.then(res => {
    // console.log(res)
})



/*без genericoв строго указываем что должно приходить, и не можем переопределять в других вызовах функции значения и
приходящие данные */
// function mergeObject(a: { name: string }, b: { age: number }): { name: string } & { age: number } {
//     return Object.assign({}, a, b)
// }
/*тут мы , например, устанавливаем 2 generica для функции, они сами определяют входные данные 
благодаря extends от обьекта, мы не можем сюда вписать абсолютно любое значение, то есть принимает все что угодно, но это
должно быть обьектом     в obj3 будет ошибка*/
function mergeObject<T extends object, T1 extends object>(a: T, b: T1): T & T1 {
    return Object.assign({}, a, b)
}
let obj1 = mergeObject({ name: 'Dima' }, { age: 22 })
let obj2222 = mergeObject({ class: '1a' }, { quantity: 32 })
// let obj3 = mergeObject('aaa', 'bbbb') //error будет
let obj4 = mergeObject({ a: {}, b: {} }, { name: 'Alisa', age: { current: 25 } })

// console.log(obj1)
// console.log(obj2222)
// console.log(obj4)


function identify<T>(argument: T): T {
    return argument
}
let r1 = identify(1)
let r2 = identify('привет')
// console.log(r1.toFixed())
// console.log(r2.toUpperCase())

let secondIdentify = identify
let r3 = secondIdentify({ name: 'Dima' })
let r4 = secondIdentify('hello')
// console.log(r3)
// console.log(r4)



/*интерфейс динамический, который обязательно принимает какой то параметр и возвращает его же */
interface IIdentifyFN<Type> {
    (argument: Type): Type
}
let thirdIdentify: IIdentifyFN<string> = identify
let r5 = thirdIdentify('Alex')
// console.log(r5)


let fourhIdentify: IIdentifyFN<number> = identify
let r6 = fourhIdentify(6)
// console.log(r6);


/*в динамический интерфейс добавляю параметр, который должен быть сторого как Person интерфейс */
interface Person {
    name: string
    age: number
    sex: string
}
let five: IIdentifyFN<Person> = identify
let r7 = five({ age: 22, name: 'Dima', sex: 'male' })



interface QWE1<Type> {
    (arg1: Type): Type
}
let returnNumber: QWE1<number> = (arg) => {
    return arg
}
let n = returnNumber(1)
// let n1 = returnNumber('Dima') //error будет
// console.log(n)





/*проблема в том, что TS не знает, будет ли сидеть в Type значение, у которого будет length
мы создаем интерфейс, который будет проверять на наличие ключа length у поступаемого значения
*/
// function withCount1<Type>(value: Type) {
//     return {
//         value,
//         count: `В этом обьекте ${value.length} символов`
//     }
// }
// let res123123 = withCount1('Привет')
// console.log(res123123)



interface IWithLength {
    length: number
}
function withCount<Type extends IWithLength>(value: Type) {
    return {
        value,
        count: `В этом обьекте ${value.length} символов`
    }
}
let res = withCount('привет')
let res1 = withCount([1, 2, 3, 4, 5])
// let res2 = withCount(5574) //error будет
let res3 = withCount({ length: 20 }) // немного некорректная работа, т.к. по умолчания в обьекте нет length




/*
Допусти у нас есть interface, и мы хотим использовать абсолютно тот же функционал, но, чтобы эти ключи были 
необязательны в новом обьекте
Мы создаем тип, на основе интерфейса и делаем сопоставление и указываем необязательный параметр
В TS есть уже такой тип Partial<>
*/

interface Person22 {
    name: string
    age: number
    sex: string
    strong: boolean
}
let man: Person22 = {
    age: 22,
    name: 'Dima',
    sex: 'man',
    strong: true
}

type MyPartialType<Type> = {
    [key in keyof Type]?: Type[key]
}
type PartialPerson = MyPartialType<Person22>
type PartialPerson1 = Partial<Person22>
let man22: PartialPerson1 = {
    age: 22,
}




/*
нужно получить значение обьекта по ключу  keyof
*/
function getObjectValue<Type extends object, Key extends keyof Type>(object: Type, key: Key): Type[Key] {
    return object[key]
}
let someObject = {
    name: 'Dima',
    age: 22,
    sex: 'male',
    strong: true
}

// let v = getObjectValue(someObject, 'name')
// console.log(v)
// let v1 = getObjectValue(someObject, 'age')
// console.log(v1)
// let v2 = getObjectValue(someObject, 45) //error будет, т.к. такого ключа нет в обьекте передаваемом
// console.log(v2)

// let someArray = [10, 'string', true]
// let v3 = getObjectValue(someArray, 0)
// console.log(v3)
// let v4 = getObjectValue(someArray, 3)
// console.log(v4)






/*Работа с классами
в Collection принимаем один из доступных типов данных в и складируем в массив
*/
class Collection<Type extends number | string | boolean> {
    // private _items: Type[] = []
    constructor(private _items: Type[] = []) { }

    add = (...item: Type[]) => {
        this._items.push(...item)
    }
    remove = (item: Type) => {
        this._items = this._items.filter(elem => elem != item)
    }
    get items() {
        return this._items
    }
}

let collectionStrings = new Collection<number>([1, 2, 3, 4, 5])
collectionStrings.add(1)
collectionStrings.add(14545, 234324324324, 234324324324324)
collectionStrings.add(4545)
collectionStrings.add(14545)
collectionStrings.remove(4545)
// console.log(collectionStrings.items)





interface Car111 {
    model: string
    year: number
}
function createAndValidateCar(model: string, year: number): Car111 {
    let car: Partial<Car111> = {}
    if (model.length > 3) car.model = model
    if (year > 1850) car.year = year
    return car as Car111
}
// let car1 = createAndValidateCar('Ford', 1851)
// console.log(car1)
// let car2 = createAndValidateCar('Yo', 1545)
// console.log(car2)
// let car3 = createAndValidateCar('Lexus', 2020)
// console.log(car3)






/*
Можно запретить изменение переменной
*/
const carsString: Readonly<Array<string>> = ['Ford', 'Audi', 'BMW']
// console.log(carsString[0])


type MeInfo = {
    name: string
    age: number
}
const objectMe: Readonly<MeInfo> = {
    name: 'Dima',
    age: 22,
}
// console.log(objectMe.age = 2)





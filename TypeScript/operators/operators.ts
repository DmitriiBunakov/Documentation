interface Person {
    name: string
    age: number
}
//  получается, что person не может иметь значения кроме name или age
type PersonKeys = keyof Person

// let person: PersonKeys = 'name'
// person = 'age'
// person = 'asdf'



// создать тип на основе предыдущего не включая в себя некоторые значения
type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysWith = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta = "email"
u1 = "name"
// u1 = 'qwe'

let u2: UserKeysWith = {
    name: 'Dima',
    email: '1234567890'
}
// u2 = {
//     email: 123,
//     name: 454
// }



type Shape = {
    name: 'circle' | 'rectangle'
    radius?: number
}
function getArea(shape: Shape): Shape['radius'] {
    if (shape.radius) {
        return Math.PI * shape.radius ** 2
    }
}

let obj: Shape = {
    name: "circle"
}
let obj2: Shape = {
    name: 'rectangle',
    radius: 50
}
// console.log(getArea(obj))
// console.log(getArea(obj2))






//производный тип от известного обьекта
let obj11 = { name: 'dima', age: 21 }
type Keys = typeof obj11
let obj22: Keys = {
    age: 21,
    name: 'Alex'
}

type KeysOfObject = keyof typeof obj11



// производная переменная от ключей типа
type ObjType = {
    location: string
    url: number
}
type SecondObjType = keyof ObjType
let obj222: SecondObjType = "location"

type ArrayIndexType = { [index: string]: number }
type WithOnlyKey = keyof ArrayIndexType




// typeof
/*ReturnType используется, чтобы получить тип на основе возвращаемого значения*/
function createPerson(name: string, age: number) {
    return { name, age }
}
type PersonTypeByReturn = ReturnType<typeof createPerson>

let person123: PersonTypeByReturn = {
    age: 3,
    name: ''
}




/*
Индексированные типы , мы указываем названия ключей типа, и их значения(их типы) будут переданы в новый тип
*/
type PPerson = {
    age: number
    name: boolean
    strong: string
}
type PPersonOnTypeOFTwo = PPerson['age' | 'strong']
let personInfo: PPersonOnTypeOFTwo = ''

// устанавливаем тип в типы всех свойств типа
type PPersonTypeValuesType = PPerson[keyof PPerson]
let someValue: PPersonTypeValuesType = true



let myArr = [
    { name: 'Dima', age: 22 },
    { name: 'Alex', age: 26 },
    { name: 'Sveta', age: 18 },
]
type PersonByArray = typeof myArr[number]
type PersonAgeByArray = typeof myArr[number]['age']
type PersonNameByArray = PersonByArray['name'] //тут получаем  тип на основе типа, полученного черезе typeof обьекта массива






/*установить false ключа, если в свойстве нет pl и наоборот  */
type SomeTypeTry = {
    id: { word: 'privet' }
    bla: { word: 'privet22313', pl: boolean }
}
type RemoveAllWithoutPl<T> = {
    [key in keyof T]: T[key] extends { pl: any } ? true : false
}

type NewType = RemoveAllWithoutPl<SomeTypeTry>







/*Типы литералов шаблонов
https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
*/


// string
// number
// bigint
// boolean
// symbol
// undefined
// object
// function

/*в JS  0   NaN   ""   0n   null    undefined  в IF приводятся к false*/

/*строгое и нестрогое сравнение в JS*/
// console.log(0 == false) //выведет TRUE в JS потому что сравнение приводит к числу
// console.log(0 === false) //выведет FALSE в JS потому что сравнивает по типам


//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// Простые типы
let number_: 45
number_ = 45
type Number45 = typeof number_



let string_: string = 'privet'
string_ = ''
type StringEmpty = typeof string_



let array_: number[] = []
array_ = [1, 1, 2, 3, 5]
array_ = []
type ArrayNumbers = typeof array_



function someFunction<T>(arg: T) {
    return arg
}
// console.log(someFunction(1))
// console.log(someFunction('privet'))

function someFunction1(arg: number) {
    return arg
}
// console.log(someFunction1(45445))

let somearrowFunction = (arg: string) => {
    return arg
}
// console.log(somearrowFunction('hello'))

// дополнительные параметры функции, можно по умолчанию сделать
let somearrowFunction1: (arg1: number, arg2?: number) => number = (arg, arg2 = 0) => {
    return arg + arg2
}
// console.log(somearrowFunction1(78, 54))

// дополнительные параметры функции, можно обойти условием
let somearrowFunction2: (arg1: number, arg2?: number) => number = (arg1, arg2) => {
    if (arg2) return arg1 + arg2
    return arg1
}
// console.log(somearrowFunction2(12))

let somearrowFunction3: <T>(arg: T, arg2?: T) => T = (arg) => {
    return arg
}
// console.log(somearrowFunction3({}))
// console.log(somearrowFunction3(array_))
// console.log(somearrowFunction3(array_ = [45, 78, 654]))



type SomeObjectType = {
    name: string
    age: number
    info?: SomeObjectTypeInfo
}
type SomeObjectTypeInfo = {
    height: number
    weight: number
    eyesColor?: string
}
let somePersonInfo: SomeObjectType = {
    age: 22,
    name: 'Dima',
    info: {
        height: 176,
        weight: 87,
        eyesColor: 'blue'
    }
}

type TypeOfSomePerson = typeof somePersonInfo



//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// различия интерфейсов и типов
/* interface может быть изменен после объявления, а type не может быть, будет ошибка обьъявления дубликатов
interface наследуются через extends, type через объедение &
*/
interface SomeInterface {
    name: string
}
interface SomeInterface1 extends SomeInterface {
    age: number
}
let someP: SomeInterface1 = {
    age: 45,
    name: 'Igor'
}
// interface SomeInterface {
//     name: string,
//     info: {}
// }


type SomeType = {
    name: string
}
type SomeType1 = SomeType & { age: number }
let someP1: SomeType1 = {
    age: 45,
    name: 'Alex'
}



//!====================================================================================================
// утверждения типа as
/*можно привести значение к определенному типу 
например, когда получаем элемент со страницы, может быть там null, поэтому приводим к типу
можно также через ! восклицательный знак указать, что точно там есть значение

если тип неприводим никак, то можно схитрить и сделать двойное приведение через any
*/
let elementSome = document.querySelector('#root')! as HTMLElement
elementSome.addEventListener('click', () => { })

let a = (null as any) as number
a = 45



//!====================================================================================================
// литеральные типы Literal Types
/*можно точно указать приходящий параметр из значений */
type LiteralType = 'left' | 'rigth' | 'top' | 'bottom'
function doSome(arg: LiteralType) {
    return arg
}
// console.log(doSome('bottom'))



//!====================================================================================================	
// Ненулевой оператор утверждения (постфикс !)
/*TypeScript также имеет специальный синтаксис для удаления nullи undefinedиз типа без какой-либо явной проверки. 
Запись !после любого выражения фактически является утверждением типа, что значение не является nullили undefined: */



//!====================================================================================================
// символы никогда не равны, если только не сравнивать по типу
let Symbol1 = Symbol('key')
let Symbol2 = Symbol('key')
// console.log(Symbol1 === Symbol2)



//!====================================================================================================
// Narrowing или сужение
/*принцип сужения, это ветвление логики, например в функцию приходит параметр, который может быть и массивом и 
строкой, для этого нужна разная логика, и мы в теле прописываем ветвление  */
function narrowingFunction(arg?: string | string[] | null) {
    if (arg && typeof arg === 'object') {
        return arg.filter(() => true)
    }
    if (arg) return arg.toUpperCase()
    return undefined
}
// console.log(narrowingFunction())



type Circle = {
    name: 'circle'
    radius: number
}
type Square = {
    name: 'square'
    sideLength: number
}
function getArea2(arg: Circle | Square) {
    if (arg.name === 'circle') {
        return Math.PI * arg.radius ** 2
    }
    return 0
}



//!====================================================================================================
//ФУНКЦИИ FUNCTIONS
// Создание классов через функцию
class SomePrimer {
    constructor(public name: string) { }
}
type SomeDescription = { new(arg: string): object }
function createClassFn(constructor: SomeDescription, arg: string) {
    return new constructor(arg)
}
function createClassFn2(constructor: new (arg1: string) => any, arg: string) {
    return new constructor(arg)
}
let createdClass = createClassFn(SomePrimer, 'Dima')
// console.log(createdClass)


//?====================================================================================================
// ОГРАНИЧЕНИЯ
function returnOnlyObjects<Type extends object>(arg: Type): Type {
    return arg
}
// console.log(returnOnlyObjects({ a: 'privet' }))

function returnOnlySomeHaveLength<Type extends { length: number }>(arg: Type): Type {
    return arg
}
// console.log(returnOnlySomeHaveLength([]))

function returnOnlyWhatHave<T>(arg: T): T {
    return arg;
}



//?====================================================================================================
// Указание аргументов типа, но чтобы можно было разные указать, указываем тип вручную при вызове обобщения 
function returnArguments<T>(arg: T[], arg2: T[]): T[] {
    return [...arg, ...arg2]
}
// console.log(returnArguments([1, 2, 3], [1, 2, 3]))
// console.log(returnArguments<string | number>([1, 2, 3], ['privet', 'kak dela']))


//?====================================================================================================
// перезагрузки функций , указываем сколько аргументов должно прийти, и на каждый вариант пишем условие
function soSome(): string
function soSome(a: string): string
function soSome(a: string, b: string, c: string): string
function soSome(a?: string, b?: string, c?: string): string {
    if (a && !b) {
        return `[1]: ${a}`
    }
    if (a && b && c) {
        return (`
[1]:${a}
[2]:${b}
[3]:${c}`
        )
    }
    return 'ничего не передано'
}
// console.log(soSome())
// console.log(soSome('Привет'))
// console.log(soSome('Привет', 'как дела?', 'что нового'))


//?====================================================================================================
// VOID тип подразумевается, когда функция не возвращает ничего


//?====================================================================================================
// UNKNOWN, нельзя никак манипулировать с данными, дополнительня защита , либо когда возвращается что то неизвестное
function safeParse(s: string): unknown {
    return JSON.parse(s);
}


//?====================================================================================================
// NEVER, когда функция не возвращает никогда значение никакое, либо когда значение по условия осталось пустое
function fail(msg: string): never {
    throw new Error(msg);
}


//?====================================================================================================
// ОСТАТОЧНЫЕ АГРУМЕНТЫ SPREAD 
function spreadSome({ a, b, c }: { a: number, b: string, c: {} }) {
    return [a, b, c]
}
// console.log(spreadSome({ a: 1, b: '', c: {} }))

function spreadSome2([a, b, c]: [number, string, number]) {
    return a + b + c
}
// console.log(spreadSome2([1, '', 2]))



//!====================================================================================================
// OBJECTS обьекты
/*
readonly только для чтения    readonly не защитит, если копировать обьект по ссылке
"?" необязательный параметр
*/
type ObjectType = {
    readonly a: string
    b?: string,
}
let someObj: ObjectType = {
    a: 'Alex',
    b: '22',
}


// наследуются через extends интерфейс
interface A1 {
    a: string
}
interface A2 {
    b: string
}
interface A3 extends A1, A2 {
    c: string
}
// типы через пересечение &
type A1A2A3 = A1 & A2 & A3


//?====================================================================================================
// обобщения обьектов
type BOX<T> = T | null
let BOX: BOX<number[]> = [1, 2, 3]


interface BOX1<T> {
    a: T[]
}
let BOX1: BOX1<{ name: string }> = {
    a: [{ name: 'Dima' }, { name: 'Alex' }]
}


//?====================================================================================================
// ReadonlyArray
function readonlyArrayType<T>(arg: ReadonlyArray<T>) {
    console.log(arg)
}
// readonlyArrayType<string | number>(['', 1, {}, []])

function readonlyArrayType2<T>(arg: readonly T[]) {
    console.log(arg)
}
// readonlyArrayType2([1, '', {}])


//?====================================================================================================
// TUPLE кортежи
/*Тип кортежа - это еще один тип Arrayтипа, который точно знает, сколько элементов он содержит, и какие именно типы 
он содержит в определенных позициях. */
function doSomething12343(arg: [number, string]) {
    return [arg[0], arg[1]]
}
// console.log(doSomething12343([1, 'hi']))



//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/generics.html
// СОЗДАНИЕ ТИПОВ ИЗ ТИПОВ
// GENERICS обощения
/*возможность создавать компонент, который может работать с множеством типов, а не с одним. Это позволяет пользователям
использовать эти компоненты и использовать свои собственные типы. */
function getValueFromObj<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}
let object34234324 = { name: 'Dima', age: 45 }
// console.log(getValueFromObj(object34234324, 'age'))
// console.log(getValueFromObj(object34234324, 'name'))



//?====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
// keyof оператор принимает тип объекта и создает строку или числовое буквальное объединение его ключей
type Point = { 1: number; y: number }
type OfPoint = keyof Point

// если ключи обьекта точно установлены, значение примет тип ключа
type Arrayish = {
    [key: string]: string
}
type OfArrayish = keyof Arrayish


//?====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// typeof   ReturnType
/*позволяет брать тип переменной, возвращаемого значения функции */
type FN12313 = (arg: number) => string
type OfTypeFN12313 = ReturnType<FN12313>

function sdfds(): number[] {
    return []
}
type Ofsdfds = ReturnType<typeof sdfds>



//?====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// Индексированные типы доступа
type Some234324 = ['', 1, 'privet']
type Some234324Of = Some234324[2]
let sdfd: Some234324Of = "privet"

type Some234324sd = { a: number, b: 'text' }
type Some234324sdOf = Some234324sd['b']
let sdfsd: Some234324sdOf = "text"


let arr34234 = [
    { name: 'Dima', age: 21 },
    { name: 'Alex', age: 45 },
]
type arr34234 = typeof arr34234[number]
type arr3423421 = typeof arr34234[number]['name']
type arr34234213 = arr34234['age']


let Someobject3243234 = {
    name: 'Some name',
    age: 'some age'
}
type TypeOfKey = keyof typeof Someobject3243234



//?====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
// Условные типы
type SomeIFType<T extends number | string> = T extends number ? number : string
let adsfsdf657 = 2
type Adsfsdf657 = SomeIFType<typeof adsfsdf657>


type someTypeWithMesssageKey = {
    message: number[]
}
type SomeOgrType<T extends { message: any }> = T['message']
type SomeTypeWithMesssageKeyFrom = SomeOgrType<someTypeWithMesssageKey>


type SomeTypeWithMesssageKey1 = {
    otherField: string
}
type SomeTypeWithMesssageKey1123 = {
    message: string
}
type SomeOgrType1<T> = T extends { message: any } ? T["message"] : never

type WithMessageKey = SomeOgrType1<SomeTypeWithMesssageKey1123>
type WithoutMessageKey = SomeOgrType1<SomeTypeWithMesssageKey1>



//?====================================================================================================
// Infer
/*это переменная в в каком то типе */
let someArrrrfg = [1, '']
type Flatt08907<T> = T extends Array<infer Item> ? Item : T
type Ara = Flatt08907<typeof someArrrrfg>




//!====================================================================================================
//модифицирующие типы
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// Сопоставленные типы
/*создаем тип на основе какого то типа
можно указать readonly
можно установить как необязательный
*/
type CFVBdgd = {
    a: string
    b: number
}
type ChangeTypeKeys<T> = {
    -readonly [key in keyof T]?: boolean
}
type CFVBdgdBool = ChangeTypeKeys<CFVBdgd>


type ddgfgfdg = {
    name: string
    age: number
}
type ModifyEvery<T> = {
    readonly [key in keyof T]?: T[key]
}
type kfjsdjfs = ModifyEvery<ddgfgfdg>


type ModifyEveryKey<Type, targetTypeToBe> = {
    [key in keyof Type]: targetTypeToBe
}
type TypeOfSomePersonModifyed = ModifyEveryKey<TypeOfSomePerson, number[]>


//?====================================================================================================
// создать методы на основе ключей типа и модифицировать их тут же
type SomeeObj = {
    name: string
    age: number,
    info: {
        weight: number
        height: number
    }
}
type CreateMEthodsByKeys<T> = {
    [key in keyof T]: () => T[key]
}

type CreatedMethods = CreateMEthodsByKeys<SomeeObj>
let someeeObject: CreatedMethods = {
    age: () => 45,
    name: () => 'Dima',
    info: () => { return { height: 78, weight: 78 } }
}

/*=================================================================================================*/
type CreateMEthodsByKeys2<T> = {
    [key in keyof T as `get${Capitalize<key & string>}`]: (arg?: T[key]) => T[key] | null | undefined
}
type CreatedMethods2 = CreateMEthodsByKeys2<SomeeObj>
let someeeObject2: CreatedMethods2 = {
    getAge: (arg) => { return arg },
    getName: (arg) => { return arg },
    getInfo: (arg) => { return arg }
}
// console.log(someeeObject2.getAge(25))
// console.log(someeeObject2.getInfo({ weight: 85, height: 178 }))


/*=================================================================================================*/
// удалить свойства типа
type MyExcludeVersion<ObjectType, KeysToBeExcluded> = {
    [key in keyof ObjectType as Exclude<key, KeysToBeExcluded>]: ObjectType[key]
}
type SomeeObjWithoutSomeKeys = MyExcludeVersion<SomeeObj, 'info' | 'age'>


type MyExclude2<Type, KeysToExclude> = {
    [key in keyof Type as key extends KeysToExclude ? never : key]: Type[key]
}
type result324324 = MyExclude2<SomeeObj, 'info'>


/*=================================================================================================*/
// приведение определенного свойства к типу, исходя из его начального типа
type SomeType3232432 = {
    name: string
    age: number
    strong: boolean
}
type FilterBooleanTypes<Type> = {
    [key in keyof Type]: Type[key] extends boolean ? string : Type[key]
}
type SomeType3232432WithoutBool = FilterBooleanTypes<SomeType3232432>

// привести тип, если он наследуется от обьекта к строке, если нет, то оставить старый
let someObject34234 = {
    location: 'Voronezh',
    year: 2021,
    cold: {
        name: 'Dima'
    }
}
type FilterBoolean<T> = {
    [key in keyof T]: T[key] extends object ? string : T[key]
}
type withoutBoolOfObject = FilterBoolean<typeof someObject34234>



//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
// Типы литералов шаблона Строчные типы
type Words1 = 'home' | 'menu' | 'footer'
type Words1_id = `${Words1}_id`


// Для каждой интерполированной позиции в шаблонном литерале объединения перемножаются:
type Words2 = 'city' | 'town'
type Lang = 'en' | 'rus'
type LangAndWords = `${Lang}_${Words2 | Words1}`



//?====================================================================================================
// преобразователи строковых типов
/*
Uppercase<StringType>
Lowercase<StringType>
Capitalize<StringType>
Uncapitalize<StringType>
*/
type HelloWorldType = 'hello world'
let helWorld: Uppercase<HelloWorldType> = "HELLO WORLD"



//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/2/classes.html
// классы classes
/*
readonly нельзя присваивать нигде, кроме конструктора, можно только читать
*/
class Point123345245340 {
    readonly _name: string
    _age: number

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }
    get name() {
        return this._name
    }
    get age() {
        return this._age
    }
    set age(value: number) {
        this._age = value
    }
}
let Point123345245340234 = new Point123345245340('Dima', 22)
// console.log(Point123345245340234.name)
// Point123345245340234.age = 25
// console.log(Point123345245340234.age)



//?====================================================================================================
/*implements не означает, что то, что мы установили в interface будет точно соответствовать типам класса

readonly не будет работать в классе от интерфейса в котором readonly есть
если мы явно укажем в Interface, что функция что то принимает, это не значит, что оно будет действовать на метод класса
можно сказать, что interface только явно дает понять, какие поля нам нужно реализовать и каких типов

можно поле записать через # и оно будет доступно только в самом классе и не будет в подклассах
*/
interface SomeIntClass {
    readonly name: string
    age: number
    logInfoAboutThis: (arg: string) => {}
}
class SomeClAss implements SomeIntClass {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logInfoAboutThis = () => {
        return this
    }
}
let Alexandr = new SomeClAss('Alexander', 32)
Alexandr.name = ''
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
    private _defaultVoice: string
    type: string
    voice!: string

    constructor() {
        this.type = 'Animal'
        this._defaultVoice = 'я животное, это мой голос'
    }
    static alwaysLogGood = () => {
        console.log('Iam always Amazing')
    }

    get defaultVoice() {
        return this._defaultVoice
    }
    set defaultVoice(value: string) {
        this._defaultVoice = value
    }
    showVoice = () => {
        console.log(this._defaultVoice)
    }
    logInfoAboutThis = () => {
        return this
    }
    greeting = () => {
        console.log('Hello World!')
    }
    sayBuyTo = (target?: string) => {
        if (target) {
            console.log(`Пока ${target}`)
            return
        }
        console.log(`Пока`)
    }
}
class Animal2 extends Animal1 {
    constructor(type: string) {
        super()
        this.type = type
    }
}

class Dog80988 extends Animal2 {
    constructor(type: string, voice: string) {
        super(type)
        this.type = type
        this.voice = voice
    }

    showVoice = () => {
        if (this.voice === this.defaultVoice) {
        }
        return this.voice
    }
    greeting = () => {
        console.log(`Привет, ${this.type}`)
    }
    sayBuyTo = (name?: string) => {
        if (name) {
            console.log(`Пока, [${name.toUpperCase()}], до скорой встречи!`)
        }
    }
}
let Dog098980 = new Dog80988('Собака', 'гав гаф гаф')

// console.log(Dog098980.logInfoAboutThis())
// console.log(Dog098980.showVoice())
// Dog098980.greeting()
// Dog098980.sayBuyTo('Друг')
// Dog80988.alwaysLogGood()



//?====================================================================================================
// обобщения для классов
/*можно также использовать обобщения для классов */
class Box<Type> {
    contents: Type;
    constructor(value: Type) {
        this.contents = value;
    }
}
let dsfds = new Box<number[]>([121, 312, 123,])



//?====================================================================================================
// абстрактные классы
/*абстрактный класс не может быть создан напрямую, только наследуются от него

методы и свойства указанные как abstract, обязательны к объявлению в потомке класса
если типа свойства указан, то в абстрактном классе обязательно нужно прописать конструктор, как и в обычном классе


*/
abstract class AbstractClass {
    type = 'Человек'
    abstract name: string
    abstract greeting: (text: string) => void

    logInfo = () => {
        return this
    }
}
class SomeClassss extends AbstractClass {
    name: string
    constructor(name: string) {
        super()
        this.name = name
    }
    greeting = (text: string) => {
        console.log(`Привет, ${text.toUpperCase()}!`)
    }
}

let someobjectFromClassss = new SomeClassss('Дмитрий')

// console.log(someobjectFromClassss.logInfo())
// someobjectFromClassss.greeting('друг')



//?====================================================================================================
// отношения между классами
/*если классы имеют одинаковые свойства, но второй класс, от которого мы создаем инстанс, мы укажем ему тип того класса,
который имеет меньше полей, то все пройдет хорошо и мы создадимся от класса, у которого полей больше, то есть
перекроем установленный при объявлении тип
Но наоборот это уже не пройдет*/
class SomeManClass1 {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class SomeManClass2 {
    name: string
    age: number
    salary: number
    constructor(name: string, age: number, salary: number) {
        this.name = name
        this.age = age
        this.salary = salary
    }
}

let someMan1: SomeManClass1 = new SomeManClass2('Dima', 22, 60000)
// console.log(someMan1)

// тут уже будет ошибка!
// let someMan2: SomeManClass2 = new SomeManClass1('Dima', 22)
// console.log(someMan2)



//!====================================================================================================
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// типы утилит
//?====================================================================================================
/*Partial<Type> создает тип на основе входящего, но все поля делает необязательными */
type SomeKeys = {
    name: string
    age: number
}
type SomeKeysByPartial = Partial<SomeKeys>

/*функция, которая принимает обьект типа один,и вторым аргументом обьект того же типа, но с необязательными параметрами
и возвращает обьект, переписывая некоторые свойства первого обьекта, заменяет их */
let someeeObj: SomeKeys = {
    age: 22,
    name: 'Dima'
}
function updatesomeeeObj(arg: SomeKeys, arg2: Partial<SomeKeys>) {
    return { ...arg, ...arg2 }
}
let r11 = updatesomeeeObj(someeeObj, { name: 'Alex' })
// console.log(r11)


//?====================================================================================================
/*Required<Type> cоздает тип, состоящий из всех свойств, Typeравных required. Противоположность Partial. */
interface SomeKeys1 {
    name?: string
    age?: number
}
type SomeKeys1Required = Required<SomeKeys1>


//?====================================================================================================
/*Readonly<Type> создает тип, все свойства которого Typeустановлены в readonlyзначение, что означает,что свойства
сконструированного типа нельзя переназначить.*/
type RequiredKeys = Readonly<Required<SomeKeys1>>


//?====================================================================================================
/*Record<Keys,Type> этот тип сопоставляет ключи типа, и устанавливает их в тип, переданный вторым аргументом*/
type CatInfo = {
    name?: string
    age?: number
    cost?: number
}
type CatName = 'камышовый' | 'рысь' | 'мэйнкун'
type CatsNamesAndInfo = Record<CatName, CatInfo>

// моя реализация, немного усложненней
type CatNames = {
    камышовый: string
    рысь: string
    мэйнкун: string
}
type MyRecord1<KeysNames, TypeOfField> = {
    [key in keyof KeysNames]: TypeOfField
}
type CatsNamesAndInfo2 = MyRecord1<CatNames, CatInfo>


//?====================================================================================================
/*Pick<Type, Keys> создает тип, выбирая набор свойств Keys(строковый литерал или объединение строковых литералов)из Type*/
type SomeExample32423432432443 = {
    name: string
    age: number
    info: {
        a: string
        b: string
    }
    salary: number[]
}
type MyPickVersion<Type, K extends keyof Type> = {
    [key in K]: Type[key]
}

type result33246901 = Pick<SomeExample32423432432443, 'name' | 'age'>
type result3324690 = MyPickVersion<SomeExample32423432432443, 'salary' | 'name'>



//?====================================================================================================
/*Omit<Type, Keys> создает тип, выбирая все свойства Type и затем удаляя их Keys(строковый литерал или объединение
строковых литералов). */
type MyOmitType<T, K extends keyof T> = {
    [key in keyof T as key extends K ? never : key]: T[key]
}

type resultf234389 = MyOmitType<SomeExample32423432432443, 'salary' | 'age'>


//?====================================================================================================
/*Exculde удаляет типы 2 аргумента, если они есть в первом */
type sdfds = { name: string }
type sdfds234 = { age: number }
type sdfd34234s = { message: string }

type MyExclude<T, K> = T extends K ? never : T
type resddsffsdf = MyExclude<sdfds | sdfds234 | sdfd34234s, sdfds234>


//?====================================================================================================
/*Extract почти тоже самое, что и Exclude, сопоставляет типы первого и второго и возвращает только совпадения */
type wefsdf = string | number | ((arg: any) => {}) | object

type MyExctractType<T, K> = T extends K ? T : never

type result4392 = MyExctractType<wefsdf, string>


//?====================================================================================================
/*NonNullable<Type> создает тип путем исключения null и undefined из Type, который записан в строку */
type sjf45435435 = number | string | null

type MyNonNullable<T> = T extends null | undefined ? never : T

type WithoutNUll = MyNonNullable<sjf45435435>

type typesnulls = {
    a: null
    b: string,
    c: undefined
}
type MyNoNullable<T> = {
    [key in keyof T as T[key] extends null | undefined ? never : key]: T[key]
}
type resultnonull45453 = MyNoNullable<typesnulls>


//?====================================================================================================
/*PickTypesOfKeysTypes */
type sdfsdf3453234 = {
    name: string
    age: undefined
    location: null
}
type PickTypesOfKeysTypes<Type> = Type[keyof Type]
type sdfdsf = PickTypesOfKeysTypes<sdfsdf3453234>


//?====================================================================================================
/*infer это оперетор, который на лету определяет тип переменной , если мы не знаем какой он будет вначале */
type SomeArray = [number, string, ...boolean[]]

type IfArrayGetArrayKeysType<T> = T extends (infer R)[] ? R : T

type resulted98302743 = IfArrayGetArrayKeysType<SomeArray>


//?====================================================================================================
/*Parameters<Type>создает кортежный тип из типов, используемых в параметрах типа функции Type. */
function someFunctionDoSome(arg: { a: string, b: number }, arg2: string) { }

type MyFuncGetParametrs<T extends (...arg: any[]) => any> = T extends (...arg: infer R) => any ? R : T

type result34452123 = MyFuncGetParametrs<typeof someFunctionDoSome>


//?====================================================================================================
/*ConstructorParameters<Type>
Создает тип кортежа или массива из типов типа функции конструктора. Он создает кортеж со всеми типами параметров
(или тип, never если Type не является функцией). */

type SomeConstructorType = new (arg: string, arg2: number, arg3: number[]) => any

type MyConstructorParameters<Type extends new (...arg: any[]) => any> = Type extends new (...arg: infer R) => any ? R : Type

type dsff = MyConstructorParameters<SomeConstructorType>


//?====================================================================================================
/*ReturnType<Type>Создает тип, состоящий из возвращаемого типа функции Type. */
type MyReturnTypeFromFunc<T> = T extends (...args: any[]) => infer R ? R : T

function someReturnFnc1234(arg: number) {
    return arg
}
type result892749fsd = MyReturnTypeFromFunc<typeof someReturnFnc1234>
type result892749fs2d = MyReturnTypeFromFunc<{ a: string }>


//?====================================================================================================
/*InstanceType<Type> Создает тип, состоящий из типа экземпляра функции-конструктора в Type. */
class SomeExamp {
    x: string
    y: string
    constructor(x: string, y: string) {
        this.x = x
        this.y = y
    }
}

type MyInstanceType<T> = T extends new (...args: any[]) => infer R ? R : T
type result48925 = MyInstanceType<typeof SomeExamp>

type result2343487 = InstanceType<typeof SomeExamp>
let someVal: result2343487 = {
    x: '',
    y: ''
}


//?====================================================================================================
/*ThisParameterType<Type> Извлекает тип параметра this для типа функции или unknown, если тип функции не имеет 
this параметра. */
type MyThisParameterType<Type> = Type extends (this: infer R, ...arg: any[]) => any ? R : Type

function toHex(this: string) {
    return this.toUpperCase()
}
type result4r329874 = MyThisParameterType<typeof toHex>


//?====================================================================================================
/*OmitThisParameter<Type> удаляет this из типа функции и возвращает другой тип функции без this, если this и не было
возвращает пришедший тип */
type result823n = OmitThisParameter<typeof toHex>


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
function ClassDecorator(constructor: Function) {
    console.log(constructor)
}
function ValueDecorator(target: any, propName: string) {
    console.log(target)
    console.log(propName)
}
function MethodDecorator(target: any, propName: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(descriptor)
}

// @ClassDecorator
class ExampleDecoratorsClass {
    // @ValueDecorator
    name: string
    constructor(name: string) {
        this.name = name
    }

    // @MethodDecorator
    loginfo() {
        console.log(this)
    }
}
// let exampleObject32432 = new ExampleDecoratorsClass('Dima')
// let button = document.querySelector('#btn')!
// button.addEventListener('click', exampleObject32432.loginfo)


//?====================================================================================================
/*Декоратор класса 
без создателя декоратора класса работает так: при объявлении класса, мы ставим выше декоратор, 
который обертывает наш класс, декоратор должен вернуть то, что в него приходит, в данном случае класс. А весь функционал,
который прописан в возвращаемом классе применяется, когда мы создаем инстанс класса.

*/
type ComponentDecoratorType = {
    selector: string
    template: string
}

function DecoratorCLassExample<T extends { new(...arg: any[]): object }>(Constructor: T) {
    // console.log(Constructor) //этот код сработает сразу при объявлении
    return class extends Constructor {
        somevalue: string //почему то это поле не будет видно после создания инстанса класса
        constructor(...params: any[]) {
            super(...params)
            // console.log(params) // этот код только при создании инстанса класса
            this.somevalue = 'тут какое то значение'
        }
        /*если перезаписать метод, то когда мы объявим декоратор для метода в нормальном классе, он не сработает */
        logName() {
            console.log(`{${this.somevalue}}` + ' теперь выводится вместо [this.name]')
        }
    }
}
function DecoratorMethodExample(_: any, _2: any, descriptor: PropertyDescriptor) {
    return {
        value: function () {
            console.log(this)
        }
    }
}

@DecoratorCLassExample
class ComponentMain {
    constructor(public name: string) { }

    /*декоратор не сработает, т.к в классовом декораторе мы перезаписали этот класс и следовательно сам декоратор */
    @DecoratorMethodExample
    logName() {
        console.log(`Имя обьекта: [${this.name.toUpperCase}]`)
    }
}

let ComponentMain23432 = new ComponentMain('Component')
// ComponentMain23432.logName()
// ComponentMain23432.logName = function () {
//     console.log('ну переназначил')
// }
// console.log(ComponentMain23432)



//?====================================================================================================
// Декоратор метода, срабатывает, когда объявляем instance класса
function DecorMethod(target: any, propName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    let oldFn = descriptor.value
    return {
        value: function () {
            console.log('Привет, Декораторы!')
        }
    }
    // return {
    //     get() {
    //         return oldFn.bind(this)
    //     }
    // }
}

class Someclass4382 {
    constructor(public name: string) { }

    @DecorMethod
    logSomething() {
        console.log(`Выводит имя компоненты: [${this.name.toUpperCase()}]`)
    }
}
// let instayceclass54353 = new Someclass4382('Some instance')
// instayceclass54353.logSomething()
// instayceclass54353.logSomething = () => {
//     console.log('привет, переназначил!')
// }

// let el = document.querySelector('#btn')!
// el.addEventListener('click', instayceclass54353.logSomething)


//?====================================================================================================
/*проверить передан ли аргумент необязательный при создании класса */
type ValidatorsType = {
    [form: string]: {
        [prop: string]: 'required' | 'email'
    }
}
let validators: ValidatorsType = {}

function Required(target: any, propName: string | symbol) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    }
}
function validateField(obj: any) {
    let options = validators[obj.constructor.name]

    let isValid = true
    Object.keys(options).forEach(key => {
        if (options[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}

class SomeCLassEx {
    @Required
    email: string | undefined
    @Required
    name: string | undefined
    constructor(name?: string, email?: string,) {
        this.name = name
        this.email = email
    }
}
// let form5234554 = new SomeCLassEx('Dima', 'Email.ru')
// if (validateField(form5234554)) {
//     console.log(form5234554)
// } else {
//     console.log('не валиден')
// }


//?====================================================================================================
type ComponentType = {
    selector: string
    template: string
}
function Component3424(obj: ComponentType) {
    return <T extends new (...args: any[]) => object>(Constructor: T) => {
        return class extends Constructor {
            constructor(...props: any[]) {
                super(props)
            }
            render() {
                let el = document.querySelector(obj.selector)
                if (el) {
                    el.innerHTML = obj.template
                }
            }
        }
    }
}

@Component3424({
    selector: '#root',
    template: `
    <div style='font-size:25px;'>
        <div>
            <span>Это создано с помощью декоратора!</span>
        </div>
    </div>
    `
})
class AppMain {
    constructor(public name: string) { }
    render() { }
}
let classCreated3442 = new AppMain('Some Component')
classCreated3442.render()


//!====================================================================================================
// namespaces
/*нужны для того, чтобы не переплетались типы и интерфейсы проекта. Для этого создается отдельный файл 
где пишется namespace с именем и внутри каждый тип и интерфейс экспортируется, а импортируется через reference, 
и сам модуль, где нужно применить эти типы также оборачивается в имя namespac'а, и если оттуда нужно достать переменную
то просто ее экспортируем*/
///<reference path='./repeatEverything.ts'/>
namespace Form {
    export type StateType = 'state' | null
    export type PropsType = 'props' | 'some props'
    export interface IInfo {
        state: StateType
        props: PropsType
    }
}

namespace Form {
    class MyForm {
        private state: StateType
        private props: PropsType
        constructor(public name: string) {
            this.state = "state"
            this.props = "some props"
        }

        getInfo(): IInfo {
            return {
                props: this.props,
                state: this.state
            }
        }
    }

    export let myForm = new MyForm('SomeClass')
    // console.log(myForm.getInfo())
}
// console.log(Form.myForm)




//!====================================================================================================
/*пример с собеседования */
abstract class PersonInfoClass {
    constructor(public firstName: string, public lastName: string) { };
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
    constructor(firstName: string, lastName: string, public county: string, public city: string,) {
        super(firstName, lastName);
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
    constructor(firstName: string, lastName: string, public branch: string) {
        super(firstName, lastName);
    }
    getInfo() {
        return `${super.getInfo()} Branch: ${this.branch} development`;
    }
}
let employer = new Employ('Danil', 'Sidorov', 'Moscow');
// console.log(employer.getInfo());







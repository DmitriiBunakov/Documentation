interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

let object: Rect = {
    id: '1455',
    color: 'red',
    size: {
        height: 250,
        width: 150,
    },
}
/*мы хотим пока что не инициализировать обьект со всеми свойствами, можем оставить пустым и указать что он типа Rect as
либо <Rect>{}
*/
let object2: Rect = { id: 'sdf' } as Rect
let object3: Rect = <Rect>{}
object2.color = 'black'


//наследование интерфейсов
/*могут наследоваться */
interface RectWithArea extends Rect {
    getArea: () => number
}
let rect: RectWithArea = {
    id: '123',
    size: {
        height: 423,
        width: 120
    },
    getArea() {
        return this.size.height * this.size.width
    }
}
console.log(rect.getArea())


// 
interface IClock {
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date()
    setTime = (date: Date) => {
        this.time = date
    }
}


/*
Обьект типов key указывается number или string
*/
interface Styles {
    [key: string]: string
}
let css: Styles = {
    border: '1px solid black',
    marginTop: '20px',
    borderRadius: '5px',
}


type SomeType12 = { [key: string]: string }
let objectStrings: SomeType12 = {
    a: '',
    b: '',
    // c: 45,
    d: '',
}





/*readonly
имеет недостаток, что если мы создадим readonly обьект, который равен не readonly, то при изменении открытого, мы изменяем
и readonly
тут включается копирование обьектов по ссылке
*/
interface Person1 {
    name: string
    age: number
}
let man1: Person1 = {
    name: 'Dima',
    age: 22
}
interface Person2 {
    readonly name: string
    readonly age: number
}
let man2: Person2 = man1

man1.age = man1.age + 50
// console.log(man1)
// console.log(man2)
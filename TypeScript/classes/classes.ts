class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    loginfo = (name: string): string => {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

let typescript = new TypeScript('2.01.5')
console.log(typescript)
console.log(typescript.loginfo('My'))


// readonly можно только читать
// class Car {
//     readonly model: string
//     readonly numberOfWheel: number = 4

//     constructor(model: string, numberOfWheel: number) {
//         this.model = model
//         this.numberOfWheel = numberOfWheel
//     }
// }
// мождно переписать красивее, то, что зададим readonly в конструкторе TS сам запишем в свойства класса
class Car {
    readonly numberOfWheel = 4
    constructor(readonly model: string) { }
}


//модификаторы
/*
protected - имеем доступ только в классе самом и подклассах, но не имеем доступ в экзмеплярах 
public - имеем доступ всегда
private - имеем доступ только в самом классе, в экзепляре нет доступа
*/
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go = (): void => {
        console.log('go')
    }
    sayVoice = (): string => {
        return this.voice
    }
}
let animal = new Animal()

class Cat extends Animal {
    setVoice(voice: string): void {
        this.voice = voice
    }
}

let cat = new Cat()
cat.setVoice('мяу')
console.log(cat.sayVoice())



/*абстрактные классы
нужны для того, чтобы от них можно было наследоваться, но нельзя их вызывать, только для наследования существуют

все методы указанные как abstract должны быть реализованы в подклассах
*/
abstract class Component {
    abstract render(): void
    getinfo: () => this = () => this
}
class AppComponent extends Component {
    render() { console.log('render') }
}
let abstractElem = new AppComponent()
console.log(abstractElem.getinfo())





//
class Maan {
    name = 'Man'
}
function create<T>(arg: new () => T): T {
    return new arg()
}
let me = create(Maan)
console.log(me)




/*чтобы присвоить наследоваться от класса и взять все его свойства, нужно будет в дочернем классе прописать
сначала все свойства родителя и поместить их в super, а затем новые добавлять *

readonly нельзя через set даже менять значение
private можно через set изменять но нельзя ничего делать напрямую вне класса
protected можно тоже только через аксессоры , и можно только в классах и подклассах

если в QWE name задать как private, его все равно нужно копировать в QWE2 но там нельзя с ним взаимодействовать и даже
нельзя назначить новую переменную этого же имени
*/
class QWE {
    private name: string
    constructor(name: string) {
        this.name = name
    }
}
let qwe = new QWE('Dima')

class QWE2 extends QWE {
    protected age: number

    constructor(name: string, age: number) {
        super(name)
        this.age = age
    }
    get Age(): number {
        return this.age
    }
    set Age(age: number) {
        this.age = age
    }
}
let qwe2 = new QWE2('Dima', 22)
qwe2.Age




/*могут наследоваться от interface или type */
type IClock2 = {
    time: Date
    setTime(date: Date): void
}
class Clock2 implements IClock2 {
    time: Date = new Date()
    setTime = (date: Date) => {
        this.time = date
    }
}




/*переопределение методов и свойств */
class Try1 {
    hello() {
        console.log('Hello World')
    }
}
class Try2 extends Try1 {
    hello(text?: string) {
        if (!text) {
            super.hello()
        } else {
            console.log(`Hello ${text}`)
        }
    }
}
let try1 = new Try2()
// try1.hello()





/*Static */
class QWEr {
    static x = 45
    static logSome() {
        console.log(this.x)
    }
}
QWEr.logSome()
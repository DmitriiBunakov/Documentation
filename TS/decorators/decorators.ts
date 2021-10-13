function FirstDecorator(component: Function) {
    // console.log(component)
}
function SecondDecorator(target: any, propName: string | Symbol) {
    // console.log(target)
    // console.log(propName)
}
function ThirdDecorator(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    // console.log(target)
    // console.log(propName)
    // console.log(descriptor)
}

@FirstDecorator
class SomeComponent {
    @SecondDecorator
    name: string
    constructor(name: string) {
        this.name = name
    }

    @ThirdDecorator
    logName() {
        console.log(`Component name is ${this.name}`)
    }
    @ThirdDecorator
    get ComponentName() {
        return this.name
    }
}







/*
Декоратор, как в Angular
Создаем декоратор, который будет выполнять определенную логику, только при создании класса
*/
/*привязываем конкретный метод к экзмепляру класса через декоратор */
function BindContextMethods(_1: any, _2: string, descriptor: PropertyDescriptor) {
    let originalFn = descriptor.value
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalFn.bind(this)
        }
    }
}


interface IAppComponentMain {
    selector: string
    template: string
}
function AppComponentMainDec(options: IAppComponentMain) {
    return <T extends { new(...arg: any[]): object }>(Constructor: T) => {
        return class extends Constructor {
            constructor(...params: any[]) {
                super(...params)
                let elementTarget = document.querySelector(options.selector)!
                elementTarget.innerHTML = options.template
            }
        }
    }
}

@AppComponentMainDec({
    selector: '#root',
    template: `
    <div>
        <div>
            <span>Hello World!</span>
        </div>
    </div>
`
})
class AppComponentMain {
    constructor(public name: string) { }

    @BindContextMethods
    logName() {
        console.log(`Component name is ${this.name}`)
    }
}
let card = new AppComponentMain('Name')


/* */
let btn = document.querySelector('#btn')!
btn.addEventListener('click', card.logName)
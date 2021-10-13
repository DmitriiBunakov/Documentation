"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function FirstDecorator(component) {
    // console.log(component)
}
function SecondDecorator(target, propName) {
    // console.log(target)
    // console.log(propName)
}
function ThirdDecorator(target, propName, descriptor) {
    // console.log(target)
    // console.log(propName)
    // console.log(descriptor)
}
let SomeComponent = class SomeComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name is ${this.name}`);
    }
    get ComponentName() {
        return this.name;
    }
};
__decorate([
    SecondDecorator,
    __metadata("design:type", String)
], SomeComponent.prototype, "name", void 0);
__decorate([
    ThirdDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SomeComponent.prototype, "logName", null);
__decorate([
    ThirdDecorator,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], SomeComponent.prototype, "ComponentName", null);
SomeComponent = __decorate([
    FirstDecorator,
    __metadata("design:paramtypes", [String])
], SomeComponent);
/*
Декоратор, как в Angular
Создаем декоратор, который будет выполнять определенную логику, только при создании класса
*/
/*привязываем конкретный метод к экзмепляру класса через декоратор */
function BindContextMethods(_1, _2, descriptor) {
    let originalFn = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalFn.bind(this);
        }
    };
}
function AppComponentMainDec(options) {
    return (Constructor) => {
        return class extends Constructor {
            constructor(...params) {
                super(...params);
                let elementTarget = document.querySelector(options.selector);
                elementTarget.innerHTML = options.template;
            }
        };
    };
}
let AppComponentMain = class AppComponentMain {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name is ${this.name}`);
    }
};
__decorate([
    BindContextMethods,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponentMain.prototype, "logName", null);
AppComponentMain = __decorate([
    AppComponentMainDec({
        selector: '#root',
        template: `
    <div>
        <div>
            <span>Hello World!</span>
        </div>
    </div>
`
    }),
    __metadata("design:paramtypes", [String])
], AppComponentMain);
let card = new AppComponentMain('Name');
/* */
let btn = document.querySelector('#btn');
btn.addEventListener('click', card.logName);

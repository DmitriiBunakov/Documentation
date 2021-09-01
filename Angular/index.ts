//!====================================================================================================
//? @Injectable DependencyInjection Внедрение зависимостей
// https://angular.io/api/core/Injectable
// https://angular.io/guide/dependency-injection-providers
// https://www.youtube.com/watch?v=fALKYP8voBQ&ab_channel=JavaScript.ru
// https://www.youtube.com/watch?v=u6gAVCEJjQ4&t=860s&ab_channel=devschacht
/*
? логика работы примерно такая: существует некий контейнер(коробка), где лежат все необходимые нам для внедрения сервисы, переменные и т.д, неважно что, и мы при инжектировании зависимостей достаем уже экземпляр класса, эта коробка сама создает внутри себя этот экземпляр и отдает нам его, также она может отдавать не только именно это экземпляр, но и создать другой экземпляр этого же класса.

? в нативном js это работает так: например мы хотим реализовать класс "C", который включает в себя "B", который в свою очередь включает в себя класс "A". То есть при создании самомого верхнего класса по вложенности, который не наименее мало имеет зависимостей, нам нужно будет создать каждый класс из представленных, чтобы внедрить один в другой
? получится, что для "С" нам нужно создать "B", для которого нам также нужно создать "А", а это не очень удобно делать такое каждый раз.
class A {
    log() {
        console.log('HELLO');
    }
}
class B {
    constructor(a) {
        this.a = a;
    }
    log() {
        this.a.log();
    }
}
class C {
    constructor(b) {
        this.b = b;
    }
    log() {
        this.b.log();
    }
}
let c = new C(new B(new A()));
c.log();


? поэтому была придумана DI методология, то есть мы запрашиваем у контейнера какой класс мы хотим внедрить в себя, а он сам под капотом создает зависимости и отдает нам уже готовый класс со всеми ему нужными зависимостями.


? В Angular @Injectable как раз таки указывается для того, чтобы была возможность инжектировать этот класс в другие, и чтобы в этот класс также можно было бы инжектировать другие зависимости.
? Как определять зависимости в ангуляр? В providers в модулях приложения, мы передаем обьект, который содержит ключ, по которому мы будет стучаться до нашей зависимости и значение, то что будет нам отдаваться
? важный момент, если мы указали только "provide", это не значит, что мы получим экземпляр этого класса, т.к. нет значения, если же и значение и имя совпадают, то можно записать коротко, просто название класса и убрать обьект, тогда просто вместо обьекта передадим SomeService(сахар ангуляра)
? provide это токен, по которому будет доставаться значение из коробки

providers: [
    {
        provide: SomeService,
        useClass: SomeService,
    }
]

? В provider можно передавать и классы и любые другие данные.
? в качестве токена(provide), нам необходимо создавать токен, если это не класс с помощью InjectionToken, и получившееся значение указывть тут
? помимо useClass можно использовать:
?       useValue - это любое значение может быть
?       useFactory - функция, в которой мы можем определить когда именно мы будем возвращать данные, можем определить свой конструктор, то есть мы определяем дополнительную логику для внедрения этой зависимости; помимо этого, если мы используем useFactorey, в провайдер мы можем передать "deps" - свои зависимости, которые будут включены в этот наш сервис
?       useExicting - это мы передаем тот класс, функционал которого мы хотим ограничить до функционала того, что указан в "provide", т.е. у нас уже где то выше определен SomeService, и в useExicting мы указываем класс, который похож на SomeService, но расширенный имеет функционал, и мы этот класс ограничиваем до SomeService


? зависимости можно определять в модулях приложения, это будут одни и те же экземпляры обьектов, также мы можем переопределять зависимости на уровне компонентов, мы перезапишем получается глобально доступный сервис локальным. Синтаксис точно такой же, как и в модуле.


? Под капотом ангуляр автоматически инжектирует зависимости указанные в конструкторе класса, которые были расширены с помощью декораторов, ниже запись немного раскрывает, как работает ангуляр под капотом. Эти две записи идентичны, по токену получаем экземпляр класса.
class a {
    constructor(
        private service: Service,
        @Inject(Service) service: Service,
    ) {}
}


?! одно заблуждение у меня было, внедрить зависимость по ИНТЕРФЕЙСУ невозможно, т.к. это только во время разработки существует вещь, внедрение происходит по токену!!!
*/


//?====================================================================================================
//? Injector
// https://angular.io/api/core/Injector-0
/*
? мы также можем сами создавать вручную зависимости через Injector.create , он принимает обьект, где parent - родительский инжектор, name - имя этого инжектора, providers - массив поставщиков
{
    providers: [
        {
            provide: SomeService,
            useClass: SomeService,
        },
        {
            provide: SomeService,
            useClass: SomeService,
        }
    ],
    parent?: Injector,
    name?: string
}
*/



//!====================================================================================================
//* КОМПОНЕНТЫ COMPONENTS  ng g c <name> --skipTests
//?====================================================================================================
//? @Component
//? обьъявляются в модуле в declarations
/*
*changeDetection - определяет тип изменений на которые нужно реагировать шаблону. ChangeDetectionStrategy.Default - реагирует компонент на все изменения, ChangeDetectionStrategy.OnPush - реагирование происходит только на входные свойства, которые пришли, как @Input.

*selector - селектор, под которым используется шаблон компонента

*encapsulation - инкапсулирование стилей. ViewEncapsulation, принимает разные значение по инкапсулированию

*interpolation - можно указать способ интерполирования, свой стиль

*entryComponents - компоненты, которые используется, но в шаблонах нет ссылок на них

*preserveWhitespaces - удалять ли потенциально лишние пробелы из шаблона или нет

*viewProviders - набор компонентов, сервисов, видимых у потомков

*template - шаблон

*templateUrl - ссылка на  шаблон

*styles - стили(массив строк)

*styleUrls - ссылка на стили

*animations - анимации примененные в шаблоне
*/


//?====================================================================================================
//? @Input 
//? https://angular.io/api/core/Input 

//* получить значение в компонент из родительского шаблона
/*
*прокидываем в компонент из родительского шаблона
<custom-component [someValue]="Привет"></custom-component>

*принимаем значение в ребенке
class {
   @Input() someValue: string;
}
*/


//?====================================================================================================
//? @Output
//? https://angular.io/api/core/Output

//* Прокинуть наверх данные, используется EventEmitter, чтобы прокидывать наверх данные. В шаблоне у родителя принимаем их, как обработчик события в (), который принимает $event - в данном случае значение, которое прокинули.
/*
* ребенок
import {EventEmitter, Outpur} from 'angular/core';
class {
   @Output() onEvent: EventEmitter = new EventEmitter();

   onSomeEvent() {
      this.onEvent.emit(someValueToEmit);
   }
}

* родитель
<child-component (onEvent)="someMethod($event)"></child-component>

*/


//?====================================================================================================
//? Переменная шаблона
//? https://angular.io/guide/template-reference-variables
//* <div #ref></div>


//?====================================================================================================
//? EventEmitter
//? https://angular.io/api/core/EventEmitter

//* Существует для прокидывания наверх данных из детей, родителю.


//?====================================================================================================
//? @ViewChild
//? https://angular.io/api/core/ViewChild

//* Получаем доступ к тэгу в компоненте из шаблона.
//* Static true используется, если мы хотим обратиться к ссылке в методе ngonInit, в остальных случая стоит false.
/*
* шаблон
<div>
   <h1 #refOnH1></h1>
</div>

* компонент
import {ElementRef, ViewChild};
class {
   @ViewChild('refOnH1', {
      static: false
   }) element: ElementRef;

   someMethod() {
      this.element.addEventListener();
   }
}
*/


//?====================================================================================================
//? Передача контента в ребенка от родителя ng-content

//* можно передать контент внутрь детского селектора, между детскими тэгами, и в самом шаблоне ребенка вызвать тэг <ng-content></ng-content>, на месте которого появится html из родителя.
/*
*шаблон родителя
<div>
   <child-component *ngFor="let post of posts">
      <p *ngIf="post.text.length > 150; else otherContent">пост длинный</p>

      <ng-template #otherContent>
         <p>пост короткий</p>
      </ng-template>

   </child-component>
</div>

*шаблон ребенка
<div>
   <div></div>
   <div></div>
   <ng-content></ng-content>
</div>

*/



//?====================================================================================================
//? ContentChild
//? https://angular.io/api/core/ContentChild

//* Если мы хотим получить доступ до html, который передан от родителя и получен через ng-content, нужно в компоненте ребенка получить ссылку на этот html через ContentChild.
/*
*шаблон родителя
<div>
   <child-component *ngFor="let post of posts">
      <div #refoncontentformparent>
         <p *ngIf="post.text.length > 150; else otherContent">пост длинный</p>

         <ng-template #otherContent>
            <p>пост короткий</p>
         </ng-template>
      </div>
   </child-component>
</div>

*шаблон ребенка
<div>
   <div></div>
   <ng-content></ng-content>
</div>

*компонент ребенка
import {ElementRef, ContentChild};
class {
   @ContentChild('refoncontentformparent', {static: false}) element: ElementRef;
}

*/


//?====================================================================================================
//? ХУКИ ЖИЗНЕННОГО ЦИКЛА LIFECYCLEHOOKS
//? https://angular.io/guide/lifecycle-hooks


//?====================================================================================================
//? привязка аттрибутов, классов
//? https://angular.io/guide/attribute-binding


//?====================================================================================================
//? ngClass
//? https://angular.io/api/common/NgClass

//* Принимает обьект, где ключ - имя класса, значение это условие при котором этот класс должен примениться
/*
this.classesValues = {
   'errorClass': this.error,
   'warnClass': this.warn,
}

<div [ngClass]="classesValues"></div>
*/


//?====================================================================================================
//? ngStyle
//? https://angular.io/api/common/NgStyle

//* Принимает обьект, где ключ - имя свойства, значение это условие
/*
this.currentStyles = {
   'font-style':  this.canSave      ? 'italic' : 'normal',
   'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
   'font-size':   this.isSpecial    ? '24px'   : '12px'
};

<div [ngStyle]="currentStyles"></div>

*либо
<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'"> This div is x-large or smaller. </div>
*/


//?====================================================================================================
//? ngModel
//? https://angular.io/api/forms/NgModel

//*Двухстороння привязка, то есть при изменении в шаблоне, меняется компонент и наоборот, нужен импорт FormsModule
/*
<input [(ngModel)]="someValue"/>
*/


//?====================================================================================================
//? ngIf ngFor ngSwitch
/*
? https://angular.io/api/common/NgIf
*Можно использовать условия, а в else установить ссылку на элемент, который будет отображен при неудаче
<app-item-detail *ngIf="isActive; else otherElement" [item]="item"></app-item-detail>
<div #otherElement></div>


? https://angular.io/api/common/NgForOf
*Можно перебирать массивы и обьекты
* trackBy позволяет не перерисовывать все элементы при изменении, тоже самое, что и key в React.
* keyvalue пайп для перебора обьектов
<div *ngFor="let post of posts; let index = index; trackBy: trackByItems">">Номер: {{index}}  {{post.title}}</div>
class {
   trackByItems(index, item){
      return item.id;
   }
}

? https://angular.io/api/common/NgSwitch
*Можно использовать switch для отображения
<div ngSwitch="someValue">
   <p *ngSwitchCase>lorem="value1"</p>
   <p *ngSwitchCase>lorem="value2"</p>

   <p *ngSwitchDefault>lorem="value3"</p>
</div>
*/


//?====================================================================================================
//? ng-container
//* ангуляр не помещает его на страницу, можно использовать для условий, может пригодиться, как пустой тэг


//?====================================================================================================
//? @HostListener
//? https://angular.io/api/core/HostListener

//* Вешается сразу на весь компонент обработчик события, очень удобно таким образом обрабатывать события в директиве, мы просто в самой директиве создаем HostListener'ы и внутри пишем логику
//* 1ый аргумент - событие, 2ой - аргументы передаваемые в обработчик
/*
class{
   @HostListener('click', ['$event']) onClick(e:Event){
      console.log(e);
   }
}
*/


//?====================================================================================================
//? @HostBinding
//? https://angular.io/api/core/HostBinding

//* привязывает свойство элемента сразу к переменной
/*
class {
   @HostBinding('class.activated') someClass = null;
   @HostListener('click', ['$event']) onClick(e:Event){
      this.someClass = 'activated';
   }
}
*/



//?====================================================================================================
//? Динамический компоненты Dynamic components

//* Компонент динамический необходимо зарегать в entryComponents в модуле, это компоненты, которые мы не используем напрямую в шаблоне.


/*
*ng-template тэг, который не будет появлять в DOM
*Пример шаблона, куда мы хотим поместить контент программно, мы указываем директиву modalRef, которая предоставляет ссылку на данный тэг с помощью ViewContainerRef
<ng-template modalRef></ng-template>
<nav class="navbar">
   <h1>Angular Dynamic Component</h1>
</nav>

*Пример шаблона динамического контента, в комоненте еще и реализован Output onCLose
<div class="modal">
   <h1>{{title}}</h1>
   <button class="btn" (click)="onCLose.emit()">&times;</button>
</div>

*ViewContainerRef
*ViewContainerRef представляет доступ к элементу, на котором была вызвана директива, и разные методы по манипуляциям с данным компонентом предоставляет
*https://angular.io/api/core/ViewContainerRef
*Директива для компонента, в конструкторе инжектируем ViewContainerRef
import { Directive, ViewContainerRef } from "@angular/core";
@Directive({
   selector: '[modalRef]'
})
export class ModalDirective {
   constructor(public containerRef: ViewContainerRef) { }
}


*Компонент, где хотим использовать динамическое добавление
*в resolveComponentFactory передается класс компонента, который мы хотим отобразить(просто передаем ссылку импортированную) ModalComponent тут это как раз тот компонент, который мы хотим отобразить(шаблон+компонент)
*через ViewChild получаем доступ к директиве у которой есть ViewContainerRef, с помощью которого и создаем контент на странице createComponent.
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   @ViewChild(ModalDirective, { static: false }) modalRef: ModalDirective;

   constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

   showModal() {
      let modalFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
      let modalCreated = this.modalRef.containerRef.createComponent(modalFactory);
      modalCreated.instance.title = 'Dynamic title!';
      modalCreated.instance.onCLose.subscribe(() => {
         this.modalRef.containerRef.clear();
      });
   }
}
*/


//?====================================================================================================
//? Создание мета тэгов
/*
? можно устанавливать title сайта динамически через Title, а также добавлять мета тэги
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
class Example{
   constructor(
      private title: Title,
      private meta: Meta,
   ) {
      this.title.setTitle('SomePageInApp');
      this.title.getTitle();
      this.meta.addTags([
         { name: 'keywords', content: 'angular, google, appcomponent' },
         { name: 'desciption', content: 'this is angular app' },
      ]);
   }
}
*/


//!====================================================================================================
//? Директива аттрибутная Directives
//? объявляются в модуле в declarations
//? https://angular.io/guide/attribute-directives
// ng g d <name> --skipTests

/*
*в конструктор директивы приходит 2 параметра:
*1ый это сам элемент, на который вешается директива, типа ElementRef
*2ой это renderer, который определяет тип устройства, и на основе этого выдает нам методы, которые мы можем использовать для данного элемента. Аргумент являемя типов Renderer2

*Чтобы слушать события с помощью директивы на элементе требуется @HostListener, в который передается название события, и может принять массив с аргументами и также '$event', а затем определяем сам метод с логикой, в метод сам приходит event нативный

*в директиву можно передавать значение через аттрибуты тэга на котором она применена. В данном примере помимо appStyle директивы, мы также прокидываем fontWeight и dStyles, которые принимаем через @Input в директиве, Но, без главного аттрибута appStyle эти 2 аттрибута будут бесполезны


*@HostBinding привязывает свойство элемента сразу к переменной, тут например color сразу привязали к переменной, и можно переменной присваивать цвет и он будет применяться к тэгу.


*Host свойство позволяет сразу навесить тут события и методы, а методы описать в самом классе, то есть не прописывать HostListener



*Шаблон
<div
   appStyle='red'
   fontWeight='900'
   [dStyles]="{border: '1px solid blue', fontWeight: 900}">
   lorem lorem lorem lorem
</div>

*Директива
@Directive({
   selector: '[appStyle]',
   host: {
      '(click)': 'onClick()',
      '(mouseover)': 'onHover()'
   },
})
export class StyleDirective {
   @Input('appStyle') color: string = ''
   @Input() fontWeight: string = '';
   @Input() dStyles: {border: string, fontWeight: number} = '';

   constructor(
      private el: ElementRef,
      private renderer: Renderer2
      ) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
   }

   @HostBinding("style.color") elColor: string = '';

   @HostListener('click', ['$event']) onClick(e:Event){
      console.log(e);
   }
   @HostListener('mouseover') onHover() {
      this.el.nativeElement.style.color = this.color;
      this.el.nativeElement.style.fontWeight = this.fontWeight;
   }
};
*/


//?====================================================================================================
//? Renderer2
//* setValue принимает узел, а не элемент, то есть напрямую див поменять нельзя, а только его текстовую нодуF



//?====================================================================================================
//? TemplateRef
//? https://angular.io/api/core/TemplateRef



//?====================================================================================================
//? ViewContainerRef
//? https://angular.io/api/core/ViewContainerRef
// *ViewContainerRef представляет доступ к элементу, на котором была вызвана директива, и разные методы по манипуляциям с данным компонентом предоставляет



//?====================================================================================================
//? ng-template
//? https://angular.io/guide/structural-directives#creating-template-fragments-with-ng-template
/*
? если мы обернули шаблон без директив в ng-template, то контент исчезнет внутри этого тэга

? ng-template тэг, который не будет появлять в DOM
? Пример шаблона, куда мы хотим поместить контент программно, мы указываем директиву modalRef, которая предоставляет ссылку на данный тэг с помощью ViewContainerRef
<ng-template modalRef></ng-template>
<nav class="navbar">
   <h1>Angular Dynamic Component</h1>
</nav>
*/



//?====================================================================================================
//? ngTemplateOutlet
/*
? В директиву можно передавать ссылку на шаблон, который будет отображаться с помощью этой директивы
*/



//?====================================================================================================
//?ngTemplateOutletContext
/*
? возможность задавать контекст для передаваемого шаблона в директиву ngTemplateOutlet, по дефолту, если не использовать эту директиву, то контекст шаблона будет использоваться тот, в котором был определен шаблон
*/



//?====================================================================================================
//? Структурная директива Directive
//? https://angular.io/guide/structural-directives

//* Структурная директива принимает 2 параметра и внутри используется @input set, в котором и происходит логика по действиям с директивой.

/*
@Directive({
   selector: '[someSelector]',
})
export class {
    consctructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
   ){}

   @Input('someSelector') set ifNot(value){
      if(!value){
         this.viewContainer.createEmbeddedView(this.templateRef);
      } else{
         this.viewContainer.clear();
      }
   }
}
*/



//!====================================================================================================
//? Пайпы Pipes
//? https://angular.io/guide/pipes
//? объявляются в declarations модуля
// ng g p <name> --skipTests 

//* Пайп наследуется от PipeTransform и реализует метод transform, который принимает значение и вторым аргументом необязательные параметры по работе с данными, и затем возвращает значение

//* pure указывает, будет ли пайм отслеживать динамические входные изменения данных или нет
/*
*Pipe
@Pipe({
   name: 'somePipe',
   pure: boolean
})
export class implements PipeTransform{
   transform(value: number, args?: any): string {
      return value.toString().replace(".", ",");
   }
}

*шаблон
<div>{{someValue | somePipe: arg1: arg2}}</div>
*/



//!====================================================================================================
//? Сервисы Services
//? регистрируются в providers в модуле, либо в самом сервисе в Injectable providedIn значении
//? https://angular.io/api/core/Injectable
//? https://angular.io/guide/dependency-injection
// ng g s <name> --skipTests

//* Сервисы это по сути база данных ангуляра, логика какая то общая.

//* Если сервис мы в родителе в модуле определили и тот же сервис используем в дочерних компонентах, то мы ссылаемся на один и тот же сервис и получается изменения будут синхронизированы, чтобы избежать этого нужно локально их регистрировать в компонентах, где хотим использовать. То есть, в компоненте, где хотим локально использовть сервис, мы объявляем его через providers, в других же случая он будет один и тот же для всего приложения.

//* Можно также инжектировать другие сервисы

/*
*Локальное объявление сервиса
@Component({
   providers: [<nameService>],
})

@Injectable({
   providedIn: 'root'
})
export class {
   constructor(
      private someOtherService: SomeOtherService
   ){}
}
*/



//!====================================================================================================
//? Роутинг Route Router

//? https://angular.io/guide/router

//? https://angular.io/api/router/RouterModule

//? https://angular.io/api/router/ExtraOptions

//? https://angular.io/api/router/Router

//? https://angular.io/api/router/Routes

//? https://angular.io/api/router/RouterOutlet


//? затем модуль роутов подключается в imports нужного нам модуля

/*
* Для удобства создается отдельный модуль роутинга, в который импортируем RouterModule, на котором вызывается метод forRoot или forChild(зависит какой это модуль), в этот метод передается массив обьектов, обьекты являются настройками путей и компонентов, которые должны отображаться, и вторым аргументом можно передать настройки этого модуля, например там можно указать тип ленивой загрузки. Если все это в модуле реализовано, то необходимо экспортировать после импорта RouterModule.
* И данный модуль роутинга следует подключить в модуль, которому он приналежит через imports поле в NgModule директиве

* Чтобы роутинг заработал, в шаблоне выбираем место где хотимм отображать страницы и там прописываем тэг <router-outlet></router-outlet>, angular сам будет туда подставлять нужные компоненты в зависимости от url.


* Типичный обьект роутинга содержит:
* path - путь по которому будет доступен на сайте через url, также можно добавить params, которые можно будет потом считать в коде  можно указать '**', что означает, что будет показываться какой то компонент, если адрес не совпал
* component - имя компонента
* canActivate, canActivateChild- массив защитников(guards), в которых прописана логика по защите этой страницы, сможем мы ее при определенных условия открывать или нет
* children - массив таких же обьектов, то есть это внутренняя маршрутизация внутри этого роутинга
* redirectTo - редирект на url определенный
*loadChildren - ленивая загрузка модуля, указывается путь и в промисе достаем имя модуля из data

* для удобства создается переменная routes типа Routes - это массив обьектов который передается в RouterModule.

*Вторым агрументом в forRoot метод передается обьект настроек, где можно изменить стратегию загрузки модулей(PreloadAllModules - загружает все модули, но только после того, как загрузятся самые необходимый для текущей страницы файлы. NoPreloading - по умолчанию)

*модуль роутов
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreloadAllModules } from "@angular/router";
import { <SomeComponent> } from "./about/about.component";
import { <SomeComponent2> } from "./home/home.component";
import { <SomeComponent2Child> } from "./posts/posts.component";

let routes: Routes = [
   { path: '', component: <SomeComponent> },
   {
      path: 'about', component: <SomeComponent2>,
      canActivate: [AuthGuardService],
      loadChildren: ()=>import('./index.ts').then(m => m.ModuleName),
      resolve: {
         post: SomeResolver,
      }
      children: [
         { path: 'extra', component: <SomeComponent2Child>, canActivateChild: [AuthGuardService] },
      ],
   },
   { path: 'posts', component: <SomeComponent>, canActivate: [AuthGuardService], },
   { path: 'posts/:id', component: <SomeComponent> },
]
@NgModule({
   imports: [RouterModule.forRoot(routes, {
      preloadingStratefy: PreloadAllModules,
   })],
   exports: [RouterModule],
})
export class AppRoutingModule {}

*шаблон
<div>
   <router-outlet></router-outlet>
</div>
*/


//?====================================================================================================
//? ROUTERLINK 
//? https://angular.io/api/router/RouterLink

//* в шаблоне на ссылки вместо href вешается директива <a [routerLink]="['/about'] ">About</a>, вторым параметром принимает

//* routerLinkActive='active' вешаем активный класс при совпадении
//* [routerLinkActiveOptions]="{exact:true} также можно передать дополнительную директиву, которая будет настраивать условия срабатывания routerLinkActive, например тут: при точном совпадении url.
//* QUERYPARAMS
//* [queryParams]="{showIdsOfPosts: true} можно дополнительно устанавливать query параметры для ссылки, которые добавятся к url.
//* помимо них можно установить fragment, это hash



//?====================================================================================================
//? ПРОГРАММНОЕ ИЗМЕНЕНИЕ СТРАНИЦЫ МАРШРУТИЗАЦИИ
//* можно также переходить программно на разные страницы, в том компоненете, где мы хотим реализовать програмный прыжок, в шаблоне вешаем обработчки события на метод, а в самом классе мы создаем поле типа Router, и вызываем this.router.navigate(['/someurl']) вторым аргументом может принимать параметры, также можно туда добавить queryParams
/*
import {Router}
class Example{
   constructor(private router: Router)
   goto(){this.router.navigate(['/someurl'])}
}
*/


//?====================================================================================================
//? ЧТЕНИЕ АДРЕСНОЙ СТРОКИ
//? ActivatedRoute
//? https://angular.io/api/router/ActivatedRoute

//? https://angular.io/api/router/ParamMap

//? import { ActivatedRoute, Router, Params } from '@angular/router';

//* чтобы считываеть информацию из адресной строки, в компоненте нужен route типа ActivatedRoute, в котором можно получить доступ к параметрам и многому другому.
//* Params это стрим, на который нужно подписаться, он содержит все параметры адресной строки :
/*
class {
   constructor(route: ActivatedRoute){}
   ngOnInit(){
      this.route.params.subscribe((params: Params)=>{

      });
   }
}
*/


//?====================================================================================================
//? Обработка ошибок
//* для обработки ошибок можно создать страницу, куда делать редирект, если не найдена страница

//* ** означает все что угодно, чего нет в приложении, путей которых нет, будет ссылать сюда, и от сюда уже редирект делать на error.
/*
   { path: 'error', component: ErrorComponent },
   { path: '**', redirectTo: 'error' },
*/



//?====================================================================================================
//? Guard
//? https://angular.io/api/router/CanActivate

//? https://angular.io/api/router/CanActivateChild

//? https://angular.io/api/router/CanDeactivate

//? https://angular.io/api/router/CanLoad

//* Guard нужны для защиты определенных роут маршрутов, запрещаем допуск к ним при определенных условиях 

//* canActivate принимает текущий активный route и state.
/*
*Guard
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppAuthService } from './services/auth-service.service';

@Injectable({
   providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
   constructor(private authService: AppAuthService) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.getAutedStatus()
         .then(isAuth => {
            if (isAuth) {
               return true;
            } else {
               return false;
            }
         });
   }

   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
   }
}
*/


//?====================================================================================================
//? Resolver
//? https://angular.io/api/router/Resolve
//?Подключается в routes, в обьект роута, в значение resolve.

//* Resolver автоматически сработает при совпадении url строки, где можно сделать определенную логику, а затем в компоненте, где был применен resolver, можно получить значение его с помощью route.data
//* resolver нужен, чтобы как бы предзагрузить страницу, контент ее, прежде чем открыть ее, то есть, мы нажали на ссылку, контент начал грузиться, и как только он готов, мы переходим на эту страницу
//* страница не откроется, пока resover не отработает

/*
*resolver
@Injectable({
   providedIn: 'root'
})
export class SomeResolver implements Resolve<any> {
   constructor(
      private someService: SomeService,
   ){}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | any {
      return this.someService.getById(+route.params.id);
   }
}

*компонент, где его применили, post в данном случае приходит из route, т.к. в routes настройках в обьекте мы указали post значение, которое вернет resolver(смотри выше про роутинг, там будет инфа)
class implements OnInit{
   constructor(private route: ActivatedRoute,){}

   ngOnInit() {
      this.route.data.subscribe(data=>{
         this.post = data.post;
      })
   }
}
*/



//!====================================================================================================
//? Модули Modules

/*
import {CommonModule} используется в других модулях, чтобы не импротировать BrowserModule второй раз, т.к. нельзя
import {BrowserModule, FormsModule, HttpClientModule}

//* Ошибка про роуты: если у нас 2 разных модуля, то роуты нужно разделить по модулям, чтобы они относились каждый к своему, иначе будет ошибка. Но в дочернем модуле, уже вместо RouterModule.forRoot() вызывается RouterModule.forChild(), а затем из дочернего модуля также экспортировать RouterModule, чтобы главный модуль знал про них.

@NgModule({

})
export class{}

*declarations - пайпы, компоненты, директивы
*imports - другие модули, которые мы хотим использовать в этом модуле
*exports - экспорт сущностей, которые должны быть доступны вне этого модуля(можно экспортировать что угодно)
*bootstrap - должен быть только один в приложении и содержит название главного компонента приложения App
*providers - сервисы (но можно в самом сервисе в providedIn зарегать его)
*entryComponents - список компонентов, которые будут в проекте, но их нет в шаблонах, то есть они добавляются динамически

//* ленивая загрузка! Ни в коем случае модуль не подключать к главному модудулю, если мы хотим его лениво загружать
*/



//!====================================================================================================
//? Forms Формы
/*
*В компоненте создается форма, через FormGroup при инициализации. Каждый инпут, который мы хотим получить мы передаем в обьект настроек при инициализации формы, ключ - это имя которое мы хотим, чтобы было у поля, и через FormControl создаем поле в классе, можно передать инициализирующее значение. В FormControl вторым аргументом передается массив валидаторов.

*В шаблоне форма связывается через [formGroup]="<name form from class>" и вешается обработчик submit, каждый инпут связывается с классом через formControlName="<name formControl from class>" и на каждый инпут формы, который помечен formControlName вешаются автоматически классы ангуляра

*Можно создавать подгруппы также через FormGroup, только в шаблоне уже эта группа указывается через formGroupName

*компонент
import { FormsModule, ReactiveFormsModule } from '@angular/forms' в модуле
export class AppComponent {
   form: FormGroup;

   constructor() { }

   ngOnInit() {
      this.form = new FormGroup({

         email: new FormControl('', [
            Validators.email,
            Validators.required,
            MyValidator.restrictedEmail,
         ], [MyValidator.isFreeEmail,]),

         password: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
         ]),

         address: new FormGroup({
            country: new FormControl('by'),
            city: new FormControl('', Validators.required),
         }),

         skills: new FormArray([]),
      });
   }

   submit() {
      console.log(this.form);
      this.form.reset();
   }

   setCapitalByClick() {
      let cityMap: any = {
         ru: 'Москва',
         ua: 'Киев',
         by: 'Минск',
      };
      let city = cityMap[this.form.get('address')?.get('country')?.value];
      this.form.patchValue({
         address: { city }
      });
   }

   addSkill() {
      let control = new FormControl('', Validators.required);
      (<FormArray>this.form.get('skills')).push(control);
   }

   removeSkill(e: any) {
      this.form.get('skills').removeAt(e);
   }
}

*шаблон
<div class="container">

    <form class="card" [formGroup]="form" (ngSubmit)="submit()">
        <h1>Angular Forms</h1>

        <div class="form-control">
            <label>Email</label>
            <input formControlName="email" type="text" placeholder="Email">
            <div *ngIf="form.get('email')!.errors && form.get('email')!.touched" class="validation">

                <p *ngIf="form.get('email')!.errors!.email">Введите Email корректно</p>
                <p *ngIf="form.get('email')!.errors!.required">Поле обязательно</p>
                <p *ngIf="form.get('email')!.errors!.emailRestricted">Email {{form.get('email').value}} запрещен</p>
                <p *ngIf="form.get('email')!.errors!.isFreeEmail">Email {{form.get('email').value}} уже занят</p>
            </div>
        </div>

        <div class="form-control">
            <label>Пароль</label>
            <input formControlName="password" type="password" placeholder="Пароль">

            <div *ngIf="form.get('password')!.errors && form.get('password')!.touched" class="validation">
                <p *ngIf="form.get('password')!.errors!.required">Поле обязательно</p>
                <p *ngIf="form.get('password')!.errors!.minlength">
                    Минимальная длина: {{form.get('password')!.errors!.minlength.requiredLength}} символов
                </p>
            </div>
        </div>

        <div class="card" formGroupName="address">
            <h2>Адрес</h2>

            <div class="form-control">
                <label>Страна</label>
                <select formControlName="country">
                    <option value="ru">Россия</option>
                    <option value="ua">Украина</option>
                    <option value="by">Беларусь</option>
                </select>
            </div>

            <div class="form-control">
                <input type="text" formControlName="city">
            </div>
            <button class="btn" type="button" (click)="setCapitalByClick()">Выбрать столицу</button>
        </div>

        <div class="card" formGroupName="skills">
            <h2>Ваши навыки</h2>
            <button (click)="addSkill()" class="btn" type="button">Добавить умение</button>
            <div *ngFor="let item of form.get('skills')['controls']; let i = index" class="form-control">
               <label>Умение {{ i + 1 }}</label>
               <input [formControlName]="i" type="text">
               <span (click)="removeSkill(i)" style="cursor: pointer;">&times;</span>
            </div>
        </div>

        <button class="btn" type="submit" [disabled]="form.invalid || form.status === 'PENDING'">Отправить</button>
    </form>
</div>
*/


//?====================================================================================================
//? Кастомные валидаторы
//* Метод класса принимает control и возвращает обьект, с ошибкой, если есть ошибка какая то, либо null, если все хорошо. Этот обьект будет помещен в контрол, в ключ errors, откуда можно будет получить это значение ошибки по ключу.
/*
*класс
class MyValidators{
   static restrictedEmails(control: FormControl){
      if([d@mail.ru, dfads@mail.ru].includes(control.value)){
         return {restrictedEmail: true};
      }
      return null;
   }
}

*шаблон
<div *ngIf="gorm.get('email').errors.restrictedEmail">Показать ошибку</div>
*/


//?====================================================================================================
//? Ассинхронные валидаторы
//* Метод класса принимает control и возвращает обьект, с ошибкой, если есть ошибка какая то, либо null, если все хорошо. Этот обьект будет помещен в контрол, в ключ errors, откуда можно будет получить это значение ошибки по ключу. Передаются они 3им параметром в formcontrol
/*
*класс
class MyValidators{
   static asyncValidator(control: FormControl){
      return new Promise((resolve)=>{
         if(this.service.isLoginFree()){
            resolve(null);
         } else{
            resolve({loginIsNotFree: true});
      })
   }
}

*шаблон
<div *ngIf="gorm.get('email').errors.restrictedEmail">Показать ошибку</div>
*/


//?====================================================================================================
//? FormGroup
//? https://angular.io/api/forms/FormGroup
//* Обьединений полей формы в группы, можно использовать как для всей формы, так и для создания подгрупп формы


//?====================================================================================================
//? FormControl
//? https://angular.io/api/forms/FormControl
//* Создает контрол для поля формы.
//* В конструктор передается начальное значение, массив валидаторов, и массив ассинхронных валидаторов.


//?====================================================================================================
//? FormArray
//? https://angular.io/api/forms/FormArray
//* Для создания полей группы, но они создаются без имени(будут в массиве), также используется для динамического создания полей формы
/*
class {
   this.groupArray = new FormArray([]);

   onAdd(){
      this.groupArray.push(new FormControl('', Validators.required));
   }
}
*/


//?====================================================================================================
//? AbstractControl
//? https://angular.io/api/forms/AbstractControl#markAsPending



//!====================================================================================================
//? NgModel Custom
//? https://angular.io/api/forms/ControlValueAccessor
/*
*

*writeValue принимает входящее значение от родителя передаваемое в [(ngModel)]
*registerOnChange функция срабатываемая при изменении state и автоматически делает аутпут наверх, принимает функцию, которую нужно переопределить методу класса этого, чтобы делать аутпут наверх. То есть тут, при изменении state через функцию setState, мы в ней вызываем функцию onChange, которой присвоили функцию из registerOnChange, и теперь имеем возможность синхронизированно изменять значения и в родителе и в ребенке.

*ngModelChange вызывается в компоненте, где был навешан ngModel и срабатывает при любом изменении ngModel.

*компонент дочерний
let VALUE_ACCESSOR: Provider = {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(()=>SomeClass),
   nulti: true,
}
@Component({
   selector: 'app-some',
   providers: [
      VALUE_ACCESSOR,
   ]
})
export class Switch implements ControlValueAccessor {
   state = 'off';
   private onChange(value) {
   }
   setState(value) {
      this.state = value;
      this.onChange(value);
   }

   registerOnChange(fn) {
      this.onChange = fn;
   }
   writeValue(value) {
      this.state = value;
   }
   registerOnTouched() {
   }
   setDisabledState() {
   }
}
<button (click)="setState(true)">On</button>
<button (click)="setState(false)">On</button>

*компонент родительский
class{
   someState = 'off';

   onModelChange(){
      doSomething...
      console.log(someState);
   }
}
<div>{{someState}}</div>
<app-some [(ngModel)]="someState" (ngModelChange)="onModelChange()"></app-some>
*/



//!====================================================================================================
//? HttpClientModule
//? https://angular.io/api/common/http/HttpClientModule
//? https://angular.io/guide/http
/*
*Сервисы подключается в модуле в providers. HttpClientModule подключается в imports. Работа с запросами осуществляется через HttpClient

*http возвращает стримы, на которые можно подписаться и обрабатывать, в метод подписки приходит 3 функции, первая это когда успешно все завершилось, вторая - ошибка, третья - когда стрим выполнен успешно.


import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, delay, map, tap } from 'rxjs/operators';

export interface TodoListItem {
   completed: boolean
   id?: number
   title: string
}

@Injectable({
   providedIn: 'root',
})
export class AppTodosService {

   url = 'https://jsonplaceholder.typicode.com/todos/';

   constructor(private http: HttpClient) { }

   load(): Observable<TodoListItem[]> {
      return this.http.get<TodoListItem[]>(`${this.url}`, {
         params: new HttpParams().set('_limit', '3'),
         observe: "response",
      }).pipe(
         map(item => item.body),
         delay(2000),
      );
   }

   add(body: TodoListItem): Observable<TodoListItem> {
      return this.http.post<TodoListItem>(this.url, body, {
         withCredentials: true,
         responseType: "json",
         headers: new HttpHeaders({
            'MyCustomHeader': (Math.random() * 1000).toString(),
            'SecondCustomHeader': 'some text',
         })
      });
   }

   remove(id: number) {
      return this.http.delete(`${this.url} ${id}}`, {
         observe: "events"
      }).pipe(
         tap(event => {
            console.log(event);
         }),
      );
   }

   complete(item: TodoListItem) {
      return this.http.put(`${this.url}${item.id}`, { ...item, completed: true })
         .pipe(
               catchError(error => {
                  return throwError(error.message);
               }),
         );
   }
}
*/


//?====================================================================================================
//? Interceptor Интерсептор
//? https://angular.io/api/common/http/HttpInterceptor
//* Перехват запросов, их регистрируют в providers в модуле, но нужно создать для этого переменную, как в кастомной ngModel.

//? https://angular.io/api/common/http/HttpRequest
//? https://angular.io/api/common/http/HttpResponse
//? https://angular.io/api/common/http/HttpHandler

/*
class someClass implements HttpInterceptor{
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

      let cloned = req.clone({
         headers: req.headers.append('MyHeader', 'some token'),
      });

      return next.handle(cloned);
   }
}

*эта переменная передается в модуле в providers
let INTERCEPTOR_PROVIDER: Provider = {
   proveide: HTTP_INTERCEPTORS,
   useClass: someClass,
   multi: true,
}
*/


//?====================================================================================================
//? https://angular.io/api/common/http/HttpClient
//? HttpClient
//* Работа с http запросами.


//?====================================================================================================
//? https://angular.io/api/common/http/HttpParams
//? HttpParams
//* Добавление query параметров.


//?====================================================================================================
//? HttpHeaders
//? https://angular.io/api/common/http/HttpHeaders
//* Параметры конфигурации заголовков, можно добавлять headers.



//!====================================================================================================
//? RXJS
//? https://angular.io/guide/rx-library
//? https://rxjs-dev.firebaseapp.com/guide/overview

//* import { interval, Subscription} from 'rxjs'
//* import { } from 'rxjs/operators'

//? Суть работы: это оборачивание какого то кода в rxjs стрим, на который можно подписаться, отписаться т.д., это что то похожее на promise.

//? Стримы на конце должны иметь знак доллара(просто договоренность программистов).

//? мы создаем стрим, и в каком то месте любом подписываемся на него, и на каждое изменение будет срабатывать метод подписки, а затем можно отписаться. Отписываться следует, например, когда мы уходим со страницы, на которой установили таймер, тогда в методе жизненного цикла следует отписаться от стрима.

//? У стрима можно вызвать метод pipe, который принимает операторы rxjsa, они служат для обработки данных стрима.
/*
export class AppComponent {
    subscribtion: Subscription;
    constructor() {
        let intervalStrim$ = interval(1000);
        this.subscribtion = intervalStrim$.subscribe((value) => {
            console.log(value);
        });
        setTimeout(() => {
            this.subscribtion.unsubscribe();
        }, 3000);
    }
}
*/


//?====================================================================================================
//? Создание своего стрима
//? import { interval, Observable, Subscription } from 'rxjs'
//? Создается стрим через конструктор, который принимает callback а затем на этот стрим можно подписаться, на него , в отличии от subject можно только подписаться, а диспатчить значения можно только внутри метода консруктора observable.
/*
let stream$ = new Observable((observe) => {
    setTimeout(() => {
        observe.next(1);
    }, 500)

    observe.error();
    observe.complete();
});
*/

//? next - диспатч нового action
//? error - диспатч ошибки
//? complete - завершение стрима


//? Подписка на стрим принимает 3 колбэка, первый - при успешном выполнении, 2 - при ошибке, 3 - при завершении стрима(completed)
//? метод completed вызывается только, когда стрим завершился без ошибок
/*
stream$.subscribe(
    (res) => {
        console.log(res);
    },
    (error) => {
        console.log(error);
    }),
    () => {
        console.log('завершен стрим')
    };
)

*альтернативная запись
stream$.subscribe({
    next(val){},
    error(val){},
    complete(val){},
})
*/


//? of
//? https://rxjs-dev.firebaseapp.com/api/index/function/of


//?====================================================================================================
//? Subject
//? https://rxjs-dev.firebaseapp.com/api/index/class/Subject
//* главное отличие от observable, то, что можно диспатчить событие прямо в переменню стрима, из любого места.
/*
let stream$ = new Subject();
stream$.subscribe(value => console.log(vakue));
stream$.next();
*/


//?====================================================================================================
//? BehaviorSubject
//? https://rxjs-dev.firebaseapp.com/api/index/class/BehaviorSubject
//* тот же Subject, только принимает начальное значение, которое будет сразу отправлено в subscribe.
/*
let stream$ = new BehaviorSubject('helloworld!');
stream$.subscribe(value => console.log(vakue));
stream$.next(1);
*/


//?====================================================================================================
//? ReplaySubject
//? https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject
//* он сохраняет предыдущие значение, то есть, если мы несколько раз задиспатчили значения, но не подписались на них, то при подписке они все появятся в подписке
//* принимает 3 параметра
//? 1 - размер буфера, сколько данных сохранит до подписки
//? 2 - сколько времени храняться данные
//? 3 - какое то планировщик
/*
let stream$ = new ReplaySubject('helloworld!');
stream$.next(1);
stream$.next(1);
stream$.next(1);

stream$.subscribe(value => console.log(vakue));
*/


//?====================================================================================================
//? Operators Операторы

//? map - трансформация значения стрима

//? filter - фильтрация значения стрима

//? tap - добавления сайдэффектов, существует в основном для дебага

//? take - принимает число, и останавливает подписку на стрим, то есть когда число срабатываний подписки будет равно аргументу, то подписка закончится 

//? takelast - принимает число, и когда мы остановим стрим, этот метод нам вернет последние срабатывания подписки равное аргументу 

//? takewhile - принимает условие и будет срабатывать подписка, пока это условие верно

//? scan - тот же reduce(из нативного), принимает колбэк и возвращает аккумулированое значение

//? reduce - аккумулирует все значение подписки сразу после завершения подписки, пока она есть, он не будет отрабатывать

//? switchMap - принимает значение из прошлого стрима, и должен вернуть новый стрим
/*
fromEvent(document, 'click').pipe(
    switchMap((event)=>{
        return interval(3000),
    })
).subscibe(()=>{});
*/

//? forkJoin это не оператор, это просто функция, которая принимает массив стримов, затем возвращает его и можно подписаться на него. По сути работа такая же как и Promise.all



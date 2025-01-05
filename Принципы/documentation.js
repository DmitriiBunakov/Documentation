//!=============================================================================
//? /Шаблоны Паттерны проектирования/
// https://blogs.halodoc.io/commonly-used-design-patterns-in-angular/
/*
**
***
****
*****/
//?=============================================================================
//? /MVC/Model View Controller/
//? model -> view -> user -> controller -> model
//? model - управление данными и бизнес логикой
//? view - интерфейс для пользователя
//? controller - направляет команды от интерфейса(реагирование на действия пользователя) к моделям и наоборот

//? на примере Angular - model - service/view - template/ controller - components
/*
**
***
****
*****/
//?=============================================================================
//? /MVP/Model view presenter/
//? model <-> presenter <-> view
//? model события в presenter
//? presenter обновляет view или события в model
//? view события в presenter

//? похоже на MVC, только тут presenter выступает в виде посредника
/*
**
***
****
*****/
//?=============================================================================
//? /MVVM/Model view viewmodel/
//? model бизнес логика
//? view интерфейс
//? viewmodel компоненты
/*
**
***
****
*****/
//?=============================================================================
//? /Lazymodules/Ленивые модули/Modules/
//? Разбиение на модули для разбивки и переиспользования
//? Разбиение приложения на части и загрузка по требованию
/*
**
***
****
*****/
/*
**
***
****
*****/
//!=============================================================================
//?=============================================================================
//? /Dependency Injection(DI)/Dependency Inversion/
//? Паттерн внедрения зависимостей, когда класс должен работать с какими то сущностями, но он не создает экзмемпляры внутри себя, а принимает их как аргументы, то есть работает с абстракцией(5 принцип solid)
/*
**
***
****
*****/
//?=============================================================================
//? Singleton
//? Когда на приложение будет создан один экземпляр класса, например база данных. Например если создадим второй экземпляр, то у нас будет 2 подключения, а это нам уже не нужно.

//? конструктор приватный
//? и метод статический генерирует экзмепляр и кэширует и потом возвращает старый
/*
class A {
    private static instance: A;

    constructor() {
        if (A.instance) return A.instance;
        A.instance = this;
    }
}
const a = new A();
const b = new A();
*/
/*
**
***
****
*****/
//?=============================================================================
//? /Strategy/Cтратегия/
// https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm
// https://refactoring.guru/design-patterns/strategy
//? Поведенческий шаблон проектирования, при котором класс(контекст), в зависимости от переданных данных будет вызвать тот или иной класс(стратегию), которая подходит для какого то конкретного случая, и вся логика обработки данных должна содержаться в стратегии, то есть, например - операция сложения - 1ая стратегия - это класс, отвечающий за работу с цифрами, а другая стратегия будет отвечать за работу со строками

//? пример - это async pipe в angular - при подписке, будут вызваны одни и те же методы интерфейса, но конкретная реализация для промиса или стрима - отличается и будет определена в рантайме
/*
**
***
****
*****/
//?=============================================================================
//? /Decorator/Декоратор/
//? Класс обертка, которая навешивает дополнительную логику и вызывает исходные методы
/*
Интерфейс Order
typescript
Копировать код
interface Order {
  getTotalAmount(): number;
}
Конкретный компонент SimpleOrder
typescript
Копировать код
class SimpleOrder implements Order {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  getTotalAmount(): number {
    return this.amount;
  }
}
Декораторы для скидок
Процентная скидка
typescript
Копировать код
class PercentageDiscountDecorator extends MessageDecorator {
  private percentage: number;

  constructor(order: Order, percentage: number) {
    super(order);
    this.percentage = percentage;
  }

  getTotalAmount(): number {
    return this.message.getTotalAmount() * (1 - this.percentage / 100);
  }
}
Скидка на акцию
typescript
Копировать код
class PromotionDiscountDecorator extends MessageDecorator {
  private promotionAmount: number;

  constructor(order: Order, promotionAmount: number) {
    super(order);
    this.promotionAmount = promotionAmount;
  }

  getTotalAmount(): number {
    return this.message.getTotalAmount() - this.promotionAmount;
  }
}
Клиентский код
typescript
Копировать код
const order = new SimpleOrder(1000);
const orderWithPercentageDiscount = new PercentageDiscountDecorator(order, 10);
const orderWithPromotionDiscount = new PromotionDiscountDecorator(orderWithPercentageDiscount, 100);

console.log(orderWithPromotionDiscount.getTotalAmount());  // 800
В этом примере мы добавляем скидки к заказу с помощью декораторов, не изменяя исходную логику работы с заказом.
*/
/*
**
***
****
*****/
//?=============================================================================
//? /Factory/Factory method/Фабрика/
//? Функия порождающая в зависимости от переданных данных разные обьекты, также эту функцию в другой фабрике можно переопределить, чтобы для определенного типа создавался другой обьект, но они оба должны иметь общий интерфейс или абстрактный класс как базу. То есть first создавал сначала A, а потом метод second будет создавать класс B, но A/B должны иметь общий интерфейс
/*
**
***
****
*****/
//?=============================================================================
//? /Abstract factory/Абстрактная фабрика/
// https://refactoring.guru/ru/design-patterns/abstract-factory
//? паттерн - при котором приложение в зависимости от параметров создает ту или иную фабрику, которые в свою очередь создают Class A/Class B каждая соответственно, которые наследуются от общего интерфейса

//? Фабрики все наследуются от общего интерфейса и создается та или иная
//? Каждая фабрика в свою очередь создает тот или иной обьект, которые между собой тоже имеют общий интерфейс

/*
Пример Абстрактной фабрики на TypeScript
Предположим, мы создаём UI-компоненты для двух платформ: iOS и Android. Каждый компонент (например, кнопка и поле ввода) должен иметь свою платформенно-зависимую реализацию.

1. Абстрактная фабрика
typescript
Копировать код
// Интерфейс фабрики
interface UIComponentFactory {
  createButton(): Button;
  createInput(): Input;
}

// Интерфейсы для продуктов
interface Button {
  render(): string;
}

interface Input {
  render(): string;
}
2. Конкретные фабрики
typescript
Копировать код
// iOS-реализация компонентов
class IOSButton implements Button {
  render(): string {
    return 'Кнопка в стиле iOS';
  }
}

class IOSInput implements Input {
  render(): string {
    return 'Поле ввода в стиле iOS';
  }
}

class IOSUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new IOSButton();
  }

  createInput(): Input {
    return new IOSInput();
  }
}

// Android-реализация компонентов
class AndroidButton implements Button {
  render(): string {
    return 'Кнопка в стиле Android';
  }
}

class AndroidInput implements Input {
  render(): string {
    return 'Поле ввода в стиле Android';
  }
}

class AndroidUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new AndroidButton();
  }

  createInput(): Input {
    return new AndroidInput();
  }
}
3. Использование
typescript
Копировать код
// Клиентский код, работающий с фабрикой
function renderUI(factory: UIComponentFactory): void {
  const button = factory.createButton();
  const input = factory.createInput();

  console.log(button.render());
  console.log(input.render());
}

// Пример выбора фабрики
const platform = 'iOS'; // или 'Android'

const factory: UIComponentFactory =
  platform === 'iOS' ? new IOSUIComponentFactory() : new AndroidUIComponentFactory();

renderUI(factory);
Вывод для iOS:

Кнопка в стиле iOS
Поле ввода в стиле iOS
Вывод для Android:

Кнопка в стиле Android
Поле ввода в стиле Android
/
*/
/*
**
***
****
*****/
//?=============================================================================
//? /Builder/Строитель/
//? Создание обьекта через вызовы функций и в конечно итоге вызов build метода
//? Удобен когда много параметров, и мы хотим по условиям добавлять данные/модифицировать их, а также внутри билдера могут быть проверки на настраиваемые данные
//? Строитель нужен, если есть сложная логика создания
/*
Реализация с использованием Строителя
1. Класс Report

typescript
Копировать код
class Report {
  title?: string;
  subtitle?: string;
  data?: any[];
  exportFormat?: 'PDF' | 'Excel' | 'HTML';
  metadata?: { author: string; date: Date; version?: string };

  constructor(builder: ReportBuilder) {
    this.title = builder.title;
    this.subtitle = builder.subtitle;
    this.data = builder.data;
    this.exportFormat = builder.exportFormat;
    this.metadata = builder.metadata;
  }

  generate(): void {
    console.log(`Генерация отчёта: ${this.title}`);
    if (this.subtitle) console.log(`Подзаголовок: ${this.subtitle}`);
    if (this.data) console.log(`Данные: ${JSON.stringify(this.data)}`);
    if (this.exportFormat) console.log(`Формат экспорта: ${this.exportFormat}`);
    if (this.metadata)
      console.log(
        `Метаданные: Автор - ${this.metadata.author}, Дата - ${this.metadata.date}`
      );
  }
}
2. Класс ReportBuilder

typescript
Копировать код
class ReportBuilder {
  title?: string;
  subtitle?: string;
  data?: any[];
  exportFormat?: 'PDF' | 'Excel' | 'HTML';
  metadata?: { author: string; date: Date; version?: string };

  setTitle(title: string): ReportBuilder {
    this.title = title;
    return this;
  }

  setSubtitle(subtitle: string): ReportBuilder {
    this.subtitle = subtitle;
    return this;
  }

  setData(data: any[]): ReportBuilder {
    this.data = data;
    return this;
  }

  setExportFormat(format: 'PDF' | 'Excel' | 'HTML'): ReportBuilder {
    this.exportFormat = format;
    return this;
  }

  setMetadata(author: string, date: Date, version?: string): ReportBuilder {
    this.metadata = { author, date, version };
    return this;
  }

  build(): Report {
    return new Report(this);
  }
}
3. Использование

typescript
Копировать код
// Простой отчёт
const simpleReport = new ReportBuilder()
  .setTitle('Простой отчёт')
  .setData([{ id: 1, value: 100 }])
  .setExportFormat('PDF')
  .build();

simpleReport.generate();

console.log('---');

// Сложный отчёт
const detailedReport = new ReportBuilder()
  .setTitle('Сложный отчёт')
  .setSubtitle('Анализ данных за год')
  .setData([{ month: 'January', sales: 1200 }, { month: 'February', sales: 1500 }])
  .setExportFormat('Excel')
  .setMetadata('John Doe', new Date(), '1.0')
  .build();

detailedReport.generate();
*/
/*
**
***
****
*****/
//?=============================================================================
//? /Prototype/Прототип/
//? Создание копии обьекта через вызов метода clone, внутри может быть любая логика модифицирующая новый обьект
/*
**
***
****
*****/
//?=============================================================================
//? /Singleton/Одиночка/
//? Единственный экземпляр класса для всего приложения, новый вызов конструктора вернет тот же самый инстанс, а также прямой вызов конструктора невозможен
/*
class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`Log: ${message}`);
  }
}

// Пример использования в разных частях программы
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2); // true, оба ссылаются на один и тот же объект
В этом примере, независимо от того, сколько раз вы вызываете Logger.getInstance(), всегда будет возвращаться один и тот же экземпляр, и все сообщения будут записываться в одном месте.

*/
/*
**
***
****
*****/
//?=============================================================================
//? /Composition/Композиция/
//? Достижение какой то логики благодоря объединению более мелких функций, классов между собой, позволяет более легко и гибко писать код, в отличии от того же наследования
/*
**
***
****
*****/
//?=============================================================================
//? /Model-adapter/Adapter/Адаптер/
//? Модель адаптер - преобразователь данных, например с бэкенда нам пришли данные и мы прогоняем их через модель адаптер для преобразования в нужный нам вид

//? Либо есть какие то сущности, у которых нам нужно вызывать методы, но они отличаются в названиях, для этого мы пишем для адаптер с методом, который будет вызывать нужный метод у сущностей
/*
1. Интерфейсы баз данных
typescript
Копировать код
// API для MySQL
class MySQLDatabase {
  query(sql: string): string {
    return `Выполняется запрос SQL для MySQL: ${sql}`;
  }
}

// API для MongoDB
class MongoDBDatabase {
  find(query: string): string {
    return `Выполняется запрос MongoDB: ${query}`;
  }
}
2. Унифицированный интерфейс для работы с базами данных (Target)
typescript
Копировать код
interface Database {
  execute(query: string): string;
}
3. Адаптеры для различных баз данных
typescript
Копировать код
// Адаптер для MySQL
class MySQLDatabaseAdapter implements Database {
  private mysql: MySQLDatabase;

  constructor(mysql: MySQLDatabase) {
    this.mysql = mysql;
  }

  execute(query: string): string {
    return this.mysql.query(query);
  }
}

// Адаптер для MongoDB
class MongoDBDatabaseAdapter implements Database {
  private mongoDB: MongoDBDatabase;

  constructor(mongoDB: MongoDBDatabase) {
    this.mongoDB = mongoDB;
  }

  execute(query: string): string {
    return this.mongoDB.find(query);
  }
}
4. Клиентский код для выполнения запросов
typescript
Копировать код
function executeQuery(database: Database, query: string) {
  console.log(database.execute(query));
}

// Создание экземпляров адаптеров для разных баз данных
const mysqlAdapter = new MySQLDatabaseAdapter(new MySQLDatabase());
const mongoDBAdapter = new MongoDBDatabaseAdapter(new MongoDBDatabase());

// Выполнение запросов через один унифицированный интерфейс
executeQuery(mysqlAdapter, "SELECT * FROM users");
executeQuery(mongoDBAdapter, "db.users.find({})");
*/
/*
**
***
****
*****/
//?=============================================================================
//? /Composite/Композит/
//? Древовидная структура, где у всех участников есть общий интерфейс
//? в основном есть "простый" участники, которые не имеют детей, и "сложные" у которых есть дети а также дополнительно есть методы добавления детей и тд
//? например есть работник и менеджер, у них есть общие методы, но у менеджера есть работники в подчинении
/*
**
***
****
*****/
//?=============================================================================
//? /Flyweight/Летучий объект/Легкий/
//? Когда для одинаковых обьектов используются одни и те же данные, которые они должны между собой использовать, эти создаются за пределеами обьектов и передаются в них как аргумент
/*
**
***
****
*****/
//?=============================================================================
//? /Command/Команда/
//? используется для инкапсуляции запроса в виде объекта, что позволяет параметризовать объекты с операциями, откладывать выполнение запросов или поддерживать отмену операций

//? интерфейс Command execute/undo методы
//? какие то функции
//? реальные команды, которые мы будет выполнять, добавлять в очередь или удалять, реализации интерфейса Command
//? Invoker - сущность которая хранит комманды, а также может их выполнять
/*
// 1. Интерфейс команды
interface Command {
  execute(): void;
  undo(): void; // Опционально для реализации отмены
}

// 2. Получатель
class TaskManager {
  addTask(task: string): void {
    console.log(`Task "${task}" added.`);
  }

  removeTask(task: string): void {
    console.log(`Task "${task}" removed.`);
  }
}

// 3. Конкретные команды
class AddTaskCommand implements Command {
  constructor(private taskManager: TaskManager, private task: string) {}

  execute(): void {
    this.taskManager.addTask(this.task);
  }

  undo(): void {
    this.taskManager.removeTask(this.task);
  }
}

class RemoveTaskCommand implements Command {
  constructor(private taskManager: TaskManager, private task: string) {}

  execute(): void {
    this.taskManager.removeTask(this.task);
  }

  undo(): void {
    this.taskManager.addTask(this.task);
  }
}

// 4. Инициатор
class CommandInvoker {
  private commandHistory: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.commandHistory.push(command);
  }

  undoLastCommand(): void {
    const command = this.commandHistory.pop();
    if (command) {
      command.undo();
    } else {
      console.log("No commands to undo.");
    }
  }
}

// 5. Клиент
const taskManager = new TaskManager();
const invoker = new CommandInvoker();

const addTaskCommand = new AddTaskCommand(taskManager, "Learn Command Pattern");
const removeTaskCommand = new RemoveTaskCommand(taskManager, "Learn Command Pattern");

// Выполнение команды
invoker.executeCommand(addTaskCommand); // Output: Task "Learn Command Pattern" added.
invoker.undoLastCommand();             // Output: Task "Learn Command Pattern" removed.

invoker.executeCommand(removeTaskCommand); // Output: Task "Learn Command Pattern" removed.
invoker.undoLastCommand();
*/
/*
**
***
****
*****/
//?=============================================================================
//? /Facade/Фасад/
//? Один класс, который скрывает логику работы и внутри себя и внутри работает со всеми этими сервисами и делает нужную нам логику, а нам нужно просто дернуть нужный метод и получить данные
//? он не обязан реализовывать все данные - это просто обьект, который объединяем много логики в один метод условный который нам нужно дернуть
//? Например у нас задача сделать корзину покупок и чтобы она сохраналась до покупки, пользователь вышел потом вернулся и тд, для каждой задачи будет сервис, cache, web-server-request, и тд, фасад же - решает проблему
/*
1. Подсистемы
typescript
Копировать код
class LightControl {
  turnOn(): void {
    console.log("Освещение включено");
  }
  turnOff(): void {
    console.log("Освещение выключено");
  }
}

class Thermostat {
  setTemperature(temperature: number): void {
    console.log(`Температура установлена на ${temperature}°C`);
  }
}

class SecuritySystem {
  activate(): void {
    console.log("Система безопасности активирована");
  }
  deactivate(): void {
    console.log("Система безопасности деактивирована");
  }
}
2. Фасад
typescript
Копировать код
class SmartHomeFacade {
  private lightControl: LightControl;
  private thermostat: Thermostat;
  private securitySystem: SecuritySystem;

  constructor() {
    this.lightControl = new LightControl();
    this.thermostat = new Thermostat();
    this.securitySystem = new SecuritySystem();
  }

  activateMorningRoutine(temperature: number): void {
    console.log("Утренний режим:");
    this.lightControl.turnOn();
    this.thermostat.setTemperature(temperature);
    this.securitySystem.deactivate();
  }

  activateNightRoutine(): void {
    console.log("Ночной режим:");
    this.lightControl.turnOff();
    this.thermostat.setTemperature(18); // ночная температура
    this.securitySystem.activate();
  }
}
3. Клиентский код
typescript
Копировать код
const smartHome = new SmartHomeFacade();

// Утренний режим
smartHome.activateMorningRoutine(22);

// Ночной режим
smartHome.activateNightRoutine();
*/
/*
**
***
****
*****/
//?=============================================================================
//? /Iterator/Итератор/
//? Подход для перебора какой то абстрактной структуры данных, но не подходит, если можно обойтись циклом обычным

//? Iterator - содержит в себe
//? метод next, который вернет значение элемента, done, value
//? логику перебора для уникальной коллекции(для массива свой класс, который наследуется от Iterator, для обьекта свой и тд)
//? текущую позицию
//? текущий элемент


//? пример для итерации обьектов TS
/*
const object = {
    test: 'test',
    test2: 'test2',
    0:'0',
    1:'1',
    2:'2',
    3:'3',
    4:[],
    [Symbol.iterator](){
        return new ObjectIterator(this);
    },
};

class ObjectIterator<
    T extends object,
    ReturnValueOnEnd = undefined,
> implements Iterator<T[keyof T]> {
    protected readonly keys = Object.keys(this.data) as (keyof T)[];

    private _currentIndex = 0;
    private _hasStopped = false;
    private _hasError = false;

    constructor(
        protected readonly data: T,
        protected readonly returnValue?: ReturnValueOnEnd,
    ) {}

    public get currentIndex(): number {
        return this._currentIndex;
    }

    public get hasStopped(): boolean {
        return this._hasStopped;
    }

    public get hasError(): boolean {
        return this._hasError;
    }

    public next(): IteratorResult<T[keyof T], ReturnValueOnEnd> {
        const key = this.keys[this.currentIndex];

        if (this._hasError || this._hasStopped || key == undefined) {
            return {
                done: true,
                value: this.returnValue as ReturnValueOnEnd,
            };
        }

        this._currentIndex++;

        return {
            done: false,
            value: this.data[key],
        };
    }

    public return<R>(value?: R): IteratorResult<T[keyof T], R> {
        this._hasStopped = true;

        return {
            done: true,
            value: value as R,
        };
    }

    public throw<R>(exception?: R): IteratorResult<T[keyof T], R> {
        this._hasError = true;

        return {
            done: true,
            value: exception as R,
        };
    }
}


for (const iterator of object) {
    console.log(iterator);
}
*/
/*
**
***
****
*****/
//?=============================================================================
//? /Mediator/Посредник/
//? Класс выступающий в вид связущющего звена между многими классами
//? Когда у нас множество классов, которые общаются между собой - получается хаос, на помощь приходит посредник - через котого централизованного классы работают между собой


//? Грубо говоря можно это представить в виде Store, который делает что то на диспатч ивентов, и через него происходит работа приложения, другие сущности могут через Store подписываться на ивенты определенные, которые он будет слать
//? либо просто сервис из ангулар
/*
**
***
****
*****/
//?=============================================================================
//? /Memento/Snapshot/
//? используется для сохранения и восстановления состояния объекта без нарушения его инкапсуляции. Это полезно, когда нужно реализовать функциональность "отмены" (undo), "повтора" (redo) или отката к предыдущему состоянию.
/*
**
***
****
*****/
//?=============================================================================
//? /Chanin of responibility/
//? Каждый класс делает какую то проверку, какую то логику и пускает код дальше либо прерывает

//? Angular interceptors
/*
**
***
****
*****/
//?=============================================================================
//? /Observable/Observer/ReactiveProgramming/Реактивной программирование/
//? Суть реактивного программирования - множественные подписки на конкретное изменение и управление данным состоянием из разных мест.

//? "Observer/Наблюдатель" (Observer) представляет поведенческий шаблон проектирования, который использует отношение "один ко многим". В этом отношении есть один наблюдаемый объект и множество наблюдателей. И при изменении наблюдаемого объекта автоматически происходит оповещение всех наблюдателей.
//? Обьект, за которым мы наблюдаем и реагируем на изменения.
//? Обьект, который принимает функцию, в которую как аргумент передается подписчик, где можно отправлять значения, ошибки, завершать все подписки и т.д.
/*
**
***
****
*****/
//?=============================================================================
//? /Proxy/
//? Обертка позволяющая перехватывать действия с обьектом и как то модифицировать их

//? Proxy: Прокси чаще всего обрабатывает доступ к объекту и может решать, стоит ли передавать запрос реальному объекту. Это часто связано с ограничениями или дополнительными проверками, которые нужно выполнить перед вызовом реального объекта.
//? Пример: Прокси для загрузки изображения только когда оно нужно.

//?Decorator: Декоратор расширяет поведение объекта, добавляя новые возможности. Он не блокирует или ограничивает доступ к основным методам, а лишь добавляет новую функциональность.
//? Пример: Декоратор, который добавляет логирование или изменяет данные, которые передаются в метод.
/*
**
***
****
*****/
//?=============================================================================
//? /Bridge/Мост/
// https://refactoring.guru/design-patterns/bridge
// https://www.youtube.com/watch?v=TwPcU7Zu3nI
//? Работа через абстракцию с реализациями
//? То есть есть какой то класс Remote, который должен работать c TV/Radio, класс Remote должен уметь уменьшать звук или прибавлять на этих устройвах, то есть мы вызываем методы на Remote, а он уже в свою очередь работает с реализацией конкретной, но с какой именно нам не важно
//? Классы реализации должны иметь общий интерфейс, с которым будет работать абстркация в виде Remote
/*
**
***
****
*****/
//?=============================================================================
//? /Chain of Responsibility/Цепочка ответственности/
//? это поведенческий паттерн проектирования, который позволяет передавать запрос по цепочке обработчиков. Каждый обработчик решает, может ли он обработать запрос, и если нет, передает его следующему обработчику в цепочке. Это позволяет избежать жесткой привязки между отправителем запроса и его обработчиком и дает гибкость в добавлении новых обработчиков без изменения существующего кода.
//? Основная идея - Вместо того чтобы обращаться к конкретному обработчику, объект отправляет запрос в цепочку обработчиков. Каждый обработчик либо обрабатывает запрос, либо передает его следующему обработчику в цепочке.
/*
**
***
****
*****/
//?=============================================================================
//? SOLID принципы
// https://habr.com/ru/post/348286/
// https://web-creator.ru/articles/solid
// https://www.youtube.com/watch?v=TxZwqVTaCmA&ab_channel=UlbiTV
//? Созданы, чтобы код сделать менее связаным, масштабируемым.


//? Single responsibility(единственная отвественность)
//? Одна сущность должна решать одну задачу. Не должно быть сущностей, которая и запросы делает, и логирует, и пользователей уведомляет. Для каждой задачи своя сущность.
//? Антипаттерном является GOD-object у которого миллион обязанностей.
//? Принцип нужен для развязывания кода, чем больше кода, тем больше багов, и если что то сломалось, тяжело найти то место, где ошибка, потому что всё связано, ухудшается читабельность, вносить изменения крайне сложно.


//? Open closed(открытость закрытость)
//? Сущности должны быть открыты для расширения, но закрыты для изменения. Это значит, что изменять уже написанный код(не рефакторить, а переписывать) его уже нельзя, т.к. он уже протестирован, и будет много ошибок, если с ним что то сделать, но расширять написанное можно.


//? Liskov substitution(подстановки барбары лисков)
//? Наследующий класс должен дополнять, а не переопределять поведение базового класса. Т.е. если класс реализует поведение, то это поведение должно быть корректно реализовано и для всех его наследников.
//? условно если метод возвращает число - то он его и должен возвращать, и может дополнительно добавить какую то логику над числом, но никак не должен вернуть строку


//? Interface segregation(разделение интерфейса)
//? Сущности не должны зависеть от методов, которые они не реализовывают.
//? Суть в том, чтобы разбивать интерфейсы на более мелкие. Т.е. нельзя наследоваться от интерфейсов, если мы не используем все его поля заложенные в нём.


//? Dependency inversion(инверсия зависимостей)
//? Суть в том, чтобы сущности завесели от абстракций и работали с ними, а не с конкретной реализацией, то есть принималии бы зависимости как параметры, тут плюсы в том, что нет связанности кода, и легко подменяются сущности для тестирования и в целом замены определенного функционала
//? Модули высокого уровня не должны зависеть от модулей низкого уровня; оба должны зависеть от абстракций. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
//? Например библиотека Axios. На сервере она работает с http модулем, на клиенте с fetch, но для этого создан один интерфейс, мы не зависим от низкоуровневых модулей, мы работаем с абстракцией.
/*
**
***
****
*****/
//!=============================================================================
//? /ООП/OOP/
// https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
// https://blog.skillfactory.ru/glossary/oop-obektno-orientirovannoe-programmirovanie/
//? ООП - методология программирования, основанная на представлении программы в виде совокупности взаимодействующих объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования. Принцип существует для масштабирования, переиспользования.


//? В ООП главные принципы это:

//? 1) Инкапсуляция - это принцип капсулы, какая то сущность содержит в себе методы, свойства работы которые принадлежат именно ей.
//? 1.1) Сокрытие - рядом с инкапсуляцией идет сокрытие, которые вечно путают. Сокрытие это понятие - когда в какую то реализацию чего либо скрывают от внешнего вмешательства, например какой то метод в классе делают приватным, и с ним нельзя работать в экземпляре.

//? 2) Наследование - принцип, когда общие данные, которые есть в разных классах, выносятся в какой то базовый класс, который объединяет логику по работе с несколькими сущностями.

// https://medium.com/devschacht/polymorphism-207d9f9cd78
//? 3) Полиморфизм(многообразное) - это когда один и тот же фрагмент кода(метод, сущность, переменная и тд) может работать с разными типами данных. Например это плюс оператор, это тоже полиморфизм, может работать со строкой, а может и с числами.
//? Переменные тоже могут хранить разные типы, функции принимать разные аргументы, в общем когда сущность работает с разными типами данных.
//? 3.1) Ad-hoc(мнимый) - например перегрузка методов, это мнимый полиморфизм, т.е. одна и та же функция принимает разные типы данных и либо делает одно и то же(но тут скорее всего будет приведение типов), либо создаются разные блоки кода. Также приведение типов считается мнимым полиморфизмом.
//? 3.2) Параметрический(истинный) - generic методы, методы могут работать с разными обьектами одинаково, главное, чтобы эти обьекты реализовывали те методы или свойства, с которыми будет производиться работа. Т.е. будет вызываться одна и та же функция для разныех обьектов.

//? 4) Абстракция — отделение концепции от ее экземпляра. То есть мы знаем, что у массива есть методы, и нам не важно, как они внутри сделаны, мы знаем, что они делают конкретно и мы работаем с абстракцией



//? /Преимущества/
//? 1) модульность
//? 2) экономия времения - не пишем одно и то же много раз
//? 3) безопасность - написанный код нельзя сломать из вне(сокрытие)



//? /Недостатки/
//? 1) Сложный старт
//? 2) Снижение производительности
//? Объектно-ориентированный подход немного снижает производительность кода в целом. Программы работают несколько медленнее из-за особенностей доступа к данным и большого количества сущностей.
//? 3) Большой размер программы





//? 6) Интерфейс - это описание того, что должно быть в классе, он говорит "ЧТО" должно быть в классе, но не говорит, как это надо сделать.

//? 7) Абстрактный класс - может также содержать абстрактные методы(тоже самое, что и в интерфейсе), не будут иметь реализацию, но также может создавать и обычные методы, которые будут с реализацией, а дочерний класс должен будет реализовывать методы абстрактные.



//? /Отношения классов/
//? Ассоциация - отношение классов между друг другом
//? *) /Ассоциация/ – это когда экземпляр сущности принимает через сеттер другие сущности
//? *) /Агрегация/ – это когда экземпляр сущности принимает в конструктор другие сущности
//? *) /Композиция/ - это когда сущность создает зависимые сущности внутри себя
/*
**
***
****
*****/
//!=============================================================================
//? /Functional/
/*
**
***
****
*****/
//?=============================================================================
//? /Pure function/Чистая функция/
//? не имеет побочных эффектов
//? при вызове с одинаковым параметром 100 раз вернет тот же результат
//? не работает с внешними переменными
/*
**
***
****
*****/
//!=============================================================================
//? /Branch prediction/
// https://stackoverflow.com/questions/11227809/why-is-processing-a-sorted-array-faster-than-processing-an-unsorted-array
// const int = 1_000_000_0;

// const sorted = new Array(int).map((_, index) => undefined);
// const random = [];

// for (let index = 0; index < int; index++) {
//     random.push(1001);
// }


// console.time();
// sorted.forEach(item => {
//     if (item > 1000) {
//         item++;
//     }
// })
// console.timeEnd();


// console.time('second');
// random.forEach(item => {
//     if (item > 1000) {
//         item++;
//     }
// })
// console.timeEnd('second');
/*
**
***
****
*****/
/*
**
***
****
*****/
//? /Парадигмы/Paradigms/
// https://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5


//? /Императивное программирование/Imperative/
// https://tproger.ru/experts/imperative-and-declarative-programming/
// https://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
//? Императивная программа содержит явно то, что мы хотим от компьютера и в каком порядке это должно выполниться, это самая распространенная парадигма. JS - императивен, HTML - декларативен.
//? 1) Программа написана в виде интструкций(команд)
//? 2) последовательное выполнение команд
//? 3) данные предыдущих команд используются дальше по коду(то есть есть присваивания и тд)
/*
**
***
****
*****/
//?=============================================================================
//? /Процедурное программирование/
// https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
//? Та же императивная программа - только добавляется то, что куски выносятся в функции(подпрограммы) и переиспользуются дальше по коду, все хранится в одном файле и все выполняется последовательно
/*
**
***
****
*****/
//?=============================================================================
//? /Модульное программирование/Module/Структурное программирование/Structure/
// https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
//? Модульное - программа разбивается на модули(функции, процедуры) - каждый модуль решает какую то часть этой программы

//? Структурное - это композиция модулей
/*
**
***
****
*****/
//!=============================================================================
/*
**
***
****
*****/
//? /Прототипное программирование/Prototype/
// https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
// https://ru.stackoverflow.com/questions/588115/%d0%9f%d1%80%d0%be%d1%82%d0%be%d1%82%d0%b8%d0%bf%d0%bd%d0%be%d0%b5-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5
//? Подвид ооп, в котором прототип - это прообраз для обьектов, которые наследуют функциональность прототипа, а также при изменении свойств прототипа - обьекты также будут использовать новые свойства
/*
**
***
****
*****/
//!=============================================================================
//? /Чистый код/
//? *) не использовать магические константы
//? *) не использовать бессымленные комментарии
//? *) 3+ аргументов выносить в обьект
//? *) если класс использует слишком много локальных полей - разбивать не подклассы
//? *) желательно не использовать в одном методе много зависимых полей класса
/*
**
***
****
*****/
//!=============================================================================
//? /Flux/
//? Паттерн однонаправленный поток данных, чтобы было проще отслеживать поведение
//? Actions - события
//? Store - хранилище данных
//? Dispatcher - принимает действия и отправляет сторам
//? Views - отображение данных и отправление снова в систему flux
//? Immutable - неизменяемость данных
/*
**
***
****
*****/
//?=============================================================================
//? /Redux/
// https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
//? Реализация паттерна flux


//? Состоит из state, reducer,actions
//? state - состояние
//? reducer - функция преобразования состояния, всегда возвращает новое состояние, иначе не будет реагирования на изменения
//? actions - уникальное событие, которое закидываем в стор, вызывается соответствующий reducer, который обновляет стэйт
//? selectors - функции, которые достают из стэйта нужные данные, могут зависеть от других селекторов, при изменении стэйта, от которого зависят - вызовутся заново и вернут обновленные данные, если данные от которых зависят косвенно, например обьект из которого мы вытаскивали свойство изменился, но наше свойство не изменилось - селектор вызовется, но обновление подписки не произойдет, тк мы подписаны конкретно на изменение именно этого свойства
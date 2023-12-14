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
//? model - управление данными и бизнес логикой
//? view - интерфейс для пользователя
//? controller - направляет команды от интерфейса(реагирование на действия пользователя) к моделям и наоборот
/*
**
***
****
*****/
//?=============================================================================
//? Dependency Injection(DI)
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
//? Класс обертка, которая навешивает дополнительную логику
/*
**
***
****
*****/
//?=============================================================================
//? /Factory/Фабрика/
//? Функия порождающая в зависимости от переданных данных разные обьекты, также эту функцию в другой фабрике можно переопределить, чтобы для определенного типа создавался другой обьект, но они оба должны иметь общий интерфейс или абстрактный класс как базу. То есть first создавал сначала A, а потом метод second будет создавать класс B, но A/B должны иметь общий интерфейс
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
//?=============================================================================
//? /Composition/Композиция/
//? Достижение какой то логики благодоря объединению более мелких функций, классов между собой, позволяет более легко и гибко писать код, в отличии от того же наследования
/*
**
***
****
*****/
//?=============================================================================
//? /Model-adapter/
//? Модель адаптер - преобразователь данных, например с бэкенда нам пришли данные и мы прогоняем их через модель адаптер для преобразования в нужный нам вид
/*
**
***
****
*****/
//? /Facade/Фасад/
//? Один класс, который скрывает логику работы и внутри себя и внутри работает со всеми этими сервисами и делает нужную нам логику, а нам нужно просто дернуть нужный метод и получить данные
//? Например у нас задача сделать корзину покупок и чтобы она сохраналась до покупки, пользователь вышел потом вернулся и тд, для каждой задачи будет сервис, cache, web-server-request, и тд, фасад же - решает проблему
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
/*
**
***
****
*****/
//?=============================================================================
//? /Bridge/
//? TODO
//? Что то с композицией
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
//? 1) Композиция - это когда сущность создает зависимые сущности внутри себя
//? 2) Агрегация – это когда экземпляр сущности принимает в конструктор другие сущности
//? 3) Ассоциация – это когда экземпляр сущности принимает через сеттер другие сущности
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
//*=============================================================================
//? /Процедурное программирование/
// https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
//? Та же императивная программа - только добавляется то, что куски выносятся в функции(подпрограммы) и переиспользуются дальше по коду, все хранится в одном файле и все выполняется последовательно
/*
**
***
****
*****/
//*=============================================================================
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
//*=============================================================================
//? /Реактивное программирование/Reactive/
//? Суть реактивного программирования - множественные подписки на конкретное изменение и управление данным состоянием из разных мест, парадигма программирования


//? Паттерн "Наблюдатель" (Observer) представляет поведенческий шаблон проектирования, который использует отношение "один ко многим". В этом отношении есть один наблюдаемый объект и множество наблюдателей. И при изменении наблюдаемого объекта автоматически происходит оповещение всех наблюдателей.
/*
**
***
****
*****/
//*=============================================================================
//? /Чистый код/
//? *) не использовать магические константы
//? *) не использовать бессымленные комментарии
//? *) 3+ аргументов выносить в обьект
//? *) если класс использует слишком много локальных полей - разбивать не подклассы
//? *) желательно не использовать в одном методе много зависимых полей класса
//? *) 
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
//? /Design patterns/
//*=============================================================================
//? /Bridge/Мост/
// https://refactoring.guru/design-patterns/bridge
// https://www.youtube.com/watch?v=TwPcU7Zu3nI
//? Отделение двух классов, и работа со абстракциями, то есть один класс(абстракция), может работать/получать ссылку на какой то другой класс(реализацию), разными способами и работать с их интерфейсом
//? то есть class A получает ссылку на какой то класс (B,C,D) - не важно, и работает с интерфейсом - и наш класс А выступает в виде моста, а наш класс также можно вызывать в нужных местах
/*
**
***
****
*****/
//*=============================================================================

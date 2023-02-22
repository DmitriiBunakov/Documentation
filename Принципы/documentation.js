//*=============================================================================
//? ООП
//? ООП - методология программирования, основанная на представлении программы в виде совокупности взаимодействующих объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования. Принцип существует для масштабирования, переиспользования.


//? В ООП главные принципы это:

//? 1) Инкапсуляция - это принцип капсулы, какая то сущность содержит в себе методы, свойства работы которые принадлежат именно ей.
//? 1.1) Сокрытие - рядом с инкапсуляцией идет сокрытие, которые вечно путают. Сокрытие это понятие - когда в какую то реализацию чего либо скрывают от внешнего вмешательства, например какой то метод в классе делают приватным, и с ним нельзя работать в экземпляре.

//? 2) Наследование - принцип, когда общие данные, которые есть в разных классах, выносятся в какой то базовый класс, который объединяет логику по работе с несколькими сущностями.

//? 3) Полиморфизм(многообразное) - это когда один и тот же фрагмент кода(метод, сущность) может работать с разными типами данных. Например это плюс оператор, это тоже полиморфизм, может работать со строкой, а может и с числами.
//? 3.1) Ad-hoc(мнимый) - например перегрузка методов, это мнимый полиморфизм, т.е. одна и та же функция принимает разные типы данных и либо делает одно и то же(но тут скорее всего будет приведение типов), либо создаются разные блоки кода. Также приведение типов считается мнимым полиморфизмом.
//? 3.2) Параметрический(истинный) - generic методы, методы могут работать с разными обьектами одинаково, главное, чтобы эти обьекты реализовывали те методы или свойства, с которыми будет производиться работа. Т.е. будет вызываться одна и та же функция для разныех обьектов.

//? 4) Композиция - это когда сущность какая то, например автомобиль, внутри себя содержит другие сущности, которые не могут существовать друг без друга, услово это будет двигатель, и колеса. Данные сущностви будут создаваться именно внутри автомобиля

//? 5) Агрегация – это когда экземпляр сущности принимает как параметр другие сущности, с которыми он будет работать. Например класс автомобиль будет принимать двигатель и колеса как параметры. Т.е. данные сущности могут существовать и вне машины, в какой то другой сущности.

//? 6) Интерфейс - это описание того, что должно быть в классе, он говорит "ЧТО" должно быть в классе, но не говорит, как это надо сделать.

//? 7) Абстрактный класс - может также содержать абстрактные методы(тоже самое, что и в интерфейсе), не будут иметь реализацию, но также может создавать и обычные методы, которые будут с реализацией, а дочерний класс должен будет реализовывать методы абстрактные.
/*
**
***
****
*****/
//*=============================================================================
//? Паттерны проектирования

//? Dependency Injection(DI)
//? Паттерн внедрения зависимостей, когда класс должен работать с какими то сущностями, но он не создает экзмемпляры внутри себя, а принимает их как аргументы.


//? Singleton
//? Когда на приложение будет создан один экземпляр класса, например база данных. Например если создадим второй экземпляр, то у нас будет 2 подключения, а это нам уже не нужно.
/*
**
***
****
*****/
//*=============================================================================
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


//? Interface segregation(разделение интерфейса)
//? Сущности не должны зависеть от методов, которые они не реализовывают.
//? Суть в том, чтобы разбивать интерфейсы на более мелкие. Т.е. нельзя наследоваться от интерфейсов, если мы не используем все его поля заложенные в нём.


//? Dependency inversion(инверсия зависимостей)
//? Модули высокого уровня не должны зависеть от модулей низкого уровня; оба должны зависеть от абстракций. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
//? Например библиотека Axios. На сервере она работает с http модулем, на клиенте с fetch, но для этого создан один интерфейс, мы не зависим от низкоуровневых модулей, мы работаем с абстракцией.
/*
**
***
****
*****/
//*=============================================================================
//? /Реактивное программирование/
//? Суть реактивного программирования - множественные подписки на конкретное изменение и управление данным состоянием из разных мест


//? Паттерн "Наблюдатель" (Observer) представляет поведенческий шаблон проектирования, который использует отношение "один ко многим". В этом отношении есть один наблюдаемый объект и множество наблюдателей. И при изменении наблюдаемого объекта автоматически происходит оповещение всех наблюдателей.
/*
**
***
****
*****/
//*=============================================================================
//? Модульное программирование 
/*
**
***
****
*****/
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
//? /Joshua Block/Linked list/
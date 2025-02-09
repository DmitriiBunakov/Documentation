/*
**
***
****
*****/
//!====================================================================================================
/*
?) background-image   -   устанавливает изображение

?) background-color  -   устанавливает цвет
?   он устанавливается за изображением, то есть если задана картинка и цвет, то картинка перекроет цвет, но тут есть нюанс, если картинка расположена не на весь блок, и если объявление картинки поместить перед цветом, а цвет после, то у нас будет виден и цвет и картинка

?) background-attachment    -    фиксация изображения относительно области просмотра

?) background-repeat    -    повторение изображения

?) background-position   -   позиция изображения(x, y)

?) background-clip   -   область закраски и изображения бэкграунда
?   border-box - устанавливает фон по умолчанию включая рамки и падинги
?   padding-box - внутри бордера, то есть его не трогает
?   content-box - внутри бордера и падингов, только контентная часть

?) background-origin    -    указывает область расположения фона для элементов, которые выводятся на экране как единый блок
?   border-box - устанавливает фон по умолчанию включая рамки и падинги
?   padding-box - внутри бордера, то есть его не трогает
?   content-box - внутри бордера и падингов, только контентная часть
?   не будет работать, если задано свойство background-attachment: fixed

?) background-size  -   устанавливает размер(x, y)

?) можно использовать множественные фоны, в background прописать несколько url(), через запятую и они наслояться друг на друга, и также цвет имеет нисший приоритет, можно также для каждого изображения задать размеры и позицию
*/
/*
**
***
****
*****/
//!====================================================================================================
/*
?) border   -   устанавливает рамку в элемент, по дефолту установка идет поверх фона, иначе ее не было бы видно вообще
?   это сокращенная запись, в расширенном варианте устанавливается цвет, стиль, ширина, можно также все эти значения задать обратившись конкретно к определенной рамке

?) outline   -   устанавливает контур снаружи элемента
?   это сокращенная запись, в расширенном варианте устанавливается цвет, стиль, ширина

?) outline-offset   -   устанавливает отступ от границы элемента до контура

?) border-radius    -    закругляет рамки, можно переопределить каждый угол отдельно
?   также можно задать 2 значения для конкретного угла(x, y) расстояния

?) border-image    -    установить картинку в рамку

?) border-image-slice   -   размеры грани

?) border-image-width   -   ширина

?) border-image-repeat    -    повтор изображения в рамке

?) border-image-outset    -    отступ рамки от контента

?) cursor   -   устанавливает курсор, можно заменить его на изображение

?) caret-color   -   цвет символа каретки, он доступен в инпутах и т.д.
*/
/*
**
***
****
*****/
//!====================================================================================================
/*
?) content  -   используется для вставки контента в псевдоэлементы
?   можно установить изображение, текст
*/
/*
**
***
****
*****/
//!====================================================================================================
/*
?) linear-gradient  -   устанавливает на фон перетекающий цвет из одного в другой
?   угол наклона или направление to top, цвета      linear-gradient(to top, #E4AF9D, #E4E4D8 );
?   можно также устанавливать несколько цветов и для каждого устанавливать процентное занимаемое расстояние      linear-gradient(to top, #E4AF9D 20%, #E4E4D8 50%, #A19887 80%);
?   для чёткого распределения цветных полос каждый последующий цвет нужно начинать с точки остановки предыдущего цвета      linear-gradient(to right, #FFDDD6 20%, #FFF9ED 20%, #FFF9ED 80%, #DBDBDB 80%);

?) radial-gradient   -   радиальный градиент
?   позиция начала, размер градиента(closest-side и другие)     radial-gradient(40% 50%, #FAECD5, #CAE4D8);

?) можно также повторять градиент repeating-<>-gradient
*/
/*
**
***
****
*****/
//!====================================================================================================
/*
?) text-decoration-line    -    подчеркивание текста

?) text-decoration-color    -    цвет подчеркивания текста

?) text-decoration-style    -    стиль

?) text-decoration-position    -    позиция

?) text-underline-position   -   позиция линии подчеркивания

?) text-shadow   -   тень текста
?   синтаксис:   x, y, размытие, цвет

?) box-shadow   -   тени блока, можно через запятую указывать несколько теней, и таким образом менять их длину и насыщенность
?   синтаксис:  (inset), x, y, размытие, растяжение, цвет
*/
/*
**
***
****
*****/
//!====================================================================================================
//? Переходы
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
/*
?) transition-property   -   список свойств, который нужно анимировать(по умолчанию "all")

?) transition-duration   -   длительность перехода(ms или s)

?) transition-timing-function   -   анимация по "кривой"(гипербола и т.д)

?) transition-delay   -   задержка перед анимацией

?) transition-delay   -   задержка перед анимацией

?) transition   -   короткая запись вышестоящих свойств по порядку
?   просто по умолчанию можно передать только длительность анимации
*/
/*
**
***
****
*****/
//!====================================================================================================
//? Трансформации
// https://html5book.ru/3d-transform/
/*
?) transform    -    принимает функции трансформирования
?   можно передавать одну и ту же трансформацию несколько раз подряд. translateX(20px) translateX(20px) translateX(20px), то есть перемещение будет постоянно считаться от новой точки

?) transform-origin    -    центр относительно которого будет трансформация
?   x, y


! 3D

?) transform-style   -   позволяет расположить элементы в 3д представлении
?   задается родителю элемента, который хотим анимировать

?) perspective   -   позволяет задать перспективу, как бы глубину экрана, добавить объем
?   задается родителю элемента, который хотим анимировать

?) perspective-origin   -   изменить место, точку, вокруг которой происходит изменении перспективы

?) backface-visibility   -   позволяет в 3д добавить возможность видеть обратную сторону элемента
*/
/*
**
***
****
*****/
//!====================================================================================================
//? Анимации
/*
?) @keyframes   -   ключевые анимации, задается имя и в контенте сами ключевые анимации
@keyframes shadow {
    from {text-shadow: 0 0 3px black;}
    50% {text-shadow: 0 0 30px black;}
    to {text-shadow: 0 0 3px black;}
}

?) animation-name   -   имя анимации из keyframes

?) animation-duration   -   длительность анимации

?) animation-timing-function   -   кривая анимации

?) animation-iteration-count    -   количество раз воспроизводой анимации

?) animation-direction   -   направление анимации(можно указать для в обратном направлении или для четных, нечетных)

?) animation-play-state    -    прерывание анимации, пауза при событиях

?) animation-delay   -   задержка до анимации

?) animation-fill-mode   -   применяет по окончанию анимации либо начальные значения либо конечные либо оба

?) animation    -    короткая запись всех вышеперечисленных свойств
?   можно также к элементу применять несколько анимаций
*/
/*
**
***
****
*****/
//!====================================================================================================
//? Flexbox
// https://html5book.ru/css3-flexbox/#part1
// https://fls.guru/flexbox.html
/*
?) display: flex    -   по умолчанию выстраивает элементы вдоль x оси и они занимают место столько, сколько в них контента
?   можно выравнивать смежные элементы через margin auto
?   margin смежных элементов не схлопывается
?   абсолютный элемент не участвует в гибкой компоновке
?   visibility: collapse на флекс элементе вычеркивает его из рендеринга, но оставляет занимаемое им место
?   margin и padding вычисляется от родителя

?) flex-direction   -   направление оси контейнера

?  flex-wrap    -   можно ли при нехватки места элементам переходить на новую строку

?) flex-flow    -   короткая запись direction и wrap

?) order    -   порядок отображения элементов, задается в самих элементах
?   лучше указывать для всех, потому что могут быть проблемы

?) flex   -    базовый размер и будет ли элемент увеличиваться и уменьшаться относительно базового размера
?       flex-grow    -    коэффициент увеличения ширины элемента относительно других флекс элементов
?       flex-shrink    -    коэффициент сужения ширины элемента относительно других флекс элементов
?       flex-basis    -    базовый размер элемента
?   если указать 0 0 и размер определенный, то элемент не будет менять его, будет всегда держать именно этот размер
?   коэффициенты работаю так: если одному задать коэффициент 1 а другому 2, то второй будет в 2 раза быстрей увеличиваться или уменьшаться в размере

?) justify-content   -   выравнивание элементов относительно главной оси(она меняется от напрвления контейнера)

?) align-items   -   выравнивание по второстепенной оси

?) align-self   -   выравнивание по второстепенной оси отдельно взятого элемента

?) align-content    -    выравнивает по второстепенной оси СТРОКИ, если есть свободное место в контейнере
?   если у нас align-items: stretch, и в элементах есть свободное место, то мы можем ужать с помощью этого свойства элементы и раскидать их относительно второстепенной оси
*/
/*
**
***
****
*****/
//!====================================================================================================
//? Колонки
/*
?) column-rule-width   -    ее ширина

?) column-rule-style    -    стиль разделительной линии

?) column-rule-color    -    цвет линии

?) column-rule   -   сокращенная запись вышестоящих

?) column-gap   -   дистанция между колонками

?) column-count   -   устанавливает количество колонок
?   если мы хотим в этом блоке установить например несколько колонок, и чтобы в каждой была своя статья, тогда эти статьи нужно сделать inline-block, иначе получится, что текст из одной колонки попадет в другую

?) column-span   -   количество занимаемых колонок элементом
/*
**
***
****
*****/
//!====================================================================================================
//? Фильтры
// https://html5book.ru/css3-filtry/
// https://developer.mozilla.org/ru/docs/Web/CSS/filter

// https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter
/*
?) filter   -   свойство изменяющее непустой элемент страницы
?   можно размывать качество, прозрачность и много другое, можно применять не только к изображениям

? нужно сказать, что фильтры накладываются слоями, это значит, что можно их комбинировать и чем больше фильтров, тем больше будет грузиться страница, чтобы отрисовать их

?) backdrop-filter   -   эксперементальная технология изменения фона
*/
/*
**
***
****
*****/
//!====================================================================================================
//? Функции
/*
?) attr()   -   позволяет получить значения аттрибута и например вставить его в content в псевдоэлементе
*/
/*
**
***
****
*****/
//!====================================================================================================
//? Шрифты
/*
?) font-kerning    -    установка межбуквенного интервала, в зависимости от шрифта(это не letter spacing)

?) font-variant-ligatures   -   включение лигатур

?) font-variant-position    -   отображение подстрочных и надстрочных форм

?) font-variant-caps    -    контролирует использование альтернативных глифов для заглавных букв

?) font-variant-numeric   -    контролирует использование альтернативных глифов для чисел, дробей и порядковых маркеров

?) font-variant-east-asian   -   позволяет контролировать замену и размер глифов в восточноазиатском тексте

?) direction    -   направление письма, слева напрово и наборот

?) writing-mode   -   направление письма по Y
*/
/*
**
***
****
*****/
//!====================================================================================================
//? Префиксы
// https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions#media_features
// https://developer.mozilla.org/en-US/docs/Web/CSS/Mozilla_Extensions#media_features
/*
**
***
****
*****/
//!=============================================================================
//? /Pseudoelements/Псевдоэлементы/
//? это якобы элементы, которые изначально не находятся в разметке



//? /:after/:before/



//? /:backdrop/
//? бэкдроп модалки



//? /:file-selector-button/
//? input type="file"



//? /:first-letter/
//? первая буква первой строки блочного элемента



//? /:first-line/



//? /:grammar-error/
//? если браузер пометил текст как неверный



//? /:highlight/
// https://developer.mozilla.org/en-US/docs/Web/CSS/::highlight
//? стилезация для нод которые используют хайлайт



//? /:marker/
//? элемент списка



//? /:part/TODO



//? /:placeholder/
//? input/textaread placeholder



//? /:selection/
//? выделенный текст



//? /:slotted/TODO



//? /:target-text/TODO



//? /:view-transition/:view-transition-group/:view-transition-image-pair/:view-transition-new/:view-transition-old/TODO
/*
**
***
****
*****/
//!=============================================================================
//? /Pseudoclass/Псевдокласс/
//? это классы, которые отвечают за свой контекст и могут использоваться для доп-ой стилизации


//? /:active/
//? можно применить почти к любому тэгу, на который нажимает пользователь
//? в основном button/a/input/select/и тд
//? будут перезатерты другими псевдоклассами-ссылками - :hover/:link/:visited



// https://developer.mozilla.org/en-US/docs/Web/CSS/:link
//? /:link/
//? все непосещенные элементы a/area которые имеют href



// https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link
//? /:any-link/
//? все a/area которые имеют href



//? /:local-link/
//? ссылки на данную страницу



// https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill
//? /:autofill/
//? если в инпут значение было введено из "запомненных" браузером, то будет применен этот псевдокласс



// https://developer.mozilla.org/en-US/docs/Web/CSS/:buffering
//? /:buffering/
//? частичная поддержка, когда данные еще не загружены для воспроизведения audio/video и видео загружается



// https://developer.mozilla.org/en-US/docs/Web/CSS/:checked
//? /:checked/
//? выбранные элемент checkbox/option/radio



//https://developer.mozilla.org/en-US/docs/Web/CSS/:current
//? /:current/



// https://developer.mozilla.org/en-US/docs/Web/CSS/:future
//? /:future/



//? https://developer.mozilla.org/en-US/docs/Web/CSS/:default
//? /:default/
//? все по дефолту выбранные элементы checkbox/option/radio



// https://developer.mozilla.org/en-US/docs/Web/CSS/:defined
//? /:defined/
//? все элементы + все кастомные пользовательские элементы когда они определены через define



// https://developer.mozilla.org/en-US/docs/Web/CSS/:dir
//? /:dir/
//? селектор отвечает за аттрибут dir, сопоставляет значения аттрибута направления текста(через стили не работает, только аттрибут сопоставляет)



// https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled
//? /:disabled/
//? нельзя выбрать и повесить фокус



// https://developer.mozilla.org/en-US/docs/Web/CSS/:empty
//? /:empty/
//? элементы у которых нет детей включая текстовые ноды



// https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled
//? /:enabled/
//? oppsoite to disabled



// https://developer.mozilla.org/en-US/docs/Web/CSS/:first
//? /:first/
//? стили для печатной первой страницы



// https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child
//? /:first-child/
//? выбирает первый элемент среди группы элементов, если только элемент САМЫЙ первый в списке среди группы тэгов по отношению к родителю
/*
<div>
    <p>This text is selected!</p>
    <p>This text isn't selected.</p>
</div>

<div>
    <h2>This text isn't selected: it's not a `p`.</h2>
    <p>This text isn't selected.</p>
</div>
*/



// https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type
//? /:first-of-type/
//? первый элемент среди группы тэгов по отношению к родителю



// https://developer.mozilla.org/en-US/docs/Web/CSS/:focus
//? /:focus/
//? элемент на котором фокус(кнопку нажимаем/инпут и тд)



// https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
//? /:focus-visible/
//? очень похоже на фокус, но например для кнопок фокуса не будет при нажатии(хотя обычный :focus сработает), если явно не задать его например через tab



//? /:focus-within/
//? если сам элемент или дочерний имеет фокус



//? /:fullscreen/
//? элемент который сейчас фуллскрин



// https://developer.mozilla.org/en-US/docs/Web/CSS/:has
//? /:has/
//? применяет по условию стиль к селектору у которого has
//? в примере ниже если после h1 есть h2 следующий элемент то у h1 будет красный цвет
/*
<h1>h1</h1>
<h2>h1</h2>

h1:has(+h2) {
  color: red;
}
*/


//? /:host/
//? host (родитель) shadowdom элемента, обращение к нему



//? /:host-context/
//? применяет стиль к хосту в зависимости от родительского селектора



//? /:hover/
//? наведение мышью, но бывает на некоторых устройствах, что и при тапе будет вечно висеть этот псевдокласс, поэтому желательно проверять, что устройство сейчас без возможности сенсорного касания



//? /:in-range/
//? /:out-of-range/
//? на input элементе сравниваем min/max аттрибуты и добавляет поведение



//? /:indeterminate/
//? если еще не было взаимодействия с checkbox/radio кнопками(то есть неопределенно значение)



//? /:invalid/
//? невалидность форм элементов



//? /:is/
//? работает также как и простое перечисление селекторов через запятную, но тут преимущество, что если какой то селектор не поддерживается браузером, то весь список будет проигнорирован, а is решает эту проблему
//? не работает с псевдоэлементами



//? /:lang/
//? по аттрибуту lang совпадение ищет



//? /:last-child/
//? последний элемент среди группы выбирает по таком то селектору, но не выберет последний элемент, если последний элемент не является заданным тэгом



//? /:last-of-type/
//? последний элемент такого то типа среди группы



//? /:left/
//? @page использует



//? /:modal/
//? dialog элемент



//? /:muted/
//? audio/video звук выключен, в отличии от :volume-locked, где звуком вообще нельзя манипулировать



//? /:not/
//? отрицательный селектор, элемент НЕ соответствует такому то селектору



//? /:nth-child/:nth-last-child/:nth-of-type/:nth-last-of-type/
//? поиск по порядку среди группы



//? /:only-child/
//? элемент не содержит родственников рядом



//? /:only-of-type/
//? элемент единственный в своем роде среди рядом стоящих



//? /:optional/
//? input/select/textarea кто не имеет required



//? /:past/
//? для субтитров



//? /:paused/
//? audio/video на паузе



//? /:placeholder-shown/
//? показан плейсхолдер у input/textarea



//? /:playing/
//? audio/video играет



//? /:popover-open/
//? когда popover открыт



//? /:read-only/:read-write/
//? для элементов у которых есть/нет contenteditable, либо для input/textarea



//? /:required/
//? textarea/input/select



//? /:right/
//? @page



//? /:root/
//? html, но более высокий приоритет



//? /:scope/
//? @scope используется вместе, либо на верхнем уровне равен :root



//? /:target/
//? применяется к элементу, у которого id равен # хэшу в url



//? /:valid/



//? /:visited/



//? /:where/
//? почти такой же как и :is
/*
**
***
****
*****/
//!=============================================================================
//? /Functions/
/*
**
***
****
*****/
//!=============================================================================
//? /Counter/
// https://developer.mozilla.org/en-US/docs/Web/CSS/counter
//? можно использовать для счетчика контента ::marker через css
/*
**
***
****
*****/
//!=============================================================================
//? /env/
// https://developer.mozilla.org/en-US/docs/Web/CSS/env
//? функция позволяет брать глобальные переменные определенные браузером/платформой и которые нельзя задавать руками, например на циферблате есть свои глобальные переменные, которые можно использовать, например отступы по краям, где может быть размещен контент, чтобы он не обрезался
/*
**
***
****
*****/
//!=============================================================================
//? /attr/
// https://developer.mozilla.org/en-US/docs/Web/CSS/attr
//? чтение значения аттрибута, нельзя использовать в url и в целом плохо поддерживается кроме content свойства
/*
**
***
****
*****/
//!=============================================================================
//? /clamp/
//? функция может использоваться везде где есть размерные значения и можно динамически устанавливать размеры элементов min/preferred/max
/*
**
***
****
*****/
//!=============================================================================
//? /cross-fade/
//? несколько изображений можно наложить друг на друга и каждому задать уровень прозрачности
/*
**
***
****
*****/
//!=============================================================================
//? /tan/cot/math/log/min/max/mod/pow/round/
//? геометрические/алгебраические функции
//? mod - остаток от деления
//? round - как в js
/*
**
***
****
*****/
//!=============================================================================
//? /border-image/border-image-source/
//? картинка в бордере, замена бордера
/*
**
***
****
*****/
//!=============================================================================
//? /Скролл/Scroll/
//? /scroll-snap-type/
//? /scroll-snap-stop/
// https://developer.mozilla.org/ru/docs/Web/CSS/scroll-snap-type
//? позволяет проскроливаться страницу "частями", то есть мы можем привязаться к точкам, на которые браузер будет доскроливать автоматически и держать в поле зрение привязанную точку



//?=============================================================================
//? /scroll-behavior/
//? плавность



//?=============================================================================
//? /scroll-margin/
//? данных свойств много и они позволяют указывать отступ прокрутки
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
//? /@at-rules/at-rules/
/*
**
***
****
*****/
//?=============================================================================
//? /@charset/
//? устанавливает кодировку для css файла
/*
**
***
****
*****/
//?=============================================================================
//? /@color-profile/
//? можно устанавливать кастомные цвета для страницы и потом через color() использовать
/*
**
***
****
*****/
//?=============================================================================
//? /@container/
//? можно использовать именнованные контейнеры и в зависимости от размера КОНКРЕТНОГО элемента применять к дочерним элементам стили, но не к самому контейнеру
/*
**
***
****
*****/
//?=============================================================================
//? /@counter-style/
//? добавляет по наименованию list-style который можно использовать в ul, можно кастомные свои значки проставить
/*
**
***
****
*****/
//?=============================================================================
//? /@font-face/fonts/
//? загружает шрифты для страницы
//? на самом верхнем уровне определяются
//? можно указать, чтобы использовались сначала локальные шрифты, потом если что можно указать дополнительные загрузить откуда то и поддерживает ли браузер такой то шрифт, а также в @supports можно указать
/*
**
***
****
*****/
//?=============================================================================
//? /@import/import/
// http://htmlbook.ru/css/import
//? Позволяет импортировать другие css файлы в текущий, можно указывать с "url()", но это не принципиально, также после пути может принимать дополнительные настройки
//? На каждый подключенный таким образом файл будет сделан запрос
/*
**
***
****
*****/
//?=============================================================================
//? /@font-feature/
/*
**
***
****
*****/
//?=============================================================================
//? /@font-palette/
/*
**
***
****
*****/
//?=============================================================================
//? /@keyframes/
//? для анимаций описание
//? через js можно получить доступ к правилам и также добавить описания
/*
**
***
****
*****/
//?=============================================================================
//? /@media/Медиазапросы/
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features     все виды запросов
// https://html5book.ru/css3-mediazaprosy/
// https://developer.mozilla.org/ru/docs/Glossary/Viewport
// https://itchief.ru/lessons/html-and-css/meta-viewport-how-it-works

// https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList

// ? Медиазапрос это по сути условие, которое возвращает правду или ложь

// ? Медиазапросы могут быть добавлены след. образами:
// ?   <link rel="stylesheet" media="screen and (color)" href="example.css"> (подключенный таким образом файл будет подключаться в любом случае, даже если mq вернет ложь)
// ?   <style> @media (max-width: 600px) {#sidebar {display: none;}} </style>
// ?   @import url(color.css) screen and (color);
// ?   @media (max-width: 600px) {#sidebar {display: none;}}
// ?   @media (400px <= width <= 700px) {} новый синтаксис записи

// ? медиазапросы можно комбинировать через оператор and
// ?   @media screen and (max-width: 600px)

// ? оператор or, также его можно перезаписать на запятую обычную
// ?   @media screen, projectio (тут стили применяться либо для экранных услойств либо для проекторов)

// ? оператор not   -   позволяет сработать запросу в противоположном случае
// ?   @media not screen and (monochrome) {...} (в данном слуае это значит сработает на всем, кроме screen и monochrome)

// ? оператор only    -   позволяет скрыть стили от старых браузеров, так как они по другому распознаю запросы, и запросы с only игнорируют


// ? медиазапросы можно делать обращаясь к:
// ?   https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features   все виды запросов

// ?   all подходит для всех устройств
// ?   print предназначен для постраничных материалов и документов, просматриваемых на экране в режиме предварительного просмотра. ( Информацию о проблемах форматирования, характерных для этих форматов, см. На страничном носителе .)
// ?   screen предназначен в первую очередь для экранов.
// ?   speech предназначен для синтезаторов речи.

// ?   width
// ?   height
// ?   aspect-ratio(соотношение сторон экрана устройства)
// ?   orientation: portrait или landscape
// ?   resolution(проверяет разрешение экрана, плотность пикселей)
// ?   color(количество бит на каждый из цветовых компонентов устройства). Например, (min-color: 4) означает, что экран конкретного устройства должен иметь 4-битную глубину цвета
// ?   color-inde(проверяет количество записей в таблице подстановки цветов.)
// ?   monochrome()
/*
**
***
****
*****/
//?=============================================================================
//? /@layer/
/*
**
***
****
*****/
//?=============================================================================
//? /@namespace/
//? как то ограничивать стили для html(svg) встроенных
/*
**
***
****
*****/
//?=============================================================================
//? /@page/
//? набор правил css, для печати, когда мы хотим распечатать страницу будут применены эти стили, можно использовать с :first, :left
/*
**
***
****
*****/
//?=============================================================================
//? /CssVariables/@propery/customproperties/
//? Нельзя использовать в медиазпросах и тд, в целом, единственное для чего можно их использовать - хранить значение и подставлять ТОЛЬКО в значение свойства css
/*
**
***
****
*****/
//?=============================================================================
//? /@scope/
//? можно указать область видимости от какого селектора до какого будут применены стили
/*
@scope (:root) to (.child) {
    :scope {
        background: black;
    }

    div {
        color: red;
    }
}
*/
/*
**
***
****
*****/
//?=============================================================================
//? /@supports/
//? поддерживаем ли браузер свойство
/*
**
***
****
*****/
//?=============================================================================
//? /@view-transition/
//? TODO
/*
**
***
****
*****/
//!=============================================================================
//? /pointer-events/
//? может ли элемент выступать в виде target, и может ли получать ивенты
//? none при этом нельзя кликать на элемент, но можно через tab перевести фокус на него, а также если дочерние элементы имеют отличный pointer-event, то из за всплытия событий отключенный элемент тоже получит событие, а также можно через dispatchEvent закинуть кастомное событие и оно отработает
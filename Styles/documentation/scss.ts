//? Способы добавления стилей на страницу
// http://htmlbook.ru/samcss/sposoby-dobavleniya-stiley-na-stranitsu



//!====================================================================================================
//? Статьи
// https://tproger.ru/translations/complete-sass-guide/
// https://zaurmag.ru/html5-css3/preprotsessor-sass.html#1064107210731083108610851099-107910721075108610901086107410821080



//!====================================================================================================
//? Вложенность
// https://sass-scss.ru/documentation/rasshirenie_css/
/*
? Можно вкладывать селекторы; обращаться к текущему селектору; дополнительно устанавливать составные селекторы; вкладывать свойства; добавлять шаблонные селекторы(extend);

? внутри класса "main" идет обращение к "redbox" классу, который находится внутри "main"

? внутри ссылки мы обращаемся к ней же с помощью "&" и дополнительно устанавливаем на нее hover

? внутри класса "custom" мы обращаемся к этому классу и дополняем этот класс, т.е. внутри класса "custom" будут классы "custom-title / custom_text"

? внутри вложенного свойства "font" мы дополняем это свойство family и size, т.к. они имеют одно и то же начало, в итоге соберется обычные css значения

? внутри inline-type мы определяем значения, которые не будут сгенерированы, без использования extend. Мы можем как бы наследоваться от них

? символ "&" может записать в переменную значение селектора текущего элемента

.main {
    width: 97%;

    .redbox {
        width: 100%;

        a {
            font-size: 20px;

            &:hover {
                font-size: 24px;
            }
        }
    }

    .custom {

        &-title {
            font-size: 15px;
        }
        &_text {
            font-size: 12px;
        }
    }

    font: {
        family: fantazy;
        size: 12px;
    }

    %inline-type {
        display: inline-block;
        *display: inline;
        *zoom: 1;
    }

    .foo.bar .baz.bang, .bip.qux {
        $something: &;
    }
    RESULT
    (("foo.bar""baz.bang"), "bip.qux")
}
*/



//!====================================================================================================
//? SassScript
// https://sass-scss.ru/documentation/sassscript/

/*=================================================================================================*/
//? Переменные
/*
? переменные объявляются со знаком доллара "$" и записывается имя переменной, а затем просто обращаемся по такому же синтаксису к переменной

? если переменная объявлена $q-some, то к ней можно обращаться через $q_some, эти записи идентичны

? в переменную можно установить дефолтное значение, если переменная еще не имела никаких значение, то установится дефолтное, если там уже лежит что-то, то дефолт просто пропуститься

? приватные переменные называются через - или _ вначале, и потом когда мы используем этот файл через @use к ним доступа не будет

$width: 5em;
.main {
    width: $width;
}


Тут применится white
$color: red !default;
$color: white;
.box {
    color: $color;
}
*/



//!====================================================================================================
//? Типы данных
// https://sass-scss.ru/documentation/sassscript/tipi_dannih/
/*
? в sass 7 типов данных:
?   числа(1, 2.343, 45px)
?   текстовые строки с кавычками и без них ("foo", 'bar', baz)
?   цвета (blue, #04a3f9, rgba(255, 0, 0, 0.5))
?   булевы значения (true, false)
?   null
?   списки значений, с разделительными пробелами или запятыми (1.5em 1em 0 2em; Times New Roman, Arial, sans-serif)
?   массивы(мапы) (key1: value1, key2: value2)
*/



//!====================================================================================================
//! Операторы
// https://sass-lang.com/documentation/operators
/*
? можно использовать равно, больше меньше или равно и т.д.
*/



//!====================================================================================================
//? Операции
/*
? круглые скобки так же, как и в математике указывают порядок действий
p {
    width: (1em + 2em) * 3;
}
*/

//?====================================================================================================
//? Деление в SCSS
// https://sass-scss.ru/documentation/sassscript/delenie_&_slash/
/*
? Символ деления "/" работает как символ деления только в трех случаях:
?   если значение или любая его часть, хранится в переменной или возвращается функцией
?   если значения заключены в круглые скобки
?   если значение используется как часть другого арифметического выражения

$width: 1000px;
p {
    font: 10px/8px;             // Явный CSS, деление отсутствует
    width: $width/2;            // Используется переменная, операция деления
    width: round(1.5)/2;        // Используется функция, операция деления
    height: (500px/2);          // Обособление скобками, операция деления
    margin-left: 5px + 8px/2px; // Используется +, операция деления
}

RESULT
p {
    font: 10px/8px;
    width: 500px;
    width: 1;
    height: 250px;
    margin-left: 9px;
}

? Если вы хотите использовать символ "/" в переменной, в значении обычного CSS "/", вы можете заключить переменную в #{}, например:
$font-size: 12px;
$line-height: 30px;
p {
    font: #{$font-size}/#{$line-height};
}

RESULT
p {
    font: 12px/30px;
}
*/


//?====================================================================================================
//? Операции с цветами
// https://sass-scss.ru/documentation/sassscript/tsvetovie_operatsii/
/*
? вычислит 01 + 04 = 05, 02 + 05 = 07, и 03 + 06 = 09, в результате будет получен цвет:

p {
    color: #010203 + #040506;
}

RESULT
p {
    color: #050709;
}


? для выполнения операция с альфа-каналом(прозрачность в rgba например), следует использовать одинаковые по прозрачности цвета, т.к. scss не умеет считать альфа-канал и будет его отбрасывать
*/


//?====================================================================================================
//? Операции со строками
// https://sass-scss.ru/documentation/sassscript/strokovie_operatsii/
/*
? Если к строке с кавычками прибавить без них, то получим строку с ними, если к строке без кавычек, то получем без них

p:before {
    content: "Foo " + Bar;
    font-family: sans- + "serif";
}

RESULT
p:before {
    content: "Foo Bar";
    font-family: sans-serif;
}


? Возможна интерполяция строк, для динамического контента, null обрабатывается, как пустая строка(второй пример(content))
p:before {
    content: "Я съел #{5 + 10} пирогов!";

    content: "там #{null} он"
}

RESULT
p:before {
    content: "Я съел 15 пирогов!";

    content: "там  он"
}


? возможно в переменной определять селектор, по которому будем обращаться в дальнейшем
$name: foo;
$attr: border;
p.#{$name} {
    #{$attr}-radius: 50px;
}
*/



//?====================================================================================================
//? Условия
/*
? if, and, not

$menuOn: true;
$menuDropDown: false;
.menu li {
    text-decoration: underline;
    @if $menuOn == true and $menuDropDown == true {
        position: relative;
    }
}
*/



//!====================================================================================================
//? Функции
// https://sass-lang.com/documentation/modules



//!====================================================================================================
//? Директивы
// https://sass-scss.ru/documentation/pravila_i_direktivi/direktiva_import/


/*=================================================================================================*/
//? @use
// https://sass-lang.com/documentation/at-rules/use
/*
? плюс в том, что подключенный файл будет скомпилирован единожды для ВСЕГО проекта

? включает другой файл в текущий, можно переопределить обращение к этому файлу, по дефолту обращение - название файла, ну либо можно перезаписать " as * "

? можно также при подключении переопределить используемые переменные с помощью with;

cornder.scss;
$radius: 3px;
@mixin rounded {
    border-radius: $radius;
}
style.scss;
@use './corner.scss' as em;
.div {
    @include em.rounded;
}


library.scss;
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;
code {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
}
style.scss;
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
*/


/*=================================================================================================*/
//? @import
/*
? По умолчанию ищет scss файлы, но несколько правил ломают это и тогда он работает, как обычный css импорт
?   Если расширение файла .css
?   Если имя файла начинается с http://
?   Если имя файла вызывается через url()
?   Если правило @import включает в себя любые медиа-запросы

? если мы хотим, чтобы при компиляции файлы не собирались в css(не создавались доп. файлы), то при создании просто к имени добавляем "_", а импортируем точно также, без "_", и вуаля, созданный файл не будет скомпилирован дополнительно

@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
RESULT
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);

@import "foo.scss";
@import "foo";
RESULT
@import "foo";
*/


/*=================================================================================================*/
//? @media
// https://sass-scss.ru/documentation/pravila_i_direktivi/direktiva_media/
/*
? в медиазапросы можно вкладывать другие медиазапросы, которые потом будут объеденены через and, а вложенные селекторы будут вынесены в отдельный медиазапрос

@media screen {
    .sidebar {
        @media (orientation: landscape) {
            width: 500px;
        }
    }
}


? также медиазапросы могут использовать переменные в имени и значениях

$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;
@media #{$media} and ($feature: $value) {
    .sidebar {
        width: 500px;
    }
}
*/


/*=================================================================================================*/
//? @extend
// https://sass-scss.ru/documentation/pravila_i_direktivi/direktiva_extend/
/*
? можно наследоваться от какого-то селектора, то есть все стили в данном случае .error будут применяться к .seriousError, по факту, после компиляции все элементы с классом seriousError будут иметь также и класс error, и вот тут как раз можно использовать селекторы объявленные через "%", они не будут скомпилированы, но применятся там, где мы наследуемся от них

.error {
    border: 1px #f00;
    background-color: #fdd;

    .example {
        color: red;
    }
}
.seriousError {
    @extend .error;
    border-width: 3px;
}


? принцип работы следующий: принцип расширяющего селектора, то есть к селектору, от которого мы наследуемся добавляется селектор, где мы наследуемся
? также можно наследоваться бесконечно много раз, и все также будут применяться селекторы от изначального и дальше по убыванию
.error {
    border: 1px #f00;
    background-color: #fdd;
}
.error.intrusion {
    background-image: url("/image/hacked.png");
}
.seriousError {
    @extend .error;
    border-width: 3px;
}
RESULT
.error, .seriousError {
    border: 1px #f00;
    background-color: #fdd;
}
.error.intrusion, .intrusion.seriousError {
    background-image: url("/image/hacked.png");
}
.seriousError {
    border-width: 3px;
}


? !optional
? разрешает не создавать селектор, если вдруг произошла какая то ошибка
https://sass-scss.ru/documentation/pravila_i_direktivi/metka_neobyazatelnosti_optional/
a.important {
    @extend .notice !optional;
}


? нельзя использовать @extend в @media, если селектор от которого мы наследуемся находится вне медиазапроса
Правильно
@media print {
    .error {
        border: 1px #f00;
        background-color: #fdd;
    }
    .seriousError {
        @extend .error;
        border-width: 3px;
    }
}
Неправильно
.error {
    border: 1px #f00;
    background-color: #fdd;
}
@media print {
    .seriousError {
        @extend .error;
        border-width: 3px;
    }
}
*/


/*=================================================================================================*/
//? @at-root
// https://sass-scss.ru/documentation/pravila_i_direktivi/direktiva_at-root/


/*=================================================================================================*/
//? @debug
// https://sass-scss.ru/documentation/pravila_i_direktivi/direktiva_debug/
/*
? выводи значения функций scss(что то типа логирования)
*/


/*=================================================================================================*/
//? @warn
// https://sass-scss.ru/documentation/pravila_i_direktivi/direktiva_warn/
/*
? выводи значения функций scss(что то типа логирования предупреждений)
*/


/*=================================================================================================*/
//? @error
// https://sass-scss.ru/documentation/pravila_i_direktivi/direktiva_error/
/*
? выводи значения функций scss(что то типа логирования ошибок)
*/


/*=================================================================================================*/
//? @if @else
// https://sass-scss.ru/documentation/direktivi_kontrolya_i_virazheniya/direktiva_if/
/*
? служат для ветвления условий, не сработает только в том случае, если значение передано false или null
$a: 10;
$b: 15;
.example {
    @if $a < $b {
        border: 1px solid;
    } @else if $b > $a {
        border: 5px solid;
    } @else {
        border: 5px solid red;
    }
    font-size: 12px;
}
*/


//?====================================================================================================
//? @for
// https://sass-scss.ru/documentation/direktivi_kontrolya_i_virazheniya/direktiva_for/
/*
? директива служит для выполнения цикла, также как и в обычном ЯП, можно указать от большего к меньшему в цикле, и тогда цикл пойдет на убывание
? существует 2 синтаксиса:
?   @for $i from <начало> through <конец>
?   @for $i from <начало> to <конец>

@for $i from 1 through 3 {
    .item-#{$i} {
        width: 2em * $i;
    }
}
RESULT
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
.item-3 {
  width: 6em;
}


? пример с длинной тенью
$shadow;
.example {
    @for $i from 1 to 50 {
        $shadow: $shadow, #{ $i }px #{ $i / 2 }px red;
    }
}
*/


//?====================================================================================================
//? @while
// https://sass-scss.ru/documentation/direktivi_kontrolya_i_virazheniya/direktiva_while/
/*
? пока условие правдиво, будет выполнятся тело цикла

? пока переменная больше 0 устанавливаем селектор и уменьшаем переменную
$i: 3;
@while $i > 0 {
    .icon-#{$i} {
        font-size: #{$i}px;
        $i: $i - 1;
    }
}
*/


//?====================================================================================================
//? @each
// https://sass-scss.ru/documentation/direktivi_kontrolya_i_virazheniya/direktiva_each/
/*
? служит для перебора списков(карты значений)
? @each $var in <список или карта значений>

@each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
        background-image: url('/images/#{$animal}.png');
    }
}
RESULT
.puma-icon {
    background-image: url('/images/puma.png');
}
.sea-slug-icon {
    background-image: url('/images/sea-slug.png');
}
.egret-icon {
    background-image: url('/images/egret.png');
}
.salamander-icon {
    background-image: url('/images/salamander.png');
}


? может также создавать переменные, если список содержит другой список
https://sass-scss.ru/documentation/direktivi_kontrolya_i_virazheniya/mnozhestvennie_znacheniya/
@each $animal, $color, $cursor in (puma, black, default), (sea-slug, blue, pointer),(egret, white, move) {
    .#{$animal}-icon {
        background-image: url('/images/#{$animal}.png');
        border: 2px solid $color;
        cursor: $cursor;
    }
}
RESULT
.puma-icon {
    background-image: url('/images/puma.png');
    border: 2px solid black;
    cursor: default;
}
.sea-slug-icon {
    background-image: url('/images/sea-slug.png');
    border: 2px solid blue;
    cursor: pointer;
}
.egret-icon {
    background-image: url('/images/egret.png');
    border: 2px solid white;
    cursor: move;
}


? с мапами тоже все прикольно работает, можно брать ключ значение
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
        font-size: $size;
    }
}
RESULT
h1 {
    font-size: 2em;
}
h2 {
    font-size: 1.5em;
}
h3 {
    font-size: 1.2em;
}
*/



//!====================================================================================================
//? Миксины Mixins @mixin
// https://sass-scss.ru/documentation/miksini/
/*
? миксин определяется через @mixin <name> и вызывается через директиву @include

? в миксины, как и в функции ЯП можно передавать аргументы и задавать их по умолчанию, также можно передавать именованные агрументы, чтобы не ошибиться что куда идет

? также можно передавать неизвестное количество параметров(что то вроде rest в JS)      https://sass-scss.ru/documentation/miksini/peremennie_argumenti/

? в миксины можно передавать контент, который применится к этому селектору при вызове миксина       @content

? в местах вызова миксина будет скопирован код этого миксина

@mixin large-text {
    font: {
        family: Arial;
        size: 20px;
        weight: bold;
    }
    color: #ff0000;
}
a {
    @include large-text;
}


@mixin large-text {
    div {
        &.active {
            color: #ff0000;
        }
    }
}
@include large-text;


@mixin some($color: red, $width: 300px) {
    color: $color;
    width: $width;
}
div {
    @include some( , 200px); не знаю, можно так или нет(первый параметр пропускать, как при деструктуризации в JS)
}
можно было бы записать через именовынные аргументы и поменять местами, компилятор не ошибется в этом случае
div {
    @include some($width: 200px, $color: white);
}


https://sass-scss.ru/documentation/miksini/peremennie_argumenti/
? тут принимается список
@mixin box-shadow($shadows...) {
    -moz-box-shadow: $shadows;
    -webkit-box-shadow: $shadows;
    box-shadow: $shadows;
}
.shadows {
    @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}

@mixin colors($text, $background, $border) {
    color: $text;
    background-color: $background;
    border-color: $border;
}

$values: #ff0000, #00ff00, #0000ff;
.primary {
    @include colors($values...);
}

$value-map: (text: #00ff00, background: #0000ff, border: #ff0000);
.secondary {
    @include colors($value-map...);
}


? передача контента в миксин
@mixin desctopHover {
    @media(hover: hover) {
        @content
    }
}
a {
    color: white;
    transition: 0.3s ease;

    @include desctopHover {
        color: red;
    }
}


? область видимости переменных
$color: white;
@mixin colors($color: blue) {
    background-color: $color;
    @content;
    border-color: $color;
}
.colors {
    @include colors {
        color: $color;
    }
}
*/



//!====================================================================================================
//? Functions функции @function
// https://sass-scss.ru/documentation/funktsii/
/*
? функции определяются через @function

? можно определять собственные функции, с условиями и т.д. но обязательно должны вызывать @return, чтобы вернуть значение из функции

? также можно передавать именованные аргументы, как и в миксины

? несогласованное правило, свои функции определять через префикс "-", чтобы читатель понимал, что эта функция кастомная и не относится к SASS

$width: 40px;
$width: 10px;

@function grid-width($n) {
  @return $n * $width + ($n - 1) * $width;
}

.sidebar {
    width: grid-width(5);
}
*/



//!====================================================================================================
//? Встроенные функции Модули
// https://sass-lang.com/documentation/modules
/*
? Sass имеет много встроенных модулей, каждый из которых содержит функции из коробки
? Модули подключаются через @use 'sass:<name module>', можно также перезаписать обращение к этому модулю
*/


//?====================================================================================================
//? Map
/*
? map.deep-merge() принимает карты и объединяет их
$helvetica-light: (
    "weights": (
        "lightest": 100,
        "light": 300
    )
);
$helvetica-heavy: (
    "weights": (
        "medium": 500,
        "bold": 700
    )
);
RESULT
"weights": (
    "lightest": 100,
    "light": 300,
    "medium": 500,
    "bold": 700
);


? map.deep-remove($map, $key, $keys...) принимает карту и неограниченные ключи(по этим ключам будет составлен путь до целевого удаляемого свойства, аналог - обьект, указываем путь до свойства, которое хотим удалить)
$fonts: (
    "Helvetica": (
        "weights": (
            "regular": 400,
            "medium": 500,
            "bold": 700
        )
    )
);
map.deep-remove($fonts, "Helvetica", "weights", "regular");
RESULT
$fonts: (
    "Helvetica": (
        "weights": (
            "medium": 500,
            "bold": 700
        )
    )
);


? map.get($map, $key, $keys...) принимает карту, и ключи(также составит путь до целевого свойства и вернет его, если есть, если нет - null)


? map.has-key($map, $key, $keys...) есть ли свойство по этому пути в этой карте


? map.keys($map) возвращает ключи карты через запятую(Object.keys)


? map.values($map) возвращает значения карты через запятую(Object.values)


? map.merge($map1, 'regular', $map2) объединяет карты, можно также передавать ключи, в данном случае объединение будет 'regular' из первой карты со второй картой


? map.remove($map, $keys...) возвращает новую картку без указаных ключей


? map.set($map, $key, ...$key, $value) устанавливает свойство в карту, можно также указывать путь до определенного свойства, куда хотим установить
*/


//?====================================================================================================
//? Math
/*
? math.$e - константа 'е' - 2.7182818285


? math.$pi - pi - 3.1415926536


? math.ceil($number) - округляет число вверх


? math.floor($number) - округление вниз


? math.round($number) - до ближайшего целого


? math.clamp($min, $number, $max) принимает миниальное, число и максимальное число, и если число меньше минимального, возвращает минимальное, если больше максимального - максимальное, если меньше максимального и больше минимального возвращает само себя


? math.max($number...) / math.min($number...) возвращает максимальное / минимальное из переданных (можно также передавать значения с пикселями)


? math.abs($number) - абсолютное число вернется


? math.hypot($number...) - принимает числа, возводит их в квадрат, складывает и возвращает корень из этой суммы


? math.log($number, $base: null) - логарифм числа по отношению к base


? math.pow($number, $exponent) - повышает число в степень указанную вторым параметром


? math.sqrt($number) - вернет квадратный корень числа


? math.cos($number) - косинус угла, единицы по умолчанию в радинах, либо deg


? math.sin($number) - синус


? math.tan($number) - тангенс


? math.acos($number) - арккосинус


? math.asin($number) - арксинус


? math.atan($number) - арктангенс


? math.atan2($y, $x) - Возвращает арктангенс с двумя аргументами от $y и $x deg


? math.random($limit: null) - вернет рандомное, аргумень - максимальное значение
*/

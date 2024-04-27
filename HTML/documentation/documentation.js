//? Video
//? https://developer.mozilla.org/ru/docs/Web/HTML/Element/video
//? https://developer.mozilla.org/ru/docs/Web/HTML/Element/track
//? https://developer.mozilla.org/ru/docs/Web/API/HTMLMediaElement
//? https://www.youtube.com/watch?v=C5q0ULg0nmY&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81
/*
<video>
    <source src="<path>" type="<type>">
    <source src="<path>" type="<type>">
</video>

? Для адаптива использовать можно свойство "aspect-ratio" из CSS, это соотношение сторон видео, работает только в chrome. Оно может использовать для получения изначального размера на определенной ширине(крч, просто ставим сайт на ширину макета, включаем это свойство, получаем изначальное значение), а потом паддингом видео мы подгоняем под этот размер. Это решение хорошо, когда размер видео 16/9, чтобы не было видно черных полос на видео
? object-fit также можно использовать для видео.
*/

//? Встраивание видео
//? iframe убираем width и height из html, и в CSS применить тоже самое, то есть object-fit и паддинг
/*
**
***
****
*****/
//!=============================================================================
//? /Form/
//? /Output/
// https://developer.mozilla.org/ru/docs/Web/HTML/Element/output
/*
**
***
****
*****/
//!=============================================================================
//? /HTMLELEMENT/



//? /inert/
//? похоже на pointer-events: none, но отключает так же фокусирование возможность и любые пользовательские действия а также запрет копирования текста

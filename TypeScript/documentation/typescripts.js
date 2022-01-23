//? TypeScript



//? CLI
// https://www.typescriptlang.org/docs/handbook/compiler-options.html


//? Установка
//? npm i -D typescript


//? Инициализация конфига для проекта(чтобы вызывать tsc typescript должен быть установлен глобально)
//? Все настройки можно посмотреть тут
// https://www.typescriptlang.org/tsconfig

//? tsc --init
//? команда создат tsconfig.json


//? Для компиляции файлов ts в js, нужно вызвать команду tsc, которая будет компилировать файлы и помещать их в папку определенную согласно настройкам, все файлы не будут собраны в один бандл, т.к. это дело webpack


//? При использовании сторонних библиотек(lodash), typescript может не знать о их типизации, для этого в проект надо дополнительно устанавливать пакеты типизаций
// https://www.typescriptlang.org/dt/search?search=
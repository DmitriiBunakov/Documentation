# Установка
npm install --save-dev webpack
npm i -D webpack-cli

# Нужно создать файл настроек
webpack.config.js

# Для того, чтобы использовать scss либо же, например, typescript нужны обработчики специальные, которые потом будут использоваться в конфигурационном файле

# Чтобы компилировать typescript сразу в бандлы
https://webpack.js.org/guides/typescript/

npm install --save-dev typescript ts-loader

# Для старта сборки нужно прописать
npx webpack
если хотим отслеживать изменения файлов, то
npx webpack watch

также можно добавить эти скрипты в package,json
"build": "webpack",
"watch": "webpack --watch",
"start": "npm run build && npm run watch"
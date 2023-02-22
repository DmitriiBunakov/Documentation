//*=============================================================================
//? /Webpack/
//? Для чего нужен?
//? чтобы собирать проект и оптимизировать, и позволяет много чего делать

//? 1) например чтобы явно использовать зависимости в проекте. Например lodash можно подключить как отдельный скрипт, и использовать его в нашем скрипте, но проблемы будут если он будет подключен после нашего скрипта, либо если мы его вообще не используем, то он будет загружен, а пользоваться им не будем, и то что неявно он подключается
/*
**
***
****
*****/
//*=============================================================================
//? /Code splitting/split/разделение кода/
//https://webpack.js.org/guides/code-splitting/
//? можно указывать несколько входных точек файлов, но тут есть проблема, что сборщик соберет зависимости для этих файлов в каждый из них
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
//*=============================================================================
//? /Library/
// https://webpack.js.org/guides/author-libraries/
//*=============================================================================
// https://webpack.js.org/plugins/split-chunks-plugin/
//? /Optimization/Оптимизация/
//? при импортировании конкретной функции нужно импортировать конретную функцию, чтобы сборщик правильно экспортировал только одну
/*
**
***
****
*****/
//*=============================================================================
//? /CSS/
// https://webpack.js.org/guides/asset-management/#loading-css
// https://webpack.js.org/loaders/css-loader/
//? npm install --save-dev style-loader css-loader



//? /style-loader/
// https://webpack.js.org/loaders/style-loader/
//? в главный js импортируется главный css файл и сборщик соберет стили и через js вставит их на страницу, для каждого css будет создан отдельный style тэг, их можно объеденить в один

//? также можно настроить style-loader чтобы загружать стили в один тег или разные и тд
//? также можно лениво их загружать и использовать по событию

//? можно указать место вставки стилей

//? чтобы использовать css как отдельные файлы то мы можем использовать плагин https://webpack.js.org/plugins/mini-css-extract-plugin/



//? /css-loader/
// https://webpack.js.org/loaders/css-loader/
//? позволяет обрабатывать css(напрмер css modules работает благодоря ему)



//? /postcss/
// https://webpack.js.org/loaders/postcss-loader/#getting-started
// https://github.com/postcss/postcss
//? npm install --save-dev postcss-loader postcss
//? имеет кучу плагинов по обработке css, например autoprefixer


//? /autoprefixer/
//? npm install -D autoprefixer


//? /env/
//? npm install postcss-preset-env --save-dev
//? затем вызвать в плагинах postCss postcssPresetEnv()
//? browsersList нужно добавить в проект, чтобы префиксер работал



//? /sass-loader/
// https://webpack.js.org/loaders/sass-loader/
//? npm install sass-loader sass webpack --save-dev
//? для преобразования в css
/*
**
***
****
*****/
//*=============================================================================
//? /Asset modules/Files/Asset/
// https://webpack.js.org/guides/asset-modules/
//? можно использовать файлы в js, картинки, файлы и тд


//? для корректного разрешения путей нужно прописать для этого лоадера
/*
generator: {
    publicPath: './dist/assets/',
    outputPath: './dist/assets/'
},
*/
/*
**
***
****
*****/
//*=============================================================================
//? /CSV/XML/
// https://webpack.js.org/guides/asset-management/#loading-data
//? json и так уже встроено в вебпак
/*
**
***
****
*****/
//*=============================================================================
//? /Установка базовая/Install/
// https://webpack.js.org/guides/getting-started/
//? npm install webpack webpack-cli --save-dev


//? /Config/
// https://webpack.js.org/configuration/configuration-languages/
//? чтобы файл конфигурации был написан на ts нужно установить эти зависимсти, создать tsconfig в котором modules = commonJs
//? npm install --save-dev typescript ts-node @types/node @types/webpack


//? экспортировать можно несколько обьектов настройки, чтобы например для разных видов модулей собрать файлы, также можно функцию вместо обьекта экспортировать и туда будут 2 аргумента проброшены по настройке сборщика



//? /entry/
//? тут можно выходные файлы прописывать, сколько их будет главных
//? также можно на выходе подстовлять имена этих файлов output: {filename: '[name].bundle.js'}
/*
**
***
****
*****/
//*=============================================================================
//? /Plugins/



//? /HtmlWebpackPlugin/
// https://github.com/jantimon/html-webpack-plugin
//? npm install --save-dev html-webpack-plugin
//? автоисправление html
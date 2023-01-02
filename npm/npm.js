//*=============================================================================
// https://docs.npmjs.com/cli/v9
// https://docs.npmjs.com/cli/v9/using-npm
//? /Commands/
//? npm init
//? npm adduser
//? npm publish
//? npm version patch

//? npm install (--save-prod(по умолчанию)/--save-dev) - устанавливает пакет в проект наш и добавляет зависимость в json

//? npm publish --access public - для пакетов с областью видимости(@angular/cli, @nestjs), --access public устанавливает в публичный доступ, тк приватный только для платных подписок
//? npm unpublish <package-name> -f - удалить из реестра
//? npm unpublish <package-name>@<version> - удалить версию

//? npm outdated -g --depth=0
//? npm update -g <package_name>
//? npm update -g

//? npm list -g
//? npm list -g --depth=0

//? npm uninstall <package_name>
//? npm uninstall <@scope/package_name>
//? npm uninstall --no-save lodash
//? npm uninstall -g <package_name>
//? npm uninstall -g <@scope/package_name>

/*
**
***
****
*****/
//*=============================================================================
// https://docs.npmjs.com/about-package-readme-files
//? /README/README.md/
//? какие то инструкции описываются а также ключевые слова
/*
**
***
****
*****/
//*=============================================================================
// https://semver.npmjs.com/
// https://semver.org/
// https://docs.npmjs.com/cli/v9/configuring-npm/package-json
// https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies
//? /Package/Package.json/
//? пакет описывается package.json файлом и все что лежит в этой папке будет считаться пакетом npm


//? каждый пакет должен иметь соответствующую семантически правильную версию
// (
    // https://semver.org/
    // https://docs.npmjs.com/about-semantic-versioning
// )
/**
 *? 1.0.0 - первая версия
 *? 1.0.1 - исправление обратной совместимости
 *? 1.1.0 - новые возможности с обратной совместимостью
 *? 2.0.0 - ломает все к хуям
*/


//? npm install (--save-prod(по умолчанию)/--save-dev) - устанавливает пакет в проект наш и добавляет зависимость в json


//? dependencies - зависимости которые должны быть после сборки проекта, то есть в продакшн
//? devDependencies - зависимости для разработки(например typescript)
//? peerDependenciesMeta/peerDependencies- нужно указать зависимости, без которых нельзя запускать пакет. Те явно будут выкинуты ошибки, что нельзя использовать пакет с другими версиями из этого списка зависимостей
//? optionalDependencies - необязательные зависимости, но нужно обязательно проверить самому, есть ли данный пакет или нет у конечного пользователя (https://docs.npmjs.com/cli/v9/configuring-npm/package-json#optionaldependencies)
//? bundleDependencies -

//? engines - с какими версиями работает пакет(версия ноды, библиотеки и тд)
/*
**
***
****
*****/
//*=============================================================================
// https://docs.npmjs.com/about-public-packages
// https://docs.npmjs.com/package-name-guidelines
//? /Public/Scoped/Unscoped/
//? публичный пакет - полностью доступен всем пользователям


//? unscoped - пакет на который можно ссылаться обратившись просто как имя(react, lodash), и импортирование файлов будет такое же, имя пакета должно быть уникальным


//? scoped - пакет для установки которого и использования используют префиксы организации(например @nestjs)
//? для публикации такого пакета нужно написать npm publish --acess public чтобы он был общедоступным, иначе только платно
//? возможно публикация только при создании организации, и в области этой организации будет опубликован пакет
/*
**
***
****
*****/
//*=============================================================================
// https://docs.npmjs.com/about-private-packages
//? /Private/
//? приватный пакет - только по подписке
/*
**
***
****
*****/
//*=============================================================================
// https://docs.npmjs.com/policies/unpublish
// https://docs.npmjs.com/deprecating-and-undeprecating-packages-or-package-versions
//? /Deprecation/
//? пакеты нежелательно удалять из реестра, тк на него полагаются, поэтому нужно их помечать как устаревшие

//? npm deprecate <package-name> "<message>"
//? npm deprecate <package-name>@<version> "<message>"
//? npm deprecate <package-name>@<version> ""
/*
**
***
****
*****/
//*=============================================================================
// https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities
//? /Audit/Npm Audit/
//? npm audit - проверяет 
/*
**
***
****
*****/
//*=============================================================================
// https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json
//? /Package-lock/Package-lock.json/
//? создается автоматически при установке зависимостей

//? внутри node_modules есть скрытый файл .package-lock.json, нужен он для того, чтобы при npm i каждый раз не проверять и устанавливать все зависимости
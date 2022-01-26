# https://eslint.org/docs/rules/

## Установка
для добавления линтера ESlint в проект нужно его установить
npm install eslint --save-dev

# затем инициализируем его в проекте
npx eslint --init

отвечаем на вопросы и затем устанавливаем зависимости, также в vscode включаем расширение(eslint)

# установка плагина для импортов
npm i --save-dev eslint-plugin-import


# добавляем в settings.json настройки для автосохранения
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
],

все, линтер готов, осталось его настроить только, базовую настройку можно для примера посмотреть в https://gitlab.com/cava121/front-z/-/merge_requests/8
для обнуление какой то настройки, которая идет из базовых, можно передать null или [0]


# для работы с typescript нужно добавить пару зависимостей
npm i -D @typescript-eslint/eslint-plugin
npm i -D @typescript-eslint/parser
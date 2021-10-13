https://eslint.org/docs/user-guide/getting-started

для добавления линтера ESlint в проект нужно его установить
npm install eslint --save-dev

затем инициализируем его в проекте
npx eslint --init

отвечаем на вопросы и затем устанавливаем зависимости, также в vscode включаем расширение(eslint)

добавляем в settings.json настройки для автосохранения
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
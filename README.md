# Знакомство с TypeScript #

> Этот проект создан для демонстрации работы с TypeScript. Будет написано небольшое SPA-приложение на чистом TypeScript без использования фреймворков.




&ensp;

### Первоначальная установка и настройка ###
___

Установим данные пакеты

```
npm i typescript --save-dev
npx tsc --init
```

Далее добавим файл `webpack.config.js` и конфигурируем.


___
Установка дополнительных зависимостей
```
npm i html-webpack-plugin webpack-dev-server webpack ts-loader css-loader style-loader
```
Создадим файл `index.ts` в `/src/` и поместим туда `console.log('work')`, таким образом проверив работоспособность.

Добавим новый скрипт в package.json: `"start": "npx webpack serve"` и запустим скрипт `npm run start`.

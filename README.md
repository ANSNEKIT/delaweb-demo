# delaweb-demo
Тестовое задание на Vue3 с применением vue-routers, vuex. 

Приложение содержит базовый функцонал авторизации и обладает следующей функциональностью:
* Реализован компонентный подход. Компоненты оформлены через "Composition API" и "Options API" 
* Меню навигации использует Slot для переопределения компонента.
* Реализована авторизация без подключения бекенда. 
* Форма входа реализована во всплывающем окне. При отправке данных блокируется кнопка Войти и показывается Preloader. Поля для авторизации валидируются.
* Роутинг в зависимости от авторизации. Для авторизованного пользователя доступна страница профиля. 
* Профиль можно редактировать. Данные сохраняются в Store.

## Project setup
### Склонируйте репозиторий к себе на ПК.
```
git clone https://github.com/ANSNEKIT/delaweb-demo-app.git
```
### Установите зависимости проекта
```
npm install
```
### Запустите сервер для просмотра в браузере
```
npm run serve
```

### Создайте production сборку
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

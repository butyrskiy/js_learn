// ! LOCAL STORAGE and SESSION STORAGE
// ? В «localstorage» данные хранятся даже после перезагрузки браузера, в «session storage» только пока страница открыта

// Todo. ДОБАВЛЕНИЕ ДАННЫХ
// console.log(localStorage); // Storage {length: 0}

// ? Метод «setItem» первым аргументом принимает ключ, вторым значение.
localStorage.setItem('myItem', 'myValue');

// Todo. ПОЛУЧЕНИЕ ДАННЫХ
// ? Метод «getItem» принимает название ключа
// console.log(localStorage.getItem('myItem')); // 'myValue'


// Todo. Пример ДОБАВЛЕНИЯ объекта в «localstorage»
const user = {
  name: 'Evgenia',
  surname: 'Butyrskaya',
  age: 26,
}

// ? Сразу в виде объекта мы не можем записать данные в «localstorage». Это можно сделать только в формате «JSON».
// ? Получаем объект в виде строки
const UserJSON = JSON.stringify(user);
// console.log(UserJSON); // {"name":"Evgenia","surname":"Butyrskaya","age":26}

// ? Добавляем в «localstorage»
localStorage.setItem('user', UserJSON);
// console.log(localStorage); // {myItem: 'myValue', user: '{"name":"Evgenia","surname":"Butyrskaya","age":26}', length: 2}

// Todo. ПОЛУЧАЕМ ДАННЫЕ
const getUser = localStorage.getItem('user');
console.log(getUser); // {"name":"Evgenia","surname":"Butyrskaya","age":26}

// ? Преобразуем обратно в объект
const objUser = JSON.parse(getUser);
console.log(objUser);


// Todo. УДАЛЕНИЕ ДАННЫХ
// ? Удаляем один элемент
localStorage.removeItem('myItem');

// ? Польностью очищаем «localstorage»
// localStorage.clear();

// ! ВСЕ ПЕРЕЧИСЛЕННЫЕ МЕТОДЫ ТОЧНО ТАКЖЕ РАБОТАЮТ И С «SESSION STORAGE»
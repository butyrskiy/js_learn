const user = {
  firstName: 'Denis',
  lastName: 'Butyrskiy',
  isAdmin: true,
  email: 'test@google.com',
  'user-adress': {
    city: 'Denizli',
    country: 'Turkey'
  },
  skills: ['HTML', 'CSS', ['JavaScript'], ['GIT']],
}

let prop = 'skills';

// Todo. ПОЛУЧЕНИЕ СВОЙСТВ ИЗ ОБЪЕКТА

let value = user.firstName; // получаем свойство объекта через точку
value = user['lastName']; // получаем свойство объекта через квадратные скобки
value = user['user-adress']; // сложные имена ключей можно получить только через квадратные скобки
value = user['user-adress'].city; // получаем свойство вложенного объекта
value = user['user-adress']['country']; // получаем свойство вложенного объекта второй вариант

// ? В квадратные скобки мы можем поместить переменную
value = user[prop]; // ['HTML', 'CSS', Array(1), Array(1)]
value = user[prop][1]; // 'CSS'

// Todo. ЗАПИСЬ СВОЙСТВ В ОБЪЕКТ
// ? Перезаписать свойство в объете
user.firstName = 'Evgenia';
user['user-adress'].city = 'Pamukkale';
user['user-adress'].cityTwo = 'Denizli';

// ? Добавление нового свойства в объект
user.car = false;

console.log(value);
console.log(user);
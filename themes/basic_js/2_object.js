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

// console.log(value);
// console.log(user);


// TODO. КОПИРОВАНИЕ ОБЪЕКТОВ
// ? Присвоение объекта в новую переменную не сработает!

let obj1 = {
  name: 'Denis',
  info: {
    skills: ['html', 'css', 'js'],
  },
}

let newObj = obj1; // ! в переменную присваивается(копируется) только сслыка на объект, а не сам объект. Поэтому, изменяя «newObj» мы будем изменять также и исходный объект
newObj.name = 'Evgenia';
// console.log(newObj); // 'Evgenia'
// console.log(obj1); // 'Evgenia'


// Todo. МЕТОД «Object.assign()». Поверхностное копирование
// ? Первый аргумент(таргет) - объект в который необходимо скопировать. Второй и последующие аргументы - объекты из которых необходимо скопировать данные.

let obj2 = Object.assign({}, obj1);

obj2.name = 'Denis';
// console.log(obj2); // новое значение: {name: 'Denis'}
// console.log(obj1); // осталось прежнее: {name: 'Evgenia'}

// ? Копирование нескольких объектов
let obj3 = {
  age: 26,
}

// ? Если свойства объектов совпадают, то значение в целевом объекте будет перезаписано
let obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4); // {name: 'Denis', info: {…}, age: 26}

// ! Метод «Object.assign()» делает только поверхностное(неглубокое) копирование

let newObj2 = Object.assign({}, obj1);
// console.log(newObj2); // {name: 'Evgenia', info: {…}}

// ? Вложенный объект не скопировался, а скопировалась только ссылка на него
newObj2.info.skills = ['html', 'css', 'js', 'git'];
// console.log(newObj2.info.skills); // ['html', 'css', 'js', 'git']
// console.log(obj1.info.skills); // ['html', 'css', 'js', 'git']


// Todo. Глубокое копирование при помощи JSON
// ? Первым действием мы превращаем тот объект, который нужно скопировать в JSON-формат.
let objJson = JSON.stringify(obj1);
// console.log(objJson); // {"name":"Evgenia","info":{"skills":["html","css","js","git"]}}
// ? Вторым действием мы JSON данные распарсиваем в новый объект
let newObj3 = JSON.parse(objJson);
// console.log(newObj3); // {name: 'Evgenia', info: {…}}
// ? Получаем независимую копию объекта «obj1» в «newObj3»


// Todo. МЕТОД «Object.keys»
// ? Возвращает ключи объекта в виде массива
let keys = Object.keys(obj1);
// console.log(keys); // ['name', 'info']


// Todo. МЕТОД «Object.values»
// ? Возвращает значения объекта в виде массива
let values = Object.values(obj1);
// console.log(values); // ['Evgenia', {…}]


// Todo. МЕТОД «Object.entries»
// ? Возвращает массив с массивами в которых содержатся пара: ключ, значение объекта
let entries = Object.entries(obj1);
// console.log(entries); // [Array(2), Array(2)]


// Todo. МЕТОД «Object.fromEntries»
// ? Принимает массив с массивом значений, которые преобразуются в объект
let fromEntries = Object.fromEntries([['city', 'Denizli'], ['city2', 'London']]);
console.log(fromEntries); // {city: 'Denizli', city2: 'London'}
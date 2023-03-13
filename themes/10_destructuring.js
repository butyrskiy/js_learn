// Todo. ДЕСТРУКТУРИРОВАНИЕ
// ? Это возможность разбить сложные структуры на более простые. Деструктурировать мы можем объекты, массивы

const user = {
  firstName: 'Denis',
  lastName: 'Butyrskiy',
  age: 34,
  info: {
    work: 'LLC',
    skills: ['html', 'css', 'javascript'],
  },
}

// ? Вытягиваем свойства из объекта, при необходимости меняем их названия и задаём значения по-умолчанию, если какое-то свойство отсутствует

// ? Стандартный способ, не оптимальный
// * const firstName = user.firstName;
// * const lastName = user.lastName;
// console.log(firstName); // Denis
// console.log(lastName); // Butyrskiy

// Todo. Деструктурирование. СИНТАКСИС
// * const {firstName, lastName} = user;
// ? Можем добавить свойство, которого пока нет в объекте и задать ему значение по-умолчанию
// * const {firstName, lastName, car = false} = user;
// console.log(firstName, lastName, car);


// Todo. Можем задать другие имена для свойств
const {firstName: myName, lastName, age: years = 30} = user;
// console.log(myName, lastName, years);
// ? запись «age = 30» - дефолтное значение, если такое свойство отсутствует в объекте
// ? Запись «firstName: name» создаёт новое название для доступа к значению объекта


// Todo. Работа с вложенными объектами
const {info} = user; // ? Получаем вложенный объект объекта «User»
// console.log(info); // {work: 'LLC', skills: Array(3)}
 
const {info: {work, skills}} = user; // ? Получаем свойства вложенного объекта
// console.log(work, skills); // LC (3) ['html', 'css', 'javascript']


// Todo. ДЕСТРУКТУРИЗАЦИЯ МАССИВА
const colors = ['black', 'orange', 'red'];
// ? Можем указывать сразу любые произвольные имена, но в том порядке в каком они идут в массиве
const [b, o, r, gr = 'green' ] = colors;
// console.log(r); // red
// console.log(gr); // green


const names = ['Denis', 'Evgenia', 'Jimmy'];
// ? Можно пропустить какие-то элементы
const [, name2, name3] = names;
// console.log(name2, name3);


// Todo. Деструктурирование вложенного массива
const arr = ['hello world', ['key', 'value']];
const [, [key, value]] = arr;
// console.log(key, value);


// Todo. Операторы «REST» и «SPREAD»
// ? Оператор «REST». получаем элементы в виде массива 
const names2 = ['Denis', 'Evgenia', 'Jimmy'];
const [name1, ...otherNames] = names2; // ? Первый элемент будет «name1», а остальные в виде массива
// console.log(name1, otherNames); // Denis (2) ['Evgenia', 'Jimmy']

// ? С помощью оператора «REST» можно скопировать массив
const [...newNames] = names2;
// console.log(names2); // ['Denis', 'Evgenia', 'Jimmy']

// Todo. Оператор «SPREAD». Копируем массив.
// ! НЕ глубокое копирование. Вложенные объекты скопируются по ссылке
const newArr = [...arr]; // ? ставим 3 точки уже перед массивом!
// console.log(newArr); // ['hello world', Array(2)]
// console.log(...names2); // ? можно вывести массив в виде отдельных элементов


// Todo. ОБЪЕДИНЕИЕ двух массивов при помощи оператора SPREAD
const colorsAndNames = ['some value', ...colors, ...names];
// console.log(colorsAndNames); // ['some value', 'black', 'orange', 'red', 'Denis', 'Evgenia', 'Jimmy']


// Todo. КОПИРОВАНИЕ ОБЪЕКТОВ
// ! НЕ глубокое копирование. Вложенные объекты скопируются по ссылке
// const newUser = { ...user };
const newUser = { ...user, age: 30 }; // ? Можно добавить свойство, которое мы хотим изменить или добавить новое
// console.log(newUser); // {firstName: 'Denis', lastName: 'Butyrskiy', age: 30, info: {…}}

// ? Получаем элементы массива из вложенного объекта
const {info: {skills: [html, css]}} = newUser;
// console.log(html, css); // html css


// Todo. Деструктуризация в рамках ФУНКЦИЙ
// ? Вместо стандартных параметров ставим фигурные скобки и пишем ключи объекта. Можем задавать свои имена.
function myFullName({firstName: name, lastName}) {
  console.log(name, lastName);
}
// myFullName(newUser); // Denis Butyrskiy


// ? Чтобы не получать ошибку, когда ничего не передаётся в функицю ставим пустой объект по умолчанию
// * function myPerson({lastName, firstName} = {}) {
// *  console.log(lastName, firstName);
// *}
// * myPerson();

// ? Также можно задать значения по умолчанию для переменных
// * function myPerson({lastName = 'Lastname', firstName = 'Firstname'} = {}) {
// *   console.log(lastName, firstName);
// * }
// * myPerson();


// Todo. Деструктурирование ВЛОЖЕННОГО объекта
function myPerson({lastName, firstName, info: {skills}}) {
  console.log(lastName, firstName);
  console.log(skills);
}
// myPerson(newUser);


// Todo. Получаем все аргументы внутри функции 
function foo(x, y, ...others) {
  // console.log(arguments);
  const [...args] = arguments;
  console.log(args); // ? получаем копию элементов коллекции «arguments» в виде массива
  console.log(others); // ? получаем оставшиеся элементы в виде массива
}
// * foo(1, 2, 5, 6);


// Todo. Передача аргументов в функцию из массива
const numbers = [3, 7];
function foo2(x, y) {
  console.log(x, y);
}
// foo2(numbers[0], numbers[1]); // ? Неудобный способ передачи аргументов в функцию
// foo2(...numbers); // ? оператор разложит массив на элементы и передаст в функцию
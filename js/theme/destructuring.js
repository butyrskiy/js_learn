// ДЕСТРУКТУРИРОВАНИЕ

const user = {
  firstName: 'Denis',
  lastName: 'Butyrskiy',
  age: 34,
  info: {
    work: 'LLC',
    skills: ['html', 'css', 'javascript'],
  }
}

// ВЫТЯГИВАЕМ СВОЙСТВА ИЗ ОБЪЕКТА, ПРИ НЕОБХОДИМОСТИ МЕНЯЕМ ИХ НАЗВАНИЯ И ЗАДАЁМ ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ, ЕСЛИ КАКОЕ-ТО СВОЙСТВО ОТСУТСТВУЕТ

const firstName = user.firstName;
const lastName = user.lastName;

// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// const {firstName: myName, lastName, age: years = 30} = user;
// console.log(myName, lastName, years);

// запись «age = 30» - дефолтное значение, если такое свойство отсутствует в объекте
// запись «firstName: name» создаёт новое название для доступа к значению объекта
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE



// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
const {info} = user;
// console.log(info);
// таким образом в переменной инфо мы получаем вложенный объект «info» 
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// const {info: {work, skills}} = user;
// console.log(work, skills);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// ВЫТЯГИВАЕМ ЗНАЧЕНИЯ ИЗ МАССИВА
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
const colors = ['black', 'orange', 'red'];
const [b, o, r, gr = 'green'] = colors;
// console.log(gr);

// можно пропустить какие-то элементы
const names = ['Denis', 'Evgenia', 'Jimmy'];
const [, name2, name3] = names;
// console.log(name2, name3);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// дуструктурирование вложенного массива
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
const arr = ['hello world', ['key', 'value']];
const [, [key, value]] = arr;

// console.log(key, value);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// операторы REST и SPREAD
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// Оператор REST. получаем елементы в виде массива 
const names2 = ['Denis', 'Evgenia', 'Jimmy'];
const [name1, ...otherNames] = names2;

// console.log(name1, otherNames);

// можно скопировать массив
const [...newNames] = names2;
// console.log(names2);

// оператор SPREAD. Копируем массив
const newArr = [...arr];
// console.log(newArr);
// console.log(...newArr);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// можно объеденить два массива при помощи оператора SPREAD
const colorsAndNames = [...colors, ...names];
// console.log(colorsAndNames);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// копирование объектов
const newUser = { ...user };
// console.log(newUser);

const {info: {
  skills: [html, css]
}} = newUser;

// console.log(html, css);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// function myPerson({lastName, firstName}) {
//   console.log(lastName, firstName);
// }
// myPerson(newUser);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE

// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// чтобы не получать ошибку когда ничего не передаётся в функицю
// function myPerson({lastName, firstName} = {}) {
//   console.log(lastName, firstName);
// }
// myPerson();
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE

// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// а также можно задать значения по умолчанию для переменных
// function myPerson({lastName = 'Lastname', firstName = 'Firstname'} = {}) {
//   console.log(lastName, firstName);
// }
// myPerson();
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE

// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// можем деструктурировать вложенный объект
function myPerson({lastName = 'Lastname', firstName = 'Firstname', info: {skills} = {}} = {}) {
  // console.log(lastName, firstName);
  // console.log(skills);
}
myPerson(newUser);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
// можем получить все аргументы внутри функции 
function foo(x, y, ...others) {
  // console.log(arguments);
  const [...args] = arguments;
  // console.log(args); // получаем элементы в виде массива
  // console.log(others); // получаем оставшиеся элементы
}

foo(1, 2, 5, 6);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE


// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
const numbers = [3, 7];
function foo2(x, y) {
  console.log(x, y);
}

// foo2(numbers[0], numbers[1]);
foo2(...numbers);
// CODE EXAMLE CODE EXAMLE CODE EXAMLE CODE EXAMLE
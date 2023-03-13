// Todo. FUNCTION DECLARATION
// ? Функции, объявленные таким способом «всплывают», то они могут быть вызваны до их объявления.

function sayHello(firstName, lastName) {
  console.log(firstName, lastName);
  console.log('Hello world');
  return `Hello, ${firstName}`;
}

// ! Функция всегда что-то возвращает. Но по-умолчанию, если не указать, что функция должна вернуть, то она вернёт «undefined»
// let res = sayHello('Denis', 'Butyrskiy');
// console.log(res); // undefined, если не написать «return»
// console.log(res); // Hello, Denis c «return»

// ? Можно задать значение аргументов функции по-умолчанию
function getFullName(firstName = 'Name', lastName = 'Name') {
  return `${firstName} ${lastName}`;
}

let res2 = getFullName('Denis', 'Butyrskiy'); // 'Denis Butyrskiy'
let res3 = getFullName(); // 'Name Name' - значения по-умолчанию
// console.log(res3);

// Todo. ОБЛАСТЬ ВИДИМОСТИ ФУНКЦИИ
// ? Плохая практика переопределять переменные в глобальной области видимости
let x = 5;

function foo() {
  x = 10;
  console.log(x); // 10
}

// foo();

// console.log(x); // 10 - функция переопределила глобальную переменную, так как внутри функции не объявлена «своя» переменная «x»;

function foo2() {
  let x = 10; // ? локальная переменная, доступна только внутри функции
  console.log(x); // 10
}

// foo2();

// console.log(x); // 5 - внутри функции объявлена ЛОКАЛЬНАЯ переменная «x», поэтому внешняя переменная «x» осталась прежней

// ? В случае передачи объекта как аргумента в параметр функции и какое-либо его изменение, то будет изменён исходный объект, так как объекты передаются по ссылке.
const user = {
  name: 'Denis',
  age: 34
};

function getObj(obj) {
  obj.name = 'Den';
  console.log(obj);
}

// getObj(user); // {name: 'Den', age: 34} Исходный объект изменён!


// Todo. FUNCTION EXPRESSION
// ? Функция, объявленная таким способом не может быть вызвана до её объявления
const square = function(x) {
  return x * x;
}

// console.log(square(2)); // 4

// ? Коллекция «arguments». Это итерируемая коллекция или псевдомассив, то есть объект, который можно перебирать циклами. Используется редко. Отсутствует в стрелочных функциях
function foo3() {
  // console.log(arguments); // мы видим все аргументы, которые были переданы в функцию, даже если их нет в параметрах
  // console.log(arguments[1]); // 33. Получили доступ к элементу по его индексу

  // ? можем перебрать эту коллекцию
  for(let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]); // 'Hello', 33, [1, 2, 3]
  }
}

foo3('Hello' , 33, [1, 2, 3]); // ['Hello', 33, Array(3), callee: ƒ, Symbol(Symbol.iterator): ƒ]


// Todo. Функции высшего порядка - это функции, которые в качестве параметра принимают другие функции или возвращают другие функции

// Todo. Callback-функции(колбеки) - это функции, которые были переданы в качестве параметров и вызваны внутри функции высшего порядка.

// ? Предположим у нас есть задача создать новый массив «newArr» из элементов, которые будут длиной каждого элемента из текущего массива «arr». А потом добавляется задача перевести каждый элемент массива в верхний регистр

const arr = ['Denis', 'Evgenia', 'Jam', 'John'];

// ? Первый способ (долгий и неоптимальный). Под каждую задачу нужно писать новые цикли, создавать новые переменные.
const newArr = [];
for(i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}
// console.log(newArr); // [5, 7, 3, 4]

const newArr2 = [];
for(i = 0; i < arr.length; i++) {
  newArr2.push(arr[i].toUpperCase());
}
// console.log(newArr2); // ['DENIS', 'EVGENIA', 'JAM', 'JOHN']

// ? Второй способ
// ? Создаём универсальная функцию, которая будет принимать любой массив и любую функцию и делать то, что мы в нашей функции
function mapArray(arr, fn) {
  const res = [];
  for(i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

// функция обработчик
function arrToUpperCase(el) {
  const value = el.toUpperCase();
  return value;
  // return el.toUpperCase(); // можно сразу вернуть элеменит без присвоения в переменную
}

// функция обработчик
function arrToNumber(el) {
  const value = el.length;
  return value;
  // return el.lenght // можно сразу вернуть элеменит без присвоения в переменную
}

const arrUpperCase = mapArray(arr, arrToUpperCase);
// console.log(arrUpperCase); // ['DENIS', 'EVGENIA', 'JAM', 'JOHN']

const arrNumber = mapArray(arr, arrToNumber);
// console.log(arrNumber); // [5, 7, 3, 4]


// Todo. Пример функции высшего порядка, которая возвращает другую функцию
function greeting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  }
}

const testGreeting = greeting('Denis'); // возвращается функция

// ? Теперь мы можем вызвать эту функцию, передав в неё «lastName»
const result = testGreeting('Butyrskiy');
// console.log(result); // 'Hello, Denis Butyrskiy'

// ? Можно сделать даже так.
const fullName = greeting('Denis')('Butyrskiy'); // так как функция «greeting» возвращает другую функцию в переменную «fullName», то мы сразу же можем вызвать её, передав параметр, который пойдёт в «lastName»
// console.log(fullName); // 'Hello, Denis Butyrskiy'


// ? Ещё пример функции высшего порядка, которая возвращает другую функцию
function question(job) {
  if(job === 'Developer') {
    return function(name) {
      return `${name}, что такое JavaScript?`;
    }
  } else if(job === 'Teacher') {
    return function(name) {
      return `${name}, какой предмет вы преподаёте?`;
    }
  }
}

// const developerQuestion = question('Developer')('Denis');
// console.log(developerQuestion); // 'Denis, что такое JavaScript?'
const developerQuestion = question('Developer');
const developer = developerQuestion('Denis');
// console.log(developer); // 'Denis, что такое JavaScript?'

const teacherQuestion = question('Teacher');
const teacher = teacherQuestion('Evgenia');
// console.log(teacher); // Evgenia, какой предмет вы преподаёте?


// ? Улучшение функции выше
function question2(job) {
  // добавляем словарь с вопросами. Такой код очень просто расширять, просто добавляем в словарь новую профессию
  const jobDictionary = {
    Developer: 'что такое JavaScript?',
    Teacher: 'какой предмет вы преподаёте?'
  }
  
  return function(name) {
    return `${name}, ${jobDictionary[job]}`
  }
}

const developerQuestion2 = question2('Developer');
// console.log(developerQuestion2('Denis')); // Denis, что такое JavaScript?
const teacherQuestion2 = question2('Teacher');
// console.log(teacherQuestion2('Evgenia')); // Evgenia, какой предмет вы преподаёте?


// Todo. ARROW FUNCTION. Стрелочные функции
// ? Появились в ES6. Присваивается в переменную
const plus = (a, b) => a + b; // короткая запись c двумя параметрами и одним действием. Не обязательно использовать фигурные скобки и «return»

// console.log(plus(2, 3)); // 5
const plus2 = a => a + 2; // короткая запись с одним пераметром и одним действием. Не обязательно использовать круглые скобки, фигурные скобки и «return»
// console.log(plus2(2)); // 4

const hello = () => console.log('Hello World!'); // синтаксис без параметров
// console.log(hello()); // 'Hello World!' и «undefined»

// ? Можно использовать параметры по-умолчанию
const plus3 = (a = 0, b = 0) => a + b; // если при вызове не были переданы аргументы, то будут использованы параметры по-умолчинию
// console.log(plus3()); // 0

// ? Если в теле функции выполняется больше одного действия, то нужно использовать фигурные скобки и обязательно использовать «return».
const moreAction = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
}
// console.log(moreAction(2, 2)); // 10

// ? Возвращаем объект. Version #1
const returnObj = (str = '') => {
   const obj = {};
   obj.value = str;
   obj.length = str.length;
   return obj;
}
// console.log(returnObj('Hello')); // {value: 'Hello', length: 5}

// ? Возвращаем объект. Version #2
const returnObj2 = (str = '') => {
   return {
    value: str,
    length: str.length,
   };
}
// console.log(returnObj('Hello')); // {value: 'Hello', length: 5}

// ? Возвращаем объект. Version #3
const returnObj3 = (str = '') => ({
  value: str,
  length: str.length,
})
// console.log(returnObj('Hello')); // {value: 'Hello', length: 5}


// Todo. ОСНОВНЫЕ ОТЛИЧИЯ СТРЕЛОЧНЫХ ФУНКЦИЙ ОТ ОБЫЧНЫХ

// ? У обычных функций есть псевдомассив коллекция «arguments». В которой содержаться все переданные в функцию аргументы, даже если их больше, чем параметров функции
function foo(x, y) {
  console.log(arguments);
  return x + y;
}
// foo(1, 2, 3, 'Hello'); // 1, 2, 3, 'Hello', callee: ƒ, Symbol(Symbol.iterator): ƒ]

// ? Стрелочные функции не имеют собственного контекста «this». Она его ищет на уровень выше и будет ссылаться на тот объект, в котором она была вызвана
const obj = {
  firstName: 'Denis',
  surname: 'Butyrskiy',
  age: 34,
  getObj() {
    console.log(this); // ссылается на объект, так как обычная функция
  },
  getName: () => console.log(this), // стрелочная, будет ссылаться на уровень выше «window»
  getNameArrow: null,
  getSurname() {
    this.getNameArrow = () => console.log(this); // объявляем стрелочную функцию и присваимваем в другое свойство.
  },
  getAge() {
    setTimeout(() => console.log(this)); // так тоже будет работать, так как вызываем стрелочную функцию внутри обычной, которая имеет контекст и так как стрелочная берёт контекст на уровень выше, то она его возьмёт у «getAge»
  }
}
// obj.getObj(); // {firstName: 'Denis', surname: 'Butyrskiy', getObj: ƒ}
// obj.getName(); // Window {window: Window, self: Window, document: …}
obj.getSurname(); // присваиваем стрелочную функцию в «getNameArrow»
// obj.getNameArrow(); // работает! получаем объект {firstName: 'Denis', surname: 'Butyrskiy', getObj: ƒ, getName: ƒ, getNameArrow: ƒ, …}
// obj.getAge();

// ? Обычно стрелочные функции не исопользуются как методы у объектов. Чаще всего их используют в качестве колбэков.
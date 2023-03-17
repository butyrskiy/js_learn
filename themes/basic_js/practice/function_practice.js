// ! ЗАДАЧА #1
// Todo. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// ? Если нет ни одного аргумента, вернуть ноль: multiply() // 0


function multiply() {
  // if(arguments.length === 0) return 0;
  if(!arguments.length) return 0; // сокращаем код
  
  let x = 1;
  for(let i = 0; i < arguments.length; i++) {
    if(typeof(arguments[i]) !== 'number') return 'Not a Number'
    x *= arguments[i];
  }
  return x;
}
// console.log(multiply(1, 2, 3, 10)); // 60
// console.log(multiply()); // 0
// console.log(multiply(1, 2, 'abc')); // 'Not a Number'


// ! ЗАДАЧА #2
// Todo. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str) {
  let newStr = '';
  let x = 1;
  
  for(let i = 0; i < str.length; i++) {
    newStr += str[str.length - x];
    x++;
  }
  return newStr;
}
// console.log(reverseString('test')); // 'tset'


// ! ЗАДАЧА #3
// Todo. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа

function getCodeStringFromText(str) {
  let newStr = '';

  for(let i = 0; i < str.length; i++) {
    newStr += str.charCodeAt(i) + ' ';
  }
  console.log(newStr);
}

// getCodeStringFromText('hello') // “104 101 108 108 111” 


// ! ЗАДАЧА #4
// Todo. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом. Если они совпали то возвращает “Вы выиграли”, если нет, то “Вы не угадали ваше число 8, а выпало число 5”.

function guessNumber(number) {
  if (number < 1 || number > 10) return 'Enter correct number';
  const randomNumber = Math.ceil(Math.random() * 10 + 1);
  console.log(randomNumber);

  if(randomNumber === number) { 
    return 'You win!';
  }  else {
    return `You didn't guess. Your number ${number}, but random number ${randomNumber}`;
  }
}
// console.log(guessNumber(3));


// ! ЗАДАЧА #5
// Todo. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
// ? Данное задание выполните после того как познакомитесь с методами массивов.

function getArray(num) {
  let arr = [];

  for(let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(getArray(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// ! ЗАДАЧА #6
// Todo. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. 
// ? Данное задание выполните после того как познакомитесь с методами массивов:
// ? doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
  let newArr = [];
  
  arr.forEach(element => {
    newArr.push(element);
  });
  newArr = newArr.concat(arr);

  console.log(newArr);
}
// doubleArray([1,2,3,4,5]); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]


// ! ЗАДАЧА #7
// Todo. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
// ? Данное задание выполните после того как познакомитесь с методами массивов
// ? changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], 
// ? changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection(arr) {
  let newArr = [];
  let res = [];

  for(let i = 0; i < arguments.length; i++) {
    res = arguments[i].slice(1);
    newArr.push(res);
  }
  return newArr;
}
// console.log(changeCollection([1,2,3], ['a', 'b', 'c'], ['white', 'copper'])); // [Array(2), Array(2), Array(1)]
// console.log(changeCollection([1,2,3])); // [Array(2)]


// ! ЗАДАЧА #8
// Todo. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// ? Данное задание выполните после того как познакомитесь с методами массивов
// ? funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

const users = [ {name: 'Denis', age: 29, gender: 'male'} , {name: 'Ivan', age: 20, gender: 'male'} ]

function funcGetUsers(arr, key, value) {
  let res = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i][key] === value) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(funcGetUsers(users, 'gender', 'male')); // (2) [{…}, {…}]
// console.log(funcGetUsers(users, 'name', 'Denis')); // [{…}]

// Todo. Решение с циклом «for of»

function funcGetUsers2(arr, key, value) {
  let res = [];

  for(let user of arr) {
    if(user[key] === value) {
      res.push(user);
    }
  }
  return res;
}
// console.log(funcGetUsers2(users, 'gender', 'male')); // (2) [{…}, {…}]
// console.log(funcGetUsers2(users, 'name', 'Denis')); // [{…}]


// ! ЗАДАЧА #9
// Todo. Создать две функции и дать им осмысленные названия:
// ? - первая функция принимает массив и колбэк (одна для всех вызовов)
// ? - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// ? Первая функция возвращает строку “New value: ” и результат обработки:
// * firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// * firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// * firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →“New value: Jhon is 45, Aaron is 20,”
// * firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// ? Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки

function getValue(arr, handler) {
  let res = `New value: `

  for(let i = 0; i < arr.length; i++) {
    res += handler(arr[i]);
  }
  return res;
}

// ? функция обработчик #1
function handler1(item) {
  return item[0].toUpperCase() + item.slice(1);
}
const res1 = getValue(['my', 'name', 'is', 'Trinity'], handler1); 
// console.log(res1); // 'New value: MyNameIsTrinity'

// ? функция обработчик #2
function handler2(item) {
  return item * 10 + ',' + ' ';
}
const res2 = getValue([10, 20, 30], handler2);
// console.log(res2); // 'New value: 100, 200, 300,'

// ? функция обработчик #3
function handler3(item) {
  return `${item.name} is ${item.age}, `
}
const res3 = getValue([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3);
// console.log(res3); // 'New value: Jhon is 45, Aaron is 20,'

// ? функция обработчик #4
function handler4(item) {
  return item.split('').reverse().join('') + ', ';
}
const res4 = getValue(['abc', '123'], handler4);
// console.log(res4); // 'New value: cba, 321,'


// ! ЗАДАЧА #10
// Todo. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив). Вторым аргументом callback (обязательно проверьте что передана функция)
// ? функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). 
// ? Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.


function every(numArr, callback) {
  if(!Array.isArray(numArr)) return `'${numArr}' is not array!`

  for(let i = 0; i < numArr.length; i++) {
    if(!callback(numArr[i])) {
      return false;
    }
  }
  return true;
}

function checkNumber(item) {
  if(item > 5) {
    return true;
  }
}
const res5 = every([6,13,7], checkNumber);
console.log(res5);
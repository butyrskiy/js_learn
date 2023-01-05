console.log('***');
console.log('Example #1');
console.log('***');
//
//
/* let login = prompt('Введите логин');

if (login == 'admin') {
  let pass = prompt('Введите пароль');

  if (pass == null) {
    alert('Отменено');
  } else if (pass == 'boss') {
    alert('Здравствуйте!');
  } else {
    alert('Неверный пароль');
  }
} else if (login == '' || login == null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
} */
//
//
console.log('***');
console.log('Example #2');
console.log('***');
//Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let a;
if (a === 'hidden') {
  a = 'visible';
} else {
  a = 'hidden';
}
console.log(a);

//решение тернарным оператором
let value = 'hidden';
value === 'hidden' ? (value = 'visible') : (value = 'hidden');
console.log(value);

//
//
console.log('***');
console.log('Example #3');
console.log('***');
//Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
//  если меньше нуля - строку “less then zero”;
//  если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let b = 10;
if (b === 0) {
  b = 1;
} else if (b < 0) {
  b = 'less then zero';
} else if (b > 0) {
  b *= 10;
}
console.log(b);
//
//
console.log('***');
console.log('Example #4');
console.log('***');
//Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}
console.log(car);
//
//
console.log('***');
console.log('Example #5');
console.log('***');
//Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%',
};

if (
  item.discount &&
  item.discount !== NaN &&
  item.price &&
  item.price !== NaN &&
  item.price &&
  item.price !== NaN
) {
  item.priceWithDiscount =
    parseInt(item.price) * (1 - parseInt(item.discount) / 100);
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}
//
//
console.log('***');
console.log('Example #6');
console.log('***');
//
//
/* let question = prompt('Какое "официальное" название JavaScript?', 'Name');
if(question === 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? “ECMAScript”!');
} */
//
//
console.log('***');
console.log('Example #7');
console.log('***');
//Нужно написать условие для действий пешехода при различных сигналах светофора.
//Если сигнал красный, то надо стоять, иначе, если желтый - надо приготовиться, а иначе - можно идти.

let light = 'red';

if(light != 'red' & light != 'yellow'){
  people = 'Go!';
} else if(light == 'red'){
  people = 'Stop';
} else if(light == 'yellow'){
  people = 'get ready';
}

console.log(light);
console.log(people);
//
//
console.log('***');
console.log('Example #8');
console.log('***');
/* Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90. */

function checkAge(age) {
  if(age >= 14 & age <=90) {
    console.log('Valid Age!');
  } else{
    console.log('Invalid age :(');
  }
}

checkAge(14);
//
//
console.log('***');
console.log('Example #9');
console.log('***');
/* Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
 */

function checkAge(age) {
  if(!(age >= 14 && age <= 90)) {
  console.log('Valid Age!');
  } else{
  console.log('Invalid age :(');
  }
}

checkAge(15);

//
function checkAge2(age2) {
  if(age2 < 14 || age2 > 90) {
    console.log('Valid Age!');
  } else{
    console.log('Invalid age :(');
  }
}

checkAge2(190);
//
//
console.log('***');
console.log('Example #10');
console.log('***');
/* Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Admin», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Cancelled», в противном случае отобразить «I do not know you».

Пароль проверять так:

Если введён пароль «Boss», то выводить «Hi, Boss!»,
Иначе – «Invalid password»,
При отмене – «Cancelled». */

let login = prompt('Enter your login', '');

if(login === 'Admin') {
  let password = prompt('Enter your password')
  
  if(password === 'Boss') {
    alert('Hi, Boss!');
  } else if (password === null) {
    alert('Cancelled');
  } else {
    alert('Invalid password');
  }
} else if(login === null || login === '') {
      alert('Cancelled');
} else {
    alert('I do not know you');
}
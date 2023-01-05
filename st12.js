console.log('***');
console.log('Example #1');
console.log('***');

function calc(operator, a, b) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
    default:
      console.log('Ошибка');
  }
}

console.log(calc('add', 5, 5));
console.log(calc('multi', 5, 5));
console.log(calc('subtract', 5, 5));
//
//
console.log('***');
console.log('Example #2');
console.log('***');

function color(color) {
  switch (color) {
    case 'Orange':
      console.log('Color is Orange');
      break;
    case 'Red':
      return console.log('Color is Red');
    case 'White':
    case 'Green':
      return console.log('Color White or Green');
    default:
      console.log('Color is not defined');
  }
}

color('Orange');
color('Red');
color('White');
color('Green');
color('Black');
//
//
//
console.log('***');
console.log('Example #3');
console.log('***');

/* Напишите if..else, соответствующий следующему switch: */

/* let browser = '';

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */


let browser = 'Opera';

if(browser === 'Edge') {
  alert("You've got the Edge!");
} else if(browser === 'Chrome' 
|| browser === 'Firefox' 
|| browser === 'Safari' 
|| browser === 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}
//
//
console.log('***');
console.log('Example #4');
console.log('***');
/* Перепишите код с использованием одной конструкции switch: */

/* const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} */
//
//
let number;

switch(number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
}
// ! ЗАДАЧА #1
// Todo. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let value = 'hidden';

// ? С помощью конструкции «if else»
/* if(value === 'hidden') {
  value = 'visible';
} else value = 'hidden'; */
// console.log(value);

// ? С помощью тернарного оператора
// (value === 'visible') ? value = 'visible' : value = 'hidden';
// ? Или так
value = (value === 'visible') ? 'visible' : 'hidden';
// console.log(value);


// ! ЗАДАЧА #2
// Todo. Используя if, записать условие:
// ? если переменная равна нулю, присвоить ей 1;
// ? если меньше нуля - строку “less then zero”;
// ? если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let num = 15;

/* if(num === 0) {
  num = 1;
} else if(num < 0) {
  num = 'less then zero';
} else if(num > 0) {
  num *= 10;
} */
// console.log(num);

// ? С помощью тернарного оператора
num = num === 0 ? 1 : num < 0 ? 'less then zero' : num > 0 ? num *= 10 : num;
// console.log(num);


// ! ЗАДАЧА #3
// Todo. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// ? Написать условие: если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { 
  name: 'Lexus', 
  age: 10, 
  create: 2008, 
  needRepair: false 
}

if(car.age > 5) {
  // console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}
// console.log(car);


// ! ЗАДАЧА #3
// Todo. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// ? Написать условие: если у item есть поле discount и там есть значение, которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = { 
  name: 'Intel core i7', 
  price: '100$', 
  discount: '15%'
}

if(item.discount && item.discount !== isNaN && item.price !== isNaN) {
  item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) / 100 * parseFloat(item.discount));
  // console.log(item.priceWithDiscount); // 85
} else {
  // console.log(item.price); // 100$
}


// ! ЗАДАЧА #4
// ? Дан следующий код

let product = {
  name: 'Яблоко',
  price: '10$',
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

// ? Написать условие: если цена товара больше или равна минимальной цене и меньше или равна максимальной цене, то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let price = parseFloat(product.price);

if(price >= min && price <= max) {
  // console.log(product.name);
} else console.log('Product not found');


// ! ЗАДАЧА #5
// Todo. Записать в виде switch case следующее условие:
// ? Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
/* if (a === 'block') {
	console.log('block')
} else if (a === 'none') {
	console.log('none')
} else if (a === 'inline') {
console.log('inline')
} else {
	console.log('other')
} */

let a = 'inline';

switch(a) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    // console.log('inline');
    break;
  default:
    console.log('other');
}
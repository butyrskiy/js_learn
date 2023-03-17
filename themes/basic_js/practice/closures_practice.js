// ! Task #1
// Todo. Создайте функцию которая бы умела делать:
/* minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0 */
// ? Подсказка, функция minus должна возвращать другую функцию

function minus(num1 = 0) {
  return function(num2 = 0) {
    return num1 - num2;
  }
}
// console.log(minus(10)(6)); // 4 
// console.log(minus(5)(6)); // -1
// console.log(minus(10)()); // 10
// console.log(minus()(6)); // - 6
// console.log(minus()()); // 0


// ! Task #2
// Todo. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker(num1) {
  return function(num2) {
    return num1 *= num2;
  }
}
const multiply = multiplyMaker(2);

// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)


// ! Task #3
// Todo. Реализовать модуль, который работает со строкой и имеет методы:
// ? a. установить строку: i. если передано пустое значение, то установить пустую строку. ii. если передано число, число привести к строке
// ? b. получить строку
// ? c. получить длину строки
// ? d. получить строку-перевертыш
// Пример:
// * модуль.установитьСтроку('abcde');
// * модуль.получитьСтроку(); // ‘abcde’
// * модуль.получитьДлину(); // 5


// ? Чтобы реализовать базовый модуль нужно в переменную записать результат самовызывающейся функции
const module = (function() {
  let str = '';

  function setString(value = '') {
    str = String(value); // value преобразуется к строке
    return str;
  }

  function getString() {
    return str; // получение строки
  }

  function getStringLenght() {
    return str.length;
  }

  function reverseStr() {
    return str.split('').reverse().join('');
  }

  return {
    setString,
    getString,
    getStringLenght,
    reverseStr,
  }
})();

// console.log(module.setString('Hello world')); // 'Hello'
// console.log(module.getString()); // 'Hello world'
// console.log(module.getStringLenght()); // 11
// console.log(module.reverseStr()); // 'dlrow olleH'


// ! Task #4
// Todo. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// * модуль.установитьЗначение(10); // значение = 10
// * модуль.прибавить(5); // значение += 5
// * модуль.умножить(2); // значение *= 2
// * модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// ? Также можно вызывать методы цепочкой:
// * модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calcModule = (function() {
  let num;

  function setValue(value) {
    num = value;
    return num;
  }

  function sum(value) {
    num += value;
    return num;
  }

  function multy(value) {
    num *= value;
    return num;
  }

  function divide(value) {
    num /= value;
    return num;
  }


  function exponentiation(value) {
    num = Math.pow(num, value);
    return num;
  }

  function getValue() {
    return Math.ceil(num);
  }

  return {
    setValue,
    sum,
    multy,
    divide,
    exponentiation,
    getValue,
  }
})();

/* console.log(calcModule.setValue(10));
console.log(calcModule.sum(5));
console.log(calcModule.multy(2));
console.log(calcModule.divide(10));
console.log(calcModule.exponentiation(3));
console.log(calcModule.getValue()); */

// console.log(calcModule.setValue(10).sum(5).multy(2)); // ! Не сделал
// Theme #1. setTimeout
console.log('*');
console.log('Example #1');
//

const sayHi = function (phrase, who) {
  console.log(phrase + ', ' + who);
};

let value = setTimeout(sayHi, 1000, 'Hi', 'Denis');
let value2 = setInterval(sayHi, 1000, 'Hi', 'Denis');

// clearTimeout для отмены выполнения
console.log(value);
clearTimeout(value);
clearTimeout(value2); // отмена выполнения setTimeout

// example #2
console.log('*');
console.log('Task from Learn JavaScript');
//

/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

function printNumbers(from, to) {
  let value = () => {
    console.log(from);
    if (from === to) {
      clearInterval(timerId);
    } else from++;
  };
  let timerId = setInterval(value, 500);
}

printNumbers(1, 5);

function printNumbers2(from, to) {
  setTimeout(function foo() {
    console.log(from);
    if (from < to) {
      setTimeout(foo, 500);
    }
    from++;
  }, 1000);
}
printNumbers2(1, 5);

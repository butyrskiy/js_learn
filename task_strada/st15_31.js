/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

function printNumbers(from, to) {
  setInterval(function() {
    if(from <= to) {
      console.log(from);
      from++;
    }
  }, 500);
}

printNumbers(1,10);


function printNumbers(from, to) {
  setTimeout(function() {
    if(from <= to) {
      console.log(from);
      from++;
      setTimeout(printNumbers, 500, from, to);
    }
  }, 500);
}

printNumbers(1,10);
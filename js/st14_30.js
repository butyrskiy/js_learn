/* Создайте функцию которая создает независимые счетчики Counter.

При вызове счетчик увеличивает внутреннее значение на 1 и возвращает счет. */

function createCounter() {
  let count = 0;
  function f() {
    count++;
    return count;
  }
  return f;
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());


// My version
function getBirthYear(birthYear) {
  let value;
  return function(currentYear) {
    value = currentYear - birthYear;
    return value;
  }
}

let denisYear = getBirthYear(1988);
console.log(denisYear(2023));

let EvgeniaYear = getBirthYear(1996);
console.log(EvgeniaYear(2023));
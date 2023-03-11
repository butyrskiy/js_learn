/* Попробуйте сами:
Объявите функцию с именем checkAge()
Добавьте параметр age
Добавьте условие: если age меньше 18 - выводите в консоль “you are not allowed”, а если больше или равно то “you are welcome!”
Попробуйте вызвать эту функцию несколько раз чтобы проверить ее работу */

function checkAge(age) {
  if(age < 18) {
    console.log('you are not allowed');
  } else if (age >= 18) {
    console.log('you are welcome!');
  }
}

checkAge(15);
checkAge(18);
checkAge(25);

/* Создайте простую функцию калькулятор с именем сalc()
С тремя параметрами a и b, а также operation
Вызов сalc(‘add’, 1, 2) - возвращает 3
Вызов сalc(‘multi’, 1, 2) - возвращает 2
Вызов сalc(’subtract’, 3, 2) - возвращает 1 */

function calc(operation, a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number') {
    return 'Enter number!';
  } 
    else if(operation !== 'add' && operation !== 'multi' && operation !== 'subtract') {
    return 'Invalid operation';
  }
  
  else if(operation === 'add') {
    return a + b;
  } else if(operation === 'multi') {
    return a * b;
  } else if (operation === 'subtract') {
    return a - b;
  } else return 'Что-то не так';
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
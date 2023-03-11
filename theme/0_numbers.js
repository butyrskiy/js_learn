let value = 100;

// Todo. ОПЕРАТОР %. ОСТАТОК ОТ ДЕЛЕНИЯ
let remainder = value % 5; // 0
remainder = value % 6; // 4
// console.log(remainder);

// Todo. ОКРУГЛЕНИЕ ЧИСЛА. МЕТОД «tofixed»

let sum = 0.6 + 0.7; // 1.2999999999999998
// sum = sum.toFixed(); // 1 
// в скобках указываем до сколько знаков после запятой нужно округлить
sum = sum.toFixed(1); // 1.3 // возвращается строка
// console.log(sum);

// Todo. ФУНКЦИИ «parseInt» и «parseFloat»
// ? ParseInt работает с целыми числами и возвращает число, отбрасывая в конце то, что не является числом

let value2 = '100px';
value2 = parseInt(value2);
// console.log(value2);

// ? ParseFloat работает с дробными числами (числа с плавающей точкой) и возвращает число, отбрасывая в конце то, что не является числом

let value3 = '300.3px';
value3 = parseFloat(value3);
// console.log(value3);

// Todo. ОБЪЕКТ «Math»
// ? Это набор свойств и методов для работы с числами

let value4 = Math.random(); // возвращает рандомное число от 0 до 1
value4 = Math.round(2.57); // округляет число. Половина и больше в большую строну, меньше половины в меньшую.
value4 = Math.ceil(2.1); // округляет всегда в большую строну
value4 = Math.floor(2.9); // округляет всегда в меньшую сторону 
value4 = Math.min(425, 101, 223); // возвращает наменьшее число
value4 = Math.max(425, 101, 223); // возвращает набольшее число
value4 = Math.random() * 10 + 1; // если хотим получить рандомные числа от 0 до 10
value4 = value4.toFixed(1, Math.random() * 10 + 1); // если хотим получить рандомные числа от 0 до 10 + округляем его до нужного количества знаков после запятой
value4 = Math.floor(Math.random() * 10 + 1); // если хотим получать целое рандомное число от 0 до 10
// console.log(value4);

// ? Получить рандомный элемент из массива мы можем следующим образом
const arr = ['black', 'yellow', 'orange', 'white', 'blue', 'green', 'red'];
let value5 = Math.floor(Math.random() * arr.length);
console.log(value5, arr[value5]);
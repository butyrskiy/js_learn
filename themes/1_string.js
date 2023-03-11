const firstName = 'Denis';
const lastName = 'Butyrskiy';
const age = 34;
const str = 'Hello me name is Denis';

let value;

// Todo. КОНКАТЕНАЦИЯ СТРОК
value = firstName + lastName; // DenisButyrkskiy
value = firstName + ' ' + lastName; // Denis Butyrkskiy
// console.log(value);


// Todo. СВОЙСТВО «lenght»
// ? Возвращает длину строки
let value2 = 'Denis';
// console.log(value2.length); // 5
// console.log(value2[1]); // Получаем один конретный символ 'e'

// ? Получаем последний элемент в строке
let lastElement = value2[value2.length - 1]; // 's'
// console.log(lastElement);

// Todo. МЕТОДЫ СТРОК
// ! Методы не меняют исходную строку, они возвращают изменённое значение, которое мы можем записать в новую переменную

// ? Методы «toUpperCase» и «toLowerVase»
// console.log(firstName.toLowerCase()); // 'denis'
// console.log(firstName.toUpperCase()); // 'DENIS'

// ? Метод «concat» конкатенирует строки. Первый аргумент значение, которое будет между строками
// console.log(firstName.concat(' ', lastName)); // Denis Butyrskiy

// Todo. ПОИСК ПОДСТРОКИ. «indexOf», «lastIndexof», «includes»
// ? Метод «indexOf» возвращает индекс найденного элемента или подстроки. Первым аргументом передаём значение, которое нужно найти. Втрой аргумент необязатальный и в него мы передаём число с которого хотим начать поиск
// ! Если ничего не найдено возвращается -1

let value3 = str.indexOf('e'); // 1, найдена первый символ 'o'
value3 = str.indexOf('e', 2); // 7, найден второй символ 'o'
value3 = str.indexOf('is'); // 14
// console.log(value3);

// ? Метод lastIndexof ищет с конца строки
// написать пример работы

// ? Метод includes возвращает булевое значение 'true' или 'false'
let value4 = str.includes('ll'); // true
value4 = str.includes('ls'); // false
// console.log(value4);

// Todo. МЕТОД «Slice»
// ? Возвращает необходимый кусок строки. Первая аргумент - цифра начала поиска, второй аргумент - цифра конца, не включая последний элемент
// ? Второе значение не обязательно. В таком случае метод вернёт строку с первого аргумента и до конца строки
// ? Второе значение может быть отрицательным. В таком случае метод вернёт строку за исключением вырезанных символов с конца строки
let value5 = str.slice(0, 5); // 'Hello'
value5 = str.slice(6, 8); // 'me'
value5 = str.slice(0); // 'Hello me name is Denis'
value5 = str.slice(5); // 'me name is Denis'
value5 = str.slice(0, -5); // 'Hello me name is'
// console.log(value5);

// Todo. МЕТОД «replace»
// ? Позволяет нам заменить значение в строке. Первый аргмент - что хотим заменить, второй аргумент - на что хотим замениит.
let value6 = str.replace('Denis', 'Evgenia'); // 'Hello me name is Evgenia'
// console.log(value6);
// ! Regular expression - регулярное выражение. Состоит из паттерна и флагов.
// ? Паттерн - шаблон по которому будет осуществляться работа
// ? Флаг - 
// i - поиск без учёта регистра
// g - поиск всех совпадений, а не только первого
// m - режим поиска в многострочном режиме

// Todo. Для создания регулярного выражения есть два варианта.
// ?? Первый вариант. При помощи конструктора (редко используется)

// new RegExp('pattern', 'flags');

// ?? Второй способ
// /pattern/flags


// ! МЕТОДЫ
// ? Поиск

// Задача. Найти все буквы «н» в имени
// const ans = prompt('Введите ваше имя'); // Ann

const reg = /n/ig;

// Todo. Метод «Search» найдёт только первое вхождение, даже с флагом «g»

// console.log(ans.search(reg)); // 1 первое вхождение буквы «n»
// ? Если буква не найдена получим «-1»


// Todo. Метод «match»

// console.log(ans.match(reg)); // ['n', 'n']


// Todo. Метод «replace»

// const pass = prompt('Password');

// ? Берём все символы и меняем на «*»
// console.log(pass.replace(/./g, '*'));

// ? Если хотим заменить только точки, то нужно применить экранирование (обратный слэш перед символом)
// console.log(pass.replace(/\./g, '*')); // 123**67


// console.log('12-55-77'.replace(/-/g, ':')); // 12:55:77


// Todo. Метод «test»
// ? Проверяет есть ли совпадение по нужному нам условию. Возвращает «true» / «false»

// const reg2 = /n/ig;
// const ans2 = prompt('Enter something');
// console.log(reg2.test(ans2));


// ! КЛАССЫ
// Todo. Класс «digits» «\d» - поиск цифр
// Todo. Класс \w - поиск всех слов, букв
// Todo. Класс \s - поиск пробелов

const reg3 = /\d/;
// const ans3 = prompt('Enter number'); // efwef7cds

// ? Находим только число из всей строки
// console.log(ans3.match(reg3)); // ['7', index: 5, input: 'efwef7cds', groups: undefined]


// ? Задача: вырезать из предложения только имя «R2D2»
const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i)) // ['R2D2', index: 11, input: 'My name is R2D2', groups: undefined]


// Todo. Если нужно найти НЕ числа, НЕ буквы, то используем:
// \D \W

// ? Найти все НЕ буквы

const str2 = 'My name is R2D2';
console.log(str2.match(/\D/ig));
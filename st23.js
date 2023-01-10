/* Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль. Чтобы получилось вот так:

showVerticalMessage('strada')
S
t
r
a
d
a

Если строка начинается с буквы "s" - нужно вывести эту строку с первой заглавной буквой
Если строка больше 7 символов - вывести только первые 7 */

function showVerticalMessage(str) {
  if(typeof(str) != 'string') {
    return console.error('It\'s work just to string');
  }

  let newStr = str.slice(0, 7);
  
  if(newStr[0] === 's') {
    let newStr2 = 'S' + str.slice(1);
    for(let char of newStr2) {
      console.log(char);
    }
  } else {
    for(let char of newStr) {
      console.log(char);
    } 
  } 
}

showVerticalMessage('strada');
showVerticalMessage('window');
showVerticalMessage('application');

//
//
console.log('***');
console.log('Задача с LearnJavaScript №1');
console.log('***');

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";

function ucFirst(str) {
  if(!str) {
    return console.log('Пустая строка');
  }

  let newStr = str.at(0).toUpperCase() + str.slice(1);
  console.log(newStr);
}
ucFirst('evgenia');

//
//
console.log('***');
console.log('Задача с LearnJavaScript №2');
console.log('***');

/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  if (typeof lowerStr != 'string') {
    return;
  } else if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
    console.log('true');
  } else console.log('false');
}

checkSpam('I buy Viagra to the XXX Shop');
checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');

//
//
console.log('***');
console.log('Задача с LearnJavaScript №3');
console.log('***');

/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!" */

function truncate(str, maxlength) {
  let newStr;
  if(str.length > maxlength) {
    newStr = str.slice(0, maxlength - 1)+'...';
    return newStr;
  } else return str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Всем привет!', 20));

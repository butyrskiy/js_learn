// ! ЗАДАЧА #1
// Todo. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре.
// ? Использовать for или while.

let str = 'i am in the easycode';
let newStr = '';

for(let i = 0; i < str.length; i++) {
  
  if(str[i - 1] === ' ' || i === 0) {
    newStr += str[i].toUpperCase();
  } else {
    newStr += str[i];
  }
}
// console.log(newStr); // I Am In The Easycode


// ! ЗАДАЧА #2
// Todo. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str2 = 'tseb eht ma i';
let newStr2 = '';
let x = 1;

for(let i = 0; i < str2.length; i++) {
  newStr2 += str2[str2.length - x];
  x++;
}
// console.log(newStr2); // i am the best


// ! ЗАДАЧА #3
// Todo. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1
// ? С помощью циклов вычислить факториал числа 10. Использовать for.

let f = 10;
let res = 1;

for(let i = 1; i <= f; i++) {
  res = i * res;
}
// console.log(res); // 3628800


// ! ЗАДАЧА #4
// Todo. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены.
// ? Использовать for.

let str3 = 'JavaScript is a pretty good language';
let newStr3 = '';

for(let i = 0; i < str3.length; i++) {
  if(str3[i - 1] === ' ') {
    newStr3 += str3[i].toUpperCase();
  } else if (str3[i] === ' ') {
    continue;
  } else {
    newStr3 += str3[i]
  };
}
// console.log(newStr3);


// ! ЗАДАЧА #5
// Todo. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].
// ? Использовать for of.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let newArr = [];

for(let elem of arr) {
  if(elem % 2 === 0) {
    continue;
  } else newArr.push(elem);
  // console.log(elem); // 1, 3, 5, 7...
}
// console.log(newArr); // [1, 3, 5, 7, 9, 11, 13, 15]


// ! ЗАДАЧА #6
// Todo. Дан объект. Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
// ? Использовать for in.

let list = {
     name: 'denis',
     work: 'easycode',
     age: 29,
}

for (let key in list) {
  if(typeof(list[key]) === 'string') {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list); // {name: 'DENIS', work: 'EASYCODE', age: 29}
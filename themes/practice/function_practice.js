// ! ЗАДАЧА #1
// Todo. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// ? Если нет ни одного аргумента, вернуть ноль: multiply() // 0


function multiply() {
  // if(arguments.length === 0) return 0;
  if(!arguments.length) return 0; // сокращаем код
  
  let x = 1;
  for(let i = 0; i < arguments.length; i++) {
    if(typeof(arguments[i]) !== 'number') return 'Not a Number'
    x *= arguments[i];
  }
  return x;
}
// console.log(multiply(1, 2, 3, 10)); // 60
// console.log(multiply()); // 0
// console.log(multiply(1, 2, 'abc')); // 'Not a Number'


// ! ЗАДАЧА #2
// Todo. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str) {
  let newStr = '';
  let x = 1;
  
  for(let i = 0; i < str.length; i++) {
    newStr += str[str.length - x];
    x++;
  }
  return newStr;
}
// console.log(reverseString('test')); // 'tset'
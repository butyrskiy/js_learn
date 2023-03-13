let a = 1;
let b;

/* if(a > 1) {
  b = a;
} else {
  b += 1;
} */ // данный код можно упростить, использовав тернарный оператор

// console.log(b);

// Todo. Тернарный оператор
// ! Тернарный оператор возвращает результат одного из выражений после знака «?»
let c = a > 0 ? b = a : b += 1; // данную запись можно написать ещё короче
// console.log(b); // 1
// console.log(c); // 1

b = a > 0 ? a : b + 1;
// console.log(b);

// ? Тернарный оператор обычно используют для определения того, чему равна переменная в зависимости от условий

// пример с двумя условиями (может быть сколько угодно)
b = a > 0 ? 2 : a < 0 ? 3 : 0;
console.log(b);
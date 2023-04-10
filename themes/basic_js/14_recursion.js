// Todo. РЕКУРСИЯ
// ? Когда функция вызывает саму себя

let t = 0;

function f1() {
  t++;
  console.log(t);
  if(t === 100) return;
  f1();
}
// f1();


// ? Переписывыем рекурсию на цикл

function f2() {
  let out = '';

  for(let i = 0; i <= 50; i++) {
    out += i + ' ';
  }
  console.log(out);
}
// f2();


// ? Пример выше переписываем на рекурсию

let i = 0;
let out = '';

function f3() {
  i++
  out += i + ' ';
  if(i >= 50) return;
  f3();
}
// f3();
// console.log(out);



// Todo. Более сложный пример рекурсии
// ? Посчитаем за какое количество шагов мы наберём нужную нам сумму - 300

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let s1 = 0;

function moneyRecursion() {
  let m = randomInteger(0, 100);
  console.log('add: ' + m);
  s1 += m;
  console.log('sum: ' + s1);
  if(s1 >= 300) return;
  moneyRecursion();
}
// moneyRecursion();


// ? Тоже самое, но через цикл

function MoneyCycle() {
  let s2 = 0;
  for(let i = 0; true; i++) {
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    s2 += m;
    console.log('sum: ' + s2);
    if(s2 >= 300) return;
  }
}
// MoneyCycle();



// Todo. Ещё пример рекурсии
// ? Задача: вывести фамилии всех родителей

const users = {
  'ivanov': {
    age: 25,
    parent: {
      'ivanov-a': {
        age: 45,
      },
      'ivanov-b': {
        age: 43,
        parent: {
          'sergeev-a': {
            age: 88,
            parent: {
              'lionenko': {}
            }
          }
        }
      }
    }
  },
  'kostenko': {
    age: 56,
    parent: {
      'ignatenko': {

      },
      'sniezko': {
        age: 45
      }
    }
  }
}

function userParentRecursion(obj) {
  if(obj.parent !== undefined) {
    for(let key in obj.parent) {
      console.log(key);
      // userParentRecursion(obj.parent[key]);
    }
  }
}

for(let key in users) {
  // console.log(key);
  // userParentRecursion(users[key]);
}



// Todo. Возведение в степень

const pow = (x, n) => {
  let result = 1;

  for(let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// console.log(pow(2, 4)); // 16
// console.log(pow(2, 2)); // 4



// Todo. ФАКТОРИАЛ
// ? Вычисление факториала циклом

function factorialCycle(n) {
  let result = 1;

  for(let i = 0; i < n; i++) {
    result *= i + 1;
  }
  
  return result;
}
// factorialCycle(5); // 120


// ? Вычисление факториала рекурсией

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
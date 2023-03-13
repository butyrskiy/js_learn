// Todo. Замыкание - это функция, которая ссылается на свободные переменные. Это переменные, которые не были переданы этой функции как параметры и не были объявлены внутри этой функции
// Todo. Функция определённая в замыкании запоминает то окружение в котором она была создана и имеет к нему доступ, а также имеет доступ к окружению выше

function getFullName(firstName, lastName) {
  return function() {
    return `${firstName} ${lastName}`
  }
}
// ? При каждом вызове «getFullName()» будет создаваться новый контекст исполнения
const getName = getFullName('Denis', 'Butyrskiy');
// console.log(getName()); // Denis Butyrskiy

const getName2 = getFullName('Evgenia', 'Butyrskaya');
// console.log(getName2()); // Evgenia Butyrskaya

// ? ПРИМЕР #2
function updateValue(value = 0) {
  let x = value;
  return function(num = 0) {
    return x += num;
  }
}

const updValue = updateValue(2);
// console.log(updValue(1)); // 3
// console.log(updValue()); // 3 - переменная осталась изменённой

const updValue2 = updateValue(4);
// console.log(updValue2(3)); // 7

// ! Вроде бы одна и таже функция, но работает она с разными контексами исполнения. И в этих контекстах хранятся разные данные независимые друг от друга.

// ? ПРИМЕР #3
function checkCred() {
  const login = 'test';
  const password = 'somepassword';

  return {
    checkLogin(value) {
      return login === value;
    },
    checkPassword(value) {
      return password === value;
    },
  }
}

const check = checkCred();

// console.log(check.checkLogin('test')); // true
// console.log(check.checkPassword('somepassword')); // true

// ? ПРИМЕР #4
function closureExample() {
  const arrOfFunc = [];
  // let value = '';

  for(let i = 0; i < 10; i++) {
    let value = '';
    value += i;
    arrOfFunc.push(function() {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}

const res = closureExample();
res[0]();
res[5]();
const operations = {
  add: '+',
  multi: '*',
  subtract: '-',
};

function calc(operator, a, b) {
  if (
    operator !== operations.add &&
    operator !== operations.multi &&
    operator !== operations.subtract
  ) {
    return console.log('Неверный оператор!');
  }
  switch (operator) {
    case operations['add']:
      return a + b;
    case operations['multi']:
      return a * b;
    case operations['subtract']:
      return a - b;
    default:
      console.log('Ошибка');
  }
}

console.log(calc('+', 10, 5));
console.log(calc('*', 15, 10));
console.log(calc('-', 25, 5));

//
//
//
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
// delete user.name;

console.log(typeof user);
console.log(user.name);
console.log(user.surname);
console.log(user.name);
console.log(user);

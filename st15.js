console.log('***');
console.log('Example #1. ЦИКЛ while');
console.log('***');
let a = 1;

while (a <= 5) {
  console.log(a);
  a++;
}
//
//
//
console.log('***');
console.log('Example #2. ЦИКЛ do while');
console.log('***');
let b = 1;
do {
  console.log(b);
  a++;
} while (b < 1);
//
//
//
console.log('***');
console.log('Example #3. ЦИКЛ for');
console.log('***');
for (let a = 1; a <= 5; a++) {
  console.log(a);
}
//
//
//
console.log('***');
console.log(
  'Example #3. ЦИКЛ for. Перебираем массив с объектами и получаем доступ к его ключам'
);
console.log('***');
let users = [
  {
    name: 'Denis',
    age: 33,
  },
  {
    name: 'Mark',
    age: 10,
  },
  {
    name: 'Daniil',
    age: 8,
  },
  {
    name: 'Zhenya',
    age: 26,
  },
  {
    name: 'Aleksey',
    age: 30,
  },
];

// Получаем доступ к каждому объекту и его ключам
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
  console.log(users[i].name);
  console.log(users[i].age);
}
//
//
//
console.log('***');
console.log(
  'Example #4. ЦИКЛ for. Cоздание объекта из массива, где ключами будут имена пользователей, а значениями объекты массива'
);
console.log('***');

let userObj = {};

for (let i = 0; i < users.length; i++) {
  userObj[users[i].name] = users[i];
}
console.log(userObj);
console.log(userObj['Mark']);
//
//
//
console.log('***');
console.log('Example #5. ЦИКЛ for in. Нужен для перебора объектов');
console.log('***');

const user = {
  name: 'Denis',
  age: 33,
};

for (let key in user) {
  console.log(key); // получаем ключи объекта
  console.log(user[key]); // получаем значения ключей объекта
}
//
//
console.log('***');
console.log('Example #6. ЦИКЛ for of. Нужен для перебора массивов');
console.log('***');

for (let value of users) {
  console.log(value); // получаем элементы массива
  //   console.log(value.name);
  //   console.log(value.age);
}

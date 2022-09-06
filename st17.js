console.log('***');
console.log('Копирование объектов и ссылки');
console.log('***');

let message = 'Привет!';
let phrase = message;
phrase = 'Пока!';

console.log(message);
console.log(phrase);

// В отличии от объектов строки копируются. В примере выше мы получаем две независымые переменные.

// Переменная, присвоенная объекту, хранит не сам объект, а его «адрес в памяти» – другими словами, «ссылку» на него.
let user = {
  name: 'John',
};

let admin = user; // копируется ссылка, а не сам объект
// Теперь у нас есть две переменные (admin и user), каждая из которых содержит ссылку на один и тот же объект:

let user1 = {
  name: 'John',
};
let admin1 = user1;
admin1.name = 'Pete'; // изменено по ссылке из переменной "admin"
console.log(user1.name); // 'Pete', изменения видны по ссылке из переменной "user"

//
//
console.log('***');
console.log('Первый способ скопировать объект');
console.log('***');

let user2 = {
  name: 'John',
  age: 30,
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user2) {
  clone[key] = user2[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = 'Pete'; // изменим в нём данные
console.log(user2.name); // все ещё John в первоначальном объекте
console.log(clone.name);

//
//

console.log('***');
console.log('Второй способ скопировать объект. Метод Object.assign');
console.log('***');

let car1 = {
  brand: 'BMW',
  color: 'black',
  coutry: 'Germany',
  price: '50000$',
};

let car2 = {
  brand2: 'Toyota',
  color2: 'white',
  coutry2: 'Japan',
  price2: '40000$',
};

let car3 = {
  brand3: 'VAZ',
  color3: 'brown',
  coutry3: 'Russia',
  price3: '10000$',
};

Object.assign(car1, car2, car3);
console.log(car1);

//Если скопированное имя свойства уже существует, оно будет перезаписано

//Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:

let user3 = {
  name: 'John',
  age: 30,
};

let clone2 = Object.assign({}, user3);
//Он копирует все свойства user в пустой объект и возвращает его.
console.log(clone2);

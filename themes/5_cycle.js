// Todo. ЦИКЛ «while»
// ? Пока внутри while условие «true» будет выполняться тело цикла

let i = 0; // итератор (счётчик)
while(i < 10) {
//  console.log(i); // от 0 до 9
 i++;
}

let i2 = 0;
while(i2++ < 10) {
//  console.log(i2); // от 1 до 10
}


let i3 = 10;
while(i3--) {
  // console.log(i3); // от 9 до 0
}


// Todo. ЦИКЛ «do while»
// ? Сначала выполняется действие, а потом происходит проверка условия.

let i4 = 1;
do {
  // console.log('action')
} while(i4 < 0);


// Todo. ЦИКЛ «for»
// ? Наиболее универсальный и чаще всего используемый цикл

// в скобках первая часть - инициализация, вторая - условие, третья - шаг
// ? Последовательность работы следующая. Сначала инициализируется один раз переменная. Потом проверяется условие и выполняется тело цикла. В конце выполняеся шаг и далее идёт проверка, тело, шаг и т.д.
for(let i = 0; i < 10; i++) {
  // console.log(i);
}

// ? ПРИМЕР перебора строки циклом «for of» и её изменение
let str = 'Butyrskiy';
let newStr = '';

for(let i = 0; i < str.length; i++) {
  // console.log(str[i]);
  newStr += str[i].toUpperCase(); 
}

// console.log(newStr);

// ? ПРИМЕР перебора массива циклом «for of» и его изменение
let colors = ['red', 'white', 'blue', 'orange'];

for(let i = 0; i < colors.length; i++) {
  // console.log(colors[i]);
  colors[i] = colors[i]+ ' color';
}

// console.log(colors); // ['red color', 'white color', 'blue color', 'orange color']

// ? КЛЮЧЕВЫЕ СЛОВА «break» и «continue»
for(let i = 0; i < 10; i++) {
  if(i === 5) continue; // значение «5» будет пропущено
  // console.log(i);
}

for(let i = 0; i < 10; i++) {
  if(i === 5) break; // как только «i» будет равно «5» цикл остановится
  // console.log(i);
}

// ? ПРИМЕР перебора массива с объектами циклом «for of» и его изменение
const users = [
  {
    name: 'Denis',
    age: 34
  },
  {
    name: 'Evegenia',
    age: 26
  },
  {
    name: 'Jam',
    age: 3
  }
];

for(let i = 0; i < users.length; i++) {
  // console.log(users[i].name); // перебираем имена
  // console.log(users[i].age); // перебираем возраст
}

// ? можем создать из массива объект
const usersObj = {};
for(let i = 0; i < users.length; i++) {
  usersObj[users[i].name] = users[i]; // записываем имена объектов из массива в новый объект
}
// console.log(usersObj);

// Todo. ЦИКЛ «for in» ИСПОЛЬЗУТЕСЯ ДЛЯ ПЕРЕБОРА ОБЪЕКТОВ
const user = {
    name: 'Denis',
    age: 34
}

for(let key in user) {
  // console.log(key); // получаем ключи
  // console.log(user[key]); // получаем значения
}

for(let key in usersObj) {
  // console.log(key); // получаем ключи
  // console.log(usersObj[key]); // получаем значения
}

// Todo. ЦИКЛ «for of» ПОЯВИЛСЯ В ES6 И ИСПОЛЬЗУТЕСЯ ДЛЯ БОЛЕЕ УДОБНОГО ПЕРЕБОРА МАССИВОВ
// ? Можно использовать ключевое слово «break»
for(let value of users) {
  // console.log(value); // в каждом «value» хранится элемент массива
  // console.log(value.name);
  // console.log(value.age)
}
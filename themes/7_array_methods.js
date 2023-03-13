// Todo. МАССИВЫ И МЕТОДЫ МАССИВОВ

let numArr = [3, 73, 1573, 79, 55];

let value;

value = numArr.length; // 5, получаем длину массива
// numArr.length = 0; // получим пустой массив
// numArr.length = 100; // получим массив с пустыми элементами

// ? Функция «Array.isArray()». Способ проверить является ли массив массивом
value = Array.isArray(numArr); // true

value = numArr[1]; // 73, получаем элемент по его индексу

// ? Можем изменить какой-либо элемент в массиве
numArr[1] = 77; // 77


// Todo. МЕТОД «indexOf» возвращает индекс искомого элемента
value = numArr.indexOf(1573); // 2


// Todo. МЕТОДЫ ДЛЯ ДОБАВЛЕНИЯ И УДАЛЕНИЯ ЭЛЕМЕНТОВ ИЗ МАССИВА
// ? Push - добавляет элемент в конец массива. Возвращает длину массива
value = numArr.push(91); // 6

// ? Pop - удаляет последний элемент из массива. Возвращает значение удалённого элемента
value = numArr.pop(); // 91

// ? Unhift - добавляет элемент в начало массива. Возвращает длину массива
value = numArr.unshift(27);

// ? Shift - удаляет первый элемент массива. Возвращает значение удалённого элемента
value = numArr.shift();


// Todo. МЕТОД «Slice» НЕ ИЗМЕНЯЕТ ИСХОДНЫЙ МАССИВ. Вырезает нужные элементы из массива и возвращает их
// ? Первый аргумент - позиция с которой хотим вырезать, второй - до какой НЕ включительно
value = numArr.slice(0, 2); // 3, 77


// Todo. МЕТОД «Splice» МЕНЯЕТ ИСХОДНЫЙ МАССИВ. Вырезает нужные элементы и возвращает их.
// ? Первый аргумент - позиция с которой мы хотим вырезать, второй - сколько элементов хотим получить начиная с первого аргумента
value = numArr.splice(2, 2); // 1573, 79

// ? Вместо удаляемых элементов мы можем добавить новые
value = numArr.splice(2, 2, 'one', 'two'); // [3, 77, 'one', 'two', 'three']

// ? Если мы ничего не хотим удалять, а просто нужно добавить новые элементы в массив с нужного индекса, то второй аргумент ставим значение - 0, а далее пишем новые элементы
value = numArr.splice( 2, 0, 1573, 79);


// Todo. МЕТОД «Reverse» МЕНЯЕТ ИСХОДНЫЙ МАССИВ. Переворачивает его. Возвращает изменённый массив
value = numArr.reverse(); // ['three', 'two', 'one', 79, 1573, 77, 3] 


// Todo. МЕТОД «Concat». Конкатенирует(объединяет массивы)
// ? Можно передать в качестве аргумента не только массив, но и любые другие значания и они будут добавлены в массив. Возвращает новый массив
const arr2 = ['Denis', 'Evgenia'];
value = numArr.concat(arr2, 'Jam'); // ['two', 'one', 79, 1573, 77, 3, 'Denis', 'Evgenia', 'Jam'] 


// Todo. МЕТОД «Join». Преобразует массив в строку. В качестве аргумента указывается разделитель. Возвращает строку
// ? Если не передать разделитель в виде аргумента, то разделитель по-умолчанию запятая
value = numArr.join(); // two,one,79,1573,77,3
value = numArr.join(' '); // two one 79 1573 77 3
value = numArr.join(''); // twoone791573773


// Todo. МЕТОД «Split». Преобразует строку в массив
// ? Если ничего не передавать возвращает всю строку в виде массива c одним элементом
value = 'Hello World'.split(); // ['Hello World']
value = 'Hello World'.split(''); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
value = 'Hello World'.split(' '); // ['Hello', 'World']
// console.log(value, numArr);


// Todo. ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВОВ
// ? Массивы можно перебирать циклами «for in», «for of», «for», но в реальных проектах эти циклы не используются, так как явно не описывают, что мы делаем с массивом. Ухудшается читабельность кода.
// ! Все методы принимают в качестве аргумента колбэк функцию

// объект с пользователями
const users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00"
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00"
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00"
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: true,
    balance: 2621.84,
    age: 25,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00"
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 4,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00"
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 5,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00"
  }
];


// Todo. МЕТОД «forEach» 
// ? Перебирает массив и сам по себе НИЧЕГО не возвращает, он вернёт то, что мы укажем в колбэк функции. По сути является более короткой версией цикла «for».
// ? Выполняет указанную функцию один раз для каждого элемента в массиве.
// Принимает от одного до 3 аргументов. Первый аргумент «currentValue» - элемент в массиве, второй - «index» - индекс элемента, третий - «array» - массив с которым работает. Второй и третий аргументы не обязательны.

users.forEach((user, i, arr) => {
  // console.log(user, i, arr);
});


// Todo. МЕТОД «filter»
// ? Метод «filter» создаёт(возвращает) новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции. Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.
// ? Проверяет каждый элемент массива на соответствие условию, переданному в функции
// Принимает от одного до 3 аргументов. Первый аргумент «currentValue» - элемент в массиве, второй - «index» - индекс элемента, третий - «array» - массив с которым работает. Второй и третий аргументы не обязательны.
// Если коллбэк возвращает «true», то элемент добавляется в массив

const userAge = users.filter(user => user.age < 30);
// console.log(userAge); // (3) [{…}, {…}, {…}]

const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers); // (4) [{…}, {…}, {…}, {…}]


// Todo. МЕТОД «map»
// ? Метод «map» создаёт(возвращает) новый массив с результатом вызова указанной функции для каждого элемента массива.
// ? Возвращает новый массив, где каждый элемент является результатом callback функции.
// Принимает от одного до 3 аргументов. Первый аргумент «currentValue» - элемент в массиве, второй - «index» - индекс элемента, третий - «array» - массив с которым работает. Второй и третий аргументы не обязательны.

const usersName = users.map(user => user.name); // получаем массив с именами
// console.log(usersName); // ['Lucile Finley', 'Woodward Grimes', 'Robinson Coleman', 'Austin Benton', 'Casandra Stout', 'Valencia Carrillo']

// ? Можно вернуть объект с необходимыми нам данными
// если задача вернуть объект в коллбэк функции, то мы вместо двух фигурных указываем сначала круглые, потом фигурные для объекта.
const obj = users.map(user => ({
  name: user.name,
  age: user.age,
}))

// console.log(obj); // массив с объектами


// Todo. МЕТОД «reduce»
// ? Метод «reduce» применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// ? Позволяет развернуть массив, преобразовать его или что-то посчитать
// Принимает два аргументы. Первый - коллбэк функция. Второй - стартовое значение, если оно не передано, то по-умолчанию стартовым будет считаться первый элемент массива

// ? ЗАДАЧА. Просуммировать сумму всех балансов у юзеров в массиве
// acc - аккумулирующая переменная
const totalBalance = users.reduce((acc, user) => {
  return acc += user.balance;
}, 0);
// console.log(totalBalance);

// можно сократить в одну сроку в более читабельный вариант
const totalBalance2 = users.reduce((acc, user) => (acc += user.balance), 0);
// console.log(totalBalance2);

// ? ЗАДАЧА #2. Сформировать из массива объект
const usersObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {}); // получаем объект с объектами

// console.log(usersObj);


// Todo. МЕТОДЫ «some»/«every»
// ? Метод «some» возвращает «true/false». И если хотя бы для ОДНОГО элемента массива коллбэк вернёт «true», то мы получим «true».
const isMale = users.some((user) => user.gender === 'male'); // мы как бы спрашиваем - если ли среди пользователей кто-нибудь, чей пол равен мужскому.
// console.log(isMale); // true

// ? Метод «every» возвращает «true/false». И если ВСЕ элементы соответствуют условию в коллбэке, то мы получим «true», в противном случае «false».
const isAllMale = users.every((user) => user.gender === 'male');
// console.log(isAllMale); // false

const is18 = users.every((user) => user.age > 18);
// console.log(is18); // true


// Todo. МЕТОД «find»
// ? Осуществляет поиск элемента в массиве.
// ? Элемент для которого коллбэк вернёт «true», тот и будет возвращён.
const user = users.find(user => user.name === 'Robinson Coleman');
// console.log(user); // получаем объект


// Todo. МЕТОД «sort»
// ? Изменяет исходный массив
// ? По умолчанию сортирует элементы массива по лексическому значению, то есть как строки
// ? Чтобы метод «sort» работал верно в него нужно передавать коллбэк функцию
const array = ['Denis', 'Evgenia', 'Bill', 'Anna'];
array.sort();
// console.log(array); // отсортирует верно ['Anna', 'Bill', 'Denis', 'Evgenia']

const numArray = [10, 7, 44, 32];
numArray.sort();
// console.log(numArray); // отсортирует неверно [10, 32, 44, 7]

// ? Работает так. Если при вычитании элемента «a» из элемента «b» коллбэк возвращает положительное число, то «b» будет присвоен меньший индекс и «b» будет поставлен перед «а». Если возвращается отрицательное число, то элементу «a» будет присвоен меньший индекс. Если возвращается 0, то ничего не происходит.
const numArray2 = [10, 7, 44, 32];
numArray2.sort((prev, next) => prev - next); // [7, 10, 32, 44]
// numArray2.sort((prev, next) => next - prev); // [44, 32, 10, 7]
// console.log(numArray2); // отсортирует верно

// ? Сортировка массива с объектами
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// console.log(users);
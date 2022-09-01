console.log("---------Базовые операции----------");
// Создание массива
let fruits = ["яблоко", "груша", "лимон"];

// Получение элемента массива
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Вывод всего массива
console.log(fruits);

// Замена элемента в массиве
fruits[2] = "апельсин";
console.log(fruits);

// Добавление нового элемента в массив
fruits[3] = "киви";
console.log(fruits);

// Вывод общего числа элементов массива
console.log(fruits.length);


console.log("---------Типы элементов массива----------");

// В массиве могут храниться элементы любого типа
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { console.log('привет'); } ];

// Получеие элемента с индексом 1 (объект) и затем вывод его свойства
console.log(arr[1].name); // Джон

// Получение элемента с индексом 3 (функция) и её выполнение
arr[3](); // привет


console.log("---------Последний элемент----------");

// Получение последнего элемента массива(в данной констукции можно использовать отрицательные значения. Обычным способом нельзя использовать отрицательные значения)
console.log(fruits.at(-1));
console.log(fruits.at(-2));
console.log(fruits.at(0));


console.log("---------Методы pop/push, shift/unshift----------");

// Исходный массив. Примеяем метод «pop»
console.log(fruits);

// Удаляем последний элемент массива и выводим его
console.log(fruits.pop());
// Массив после удаления последнего элемента
console.log(fruits);

// Примеяем метод «push». Добавляем элемент в конец массива
fruits.push("мандарин");
console.log(fruits);

// Методы работающие с началом массива
// Метод shift удаляет первый элемент массива и возвращает его
console.log(fruits.shift());
console.log(fruits);

// Метод unshift добавляет элемент в начало массива
fruits.unshift("банан");
console.log(fruits);

// Методы push и unshift могут добавлять сразу несколько элементов
fruits.push("абрикос", "персик");
console.log(fruits);
fruits.unshift("финик", "хурма");
console.log(fruits);


console.log("---------Внутреннее устройство массива----------");

// Массив также копируется по ссылке как и объект
let arrr = fruits;
console.log(arrr);

arrr.push("дыня");
console.log(fruits);


console.log("---------Перебор по элементам массива----------");

// Цикл for..of - современный синтаксис только для значений элементов (к индексам нет доступа).

for(let elements of fruits) {
    console.log(elements);
}

// Цикл for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.

for(let i=0; i<fruits.length; i++) {
    console.log(i);
}

console.log("---------Задачи с LearnJS----------");

let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles[1]="Классика";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);
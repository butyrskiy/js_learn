console.log("----------------МЕТОДЫ МАССИВА----------------");
console.log("*");
console.log("---Метод splice---");

// Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.

let arr = ["Я", "изучаю", "JavaScript"];
console.log(arr);

// Начиная с позиции 1 убираем 1 элемент.

arr.splice(1,1);
console.log(arr);

// возвращаем удалённый элемент
arr.splice(1,0, "изучаю");
console.log(arr);

// добавляем 2 новых элемента
arr.push("прямо", "сейчас");
console.log(arr);

// Удаляем 3 первых элемента и заменим их двумя другими.
arr.splice(0,3, "Давай", "танцевать");
console.log(arr);

// Возвращаем 3 первых ранее удалённых элемента и удаляем первые 2
arr.splice(0,2, "Я", "изучаю", "JavaSctript")
console.log(arr);

// Здесь видно, что splice возвращает массив из удалённых элементов
let removed = arr.splice(0, 2);
console.log(removed);

// Возвращаем два первых удалённых элемента
arr.splice(0,0, "Я", "изучаю")

// Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0

// с позиции 2 удалить 0 элементов и вставить два элемента "1", "месяц"
arr.splice(5, 0, "1", "месяц");
console.log(arr);


// Отрицательные индексы разрешены
let arr2 = [1, 2, 5];
console.log(arr2);

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr2.splice(-1, 0, 3, 4);
console.log(arr2); // 1,2,3,4,5


console.log("*");
console.log("---Метод slice---");
// Метод возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end).

// копируются элементы с 1 по 3 (не включая 3)
let arr3 = ["t","e","s","t"];
console.log(arr3.slice(1,3));

// основной массив не меняется!
console.log(arr3);

// копируются с -2 до конца
console.log(arr3.slice(-2));


console.log("*");
console.log("---Метод concat---");
// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

let arr4 = [1,2];
console.log(arr4.concat(3,4));
console.log(arr4.concat([3,4], [5,6]));
console.log(arr4.concat([3,4], 5,6));


console.log("*");
console.log("---ПЕРЕБОР forEach---");
// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.

let ring = ["Bilbo", "Gandalf", "Nazgul"];
ring.forEach(console.log); // вызов console.log для каждого элемента массива

console.log("*");
console.log("*");

console.log("----------------ПОИСК В МАССИВЕ----------------");
console.log("*");
console.log("---indexOf---");


let arr5 = [1, 0, false, "apple", NaN];

console.log((arr5.indexOf("apple",2))); // ищем элемент «apple» со 2 позиции(индекса) в массиве. Можно не указывать.
console.log((arr5.indexOf(0)));
console.log((arr5.indexOf(null))); // (в случе отсутствия элемента возвращается -1)


console.log("*");
console.log("---lastIndexOf---")

console.log((arr5.lastIndexOf("apple",2))); // так как в данном методе поиск осуществляется справа налево, то при задании индекса поиска меньшего, чем на котором располагается элемент привидёт к возврату -1, то есть «не найдено»
console.log((arr5.lastIndexOf("apple")));
console.log((arr5.lastIndexOf(1)));


console.log("*");
console.log("---includes---")

console.log((arr5.includes(1)));
console.log((arr5.includes(NaN))); // метод находит NaN, в отличие от indexOf, lastIndexOf, так как не использует сравнение
console.log((arr.indexOf(NaN)));
// Если мы хотим проверить наличие элемента, и нет необходимости знать его точный индекс, тогда предпочтительным является arr.includes


console.log("*");
console.log("---find и findIndex---");

const arr6 = [1, 2, 200, 55, 7, 4];
const a = arr6.find(function(ele) {
    if(ele>10 && ele<100) {
        return ele;
    }
})
console.log(a);

console.log("*");
// вариант с использованием стрелочной функции
const b = arr6.find(ele => ele>4 && ele<10);
console.log(b);

console.log("*");


// Поиск в массиве объектов
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
  ];

const c = users.find(function(item){
    if(item.id == 3){
        return item;
    }
});
console.log(c);
console.log(c.id);
console.log(c.name);


// вариант с использованием стрелочной функции
const d = users.find(item => item.id == 3);
console.log(d);
console.log(d.id);
console.log(d.name);


console.log("*");
console.log("---Метод filter и доп.тренировка использования метода и стрелочной функции---");

let people = [
    {country: "USA", name: "John", age: 33},
    {country: "Ukraine", name: "Ivan", age: 19},
    {country: "Turkey", name: "Emir", age: 55},
    {country: "Russia", name: "Ivan", age: 41},
    {country: "USA", name: "William", age: 67},
  ];

//Task №1. Найти в массиве всех кто живет в USA
//Task №2. Найти в массиве всех кого зовут Ivan
//Task №3. Найти в массиве всех кому больше 50 лет
//Task №4. Найти в массиве всех кто живёт в USA и кому меньше 50 лет

// Task#1
const value1 = people.filter(function(item){
    if(item.country == "USA"){
        return item;
    }
});
console.log(value1);
console.log(value1.length);

// Task#1 с использованием стрелочной функции
const value2 = people.filter(item => item.country == "USA");
console.log(value2);
console.log(value2.length);

// Task#2
const value3 = people.filter(item => item.name == "Ivan");
console.log(value3);
console.log(value3.length);

// Task#3
const value4 = people.filter(item => item.age>50);
console.log(value4);
console.log(value4.length);

// Task#4
const value5 = people.filter(item => item.age<50 && item.country == "USA");
console.log(value5);
console.log(value5.length);


console.log("*");
console.log("*");
console.log("------------ПРЕОБРАЗОВАНИЕ МАССИВА-----------");

console.log("*");
console.log("---Метод map---");

// преобразоваие элементов массива в их длину
let words = ["apple", "mandarin"];
let lengths = words.map(item => item.length);
console.log(lengths);

// преобразоваие элементов массива  - умножение на 10;
let numbers = [10, 20];
let differentNumbers = numbers.map(item => item*10);
console.log(differentNumbers);

// получение всех нужных элементов массива
let people2 = [
    {country: "USA", name: "John", age: 33},
    {country: "Ukraine", name: "Ivan", age: 19},
    {country: "Turkey", name: "Emir", age: 55},
    {country: "Russia", name: "Ivan", age: 41},
    {country: "USA", name: "William", age: 67},
  ];

  let value6 = people2.map(item => item.country);
  console.log(value6);


console.log("*");
console.log("---Метод sort---");

let arr7 = [1,2,15];
arr7.sort();
console.log(arr7);

// используем функцию сравнения где a - firstValue, b - secondValue
function differentNumbers2(a,b) {
    if(a>b){
        return 1;
    } else if (a == b){
        return 0;
    } else if (a<b){
        return -1;
    }
}

arr7.sort(differentNumbers2);
console.log(arr7);


console.log("*");
console.log("---Метод revers---");

// Метод arr.reverse меняет порядок элементов в arr на обратный
arr7.reverse();
console.log(arr7);


console.log("*");
console.log("---Метод split---");

// Метод split разбивает строку на массив по заданному разделителю
let names = "Иван, Петр, Алексей";
let arr8 = names.split(", ");
console.log(arr8);

// Второй, необязательный аргумент определят максимальное количество элементов в получаемом массиве, остаток массива будет отброшен
let arr9 = names.split(", ", 2);
console.log(arr9);


console.log("*");
console.log("---Метод join---");

// Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя "glue" между ними.

let arr10 = ["Александр", "Даниил", "Марк"];
let str = arr10.join(" и ");
console.log(str);


console.log("*");
console.log("*");
console.log("---REDUCE/reduceRight---");


let arr11 = [1, 2, 3, 4, 5];
let result = arr11.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

// Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.


console.log("*");
console.log("---Array.isArray---");

// Это способ определения типа. Так как массивы основаны на объектах, то с помощью typeof возвращается тип object в обоих случаях

console.log(typeof {}); // object
console.log(typeof []); // тоже object


// Определить тип поможет метод Array.isArray(value). Он возвращает true, если value массив, и false, если нет.

let object1 = {
    name: "Will",
}

console.log(Array.isArray(object1));
console.log(Array.isArray(arr11));
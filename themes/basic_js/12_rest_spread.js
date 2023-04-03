// ! REST parameters позволяют функции принимать переменное количество аргументов. 
// ? Аргументы передаются в виде массива.

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4, 5); // 15


function getFullName(name, surName, ...args) {
  // console.log(`${name} ${surName} ${args}`);
  // console.log(arguments);
}

getFullName('Denis', 'Butyrskiy', '34 years old', 'macOS'); // Denis Butyrskiy 34 years old,macOS


// Todo. Существует три основных отличия остаточных параметров от объекта arguments:

// * 1. остаточные параметры включают только те, которым не задано отдельное имя, в то время как объект arguments содержит все аргументы, передаваемые в функцию;
// * 2. объект arguments не является массивом, в то время как остаточные параметры являются экземпляром Array и методы sort, map, forEach или pop могут непосредственно у них использоваться;
// * 3. объект arguments имеет дополнительную функциональность, специфичную только для него (например, свойство callee).



// ! SPREAD operator 

// Todo. Позволяет "распаковать" массив или объект в местах, где ожидается список аргументов или элементов

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

// console.log(arr3); // [1, 2, 3, 4, 5, 6]


// Todo. Также, spread operator может использоваться для создания нового объекта на основе существующего.
// ? В этом примере мы использовали spread operator ...person, чтобы скопировать все свойства объекта person в новый объект newPerson. Затем мы использовали синтаксис key: value для замены значения свойства city.

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const newPerson = {...person, city: "San Francisco"};
// console.log(newPerson); // { name: "John", age: 30, city: "San Francisco" }


// ! КОПИРОВАНИЕ ОБЪЕКТА
// Todo. Мы можем использовать spread operator для копирования объекта в новый объект.

const person2 = {
  name: "John",
  age: 30,
  city: "New York"
};

const newPerson2 = {...person};
// console.log(newPerson2); // { name: "John", age: 30, city: "New York" }


// ! ОБЪЕДИНЕНИЕ МАССИВОВ
// Todo. Мы можем использовать spread operator для объединения двух или более массивов.

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];

const arr6 = [...arr1, ...arr2];

// console.log(arr6); // [1, 2, 3, 4, 5, 6]


// ! ИСПОЛЬЗОВАНИЕ entries ДЛЯ ИТЕРАЦИИ ПО ОБЪЕКТУ
// ? Мы можем использовать метод Object.entries() для итерации по объекту.

const person3 = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const [key, value] of Object.entries(person3)) {
  // console.log(`${key}: ${value}`);
}
// name: John
// age: 30
// city: New York


// ! ИСПОЛЬЗОВАНИЕ values ДЛЯ ПОЛУЧЕНИЯ СРЕДНЕГО ЗНАЧЕНИЯ
// ? Мы можем использовать метод Object.values() для получения массива значений объекта, а затем использовать reduce() для получения среднего значения.

const ages = {
  john: 30,
  jane: 25,
  bob: 40
};

const ageArray = Object.values(ages); // [30, 25, 40]
const averageAge = ageArray.reduce((total, age) => total + age) / ageArray.length;

console.log(averageAge); // 31.666666666666668
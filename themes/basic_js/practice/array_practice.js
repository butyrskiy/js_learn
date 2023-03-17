// ! ЗАДАЧА #1
// Todo. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:
// ? [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const arr = [1,2,3,5,8,9,10];
const newArr = [];

// ? Решение №1
arr.forEach((item) => {
  if(item % 2 === 0) {
    newArr.push({digit: item, odd: false});
  } else {
    newArr.push({digit: item, odd: true})
  }
})
// console.log(newArr);

// ? Решение №2 (метод «map»)
const newArr2 = arr.map((item) => {
  // let isOdd = item % 2 ? true : false; // либо прямо в объекте вычислят

  return {
    digit: item,
    odd: item % 2 !== 0,
  }
})
// console.log(newArr2);


// ! ЗАДАЧА #2
// Todo. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

let arr2 = [12, 4, 50, 1, 0, 18, 40];
const isZero = arr2.some(el => el === 0);
// console.log(isZero); // true


// ! ЗАДАЧА #3
// Todo. Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

let arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];
const isLenghtWords = arr3.every(el => el.length > 3);
// console.log(isLenghtWords); // false


// ! ЗАДАЧА #4
// Todo. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// ? Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”


const stringArr = [
  {char:"a",index:12}, 
  {char:"w",index:8}, 
  {char:"Y",index:10}, 
  {char:"p",index:3}, 
  {char:"p",index:2},
  {char:"N",index:6}, 
  {char:" ",index:5}, 
  {char:"y",index:4}, 
  {char:"r",index:13}, 
  {char:"H",index:0},
  {char:"e",index:11}, 
  {char:"a",index:1}, 
  {char:" ",index:9}, 
  {char:"!",index:14}, 
  {char:"e",index:7}
];

function getStringFromArray(arr) {
/*   const copyArr = stringArr.slice();
  const sortedArr = copyArr.sort((a, b) => a.index - b.index);

  const strFromArr = sortedArr.reduce((acc, elem) => {
    return acc += elem.char;
  }, '')
  
  return strFromArr; */

  // ? Можно сократить код выше до одной сроки, предварительно проверив, что мы работает именно с массивом
  if(!Array.isArray) {
    return;
  }

  return arr.slice().sort((a, b) => a.index - b.index).reduce((acc, elem) => (acc += elem.char), '');
}
// getStringFromArray(stringArr); // 'Happy New Year!'


// ! ЗАДАЧА #5
// Todo. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const arrNum = [ [14, 45], [1], ['a', 'c', 'd'] ];

function arrNumSort(arr) {
  // const copyArr = arrNum.slice(); // ? Можно предварительно скопировать массив, чтобы не менять исходный
  const sortArr = arr.sort((a, b) => a.length - b.length);
  return sortArr;
}
// arrNumSort(arrNum);


// ! ЗАДАЧА #6
// Todo. Есть массив объектов. Отсортировать их по возрастающему количеству ядер (cores).

const cpuArr = [
  {cpu: 'intel', info: {cores:2, cache: 3}},
  {cpu: 'intel', info: {cores:4, cache: 4}},
  {cpu: 'amd', info: {cores:1, cache: 1}},
  {cpu: 'intel', info: {cores:3, cache: 2}},
  {cpu: 'amd', info: {cores:4, cache: 2}}
]

function sortCpu(arr) {
  const sortArr = arr.sort((a, b) => a.info.cores - b.info.cores);
  return sortArr;
}
// sortCpu(cpuArr);


// ! ЗАДАЧА #7
// Todo. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// ? filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]


let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function prodSort(arr, minPrice, maxPrice) {
/*   const searchProd = arr.filter(prod => (prod.price >= minPrice && prod.price <= maxPrice));
  const res = searchProd.sort((a, b) => a.price - b.price);

  return res; */

  // ? можно все методы вызвать цепочкой
  return arr
    .filter(prod => (prod.price >= minPrice && prod.price <= maxPrice))
    .sort((a, b) => a.price - b.price);
}
console.log(prodSort(products, 5, 15));
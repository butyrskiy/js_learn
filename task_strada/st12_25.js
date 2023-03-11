/* Задача #1
Создать массив из целых чисел и используя метод forEach, вывести их в консоль с текстовым сообщением Number is ${number} */

const arrNum = [3,7,13];

function showNumer(num) {
 console.log(`Number is ${num}`);
}

arrNum.forEach(showNumer);

// arrow version
arrNum.forEach(num => {
  console.log(`Number is ${num}`);
});



/* Задача #2
дан массив строк ['cat', 'dog', 'elephant', 'tiger', 'lion'].
найдите первое слово длиной больше 7 символов и выведите его в консоль */

const arrList = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

// version #1
arrList.find(item => {
  if(item.length > 7) {
    console.log(item); // elephant
  }
});

// version #2
const result = arrList.find(item => item.length > 7);
console.log(result); // elephant


/* Задача #3
Дан массив чисел [1, 11, -2, 3, -10, 4].
Создайте новый массив только из отрицательных чисел
Выведите его в консоль */

const numbers = [1, 11, -2, 3, -10, 4];
const otherNumbers = numbers.filter(number => number < 0);
console.log(otherNumbers); // -2, -10


/* Задача #4
- Дан массив чисел `[1, 11, -2, 3, -10, 4]`.
- Создайте новый массив из абсолютных значений элементов и выведите его в консоль. */

const numbers2 = [1, 11, -2, 3, -10, 4];
const absoluteNumbers = numbers2.map(number2 => Math.abs(number2));
console.log(absoluteNumbers);


/* Задача #5
- Дан массив чисел `[1, 11, -2, 3, -10, 4]`.
- Отсортируйте массив по убыванию и выведите его в консоль. */

const numbers3 = [1, 11, -2, 3, -10, 4];
const sortNumbers = numbers3.sort((number3, number4) => number4 - number3);
console.log(sortNumbers);
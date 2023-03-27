let obj_1 = {
  name: 'John',
  age: 35,
  country: 'Brazil',
  Car: false
}

let obj_2 = {};

// Метод копирования объектов #1
for(let key in obj_1) {
  obj_2[key] = obj_1[key];
}
console.log(obj_2);

// Метод копирования #2. Object.assign
Object.assign(obj_2, obj_1);
console.log(obj_2);

// Метод копирования в пустой объект #3
let clone = Object.assign({}, obj_2);
console.log(clone);
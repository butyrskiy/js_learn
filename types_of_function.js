console.log('*');
console.log('Function Declation');

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 7));

//
console.log('*');
console.log('Function Expression');

let sum2 = function (a, b) {
  return a + b;
};
console.log(sum2(13, 7));

//
console.log('*');
console.log('Arrow Function #1');

let sum3 = (a, b) => a + b;
console.log(sum3(30, 5));

//
console.log('*');
console.log('Arrow Function #2');

let sum4 = (a) => (a *= a);
console.log(sum4(33));

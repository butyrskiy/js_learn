// function calc(operator, a, b) {
//     const operations = {
//         add: '+',
//         multi: '*',
//         subtract: '-',
//     }

//     switch (operator) {
//         case 'add':
//             return a + b;
//         case 'multi':
//             return a * b;
//         case 'subtract':
//             return a - b;
//         default:
//             console.log('Ошибка');
//     }
// }

// console.log(calc('add', 5, 5));
// console.log(calc('multi', 5, 5));
// console.log(calc('subtract', 5, 5));

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
// delete user.name;

console.log(typeof(user));
console.log(user.name);
console.log(user.surname);
console.log(user.name);
console.log(user);
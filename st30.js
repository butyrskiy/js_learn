// example #1
console.log('*');
console.log('example #1');
console.log('*');
//

function money(name) {
  return function (value) {
    return `We have ${value} ${name}`;
  };
}

const moneyDollar = money('Dollar');
const moneyEuro = money('Euro');

console.log(moneyDollar(1000));
console.log(moneyEuro(500));

// example #2
console.log('*');
console.log('example #2');
console.log('*');
//

let per = 1;

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(ruUrl('yandex'));

// example #3
console.log('*');
console.log('example #3');
console.log('*');
//

function getFullName(firstName, lastName) {
  return function () {
    return `${firstName} ${lastName}`;
  };
}

const fullName = getFullName('Denis', 'Butyrskiy');

console.log(fullName());

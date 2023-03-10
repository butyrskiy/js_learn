const prod1 = {
  name: 'Intel',
  price: 100,
  getPrice() {
    // console.log(this);
    // console.log(this.name);
    /* console.log(this.price); */
  }
}

prod1.getPrice(); // так функция вызвана в контексте объекта, то мы получим этот объект или любое его свойство
// Todo. ключевое слово this будет равен тому, что нахоходится перед самой крайней правой точкой


const prod2 = {
  name: 'Intel',
  price: 100,
  getPrice() {
    console.log(this.price);
  },
  info: {
    information: ['2.7ghz'],
    getInfo() {
      console.log(this);
    }
  }
}

// prod2.info.getInfo(); // в данном случае ключевое слово this будет указывать на вложенный объект

// !НЕ ВАЖНО где определена(создана) функция, важно в контексте чего она вызвана

function getPrice(currency = '$') {
  console.log(currency + this.price);
  return this;
}

function getName() {
  console.log(this.name);
  return this;
}

const prod3 = {
  name: 'Intel',
  price: 100,
  getPrice,
  getName() {
    console.log(this.name);
  },
  info: {
    information: ['2.7ghz'],
    getInfo() {
      console.log(this);
    }
  }
}
// prod3.getPrice();


const prod4 = {
  name: 'AMD',
  price: 350,
  getPrice,
  info: {
    information: ['2.7ghz'],
    getInfo() {
      console.log(this);
    }
  }
}
// prod4.getPrice();

// !то есть внешняя функция может быть вызвана в любом контексте и она будет ссылать именно на тот объект в котором была вызвана

// также мы можем скопировать метод из одного объекта в другой
prod4.getName = prod3.getName;
// prod4.getName();


// Todo. Вызов методов цепочкой. Необходимо, чтобы у следующего метода был тот метод, который мы вызываем
let str = 'Hello world';
const reversStr = str
.split('') // возвращает строку в виде массива по одному символу ['H', 'e'...];
.reverse() // переворачивает полученный ранее массив и возвращает ['d', 'l'...]
.join(''); //  обратно превратит его в строку
// console.log(reversStr);


const prod5 = {
  name: 'Celeron',
  price: 50,
  getPrice,
  getName
}

// prod5.getName().getPrice(); 
// не сработает, потому что функция getName вернет нам undefined, так как функция ничего не возвращает. Конечно, у undefined нет метода .getPrice (undefined.getPrice()).
// Todo. Но, если мы в наших функциях допишем return this, то в таком случае функция будет возвращать нам объект в котором есть данные методы


// ? Методы «call» и метод «apply»
const prod6 = {
  name: 'BMW',
  price: 50,
}

// getPrice.call(prod6, '*');
// Todo. Метод «call» позволяет указать в каком контексте мы хотим вызвать функцию. Первым аргумент - контекст вызова. Следующими аргументами можем передать какие-то параметры в функцию.

// getPrice.apply(prod6, ['*']);
// Todo. Метод «apply» отличается от «call» только тем, что принимает аргументы в виде массива

// ? Потеря контекста
const prod7 = {
  name: 'Celeron',
  price: 50,
  getPrice,
}

// setTimeout(prod7.getPrice, 1000);
// не сработает, потому что setTimeout работает в контексте window, а у window нет метода getPrice

// Todo. Метод «Bind» в отличие от «apply» и «call» не вызывает функцию, а возвращает эту же функцию, но уже с привязанным контекстом. Первым аргументов передаём привязанный контекст, а следующими можем передать какие-то параметры в функцию

const getPriceBind = prod7.getPrice.bind(prod7, '*');
console.log(getPriceBind);
setTimeout(getPriceBind, 1000);
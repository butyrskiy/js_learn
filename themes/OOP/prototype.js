// ! ПРОТОТИП - ЭТО СВОЙСТВО ОБЪЕКТА, КОТОРОЕ СОДЕРЖИТ СВОЙСТВА И МЕТОДЫ СВОИХ РОДИТЕЛЕЙ И РОДИТЕЛЕЙ ИХ РОДИТЕЛЕЙ И ТАК ДАЛЕЕ ВВЕРХ ПО ЦЕПОЧКЕ
// ? В свою очередь «прототип» - это тоже объект содержащий свойства и методы. Он есть у ЛЮБОГО ОБЪЕКТА (__proto__ // [[Prototype]])

function Product(brand, price, discount) {
  this.brand = brand; // ? будет добавлено свойство «brand: 'Apple'»
  // console.log(this); // ? «this» ведёт на скрытый объект внутри функции
  this.price = price;
  this.discount = discount;
  // this.getPriceWithDiscount = function() {
  //   return this.price * (100 - this.discount) / 100;
  // } // * ниже перенесли в прототип
}

const apple = new Product('Apple', 100, 15);
const sumsung = new Product('Sumsung', 200, 25);

// Todo. Например, у нашего ЭКЗЕМПЛЯРА ОБЪЕКТА «apple» прототипом является конструктор «Product»
// console.log(apple); // constructor Product(brand, price, discount)


// ! ПРОТОТИП НУЖЕН ДЛЯ ТОГО, ЧТОБЫ ТЕ ЭКЗЕМПЛЯРЫ, КОТОРЫЕ СОЗДАЮТСЯ ОТ КЛАССОВ ИМЕЛИ ОБЩИЙ ДОСТУП К ИХ МЕТОДАМ И СВОЙСТВАМ
// Todo. То есть метод «getPriceWithDiscount» доступен как в экземляре «apple» так и в «sumsung»


// Todo. В данный момент метод «getPriceWithDiscount» присутствует в КАЖДОМ ЭКЗЕМПЛЯРЕ объекта и мы можем ПЕРЕМЕСТИТЬ этот метод в ПРОТОТИП
// ? Таким образом он НЕ будет содержаться внутри каждого экземпляра, но к нему будет доступ через прототип


// Todo. ПРОТОТИП это специальное СВОЙСТВО, которое отслеживается «JavaScript» и при вызове метода у объекта он будет ИСКАТЬСЯ сначала ВНУТРИ самого объекта и если его там нет, то пойдёт по ЦЕПОЧКЕ ПРОТОТИПОВ вниз в поисках этого метода
// ? Например, мы можем у нашего экземпляра вызвать метод «hasOwnProperty» хоть он и не присутствует в нашем объете, но будет НАЙДЕН по цепочке ниже в прототипе

apple.hasOwnProperty('brand'); // true


// ! МЫ МОЖЕМ САМИ ЗАПИСЫВАТЬ В ПРОТИП МЕТОДЫ
// ? Запишем метод «getPriceWithDiscount» в прототип

Product.prototype.getPriceWithDiscount = function() {
  return this.price * (100 - this.discount) / 100;
}

// Todo. Теперь экземпляр объекта «apple» не содержит метод «getPriceWithDiscount», но он есть в прототипе и также будет работать
// ? Также этого метода не будет и в «sumsung», так он создан от одного КЛАССА.
// ? Теперь мы не «держим» этот метод внутри самих экземпляров, но имеем к ним доступ через их прототип


// ! СОЗДАДИМ ЕЩЁ ОДИН МЕТОД И ЗАПИШЕМ ЕГО В ПРОТОТИП

Product.prototype.setPrice = function(newPrice) {
  this.price = newPrice;
}

apple.setPrice(500); // ? будет установлена новая цена
apple.getPriceWithDiscount(); // ? получим новую цену с учётом скидки


// ! МЕТОД «Object.create»
// ? Данный метод позволяет создавать новые объекты на основе существующего объекта.
// Todo. Метод Object.create принимает один аргумент - объект, который будет использоваться в качестве прототипа для создаваемого объекта. Новый объект будет наследовать свойства и методы этого прототипа.

const protoForObj = {
  sayHello() {
    return 'Hello world';
  }
}

const obj = Object.create(protoForObj);
// console.log(obj); // ? получим пустой объект, НО если откроем ссылку «Prototype», то увидим там метод «SayHello»


// ! НАСЛЕДОВАНИЕ
// Todo. Наследование проходит два этапа ФУНКЦИОНАЛЬНОЕ и ПРОТОТИПНОЕ
// ? Наследование нужно для того, чтобы ПЕРЕИСПОЛЬЗОВАТЬ свойства и методы другого класса схожего по логике и функционалу

// ? Создаём класс «User»
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// ? Добавляем два метода в прототип
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

User.prototype.sayHello = function() {
  return `Hello ${this.firstName} ${this.lastName}`;
}

const user = new User('Denis', 'Butyrskiy');


// Todo. Допустим мы хотим создать новый класс с такими же свойствами и методами и добавить в него новый метод
// ? Для этого, чтобы не дублировать код выше, мы воспользуемся НАСЛЕДОВАНИЕМ
// ? Чтобы это сделать, мы должны внутри класса, который хочет унаследоваться от другого класса вызвать класс, который является родительским

function Costumer(firstName, lastName, membership) {
  User.call(this, firstName, lastName); // ? ФУНКЦИОНАЛЬНОЕ НАСЛЕДОВАНИЕ. Унаследуются свойства и методы которые были внутри КЛАССА объекта родителя, но НЕ прототипа
  // User.apply(this, arguments); // ? если параметров много, можно так

  this.membership = membership; // ? добавляем нужные свойства
}

// Todo. ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ
Costumer.prototype = Object.create(User.prototype); // ? Копируем прототип 
Costumer.prototype.cunstrutor = Costumer; // ? Возвращаем свойство «cunstructor», которое было утеряно при наследовании и которое указывает на функию «Costumer»

// ? СОЗДАЁМ ПРОТОТИП для «Costumer»
Costumer.prototype.getMembership = function() {
  return this.membership.toUpperCase();
}

const costumer = new Costumer('Ivan', 'Ivanov', 'basic');
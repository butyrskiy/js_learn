// ! В ES6 для создания класса появилось ключевое слово «class»
// ? Если класс будет принимать какие-то аргументы, то нужно добавить специальный МЕТОД «constructor». Внутри этого метода необходимо перечислить нужные аргументы

const methodName = 'setDiscount';

class Product {
  constructor(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
  }

  // Todo. Методы будут СРАЗУ ЗАПИСАНЫ в прототип, в отличие от ES5 (нужно было отдельно писать «prototype»)

  getPriceWithDiscount() {
    return (this.price *(100 - this.discount)) / 100;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }

  // Todo. Также можно создать «СТАТИЧЕСКИЕ МЕТОДЫ». Эти методы можно вызывать только на самом КЛАССЕ (отдельно от экземпляра класса, без его создания). Они НЕ имеют доступа к «this»
  // ? Если метод НЕ ТРЕБУЕТ ОБРАЩЕНИЯ к «this», то его можно сделать статическим

  static plus(x, y) {
    return x + y;
  }

  // Todo. Мы можем создавать ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
  // ? Вне класса мы можем создать переменную и записать в неё название класса

  [methodName] (newDiscount) {
    this.discount = newDiscount;
  }
}

// Todo. Класс ВЫЗЫВАЕТСЯ при помощи оператора «New»
// ? Метод «constructor» вызывается автоматически при вызове класса и ЗАПИСЫВАЕТ все наши свойства в новый объект через «this»

const newProduct = new Product('Apple', 500, 10);


// ! НАСЛЕДОВАНИЕ В ES6

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Todo. СОЗДАДИМ НОВЫЙ КЛАСС, который будет НАСЛЕДОВАТЬСЯ от класса «User»
// ? Используем ключевое слово «extends» при создании
// ? В конструктуре нужно вызвать «super» куда записываем аргументы, которые принимает класс от которого наследуемся
// ? После этого можно дополнительно определять свойства и методы только для этого класса

class Costumer extends User {
   constructor(firstName, lastName, membership) {
    super(firstName, lastName);
    this.membership = membership;
   }

   getFullName() {
    console.log('New get full name method');
   }
}

// Todo. Создаём экземпляр(instance) класса «Costumer»
const newCostumer = new Costumer('Denis', 'Butyrskiy', 'basic');
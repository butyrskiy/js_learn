// ! ЗАДАЧА #1
// Todo. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
//  ? const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
  width: 10, 
  height: 10, 
  getSquare() {
    return this.width * this.height;
}}
// console.log(rectangle.getSquare()); // 100


// ! ЗАДАЧА #2
// Todo. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
    price: 10,
    discount: '15%',
    getPrice() {
      return this.price;
    },
    getPriceWithDiscount() {
      return this.price - (this.price / 100 * parseFloat(this.discount));
    }
};

// console.log(price.getPrice()); // 10
// console.log(price.getPriceWithDiscount()); // 8.5


// ! ЗАДАЧА #3
// Todo. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const obj = {
  height: 10,
  getNewHeight() {
    return this.height + 1
  },
}
// console.log(obj.getNewHeight());


// ! ЗАДАЧА #4
// Todo. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
    value: 1,
    double: function() {
      return this.value * 2;
    },
    plusOne: function() {
      return this.value + 1;
    },
    minusOne: function() {
      return this.value - 1;
    },
}
// console.log(numerator.double().plusOne().plusOne().minusOne()); // ! Не решил
// console.log(numerator.value) // 3


// ! ЗАДАЧА #5
// Todo. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const objProducts = {
  price: 10,
  amount: 500,
  getTotalPrice() {
    return this.price * this.amount;
  }
}
// console.log(objProducts.getTotalPrice()); // 5000


// ! ЗАДАЧА #6
// Todo. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.

const objProducts2 = {
  price: 20,
  amount: 100,
}
// console.log(objProducts.getTotalPrice.call(objProducts2)); // 2000


// ! ЗАДАЧА #7
// Todo. Даны объект и функция: Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizes = {
  width: 5, 
  height: 10
};

let getSquare = function() {
  return this.width * this.height
};
// console.log(getSquare.call(sizes)); // 50


// ! ЗАДАЧА #8
// Todo. Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {
      return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // 25
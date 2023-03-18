// ! ОБЪЕКТ «classList». РАБОТА С КЛАССАМИ
// ? Это объект в котором содержаться методы для работы с классами элемента

const div = document.querySelector('div');
// console.log(div.classList);

// Todo. МЕТОД «add»
// ? Добавляем новый класс элементу «div»
div.classList.add('article', 'custom');
// console.log(div.classList); // DOMTokenList(3) ['content', 'article', 'custom', value: 'content article custom']
// console.log(div);

// Todo. МЕТОД «remove»
// ? Удаляем класс у элемента
div.classList.remove('custom');
// console.log(div);

// Todo. МЕТОД «contains»
// ? Проверка наличия класса у элемента. Возвращает true/false
const res = div.classList.contains('custom');
const res2 = div.classList.contains('article');
// console.log(res); // false
// console.log(res2); // true

// Todo. МЕТОД «toggle»
// ? Если класса нет, то он будет добавлен, если класс есть, то он будет удалён. При добавлении класса возвращает «true», при удалении - «false»
div.classList.toggle('box'); // добавлен новый класс «box»
div.classList.toggle('box'); // удалён класс «box»
// console.log(div);

// Todo. СВОЙСТВО «className»
// ? Получаем список классов в виде строки
// console.log(div.className); // 'content article'


// Todo. У некоторых элементов есть обязательные атрибуты и мы можем обращаться к ним без дополнительных методов
const link = document.querySelector('.link');
// console.log(link);
// console.log(link.href); // http://127.0.0.1:5500/themes/DOM/_indexx.html


// ! МЕТОДЫ РАБОТЫ С АТРИБУТАМИ ЭЛЕМЕНТА

// Todo. Метод «setAttribute». ДОБАВЛЕНИЕ АТРИБУТА
// ? Первый параметр - название атрибута, второй - его значение
div.setAttribute('id', 'MyId');
// console.log(div);

// Todo. Метод «getAttribute». ПОЛУЧЕНИЕ АТРИБУТА
// console.log(div.getAttribute('id'));

// Todo. Метод «hasAttribute». ПРОВЕРКА НАЛИЧИЯ АТРИБУТА
// ? Возвращает true/false
// console.log(div.hasAttribute('id'));

// Todo. Метод «removeAttribute». УДАЛЕНИЕ АТРИБУТА
div.removeAttribute('id');
// console.log(div);


// ! МЕТОДЫ РАБОТЫ С DATA ATTRIBUTES
// ? Это кастомные атрибуты, которые мы сами можем создавать

// Todo. Свойство «dataset»
// ? Возращает объект в котором содержаться все атрибуты элемента
// console.log(div.dataset); // {myattr: 'myCustom value'}
// console.log(div.dataset.myattr); // 'myCustom value'
// ? Можно перезаписать значение атрибуты
div.dataset.myattr = 'newValue';
// console.log(div.dataset.myattr); // 'newValue'
// ? Можно также получить через getAttribute();
// ! Нужно писать полное имя с «data»
console.log(div.getAttribute('data-myattr'));
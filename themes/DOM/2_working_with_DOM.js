const title = document.querySelector('h1');
// console.log(title);

// ! СВОЙСТВО «innerHTML»
// Todo. Может записать новое содержимое внутрь элемента

// ? Если присвоить пустую строку, то содержимое будет удалено
title.innerHTML = '';

// ? Присваиваем строку
title.innerHTML = 'Hello people!'; // 'Hello people!'

// ? Можно добавить HTML-разметку
title.innerHTML = '<span>text</span>';
// console.log(title);


// ! СВОЙСТВО «textContent»
title.textContent = 'Hello world!' // 'Hello world!'

// Todo. Позволяет добавить текстовое содержимое, но разметку добавить не получится
// title.textContent = '<span>Hello world!</span>';
// console.log(title); // '<span>Hello world!</span>'


// ! СОЗДАНИЕ ЭЛЕМЕНТА
// Todo. Создаём элемент
// ? Тег «span» пока не добавляется на страницу и существует только внутри JS
const span = document.createElement('span');

// Todo. Задаём текствое содержимое
span.textContent = 'span created by createElement';

// Todo. Задаём класс
span.classList.add('myClass');


// ! МЕТОДЫ «appendChild»
// Todo. Позволяют вставлять Node-узлы, то есть DOM-элементы в конец списка дочерних элементов
// ? Принимает название тега, который мы хотим вставить на страницу

// Todo. Добавляем на страницу
// ? Добавится внутрь тега «title»
// title.appendChild(span);


// ! МЕТОД «insertAdjacentHTML»
// Todo. Добавляет содержимое в нужное нам место
// ? Первый аргумент - позиция на которую нужно поставить элемент. Второй - содержимое.
// ? Можно добавить вместе с HTML-разметкой и она будет распознана браузером
// * afterbegin - Внутри элемента в начале
// * afterend - После элемента
// * beforebegin - Перед элементом
// * beforeend - Внутри элемента в конце

// title.insertAdjacentHTML('afterend', '<h2>tag h2</h2>');

// ? Добавляем созданный «span»
title.insertAdjacentElement('afterend', span);

// ! При попытке добавить созданный DOM-узел ещё в какое-то место, он будет удалён из предыдущего.
// ! Дело в том, что DOM-узел может быть только в ОДНОМ экземпляре и если его попытаться добавить ещё в одно место, то он будет перемещён, а не скопирован
// ? Например, если мы хотим добавить наш созданный «span» не только после «title», но и ещё, например внутрь «h2».
const h2 = document.querySelector('h2');
h2.insertAdjacentElement('beforeend', span);
// ? Элемент появится в после «h2», но исчезнет после «title» куда мы его ранее добавилию


// ! МЕТОД «createDocumentFragment()»
// ? Cоздаётся DOM-узел(контейнер) в котором мы можем «сложить» наши элементы
const fragment = document.createDocumentFragment();

// Todo. Добавим сразу несколько элементов на страницу

const colors = ['yellow', 'blue', 'grey'];
colors.forEach((color) => {
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`);
  item.style.backgroundColor = color;
  item.textContent = color;
  // ? Добавляем в наш ранее созданный фрагмент
  fragment.appendChild(item);
})

document.body.appendChild(fragment);


// ! УДАЛЕНИЕ ЭЛЕМЕНТА СО СТРАНИЦЫ
// Todo. Метод «remove()»
// span.remove();

// Todo. Метод «removeChild»
// ? Удаляет дочерний элемент из DOM. Возвращает удалённый элемент.
// ? В начале родительский элемент, потом метод и в качестве параметра тот элемент, который нужно удалить
h2.removeChild(span); 

// ? Если родитель «body», то синтаксис такой:
title.parentElement.removeChild(title);
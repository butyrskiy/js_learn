// создание нового элемента
const newDiv = document.createElement('div');
const square = document.createElement('div');

const parent = document.querySelector('.wrapper');
const firstHeart = document.querySelector('.heart_1');
const secondHeart = document.querySelector('.heart_2');

// устанавливаем текстовый контент
newDiv.textContent = 'Hello, world!';
// добавляем стиль
newDiv.style.backgroundColor = 'orange';

// добавляем класс элементу
square.className = 'square';

// square.textContent = '123';

// МЕТОДЫ ДОБАВЛЕНИЯ ЭЛЕМЕНТА НА СТРАНИЦУ

// метод appendChild() вставляет элемент в конец родительского элемента
// document.body.appendChild(newDiv);
parent.appendChild(square);


// метод insertBefore() добавляет элемент в список дочерних элементов родителя перед указанным элементом
// parent.insertBefore(newDiv, firstHeart);
// parent.insertBefore(square, secondHeart);


// метод replaceChild() заменяет указанный элемент другим элементом
// parent.replaceChild(square, firstHeart);


// методы insertAdjacentHTML / insertAdjacentText / Element / insertAdjacentElement 


const value = '<h1>Hello world</h1>';

// вставить HTML-КОД
// parent.insertAdjacentHTML('afterbegin', value);

// вставить ТЕКСТ
// parent.insertAdjacentText('afterbegin', value);

// вставить ELEMENT
// parent.insertAdjacentElement('beforebegin', square);
// parent.insertAdjacentElement('afterbegin', square);
// parent.insertAdjacentElement('beforeend', square);
// parent.insertAdjacentElement('afterend', square);


// КЛОНИРОВАНИЕ ЭЛЕМЕНТА
const cloneElement = square.cloneNode();
// const cloneElement = square.cloneNode(true); // параметр «true» позволяет скопировать не только структуру, но и контент элемента

// добавляем клинированный элемент
// parent.appendChild(cloneElement);
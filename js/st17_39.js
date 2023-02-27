const button = document.querySelector('.firstButton');


//установить элементу любой атрибут
button.setAttribute('data-value', '10');

const value = button.getAttribute('data-value');
// console.log(value); // 10

/* Ваша задача: 
Напишите функцию, которая 
Изменяет фон страницы на заданный цвет по клику на кнопку "Изменить фон"
Должна получать цвет из атрибута data-color кнопки
Присваивать его в качестве свойства background-color элементу body на странице.
<button id="change-bg" data-color="#e6e6e6">Изменить фон</button>
пример кнопки */


const bodyElem = document.body,
      bgButton = document.querySelector('#change-bg'),
      bgColor = bgButton.getAttribute('data-color'),
      backgroundColor = bodyElem.style.backgroundColor;

      function color() {
        document.body.style.backgroundColor = bgColor;
      }

      bgButton.addEventListener('click', color);


// установить класс на элемент
const button2 = document.querySelectorAll('button')[2];
button2.className = 'secondButton';


// более удобный способ работы с классами
const button3 = document.querySelectorAll('button')[3];
button3.classList.add('new-class'); // добавляем класс на элемент
button3.classList.remove('new-class'); // удаляем класс
button3.classList.add('new-class2'); // добавляем класс на элемент

// console.log(button3.classList.contains('new-class2')); // true
// console.log(button3.classList.contains('new-class')); // false


// данный метод возвращает объект со всеми текущими стилями элемента
const styles = getComputedStyle(button3);
// console.log(styles.backgroundColor); // кокретный стиль
// console.log(styles); // все стили
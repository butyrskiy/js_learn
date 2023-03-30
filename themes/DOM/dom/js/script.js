'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

/* box.style.backgroundColor = 'fuchsia';
box.style.width = '500px'; */

// код выше можно скомбинировать при помощи свойства «cssText» 
box.style.cssText = 'background-color: fuchsia; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


//применить одни и теже свойства для множества селекторов можно с помощью цикла for, но данный способ почти не используется
/* for(let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'pink';
} */

// специальный перебирающий метод:
hearts.forEach(element => {
  element.style.backgroundColor = 'pink';
});


// создание нового элемента:
const div = document.createElement('div');
// используется редко:
const text = document.createTextNode('some text');

// добавляем класс «black» элементу:
div.classList.add('green')

// добавление элемента div в конец body:
// document.body.append(div);

// добавление элемента div в КОНЕЦ дива с классом «wrapper»:
wrapper.append(div);

// устаревший метод добавления элемента в конец:
// wrapper.appendChild(div);

// добавление элемента div в НАЧАЛО дива с классом «wrapper»:
// wrapper.prepend(div);

// добавление элемента div ПЕРЕД конкретным элементом:
// hearts[1].before(div);

// добавление элемента div ПОСЛЕГО конкретного элемента:
// hearts[1].after(div);

// устаревший метод, который сейчас заменяют prepend, before, afteer. Первый аргумент - блок, который вставляем, второй аргумент - перед каким элементом вставляем:
// wrapper.insertBefore(div, hearts[0]);

// УДАЛЕНИЕ элемента со страницы:
btns[2].remove();
// устаревший метод удаления:
// wrapper.removeChild(hearts[1]);

// ЗАМЕНА одного элемента другим:
// circles[1].replaceWith(hearts[0]);
// устаревший метод замены:
// wrapper.replaceChild(circles[0], hearts[0]); 


// ДОБАВЛЕНИЕ КОНТЕНТА в элемент:
div.innerHTML = '<h1>Hello</h1>';

// второй вариант добавления контента (не работает с HTML-кодом):
// div.textContent = 'Hello';


// вставить HTML в определённое место на странице. beforebegin - перед элементом; afterbegin - в начало нашего элемента; beforeend - в конец нашего элемента; afterend - после элемента:
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
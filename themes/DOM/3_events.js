// ! УСТАНОВКА ОБРАБОТЧИКА НА ЭЛЕМЕНТ

const btn = document.querySelector('button');
const link = document.querySelector('.click');
const container = document.querySelector('.container');

// Todo. Старый способ установить событие на элемент. Обычно не используется
// ? При данном способе нельзя установить несколько событий на 1 элемент. Последнее будет перезаписывать предыдущие
btn.onclick = function() {
  // console.log('click');
}


// Todo. МЕТОД «addEventListener»
// ? Принимает следующие аргументы
// * 1. Тип события
// * 2. Обработчик события
// * 3. Объект с определёнными настройками (не обязательный параметр)

btn.addEventListener('click', function() {
  // console.log('click');
})

// ? Есть возможность повесить несколько обработчиков
btn.addEventListener('click', function() {
  // console.log('click 2');
})

// Todo. ОБЪЕКТ «event»
// ? Каждый обработчик принимает событие «event». Это объект
btn.addEventListener('click', function(e) {
  // console.log(e);
})

// Todo. МЕТОД «preventDefault()»
// ? Некоторые элементы, такие как форма или ссылка имеют встроенные специальные действия, которые они делают по-умолчанию. Например, при клике на ссылку осуществляется переход на новую страницу, форма отправляет данные и т.д.
// * Чтобы отменить это дефолтное действие, которое делает браузер для элемента, использовуется «e.preventDefault()»

// link.addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log('click');
// })

// ! УДАЛЕНИЕ СОБЫТИЯ
// ? Для удаления события есть метод «removeEventListener»
// ? Они принимает два параметра:
// * 1. Название события
// * 2. Функцию-обработчик (для этого у функции должно быть название(переменная))

function clickHandler (e) {
  console.log(this);
  e.preventDefault();
  console.log('click');
}
link.addEventListener('click', clickHandler)

// ? УДАЛЕНИЕ ОБРАБОТЧИКА
// link.removeEventListener('click', clickHandler);


// Todo. Пример со стрелочной функцией
// btn.addEventListener('click', (e) => {
//   console.log(this);
//   console.log(e);
// })

// ! ОТЛИЧИЯ ПРИ РАБОТЕ С ОБЫЧНОЙ И СТРЕЛОЧНОЙ ФУНКЦИЯМИ
// ? Стрелочная функция ссылается на глобальный объект «window»
// ? Обычная функия ссылает на элемент («this» указывает на элемент) на который был установлен обработчик.


// ! ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
// Todo. Это когда мы можем повесить обработчик событий на общий элемент и уже внутри отслеживать с помощью «event target» где именно произошло событие

btn.addEventListener('click', (e) => {
  const div = document.createElement('div');
  const nestedBtn = document.createElement('button');
  div.textContent = Math.random();
  nestedBtn.textContent = 'button';
  div.appendChild(nestedBtn);
  container.appendChild(div);
})

// ? Вешаем обработчие событий не весь контейнер
container.addEventListener('click', (e) => {
  console.log(e.target);
  if(e.target.tagName === 'BUTTON') {
    console.log('Button clicked!')
  }
});


// ! ВСПЛЫТИЕ И ПОГРУЖЕНИЕ СОБЫТИЯ
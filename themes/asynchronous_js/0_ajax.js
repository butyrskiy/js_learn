// Todo. СОЗДАЁМ «ЭКЗЕМПЛЯР XMLHttpRequest»
// ? Он возвращает объект

const xhr = new XMLHttpRequest(); // ? создали экземпляр и получили методы
// console.log(xhr); // ? получаем объект со свойствами и методами


// Todo. ОТКРЫВАЕМ ЗАПРОС
// ? Это можно сказать настройки нашего будущего запроса
// ? Стандартно нам нужно указать два параметра. Это МЕТОД запроса и URL-адрес запроса
// * Стандартный это GET-запрос для получения данных
// * POST-запрос для отправки данных на сервер
// * PUT-запрос для обновления данных на сервере
// * DELETE - для удаления данных

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');


// Todo. ТЕПЕРЬ НУЖНО ПОДПИСАТЬСЯ НА СОБЫТИЯ ЗАГРУЗКИ И ПОЛУЧЕНИЯ ДАННЫХ ОТ СЕРВЕРА
// ? Есть несколько событий на которые мы можем подписаться
// ? Мы будем использовать события «load» и «error»

// * «load» - это событие когда мы УСПЕШНО ПОЛУЧИЛИ данные от сервера
xhr.addEventListener('load', () => {
  // console.log('request loaded');
});


// Todo. Для того, чтобы ОТПРАВИТЬ ЗАПРОС вызываем МЕТОД «SEND»
// ? Этот метод может принимать тело запроса в случае, если мы что-то отправялем на сервер(POST-запрос)
// ? В нашем случае передавать ничего не нужно, наша задача получить данные

// xhr.send();


// Todo. ПОЛУЧАЕМ ДАННЫЕ
// ? Ответ от сервера хранится в свойстве объекта «xhr» - «responseTeaxt»
// ? В нашем случае мы получаем массив объектов в формате «JSON»
// * Мы не можем получить данные вне обработчика события, так как это асинхронный запрос и мы не знаем, когда эти даные будут получены

xhr.addEventListener('load', () => {
  console.log(xhr.responseText);
});

// console.log(xhr.responseText) // ! не сработает вне обработчика, получим пустую строку


// Todo. Мы также можем обрабатывать ошибки, подписавшись на СОБЫТИЕ «ERROR»

xhr.addEventListener('error', () => {
  console.log('error'); // ? отработает, если в адресе запроса ДО СЕРВЕРА будет ошибка, если ошибка будет в маршруте, но до сервера адрес ВЕРНЫЙ то получим «404» и пустой объект.
  // * Получим пустой объект потому что общение с сервером прошло успешно
  // * xhr.addEventListener('error') в таком случае НЕ отработает
  // * Отработает xhr.addEventListener('load'), но так как маршрут(путь) УЖЕ НА САМОМ СЕРВЕРЕ НЕ ВЕРНЫЙ, то получим 404 ошибку и пустой объект без данных
});


// Todo. ТЕПЕРЬ ВСЁ ВЫШЕ «ЗАВЕРНЁМ В ФУНКЦИЮ»

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText); // ? Преобразуем JSON в массив
    cb(response); // ? передаём полученные данные в колбэк 
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
}

const btn = document.querySelector('button');
const container = document.querySelector('.container');

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  
  response.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;
    const article  = document.createElement('p');
    article.classList.add('card-text');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener('click', (e) => {
  getPosts(renderPosts);
});
const firstName = 'Denis';
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName}`;

const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div');

function getName(serverUrl, firstName) {
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}?name=${firstName}`)
      .then(response => response.json())
      .then(response => createDivResponse(firstName, response.gender));
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getName(serverUrl, input.value);
  input.value = '';
});

function createDivResponse(name, gender) {
  const article = document.createElement('article');
  div.appendChild(article);

  article.textContent = `${name} is ${gender}`;
}
/* function getPost(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split('-');
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(response => response.json(),
    );
  });
}

getPost('user-1').then(response => console.log(response)); */

// ! ПРИМЕР ИСПОЛЬЗОВАНИЯ «async/await»
// Todo. Позволяет писать код визуально в более синхронном виде
// ? Ключевое слово «async» превращает функцию в такую, которая будет ВОЗВРАЩАТЬ ПРОМИС
// ? Ключевое слово «await» как бы замораживает, ставит на ожидание действие, которое идёт после него. 

async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data; // ? Возвращаем данные
}

// Todo. Получаем данные ВНЕ функции «getPost»

getPost(1)
  // .then(data => console.log(data))
  // .catch(error => console.log(error));


// Todo. Также «async, await» позволяет применять конструкцию «TRY/CATCH»

async function getPost2(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
    return Promise.reject(err) // ? Необходимо для того чтобы можно было попасть в «catch» за пределами функции
  }
}

getPost2(1)
  // .then(data => console.log(data))
  // .catch(error => console.log(error));


// Todo. ЕСЛИ НЕОБХОДИМО СДЕЛАТЬ НЕСКОЛЬКО ЗАПРОСОВ

  async function getPost3(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();

      const response2 = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data2 = await response2.json();

      return [data, data2];
    } catch(err) {
      console.log(err);
      return Promise.reject(err) // ? Необходимо для того чтобы можно было попасть в «catch» за пределами функции
    }
  }
  
  getPost3(1)
    .then(data => console.log(data))
    .catch(error => console.log(error));


// Todo. Также мы можем применить «Promise.all»
// ? Это позволит начать выполнять сразу два запроса и даже если один задержистя, то второй выполнится.

async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
  console.log(res1, res2);
}

getAll();
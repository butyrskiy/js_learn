// ? Можно экспортировать каждый элемент по отдельности добавляя перед ним ключевое слово «export»

// export const config = {
//   apiUrl: 'demo.com',
// };

// export function myFunction() {
//   console.log('module1, myFunction');
// }


export const config = {
  apiUrl: 'demo.com',
};

function myFunction() {
  console.log('module1, myFunction');
}

// ? Можно экспортировать сразу все необходимые элементы перечислив их в фигурных скобках
// * export { config, myFunction };

// ? Можно экспортировать элементы с заданными именами
export { config as conf, myFunction as foo };


// export { config as conf, myFunction as foo };

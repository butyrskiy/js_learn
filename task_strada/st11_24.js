/* Ваша задача:
 - Создать массив, в котором будут храниться задачи
 - Использовать методы массива чтобы добавлять и удалять задач
 - Используйте методы массива чтобы вывести все задачи

P.S. Пока не нужно переписывать TODO на объектах на массивы, для этого будет другой день */

const todo = [];

todo.push('Walk a dog');
todo.push('Write a post');
todo.push('Open the door');
todo.push('Listen to music');
todo.unshift('Watch the movie');

todo.pop();
todo.shift();

// console.log(todo);

for(let task of todo) {
  console.log(task);
}
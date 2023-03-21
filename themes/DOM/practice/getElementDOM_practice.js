// ! ЗАДАЧА #1
// Todo. Зная структуру html, с помощью изученных методов получить (в консоль):
// * 1. head
// * 2. body
// * 3. все дочерние элементы body и вывести их в консоль.
// * 4. первый div и все его дочерние узлы
//  * а) вывести все дочерние узлы в консоль
//  * б) вывести в консоль все дочерние узлы, кроме первого и последнего
// ? Для навигации по DOM использовать методы, которые возвращают только элементы

// Todo. #1
// console.log(document.head);

// Todo. #2
// console.log(document.body);

// Todo. #3
// console.log(document.body.children);

// Todo. #4a
// console.log(document.body.firstElementChild.children);

// Todo. #4б
// console.log(document.body.children[2]);


// ! ЗАДАЧА #2
// Todo. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
// * isParent(parent, child);
// * isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

// * isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
// ? Функция принимает только DOM объекты.

const div = document.querySelector('.div');
const mark = document.querySelector('mark');


function isParent(parent, child) {
  let curentParent = child.parentElement; // 
  let isParent = false;

  // ? Проходимся циклом вверх по родителям пока не будет найдено совпадение
  while(curentParent) {
    isParent = parent === curentParent;
    if(isParent) {
      curentParent = null;
    } else {
      curentParent = curentParent.parentElement;
    }
  }
  return isParent;
}
// console.log(isParent(div, mark));


// ! ЗАДАЧА #3 НЕ РЕШИЛ 
// Todo. Получить список всех ссылок, которые не находятся внутри списка ul

const allLinks = document.querySelectorAll('a');

allLinks.forEach(link => {
  // console.log(link.parentElement);
})


// ! ЗАДАЧА #4
// Todo. Найти параграф и получить его текстовое содержимое (только текст!)
const p = document.querySelector('article p');
// console.log(p.textContent);


// ! ЗАДАЧА #5
// Todo. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getInfo(element) {
  const typeNode = element.nodeType;
  const nameNode = element.nodeName;
  const childrenNode = element.children;

  return {
    type: typeNode,
    name: nameNode,
    childrenNode: childrenNode,
  }
}

// console.log(getInfo(p));


// ! ЗАДАЧА #6 
// Todo. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). 
// ? Конечный результат: -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

// ? Преобразование в массив псевдоколлекции
const [...childNodes] = p.childNodes;

childNodes.forEach(node => {
  if(node.nodeType === 3) {
    node.textContent =  '-text-'
  }
})
// console.dir(childNodes);


function cockroachSpeed(s) {
  let ms = s * 27.7777777778;
  return Math.floor(ms);
}

console.log(cockroachSpeed(1.08));
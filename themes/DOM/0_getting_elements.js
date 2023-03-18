// Todo. Метод «querySelector». Получаем один, первый элемент из «DOM»

const div = document.querySelector('div');
// console.log(div); // получаем элемент

// ? получаем в виде объекта
// console.dir(div);


// Todo. Если используем «querySelectorAll» - получаем коллекцию, псевдомассив (NodeList) в котором содержаться все элементы.
// ! Методы массивов не работают, кроме «forEach»

const titles = document.querySelectorAll('h1');
// console.dir(titles); // NodeList(2)

// ? Преобразование в обычный массив
// console.log(Array.from(titles)) // [h1, h1]
// ? Варинт #2 преобразовать в массив
// console.log([...titles]) // [h1, h1]

// ! NodeList - это неживая коллекция(снимок на момент вызова), то есть при изменении в «DOM» NodeList не изменится

// Todo. СВОЙСТВА ДЛЯ ПОЛУЧЕНИЯ СОСЕДНИХ, ВЛОЖЕННЫХ ЭЛЕМЕНТОВ
// ? elem.nextSibling - вернёт следующий узел после элемента
// console.log(div.nextSibling); // так как есть перенос строки, который считается текстовым узлом

// ? elem.nextElementSibling - вернёт следующий ЭЛЕМЕНТ
// console.log(div.nextElementSibling);

// ? elem.firstChild - вернёт первый узел внутри элемента
// console.log(div.firstChild);

// ? elem.firstChild - вернёт первый элемент внутри элемента
// console.log(div.firstElementChild);


// ! Есть УЗЛЫ, которыми могут текст в виде переноса строк, комментарии. И есть ЭЛЕМЕНТЫ - это теги


// Todo. СВОЙСТВА ДЛЯ ПОЛУЧЕНИЯ РОДИТЕЛЬСКИХ ЭЛЕМЕНТОВ
// ? Свойство parentElement возвращает родитель-элемент, а parentNode возвращает «любого родителя». Обычно эти свойства одинаковы: они оба получают родителя.
// console.log(div.parentElement);
// console.log(div.parentNode);

const link = document.querySelector('.link');
// console.log(link.parentElement);

// ? Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.
console.log(link.closest('.content'));
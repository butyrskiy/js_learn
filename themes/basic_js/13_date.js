// ! ВСТРОЕННЫЙ ОБЪЕКТ: Date. Он содержит дату и время, а также предоставляет методы управления ими

// Todo. Для создания нового объекта Date нужно вызвать конструктор new Date()
// ? Вызов без аргументов вернёт текущую дату и время
let now = new Date();
// console.log(now); // ? Tue Apr 04 2023 16:25:58 GMT+0300 (GMT+03:00)


// ? Передаём данные
now = new Date('2020-05-12');
// console.log(now); // ? Tue May 12 2020 03:00:00 GMT+0300 (GMT+03:00)

now = new Date(2020, 4, 12, 22);
// console.log(now); // ? Sat May 12 2020 22:00:00 GMT+0300 (GMT+03:00) (январь - 0)


// Todo. Timestamp - время в миллисекундах с начала 1970 года
// ? Все даты, которые мы создаём это даты в миллисекундах, которые преобразуются в дату и дату также можно преобразовать в миллисекунды

now = new Date(0);
// console.log(now); // ? Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)

// ? Чтобы получить дату до 1970 года используем отрицательные значения
now = new Date(-9999999999999);
// console.log(now); // ? Mon Feb 10 1653 08:09:12 GMT+0155 (GMT+03:00)



// ! МЕТОДЫ ДЛЯ РАБОТЫ С ДАТОЙ

// Todo. ПОЛУЧЕНИЕ КОМПОНЕНТОВ ДАТЫ (геттеры)

now = new Date();
// console.log(now.getFullYear()); // ? 2023 - год
// console.log(now.getMonth()); // ? 3 - апрель
// console.log(now.getDay()); // ? 4 - день недели (четверг)
// console.log(now.getHours()); // ? 21
// console.log(now.getMinutes()); // ? 48
// console.log(now.getSeconds()); // ? 47
// console.log(now.getMilliseconds()); // ? 542
// console.log(now.getDate()); // ? 6 - число месяца

// console.log(now.getTimezoneOffset()); // ? -180 - разница в минутах между текущим часовым поясом и UTC
// console.log(now.getTime()); // ? 1680806968864 - количество миллисекунд прошедшее с 1 января 1970 года

// Todo. Превратить миллисекунды обратно в дату
now = new Date(1680806968864)
// console.log(now) // ? Thu Apr 06 2023 21:49:28 GMT+0300 (GMT+03:00)


// Todo. УСТАНОВКА КОМПОНЕНТОВ ДАТЫ (сеттеры)

now = new Date();
// console.log(now.setHours(18)); // ? 1680793557253
// console.log(now); // ? Thu Apr 06 2023 18:05:57 GMT+0300 (GMT+03:00)
// console.log(now.setFullYear());
// console.log(now.setMonth());
// console.log(now.setDay());
// console.log(now.setMinutes());
// console.log(now.setSeconds());
// console.log(now.setMilliseconds());


// Todo. ПОСЧИТАТЬ РАЗНИЦУ ВО ВРЕМЕНИ МЕЖДУ ДАТАМИ

let start = new Date();

for(let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
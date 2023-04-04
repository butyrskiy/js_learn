// ! Встроенный объект: Date. Он содержит дату и время, а также предоставляет методы управления ими

// Todo. Для создания нового объекта Date нужно вызвать конструктор new Date()

// ? Вызов без аргументов вернёт текущую дату и время
let now = new Date();
// console.log(now); // ? Tue Apr 04 2023 16:25:58 GMT+0300 (GMT+03:00)


// Todo. Создание объекта даты. Обязательны первые два параметра
// ? year должен состоять из четырёх цифр. Для совместимости также принимаются 2 цифры и рассматриваются как 19xx, к примеру, 98 здесь это тоже самое, что и 1998, но настоятельно рекомендуется всегда использовать 4 цифры.
// ? month начинается с 0 (январь) по 11 (декабрь).
// ? Параметр date здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1.
// ? Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.

// new Date(year, month, date, hours, minutes, seconds, ms)


 // Todo. ПОЛУЧЕНИЕ КОМПОНЕНТОВ ДАТЫ
 // ? Существуют методы получения года, месяца и т.д. из объекта Date:

// getFullYear() // ? Получить год (4 цифры)
// getMonth() // ? Получить месяц, от 0 до 11.
// getDay() // ? Получить определённый день недели:
// getDate() // ? Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
// getHours(), getMinutes(), getSeconds(), getMilliseconds() // ? Получить, соответственно, часы, минуты, секунды или миллисекунды.

// console.log(now.getFullYear()); // 2023
// console.log(now.getMonth()); // 3-апрель, так как 0-январь
// console.log(now.getDay()); // 0-воскресенье, 1-пн, 2-вт
// console.log(now.getDate()); // 4
// console.log(now.getHours()); // 16
// console.log(now.getHours()); // 16
// console.log(now.getMinutes()); // 53
// console.log(now.getSeconds()); // 10
// console.log(now.getMilliseconds()); // 729


// Todo. МЕТОД «getTime» возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.
console.log(now.getTime()); // 1680616455294


// Todo. УСТАНОВКА КОМПОНЕНТОВ ДАТЫ
// ? Следующие методы позволяют установить компоненты даты и времени:
// ? У всех этих методов, кроме setTime(), есть UTC-вариант, например: setUTCHours().

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)

now.setFullYear(2030);
// console.log(now); // ? Thu Apr 04 2030 16:58:22 GMT+0300 (GMT+03:00)
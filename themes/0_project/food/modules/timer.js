export { getTimeRemaining, deadline, setClock };

const deadline = '2023-05-12';


// Todo. Функция, которая считает разницу между дедлайном и текущей датой
function getTimeRemaining(endtime) {
  // ? получаем разницу в миллисекундах между текущей датой и дедлайном
  const t = Date.parse(endtime) - Date.parse(new Date());

  // ? Из миллисекунд высчитываем количество дней до нашего дедлайна, при этом округляя до ближайшего целого при помощи «Math.floor»
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  
  // ? Считаем количество часов, минут и секунд
  const hours = Math.floor((t / (1000 * 60 * 60) % 24));
  const minutes = Math.floor((t / (1000 * 60) % 60));
  const seconds = Math.floor((t / 1000) % 60);
  
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
  }
}


// Todo. Функция, которая добавляет «0», в начало числа, если оно меньше 10
function getZero(num) {
  if(num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}


// Todo. Функция, которая размещает данные на странице
function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if(t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

// ? 3-м и последующими аргументами в setTimeout можно передавать параметры, которые будут переданы в функцию

// const timerId = setTimeout((text) => {
//  console.log(text);
// }, 3000, 'Hello world');


// ? Можно передавать готовую функцию
// const timerId = setTimeout(logger, 2000);

// function logger() {
//   console.log('Hello world');
// }
// clearInterval(timerId);


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', () => {
//   timerId = setInterval(logger, 1000);
// })

// function logger() {
//   if(i === 3) {
//     clearInterval(timerId);
//   }

//   console.log('Hello world');
//   i++;
// }


// Todo. Рекурсивный setTimeOut

// let id = setTimeout(function log() {
//   console.log('Hello world!');
  
//   id = setTimeout(log, 500);
// }, 500);


// Todo. Пример

btn.addEventListener('click', myAnimation);

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;

  const id = setInterval(frame, 10);

  function frame() {
    if(pos === 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
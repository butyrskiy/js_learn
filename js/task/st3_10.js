// пример исользования условного ветвления
let colorSignal = 'green';

if(colorSignal !== 'yellow' && colorSignal !== 'red' && colorSignal !== 'green') {
  console.log('Color not find');
}

  else if(colorSignal === 'red') {
  console.log('stop');
} else if(colorSignal === 'yellow') {
  console.log('wait');
} else {
  console.log('go!');
}

// пример исользования оператора «?»
let JavaScript = 'learn';

let result = (JavaScript === 'learn') ? 'Great!' : 'not good';
console.log(result);

// пример исользования условного ветвления и логических операторов #1

let color = 'red';

if(color === 'yellow' || color === 'red') {
  console.log('stop and wait');
} else {
  console.log('go!')
}

// пример исользования условного ветвления и логических операторов #2

let getAnswer = true;
let raiting = 5;

if(getAnswer && raiting >= 4) {
  console.log('Welcome!');
} else console.log('Get out');
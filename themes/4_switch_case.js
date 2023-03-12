// Todo. «Switch case» применяется, если точно известен набор значений в зависимосты от которых нужно что-то сделать. Например, при выборе какого-то значения в «input»

let color = 'green';

switch(color) {
  case 'orange':
    console.log('Color is orange');
    break;
  case 'black':
  case 'green': // если действие для двух кейсов совпадает, то можно их объединить
    console.log('Color is green or black');
    break;
  default:
    console.log('Color in not defined');
}
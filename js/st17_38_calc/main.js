const firstNum = document.querySelector('.firstNumber'),
      secondNum = document.querySelector('.secondNumber'),
      select = document.querySelector('.select'),
      button = document.querySelector('.button');


function calc() {
  
  let operator = select.value;
  let spanResult = document.querySelector('.result');

  const firstOperand = firstNum.value,
        secondOperand = secondNum.value;

  switch(operator) {
    case 'add':
      return spanResult.innerHTML = +firstOperand + +secondOperand;
    case 'multi':
      return spanResult.innerHTML = +firstOperand * +secondOperand;
    case 'subtract':
      return spanResult.innerHTML = +firstOperand - +secondOperand;
    case 'division':
      return spanResult.innerHTML = +firstOperand / +secondOperand;
    default:
      return 'Что-то сломалось';
  }
}

button.addEventListener('click', calc);












































/* function showCalc() {
  const firstOperand = firstNum.value,
        operator = select.value,
        secondOperand = secondNum.value;

  function getResult() {
    switch(operator) {
      case 'add':
        spanResult.textContent = firstOperand + secondOperand;
      case 'multi':
        return firstOperand * secondOperand;
      case 'subtract':
        return firstOperand - secondOperand;
      case 'division':
        return firstOperand / secondOperand;
      default:
        return 'Что-то сломалось';
    }
  }
  button.addEventListener('click', getResult);
}

showCalc();
select.addEventListener('change', showCalc); */


/*   function calc(operation, a, b) {
    if(typeof(a) !== 'number' || typeof(b) !== 'number') {
      return 'Enter number!';
    } 
      else if(operation !== 'add' && operation !== 'multi' && operation !== 'subtract' && operation !== 'division') {
      return 'Invalid operation';
    }
    
    switch(operation) {
      case 'add':
        return a + b;
      case 'multi':
        return a * b;
      case 'subtract':
        return a - b;
      case 'division':
        return a / b;
      default:
        return 'Что-то сломалось';
    }
  } */
export {STATUS, PRIORITY, highForm, lowForm, highInput, lowInput, highTaskList, lowTaskList};

const STATUS = {
  TODO: 'todo',
  DONE: 'done',
}
      
const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

const highForm = document.querySelector('.high_task_form'),
      lowForm = document.querySelector('.low_task_form'),
      highInput = document.querySelector('.high_input'),
      lowInput = document.querySelector('.low_input'),
      highTaskList = document.querySelector('.high_task_list'),
      lowTaskList = document.querySelector('.low_task_list');
const STATUS = {
  TODO: 'Todo',
  DONE: 'Done',
}
      
const PRIORITY = {
  LOW: 'Low',
  HIGH: 'High',
}

const highForm = document.querySelector('.high_task_form'),
      lowForm = document.querySelector('.low_task_form'),
      highInput = document.querySelector('.high_input'),
      lowInput = document.querySelector('.low_input'),
      highTaskList = document.querySelector('.high_task_list'),
      lowTaskList = document.querySelector('.low_task_list');

highForm.addEventListener('submit', addTask);
lowForm.addEventListener('submit', addTask);

highTaskList.addEventListener('click', deleteTask);
lowTaskList.addEventListener('click', deleteTask);

highTaskList.addEventListener('click', checkTask);
lowTaskList.addEventListener('click', checkTask);

let tasks = [];

function addTask(event) {
  event.preventDefault();

  let taskText;
  let priority;

  const highTaskHTML = `<div class="task">
  <input class="radio" type="radio">
  <p class="task_text">${highInput.value}</p>
  <button class="delete_button" type="submit"></button>
</div>`;

  const lowTaskHTML = `<div class="task">
  <input class="radio" type="radio">
  <p class="task_text">${lowInput.value}</p>
  <button class="delete_button" type="submit"></button>
  </div>`;


  if(event.target.classList.value == 'high_task_form') {
    highTaskList.insertAdjacentHTML('beforeend', highTaskHTML);
    taskText = highInput.value;
    priority = PRIORITY.HIGH;
  } else {
    lowTaskList.insertAdjacentHTML('beforeend', lowTaskHTML);
    taskText = lowInput.value;
    priority = PRIORITY.LOW;
  }

  const newTask = {
    id: Date.now(),
    name: taskText,
    status: STATUS.TODO,
    priority: priority,
  }
  
  tasks.push(newTask);
  
  highInput.value = '';
  lowInput.value = '';

  console.log(tasks);
}

function deleteTask(event) {
  if(event.target.className === 'delete_button') {
    const parentNode = event.target.closest('.task');
    const childNode = event.target.previousElementSibling;
    const taskContent = childNode.textContent;

    const index = tasks.findIndex(task => task.name == taskContent);

    tasks.splice(index, 1);
    console.log(tasks);

    parentNode.remove();
  }
}

function checkTask(event) {
  const parentNode = event.target.parentNode;
  if(event.target.className === 'radio') {
    parentNode.classList.toggle('done');
  }
}
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
  let priority;
  let taskText;

  if(event.target.className === 'high_task_form') {
    priority = PRIORITY.HIGH;
    taskText = highInput.value;
  } else {
    priority = PRIORITY.LOW;
    taskText = lowInput.value;
  }

  const newTask = {
    id: Date.now(),
    name: taskText,
    status: STATUS.TODO,
    priority: priority,
  }
  
  tasks.push(newTask);
  render(newTask);
  
  highInput.value = '';
  lowInput.value = '';

  console.log(tasks);
}

function deleteTask(event) {
  if(event.target.className === 'delete_button') {
    const parentNode = event.target.closest('.task');
    const previousElement = event.target.previousElementSibling;
    const taskContent = previousElement.textContent;
    
    const index = searchTaskIndex(taskContent);

    tasks.splice(index, 1);
    parentNode.remove();

    console.log(tasks);
  }
}

function checkTask(event) {
  const parentNode = event.target.parentNode;
  const childNode = parentNode.children[1];
  const taskContent = childNode.textContent;
  
  const index = searchTaskIndex(taskContent);  

  if(event.target.className === 'radio') {
    parentNode.classList.toggle('done');
    tasks[index].status = STATUS.DONE;
  }

  console.log(tasks);
}

function searchTaskIndex(taskContent) {
  const index = tasks.findIndex(task => task.name === taskContent);

    return index;
}

function render(task) {

  const highTaskHTML = `<div class="task">
  <input class="radio" type="radio">
  <p class="task_text">${task.name}</p>
  <button class="delete_button" type="submit"></button>
</div>`;

  const lowTaskHTML = `<div class="task">
  <input class="radio" type="radio">
  <p class="task_text">${task.name}</p>
  <button class="delete_button" type="submit"></button>
  </div>`;


  if(task.priority == PRIORITY.HIGH) {
    highTaskList.insertAdjacentHTML('beforeend', highTaskHTML);
  } else {
    lowTaskList.insertAdjacentHTML('beforeend', lowTaskHTML);
  }
}
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

highForm.addEventListener('submit', addTask);
lowForm.addEventListener('submit', addTask);

highTaskList.addEventListener('click', deleteTask);
lowTaskList.addEventListener('click', deleteTask);

highTaskList.addEventListener('click', checkTask);
lowTaskList.addEventListener('click', checkTask);


let tasks = [];

if(JSON.parse(localStorage.getItem('tasks'))) {
  const response = JSON.parse(localStorage.getItem('tasks'));
  tasks = response;
  
  tasks.forEach(task => {
    render(task, task.status);
  })
}


function addTask(e) {
  e.preventDefault();
  let priority;
  let taskText;

  if(e.target.className === 'high_task_form') {
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
  addToLocalStorage();
  
  highInput.value = '';
  lowInput.value = '';
}


function deleteTask(event) {
  if(event.target.className === 'delete_button') {
    const parentNode = event.target.closest('.task');
    const previousElement = event.target.previousElementSibling;
    const taskContent = previousElement.textContent;

    const index = searchTaskIndex(taskContent);

    tasks.splice(index, 1);
    parentNode.remove();
    addToLocalStorage();
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
    addToLocalStorage();
  }
}

function searchTaskIndex(taskContent) {
  const index = tasks.findIndex(task => task.name === taskContent);
    return index;
}


function render(task, status) {
  console.log(status);

  const highTaskHTML = `<div class="task ${status}">
  <input class="radio" type="radio">
  <p class="task_text">${task.name}</p>
  <button class="delete_button" type="submit"></button>
</div>`;

  const lowTaskHTML = `<div class="task ${status}">
  <input class="radio" type="radio">
  <p class="task_text">${task.name}</p>
  <button class="delete_button" type="submit"></button>
  </div>`;

  if(task.priority === PRIORITY.HIGH) {
    highTaskList.insertAdjacentHTML('afterbegin', highTaskHTML);
  } else {
    lowTaskList.insertAdjacentHTML('afterbegin', lowTaskHTML);
  }
}

function addToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
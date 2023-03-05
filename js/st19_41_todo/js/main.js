const STATUS = {
  TODO: 'Todo',
  DONE: 'Done',
}
      
const PRIORITY = {
  LOW: 'Low',
  HIGH: 'High',
}

const highTaskForm = document.querySelector('.high_task_form'),
      highFormContent = document.querySelector('.high_input'),

      lowTaskForm = document.querySelector('.low_task_form'),
      lowFormContent = document.querySelector('.low_input'),

      highTaskList = document.querySelector('.high_task_list'),
      lowTaskList = document.querySelector('.low_task_list');


let tasks = [];

if(localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(element => renderHigh(element));
  tasks.forEach(element => renderLow(element));
}

highTaskForm.addEventListener('submit', addTaskHigh);
highTaskList.addEventListener('click', deleteTaskHigh);
highTaskList.addEventListener('click', taskDoneHigh);

lowTaskForm.addEventListener('submit', addTaskLow);
lowTaskList.addEventListener('click', deleteTaskLow);
lowTaskList.addEventListener('click', taskDoneLow);



function addTaskHigh(event) {
    event.preventDefault();
    const taskText = highFormContent.value;
  
    const newTask = {
      id: Date.now(),
      name: taskText, 
      status: STATUS.TODO, 
      priority: PRIORITY.HIGH,
    };

    tasks.push(newTask);

    renderHigh(newTask);
  
    highFormContent.value = '';
    highFormContent.focus();

    addLocalStorage();
}

function addTaskLow(event) {
  event.preventDefault();
  const taskText = lowFormContent.value;

  const newTask = {
    id: Date.now(),
    name: taskText, 
    status: STATUS.TODO, 
    priority: PRIORITY.LOW,
  };

  tasks.push(newTask);

  renderLow(newTask);

  lowFormContent.value = '';
  lowFormContent.focus();

  addLocalStorage();
}

function deleteTaskHigh(event) {
  if(event.target.className === 'delete_button') {
    
    const parentNode = event.target.closest('.new_task_high');

    const id = Number(parentNode.id);
    
    const index = tasks.findIndex(elem => id === elem.id);
    
    tasks.splice(index, 1);

    // tasks = tasks.filter(elem => elem.id !== id);

    parentNode.remove();
    // event.target.closest('div').remove();
  }

  addLocalStorage();
}

function deleteTaskLow(event) {
  if(event.target.className === 'delete_button') {
    
    const parentNode = event.target.closest('.new_task_low');

    const id = Number(parentNode.id);
    
    const index = tasks.findIndex(elem => id === elem.id);
    
    tasks.splice(index, 1);

    // tasks = tasks.filter(elem => elem.id !== id);

    parentNode.remove();
    // event.target.closest('div').remove();
  }

  addLocalStorage();
}

function taskDoneHigh(event) {
  if(event.target.className !== 'radio') return
  
  const parentNode = event.target.closest('.new_task_high');
  
  const id = Number(parentNode.id);
  
  const index = tasks.findIndex(elem => elem.id === id);
  
  tasks[index].status = STATUS.DONE;

  const taskTitle = parentNode.querySelector('.task_text');

  taskTitle.classList.toggle('done');

  addLocalStorage();
}

function taskDoneLow(event) {
  if(event.target.className !== 'radio') return
  
  const parentNode = event.target.closest('.new_task_low');
  
  const id = Number(parentNode.id);
  
  const index = tasks.findIndex(elem => elem.id === id);
  
  tasks[index].status = STATUS.DONE;

  const taskTitle = parentNode.querySelector('.task_text');

  taskTitle.classList.toggle('done');

  addLocalStorage();
}

function addLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderHigh(element) {
  let cssClass = 'new_task_high'; 
  
  if(element.status !== STATUS.TODO) {
    cssClass = 'new_task_high done';
  }

  const taskHTML = `<div id="${element.id}" class="${cssClass}">
  <input class="radio" type="radio">
  <p class="task_text">
    ${element.name}
  </p>
  <button class="delete_button" type="submit"></button>
</div>`;

  highTaskList.insertAdjacentHTML('beforeend', taskHTML);
}

function renderLow(element) {
  let cssClass = 'new_task_low'; 
  
  if(element.status !== STATUS.TODO) {
    cssClass = 'new_task_low done';
  }

  const taskHTML = `<div id="${element.id}" class="${cssClass}">
  <input class="radio" type="radio">
  <p class="task_text">
    ${element.name}
  </p>
  <button class="delete_button" type="submit"></button>
</div>`;

  lowTaskList.insertAdjacentHTML('beforeend', taskHTML);
}
import { STATUS, PRIORITY, highForm, lowForm, highInput, lowInput, highTaskList, lowTaskList } from '../modules/constants.js';
import { checkTask, searchTaskIndex } from '../modules/support_functions.js';

export {tasks, time, addToLocalStorage};

highForm.addEventListener('submit', addTask);
lowForm.addEventListener('submit', addTask);

highTaskList.addEventListener('click', deleteTask);
lowTaskList.addEventListener('click', deleteTask);

highTaskList.addEventListener('click', checkTask);
lowTaskList.addEventListener('click', checkTask);


let tasks = [];

const time = new Date();

if(JSON.parse(localStorage.getItem('tasks'))) {
  const response = JSON.parse(localStorage.getItem('tasks'));
  tasks = response;
  
  tasks.forEach(task => {
    render(task);
  })
}


function Task(taskText, status, priority, startTime) {
  this.id = Date.now(),
  this.name = taskText,
  this.status = status,
  this.priority = priority,
  this.startTime = startTime;
  this.finishTime = 'In progress';
  this.leadTime = 'In progress';
}


function addTask(e) {
  e.preventDefault();
  let priority;
  let taskText;
  let startTime = ` ${time.getHours()}:${time.getMinutes()}`;

  if(e.target.className === 'high_task_form') {
    priority = PRIORITY.HIGH;
    taskText = highInput.value;
  } else {
    priority = PRIORITY.LOW;
    taskText = lowInput.value;
  }

  const newTasks = new Task(taskText, STATUS.TODO, priority, startTime);

  tasks.push(newTasks);
  render(newTasks);
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


function render(task) {

  const highTaskHTML = `<div class="task ${task.status}">
  <input class="radio" type="radio">
  <p class="task_text">${task.name}</p>
  <button class="delete_button" type="submit"></button>
  <div class="time">
  <div class="start_time"><p class="time_title">Start time:<span class="time_value">${task.startTime}</span></p></div>
  <div class="finish_time"><p class="time_title">Finish time:<span class="time_value">${task.finishTime}</span></p></div>
  <div class="lead_time"><p class="time_title">Lead time:<span class="time_value">${task.leadTime}</span></p></div>
  </div>
  </div>`;

  const lowTaskHTML = `<div class="task ${task.status}">
  <input class="radio" type="radio">
  <p class="task_text">${task.name}</p>
  <button class="delete_button" type="submit"></button>
  <div class="time">
  <div class="start_time"><p class="time_title">Start time<span class="time_value">${task.startTime}</span></p></div>
  <div class="finish_time"><p class="time_title">Finish time:<span class="time_value">${task.finishTime}</span></p></div>
  <div class="lead_time"><p class="time_title">Lead time:<span class="time_value">${task.leadTime}</span></p></div>
  </div>
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
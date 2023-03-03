const addHighTask = document.querySelector('.add_high_task'),
      addLowTask = document.querySelector('.add_low_task'),
      highInput = document.querySelector('.high_input'),
      lowInput = document.querySelector('.low_input'),
      highButton = document.querySelector('.high_button'),
      lowButton = document.querySelector('.low_button'),
      deleteButton = document.querySelector('.delete_button'),
      newTaskHigh = document.querySelector('.new_task_high');


function addTaskHigh(event) {
  event.preventDefault();
  addHighTask.insertAdjacentHTML('afterend', `<div class="new_task_high">
  <input class="task_radio" type="radio">
  <p class="task_text">
    ${highInput.value}
  </p>
  <button class="delete_button" type="submit"></button>
</div>`);
}

function addTaskLow(event) {
  event.preventDefault();
  addLowTask.insertAdjacentHTML('afterend', `<div class="new_task_low">
  <input class="task_radio" type="radio">
  <p class="task_text">
    ${lowInput.value}
  </p>
  <button class="delete_button" type="submit"></button>
</div>`);
}

function deleteTask(event) {
  if(event.target.className == 'delete_button') {
    event.target.parentElement.remove();
  }
}

function doneTask(event) {
  if(event.target.className == 'task_radio') {
    event.target.parentElement.classList.toggle('done');
  }
}

addHighTask.addEventListener('submit', addTaskHigh);
addLowTask.addEventListener('submit', addTaskLow);
document.addEventListener('click', deleteTask);
document.addEventListener('click', doneTask);
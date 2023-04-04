export {checkTask, searchTaskIndex};
import { tasks, addToLocalStorage } from '../js/main.js';
import { STATUS } from './constants.js';

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
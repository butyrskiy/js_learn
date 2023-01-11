const STATUS = {
    INBOX: 'Inbox',
    IN_PROGRESS: 'In progress',
    TODO: 'To Do',
    DONE: 'Done',
  };
  
  const PRIORITY = {
    DEFAULT: 'Default',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
  };
  
  const ERROR = {
    ERROR_STATUS: 'Неверный статус',
    ERROR_PRIORITY: 'Неверный приоритет',
    ERROR_TASK_NAME: 'Измените имя задачи',
    ERROR_TASK_NOT_FOUND: 'Task not found',
  };
  
  const list = [];
  
  function addTask(nameTask) {
    if(typeof(nameTask) === 'string') {
      list.push({name: nameTask, status: STATUS.INBOX, priority: PRIORITY.DEFAULT});
    } else console.error(ERROR.ERROR_TASK_NAME);
  }
  
  function changeStatus(nameTask, status) {
    let result = list.find(item => item.name === nameTask);
    if(result.name === nameTask) {
      result.status = status;
    } else console.error(ERROR.ERROR_STATUS);
  }
  
  function changePriority(nameTask, priority) {
    let result = list.find(item => item.name === nameTask);
    if(result.name === nameTask) {
      result.priority = priority;
    } else console.error(ERROR.ERROR_STATUS);
  }
  
  function deleteTask(nameTask) {
    let result = list.findIndex(item => item.name === nameTask);
    if(result === -1) {
      console.error(ERROR.ERROR_TASK_NOT_FOUND);
    }
    list.splice(result,1);
  }
  
  function showList(){
    list.forEach(function(item){
        if(item.status == STATUS.IN_PROGRESS) {
            console.log(`In Progress: \n\t ${item.name}`);
        } else if(item.status == STATUS.TODO) {
            console.log(`To Do: \n\t ${item.name}`);
        } else if(item.status == STATUS.DONE) {
            console.log(`Done: \n\t ${item.name}`);
        } else if(item.status === STATUS.INBOX) {
            console.log(`Inbox: \n\t ${item.name}`);
        }
    }) 
  }
  
  addTask('Learn JavaScript');
  addTask('Write a program');
  addTask('Read a post');
  addTask('Change the life');
  addTask('To find a job');
  addTask('Walk a dog');
  
  changeStatus('Learn JavaScript', STATUS.IN_PROGRESS);
  changeStatus('Write a program', STATUS.TODO);
  changeStatus('Change the life', STATUS.IN_PROGRESS);
  changeStatus('To find a job', STATUS.INBOX);
  changeStatus('Walk a dog', STATUS.DONE);
  
  changePriority('Learn JavaScript', PRIORITY.HIGH);
  changePriority('Write a program', PRIORITY.MEDIUM);
  changePriority('Change the life', PRIORITY.HIGH);
  changePriority('To find a job', PRIORITY.HIGH);
  changePriority('Walk a dog', PRIORITY.LOW);
  
  deleteTask('Read a post');
  
  showList();
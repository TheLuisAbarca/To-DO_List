import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../css/bootstrap.min.css';
import '../css/style.css';

import { renderAllTasks } from './render';
import { addListTask, editTaskDesc} from './TaskActions';
/*
import { GetFromLocalStorage } from './LocalStorage';
import StatusCompleted from './statusModule';

const tasks = GetFromLocalStorage();


const ItemsFirstDisplay = () => {
  const taskList = document.querySelector('#task-list');

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    task.index = index;
    taskItem.id = `task-${task.index}`;
    taskItem.className = 'task-item row p-2 justify-content-center align-items-center border-top border-1';
    taskItem.innerHTML = `
         <input class="col-1 task-checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
         <span class="col-9 task-description">${task.description}</span>
         <button class="col-2 text-muted option-Task">
            <i class="fas fa-ellipsis-v"></i>
         </button>
     `;
    taskList.appendChild(taskItem);
  });
  StatusCompleted.completedTDList(tasks);
};

ItemsFirstDisplay();
*/
renderAllTasks();
addListTask();
editTaskDesc();
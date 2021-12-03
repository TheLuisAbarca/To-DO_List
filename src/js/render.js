import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage.js';
import StatusCompleted from './statusModule.js';

const taskList = document.querySelector('#task-list');
let newIndex = -1;
let moveIndex = -1;

function ChangeTaskPosition() {
  if (moveIndex !== newIndex) {
    const tasks = GetFromLocalStorage();
    const tmp = tasks.splice(moveIndex, 1);
    tasks.splice(newIndex, 0, tmp[0]);
    SetOnLocalStorage(tasks);
    renderAllTasks(); // eslint-disable-line no-use-before-define
  }
}

function renderTask(task, index) {
  task.index = index;
  const taskItem = document.createElement('li');
  taskItem.id = `task-${index}`;
  taskItem.className = 'task-item draggable row p-2 justify-content-center align-items-center border-top border-1';
  taskItem.setAttribute('data-index', task.index);
  taskItem.setAttribute('draggable', 'true');
  taskItem.innerHTML = `
         <input class="col-1 task-checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
         <input class="text col-9 task-description text-${task.index}" type="text" value ="${task.description}">
         <button class="col-1 text-muted delete-Task">
          <i class="fas fa-trash-alt"> </i>
         </button>
         <button class="col-1 text-muted option-Task">
          <i class="fas fa-arrows-alt"></i>
         </button>
     `;
  StatusCompleted.completedTDList(taskItem, index);
  taskItem.addEventListener('dragstart', () => { moveIndex = index; });
  taskItem.addEventListener('dragover', () => { newIndex = index; });
  taskItem.addEventListener('dragend', ChangeTaskPosition); // eslint-disable-line no-use-before-define
  taskList.appendChild(taskItem);
}

function renderAllTasks() {
  const tasks = GetFromLocalStorage();
  taskList.innerHTML = '';
  tasks.forEach(renderTask);
  SetOnLocalStorage(tasks);
}

export { renderAllTasks, renderTask };
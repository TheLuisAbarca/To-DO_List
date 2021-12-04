import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage.js';
import StatusCompleted from './statusModule.js';

const taskList = document.querySelector('#task-list');
let newIndex = -1;
let moveIndex = -1;

const classli = 'task-item draggable row pt-2 pb-2 justify-content-center align-items-center border-top border-1';
const classbtnDeleteTask = 'col-1 text-muted delete-Task border border border-1 rounded-pill d-flex justify-content-center';

function ChangeTaskPosition() {
  if (moveIndex !== newIndex) {
    const tasks = GetFromLocalStorage();
    const tmp = tasks.splice(moveIndex, 1);
    tasks.splice(newIndex, 0, tmp[0]);
    SetOnLocalStorage(tasks);
    renderAllTasks(); // eslint-disable-line no-use-before-define
  }
}

function TouchMove(e,taskItem) {
  e.preventDefault();
  /*const touch = event.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target.classList.contains('task-item')) {
    newIndex = Array.from(taskList.children).indexOf(target);
    moveIndex = Array.from(taskList.children).indexOf(event.target);
  }*/
  const touchLocation = e.targetTouches[0];
  taskItem.style.left = `${touchLocation.pageX}px`;
  taskItem.style.top = `${touchLocation.pageY}px`;
}

function TouchEnd(taskItem) {
  /*
  const x = event.changedTouches[0].clientX;
  const y = event.changedTouches[0].clientY;
  */
 const x = parseInt(taskItem.style.left);
 const y = parseInt(taskItem.style.top);
}

function renderTask(task, index) {
  task.index = index;
  const taskItem = document.createElement('li');
  taskItem.id = `task-${index}`;
  taskItem.className = classli;
  taskItem.setAttribute('data-index', task.index);
  taskItem.setAttribute('draggable', 'true');
  taskItem.innerHTML = `
         <input class="col-1 task-checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
         <input class="text col-8 task-description text-${task.index}" type="text" value ="${task.description}">
         <button class="${classbtnDeleteTask}">
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
  taskItem.addEventListener('touchmove', (e) => {TouchMove(e, taskItem)});
  taskItem.addEventListener('touchend', TouchEnd(taskItem));
  taskList.appendChild(taskItem);
}

function renderAllTasks() {
  const tasks = GetFromLocalStorage();
  taskList.innerHTML = '';
  tasks.forEach(renderTask);
  SetOnLocalStorage(tasks);
}

export { renderAllTasks, renderTask };
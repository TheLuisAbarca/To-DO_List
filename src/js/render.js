import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage.js';
import { deleteUniqueTask } from './TaskActions.js'; // eslint-disable-line import/no-cycle
import StatusCompleted from './statusModule.js';// eslint-disable-line import/no-cycle

const taskList = document.querySelector('#task-list');
let newIndex = -1;
let moveIndex = -1;

const classli = 'task-item draggable row pt-2 pb-2 justify-content-center align-items-center border-top border-1';
const classbtnDeleteTask = 'col-1 text-muted delete-Task border border border-1 rounded-pill d-flex justify-content-center';

function countTotalTasks() {
  const tasks = GetFromLocalStorage();
  return tasks.length;
}

function countDoneTasks() {
  const tasks = GetFromLocalStorage();
  let count = 0;
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) {
      count += 1;
    }
  }
  return count;
}

function ChangeTaskPosition() {
  if (moveIndex !== newIndex) {
    const tasks = GetFromLocalStorage();
    const tmp = tasks.splice(moveIndex, 1);
    tasks.splice(newIndex, 0, tmp[0]);
    SetOnLocalStorage(tasks);
    renderAllTasks(); // eslint-disable-line no-use-before-define
  }
}
/*
function TouchMove(e, taskItem) {
  e.preventDefault();
  const touchLocation = e.targetTouches[0];
  taskItem.style.left = `${touchLocation.pageX}px`;
  taskItem.style.top = `${touchLocation.pageY}px`;
}

function TouchEnd(taskItem) {
  const x = parseInt(taskItem.style.left);
  const y = parseInt(taskItem.style.top);
}
*/
function renderTask(task, index) {
  const taskList = document.querySelector('#task-list');
  task.index = index;
  const taskItem = document.createElement('li');
  taskItem.id = `task-${index}`;
  taskItem.className = classli;
  taskItem.setAttribute('data-index', task.index);
  taskItem.setAttribute('draggable', 'true');
  taskItem.innerHTML = `
         <span class="col-2 d-flex justify-content-center align-items-center number-element">${task.index + 1}.-</span>
         <input class="col-1 task-checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
         <input id="text-${task.index}" class="text col-6 task-description text-${task.index} ${task.completed ? 'completed-line' : ''}" type="text" value ="${task.description}">
         <button id="delTask-${task.index}" class="${classbtnDeleteTask}">
          <i class="fas fa-trash-alt"> </i>
         </button>
         <button class="col-1 text-muted option-Task d-flex justify-content-center">
          <i class="fas fa-arrows-alt"></i>
         </button>
     `;
  StatusCompleted.completedTDList(taskItem, index);
  const btnDeleteTask = taskItem.querySelector(`#delTask-${task.index}`);
  const inputText = taskItem.querySelector('.task-description');
  btnDeleteTask.addEventListener('click', deleteUniqueTask(task.index));
  inputText.addEventListener('focusin', () => taskItem.classList.add('bg-edit'));
  inputText.addEventListener('focusout', () => taskItem.classList.remove('bg-edit'));
  taskItem.addEventListener('dragstart', () => { moveIndex = index; });
  taskItem.addEventListener('dragover', () => { newIndex = index; });
  taskItem.addEventListener('dragend', ChangeTaskPosition); // eslint-disable-line no-use-before-define
  /* taskItem.addEventListener('touchmove', (e) => { TouchMove(e, taskItem); });
  taskItem.addEventListener('touchend', TouchEnd(taskItem)); */
  taskList.appendChild(taskItem);
  //return taskItem;
}

function renderAllTasks() {
  const totalCount = document.getElementById('totalTasks');
  totalCount.innerText = countTotalTasks();
  const doneCount = document.getElementById('doneTasks');
  doneCount.innerText = countDoneTasks();
  const tasks = GetFromLocalStorage();
  taskList.innerHTML = '';
  tasks.forEach(renderTask);
  SetOnLocalStorage(tasks);
}

export { renderAllTasks, renderTask };
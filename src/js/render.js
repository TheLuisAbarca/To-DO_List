import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage';
import StatusCompleted from './statusModule';

const taskList = document.querySelector('#task-list');
let newIndex = -1;
let moveIndex = -1;

function ChangeTaskPosition() {
    if (moveIndex !== newIndex) {
        let tasks = GetFromLocalStorage();
        let tmp = tasks.splice(moveIndex, 1);
        tasks.splice(newIndex, 0, tmp[0]);
        SetOnLocalStorage(tasks);
        renderAllTasks();
    }
}

function renderAllTasks() {
    let tasks = GetFromLocalStorage();
    taskList.innerHTML = '';
    tasks.forEach(renderTask);
}

function renderTask(task, index) {
    const taskItem = document.createElement('li');
    taskItem.id = `task-${index}`;
    taskItem.className = 'task-item draggable row p-2 justify-content-center align-items-center border-top border-1';
    taskItem.setAttribute('data-index', task.index);
    taskItem.setAttribute('draggable', 'true');
    taskItem.innerHTML = `
         <input class="col-1 task-checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
         <span class="col-9 task-description">${task.description}</span>
         <button class="col-2 text-muted option-Task">
            <i class="fas fa-ellipsis-v"></i>
         </button>
     `;
    StatusCompleted.completedTDList(taskItem, index);
    taskItem.addEventListener('dragstart', (e) => moveIndex = index);
    taskItem.addEventListener('dragover', (e) => newIndex = index);
    taskItem.addEventListener('dragend', ChangeTaskPosition);
    taskList.appendChild(taskItem);
}
 export {renderAllTasks};
import {GetFromLocalStorage, SetOnLocalStorage} from './LocalStorage';
import {renderAllTasks} from './render';

let tasks = GetFromLocalStorage();

function clearItems() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
};

function taskAdditionMethod(element){
    const task = element.value;
    if (task) {
        const newTask = { index: tasks.length, description: task, completed: false };
        tasks.push(newTask);
        clearItems();
        SetOnLocalStorage(tasks);
        renderAllTasks();
    }
    element.value = '';
}

function addListTask() {
    const inputAddTask = document.getElementById('addTask');
    const btnAddTask = document.getElementById('btnaddTask');
    inputAddTask.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        taskAdditionMethod(inputAddTask);
        event.preventDefault();
      }
    });
    btnAddTask.addEventListener('click', (event) => {
        taskAdditionMethod(inputAddTask);
        event.preventDefault();
    });
  };

export { addListTask };
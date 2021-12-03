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
}


function editTaskDesc() {
    const taskList = document.getElementById('task-list');
    const inputs = document.querySelectorAll('.text');
    inputs.forEach((input, index) => {
      taskList.addEventListener('keydown', (e) => {
        const { value } = e.target;
        const condition = e.target.className.includes(`text-${index}`) && e.key === 'Enter' && value !== '';
        if (condition) {
          tasks[index].description = value;
          taskList.innerHTML = '';
          SetOnLocalStorage(tasks);
          renderAllTasks();
        }
      });
    });
}

function clearAllCompleted() {
  const taskList = document.getElementById('task-list');
  const clearItems = document.getElementById('clr');
  clearItems.addEventListener('click', () => {
    let tasks1 = GetFromLocalStorage();
    tasks = tasks1.filter((task) => !task.completed);
    taskList.innerHTML = '';
    SetOnLocalStorage(tasks);
    renderAllTasks();
  });
};

export { addListTask, editTaskDesc, clearAllCompleted };
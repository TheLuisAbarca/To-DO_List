import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage.js';
import { renderAllTasks } from './render.js';

let tasks = GetFromLocalStorage();

function clearItems() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
}

function taskAdditionMethod(element) {
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
// eslint-disable-next-line no-unused-vars
function deleteTask() {
  const taskList = document.getElementById('task-list');
  const deleteButtons = document.querySelectorAll('.delete-Task');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      tasks.splice(index, 1);
      taskList.innerHTML = '';
      SetOnLocalStorage(tasks);
      renderAllTasks();
    });
  });
}

function clearAllCompleted() {
  const taskList = document.getElementById('task-list');
  const clearItems = document.getElementById('clr');
  clearItems.addEventListener('click', () => {
    const tasks1 = GetFromLocalStorage();
    tasks = tasks1.filter((task) => !task.completed);
    taskList.innerHTML = '';
    SetOnLocalStorage(tasks);
    renderAllTasks();
  });
}

export {
  addListTask,
  editTaskDesc,
  clearAllCompleted,
  deleteTask,
};
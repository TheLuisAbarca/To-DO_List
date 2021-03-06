import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage.js';
import { renderAllTasks } from './render.js'; // eslint-disable-line import/no-cycle

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
    return tasks;
  }
  return false;
}

function addListTask() {
  const inputAddTask = document.getElementById('addTask');
  const btnAddTask = document.getElementById('btnaddTask');
  inputAddTask.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && inputAddTask.value !== '') {
      const temptasks = taskAdditionMethod(inputAddTask);
      inputAddTask.value = '';
      clearItems();
      SetOnLocalStorage(temptasks);
      renderAllTasks();
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
function deleteUniqueTask(index) {
  return () => {
    const tasks = GetFromLocalStorage();
    tasks.splice(index, 1);
    SetOnLocalStorage(tasks);
    renderAllTasks();
  };
}

function deleteTaskObject(index) {
  const tasks = GetFromLocalStorage();
  tasks.splice(index, 1);
  return tasks;
}

// delete task DOM
function deleteTaskDOM(index) {
  const parentTask = document.getElementById('task-list');
  const taskChild = document.getElementById(`task-${index}`);
  parentTask.removeChild(taskChild);
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
  taskAdditionMethod,
  addListTask,
  editTaskDesc,
  clearAllCompleted,
  deleteUniqueTask,
  deleteTaskObject,
  deleteTaskDOM,
};
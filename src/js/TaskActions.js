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
}

function addListTask() {
  const inputAddTask = document.getElementById('addTask');
  const btnAddTask = document.getElementById('btnaddTask');
  inputAddTask.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && inputAddTask.value !== '') {
      let temptasks = taskAdditionMethod(inputAddTask);
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
/*
function deleteUniqueTask(index) {
  const taskList = document.getElementById('task-list');
  const tasks = GetFromLocalStorage();
  console.log(tasks);
  //tasks.splice(index, 1);
  let tasksTemp = tasks.filter((task) => task.index !== index);
  taskList.innerHTML = '';
  SetOnLocalStorage(tasks);
}
*/
/* function deleteUniqueTask() {
  window.addEventListener('click', (e) => {
    const taskList = document.getElementById('task-list');
    console.log(e.target);
    if (e.target && e.target.className.includes('delete-Task')) {
      const id = parseInt(e.target.parentNode.id, 10);
      tasks = tasks.filter((task) => task.index !== id);
      taskList.innerHTML = '';
      SetOnLocalStorage(tasks);
      renderAllTasks();
    }
  });
} */

// eslint-disable-next-line no-unused-vars
/* function deleteTask() {
  const taskList = document.getElementById('task-list');
  const deleteButtons = document.querySelectorAll('.delete-Task');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const tasks = GetFromLocalStorage();
      const tasksTemp = tasks.filter((task) => task.index !== index);
      taskList.innerHTML = '';
      SetOnLocalStorage(tasksTemp);
      renderAllTasks();
    });
  });
} */

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
};
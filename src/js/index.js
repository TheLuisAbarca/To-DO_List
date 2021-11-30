import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../css/bootstrap.min.css';
import '../css/style.css';

const tasks = [
  {
    index: 1,
    description: 'Go to the store',
    completed: false,
  },
  {
    index: 2,
    description: 'Finish my screencast',
    completed: false,
  },
  {
    index: 3,
    description: 'Clean the house',
    completed: true,
  },
  {
    index: 4,
    description: 'Mow the lawn',
    completed: false,
  },
];
const taskList = document.querySelector('#task-list');

tasks.forEach((task) => {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item row p-2 justify-content-center align-items-center border-top border-1';
  taskItem.innerHTML = `
         <input class="col-1" type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
         <span class="col-9 task-description">${task.description}</span>
         <button class="col-2 text-muted option-Task">
            <i class="fas fa-ellipsis-v"></i>
         </button>
     `;
  taskList.appendChild(taskItem);
});
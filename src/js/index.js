const tasks = [
    {
        index: 1,
        description: 'Go to the store',
        completed: false
    },
    {
        index: 2,
        description: 'Finish my screencast',
        completed: false
    },
    {
        index: 3,
        description: 'Clean the house',
        completed: true
    },
    {
        index: 4,
        description: 'Mow the lawn',
        completed: false
    }
];
 const taskList = document.querySelector('#task-list');

 tasks.forEach(task => {
     const taskItem = document.createElement('li');
     taskItem.className = 'task-item';
     taskItem.innerHTML = `
         <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
         <span class="task-description">${task.description}</span>
         <button class="delete-task">Delete</button>
     `;
     taskList.appendChild(taskItem);
 });
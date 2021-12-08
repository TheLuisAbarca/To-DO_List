let tasks = [];

function taskAdditionMethod(element) {
  const task = element.value;
  if (task) {
    const newTask = { index: tasks.length, description: task, completed: false };
    tasks.push(newTask);
    console.log(tasks);
    return tasks;
  }
}


export {
  taskAdditionMethod,
};
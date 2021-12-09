import { SetOnLocalStorage,GetFromLocalStorage } from './LocalStorage.js';
let tasks; 
function mockchecked(obj) {
  const list = GetFromLocalStorage();
  if (obj.chkbxs.checked) {
    list[obj.id].completed = true;
  } else {
    list[obj.id].completed = false;
  } 
  return list;
}

function cleanObjects() {
  const tasks1 = GetFromLocalStorage();
  tasks = tasks1.filter((task) => !task.completed);
  return tasks;
}

function editObjects(index) {
  const editTask = GetFromLocalStorage();
  const inputs = document.getElementById(`text-${index}`);
  tasks[index].description = inputs.value;
  return tasks;
}

export { mockchecked, cleanObjects, editObjects };
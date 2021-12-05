import { SetOnLocalStorage, GetFromLocalStorage } from './LocalStorage.js';
import { renderAllTasks } from './render.js'; // eslint-disable-line import/no-cycle

class StatusCompleted {
  static checked(obj) {
    const list = GetFromLocalStorage();
    if (obj.chkbxs.checked) {
      list[obj.id].completed = true;
      SetOnLocalStorage(list);
      renderAllTasks();
    } else {
      list[obj.id].completed = false;
      SetOnLocalStorage(list);
      renderAllTasks();
    }
  }

  static DoneTaskList(taskDescription) {
    taskDescription.classList.add('completed-line');
  }

  static unDoneTaskList(taskDescription) {
    taskDescription.classList.remove('completed-line');
  }

  static completedTDList(taskItem, index) {
    const item = taskItem.querySelector('.task-checkbox');
    const inpSel = `#text-${index}`;
    const input = taskItem.querySelector(inpSel);
    const baseObj = { chkbxs: item, id: index };
    item.addEventListener('change', () => this.checked(baseObj));
    item.addEventListener('click', () => (item.checked ? this.DoneTaskList(input) : this.unDoneTaskList(input)));
  }
}

export default StatusCompleted;
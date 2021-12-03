import {SetOnLocalStorage, GetFromLocalStorage} from './LocalStorage.js';

class StatusCompleted {
  static checked(obj) {
    const list = GetFromLocalStorage();
    if (obj.chkbxs.checked) {
      list[obj.id].completed = true;
      SetOnLocalStorage(list);
    } else {
      list[obj.id].completed = false;
      SetOnLocalStorage(list);
    }
  }

  static completedTDList(taskItem, index) {
    const item = taskItem.querySelector('.task-checkbox')
    const baseObj = { chkbxs: item, id: index };
    item.addEventListener('change', () => this.checked(baseObj));
  }  
}

export default StatusCompleted;
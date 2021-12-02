import {SetOnLocalStorage, GetFromLocalStorage} from './LocalStorage.js';

class StatusCompleted {
  static checked(obj) {
    if (obj.chkbxs.checked) {
      obj.list[obj.id].completed = true;
      SetOnLocalStorage(obj.list);
    } else {
      obj.list[obj.id].completed = false;
      SetOnLocalStorage(obj.list);
    }
  }

  static completedTDList(taskItem, index) {
    const item = taskItem.querySelector('.task-checkbox')
    const list = GetFromLocalStorage();
    const baseObj = { list, chkbxs: item, id: index };
    item.addEventListener('change', () => this.checked(baseObj));
  }  
}

export default StatusCompleted;
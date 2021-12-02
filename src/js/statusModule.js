import {SetOnLocalStorage} from './LocalStorage.js';

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

  static completedTDList(list) {
    this.checkboxes = document.querySelectorAll('.task-checkbox');
    this.checkboxes.forEach((checkbox, index) => {
      const baseObj = { list, chkbxs: checkbox, id: index };
      checkbox.addEventListener('change', () => this.checked(baseObj));
    });
  }
}

export default StatusCompleted;
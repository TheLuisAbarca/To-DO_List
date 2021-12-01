class StatusCompleted {
  static checked(obj) {
    if (obj.chkbxs.checked) {
      obj.list[obj.id].completed = true;
      this.LSUpdate(obj.list);
    } else {
      obj.list[obj.id].completed = false;
      this.LSUpdate(obj.list);
    }
  }

  static LSUpdate(list) {
    const lsData = JSON.stringify(list);
    localStorage.setItem('To-Do_Tasks', lsData);
  }

  static completedTDList(list) {
    this.checkboxes = document.querySelectorAll('.task-checkbox');
    this.checkboxes.forEach((checkbox, index) => {
      const baseObj = { list, chkbxs: checkbox, id: index };
      checkbox.addEventListener('change', () => this.checked(baseObj));
    });
  }
}

module.exports = StatusCompleted;
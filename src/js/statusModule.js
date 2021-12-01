class StatusCompleted {

    static checked(obj) {
        if (obj.chkbxs.checked) {
            obj.list[obj.id].completed = true;
            this.LS_update(obj.list);
        } else {
            obj.list[obj.id].completed = false;
            this.LS_update(obj.list);
        }
    }

    static LS_update(list) {
        const ls_data = JSON.stringify(list);
        localStorage.setItem('To-Do_Tasks', ls_data);
    }

    static completedTDList(list) {
        this.checkboxes = document.querySelectorAll('.task-checkbox');
        this.checkboxes.forEach((checkbox, index) => {
            const baseObj = {list: list, chkbxs: checkbox, id: index}
            checkbox.addEventListener('change', () => this.checked(baseObj));
        });
    }
}

module.exports = StatusCompleted;
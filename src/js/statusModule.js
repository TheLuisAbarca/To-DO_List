class StatusCompleted {

    static checked(obj) {
        if (obj.chkbxs.checked) {
            obj.list[obj.id].completed = true;
        } else {
            obj.list[obj.id].completed = false;
        }
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
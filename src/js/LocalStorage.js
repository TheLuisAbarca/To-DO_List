import {firstTasks} from './mockData/tasks';

function GetFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('To-Do_Tasks'));
    if (tasks) {
        return tasks;
    }
    return firstTasks;
}

function SetOnLocalStorage(tasks) {
    const lsData = JSON.stringify(tasks);
    localStorage.setItem('To-Do_Tasks', lsData);
}

export {GetFromLocalStorage, SetOnLocalStorage};
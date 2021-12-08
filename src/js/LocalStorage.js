import  {mockLocalStorage, LocalStorageMock} from './mockLocalStorage';

const newLocalStorage = new LocalStorageMock();

function GetFromLocalStorage() {
  const tasks = JSON.parse(newLocalStorage.getItem('To-Do_Tasks'));
  //const tasks = JSON.parse(mockLocalStorage.getItem('To-Do_Tasks'));
  //const tasks = JSON.parse(localStorage.getItem('To-Do_Tasks'));
  if (tasks) {
    return tasks;
  }
  // return firstTasks;
  return [];
}

function SetOnLocalStorage(tasks) {
  const lsData = JSON.stringify(tasks);
  //mockLocalStorage.setItem('To-Do_Tasks', lsData);
  newLocalStorage.setItem('To-Do_Tasks', lsData);
  //localStorage.setItem('To-Do_Tasks', lsData);
}

export { GetFromLocalStorage, SetOnLocalStorage };
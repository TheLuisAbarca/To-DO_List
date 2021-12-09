import { SetOnLocalStorage,GetFromLocalStorage } from './LocalStorage.js';

function mockchecked(obj) {
  const list = GetFromLocalStorage();
  if (obj.chkbxs.checked) {
    list[obj.id].completed = true;
  } else {
    list[obj.id].completed = false;
  }
  return list;
}

export { mockchecked };
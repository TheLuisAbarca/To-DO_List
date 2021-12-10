import { SetOnLocalStorage } from './LocalStorage.js';
import { renderTask } from './render.js';
import { htmlTemplate, LocalStorageMock } from './toolsTest.js';
import {
  mockchecked, cleanObjects, editObjects,
} from './part2.js';

describe('Testing Part2 Task', () => {
  const mockedlocalStorage = new LocalStorageMock();
  describe('Testing Status "Completed"', () => {
    test('should return true if the task is checked', () => {
      const tasks = JSON.parse(mockedlocalStorage.getItem('tasks')) || [];
      const basicBody = document.createElement('div');
      basicBody.innerHTML = htmlTemplate;
      document.body.appendChild(basicBody);
      const taskElement = { index: tasks.length, description: 'Task 1 description', completed: false };
      tasks.push(taskElement);
      mockedlocalStorage.setItem('tasks', JSON.stringify(tasks));
      SetOnLocalStorage(tasks);
      renderTask(taskElement, tasks.length);
      const taskItem = document.querySelector('#task-list li');
      const item = taskItem.querySelector('.task-checkbox');
      item.checked = true;
      const baseObj = { chkbxs: item, id: 0 };
      mockedlocalStorage.setItem('tasks', JSON.stringify(mockchecked(baseObj)));
      const result = JSON.parse(mockedlocalStorage.getItem('tasks'));
      expect(result[0].completed).toBe(true);
    });
  });

  describe('Testing "Clear Completed"', () => {
    test('should clean all the tasks that are market', () => {
      const objectsToClean = [{ index: 0, description: 'Task 1 description', completed: true },
        { index: 1, description: 'Task 1 description', completed: false },
        { index: 2, description: 'Task 1 description', completed: true },
      ];
      mockedlocalStorage.setItem('tasks', JSON.stringify(objectsToClean));
      SetOnLocalStorage(objectsToClean);
      const basicBody = document.createElement('div');
      basicBody.innerHTML = htmlTemplate;
      document.body.appendChild(basicBody);
      const clean = cleanObjects();
      expect(clean.length).toBe(1);
    });
  });
  describe('Testing Editing tasks', () => {
    test('Should test the editing task Object', () => {
      const objectsToEdit = [{ index: 0, description: 'Task 1 description', completed: true }];
      mockedlocalStorage.setItem('tasks', JSON.stringify(objectsToEdit));
      SetOnLocalStorage(objectsToEdit);
      renderTask(objectsToEdit[0], 0);
      const inputs = document.getElementById('text-0');
      inputs.value = 'Edited Task';
      const editing = editObjects(0);
      expect(editing[0].description).toBe('Edited Task');
    });
  });
});
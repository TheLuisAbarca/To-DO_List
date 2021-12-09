import { SetOnLocalStorage,GetFromLocalStorage } from './LocalStorage.js';
import { renderTask } from './render.js';
import { htmlTemplate, LocalStorageMock } from './toolsTest.js';
import { mockchecked, cleanObjects, clearAllCompleted } from './part2.js';
import { taskAdditionMethod, deleteTaskDOM, deleteTaskObject } from './TaskActions';

describe('Testing Part2 Task', () => {
    const mockedlocalStorage = new LocalStorageMock();

    describe('Testing checked method', () => {
        test('should return true if the task is checked', () => {
            const tasks = JSON.parse(mockedlocalStorage.getItem('tasks')) || [];
            const basicBody = document.createElement('div');
            basicBody.innerHTML = htmlTemplate;
            document.body.appendChild(basicBody);
            const taskElement = { index: tasks.length, description: 'Task 1 description', completed: false};
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
        test('Editing Task', () => {
            
        });
      
        describe('Testing the clear function', () => {
            test('should clean all the tasks that are market', () => {
            const objectsToClean = [ { index: 0, description: 'Task 1 description', completed: true }, 
            { index: 1, description: 'Task 1 description', completed: false },
            { index: 2, description: 'Task 1 description', completed: true },
         ];
            mockedlocalStorage.setItem('tasks', JSON.stringify(objectsToClean));
            SetOnLocalStorage(objectsToClean);
            const clean = cleanObjects();
            expect(clean.length).toBe(1);
          });
        });
           
        
    });


});
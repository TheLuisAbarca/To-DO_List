import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage.js';
import {  renderTask } from './render.js';
//import { taskAdditionMethod } from "./TaskActionsObjects";
import { taskAdditionMethod, deleteTaskDOM, deleteTaskObject } from "./TaskActions";

  const htmlTemplate = `
  <div>
    <input id="addTask" type="text" name="task" placeholder="Add to your list...">
    <button id="btnaddTask">
      <i class="fas fa-level-down-alt fa-rotate-90 hidden-mobile"></i>
      <i class="fas fa-plus shown-mobile"></i>
    </button>
  </div>
  <div>
      <ul id="task-list"></ul>
  </div>`;
class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }

    getAll() {
      console.log(this.store);
    }
  }
  
global.mockedlocalStorage = new LocalStorageMock;

describe("TaskActions", () => {
    /*beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
          value: fakeLocalStorage,
        });
    });*/
    describe("Add Tests", () => {
      /**
      * @jest-environment jsdom
      */
      test("should add a task to the list Object", () => {
        let tasks = JSON.parse(mockedlocalStorage.getItem("tasks")) || [];
        const taskObjElement = {
            value: "Task 1 description",
        };
        tasks = taskAdditionMethod(taskObjElement);
        expect(tasks.length).toBe(1);
      });

      /**
      * @jest-environment jsdom
      */
      test("should add a task to the list DOM", () => {
          //mocking the localStorage 
          let tasks = JSON.parse(mockedlocalStorage.getItem("tasks")) || [];
          const basicBody = document.createElement('div');
          basicBody.innerHTML = htmlTemplate;
          document.body.appendChild(basicBody);
          const taskElement = {
            index: tasks.length,
            description: "Task 1 description",
            completed: false,
          };
          renderTask(taskElement, tasks.length);
          const toDoList = document.querySelectorAll('#task-list li');
          expect(toDoList).toHaveLength(1);
      });
    });

    describe("Delete Tests", () => {
      /**
      * @jest-environment jsdom
      */
       test("should remove a task to the list Object", () => {
        const tasksListObject = [];
        let task1 =  { index: 0, description: "Task 1 description", completed: false}
        tasksListObject.push(task1);
        mockedlocalStorage.setItem('task', JSON.stringify(tasksListObject));
        let task2 =  { index: 1, description: "Task 2 description", completed: false}
        tasksListObject.push(task2);
        mockedlocalStorage.setItem('task', JSON.stringify(tasksListObject));
        SetOnLocalStorage(tasksListObject);
        const todo = deleteTaskObject(1);
        mockedlocalStorage.setItem('task', JSON.stringify(todo));
        const tasks = JSON.parse(mockedlocalStorage.getItem('task'));
        expect(tasks.length).toBe(1);
      });

      /**
      * @jest-environment jsdom
      */
      test("should remove a task to the list DOM", () => {
        //We know that the task has been added to the list from the previous test
        //so we are going to delete it from the DOM.
        deleteTaskDOM(0);
        const toDoListAfterDelete = document.querySelectorAll('#task-list li');
        expect(toDoListAfterDelete).toHaveLength(0);
      });
    });
});


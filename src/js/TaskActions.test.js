import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage.js';
import {  renderTask } from './render.js';
//import { taskAdditionMethod } from "./TaskActionsObjects";
import { taskAdditionMethod, deleteTaskDOM, deleteUniqueTask } from "./TaskActions";

/*

const fakeLocalStorage = (function () {
    let store = {};
  
    return {
      getItem: function (key) {
        return store[key] || null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      removeItem: function (key) {
        delete store[key];
      },
      clear: function () {
        store = {};
      }
    };
  })();*/

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
  }
  
global.mockedlocalStorage = new LocalStorageMock;

describe("TaskActions", () => {
    /*beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
          value: fakeLocalStorage,
        });
    });*/
    /**
    * @jest-environment jsdom
    */
    test("should add a task to the list Object", () => {
        let tasks = [];
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
        //let tasks = [];
        /*let tasks = [
          { index: 0, description: "Task 1 description", completed: false},
          { index: 1, description: "Task 2 description", completed: false}
        ];*/
        //let tasks = GetFromLocalStorage();
        let tasks = JSON.parse(mockedlocalStorage.getItem("tasks")) || [];
        const basicBody = document.createElement('div');
        basicBody.innerHTML = htmlTemplate;
        document.body.appendChild(basicBody);
        /*const btnAddTask = document.getElementById('btnaddTask');
        console.log(btnAddTask);*/
        const taskElement = {
          index: tasks.length,
          description: "Task 1 description",
          completed: false,
        };
        renderTask(taskElement, tasks.length);
        const toDoList = document.querySelectorAll('#task-list li');
        expect(toDoList).toHaveLength(1);
    });

    test("should renmove a task to the list Object and DOM", () => {
     
      let task1 =  { index: 0, description: "Task 1 description", completed: false}
      mockedlocalStorage.setItem('task', JSON.stringify(task1));
      let task2 =  { index: 1, description: "Task 2 description", completed: false}
      mockedlocalStorage.setItem('task', JSON.stringify(task2));
      deleteUniqueTask(1);
      const tasks = JSON.parse(mockedlocalStorage.getItem('task'));
      expect(tasks.length).toHaveLength(1);
    });
});


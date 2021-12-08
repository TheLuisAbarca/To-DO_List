import { GetFromLocalStorage, SetOnLocalStorage } from './LocalStorage.js';
import { renderAllTasks } from './render.js';
//import { taskAdditionMethod } from "./TaskActionsObjects";
import { taskAdditionMethod } from "./TaskActions";

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
  })();

describe("TaskActions", () => {
     beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
          value: fakeLocalStorage,
        });
    });
    
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
    /*
    it("should add a task to the list DOM", () => {
        const task = {
            index: 1,
            description: "Task 1 description",
            completed: false
        };
        document.body.innerHTML = `
            <div>
                <ul id="task-list"></ul>
            </div>`;
        addListTask();
        expect(addListTask(task)).toEqual(expectedAction);
    });
    it("should delete a task from the list", () => {
        const task = {
        id: 1,
        name: "Task 1",
        description: "Task 1 description",
        status: "todo"
        };
        const expectedAction = {
        type: "DELETE_UNIQUE_TASK",
        task
        };
        expect(deleteUniqueTask(task)).toEqual(expectedAction);
    });*/
});
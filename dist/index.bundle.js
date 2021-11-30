/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
const tasks = [
    {
        index: 1,
        description: 'Go to the store',
        completed: false
    },
    {
        index: 2,
        description: 'Finish my screencast',
        completed: false
    },
    {
        index: 3,
        description: 'Clean the house',
        completed: true
    },
    {
        index: 4,
        description: 'Mow the lawn',
        completed: false
    }
];
 const taskList = document.querySelector('#task-list');

 tasks.forEach(task => {
     const taskItem = document.createElement('li');
     taskItem.className = 'task-item';
     taskItem.innerHTML = `
         <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
         <span class="task-description">${task.description}</span>
         <button class="delete-task">Delete</button>
     `;
     taskList.appendChild(taskItem);
 });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQ0FBZ0M7QUFDeEYsMENBQTBDLGlCQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1ET19MaXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhc2tzID0gW1xuICAgIHtcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR28gdG8gdGhlIHN0b3JlJyxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmRleDogMixcbiAgICAgICAgZGVzY3JpcHRpb246ICdGaW5pc2ggbXkgc2NyZWVuY2FzdCcsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5kZXg6IDMsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xlYW4gdGhlIGhvdXNlJyxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZGV4OiA0LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ01vdyB0aGUgbGF3bicsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9XG5dO1xuIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICB0YXNrSXRlbS5jbGFzc05hbWUgPSAndGFzay1pdGVtJztcbiAgICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1jaGVja2JveFwiICR7dGFzay5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+RGVsZXRlPC9idXR0b24+XG4gICAgIGA7XG4gICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
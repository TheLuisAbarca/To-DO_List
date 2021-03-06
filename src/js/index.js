import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../css/bootstrap.min.css';
import '../css/style.css';

import { renderAllTasks } from './render';
import {
  addListTask, clearAllCompleted, editTaskDesc,
} from './TaskActions';

renderAllTasks();
addListTask();
editTaskDesc();
clearAllCompleted();
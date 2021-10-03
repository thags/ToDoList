<<<<<<< HEAD
import {toDoObject} from "./todoObject";
import './styles.css';
import './PubSub.js'

let item1 = new toDoObject("Make this project", "the odin project", "Soon", "1", "default");
item1.display();
let item2 = new toDoObject("test", "the odin project", "Soon", "1", "test");
item2.display();


PubSub.publish('pageLoaded', null);
=======
import {todoObject} from './todoitems.js';
import './sub.js';
import PubSub from 'pubsub-js';
import './styles.css';

//const item1 = new todoObject("project", "Odin project", "tomorrow", 1, "in progress", 'default');
//new todoObject("project", "Odin project", "tomorrow", 1, "Finished", 'default');

const projectSubmitButton = document.querySelector('#addProjectButton');
projectSubmitButton.addEventListener('click', function(){PubSub.publish('projectAdded', document.querySelector("#newProject").value)});
const ToDoSubmitButton = document.querySelector('#addToDoButton');
ToDoSubmitButton.addEventListener('click', function(){PubSub.publish('ToDoAddedFromUI')});
PubSub.publish('pageLoaded');
>>>>>>> refs/remotes/origin/main

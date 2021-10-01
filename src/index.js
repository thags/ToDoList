import todoObject from './todoitems.js';
import './sub.js';
import PubSub from 'pubsub-js';
import './styles.css';

const item1 = new todoObject("project", "Odin project", "tomorrow", 1, "in progress", 'default');
new todoObject("project", "Odin project", "tomorrow", 1, "Finished", 'default');

const submitButton = document.querySelector('#addProjectButton');
submitButton.addEventListener('click', function(){PubSub.publish('projectAdded', document.querySelector("#newProject").value)})
PubSub.publish('pageLoaded');
import PubSub from 'pubsub-js';
import {addToArray} from './storage.js';
import {createSideBar, createToDoCards} from './DOM.js'

//New todo object added
PubSub.subscribe('toDoAdded', addToArray);

//New project add
PubSub.subscribe('projectAdded', addToArray);

//Page loaded
PubSub.subscribe('pageLoaded', createSideBar);
PubSub.subscribe('pageLoaded', createToDoCards);
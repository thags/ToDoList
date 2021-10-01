import PubSub from 'pubsub-js';
import {addToArray} from './storage.js';
import {createSideBar, createToDoCards, showProjectPopup, addToProjectList, hideProjectPopup} from './DOM.js'

//New todo object added
PubSub.subscribe('toDoAdded', addToArray);

//New project add
PubSub.subscribe('projectAdded', addToArray);
PubSub.subscribe('projectAdded', addToProjectList);
PubSub.subscribe('projectAdded', hideProjectPopup);

//Page loaded
PubSub.subscribe('pageLoaded', createSideBar);
PubSub.subscribe('pageLoaded', createToDoCards);

//add project button clicked
PubSub.subscribe('addProjectClicked', showProjectPopup);

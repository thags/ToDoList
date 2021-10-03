import PubSub from 'pubsub-js';
import {addToArray} from './storage.js';
import {addToDoFromUI} from './todoitems.js';
import {createSideBar, 
    createToDoCards, 
    showProjectPopup, 
    addToProjectList, 
    hideProjectPopup, 
    showAddToDoPopUp, 
    hideAddToDoPopUp,
    createNewToDoCard,} from './DOM.js';

//New todo object added
PubSub.subscribe('toDoAdded', addToArray);
PubSub.subscribe('toDoAdded', createNewToDoCard);
PubSub.subscribe('addToDoClicked', showAddToDoPopUp);
PubSub.subscribe('ToDoAddedFromUI', addToDoFromUI);
PubSub.subscribe('ToDoAddedFromUI', hideAddToDoPopUp);

//New project add
PubSub.subscribe('projectAdded', addToArray);
PubSub.subscribe('projectAdded', addToProjectList);
PubSub.subscribe('projectAdded', hideProjectPopup);

//Page loaded
PubSub.subscribe('pageLoaded', createSideBar);
PubSub.subscribe('pageLoaded', createToDoCards);

//add project button clicked
PubSub.subscribe('addProjectClicked', showProjectPopup);

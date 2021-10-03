import PubSub from 'pubsub-js';
import {createToDoFromUI} from "./todoObject.js";
import {displayCard, deleteCard, changeDisplay} from './todoCardsDOM.js';
import {addToProjectListDOM, createAddProjectButton, createAddToDoButton} from './projectsDOM.js';
import {createDarkBackground, 
    createAddProjectForm, 
    changeProjectFormDisplay, 
    createAddToDoForm, 
    changeToDoFormDisplay, 
    createToDoCardPopUp,
    changeCardPopUpDisplay} from './popUpDOM.js';
import projects from "./projects.js";
import {addToDoLocalStorage, addProjectLocalStorage} from "./localStorage.js";
import checkStorage from './checkLocalStorage.js';

///page loaded for first time
PubSub.subscribe('pageLoaded', createDarkBackground);
PubSub.subscribe('pageLoaded', createAddProjectButton);
PubSub.subscribe('pageLoaded', createAddToDoButton);
PubSub.subscribe('pageLoaded', createAddProjectForm);
PubSub.subscribe('pageLoaded', createAddToDoForm);
PubSub.subscribe('pageLoaded', createToDoCardPopUp);
PubSub.subscribe('pageLoaded', checkStorage);

//new ToDo created
PubSub.subscribe("toDoCreated", addToDoLocalStorage);

//create new todo card
PubSub.subscribe('createToDodisplay', displayCard);


//delete a card
PubSub.subscribe('deleteToDodisplay', deleteCard);
//delte a todo
PubSub.subscribe("deletedToDo", addToDoLocalStorage);

//add a project
PubSub.subscribe('createProject', addToProjectListDOM);
PubSub.subscribe('createdNewProject', addProjectLocalStorage);

//Add project button pressed
PubSub.subscribe('addProjectButtonPressed', changeProjectFormDisplay);

//submit project button pressed
PubSub.subscribe("submitProjectButtonPressed", changeProjectFormDisplay);
PubSub.subscribe('submitProjectButtonPressed', function(msg, project){new projects(project)});

//project name clicked
PubSub.subscribe("projectNameClicked", changeDisplay);

//todo submit button pressed
PubSub.subscribe("submitToDoButtonPressed", createToDoFromUI);
PubSub.subscribe('submitToDoButtonPressed', changeToDoFormDisplay);
//add to do button pressed
PubSub.subscribe('addToDoButtonPressed', changeToDoFormDisplay);

//display the full card
PubSub.subscribe("fullDisplay", changeCardPopUpDisplay);
//exit the card info display
PubSub.subscribe("exitCardInfo",changeCardPopUpDisplay )
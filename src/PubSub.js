import PubSub from 'pubsub-js';
import {createToDoFromUI} from "./todoObject.js";
import {displayCard, deleteCard, changeDisplay} from './todoCardsDOM.js';
import {addToProjectListDOM, createAddProjectButton, createAddToDoButton} from './projectsDOM.js';
import {createDarkBackground, createAddProjectForm, changeProjectFormDisplay, createAddToDoForm, changeToDoFormDisplay} from './popUpDOM.js';
import projects from "./projects.js";


///page loaded for first time
PubSub.subscribe('pageLoaded', createDarkBackground);
PubSub.subscribe('pageLoaded', createAddProjectButton);
PubSub.subscribe('pageLoaded', createAddToDoButton);
PubSub.subscribe('pageLoaded', createAddProjectForm);
PubSub.subscribe('pageLoaded', createAddToDoForm);
PubSub.subscribe('pageLoaded', function(){new projects("default")});

//create new todo card
PubSub.subscribe('createToDodisplay', displayCard);


//delete a card
PubSub.subscribe('deleteToDodisplay', deleteCard);

//add a project
PubSub.subscribe('createProject', addToProjectListDOM);

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
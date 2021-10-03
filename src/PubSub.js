import PubSub from 'pubsub-js';
import {displayCard, deleteCard, changeDisplay} from './todoCardsDOM.js';
import {addToProjectListDOM, createAddProjectButton} from './projectsDOM.js';
import {createDarkBackground, createAddProjectForm, changeProjectFormDisplay} from './popUpDOM.js';
import projects from "./projects.js";


///page loaded for first time
PubSub.subscribe('pageLoaded', createDarkBackground);
PubSub.subscribe('pageLoaded', createAddProjectButton);
PubSub.subscribe('pageLoaded', createAddProjectForm);
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
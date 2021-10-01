import PubSub from 'pubsub-js';
import {displayCard, deleteCard} from './todoCardsDOM.js';
import {addToProjectListDOM} from './projectsDOM.js';

//create new todo card
PubSub.subscribe('createToDodisplay', displayCard);


//delete a card
PubSub.subscribe('deleteToDodisplay', deleteCard);

//add a project
PubSub.subscribe('createProject', addToProjectListDOM);
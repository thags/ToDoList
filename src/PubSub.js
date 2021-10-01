import PubSub from 'pubsub-js';
import {displayCard, deleteCard} from './todoCardsDOM.js';

//create new todo card
PubSub.subscribe('createToDodisplay', displayCard);


//delete a card
PubSub.subscribe('deleteToDodisplay', deleteCard);
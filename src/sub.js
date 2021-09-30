import PubSub from 'pubsub-js';
import addToArray from './storage.js';

//New todo object added
PubSub.subscribe('toDoAdded', addToArray);
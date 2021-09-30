import PubSub from 'pubsub-js';

//Stores the toDo objects and categories
let todoArray = [];

const addToArray = function (msg, data){
    switch(msg){
        case 'toDoAdded':
            todoArray.push(data);
            console.log(todoArray);
            break;
    }
}

PubSub.subscribe('toDoAdded', addToArray);